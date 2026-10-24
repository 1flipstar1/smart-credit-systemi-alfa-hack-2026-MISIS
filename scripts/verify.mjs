import {launchBrowser} from './browser.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const root = path.resolve('output/bank-ui-study');
const browser = await launchBrowser();
const page = await browser.newPage();
const errors = [];
const checks = [];
const typography = [];
page.on('pageerror', e => errors.push(e.message));
const assert = (value, message) => { if (!value) throw Error(message); };
try {
    await page.goto(pathToFileURL(path.join(root, 'alfa-credit-concepts.html')).href);
    await page.getByRole('heading', {name:'Одна система. Разные сценарии.', level:1}).waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert(await page.evaluate(() => document.fonts.check('500 24px "Styrene UI"')), 'Styrene UI is not loaded');
    assert((await page.locator('h1').evaluate(el => getComputedStyle(el).fontFamily)).includes('Styrene UI'), 'Heading font');
    assert(await page.locator('main > section').count() === 1, 'Expected only the information block');
    assert(await page.locator('nav, input, .gallery, .wizard, .result').count() === 0, 'Concept UI remains');
    assert(await page.getByRole('link', {name:'Официальная документация ↗'}).getAttribute('href') === 'https://core-ds.github.io/core-components/master/?path=/docs/intro--docs', 'Documentation link');
    for (const width of [1440, 720, 390]) {
        await page.setViewportSize({width, height:1000});
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
        assert(!overflow, `Information block overflow at ${width}`);
        checks.push({width, overflow});
        if (width === 390) await page.screenshot({path:path.join(root, 'information-mobile.png'), fullPage:true});
    }
    await page.setViewportSize({width:1440, height:1000});
    await page.screenshot({path:path.join(root, 'gallery-core-components.png'), fullPage:true});
    // Block network access: standalone pages must use the embedded font files.
    await page.route(/^https?:/, route => route.abort());
    const prototype = pathToFileURL(path.resolve('output/prototype/alfa-credit-cabinet.html')).href;
    const scenarios = ['home', 'params', 'company', 'docs', 'review', 'status', 'adm', 'adm-card', 'adm-analytics']
        .map(route => ({route}));
    for (const status of ['expert','approved','counter','needinfo','refused','signing','issued']) {
        scenarios.push({route:status === 'signing' ? 'sign' : status === 'issued' ? 'done' : 'status', status});
    }
    for (const {route, status} of scenarios) {
        await page.goto(`${prototype}#${route}`);
        if (status) await page.evaluate(({route,status}) => {
            ensureApp();
            S.app.status = status;
            S.app.offer = {amount:3000000,term:24,rate:14,collat:false};
            S.route = route;
            S.ui.confetti = 1;
            render();
        }, {route,status});
        await page.evaluate(() => document.fonts.ready);
        const brokenImages = await page.evaluate(async () => {
            const images = [...document.images];
            const results = await Promise.all(images.map(image => image.decode().then(() => null,
                () => image.alt || 'Illustration failed to decode')));
            return results.filter(Boolean);
        });
        assert(brokenImages.length === 0, `${route}: ${brokenImages.join(', ')}`);
        for (const weight of [400, 500, 700]) {
            assert(await page.evaluate(async weight => {
                const faces = await document.fonts.load(`${weight} 24px "Styrene UI"`);
                return faces.length > 0 && faces.every(face => face.status === 'loaded');
            }, weight), `Embedded Styrene UI ${weight} is not loaded`);
        }
        for (const width of [1440, 720, 390]) {
            await page.setViewportSize({width, height:1000});
            const result = await page.evaluate(() => {
                const issues = [];
                const valid = new Set(['11/16','12/16','13/16','14/18','14/20','16/20','16/24','18/24',
                    '20/24','20/28','24/32','26/32','30/36','32/40','34/40','40/48','48/64']);
                for (const el of document.querySelectorAll('body *')) {
                    if (!el.getClientRects().length || ['SCRIPT','STYLE'].includes(el.tagName) ||
                        ![...el.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim())) continue;
                    const css = getComputedStyle(el);
                    const pair = `${parseFloat(css.fontSize)}/${parseFloat(css.lineHeight)}`;
                    if (!valid.has(pair)) issues.push({text:el.textContent.slice(0,60), pair});
                    if (css.fontFamily.includes('Onest')) issues.push({text:'Onest remains'});
                    if (css.fontFamily.includes('Styrene UI') && !css.fontFeatureSettings.includes('ss01')) {
                        issues.push({text:el.textContent.slice(0,60), feature:css.fontFeatureSettings});
                    }
                }
                return {issues, overflow:document.documentElement.scrollWidth > innerWidth};
            });
            assert(result.issues.length === 0, `${route} at ${width}: ${JSON.stringify(result.issues)}`);
            assert(!result.overflow, `${route} overflows at ${width}`);
            typography.push({route, ...(status ? {status} : {}), width, ...result});
            if (route === 'home' && [1440,390].includes(width)) {
                await page.screenshot({path:path.resolve(`output/prototype/typography-${width}.png`), fullPage:true, animations:'disabled'});
            }
        }
    }
    await page.goto(pathToFileURL(path.resolve('output/credit-minimal/index.html')).href);
    await page.setViewportSize({width:1440, height:1000});
    await page.evaluate(() => Promise.all([...document.images].map(image => image.decode())));
    await page.screenshot({path:path.resolve('output/credit-minimal/gallery.png'), fullPage:true});
    assert(errors.length === 0, errors.join('\n'));
    fs.writeFileSync(path.join(root, 'verification-core-components.json'), JSON.stringify({checks, typography, informationOnly:true, javascriptErrors:errors}, null, 2));
    console.log('PASS: information block, embedded fonts, cabinet typography, responsive checks, no JavaScript errors');
} finally {
    await browser.close();
}

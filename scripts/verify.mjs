import {launchBrowser} from './browser.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {auditTypography} from './typography-audit.mjs';

const root = path.resolve('output/bank-ui-study');
const browser = await launchBrowser();
const page = await browser.newPage({reducedMotion:'reduce'});
const errors = [];
const checks = [];
const typography = [];
const navigation = [];
page.on('pageerror', e => errors.push(e.message));
const assert = (value, message) => { if (!value) throw Error(message); };
try {
    for (const file of ['src/prototype.html','src/layout.css','src/credit-sections.css','scripts/illustration-gallery.mjs']) {
        assert(!/(?:font-size|line-height)\s*:/.test(fs.readFileSync(file,'utf8')), `${file}: use installed typography styles instead of independent font metrics`);
    }
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
        const type = await auditTypography(page);
        assert(type.issues.length === 0, `Information typography: ${JSON.stringify(type.issues)}`);
        typography.push({route:'information',width,...type});
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
        console.log(`Checking cabinet: ${route}${status ? ` / ${status}` : ''}`);
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
            // Off-screen lazy images otherwise leave decode() pending indefinitely.
            images.forEach(image => { image.loading = 'eager'; });
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
            const result = await auditTypography(page);
            assert(result.issues.length === 0, `${route} at ${width}: ${JSON.stringify(result.issues)}`);
            assert(!result.overflow, `${route} overflows at ${width}`);
            typography.push({route, ...(status ? {status} : {}), width, ...result});
            if (route === 'home' && [1440,390].includes(width)) {
                await page.screenshot({path:path.resolve(`output/prototype/typography-${width}.png`), fullPage:true, animations:'disabled'});
            }
        }
    }
    const states = [
        ...[0,1,2,3].map(faq => ({name:`home-faq-${faq}`,route:'home',faq})),
        {name:'lead-errors',route:'home',leadErrors:true},
        {name:'params-line',route:'params',goal:'gap'},
        {name:'params-secured',route:'params',goal:'equip'},
        {name:'company-loading',route:'company',company:'loading'},
        {name:'company-empty',route:'company',company:'empty'},
        {name:'docs-manual',route:'docs',docs:{passport:'manual',statement:'none',decl:'checking'}},
        {name:'status-declined',route:'status',status:'declined'},
        {name:'status-processing',route:'status',status:'review',stage:1},
        {name:'approved-differential',route:'status',status:'approved',ui:{payDif:true}},
        {name:'need-info-uploaded',route:'status',status:'needinfo',ui:{needUploaded:true}},
        ...['b','c'].map(counterPick => ({name:`counter-option-${counterPick}`,route:'status',status:'counter',ui:{counterPick}})),
        ...[0,1,2,3].map(docSel => ({name:`bank-documents-${docSel}`,route:'adm-card',tab:1,docSel})),
        ...['approve','counter','info','refuse'].map(dtype => ({name:`bank-decision-${dtype}`,route:'adm-card',tab:2,dtype})),
        {name:'login-dialog',route:'home',action:'login'},
        {name:'decline-dialog',route:'status',status:'counter',action:'declineOffer'},
        ...[0,1,2,3].map(doc => ({name:`contract-dialog-${doc}`,route:'sign',status:'signing',doc})),
        {name:'signature-dialog',route:'sign',status:'signing',action:'signStart'},
        {name:'signature-error',route:'sign',status:'signing',action:'signStart',codeError:true},
        {name:'issuing-dialog',route:'sign',status:'issuing',issue:true},
        {name:'early-payment-dialog',route:'done',status:'issued',action:'earlyPay'},
        {name:'toast-with-action',route:'home',toast:true},
    ];
    for (const state of states) {
        await page.evaluate(state => {
            closeModal(true);
            document.querySelector('#toasts').innerHTML = '';
            S = fresh();
            if (['status','sign','done','adm-card'].includes(state.route)) {
                ensureApp();
                S.app.status = state.status || 'expert';
                S.app.offer = {amount:3000000,term:24,rate:14,collat:false};
                if (state.stage !== undefined) S.app.stage = state.stage;
            }
            if (state.ui) Object.assign(S.ui,state.ui);
            Object.assign(S.adm, {tab:state.tab || 0, docSel:state.docSel || 0, dtype:state.dtype || 'counter'});
            if (state.company) S.company.state = state.company;
            if (state.docs) Object.assign(S.docs,state.docs);
            if (state.goal) F().goal = state.goal;
            if (state.faq !== undefined) S.faq = state.faq;
            if (state.leadErrors) { F().inn = ''; F().phone = ''; }
            S.route = state.route;
            S.role = state.route.startsWith('adm') ? 'bank' : 'client';
            S.ui.confetti = 1;
            render();
            if (state.action) ACT[state.action]();
            if (state.doc !== undefined) ACT.openDoc({v:String(state.doc)});
            if (state.issue) issue();
            if (state.codeError) { document.querySelector('#code').value = '000000'; ACT.signConfirm(); }
            if (state.toast) toast('Статус заявки обновлён','Можно продолжить оформление','info',{label:'Открыть',fn:()=>{}});
        },state);
        if (state.leadErrors) await page.locator('#lead-btn').click();
        for (const width of [1440,720,390]) {
            await page.setViewportSize({width,height:1000});
            const result = await auditTypography(page);
            assert(result.issues.length === 0, `${state.name} at ${width}: ${JSON.stringify(result.issues)}`);
            if (result.overflow) {
                await page.screenshot({path:path.resolve('output/prototype/verification-overflow.png'),fullPage:true,animations:'disabled'});
                const outside = await page.evaluate(() => [...document.querySelectorAll('body *')].filter(el => {
                    if (!el.getClientRects().length || el.getBoundingClientRect().right <= innerWidth) return false;
                    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
                        if (['auto','scroll','hidden','clip'].includes(getComputedStyle(p).overflowX)) return false;
                    }
                    return true;
                }).map(el => ({tag:el.tagName,class:el.getAttribute('class'),text:el.textContent.slice(0,70),right:el.getBoundingClientRect().right})).slice(-12));
                throw Error(`${state.name} overflows at ${width}: ${JSON.stringify(outside)}`);
            }
            typography.push({route:state.route,state:state.name,width,...result});
        }
    }
    await page.evaluate(() => { closeModal(true); document.querySelector('#toasts').innerHTML = ''; });
    // A fresh client context: verify actual browser history and the built-in offline catalog.
    const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    const nav = await context.newPage();
    nav.on('pageerror', e => errors.push(e.message));
    await nav.route(/^https?:/, route => route.abort());
    await nav.goto(prototype);
    const at = async route => {
        await nav.waitForFunction(route => S.route === route && location.hash === '#' + route, route);
        navigation.push(route);
    };
    await at('home');
    assert(await nav.locator('.credit-step').count() === 3, 'Expected three reference steps');
    const catalogSize = JSON.parse(fs.readFileSync('credit_cabinet_backend/app/db/credit_catalog.json')).products.length;
    assert(await nav.locator('.credit-kind').count() === 6, 'Expected five credit groups and the final matching card');
    assert(await nav.evaluate(() => offerProducts().length) === catalogSize, 'Offline data differs from database seed');
    assert(await nav.locator('#credit-offers, [data-test-id="credit-catalog"]').count() === 0, 'Removed all-offers block remains');
    assert(await nav.evaluate(() => document.querySelector('#credit-howto').nextElementSibling?.id === 'credit-lead'), 'Lead form is not directly below the steps');
    assert(await nav.locator('.credit-kind').last().getAttribute('data-test-id') === 'credit-match', 'Matching card is not last');
    await nav.locator('#lead-inn').fill('123');
    await nav.locator('#lead-btn').click();
    await nav.getByText('ИНН — 10 цифр для ООО или 12 для ИП',{exact:true}).waitFor();
    await nav.getByText('Введите номер полностью',{exact:true}).waitFor();
    await nav.locator('#lead-inn').fill('772512345678');
    await nav.locator('#lead-phone').fill('89991234567');
    assert(await nav.locator('#lead-phone').inputValue() === '+7 (999) 123-45-67', 'Lead form phone formatting');
    await nav.locator('#lead-btn').click();
    await at('company');
    assert(await nav.evaluate(() => F().inn === '772512345678' && F().phone === '+7 (999) 123-45-67'), 'Lead values were not kept');
    await nav.goBack();
    await at('home');
    assert(await nav.locator('#lead-phone').inputValue() === '+7 (999) 123-45-67', 'Back lost lead form values');
    await nav.locator('[data-go="params"]').first().click();
    await at('params');
    await nav.locator('#amt').press('Home');
    for (let i = 0; i < 5; i++) await nav.locator('#amt').press('ArrowRight');
    await nav.locator('[data-a="toCompany"]').click();
    await at('company');
    await nav.goBack();
    await at('params');
    assert(await nav.locator('#amt').inputValue() === '5', 'Browser Back lost the entered amount');
    await nav.goBack();
    await at('home');
    await nav.goForward();
    await at('params');
    await nav.goForward();
    await at('company');
    await nav.reload();
    await at('company');
    assert(await nav.evaluate(() => F().ai) === 5, 'Reload lost the entered amount');
    await nav.evaluate(() => { go('home'); window.scrollTo(0,600); });
    await nav.waitForFunction(() => history.state?.y === 600);
    await nav.evaluate(() => go('params'));
    await nav.goBack();
    await at('home');
    assert(await nav.evaluate(() => Math.abs(scrollY - 600) < 2), 'Back lost the home scroll position');
    await nav.locator('[data-test-id="credit-match"] button').click();
    await at('params');
    await nav.goBack();
    await at('home');
    // Catalog data and product presets remain available although the all-offers UI is removed.
    await nav.evaluate(() => ACT.pickOffer({v:'overdraft'}));
    await at('params');
    assert(await nav.evaluate(() => F().offerCode === 'overdraft' && F().goal === 'gap' && F().term === 12), 'Selected product did not reach the application');
    assert(await nav.evaluate(() => bePayload().product_code) === 'overdraft', 'Selected product did not reach the API payload');
    await nav.goBack();
    await at('home');
    await nav.evaluate(() => { go('params'); go('company'); go('docs'); });
    await at('docs');
    await nav.goBack();
    await at('company');
    await nav.goBack();
    await at('params');
    await nav.goForward();
    await at('company');
    const length = await nav.evaluate(() => history.length);
    await nav.evaluate(() => go('company'));
    assert(await nav.evaluate(() => history.length) === length, 'Same-screen navigation added a duplicate history entry');
    await nav.evaluate(() => { location.hash = 'admin'; });
    await at('adm');
    assert(await nav.evaluate(() => S.role) === 'bank', 'History lost the bank role');
    await nav.goBack();
    await at('company');
    assert(await nav.evaluate(() => S.role) === 'client', 'History lost the client role');
    await nav.goto(`${prototype}#unknown-route`);
    await at('home');
    for (const width of [1440,720,390]) {
        await nav.setViewportSize({width,height:1000});
        await nav.evaluate(() => { window.scrollTo(0,0); });
        await nav.addStyleTag({content:'.demobar {position:relative}'});
        await nav.locator('#credit-howto').screenshot({path:path.resolve(`output/prototype/how-to-${width}.png`),animations:'disabled'});
        await nav.locator('#credit-kinds').screenshot({path:path.resolve(`output/prototype/credit-kinds-${width}.png`),animations:'disabled'});
        await nav.locator('#credit-lead').screenshot({path:path.resolve(`output/prototype/credit-lead-${width}.png`),animations:'disabled'});
        const overlaps = await nav.locator('.credit-conditions dd').evaluateAll(nodes => nodes.some(node => node.scrollWidth > node.clientWidth + 1));
        assert(!overlaps, `Credit conditions overlap at ${width}`);
    }
    await context.close();
    await page.goto(pathToFileURL(path.resolve('output/illustrations/index.html')).href);
    for (const width of [1440,720,390]) {
        await page.setViewportSize({width,height:1000});
        const result = await auditTypography(page);
        assert(result.issues.length === 0, `Illustration gallery at ${width}: ${JSON.stringify(result.issues)}`);
        assert(!result.overflow, `Illustration gallery overflows at ${width}`);
        typography.push({route:'illustration-gallery',width,...result});
    }
    await page.setViewportSize({width:1440, height:1000});
    await page.evaluate(() => Promise.all([...document.images].map(image => image.decode())));
    await page.screenshot({path:path.resolve('output/illustrations/gallery.png'), fullPage:true});
    assert(errors.length === 0, errors.join('\n'));
    fs.writeFileSync(path.join(root, 'verification-core-components.json'), JSON.stringify({checks, typography, navigation, catalogSize,
        typographySource:'@alfalab/core-components-vars/typography.css',
        textBlocksChecked:typography.reduce((n,t)=>n+t.textBlocks+t.fields+t.placeholders,0), javascriptErrors:errors}, null, 2));
    console.log('PASS: installed typography across screens, fields, dialogs and errors; lead placement, matching card, responsive layout, catalog data, browser history, no JavaScript errors');
} finally {
    await browser.close();
}

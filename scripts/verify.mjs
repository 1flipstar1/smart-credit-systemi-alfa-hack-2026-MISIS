import {chromium} from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const root = path.resolve('output/bank-ui-study');
const browser = await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page = await browser.newPage();
const errors = [];
const checks = [];
page.on('pageerror', e => errors.push(e.message));
const assert = (value, message) => { if (!value) throw Error(message); };
try {
    await page.goto(pathToFileURL(path.join(root, 'alfa-credit-concepts.html')).href);
    await page.getByRole('heading', {name:'Одна система. Разные сценарии.', level:1}).waitFor();
    await page.evaluate(() => document.fonts.ready);
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
    assert(errors.length === 0, errors.join('\n'));
    fs.writeFileSync(path.join(root, 'verification-core-components.json'), JSON.stringify({checks, informationOnly:true, javascriptErrors:errors}, null, 2));
    console.log('PASS: information block, documentation link, 3 responsive checks, no JavaScript errors');
} finally {
    await browser.close();
}

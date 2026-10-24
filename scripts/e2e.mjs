// End-to-end: client and bank in separate browser contexts, synchronised only through the API.
// Needs the API + document worker (default http://localhost:8000) and `npm run dev` (http://127.0.0.1:4173).
import {launchBrowser} from './browser.mjs';

const site = process.env.SITE_URL || 'http://127.0.0.1:4173/';
const api = process.env.API_URL || 'http://localhost:8000';
const timeout = 20000;
const step = (text) => console.log('·', text);
const assert = (value, message) => { if (!value) throw Error(message); };
const PDF = Buffer.from('%PDF-1.4\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\n');

const browser = await launchBrowser();
const errors = [];
try {
    const open = async (hash) => {
        const page = await (await browser.newContext()).newPage();
        page.on('pageerror', (e) => errors.push(e.message));
        await page.goto(site + hash);
        await page.getByText('API подключён').waitFor({timeout});
        return page;
    };
    const client = await open('#params');
    step('API найден, клиент на шаге параметров');

    await client.locator('[data-a="toCompany"]').click();
    await client.locator('[data-a="lookup"]').click();
    await client.getByText('ИП Смирнова Анна Викторовна').waitFor({timeout});
    await client.locator('[data-a="toDocs"]').click();
    await client.waitForFunction(() => S.be.draftId, null, {timeout});
    const id = await client.evaluate(() => S.be.draftId);
    step(`черновик создан в API: ${id}`);

    await client.locator('#file').setInputFiles({name:'supply_contract.pdf', mimeType:'application/pdf', buffer:PDF});
    await client.getByText('supply_contract.pdf', {exact:true}).waitFor({timeout});
    await client.waitForFunction(() => S.uploads.some((u) => !['queued', 'processing'].includes(u.status)), null, {timeout});
    step(`документ обработан worker: ${await client.evaluate(() => S.uploads[0].status)}`);

    await client.locator('[data-go="review"]').first().click();
    await client.locator('label[for="c2"]').click();
    await client.locator('[data-a="submit"]').click();
    await client.getByText('Заявку смотрит специалист').first().waitFor({timeout});
    assert(await client.evaluate(() => S.app.backendId) === id, 'Submitted application differs from the draft');
    step('заявка отправлена, конвейер передал её аналитику');

    const bank = await open('#adm');
    const number = await client.evaluate(() => S.app.id.replace('КЗ-2026-', 'КЗ-'));
    await bank.locator(`tr[data-v="${id}"]`).click();
    await bank.getByRole('heading', {name:`КЗ-2026-${number.slice(3)}`}).waitFor({timeout});
    await bank.locator('[data-a="admTab"][data-v="2"]').first().click();
    await bank.locator('[data-a="dtype"][data-v="counter"]').click();
    await bank.locator('[data-a="sendDecision"]').click();
    await bank.getByText('Решение отправлено', {exact:true}).waitFor({timeout});
    step(`банк в отдельном окне открыл ${number} и предложил другие условия`);

    await client.getByText('Готовы выдать кредит — немного иначе').waitFor({timeout});
    step('клиент увидел встречное предложение через опрос API');
    await client.locator('[data-a="acceptOpt"]').click();
    await client.getByRole('heading', {name:'Подписание документов'}).waitFor({timeout});
    for (let i = 0; i < 4; i++) {
        await client.locator(`[data-a="openDoc"][data-v="${i}"]`).click();
        await client.locator('[data-a="markRead"]').click();
        await client.locator('#modal').waitFor({state:'detached'});
    }
    await client.locator('[data-a="signStart"]').click();
    await client.locator('#code').fill('123456');
    await client.getByText('Деньги на счёте').waitFor({timeout});
    step('документы подписаны, деньги выданы');

    const app = await (await fetch(`${api}/api/applications/${id}`)).json();
    assert(app.status === 'issued', `API status is ${app.status}`);
    const events = await (await fetch(`${api}/api/applications/${id}/events`)).json();
    const path = events.filter((e) => e.to_status).map((e) => e.to_status).join(' → ');
    assert(path === 'draft → review → counter → signing → issuing → issued', `Unexpected status path: ${path}`);
    step(`в API: ${path}`);

    await client.reload();
    await client.getByText('Деньги на счёте').waitFor({timeout});
    step('после перезагрузки страницы состояние сохранено');
    assert(errors.length === 0, errors.join('\n'));
    console.log('PASS: сквозной сценарий клиент → банк → клиент через API');
} finally {
    await browser.close();
}

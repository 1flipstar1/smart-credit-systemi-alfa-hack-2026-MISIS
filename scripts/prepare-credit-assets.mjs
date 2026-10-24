// Delivery conversion only: keep generated PNG originals and their alpha intact.
import fs from 'node:fs';
import path from 'node:path';
import {launchBrowser} from './browser.mjs';

const root = 'output/illustrations';
const dest = 'src/assets/illustrations';
const source = JSON.parse(fs.readFileSync(`${root}/generation.json`, 'utf8'));
fs.mkdirSync(dest, {recursive:true});
const browser = await launchBrowser();
const page = await browser.newPage();
try {
    for (const item of source.images) {
        const url = `data:image/png;base64,${fs.readFileSync(`${root}/${item.original || `originals/${item.name}.png`}`).toString('base64')}`;
        const result = await page.evaluate(async ({url, size}) => {
            const image = new Image();
            image.src = url;
            await image.decode();
            const ratio = Math.min(1, size / Math.max(image.width, image.height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(image.width * ratio);
            canvas.height = Math.round(image.height * ratio);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let transparent = 0;
            for (let i=3; i<pixels.length; i+=4) if (pixels[i] === 0) transparent++;
            return {url:canvas.toDataURL('image/webp', 0.9), width:canvas.width, height:canvas.height, transparent};
        }, {url, size:item.name === 'case' ? 1000 : 512});
        if (!result.transparent) throw Error(`Missing transparency: ${item.name}`);
        fs.writeFileSync(`${dest}/${item.name}.webp`, Buffer.from(result.url.split(',')[1], 'base64'));
        item.delivery = {file:`${item.name}.webp`, width:result.width, height:result.height, transparentPixels:result.transparent};
    }
} finally {
    await browser.close();
}
fs.writeFileSync(`${root}/generation.json`, JSON.stringify(source, null, 2));
const cards = source.images.map(item => `<figure><div><img src="../../${dest}/${item.name}.webp" alt="${item.name}"></div><figcaption>${item.name}</figcaption></figure>`).join('');
fs.writeFileSync(`${root}/index.html`, `<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Иллюстрации кредитного кабинета</title><style>body{margin:32px;background:#f3f4f5;color:#28282b;font:16px system-ui}h1{font-size:28px}main{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}figure{margin:0;background:white;border-radius:24px;padding:20px}figure div{height:220px;display:grid;place-items:center}figure:first-child div{background:#171719;border-radius:16px}img{width:100%;height:100%;object-fit:contain}figcaption{margin-top:12px}</style><h1>Иллюстрации кредитного кабинета</h1><p>Объёмные формы · красные акценты · стекло и металл · по промореференсам и интерфейсам банка</p><main>${cards}</main></html>`);
console.log(`Prepared ${source.images.length} illustrations, preserved transparency, generated gallery`);

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
console.log(`Prepared ${source.images.length} illustrations with transparency. Run npm run build to refresh the gallery.`);

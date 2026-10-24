import fs from 'node:fs';
import {expandTypography} from './typography.mjs';

export function writeIllustrationGallery(fontCss, typographyVars) {
    const source = JSON.parse(fs.readFileSync('output/illustrations/generation.json','utf8'));
    const colors = fs.readFileSync('node_modules/@alfalab/core-components-vars/colors-bluetint.css','utf8');
    const escape = value => value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const cards = source.images.map(({name}) => `<figure><div><img src="../../src/assets/illustrations/${escape(name)}.webp" alt="${escape(name)}"></div><figcaption>${escape(name)}</figcaption></figure>`).join('');
    const css = expandTypography(`
        body{margin:32px;background:var(--color-light-base-bg-secondary);color:var(--color-light-text-primary);@mixin paragraph_primary_medium;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
        h1{margin:0 0 24px;@mixin headline_medium;}
        p{margin:0 0 24px;@mixin paragraph_primary_medium;}
        main{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:20px}
        figure{margin:0;background:var(--color-light-base-bg-primary);border-radius:24px;padding:20px}
        figure div{height:220px;display:grid;place-items:center}
        figure:first-child div{background:var(--color-light-base-bg-primary-inverted);border-radius:16px}
        img{width:100%;height:100%;object-fit:contain}
        figcaption{margin-top:12px;@mixin paragraph_primary_small;}
        @media(max-width:720px){body{margin:16px}h1{@mixin headline-mobile_medium;}}
    `);
    fs.writeFileSync('output/illustrations/index.html',`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Иллюстрации кредитного кабинета</title><style>${fontCss}\n${typographyVars}\n${colors}\n${css}</style></head><body><h1>Иллюстрации кредитного кабинета</h1><p>Объёмные формы · красные акценты · стекло и металл · по промореференсам и интерфейсам банка</p><main>${cards}</main></body></html>`);
}

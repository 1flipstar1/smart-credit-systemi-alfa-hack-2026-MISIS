import fs from 'node:fs';
import {build} from 'esbuild';
import {expandTypography} from './typography.mjs';
const out='output/bank-ui-study';
fs.mkdirSync(out,{recursive:true});
const result=await build({entryPoints:['src/app.tsx'],bundle:true,write:false,minify:true,outdir:'build',loader:{'.woff2':'dataurl','.woff':'dataurl','.ttf':'dataurl','.svg':'dataurl'},define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles.find(f=>f.path.endsWith('.js')).text.replaceAll('</script','<\/script');
const css=result.outputFiles.find(f=>f.path.endsWith('.css'))?.text||'';
fs.writeFileSync(`${out}/alfa-credit-concepts.html`,`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Alfa Core Components · Информация</title><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`);
console.log('Built standalone Core Components information block');
const fonts = await build({entryPoints:['src/fonts.css'],bundle:true,write:false,minify:true,loader:{'.woff2':'dataurl'}});
const fontCss = fonts.outputFiles[0].text;
const vars = fs.readFileSync('node_modules/@alfalab/core-components-vars/typography-vars.css','utf8');
const illustrationManifest = JSON.parse(fs.readFileSync('src/assets/illustrations/manifest.json','utf8'));
const illustrations = Object.fromEntries(Object.entries(illustrationManifest.assets).map(([key, file]) =>
    [key, `data:image/webp;base64,${fs.readFileSync(`src/assets/illustrations/${file}`).toString('base64')}`]));
const prototype = expandTypography(fs.readFileSync('src/prototype.html','utf8')
    .replace('/* CREDIT_ILLUSTRATIONS */{}', JSON.stringify(illustrations)))
    .replace('/* CORE_TYPOGRAPHY */', `${fontCss}\n${vars}`);
fs.mkdirSync('output/prototype',{recursive:true});
fs.writeFileSync('output/prototype/alfa-credit-cabinet.html',prototype);
console.log('Built standalone credit cabinet with official typography mixins and embedded Styrene UI');

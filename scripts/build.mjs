import fs from 'node:fs';
import {build} from 'esbuild';
const out='output/bank-ui-study';
fs.mkdirSync(out,{recursive:true});
const result=await build({entryPoints:['src/app.tsx'],bundle:true,write:false,minify:true,outdir:'build',loader:{'.woff2':'dataurl','.woff':'dataurl','.ttf':'dataurl','.svg':'dataurl'},define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles.find(f=>f.path.endsWith('.js')).text.replaceAll('</script','<\/script');
const css=result.outputFiles.find(f=>f.path.endsWith('.css'))?.text||'';
fs.writeFileSync(`${out}/alfa-credit-concepts.html`,`<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Alfa Core Components · Информация</title><style>${css}</style></head><body><div id="root"></div><script>${js}</script></body></html>`);
console.log('Built standalone Core Components information block');

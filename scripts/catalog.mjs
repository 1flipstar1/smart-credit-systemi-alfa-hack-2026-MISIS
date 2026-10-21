import fs from 'node:fs';
import path from 'node:path';
const base='node_modules/@alfalab';
const root='docs/core-components';
fs.mkdirSync(`${root}/api`,{recursive:true});
const meta=JSON.parse(fs.readFileSync(`${base}/core-components/package.json`,'utf8'));
const manifest={version:meta.version,source:'https://github.com/core-ds/core-components',packages:[]};
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const name of fs.readdirSync(base).filter(n=>n.startsWith('core-components')).sort()){
 const dir=`${base}/${name}`;const pkg=JSON.parse(fs.readFileSync(`${dir}/package.json`,'utf8'));
 const types=walk(dir).filter(f=>f.endsWith('.d.ts'));const target=`${root}/api/${name}`;
 for(const file of types){const dest=path.join(target,path.relative(dir,file));fs.mkdirSync(path.dirname(dest),{recursive:true});fs.copyFileSync(file,dest);}
 manifest.packages.push({name:pkg.name,version:pkg.version,path:dir,types:types.map(f=>path.relative(dir,f).replaceAll('\\','/'))});
}
fs.writeFileSync(`${root}/manifest.json`,JSON.stringify(manifest,null,2));
fs.writeFileSync(`${root}/COMPONENTS.md`,'# Полный каталог установленной Core Components\n\nВерсия метапакета: '+meta.version+'. Все параметры и комментарии скопированы в api/. Полный список файлов каждого пакета — manifest.json. Для поиска props используйте rg в соответствующем каталоге; проверяйте Component.d.ts, typings.d.ts и наследуемые типы.\n\n| Пакет | Версия | API |\n|---|---|---|\n'+manifest.packages.map(p=>{const folder=p.name.split('/')[1];const entry=p.types.find(f=>f==='index.d.ts')||p.types[0];return `| ${p.name} | ${p.version} | [${p.types.length} файлов](api/${folder}/${entry}) |`;}).join('\n')+'\n');
console.log(`Catalog: ${manifest.packages.length} packages, ${manifest.packages.reduce((n,p)=>n+p.types.length,0)} declaration files`);

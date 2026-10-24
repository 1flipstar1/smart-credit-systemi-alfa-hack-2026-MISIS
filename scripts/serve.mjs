import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
// Serves generated pages; "/" opens the credit cabinet, which finds the API at http://localhost:8000.
const root=path.resolve('output');
const types={'.html':'text/html; charset=utf-8','.png':'image/png','.webp':'image/webp','.json':'application/json'};
http.createServer((req,res)=>{const name=decodeURIComponent((req.url||'/').split('?')[0]);const route=name==='/'?'/prototype/alfa-credit-cabinet.html':name==='/alfa-credit-concepts.html'?'/bank-ui-study/alfa-credit-concepts.html':name;const file=path.resolve(root,'.'+route);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}try{const data=fs.readFileSync(file);res.setHeader('Cache-Control','no-store');res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data)}catch{res.writeHead(404).end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('Кредитный кабинет с иллюстрациями: http://127.0.0.1:4173'));

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('output/bank-ui-study');
http.createServer((req,res)=>{const name=decodeURIComponent((req.url||'/').split('?')[0]);const file=path.resolve(root,'.'+(name==='/'?'/alfa-credit-concepts.html':name));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return}try{const data=fs.readFileSync(file);res.setHeader('Content-Type',file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.png')?'image/png':'application/octet-stream');res.end(data)}catch{res.writeHead(404).end('Not found')}}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173'));

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve(process.cwd());
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    const requestPath = new URL(req.url ?? '/', 'http://127.0.0.1').pathname;
    let file = resolve(root, `.${requestPath === '/' ? '/index.html' : requestPath}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}).listen(4173, '127.0.0.1', () => {
  console.log('Árvore local: http://127.0.0.1:4173');
});

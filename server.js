const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};
const server = http.createServer((req, res) => {
  // Strip query string or hash parameters
  const cleanUrl = req.url.split(/[?#]/)[0];
  let filePath = path.join(__dirname, cleanUrl === '/' ? 'index.html' : cleanUrl);
  
  // Guard against directory traversal
  const relative = path.relative(__dirname, filePath);
  const isSafe = relative && !relative.startsWith('..') && !path.isAbsolute(relative);
  
  if (cleanUrl !== '/' && !isSafe) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  const extname = path.extname(filePath);
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, private'
      });
      res.end(content, 'utf-8');
    }
  });
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Improved error handling
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (err) {
    console.error('Error processing request:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
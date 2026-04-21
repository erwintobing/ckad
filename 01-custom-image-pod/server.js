const http = require('http');
const host = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello World!');
});
server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});

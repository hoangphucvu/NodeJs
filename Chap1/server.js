/*
* @Author: phuc.ngo
* @Date:   2016-09-26 13:10:42
* @Last Modified by:   phuc.ngo
* @Last Modified time: 2016-09-26 13:11:32
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
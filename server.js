const http = require('http');
const url = require('url');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = require('./controller.js');
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
})
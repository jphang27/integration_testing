const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    let service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    //GET Endpoint
    if(reqUrl.pathname == '/calculator' && req.method === 'GET'){
        console.log('Request Type:' + req.method + ' Endpoint: ' + reqUrl.pathname);

        service.calculatorRequest(req,res);
    }
});
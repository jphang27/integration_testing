const url = require('url');

// exports.calculatorRequest = function (req, res){
//     const reqUrl = url.parse(req.url, true);
//     let name = 'World';
//     if(reqUrl.query.name){
//         name = reqUrl.query.name;
//     }

//     let response = {
//         "text": "Hello " + name
//     };

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(response));
// };

exports.calculatorRequest = function (req, res){
    const reqUrl = url.parse(req.url, true);
    let q = "";
    if(reqUrl.query.q){
        q = reqUrl.query.q;
    }
    //const arr = q.split; //split the string and turn it into an array and store it in arr.
    const num1 = parseInt(q);
    // const num2;

    let response = {
        answer: num1 + num1
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};
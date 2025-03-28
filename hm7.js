// write node js script to request server to display json data on browser
var h = require('http');
h.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj = {'name':'xyz','age':30,'city':'New York'};
    res.write(JSON.stringify(obj));
    res.end();
}).listen(5000);
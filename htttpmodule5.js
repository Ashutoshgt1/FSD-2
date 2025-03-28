var  h = require('http');
h.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1 style="color : red;">Hello World</h1>');
    res.end();
}).listen(5001);
// htttpmodule5.js
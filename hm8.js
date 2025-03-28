// write node js script to request server to display image on browser
var h = require('http');
var f= require('fs');
data=f.readFileSync("3.png");
h.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'image/png'});
    res.write(data);
    res.end();
}).listen(5000);
var  h = require('http');
h.createServer((req,res)=>{
if(req.url=='/'){    
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>Home page</h1><br/><a href='/'>Home</a><br/><a href='/about'>About</a><br/>");
    res.end();
}
else if(req.url=='/about'){
    res.end('<b><i>This is about page</i></b>')
}
else{
    res.writeHead(404,{'content-type':'text/plain'})
    res.end('page not found');
}
}).listen(5001);
// htttpmodule5.js
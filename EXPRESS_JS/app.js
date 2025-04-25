var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.get('/process_get',(req,res)=>{
    firstname=req.query.fname;
    res.send(`Welcome<h1 style="color:red">${firstname}<h1/>`);
});
app.listen(5006);

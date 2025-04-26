// to take a text area and submit button
//  after clicking oin submit button the content of
//   text area should be represented on next page the 
//   message in the text area are comma seperated
const express = require('express');
const app = express();
app.use(express.static(__dirname,{index:'exp12.html'}));
app.get('/message',(req,res)=>{
    data=req.query.tarea;
    a=data.split(',')
    for(x in a){
        res.write(a[x]+"\n")
    }
    res.send();
}).listen(3000);
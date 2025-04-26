//form using post methods field like username password confirnm pass,gender submit reset after 
// entering all field if pass and confirnm pass match then
//  form should be proceed and all values are printed 
// otherwise warning message in red colour is printed and it should terminate
const express = require('express');
const app = express();
const bp = require('body-parser');
const url = bp.urlencoded({extended:true})
app.use(express.static(__dirname,{index:'exp13.html'}));
app.post('/process_post',url,(req,res)=>{
    if(req.body.pass==req.body.cpass){
    res.write("username= "+req.body.name+"\n");
    res.write("password= "+req.body.pass+"\n");
    res.write("gender= "+req.body.a1+"\n");
    }
    else{
        res.write('<p style:bgcolor="red">Warning</p>')
    }
    res.send();
}).listen(3000);
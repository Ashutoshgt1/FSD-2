// 1.create one html file which contain text field name,username one drop down which contain option of country india ,usa,canada, australia
// once user click on submit button it will jump to next page and user name and you are from "Countery name" should be printed 
const express = require('express');
const app = express();
const bp = require('body-parser');
const url = bp.urlencoded({extended:true})
app.use(express.static(__dirname,{index:'App2.html'}));
app.post('/process_post',url,(req,res)=>{
    res.write('Student Info\n');
    res.write("name= "+req.body.fname+"\n");
    res.write("username= "+req.body.lname+"\n");
    res.write("country= "+req.body.a1+"\n");
    res.send();
}).listen(3000);
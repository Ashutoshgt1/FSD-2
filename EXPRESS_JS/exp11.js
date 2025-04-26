// 1.create one html file which contain text field name,username one drop down which contain option of country india ,usa,canada, australia
// once user click on submit button it will jump to next page and user name and you are from "Countery name" should be printed 
const express = require('express');
const app = express();
app.use(express.static(__dirname,{index:'exp11.html'}));
app.get('/student',(req,res)=>{
    res.write('Student Info\n');
    res.write("name= "+req.query.name+"\n");
    res.write("username= "+req.query.usname+"\n");
    res.write("country= "+req.query.country+"\n");
    res.send();
}).listen(3000);
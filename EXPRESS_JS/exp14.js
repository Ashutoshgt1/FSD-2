//222.form using post methods field like username password confirnm pass,gender submit reset after 
// entering all field if pass and confirnm pass match then
//  form should be proceed and all values are printed 
// otherwise warning message in red colour is printed and it should terminate
const express = require('express');
const app = express();
const bp = require('body-parser');
const url = bp.urlencoded({extended:true})
app.use(express.static(__dirname,{index:'exp14.html'}));
app.post('/calculate',url,(req,res)=>{
    if(req.body.n1<0 | req.body.n2<0){
    res.write('<p style:bgcolor="red">Warning number must be positive</p>')
    }
    else{
        a=parseInt(req.body.n1)
        b=parseInt(req.body.n2)
            if(req.body.f=="addition"){
                res.write(a+b)
            }
            else if(req.body.f=="subtraction"){
                res.write(a-b)
            }
            else if(req.body.f=="multiplication"){
                res.write(a*b)
            }
            else if(req.body.f=="division"){
                res.write(a/b)
            }
            else{
                res.write('<p style:bgcolor="red">Warning must select any formula</p>')
            }
    }
    res.send();
}).listen(3000);
const expr = require('express')
const app = expr()
app.set("view engine","pug")
app.get('/',(req,res)=>
{
    res.render(__dirname+'/example')
}).listen(3000)
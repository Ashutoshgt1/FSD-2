const expr = require('express')
const app = expr()
app.set("view engine","pug")
app.set("views",__dirname)
app.get('/',(req,res)=>
{
    res.render(__dirname+'/exp24',{name:'learning',password:'xyz'})
}).listen(3000)
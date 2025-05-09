const expr = require('express')
const app = expr()
const url = expr.urlencoded({ extended: true });

app.set("view engine","pug")
app.set("views",__dirname)
app.get('/',(req,res)=>
{
    res.render('exp23')
})
app.post('/login',(req,res)=>
    {
        res.write("login page")
        res.send();
    }).listen(3000)
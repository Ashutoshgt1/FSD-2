const expr = require('express');
const app = expr();
const url = expr.urlencoded({ extended: true });
const cp = require('cookie-parser')
app.use(cp())
app.get('/',(req,res,next)=>
{
    res.cookie("fname","xyz")
    res.cookie("lname","xyz")
    next();
})
app.get('/',(req,res,next)=>
{
    console.log("username"+req.cookies.fname)
    next();
})
app.get('/',(req,res)=>
{
    res.clearCookie("lname")
    res.send("cookie deleted")
}).listen(5000)
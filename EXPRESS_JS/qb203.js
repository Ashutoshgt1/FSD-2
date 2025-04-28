// to load html file having username pass and submit btn 
// on clicking on submit it should jump on check page using post method
// if username is admin then jump on next middle ware tp print welcom admin 
// if username is not admin then stay on the same middelware to print warning in red colour
const expr = require('express')
const app= expr();
const url = expr.urlencoded();
app.use(expr.static(__dirname,{index:"qb203.html"}));
app.post("/check",url,(req,res,next)=>
{
    if(req.body.uname=='admin')
        next();
    else
        res.send(`<h1 style='color:red'>Wrong credentials</h1>`)
})
app.post("/check",url,(req,res,next)=>
{
    {
        res.write(`<h1>Welcome...${req.body.uname}`)
        res.send()
    }
})
app.listen(3000)
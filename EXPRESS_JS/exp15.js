// Middle Ware
const expr = require('express')
const app= expr();
app.get("/hello",(req,res,next)=>
{
    res.write("request received on "+new Date())
    next()
})
app.get("/hello",(req,res,next)=>
    {
        res.write("How are you? ")
        next()
    })
app.get("/hello",(req,res)=>
    {
       res.send()
    })
    app.listen(3000);
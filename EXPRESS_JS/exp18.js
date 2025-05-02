// write a script to crearte a login form in index.html
//  after click submit it should jump to next page and value
//  user name shoould be stored inside cookie and observe that cookie
//  and display obn console
const expr = require('express');
const app = expr();
const url = expr.urlencoded({ extended: true });
app.use(expr.static(__dirname, { index: "exp18.html" }));
const cp = require('cookie-parser')
app.use(cp())
// app.get('/login',(req,res,next)=>
// {
    
//     res.cookie("name",req.query.name)
//     res.cookie("password",req.query.pass)
//     res.cookie("email",req.query.email)
//     next();
// })
// app.get('/login',(req,res,next)=>
// {
//     res.set('content-type','text/html')
//     console.log("username"+req.cookies.uname)
//     console.log("pass"+req.cookies.pass1)
//     res.write("Thank you for your feedback")
//     res.write("<a href='/feedback'>Show Feedback</a>");
//     res.send()
//     next();
// })

// app.get('/feedback',(req,res)=>
// {
//     res.set('content-type','text/html')
//     res.write("Name: "+req.cookies.name)
//     res.write("\nemail: "+req.cookies.email)
//     res.write("\n<a href='/login'>Logout</a>");
//     res.send()
// }).listen(5000)

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'/exp18.html')
})
app.get('/submit-feedback',(req,res)=>
{
    const{name,email,message,rating}=req.query
    const feedback = {name,email,message,rating}
    res.cookie('feedback',feedback)
})
app.get('/feedback-details',(req,res)=>
{
    const f1 = req.cookies.feedback
    if(f1){
        res.send(``)
    }
    res.cookie('feedback',feedback)
}).listen(5000)

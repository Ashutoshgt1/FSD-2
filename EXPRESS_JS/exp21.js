// after clicking submit it should jump yto save session store username in session after saving session redirect to ftech session page and red session value put a logout link button heredestroy the seeion on this page and redirect ot html page
const expr = require('express')
const app = expr()
const sess = require('express-session')
app.use(sess({resave:false,
            saveUninitialize:true,
            secret:"Hi",
            cookie:{maxAge:10000}
}))
app.use(expr.static(__dirname,{index:"exp21.html"}))
app.use(sess({secret:"hi"}))
app.get('/savesession',(req,res)=>
{
    if(!req.session.uname){
        req.session.uname=req.query.uname
        res.redirect('/fetchsession')
    }
})
app.get('/fetchsession',(req,res)=>
{
    res.write(`welcome ... ${req.session.uname}`)
    res.write(`<button><a href="deletesession">Logout</a></button>`)
    res.send()

})
app.get('/deletesession',(req,res)=>
    {
            req.session.destroy()
            req.redirect('/')
        
    })
app.listen(5000)

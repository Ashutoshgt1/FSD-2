// write ex[press script to print how much time user visit the page 
// if the user visit the page first time message:- tou have visited first time
// if the user visit the page second time message:- tou have visited second time
const expr = require('express')
const app = expr()
const sess = require('express-session')
app.use(sess({resave:false,
            saveUninitialize:true,
            secret:"Hi",
            cookie:{maxAge:10000}
}))
app.get('/',(req,res)=>
{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:red">you have visited ${req.session.page_views} times </h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color:green">you have visited ${req.session.page_views} times </h1>`)
        
    }
}).listen(3000)
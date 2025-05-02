const express = require("express");
const app = express()
const sess = require('express-session')
app.use(sess({resave:false,
            saveUninitialize:true,
            secret:"Hello",
            cookie:{maxAge:20000}
}))
app.get('/',(req,res)=>{
    if(!req.session.fname){
        req.session.fname="Hiral"
        res.redirect("/fetchsession")
    }
    else{
        console.log("Session alredy set")
    }
})
app.get('/fetchsession',(req,res)=>{
    res.send(`<h1> Welcome ${req.session.fname}</h1>`)
})
app.listen(5000)
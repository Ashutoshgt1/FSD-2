// Route paramaters
var express = require('express')
var app = express();
app.get('/:id',(req,res)=>{
    res.send('The id you specified is '+req.params.id);
})
app.listen(5000);
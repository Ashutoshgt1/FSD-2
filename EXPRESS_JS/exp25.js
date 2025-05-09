const express = require('express');
const app = express();
const multer = require('multer')
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/exp25.html')
})
const storage = multer.diskStorage({destination:"single",filename:function(req,file,cb){
    cb(null,file.originalname)
}})
const maxsize = 1000*1000*1
var upload = multer({storage:storage,limits:{fileSize:maxsize}}).single("mypic")
app.post('/uploadfile',(req,res)=>{
    upload(req,res,(err)=>{if(err) res.send(err);else res.send("success")})
})
app.listen(3000)
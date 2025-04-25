// write a express js script to define one json array of three object having properties name and age sort these object according to age if user request sorted name in url then all names along with age should be printed in descending order of age.also display this sorted value on sort page and display json object or home page. 
var express=require('express');
var app=express();
var student=[{name:'jay',age:20},{name:'jignesh',age:21},{name:'parth',age:19}];
app.get('/',(req,res)=>{
    res.send(student);
});
app.get('/sortednames',(req,res)=>{
    s=student.sort((a,b)=>b.age-a.age);
    res.send(s);
});
app.listen(4001);


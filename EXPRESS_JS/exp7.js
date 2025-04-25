// write a express js script to request server to display json object value on browser.
var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    student={
        name:'jay',
        age:'20',
        rollno:116
    }
   res.write('Name of student is ='+JSON.stringify(student.name)+' and age='+JSON.stringify(student.age)+' and roll no ='+JSON.stringify(student.rollno));
   res.end();
});
app.listen(2002);
// When sending JSON objects with res.write(), you must first convert them to strings using JSON.stringify().
// res.send() is an Express convenience method that can send various types of responses, including strings, buffers, and JSON objects. When you pass a JSON object to res.send(), Express automatically converts it to a JSON string and sets the appropriate Content-Type header.

// res.write() we have to write stringify to cinvert json obj to string.
// res.send() json object direct lakhay bacause automatic string send and json same type.
// res.send() is 
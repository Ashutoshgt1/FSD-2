// defining an array of object that have name and age 
// write this object in a file name student.txt 
// and read that data and display on the console
var ps = require("fs");
ps.writeFileSync("New/student.txt","[1 4 6 58 567 35 214 9 80]");
data=ps.readFileSync("New/student.txt","utf-8");
console.log(data)


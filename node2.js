// qb:-77 copy content of file file to other file
var ps = require("fs");
//ps.mkdirSync("New");
ps.writeFileSync("New/abc.txt","Hello World");
data=ps.readFileSync("New/abc.txt");
ps.writeFileSync("New/xyz.txt",data);
data1=ps.readFileSync("New/xyz.txt","utf-8");
console.log(data1)

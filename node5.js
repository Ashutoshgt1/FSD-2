const student=[{name:"ABC",age:30},{},{}]
var ps = require("fs");
ps.writeFileSync("student.txt",JSON.stringify(student))
data=ps.readFileSync("student.txt");
b=JSON.parse(data)
console.log(b)
//calculate perimeter of square and circle by using side and diameter value respectively
// and write in safe.txt file 
var ps = require("fs");
const obj=[{name:"square",side:3},{name:"circle",diameter:4}]
ps.writeFileSync("New/shape.txt",JSON.stringify(obj));
data=ps.readFileSync("New/shape.txt","utf-8");
b=JSON.parse(data);
sq=4*obj[0].side;
c=3.14*obj[1].diameter
console.log(sq)
console.log(c)
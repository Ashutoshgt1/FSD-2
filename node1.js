var ps = require("fs");     //fs is predifined name of FileSystemModule
//ps.mkdirSync("New");
ps.writeFileSync("New/abc.txt","Hello World");
ps.appendFileSync("New/abc.txt","hi");
data=ps.readFileSync("New/abc.txt");
console.log(data);  //returns buffer value
console.log(data.toString());   //convert buffer  value to string
data1=ps.readFileSync("New/abc.txt","utf-8");
console.log("using utf-8",data1);
ps.renameSync("New/abc.txt","New/readwrite.txt")
ps.unlinkSync("New/abc.txt","New/readwrite.txt");
ps.rmdirSync("New");
// write a node js program to sort an integer array 
// where all elemnts are avialable in file seperated by white space
// print sorted array by node js program
var ps = require("fs");
ps.writeFileSync("New/sort1.txt","1 3 4 8 3 6 a 5");
data=ps.readFileSync("New/sort1.txt","utf-8");
data1=data.split(" ");
//data1=data1.sort();
data1=data1.sort((a,b)=>a-b);
for(var i=0;i<data1.length;i++){
    data1[i]=parseInt(data1[i])
}
console.log(data1);
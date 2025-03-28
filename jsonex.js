// {d:{a:10,b:20,c:[30,10]}}
var fs =require('fs')
data={d:{a:10,b:20,c:[30,10]}}
fs.writeFileSync("s2.txt",JSON.stringify(data)+"\n");
data1=fs.readFileSync("s2.txt","utf-8");
console.log(data1);
data1=JSON.parse(data1);
add=data1.d.a+data1.d.b;
sub=Math.abs(data1.d.c[1]-data1.d.b);
mul=data1.d.c[1]*data1.d.c[0];
fs.appendFileSync("s2.txt",add+"\n"+sub+"\n"+mul);
data3=fs.readFileSync("s2.txt","utf-8");
console.log(data3);
const fs = require("fs")
fs.writeFileSync("h1.html",'<html><body><h1 style:"color:red>Hello</h1></body></html>')
data=fs.readFileSync("h1.html","utf-8");
console.log(data)
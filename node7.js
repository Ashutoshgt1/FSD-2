const fs = require("fs")
csv=fs.readFileSync("book2.csv","utf-8");
//csv to json
array=csv.split("\r")
let json= JSON.stringify(array)
fs.writeFileSync("test.json",json);
//Read json file
json_data=fs.readFileSync("test.json","utf-8")
json_parse=JSON.parse(json_data);
console.log(json_parse[2])
console.log(json_parse[3])

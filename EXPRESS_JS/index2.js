const expr=require("express");
const app=expr();
const movies=require("./movies"); // require movies.js file
app.use("/",movies);
app.listen(3000,()=>
{
console.log("Running at 3000");
});

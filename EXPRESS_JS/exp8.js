// write express js script to request server to display json object(array of object) in table form in browser.
const expr = require("express");
var app = expr();
student = [
  { name: "xyz", rollno: 32, division: "A4" },
  { name: "ABC", rollno: 42, division: "A4" },
  { name: "MNO", rollno: 52, division: "A4" },
  { name: "PQR", rollno: 62, division: "A4" },
];
app.get("/", (req, res) => {
    res.set("content-type", "text/html");
    res.write(
      `<table border="1px"><tr><th>Name</th><th>RollNo</th><th>Division</th>`
    );
    for (i of student) {
      res.write("<tr><td>" + i.name + "</td>");
      res.write("<td>" + i.rollno + "</td>");
      res.write("<td>" + i.division + "</td></tr>");
    }
    res.write("</table>");
    res.send();
  })
  .listen(5000);

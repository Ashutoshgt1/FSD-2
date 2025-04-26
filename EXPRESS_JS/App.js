// // 211 using express js mal=ke student info page name,mobile number send the data on the server after submitting
// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse URL-encoded form data
// app.use(express.urlencoded({ extended: true }));

// // Serve the HTML form
// app.get('/', (req, res) => {
//     res.send(`
//         <h1>Student Info Form</h1>
//         <form action="/submit" method="POST">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required><br><br>
//             <label for="mobile">Mobile Number:</label>
//             <input type="text" id="mobile" name="mobile" required><br><br>
//             <button type="submit">Submit</button>
//         </form>
//     `);
// });

// // Handle form submission
// app.post('/submit', (req, res) => {
//     const { name, mobile } = req.body;
//     res.send(`
//         <h1>Student Info Received</h1>
//         <p>Name: ${name}</p>
//         <p>Mobile Number: ${mobile}</p>
//     `);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const app = express();
app.use(express.static(__dirname))
app.get('/student',(req,res)=>{
    res.write('Student Info\n');
    res.write("name= "+req.query.sname+"\n");
    res.write("mobileno= "+req.query.mobile+"\n");
    res.send();
}).listen(3000);
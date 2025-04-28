const expr = require('express');
const app = expr();
const url = expr.urlencoded({ extended: true });

app.use(expr.static(__dirname, { index: "exp16.html" }));

app.get("/check", url, (req, res) => {
    if (req.query.ck === 'on') {
        res.set('content-type', 'text/html');
        res.write(`Welcome ${req.query.name}\n`);
        res.write(`Your Email id is ${req.query.email}\n`);
        res.write("<a href='/'>Logout</a>");
    } else {
        res.set('content-type', 'text/html');
        res.write(`Welcome ${req.query.name}\n`);
        res.write(`Your Email id is ${req.query.email}\n`);
        res.write("You can subscribe to get daily updates \n");
        // Pass query parameters to the /sub route
        res.write(`<a href='/sub?name=${req.query.name}&email=${req.query.email}&ck=on'>Subscribe</a>`);
    }
    res.send();
});

app.get('/sub', (req, res) => {
    if (req.query.ck === 'on') {
        res.set('content-type', 'text/html');
        res.write(`Welcome ${req.query.name}\n`);
        res.write(`Your Email id is ${req.query.email}\n`);
        res.write("Thank you for your subscription \n");
        res.write("<a href='/'>Logout</a>");
    }
    res.send();
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
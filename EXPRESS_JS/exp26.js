const express = require("express");
const app = express();
app.get("/", (req, res) => {res.sendFile(__dirname + "/exp26.html")});
app.get("/mail", (req, res) => {
var nm = require("nodemailer");
var trans = nm.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", //optional
    port: 465,   //optional
    secure: "true",
    auth: {
        user: "ashutoshchudasama989@gmail.com",
        pass: "edsogljylnfteujx"
    }
})
var mailoptions = {
    from: "ashutoshchudasama989@gmail.com",
    to:req.query.email,
    subject: "Picnic Plan",
    // text: "Hi Yug,\n\nI hope you're doing well! I wanted to let you know that we are planning a picnic this weekend. It would be great if you could join us. Let me know your availability.\n\nLooking forward to your reply!\n\nBest regards,\nAshutosh",
    html: "<h1>Hi Yug,</h1><p>I hope you're doing well! I wanted to let you know that we are planning a picnic this weekend. It would be great if you could join us. Let me know your availability.</p><p>Looking forward to your reply!</p><p>Best regards,<br>Ashutosh</p>",
}
trans.sendMail(mailoptions, (error, info) => {
    if (error) {
        res.send(error);
    } else {
        res.send("Email sent: " + info.response);
    }
})
})
app.listen(5000);
const express = require('express');
const app = express();
const path = require('path');
const transporter = require('./nodemailer');

// Set our port to 8080
const PORT = 8080;

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


app.use(express.static('public'));

// Set our Root Route
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.post('/email', (req, res) => {
  const mailOptions = {
    from: 'uoautomailer@gmail.com',
    to: req.body.visitorEmail,
    subject: 'Greetings, fellow human, from Micah Rabinowitz!',
    text: 'Thank you ' + req.body.visitorName + ' for contacting me. My email address is micahrabinowitz@gmail.com and I would love to hear from you. please feel free to copy and paste the message you submitted, which I have added here: "' + req.body.message + '". Thank you! - Micah Rabinowitz'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  console.log("Data", req.body)
  // res.json({ message: "we have contact"})
})

// Starts our server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

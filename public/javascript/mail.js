const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

// const auth = {
//     auth: {
//         api_key: '',
//         domain: ''
//     }
// }

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'uoautomailer@gmail.com',
//     pass: 'Project2UO'
//   }
// });

// const sendMail = (visitorName, visitorEmail, message) => {

//     const mailOptions = {
//         from: 'uoautomailer@gmail.com',
//         to: visitorEmail,
//         subject: 'Greetings, fellow human, from Micah Rabinowitz!',
//         text: 'Thank you ' + visitorName + 'for contacting me. My email address is micahrabinowitz@gmail.com and I would love to hear from you. please feel free to copy and paste the message you submitted, which I have added here: ' + message + ". Thank you! - Micah Rabinowitz"
//     };

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'uoautomailer@gmail.com',
//           pass: 'Project2UO'
//         }
//       });
// }

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'uoautomailer@gmail.com',
      pass: 'Project2UO'
    }
  });
// const transporter = nodemailer.createTransport(mailGun(auth));

// const mailOptions = {
//     from: 'uoautomailer@gmail.com',
//     to: 'micahrabinowitz@gmail.com',
//     subject: 'Test',
//     text: "If you're reading this, it worked."
// };

// transporter.sendMail(mailOption, function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Message sent")
//     }
// })

module.exports = transporter;
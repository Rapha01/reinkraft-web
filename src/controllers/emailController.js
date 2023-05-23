const nodemailer = require("nodemailer");
const express = require('express');

exports.email = (req, res, next) => {
  console.log(req.body.name,req.body.email,req.body.subject,req.body.text);

  sendMail(req.body.name,req.body.email,req.body.subject,req.body.text);

  res.send('OK');
  return;
};

function sendMail(name,email,subject,text) {
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "reinkraftsolutions@gmail.com",
    pass: 'tothemoon'
  }

  });

  var textBody = `FROM: ${name}; EMAIL: ${email}; MESSAGE: ${text}`;

  var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${name} <a href='mailto:${email}'>${email}</a></p><p>${text}</p>`;
  var mail = {
    from: "reinkraftsolutions@gmail.com",
    to: "reinkraftsolutions@gmail.com",
    subject: "Irgendwer ist interessiert",
    text: textBody,
    html: htmlBody
  }
  console.log("bis hier");


  transporter.sendMail(mail, function(err, info) {
    if(err) {
      console.log(err);
      //response.json({ message: "ERROR fehlercode in der console"})
    }
    else {
      console.log("alles gut");
      //response.json({ message: `Nachricht gesandet. ID: ${info.messageId}`});
    }
  })

  return;
}

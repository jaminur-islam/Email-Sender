require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const router = express.Router();
const app = express();
const port = 3000;
const log = console.log;
// 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 -- jaminut hello
sgMail.setApiKey(
  "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"
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "klwebcoClients@gmail.com", // hello@authcms.com
    pass: "Activate_1234$",
  },
});

app.post("/sendwithsg", (req, res) => {
  var subject = req.body.subject;
  var desc = req.body.desc;
  var to = req.body.to;
  console.log(req.body);
  smail(to, subject, desc);
  res.end("yes");
});

app.post("/sendwithnodem", (req, res) => {
  var subject = req.body.subject;
  var desc = req.body.desc;
  var to = req.body.to;
  console.log(req.body);
  nmailer(to, subject, desc);
  res.end("yes");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
function smail(to, subject, desc) {
  const msg = {
    to,
    from: {
      name: "KLWEBCO",
      email: "jaminurislam250@gmail.com",
    }, // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}
function nmailer(to, subject, desc) {
  let mailOptions = {
    from: "klwebcoClients@gmail.com",
    to,
    subject,
    text: desc,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log("Error occurs", err);
    }
    return log("Email sent!!!");
  });
}

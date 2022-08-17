const sgMail = require("@sendgrid/mail");

function smail() {
  const msg = {
    to: "jaminurislam250@gmail.com",
    from: {
      name: "KLWEBCO",
      email: "jaminurislam250@gmail.com",
    }, // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.setApiKey(
    "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"
  );
  sgMail.send(msg).then(
    (res) => {
      console.log("email sent.....", res);
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}

smail();

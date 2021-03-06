const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require("nodemailer");
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());



app.use(express.static(path.join(__dirname, './build')));
app.get('*', (req, res) => {
  res.cookie('cookie1', 'value1', { sameSite: 'lax'});
  res.cookie('cookie2', 'value2', { sameSite: 'none', secure:true});
  res.sendFile(path.join(__dirname, './build'));

})
app.use("/", router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${ port }`);
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: "kalebnewman2@gmail.com",
    pass: "msalvncvkonoauyi",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send")
  }
});

router.post("/contact", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const number = req.body.number;
  const email = req.body.email;
  const message  = req.body.message;
  const mail = {
    from: email,
    to: "kalebnewman2@gmail.com",
    subject: "Contact Form Submition",
    html: `<p>Name: ${fname} ${lname}</p>
           <p>Number: ${number}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

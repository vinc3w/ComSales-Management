const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendMail = (to, subject, type, data) => {

    ejs.renderFile(path.join(__dirname, '../emailTemplates', (type == 'welcome' ? 'welcome.ejs' : 'passwordResetLink.ejs')), data, (err, data) => {
      if (err) console.log(err);
      else {
        const mailOptions = {
          from: process.env.NODEMAILER_USER,
          to,
          subject,
          html: data
        };
        transporter.sendMail(mailOptions, err => {
          if (err) console.log(err);
        });
      }
    });
    
};

module.exports = sendMail;

require('dotenv').config();
const sgMail = require('@sendgrid/mail');


const welcomeMail = async ( email, subject) => {

    sgMail.setApiKey(process.env.SENGRID_API_KEY);


    const msg = {
      to: email,
      from: process.env.SENGRID_MAIL_FROM,
      subject: subject,     
      html: templateEmail,
    };

  await sgMail.send(msg);   
}

module.exports = {welcomeMail};
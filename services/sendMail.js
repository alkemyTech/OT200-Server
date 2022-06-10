const sgMail = require('@sendgrid/mail');
const ejs = require('ejs');
const path = require('path');

const welcomeMail = async (emailTitle, emailText, contactInfo, email, subject) => {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    let templateEmail = await ejs.renderFile(path.join(__dirname,'../views/templateEmail.ejs'), 
    {
        emailTitle: emailTitle,
        emailText: emailText,
        contactInfo: contactInfo
    })

    const msg = {
      to: email,
      from: process.env.SENGRID_MAIL,
      subject: subject,     
      html: templateEmail,
    };

    //ES8
    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
}

module.exports = {welcomeMail};
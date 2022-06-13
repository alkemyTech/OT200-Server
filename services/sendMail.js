const ejs = require('ejs');
const path = require('path');

const welcomeMail = async (emailTitle, emailText, contactInfo) => {

    

    let templateEmail = await ejs.renderFile(path.join(__dirname,'../views/templateEmail.ejs'), 
    {
        emailTitle: emailTitle,
        emailText: emailText,
        contactInfo: contactInfo
    })
   
}

module.exports = welcomeMail;

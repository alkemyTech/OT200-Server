require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const ejs = require('ejs');
const path = require('path');

const welcomeMail = async (emailTitle, email) => {
    
    const subject = "Bienvenidos a la ONG Somos Más";
    const emailText = "Hola, te damos la bienvenida a la ONG Somos Más, esperamos que disfrutes de nuestros servicios.";
    const contactInfo = "Para contactar con nosotros, puedes enviarnos un correo a: somosfundacionmas@gmail.com, Instagram: @somosfundacionmas, Facebook: Somos_Más, o por teléfono: 1160112988";

    sgMail.setApiKey(process.env.SENGRID_API_KEY);
  
    let templateEmail = await ejs.renderFile(path.join(__dirname,'../views/templateEmail.ejs'), 
    {
        emailTitle: emailTitle,
        emailText: emailText,
        contactInfo: contactInfo
    })

    const msg = {
        to: email,
        from: process.env.SENGRID_MAIL_FROM,
        subject: subject,     
        html: templateEmail,
    }
   
    sgMail.send(msg);
}

module.exports = {welcomeMail};

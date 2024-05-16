const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD,
    },
  })

const mailOptions = {
    from: {
        name: "Anil Kumar Yadav",
        address: process.env.APP_USER
    },
    to: ["sparshtiwari544@gmail.com", "vsood0071@gmail.com"],
    subject: 'Holidays Break Extend',
    text: 'Hilaya Kamm karr',
    html: '<p>Hilaya Kamm karr BSDK!!</p>',

    // amp: `<!doctype html>
    // <html ⚡4email>
    //   <head>
    //     <meta charset="utf-8">
    //     <style amp4email-boilerplate>body{visibility:hidden}</style>
    //     <script async src="https://cdn.ampproject.org/v0.js"></script>
    //     <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
    //   </head>
    //   <body>
    //     <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
    //     <p>GIF (requires "amp-anim" script in header):<br/>
    //       <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
    //   </body>
    // </html>`
}

const sendMail = async (transporter, mailOptions) =>{
    try{
        await transporter.sendMail(mailOptions);
        console.log("Email has been sent successfully");
    } catch(error){
        console.error(error);
    }

}

sendMail(transporter, mailOptions)
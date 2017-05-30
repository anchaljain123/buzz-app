const nodemailer = require('nodemailer');
const fs = require('fs');
 send = (emailId) =>{
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anchal.jain@tothenew.com',
            pass: 'counting1'
        }
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: '"Anchal" <anchal.jain@tothenew.com>', // sender address
        to: emailId, // list of receivers
        subject: 'Welcome mail', // Subject line
        text: 'Hello Newer', // plain text body
        html: '<h3>Welcome to TTN Buzz</h3>' ,// html body
      attachments: [
        {'filename': 'WelcomeMail',
          'content': fs.createReadStream('/home/ttn/Desktop/buzz-app/src/Frontend/Components/Assets/images/welcome.jpg')}
          ]

    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Not able to send mail");
           // res.send("Not able to send mail");
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        //res.send("mail send successfully")
    });
};

module.exports = {
    send:send,
};

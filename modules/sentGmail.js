const nodemailer = require('nodemailer');

function helloword(res){
    console.log('hello word >>>>>>>>>');
    res.send('>> from santhosh');
}

async function SentNodeMail(adminMail,passcode,tomail,subject,content,htmlContent){
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, 
            auth: {
              user: adminMail,
              pass: passcode,
            },
          });
    
          async function main() {
            try {
                const info = await transporter.sendMail({
                    from: `${adminMail}`, // sender address
                    to: tomail.join(','), // list of receivers
                    subject, // Subject line
                    text: content, // plain text body
                    html:htmlContent
                  });
            
                  return(info)
                  
            } catch (error) {
                console.log('error ❌❌❌❌',error)
            }
          }
    
          return (await main().catch(console.error));
    } catch (error) {
        console.log('🍑🍑🍑🍑',error);
    }


}

module.exports= {helloword,SentNodeMail}



// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
//   auth: {
//     user: "maddison53@ethereal.email",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);
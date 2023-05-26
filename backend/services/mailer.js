const nodemailer = require('nodemailer')
async function sendMail(mailOptions) {
    console.log('Thin da den day');
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "587",
        secure: false,
        requireTLS: true,
        auth: {
            user: "ticketbookingsever@gmail.com",
            pass: "aatuwdarvwtgaeqv",
        },
    })

    await transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Send successfully')
        }
        console.log('Send failed', err)
    })
}


module.exports = sendMail
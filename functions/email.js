let nodemailer = require('nodemailer');
let qs = require('qs');

exports.handler = function(event, context, callback) {
    const data = qs.parse(event.body);

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "blucodexteam@gmail.com",
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: "Blucodex Team <blucodexteam@gmail.com>",
        to: "dmjeffmoore@gmail.com",
        subject: "Blucodex Contact Us Page",
        html: data.name + ": " + data.from + "said: " + data.message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify(err)
            });
        }
        else {
            callback(null, {
                statusCode: 200,
            });
        }
    });
};
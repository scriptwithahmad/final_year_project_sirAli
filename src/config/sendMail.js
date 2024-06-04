import nodemailer from 'nodemailer'


async function sendMail(email, message,subject) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gq00370@gmail.com',
      pass: 'hxbmdkocbhnqcdvi'
    }
  });

  var mailOptions = {
    from: 'gq00370@gmail.com',
    to: email,
    subject: "no-reply",
    html: message.toString()
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return false
    } else {
      console.log(info.response)
      return true
    }
  });
}


export default sendMail
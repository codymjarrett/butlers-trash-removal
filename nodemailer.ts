const nodemailer = require('nodemailer');

interface ConfigAuth {
  user?: String;
  pass?: String;
}

interface Data {
  name: String;
  email: String;
  message: String;
}

export const createNodeMailerConfig = (auth: ConfigAuth) => {
  const { user, pass } = auth;
  return nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });
};

export const sendNodeMail = async (auth: ConfigAuth, data: Data) => {
  const transporter = createNodeMailerConfig(auth);

  const { email, name, message } = data;
  await transporter.sendMail({
    from: `"${name}" <${email}>`, // pointless as GMAIL reverts to authenticated user anyway https://nodemailer.com/usage/using-gmail/
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: `Butler's Trash Removal Inquiry from ${name}`, // Subject line
    text: `${message} from ${email}`, // plain text body
    html: `<div><b>Message:</b> ${message}</div><br><div><b>Contact email:</b> ${email}</div>`, // html body
  });
};

// to create gmail custom app password
//https://stackoverflow.com/questions/26736062/sending-email-fails-when-two-factor-authentication-is-on-for-gmail

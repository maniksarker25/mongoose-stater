/* eslint-disable @typescript-eslint/no-explicit-any */
// import nodemailer from 'nodemailer';
// import config from '../config';
// export const sendEmail = async (to: string, subject: string, html: string) => {
//   console.log('receiver email', to);
//   console.log( config.smtp.smtp_host)
//   console.log( config.smtp.smtp_pass)
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: config.NODE_ENV === 'production',
//     auth: {
//       //   TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: config.smtp.smtp_host,
//       pass: config.smtp.smtp_pass,
//     },
//   });
//   await transporter.sendMail({
//     from: 'maniksarker265@gmail.com', // sender address
//     to, // list of receivers
//     subject: subject, // Subject line
//     text: '', // plain text body
//     html, // html body
//   });
// };



import nodemailer from 'nodemailer';
import config from '../config';

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const sendEmail = async (options:{email:string,subject:string,html:any}) => {
  const transporter = nodemailer.createTransport({
    // host: config.smtp.smtp_host,
    host: "smtp.gmail.com",
    port: parseInt(config.smtp.smtp_port as string),
    auth: {
      user: config.smtp.smtp_mail,
      pass: config.smtp.smtp_pass,
    },
  });

  const { email, subject, html } = options;

  const mailOptions = {
    from: `${config.smtp.name} <${config.smtp.smtp_mail}>`,
    to: email,
    date: formattedDate,
    signed_by: "bdCalling.com",
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;

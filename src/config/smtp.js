// import { createTestAccount, createTransport } from 'nodemailer';
// import 'dotenv/config';

// export async function smtp(props) {
//   const { name, email, message } = props;

//   await createTestAccount();

//   let transporter = createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: false,
//     auth: {
//       user: process.env.SMTP_EMAIL_SENDER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   let result = await transporter
//     .sendMail({
//       from: process.env.SMTP_EMAIL_SENDER,
//       to: process.env.SMTP_EMAIL_RECEIVER,
//       subject: `Email From Website, Made by ${name - email}`,
//       text: message,
//     })
//     .then(console.log(result, result.messageId))
//     .catch((e) => console.log(e));
// }

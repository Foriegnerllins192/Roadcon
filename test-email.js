const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Testing email configuration...');
console.log('EMAIL_HOST:', process.env.EMAIL_HOST);
console.log('EMAIL_PORT:', process.env.EMAIL_PORT);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Connection failed:');
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Try to send a test email
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: 'Test Email from Roadcon Website',
  text: 'This is a test email to verify the email configuration.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Email sending failed:');
    console.log(error);
  } else {
    console.log('Email sent successfully:');
    console.log(info);
  }
});
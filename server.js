const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// CORS headers for Render deployment
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.use('/', require('./routes/index'));

// Contact form API endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Please fill in all required fields (name, email, message).' 
    });
  }

  // Setup nodemailer transporter with Gmail service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email error:', error);
      // More detailed error response for debugging
      if (process.env.NODE_ENV !== 'production') {
        return res.status(500).json({ 
          error: 'Failed to send email. Error: ' + error.message,
          code: error.code
        });
      } else {
        return res.status(500).json({ 
          error: 'Failed to send email. Please try again later.' 
        });
      }
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ 
      message: 'Message sent successfully!' 
    });
  });
});

// Quote request API endpoint
app.post('/api/quote', (req, res) => {
  const { name, company, projectType, location, size, message } = req.body;

  // Validate required fields
  if (!name || !projectType || !location || !size) {
    return res.status(400).json({ 
      error: 'Please fill in all required fields (name, projectType, location, size).' 
    });
  }

  // Setup nodemailer transporter with Gmail service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New Quote Request from ${name}`,
    text: `Name: ${name}
Company: ${company}
Project Type: ${projectType}
Location: ${location}
Size: ${size}
Message: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email error:', error);
      // More detailed error response for debugging
      if (process.env.NODE_ENV !== 'production') {
        return res.status(500).json({ 
          error: 'Failed to send email. Error: ' + error.message,
          code: error.code
        });
      } else {
        return res.status(500).json({ 
          error: 'Failed to send email. Please try again later.' 
        });
      }
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ 
      message: 'Quote request sent successfully!' 
    });
  });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
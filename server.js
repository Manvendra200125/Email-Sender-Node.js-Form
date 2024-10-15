const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve contact.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body; // Added phone

    // Set up email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abc@gmail.com', // Add mail To Admin 
            pass: 'xxxx xxxx xxxx xxxx' // Do not share your password directly
        }
    });

    // Email options
    const mailOptions = {
        from: 'abc@gmail.com', // Your email (sender email)
        replyTo: email, // User's email so you can reply directly
        to: 'abc@gmail.com', // Replace with your email to receive the message
        subject: subject,
        text: `You have received a message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    };
    
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Error sending email' });
        }
        console.log('Email sent:', info.response);
        return res.json({ success: true, message: 'Message sent successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

---
id: nodemailer-secure
title: Nodemailer Security
sidebar_label: Security
sidebar_position: 4
description:   How to secure the password and mail address.
tags: [Node.Js, NodeMailer, env , SMTP ,JavaScript framework]
---
How to secure the mail address and Password:

### Environment Variables (Recommended)

It's good practice to keep your email credentials secure by using environment variables. You can use the `dotenv` package to manage these variables.

1. **Install the `dotenv` package**:
    ```bash
    npm install dotenv
    ```

2. **Create a `.env` file in your project root** and add your credentials:
    ```
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    ```

3. **Modify your `sendEmail.js` file to use `dotenv`**:
    ```javascript
    const nodemailer = require('nodemailer');
    require('dotenv').config();

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // Define email options
    let mailOptions = {
        from: process.env.EMAIL,
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'Hello, this is a test email sent using Nodemailer!',
        html: '<b>Hello, this is a test email sent using Nodemailer!</b>'
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
    ```
 
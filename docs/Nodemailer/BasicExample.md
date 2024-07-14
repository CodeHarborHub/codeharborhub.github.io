---
id: nodemailer-basic-example
title: Basic Example
sidebar_label: Basic Example
sidebar_position: 3
description:   Basic Example for How to send mail.
tags: [Node.Js, NodeMailer, env , SMTP ,JavaScript framework]
---

How to send Mail basic example to get you started with Nodemailer:

### In Node & Express Js

1. **Create a new file named `sendEmail.js`**:
    ```javascript
    const nodemailer = require('nodemailer');

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Define email options
    let mailOptions = {
        from: 'your-email@gmail.com',
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

2. **Run the script**:
    ```bash
    node sendEmail.js
    ```
### In ES6 method

To use Nodemailer in an ES6 environment, you can take advantage of the modern JavaScript features such as `import` statements, `async/await`, and environment variables for configuration. Below is a step-by-step guide:

#### Step 1: Set Up Your Project

1. **Configure your project to use ES6 modules**:
    In your `package.json`, add the following property to enable ES6 modules:
    ```json
    {
      "type": "module"
    }
    ```

#### Step 2: Create the Basic Email Sending Script
 
1. **Create a file named `sendEmail.mjs`**:
    ```javascript
    import nodemailer from 'nodemailer';
    import dotenv from 'dotenv';

    dotenv.config();

    const sendEmail = async () => {
        // Create a transporter object
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: your-email@gmail.com,
                pass: your-email-password
            }
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: 'recipient@example.com',
            subject: 'Test Email',
            text: 'Hello, this is a test email sent using Nodemailer!',
            html: '<b>Hello, this is a test email sent using Nodemailer!</b>'
        };

        // Send the email
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (error) {
            console.error('Error sending email: ' + error);
        }
    };

    sendEmail();
    ``` 

2. **Run the script**:
    ```bash
    node sendEmail.mjs
    ```

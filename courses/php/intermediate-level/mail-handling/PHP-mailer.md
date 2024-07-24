---
id: lesson-2
title: "3. Working with PHPMailer"
sidebar_label:  PHPMailer
sidebar_position: 2
description: "3. Working with PHPMailer"
tags: [courses,intermediate-level,php,Introduction]
---  
   

PHPMailer is a popular library that provides more functionality and flexibility than the built-in `mail()` function. It supports SMTP, attachments, and HTML emails.

**Installing PHPMailer:**

You can install PHPMailer using Composer:

```sh
composer require phpmailer/phpmailer
```

**Sending an Email with PHPMailer:**

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'username@example.com';
    $mail->Password = 'password';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    //Recipients
    $mail->setFrom('sender@example.com', 'Sender');
    $mail->addAddress('recipient@example.com', 'Recipient');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
```

### 4. Email Validation

Validating email addresses is crucial to ensure the correctness of user input and prevent sending emails to invalid addresses.

**Basic Email Validation Using PHP:**

```php
<?php
$email = "test@example.com";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email address.";
} else {
    echo "Invalid email address.";
}
?>
```


:::tip
- Always validate email addresses using `filter_var()` to ensure they are in the correct format before sending emails.
- For sending bulk emails or emails with attachments, use PHPMailer as it provides more advanced functionality compared to the `mail()` function.
- Make sure to handle errors gracefully and provide meaningful error messages to the user.
- Use a proper SMTP server with authentication to ensure your emails are not marked as spam.
- Use HTML content and alternate plain text content for better compatibility with different email clients.
:::
---
id: lesson-1
title: "Email Handling in PHP"
sidebar_label: Handling Emails
sidebar_position: 1
description: "Learn Email Handling in PHP"
tags: [courses,intermediate-level,php,Introduction]
---  
  

#### Topics Covered:
1. Sending Emails with PHP
2. Using the `mail()` Function
3. Working with PHPMailer
4. Email Validation


### Flowchart

```mermaid
graph TD
    A[Start]
    B{Choose Method}
    C[Using mail() Function]
    D[Using PHPMailer]
    E[Send Email]
    F[Email Sent Successfully]
    G[Email Sending Failed]
    H[End]

    A --> B
    B -->|mail()| C
    B -->|PHPMailer| D
    C --> E
    D --> E
    E -->|Success| F
    E -->|Failure| G
    F --> H
    G --> H
```

### 1. Sending Emails with PHP

PHP provides built-in functions and libraries to send emails. The most basic way is using the `mail()` function, but for more advanced email handling, PHPMailer is recommended.

### 2. Using the `mail()` Function

The `mail()` function allows you to send emails directly from a PHP script.

**Basic Example:**

```php
<?php
$to = "recipient@example.com";
$subject = "Test Email";
$message = "Hello, this is a test email.";
$headers = "From: sender@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}
?>
```

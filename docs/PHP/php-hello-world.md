---
id: php-hello-world
title: PHP - Hello World
sidebar_label: PHP - Hello World
sidebar_position: 7
tags: [PHP, hello world, web development, XAMPP]
---

# PHP - Hello World

## Introduction

The "Hello World" program is a common starting point for beginners learning a new programming language. Let's dive into creating a simple "Hello World" program in PHP using XAMPP.

## Prerequisites

Ensure that you have XAMPP installed, which includes the Apache server and PHP module.

## Writing and Running the Program

1. Open your preferred text editor.
2. Save the following code as `hello.php` in the `htdocs` directory of your XAMPP installation.

```php
<?php
   echo "Hello World!";
?>
```

3. Start the Apache server from the XAMPP control panel if it's not already running.
4. Open a new tab in your browser and enter `http://localhost/hello.php` as the URL.
5. You should see the "Hello World" message displayed in the browser window.

## Mixing HTML with PHP

You can mix HTML and PHP code in a single script. For example:

```php
<!DOCTYPE html>
<html>
<body>
   <h1>My PHP Website</h1>
   <?php
      echo "Hello World!";
   ?>
</body>
</html>
```

The "Hello World" message will be rendered as plain text, but you can include HTML tags inside the PHP code for formatting.

## Running PHP Scripts from Command Prompt

You can also run PHP scripts from the command prompt. Assuming you have a `hello.php` file with the following content:

```php
<?php
   echo "Hello PHP!!!!!";
?>
```

1. Add the path of the PHP executable (e.g., `php.exe` in XAMPP) to your operating system’s path environment variable.
2. Open a command prompt and navigate to the directory containing `hello.php`.
3. Run the script using the command:

```bash
php hello.php
```

You will see the output:

```
Hello PHP!!!!!
```

:::note
Ensure that XAMPP is properly configured and the Apache server is running to execute PHP scripts.
:::

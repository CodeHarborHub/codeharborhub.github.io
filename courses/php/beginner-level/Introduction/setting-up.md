---
id: lesson-2
title: "Setting up the Development Environment"
sidebar_label: Setting up
sidebar_position: 2
description: "Learn Setting up the Development Environment"
tags: [courses,beginner-level,php,Introduction]
--- 
 

To run PHP scripts, you'll need a server environment that can interpret PHP. Popular options include:
- **XAMPP:** A free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting of Apache HTTP Server, MariaDB, and interpreters for scripts written in the PHP and Perl programming languages.
- **WAMP:** A Windows-based web development platform that allows you to create dynamic web applications with Apache2, PHP, and a MySQL database.
- **MAMP:** Similar to XAMPP and WAMP but for macOS.
- **LAMP:** A popular open-source web development platform that uses Linux as the operating system, Apache as the web server, MySQL as the relational database management system, and PHP as the object-oriented scripting language.

**Steps to set up XAMPP (as an example):**
1. **Download XAMPP:** Go to the [official XAMPP website](https://www.apachefriends.org/index.html) and download the version compatible with your operating system.
2. **Install XAMPP:** Follow the installation instructions.
3. **Start the Apache Server:** Open the XAMPP Control Panel and start the Apache server.
4. **Test the Installation:** Create a PHP file (e.g., `index.php`) in the `htdocs` directory inside the XAMPP installation folder. Add the following code to `index.php`:
   ```php
   <?php
   echo "Hello, World!";
   ?>
   ```

<BrowserWindow>
  <div>
     <h1>Hello, World!</h1>
  </div>
</BrowserWindow>

5. **Run the Script:** Open a web browser and navigate to `http://localhost/index.php`. You should see the message "Hello, World!" displayed.

#### 4. Writing and Running Your First PHP Script

A PHP script typically starts with `<?php` and ends with `?>`. Here’s an example:

```php
<?php
// This is a single-line comment

/*
 This is a
 multi-line comment
*/

echo "Hello, World!"; // This will output: Hello, World!
?>
```
<BrowserWindow>
  <div>
     <p>// This is a single-line comment</p>
     <p>
     /* <br />
 This is a <br />
 multi-line comment <br />
*/
     </p>
     <h1>Hello, World!</h1> 
  </div>
</BrowserWindow>

### Running the Script
1. Save the above code in a file named `hello.php` inside the `htdocs` directory (for XAMPP users) or the appropriate directory for your server environment.
2. Open a web browser and navigate to `http://localhost/hello.php`.
3. You should see the output: `Hello, World!`


:::tip
- **PHP Syntax:** PHP code is executed on the server, and the result is returned to the browser as plain HTML.
- **Variables:** In PHP, variables are prefixed with a `$` sign and are case-sensitive.
- **Semicolons:** Each statement ends with a semicolon (`;`).
- **Error Reporting:** Enable error reporting during development to catch and fix issues early. Add `error_reporting(E_ALL);` and `ini_set('display_errors', '1');` at the top of your script.
- **Documentation:** The [PHP Manual](https://www.php.net/manual/en/) is an excellent resource for learning about PHP functions and features.
:::
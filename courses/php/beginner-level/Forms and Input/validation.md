---
id: lesson-2
title: "Validating and Sanitizing User Input"
sidebar_label:  Validating and Sanitizing 
sidebar_position: 2
description: "Validating and Sanitizing User Input"
tags: [courses,beginner-level,php,Introduction]
---   
 

It's important to validate and sanitize user input to prevent security vulnerabilities such as SQL injection and XSS attacks.

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);

    if (validateEmail($email)) {
        echo "Name: " . htmlspecialchars($name) . "<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
    } else {
        echo "Invalid email format.<br>";
    }
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
?>
```

### GET and POST Methods

The GET method appends form data to the URL, making it visible, whereas the POST method sends form data as a part of the HTTP request body, making it more secure.

**HTML Form using GET method:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>PHP GET Form Example</h2>
<form action="process_get_form.php" method="get">
  Name: <input type="text" name="name"><br><br>
  Email: <input type="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>

</body>
</html>
```

**PHP script handling GET method:**

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $name = sanitizeInput($_GET['name']);
    $email = sanitizeInput($_GET['email']);

    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
}
?>
```

### Example

**HTML Form:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>PHP Form Example</h2>
<form action="process_form.php" method="post">
  Name: <input type="text" name="name"><br><br>
  Email: <input type="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>

</body>
</html>
```

**PHP Script (process_form.php):**

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitizeInput($_POST['name']);
    $email = sanitizeInput($_POST['email']);

    if (validateEmail($email)) {
        echo "Name: " . htmlspecialchars($name) . "<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
    } else {
        echo "Invalid email format.<br>";
    }
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
?>
```

### Output

<BrowserWindow>
    <div>
        <h2>PHP Form Example</h2>
        <p id="alert"></p>
        <h3 id="user_name"></h3>
        <form onSubmit={(e) => {
            e.preventDefault()
            let form=document.getElementById("form")
            form.style.display="none"
            let alert=document.getElementById("alert")
            let user_name=document.getElementById("user_name")
            let name=document.getElementById("name")
            user_name.textContent=`Thank you ${name.value}`
            alert.textContent="Success"
            }} id="form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" /><br /><br />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
</BrowserWindow>


:::tip
- Always sanitize and validate user inputs to prevent security vulnerabilities.
- Use the POST method for sensitive data to avoid exposing information in the URL.
- Use built-in PHP functions like `filter_var` for data validation.
- Use `htmlspecialchars` to prevent XSS attacks by escaping special characters.
:::
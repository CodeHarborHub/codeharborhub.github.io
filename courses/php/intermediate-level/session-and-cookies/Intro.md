---
id: lesson-1
title: "Sessions"
sidebar_label: Sessions
sidebar_position: 1
description: "Introduction to Sessions"
tags: [courses,intermediate-level,php,Introduction]
--- 
  
  

Sessions are a way to store information (in variables) to be used across multiple pages. Unlike cookies, sessions are stored on the server. This means the information is not easily accessible and is more secure.
 
### Starting and Managing Sessions

To start a session in PHP, use the `session_start()` function. This function must be called at the beginning of the script, before any HTML or other output.

```php
<?php
session_start();
?>
```

### Using Session Variables

You can store information in session variables, which are accessible across multiple pages of a website.

**Setting Session Variables:**

```php
<?php
session_start();
$_SESSION["username"] = "JohnDoe";
$_SESSION["email"] = "john@example.com";
echo "Session variables are set.";
?>
```

**Accessing Session Variables:**

```php
<?php
session_start();
echo "Username: " . $_SESSION["username"] . "<br>";
echo "Email: " . $_SESSION["email"];
?>
```

**Unsetting Session Variables:**

```php
<?php
session_start();
unset($_SESSION["username"]);
echo "Username session variable is unset.";
?>
```

**Destroying a Session:**

```php
<?php
session_start();
session_destroy();
echo "All session variables are removed, and the session is destroyed.";
?>
```

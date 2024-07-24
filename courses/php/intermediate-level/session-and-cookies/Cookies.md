---
id: lesson-2
title: "Working with Cookies"
sidebar_label: Cookies
sidebar_position: 2
description: "Learn Cookies"
tags: [courses,intermediate-level,php,Introduction]
--- 
  

Cookies are small pieces of data stored on the client side and sent to the server with each request. Cookies are less secure than sessions but can be useful for storing non-sensitive data.

**Setting a Cookie:**

```php
<?php
$cookie_name = "user";
$cookie_value = "JohnDoe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
echo "Cookie named '" . $cookie_name . "' is set.";
?>
```

**Accessing a Cookie:**

```php
<?php
if(isset($_COOKIE["user"])) {
    echo "User is " . $_COOKIE["user"];
} else {
    echo "User cookie is not set.";
}
?>
```

**Deleting a Cookie:**

```php
<?php
setcookie("user", "", time() - 3600, "/");
echo "User cookie is deleted.";
?>
```

### Example

**Setting a Session Variable and a Cookie:**

```php
<?php
session_start();
$_SESSION["username"] = "JohnDoe";

$cookie_name = "user";
$cookie_value = "JohnDoe";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

echo "Session and cookie are set.";
?>
```

**Accessing the Session Variable and the Cookie:**

```php
<?php
session_start();
echo "Username (Session): " . $_SESSION["username"] . "<br>";

if(isset($_COOKIE["user"])) {
    echo "User (Cookie): " . $_COOKIE["user"];
} else {
    echo "User cookie is not set.";
}
?>
```

### Output

<BrowserWindow>
    <div>
        <p>Session and cookie are set.</p>
        <p>Username (Session): JohnDoe</p>
        <p>User (Cookie): JohnDoe</p>
    </div>
</BrowserWindow>



:::tip
- Always call `session_start()` at the beginning of your script before any output.
- Use sessions for storing sensitive data as they are stored on the server.
- Use cookies for storing non-sensitive data that needs to persist across multiple browser sessions.
- Remember to set appropriate expiration times for cookies based on your application's needs.
- Always unset and destroy sessions when they are no longer needed to free up server resources and improve security.
- Be cautious with the data stored in cookies, as they can be manipulated by users.
:::
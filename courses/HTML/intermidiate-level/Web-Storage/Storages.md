---
id: lesson-2
title: "Using Local Storage and Session Storage"
sidebar_label: Local Storage
sidebar_position: 2
description: "Introduction to Local Storage and Session Storage"
tags: [courses,intermediate-level,Local Storage,Session Storage,Introduction]
---   

Both Local Storage and Session Storage use the same API but differ in their data retention policies.

#### Local Storage

Local Storage allows you to store data with no expiration date. The data persists even when the browser is closed and reopened.

**Basic Operations:**

1. **Setting Data:**
   ```javascript
   localStorage.setItem('key', 'value');
   ```
   **Example:**
   ```javascript
   localStorage.setItem('username', 'JohnDoe');
   ```

2. **Getting Data:**
   ```javascript
   var value = localStorage.getItem('key');
   ```
   **Example:**
   ```javascript
   var username = localStorage.getItem('username');
   console.log(username); // Outputs: JohnDoe
   ```

3. **Removing Data:**
   ```javascript
   localStorage.removeItem('key');
   ```
   **Example:**
   ```javascript
   localStorage.removeItem('username');
   ```

4. **Clearing All Data:**
   ```javascript
   localStorage.clear();
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Local Storage Example</title>
</head>
<body>
  <script>
    // Storing data
    localStorage.setItem('user', 'Alice');

    // Retrieving data
    var user = localStorage.getItem('user');
    console.log(user); // Outputs: Alice

    // Removing data
    localStorage.removeItem('user');

    // Clearing all data
    localStorage.clear();
  </script>
</body>
</html>
```

#### Session Storage

Session Storage is similar to Local Storage, but it only persists until the browser (or tab) is closed. It is useful for temporary storage of data that does not need to persist beyond the current session.

**Basic Operations:**

1. **Setting Data:**
   ```javascript
   sessionStorage.setItem('key', 'value');
   ```
   **Example:**
   ```javascript
   sessionStorage.setItem('sessionUser', 'JaneDoe');
   ```

2. **Getting Data:**
   ```javascript
   var value = sessionStorage.getItem('key');
   ```
   **Example:**
   ```javascript
   var sessionUser = sessionStorage.getItem('sessionUser');
   console.log(sessionUser); // Outputs: JaneDoe
   ```

3. **Removing Data:**
   ```javascript
   sessionStorage.removeItem('key');
   ```
   **Example:**
   ```javascript
   sessionStorage.removeItem('sessionUser');
   ```

4. **Clearing All Data:**
   ```javascript
   sessionStorage.clear();
   ```

**Example Usage:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Session Storage Example</title>
</head>
<body>
  <script>
    // Storing data
    sessionStorage.setItem('sessionUser', 'Bob');

    // Retrieving data
    var sessionUser = sessionStorage.getItem('sessionUser');
    console.log(sessionUser); // Outputs: Bob

    // Removing data
    sessionStorage.removeItem('sessionUser');

    // Clearing all data
    sessionStorage.clear();
  </script>
</body>
</html>
```

**Use Cases:**
- **Local Storage:** Ideal for storing user preferences, settings, or any data that should persist across sessions.
- **Session Storage:** Useful for storing data that should only persist during a single session, such as temporary form data or one-time configuration settings.

By utilizing Local Storage and Session Storage, web developers can enhance the user experience by maintaining stateful information on the client side, reducing server load, and improving the performance and responsiveness of web applications.
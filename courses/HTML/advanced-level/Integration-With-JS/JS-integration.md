---
id: lesson-1
title: "HTML and JavaScript Integration"
sidebar_label: HTML and JavaScript Integration
sidebar_position: 1
description: "Learn to HTML and JavaScript Integration."
tags: [courses,advance-level,JS,Introduction]
---  
   

Integrating JavaScript into HTML allows developers to create interactive and dynamic web pages. There are several ways to embed and execute JavaScript within an HTML document.

**1. Inline JavaScript:**
You can directly place JavaScript code within `<script>` tags in the HTML document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline JavaScript Example</title>
    <script>
        function greet() {
            alert('Hello, World!');
        }
    </script>
</head>
<body>
    <button onclick="greet()">Click Me</button>
</body>
</html>
```

**2. Internal JavaScript:**
JavaScript can also be placed within the `<script>` tags in the `<head>` or `<body>` sections, allowing for more structured code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal JavaScript Example</title>
    <script>
        window.onload = function() {
            document.getElementById('message').textContent = 'Page Loaded!';
        };
    </script>
</head>
<body>
    <p id="message"></p>
</body>
</html>
```

**3. External JavaScript:**
For better organization, JavaScript can be placed in separate `.js` files and linked to the HTML document.

**JavaScript File (`script.js`):**
```javascript
function showMessage() {
    alert('Hello from external script!');
}
```

**HTML File:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="showMessage()">Click Me</button>
</body>
</html>
```

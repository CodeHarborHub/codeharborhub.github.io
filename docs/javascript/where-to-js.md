---
id: where-to-js
title: Where to Write JavaScript
sidebar_label: Where to JavaScript
sidebar_position: 2
tags: [JavaScript, Introduction of js, Introduction of JavaScript, Where to javascript ]
description: Where to write JavaScript code? Learn about the different places where JavaScript code can be written such as inline JavaScript, internal JavaScript, and external JavaScript.
---

JavaScript code can be written in three places:

### 1. Inline JavaScript

JavaScript code can be written directly in an HTML file in the HTML element's attribute. For example, in the `onclick` attribute of a button element.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Inline JavaScript</title>
  </head>
  <body>
    <button onclick="alert('Hello World!')">Click me</button>
  </body>
</html>
```

<BrowserWindow minHeight="300px" url="http://127.0.0.1:5500/index.html">
    <button onClick={()=>alert('Hello World!')}>Click me</button>
</BrowserWindow>

### 2. Internal JavaScript

JavaScript code can be written in the `<script>` tag in the HTML file. The `<script>` tag can be placed in the `<head>` or `<body>` section of the HTML file.

```html {5-9} title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Internal JavaScript</title>
    <script>
      function sayHello() {
        alert('Hello World!');
      }
    </script>
  </head>
  <body>
    <button onclick="sayHello()">Click me</button>
  </body>
</html>
```

<BrowserWindow minHeight="300px" url="http://127.0.0.1:5500/index.html">
    <button onClick={()=>alert('Hello World!')}>Click me</button>
</BrowserWindow>

### 3. External JavaScript

JavaScript code can be written in an external file with a `.js` extension. The external JavaScript file can be linked to the HTML file using the `<script>` tag.

```html {5} title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>External JavaScript</title>
    <script src="script.js"></script>
  </head>
  <body>
    <button onclick="sayHello()">Click me</button>
  </body>
</html>
```

```js title="script.js"
function sayHello() {
  alert('Hello World!');
}
```

<BrowserWindow minHeight="300px" url="http://127.0.0.1:5500/index.html">
    <button onClick={()=>alert('Hello World!')}>Click me</button>
</BrowserWindow>

:::tip

1. It is recommended to write JavaScript code in an external file to separate the structure of the HTML file from the behavior of the web page. This makes the code more organized and easier to maintain.

2. It helps to keep the HTML file clean and easy to read. It also allows the JavaScript code to be reused in multiple HTML files.

3. The external JavaScript file should be linked to the HTML file using the `<script>` tag with the `src` attribute.

4. External JavaScript is easy to maintain, debug, and update. It also improves the performance of the web page by allowing the browser to cache the JavaScript file.
:::

### Summary

- Inline JavaScript: JavaScript code is written directly in the HTML file in the HTML element's attribute.
- Internal JavaScript: JavaScript code is written in the `<script>` tag in the HTML file.
- External JavaScript: JavaScript code is written in an external file with a `.js` extension and linked to the HTML file using the `<script>` tag.
- It is recommended to write JavaScript code in an external file to separate the structure of the HTML file from the behavior of the web page. This makes the code more organized and easier to maintain.
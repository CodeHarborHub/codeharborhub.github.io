---
id: basic-javascript
title: Basic JavaScript Concepts
sidebar_label: Basic JavaScript
sidebar_position: 3
tags: [JavaScript, Introduction of js, Introduction of JavaScript, Basic JavaScript Concepts, basic js concepts, basic js]
description: Basic concepts of JavaScript. Learn about displaying output in JavaScript, JavaScript display possibilities, and more.
---

In this tutorial, you will learn about the basic concepts of JavaScript. We know that JavaScript is easy to manipulate and can be used to create dynamic content on the web pages. That means JavaScript can be used to change the content of the web page without refreshing the page. Content may be text, images, or any other HTML element. 

**So, let's start with the basic concepts of JavaScript.**

## Displaying Output in JavaScript

To display output in JavaScript, we use the `console.log()` method. The `console.log()` method is used to display the output in the console of the web browser. 

```js title="index.js"
console.log('Hello World!');
```

## JavaScript Display Possibilities 

JavaScript can display data in different ways. Here are some of the ways to display data in JavaScript:

### 1. Alert Box

The `alert()` method is used to display an alert box with a message and an OK button. 

```js title="index.js"
alert('Hello World!');
```

### 2. Writing into an HTML Element

The `document.write()` method is used to write into the HTML document. 

```js title="index.js"
document.write('Hello World!');
```

### 3. Writing into the Browser Console

The `console.log()` method is used to write into the browser console. 

```js title="index.js"
console.log('Hello World!');
```

### 4. Writing into an HTML Element Using `innerHTML`

The `innerHTML` property is used to write into an HTML element. 

```js title="index.html"
<!DOCTYPE html>
<html>
  <body>

    <p id="demo"></p>

    <script>
      document.getElementById('demo').innerHTML = 'Hello World!';
    </script>

  </body>
</html>
```

<BrowserWindow minHeight="300px" url="http://127.0.0.1:5500/index.html">
    <p id="demo">Hello World!</p>
</BrowserWindow>

### 5. Writing into an HTML Element Using `window.alert()`

The `window.alert()` method is used to write into an HTML element. 

```js title="index.html"
<!DOCTYPE html>
<html>
  <body>

    <p id="demo"></p>

    <script>
      window.alert('Hello World!');
    </script>

  </body>
</html>
```

### 6. Writing into an HTML Element Using `document.getElementById().innerText`

The `document.getElementById().innerText` method is used to write into an HTML element. 

```js title="index.html"
<!DOCTYPE html>
<html>
  <body>

    <p id="demo"></p>

    <script>
      document.getElementById('demo').innerText = 'Hello World!';
    </script>

  </body>
</html>
```

<BrowserWindow minHeight="300px" url="http://127.0.0.1:5500/index.html">
    <p id="demo">Hello World!</p>
</BrowserWindow>

:::info
**Before moving to the next section, make sure you have a basic understanding of the above concepts.**
You can use any of the above methods to display the output in JavaScript.
:::
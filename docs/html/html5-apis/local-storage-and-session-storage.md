---
id: local-storage-and-session-storage
title: Local Storage and Session Storage in HTML
sidebar_label: Local Storage and Session Storage
sidebar_position: 2
tags: [html, web-development, local-storage, session-storage]
description: In this tutorial, you will learn how to use the Local Storage and Session Storage APIs in HTML to store data locally in the browser.
Based on the structure and content of the `geolocation-api.md` file you provided, here is a similar structure for a `local-storage-and-session-storage.md` file:
---
# Local Storage and Session Storage in HTML

## Introduction
In this tutorial, you will learn how to use the Local Storage and Session Storage APIs in HTML to store data locally in the browser. These APIs provide a way to save key/value pairs in a web browser. The data stored in Local Storage persists until explicitly deleted, while data in Session Storage is cleared when the page session ends.

## HTML Web Storage Objects
HTML web storage provides two objects for storing data on the client:


- window.localStorage - stores data with no expiration date
- window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)


## Using Local Storage
Local Storage is used to store data that does not expire with the session. Here's a basic example of setting and retrieving a value:

```html
<html>
    <body>
        <script>
        // Store
        localStorage.setItem("lastname", "Smith");
        // Retrieve
        document.write(localStorage.getItem("lastname"));
        </script>
    </body>
</html>
```

## Using Session Storage
Session Storage is similar to Local Storage but has a shorter lifecycle. Here's how you can use Session Storage:

```html
<html>
    <body>
        <script>
        // Store
        sessionStorage.setItem("firstname", "John");
        // Retrieve
        document.write(sessionStorage.getItem("firstname"));
        </script>
    </body>
</html>
```

### Example Explained
- The `setItem()` method is used to store data in Local Storage or Session Storage.
- The `getItem()` method is used to retrieve data from Local Storage or Session Storage.
- Data stored in Local Storage remains until it is explicitly removed, while data in Session Storage is cleared when the session ends.

## Handling Data
You can also remove data from storage or clear all data:

```javascript
// Remove item
localStorage.removeItem("lastname");

// Clear all items
localStorage.clear();
```

## Conclusion
The Local Storage and Session Storage APIs provide powerful capabilities for web developers to store data directly in the browser. This can enhance user experience by allowing web applications to save user preferences, shopping cart contents, and more across sessions. Remember to consider privacy and security when storing sensitive information.

This markdown file provides a structured and comprehensive guide similar to your `geolocation-api.md` file, focusing on Local Storage and Session Storage in HTML.
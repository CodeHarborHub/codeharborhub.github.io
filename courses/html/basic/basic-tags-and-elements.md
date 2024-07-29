---
id: basic-tags-and-elements
title: Basic Tags and Elements
sidebar_label: Basic Tags and Elements
sidebar_position: 3
description: "Learn the basic tags and elements of HTML, the foundation of web development."
tags: [html courses, web development in html courses, html basic, basic tags and elements]
keywoards: [html courses, web development in html courses, html basic, basic tags and elements]
author: [CodeHarborHub, Ajay Dhangar]
---

<img src="/courses/html/basic-tags-and-elements.png" alt="Basic Tags and Elements banner" />

<br />
<br />

In this section, you will learn the basic tags and elements of HTML, the foundation of web development. HTML stands for HyperText Markup Language. It is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

## What are HTML Tags and Elements?

HTML tags and elements are the building blocks of HTML pages. HTML tags are used to define the structure of a web page and are written using angle brackets (`<` and `>`). HTML elements are delineated by tags and provide information about the content of the page. Browsers do not display the HTML tags, but use them to interpret the content of the page.

HTML elements can be nested within each other to create a hierarchy of content. For example, a paragraph element (`<p>`) can contain a link element (`<a>`) or an image element (`<img>`). This nesting of elements allows you to create complex layouts and structures for your web pages.

## Basic HTML Tags

Here are some of the basic HTML tags that you will use frequently when creating web pages:

| Tag | Description |
| --- | ----------- |
| `<html>` | Defines the root element of an HTML page |
| `<head>` | Contains meta-information about the document, such as the title and links to external resources |
| `<title>` | Defines the title of the document, which is displayed in the browser tab |
| `<body>` | Contains the content of the document, such as text, images, and links |
| `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` | Defines headings of different levels |
| `<p>` | Defines a paragraph of text |
| `<a>` | Defines a hyperlink to another web page or resource |
| `<img>` | Defines an image to be displayed on the page |
| `<ul>`, `<ol>`, `<li>` | Defines unordered and ordered lists |
| `<table>`, `<tr>`, `<th>`, `<td>` | Defines a table with rows, headers, and data cells |
| `<div>`, `<span>` | Defines generic containers for grouping and styling content |

These are just a few of the many HTML tags available for creating web pages. As you learn more about HTML, you will discover additional tags and elements that can be used to enhance the structure and appearance of your pages.

## Example: Creating a Simple HTML Page

Let's create a simple HTML page that demonstrates the use of some basic tags and elements. Open a text editor and create a new file named `index.html`. Copy and paste the following code into the file:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://codeharborhub.github.io/">Visit CodeHarborHub</a> <br /><br />
    <img src="https://github.com/codeharborhub.png" alt="CodeHarborHub Logo" width="40" />
</body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://codeharborhub.github.io/">Visit CodeHarborHub</a>
    <br /><br />
    <img src="/img/nav-logo.jpg" alt="CodeHarborHub Logo" width="80" />
</BrowserWindow>

In this example, the HTML file contains the following elements:

- `<!DOCTYPE html>`: This declaration defines the document type and version of HTML.
- `<html>`: This element is the root element of an HTML page.
- `<head>`: This element contains meta-information about the HTML document.
- `<title>`: This element specifies the title of the HTML document.
- `<body>`: This element contains the content of the HTML document.
- `<h1>`: This element defines a heading.
- `<p>`: This element defines a paragraph.
- `<a>`: This element defines a hyperlink.
- `<img>`: This element defines an image to be displayed on the page.

You can open the `index.html` file in a web browser to see the rendered web page. Experiment with adding and modifying different elements to create your own web pages using HTML tags and elements.


## Summary

In this section, you learned about the basic tags and elements of HTML, the foundation of web development. HTML tags are used to define the structure of a web page, and HTML elements provide information about the content of the page. By using HTML tags and elements, you can create structured documents with text, images, links, and other elements. As you continue to learn HTML, you will discover additional tags and elements that can be used to enhance the appearance and functionality of your web pages.
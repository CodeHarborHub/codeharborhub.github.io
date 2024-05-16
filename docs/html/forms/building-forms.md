---
id: building-forms
title: Building Forms in HTML
sidebar_label: Building Forms
sidebar_position: 1
tags: [html, web-development, forms, building-forms]
description: In this tutorial, you will learn how to build forms in HTML. Forms are used to collect user input on web pages, such as login forms, contact forms, and search forms.
---

HTML forms are essential for interactive web pages, allowing users to enter data that can be sent to a server for processing. Forms can include a variety of elements such as text fields, checkboxes, radio buttons, and submit buttons.

## Creating Forms

To create a form in HTML, you use the `<form>` element. This element serves as the container for the form elements.

```html
<form>
  <!-- Form elements go here -->
</form>
```

## Form Fields
The `<input type="text">` defines a single-line input field for text input.
A form can contain various elements to collect user input:

<Tabs>
    <TabItem value="HTML">
    ```html {2,4,5}
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        <input type="submit" value="Submit">
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow url ="http://127.0.0.1:5500/index.html">
        <div>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"></input>
            <br></br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
        </form>
        </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

- **Text Fields** : The `<input type="text">` element defines a one-line text input field.
- **Email Fields**: The `<input type="email">` element is used for input fields that should contain an e-mail address.
- **Submit Button**: The `<input type="submit">` element is used to submit the form to the server.

## Handling Form Data

When a form is submitted, the form data is sent to the server. The method of sending the data can be specified using the `method` attribute in the `<form>` element:

- **GET**: The form data is appended to the action URL as query parameters and sent in the URL of the request.
- **POST**: The form data is sent in the body of the request, not in the URL.

```html {1}
<form action="/submit-form" method="post">
  <!-- Form elements -->
</form>
```

## The `<input>` Element
The HTML `<input>` element is the most used form element.
An `<input>` element can be displayed in many ways, depending on the type attribute.

Here are some examples:
<table class="ws-table-all">
 <tbody><tr>
  <th>Type</th>
  <th>Description</th>
 </tr>
 <tr>
  <td>&lt;input type="text"&gt;</td>
  <td>Displays a single-line text input field</td>
 </tr>
 <tr>
  <td>&lt;input type="radio"&gt;</td>
  <td>Displays a radio button (for selecting one of many choices)</td>
 </tr>
 <tr>
  <td>&lt;input type="checkbox"&gt;</td>
  <td>Displays a checkbox (for selecting zero or more of many choices)</td>
 </tr>
 <tr>
  <td>&lt;input type="submit"&gt;</td>
  <td>Displays a submit button (for submitting the form)</td>
 </tr>
 <tr>
  <td>&lt;input type="button"&gt;</td>
  <td>Displays a clickable button</td>
 </tr>
 </tbody></table>


## Conclusion

HTML forms are a crucial part of web development, enabling user interaction and data collection. By understanding how to create forms, use form elements, and handle form submissions, you can create dynamic and interactive web pages. Remember to validate user input and consider security practices to protect user data and your website.
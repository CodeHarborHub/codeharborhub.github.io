---
id: lesson-1
title: "Creating Forms"
sidebar_label: Creating Forms
sidebar_position: 1
description: "Learn to Creating Forms and uses."
tags: [courses,beginner-level,Forms,Introduction]
---
 
Forms are essential for collecting user input on web pages. The `<form>` tag is used to create a form, and within it, various form elements like input fields, text areas, and select boxes are used to capture user data.

**Basic Form Example:**
```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <input type="submit" value="Submit">
</form>
```

In this example:
- `action="/submit"`: Specifies where to send the form data when submitted.
- `method="post"`: Specifies the HTTP method to use when sending the form data.

**Explanation of Basic Form Elements:**
- `<form>`: Defines the form.
- `<label>`: Defines a label for an input element, enhancing accessibility.
- `<input>`: Defines an input field where the user can enter data.
- `<br>`: Inserts a line break for better layout.
- `<input type="submit">`: Defines a submit button that sends the form data.


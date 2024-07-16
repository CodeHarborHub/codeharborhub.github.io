---
id: lesson-3
title: "Form Attributes and Validation"
sidebar_label: Form Attributes and Validation
sidebar_position: 3
description: "Lear to Form Attributes and Validation."
tags: [courses,beginner-level,Form Attributes,Form Validation,Introduction]
------
 

HTML forms come with various attributes and validation features to ensure the data submitted is accurate and complete.

**Common Form Attributes:**
- `action`: URL where the form data should be sent.
- `method`: HTTP method for sending form data (`get` or `post`).
- `autocomplete`: Enables or disables autocomplete for the form.
- `novalidate`: Disables HTML5 form validation.

**Input Attributes for Validation:**
- `required`: Ensures the field must be filled out before submitting.
- `min` and `max`: Specifies the minimum and maximum values for number or date input.
- `maxlength`: Limits the number of characters allowed in a text input.
- `pattern`: Specifies a regular expression that the input value must match.
- `placeholder`: Provides a hint to the user about what to enter in the input.

**Example with Validation:**
```html
<form>
  <label for="username">Username (required):</label>
  <input type="text" id="username" name="username" required>
  <br>
  <label for="email">Email (must be a valid email address):</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="age">Age (18-99):</label>
  <input type="number" id="age" name="age" min="18" max="99">
  <br>
  <label for="password">Password (at least 8 characters):</label>
  <input type="password" id="password" name="password" minlength="8" required>
  <br>
  <input type="submit" value="Register">
</form>
```
In this example:
- `required` ensures the fields must be filled out before submitting.
- `type="email"` validates the input as an email address.
- `min` and `max` restrict the age input to between 18 and 99.
- `minlength` ensures the password has at least 8 characters.

HTML5 also provides custom validation messages using the `setCustomValidity` method in JavaScript, allowing for more complex validation logic.

By understanding how to create and validate forms using various elements and attributes, you can efficiently collect accurate user data and enhance the usability of your web applications.
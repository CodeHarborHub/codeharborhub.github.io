---
id: lesson-2
title: "Form Validation and Attributes"
sidebar_label:  Form Validation and Attributes
sidebar_position: 2
description: "Learn to New Input Types in HTML5"
tags: [courses,intermediate-level, Form Validation and Attributes,Introduction]
---  


HTML5 provides built-in form validation features and attributes that help ensure the data entered by users is accurate and complete before submission.

**Common Form Validation Attributes:**
- `required`: Ensures the input field must be filled out before submitting.
- `pattern`: Specifies a regular expression the input value must match.
- `min` and `max`: Sets the minimum and maximum values for numerical inputs.
- `maxlength`: Limits the number of characters allowed in a text input.
- `step`: Specifies the legal number intervals for numerical inputs.

**Example with Validation Attributes:**
```html
<form>
  <label for="username">Username (required):</label>
  <input type="text" id="username" name="username" required>
  <br>
  <label for="password">Password (8-16 characters):</label>
  <input type="password" id="password" name="password" minlength="8" maxlength="16" required>
  <br>
  <label for="email">Email (must be valid):</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="age">Age (18-99):</label>
  <input type="number" id="age" name="age" min="18" max="99">
  <br>
  <input type="submit" value="Register">
</form>
```
In this example:
- The `required` attribute ensures fields must be filled out before submitting.
- `minlength` and `maxlength` attributes ensure the password length is between 8 and 16 characters.
- The `type="email"` input validates that the input follows the standard email format.
- `min` and `max` attributes restrict the age input to between 18 and 99.
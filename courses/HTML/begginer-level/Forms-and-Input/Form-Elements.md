---
id: lesson-2
title: "Form Elements"
sidebar_label: Form Elements
sidebar_position: 2
description: "Learn to Form Elements(label,input,textarea)."
tags: [courses,beginner-level,Forms,Introduction]
--- 

HTML provides various form elements to collect different types of user input.

**Input Element:**
The `<input>` element is versatile and supports various input types like text, email, password, checkbox, radio, etc.

**Example with Different Input Types:**
```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob">
  <br>
  <input type="submit" value="Register">
</form>
```
In this example:
- `type="text"`: Single-line text input.
- `type="password"`: Password input with hidden characters.
- `type="email"`: Email input with built-in validation.
- `type="date"`: Date input with a date picker.

**Textarea Element:**
The `<textarea>` element is used for multi-line text input.

**Example:**
```html
<form>
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>
  <br>
  <input type="submit" value="Send">
</form>
```
In this example, `rows` and `cols` attributes specify the size of the text area.

**Select Element:**
The `<select>` element creates a drop-down list, and `<option>` elements define the options in the list.

**Example:**
```html
<form>
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>
  <br>
  <input type="submit" value="Submit">
</form>
```
In this example, the user can select a country from the drop-down list.


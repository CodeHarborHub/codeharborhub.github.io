---
id: lesson-3
title: "Creating Accessible Forms"
sidebar_label:  Creating Accessible Forms
sidebar_position: 3
description: "Learn to Accessible Forms"
tags: [courses,intermediate-level,Accessible Forms,Introduction]
---   

Accessibility ensures that forms are usable by everyone, including people with disabilities. Here are some best practices for creating accessible forms:

**Use Labels for Inputs:**
Each form control should have a corresponding `<label>` element to provide descriptive text. The `for` attribute of the `<label>` should match the `id` of the input.

**Example:**
```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  <br>
  <input type="submit" value="Login">
</form>
```

**Provide Instructions and Feedback:**
Include instructions for filling out the form and provide feedback for validation errors.

**Example:**
```html
<form>
  <p>Please fill out the form below:</p>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <small>Enter a valid email address.</small>
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  <small>Password must be at least 8 characters long.</small>
  <br>
  <input type="submit" value="Register">
</form>
```

**Use Fieldsets and Legends:**
Use `<fieldset>` and `<legend>` elements to group related form controls and provide a description.

**Example:**
```html
<form>
  <fieldset>
    <legend>Personal Information</legend>
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname" required>
    <br>
    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname" required>
  </fieldset>
  <br>
  <input type="submit" value="Submit">
</form>
```

**Ensure Keyboard Accessibility:**
Forms should be fully navigable using a keyboard. Avoid using non-standard input controls that may not be accessible.

**Include ARIA Attributes:**
ARIA (Accessible Rich Internet Applications) attributes can be used to enhance accessibility by providing additional information to assistive technologies.

**Example:**
```html
<form>
  <label for="search">Search:</label>
  <input type="search" id="search" name="search" aria-label="Search">
  <input type="submit" value="Search">
</form>
```

By following these best practices and utilizing HTML5's advanced input types and form validation features, you can create forms that are both user-friendly and accessible.
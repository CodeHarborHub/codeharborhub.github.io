---
id: form-input-elements
title: Form Input Elements in HTML
sidebar_label: Form Input Elements
sidebar_position: 1
tags: [html, web-development, forms, form-input-elements]
description: In this tutorial, you will learn about form input elements in HTML. Form input elements are used to collect user input on web pages, such as text fields, radio buttons, checkboxes, and more.
---

HTML provides a variety of input elements that allow users to input data within a form. These elements are essential for creating interactive web applications and collecting user information. Below is a comprehensive list of commonly used form input elements in HTML along with their attributes and descriptions.

### `<input>`
The `<input>` element is used to create various types of input fields within a form. It is a self-closing tag and does not contain any content.

## Attributes:
* `type` : Specifies the type of input field.
* `name`: Provides a name for the input field, which is used when submitting the form data.
* `value`: Sets the initial value of the input field.
* `placeholder`: Specifies a short hint that describes the expected value of the input field.
* `required`: Indicates that the input field must be filled out before submitting the form.
* `disabled`: Disables the input field, preventing user interaction.
* `readonly`: Specifies that the input field is read-only and cannot be modified by the user.

Example:- 

    <input type="text" name="username" placeholder="Enter your username" required>

### `<textarea>`
The `<textarea>` element is used to create a multiline text input field where users can enter longer text entries.

## Attributes:
* `name`: Provides a name for the textarea, which is used when submitting the form data.
* `rows`: Specifies the visible number of lines in the textarea.
* `cols`: Specifies the visible number of characters per line in the textarea.
* `placeholder`: Specifies a short hint that describes the expected value of the textarea.
* `required`: Indicates that the textarea must be filled out before submitting the form.
* `disabled`: Disables the textarea, preventing user interaction.

Example:- 

    <textarea name="message" rows="4" cols="50" placeholder="Enter your message" required></textarea>

### `<select>`
The `<select>` element creates a dropdown list from which users can select one or more options.

## Attributes: 
* `name`: Provides a name for the select element, which is used when submitting the form data.
* `multiple`: Allows users to select multiple options from the dropdown list.
* `size`: Specifies the number of visible options in the dropdown list.
* `required`: Indicates that at least one option must be selected before submitting the form.
* `disabled`: Disables the select element, preventing user interaction.

Example: 

    <select name="gender" required>
    <option value="">Select your gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select>

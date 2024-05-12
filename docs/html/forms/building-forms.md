---
id: building-forms
title: Building Forms in HTML
sidebar_label: Building Forms
sidebar_position: 1
tags: [html, web-development, forms, building-forms]
description: In this tutorial, you will learn how to build forms in HTML. Forms are used to collect user input on web pages, such as login forms, contact forms, and search forms.
---

HTML provides a set of elements and attributes to create interactive forms that allow users to input data. Forms are essential for collecting information from users, such as contact details, feedback, or preferences. In this guide, we'll cover the fundamental elements and attributes required to build forms in HTML.

## The `<form>` Element
The `<form>` element serves as a container for form elements such as input fields, buttons, checkboxes, etc. It defines the boundary of the form and specifies where the form data should be sent upon submission.

        <form>
            -.
            -form elements
            -.
        </form>

## The `<input>` element
Input elements allow users to enter data into the form. There are various types of input elements, each catering to different data types and input methods

Common input types include:

        -Text: <input type="text">
        -Password: <input type="password">
        -Email: <input type="email">
        -Checkbox: <input type="checkbox">
        -Radio Buttons: <input type="radio">
        -File: <input type="file">
        -Date: <input type="date">
        -Number: <input type="number">
        -Submit Button: <input type="submit">

## The `<label>` element
The `<label>` element associates a text label with an input element, improving accessibility and user experience.

Example:

        <label for="username">Username:</label>
        <input type="text" id="username" name="username">

## Select Element `<select>` and Option Element `<option>`
The `<select>` element creates a dropdown list, while <option> elements define the options within the dropdown.
Example: 

        <select name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        </select>

## Textarea Element `<textarea>`
The `<textarea>` element allows users to input multi-line text.
Example:

        <textarea name="message" rows="4" cols="50">Enter your message here</textarea>

## Submit Button
A submit button allows users to send the form data to the server.
Example: 

        <input type="submit" value="Submit">


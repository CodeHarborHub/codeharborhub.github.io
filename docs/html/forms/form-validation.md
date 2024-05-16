---
id: form-validation
title: Form Validation in HTML
sidebar_label: Form Validation
sidebar_position: 4
tags: [html, web-development, forms, form-validation]
description: In this tutorial, you will learn how to validate forms in HTML using built-in form validation attributes and JavaScript.
---

HTML forms are crucial for collecting user input, but it's equally important to ensure that the input is valid. Form validation can be performed on the client side (in the browser) or on the server side. This document focuses on client-side validation using HTML5 attributes, providing an overview of the most commonly used validation techniques, along with code examples and their outputs.

## The required Attribute

The `required` attribute is a simple way to make an input field mandatory.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <input type="submit" value="Submit">
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                The form will prompt the user to fill out the 'Name' field if it's left empty upon submission.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The type Attribute for Validation

Using the `type` attribute, you can specify the kind of data expected in an input field, which helps in validating the input.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <input type="submit" value="Submit">
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                The form will validate the 'Email' field to ensure it contains a valid email address format.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The pattern Attribute

The `pattern` attribute allows you to define a regular expression that the input field's value must match.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <label for="phone">Phone (123-456-7890):</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
        <input type="submit" value="Submit">
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                The form will only accept the phone number if it matches the specified pattern.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The minlength and maxlength Attributes

These attributes define the minimum and maximum length of the input data.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" minlength="4" maxlength="8" required>
        <input type="submit" value="Submit">
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                The form will enforce the 'Username' field to be between 4 and 8 characters.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Conclusion

Client-side form validation in HTML helps ensure that users fill out forms correctly, improving the quality of the data collected. By using HTML5 validation attributes like `required`, `type`, `pattern`, `minlength`, and `maxlength`, developers can create forms that are both user-friendly and robust. Remember, client-side validation does not replace the need for server-side validation, as client-side validation can be bypassed.
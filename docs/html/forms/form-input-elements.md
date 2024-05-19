---
id: form-input-elements
title: Form Input Elements in HTML
sidebar_label: Form Input Elements
sidebar_position: 1
tags: [html, web-development, forms, form-input-elements]
description: In this tutorial, you will learn about form input elements in HTML. Form input elements are used to collect user input on web pages, such as text fields, radio buttons, checkboxes, and more.
---

HTML forms support a variety of input elements to collect user data efficiently. Each input type serves a specific purpose, enabling users to enter data in a format that suits the information being collected. This document provides an overview of the most commonly used HTML input elements, along with code examples and their outputs.

## Text Input

The `<input type="text">` element displays a single-line text input field, allowing users to enter free text.

<Tabs>
    <TabItem value="HTML">
    ```html
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"></input>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Radio Buttons

The `<input type="radio">` element displays a radio button, which allows users to select one option from a set of predefined options.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
    </form>
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <form>
            <input type="radio" id="male" name="gender" value="male"></input>
            <label for="male">Male</label><br></br>
            <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Female</label><br></br>
            </form>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Checkbox

The `<input type="checkbox">` element displays a checkbox, allowing users to select zero or more options from a set of choices.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form>
        <input type="checkbox" id="subscribe" name="subscribe" value="newsletter">
        <label for="subscribe">Subscribe to newsletter</label>
    </form>
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
                <form>
                    <input type="checkbox" id="subscribe" name="subscribe" value="newsletter"></input>
                    <label for="subscribe">Subscribe to newsletter</label>
                </form>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Submit Button

The `<input type="submit">` element displays a submit button, which is used to submit the form to the server.

<Tabs>
    <TabItem value="HTML">
```html
<form>
  <input type="submit" value="Submit">
</form>
```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <form>
  <input type="submit" value="Submit"></input>
</form>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Button

The `<input type="button">` element displays a clickable button, not specifically for form submission.

<Tabs>
    <TabItem value="HTML">
    ```html
    <input type="button" value="Click Me" onclick="alert('Hello World!')"></input>
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <input type="button" value="Click Me" onclick="alert('Hello World!')"></input>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Email Field

The `<input type="email">` element is used for input fields that should contain an e-mail address.

<Tabs>
    <TabItem value="HTML">
    ```html
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Password Field

The `<input type="password">` element displays a field where the user can enter a password.

<Tabs>
    <TabItem value="HTML">
    ```html
    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd">
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd"></input>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Input elements Example
<Tabs>
    <TabItem value="HTML">
    ```html {3,4,6,8,11,13,14,15}
    <form action="/submit" method="post">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <input type="radio" id="male" name="gender" value="male"></input>
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female"></input>
        <label for="female">Female</label>
        <input type="checkbox" id="subscribe" name="subscribe" value="newsletter"></input>
        <label for="subscribe">Subscribe to newsletter</label>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input>
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"></input>
        <input type="button" value="Click Me"></input>
        <input type="submit" value="Submit"></input>
    </form>
    ```
    </TabItem>
    <TabItem value="Ouput">
        <BrowserWindow>
            <div>
            <form action="/submit" method="post">
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"></input><br></br>
                <input type="radio" id="male" name="gender" value="male"></input>
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"></input>
                <label for="female">Female</label><br></br>
                <input type="checkbox" id="subscribe" name="subscribe" value="newsletter"></input>
                <label for="subscribe">Subscribe to newsletter</label><br></br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"></input><br></br>
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd"></input><br></br>
                <input type="button" value="Click Me" onclick="alert('Hello World!')"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Other Input Types
Here are the different input types you can use in HTML:

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`


## Conclusion

HTML forms provide a wide range of input elements designed to facilitate the collection of user data. By understanding how to use these elements effectively, developers can create forms that are both user-friendly and functional. Remember to validate user input to ensure data integrity and security.
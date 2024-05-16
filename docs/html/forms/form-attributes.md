---
id: form-attributes
title: Form Attributes in HTML
sidebar_label: Form Attributes
sidebar_position: 3
tags: [html, web-development, form-attributes, forms]
description: In this tutorial, you will learn about form attributes in HTML. Form attributes define the appearance, behavior, and structure of forms on web pages.
---

HTML forms and their input elements can be customized and controlled using various attributes. These attributes define the behavior and characteristics of the form and its elements, such as where to send the form data, how to send it, and more. This document provides an overview of the most commonly used HTML form attributes, along with code examples and their outputs.

## The `action` Attribute

The `action` attribute specifies where to send the form data when a form is submitted.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <!-- Form elements go here -->
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                Form data is sent to "/submit-form" when submitted.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The `method` Attribute

The `method` attribute specifies how to send form data (the form-submitting method).

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post">
        <!-- Form elements go here -->
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                Form data is sent using the POST method.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The `enctype` Attribute

The `enctype` attribute specifies how the form data should be encoded when submitting it to the server.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post" enctype="multipart/form-data">
        <!-- Form elements go here -->
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                Form data is encoded as multipart/form-data.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The `autocomplete` Attribute

The `autocomplete` attribute specifies whether a form or an input element should have autocomplete enabled.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post" autocomplete="on">
        <!-- Form elements go here -->
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                Autocomplete is enabled for this form.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## The `novalidate` Attribute

The `novalidate` attribute specifies that the form should not be validated when submitted.

<Tabs>
    <TabItem value="HTML">
    ```html
    <form action="/submit-form" method="post" novalidate>
        <!-- Form elements go here -->
    </form>
    ```
    </TabItem>
    <TabItem value="Output">
        <BrowserWindow>
            <div>
                This form will not be validated upon submission.
            </div>
        </BrowserWindow>
    </TabItem>
</Tabs>

## Other Form Attributes

Here are other form attributes you can use in HTML:

<table>
 <tbody><tr>
  <th>Attribute</th>
  <th>Description</th>
 </tr>
 <tr>
  <td>action</td>
  <td>Specifies where to send the form-data when a form is submitted</td>
 </tr>
 <tr>
  <td>autocomplete</td>
  <td>Specifies whether a form should have autocomplete on or off</td>
 </tr>
 <tr>
  <td>enctype</td>
  <td>Specifies how the form-data should be encoded when submitting it to the 
  server (only for method="post")</td>
 </tr>
 <tr>
  <td>method</td>
  <td>Specifies the HTTP method to use when sending form-data</td>
 </tr>
 <tr>
  <td>name</td>
  <td>Specifies the name of the form</td>
 </tr>
 <tr>
  <td>novalidate</td>
  <td>Specifies that the form should not be validated when submitted</td>
 </tr>
 <tr>
  <td>rel</td>
  <td>Specifies the relationship between a linked resource and the current 
  document</td>
 </tr>
 <tr>
  <td>target</td>
  <td>Specifies where to display the response that is received after submitting 
  the form</td>
 </tr>
</tbody>
</table>

## Conclusion

HTML form attributes provide powerful ways to control the behavior of forms and their elements. By understanding and utilizing these attributes effectively, developers can create more functional and user-friendly forms. Always consider the best practices for form design and user experience when working with these attributes.
---
id: form-attributes
title: Form Attributes in HTML
sidebar_label: Form Attributes
sidebar_position: 3
tags: [html, web-development, form-attributes, forms]
description: In this tutorial, you will learn about form attributes in HTML. Form attributes define the appearance, behavior, and structure of forms on web pages.
---

HTML forms play a crucial role in web development, allowing users to interact with web pages by submitting data to servers. Various attributes can be applied to form elements to enhance functionality, validation, and accessibility.

### 1.`action` attribute
* Description: Specifies the URL to which the form data will be submitted upon submission.
* Value: Any valid URL.
* Usage: 

        <form action="URL">...</form>
* Example: 

        <form action="/submit">...</form>

### 2.`method` attribute
* Description:  Defines the HTTP method used to submit the form data.
* Value: `GET` or `POST`.
* Usage: 

        <form method="GET|POST">...</form>
* Example: 

        <form method="POST">...</form>

### 3.`autocomplete` attribute
* Description:  Specifies whether the browser should automatically complete form fields.
* Value: `on` or `off`.
* Usage: 

        <form autocomplete="on|off">...</form>
* Example: 

        <form autocomplete="off">...</form>

### 4.`target` attribute
* Description:  Specifies where to display the response that is received after submitting the form.
* Value:
    - _blank :  The response is displayed in a new window or tab
    - _self :  The response is displayed in the current window
    - _parent :  The response is displayed in parent frame
    - _top :  The response is displayed in full body of the window
    - framename :  The response is displayed in a named iframe
* Example: 

        <form target="_blank">

### 4.`novalidate` attribute
* Description: It is a Boolean attribute. When present, it specifies that the form-data (input) should not be validated when submitted.

* Example: 

        <form action="" novalidate>

### Some other attributes
* `accept-charset` - Specifies the character encodings used for form submission
* `name` - Specifies the name of the form
* `enctype` - Specifies how the form-data should be encoded when submitting it to the server (only for method="post")
* `rel` - Specifies the relationship between a linked resource and the current document

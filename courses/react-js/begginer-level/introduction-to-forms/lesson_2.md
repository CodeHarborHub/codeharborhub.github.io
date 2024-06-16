---
id: lesson-2
title: "Handling form submissions (sending data or local processing)"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "learn how to handle form submissions in React applications. Handling form submissions involves sending form data to a server or processing it locally within the application. In this lesson, we will explore how to handle form submissions in React using event handlers and state management."
tags: [courses, react-js, beginner-level, introduction-to-forms, form-submissions, event-handlers, state-management]
---

import FormComponent from "./FormComponent";

In React applications, handling form submissions is a common task that involves sending form data to a server or processing it locally within the application. Form submissions are triggered when a user interacts with a form element, such as clicking a submit button or pressing the Enter key. In this lesson, we will explore how to handle form submissions in React using event handlers and state management.

## What is form submission in React?

Form submission in React refers to the process of sending form data to a server or processing it locally within the application. When a user interacts with a form element, such as entering text in an input field or selecting an option from a dropdown, the form data is collected and submitted to a server for processing. Form submissions can be triggered by various events, such as clicking a submit button, pressing the Enter key, or using a custom event handler.

Here's an example of handling form submissions in React using an event handler:

```jsx title="FormComponent.js"
import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted: " + JSON.stringify(formData));
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
        maxWidth: "300px",
        margin: "auto",
        boxShadow: "2px 2px 5px #666",
        borderRadius: "5px",
      }}
    >
      <label>Username:</label>

      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
```


<BrowserWindow minHeight="300px">
  <FormComponent />
</BrowserWindow>

In this example, the `FormComponent` component manages form data using the `useState` hook. The form data is stored in the `formData` state object, which contains the `username` and `email` fields. The `handleChange` function updates the form data when the user enters text in the input fields, and the `handleSubmit` function is triggered when the form is submitted.

When the form is submitted, the `handleSubmit` function prevents the default form submission behavior using `event.preventDefault()`, displays an alert message with the form data, and logs the form data to the console. This example demonstrates how to handle form submissions in React by capturing form data and processing it using event handlers and state management.

:::info 
In the `handleChange` function, we use object destructuring to extract the `name` and `value` properties from the event target. This allows us to update the form data dynamically based on the input field name.

The `onSubmit` event handler is used to capture the form submission event and trigger the `handleSubmit` function. By calling `event.preventDefault()` in the `handleSubmit` function, we prevent the default form submission behavior and handle the form data locally within the application.
:::

:::tip
When handling form submissions in React, you can perform additional validation, data processing, or API calls based on the form data. By managing form data in state and defining event handlers to update the form data, you can create interactive forms that respond to user input and trigger actions when the form is submitted.

Form submissions can be used to send data to a server for processing or perform local operations within the application, depending on the requirements of the application.

:::

## Conclusion

Handling form submissions in React involves capturing form data and processing it using event handlers and state management. By managing form data in state and defining event handlers to update the form data, you can create interactive forms that respond to user input and trigger actions when the form is submitted. Form submissions can be used to send data to a server for processing or perform local operations within the application, depending on the requirements of the application.
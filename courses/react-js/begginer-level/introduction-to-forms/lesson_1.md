---
id: lesson-1
title: "Creating controlled components to manage form data with state"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "learn how to create controlled components in React to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications."
tags:
  [
    courses,
    react-js,
    beginner-level,
    introduction-to-forms,
    controlled-components,
    form-data,
    state-management,
  ]
---

In React, controlled components are a way to manage form data using state. Controlled components allow you to handle form inputs and manage their state, enabling you to control and validate user input in React applications. In this lesson, we will explore how to create controlled components to manage form data with state in React.

## What are controlled components in React?

Controlled components are form elements whose value is controlled by React state. Instead of letting the DOM handle the form data, you manage it using React state and update it based on user input. This approach allows you to control and validate user input, making it easier to manage form data in React applications.

Here's an example of creating a controlled input component in React:

```jsx title="ControlledInput.js"
import React, { useState } from "react";

function ControlledInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter your name"
    />
  );
}

export default ControlledInput;
```

<BrowserWindow>
  <input type="text" placeholder="Enter your name" />
</BrowserWindow>

In this example, we create a controlled input component `ControlledInput` that manages its value using React state. The `value` state variable holds the current value of the input, and the `handleChange` function updates the state based on user input. The input element's value is set to the `value` state variable, making it a controlled component.

## Handling form data with controlled components

Controlled components allow you to handle form data in React applications by managing the state of form inputs. You can update the state based on user input and use the state to control the value of form elements. This approach enables you to validate user input, perform calculations, and trigger actions based on form data changes.

Here's how you can handle form data with controlled components:

```jsx live
function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        border: "1px solid #ccc",
        padding: "10px",
        boxShadow: "2px 2px 4px #666",
        borderRadius: "5px",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </form>
  );
}
```

In this example, we create a form component `FormComponent` that manages the state of two input fields: `name` and `email`. The `handleNameChange` and `handleEmailChange` functions update the state based on user input, and the `handleSubmit` function logs the form data when the form is submitted. The input elements are controlled components that display the current state values and update them as the user types.

By using controlled components to manage form data, you can create interactive and dynamic forms in React applications. Controlled components allow you to control the form data flow, validate user input, and handle form submissions with ease.

:::note Note 📝

Controlled components provide a powerful way to manage form data in React applications. By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes. This approach provides a flexible and robust way to manage form data and create interactive forms in React.

:::

:::tip Recap 📌

- Controlled components are form elements whose value is controlled by React state.
- You can manage form data using controlled components to handle user input, validate data, and trigger actions based on form data changes.
- By controlling the value of form elements using React state, you can create interactive and dynamic forms in React applications.
- Controlled components provide a flexible and robust way to manage form data and create interactive forms in React.
- Using controlled components allows you to control the form data flow, validate user input, and handle form submissions with ease.
- Controlled components are a powerful way to manage form data in React applications.
- By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes.
- This approach provides a flexible and robust way to manage form data and create interactive forms in React.

:::

## Conclusion

Controlled components are a powerful way to manage form data in React applications. By controlling the value of form elements using React state, you can handle user input, validate data, and trigger actions based on form data changes. This approach provides a flexible and robust way to manage form data and create interactive forms in React.

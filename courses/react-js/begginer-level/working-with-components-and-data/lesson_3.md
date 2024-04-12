---
id: lesson-3
title: "Handling user interactions with events (onClick, onChange, etc.)"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to handle user interactions in React using event handlers like onClick, onChange, and more. Understand how to respond to user actions and update the UI based on events."
tags:
  [
    courses,
    react-js,
    beginner-level,
    working-with-components-and-data,
    events,
    event-handlers,
    onClick,
    onChange,
    onSubmit
  ]
---

import ChangeEventExample from './ChangeEventExample';
import SubmitEventExample from './SubmitEventExample';

In this lesson, you will learn how to handle user interactions in React using event handlers. You will understand how to respond to user actions and update the UI based on events like `onClick`, `onChange`, and more.

## Introduction to event handling in React

Event handling is an essential part of building interactive web applications. In React, you can handle user interactions using event handlers like `onClick`, `onChange`, `onSubmit`, etc. These event handlers allow you to respond to user actions and update the UI based on events.

## Handling user interactions with `onClick` event

The `onClick` event handler is used to handle click events on elements like buttons, links, etc. You can define a function that gets called when the element is clicked. Let's see an example of handling a click event in React:

```jsx title="ClickEventExample.js"
import React from "react";

function ClickEventExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickEventExample;
```

<BrowserWindow minHeight="300px">
  <button onClick={() => {
    alert('Button clicked!');
  }}>Click me</button>
</BrowserWindow>

In the above example, we have defined a `handleClick` function that shows an alert when the button is clicked. We have attached this function to the `onClick` event of the button element.

## Handling user interactions with `onChange` event

The `onChange` event handler is used to handle changes in form elements like input fields, checkboxes, radio buttons, etc. You can define a function that gets called when the value of the element changes. Let's see an example of handling a change event in React:

```jsx title="ChangeEventExample.js"
import React, { useState } from "react";

function ChangeEventExample() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}

export default ChangeEventExample;
```

<BrowserWindow minHeight="300px">
  <ChangeEventExample />
</BrowserWindow>

In the above example, we have defined a `handleChange` function that updates the state value when the input field value changes. We have attached this function to the `onChange` event of the input element.

## Handling user interactions with `onSubmit` event

The `onSubmit` event handler is used to handle form submission events. You can define a function that gets called when the form is submitted. Let's see an example of handling a form submission event in React:

```jsx title="SubmitEventExample.js"
import React, { useState } from "react";

function SubmitEventExample() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted with value: " + value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{ marginRight: "10px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
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

export default SubmitEventExample;
```

<BrowserWindow minHeight="300px">
  <SubmitEventExample />
</BrowserWindow>

In the above example, we have defined a `handleSubmit` function that prevents the default form submission behavior and shows an alert with the form value. We have attached this function to the `onSubmit` event of the form element.

## Handling user interactions with other events

Apart from `onClick`, `onChange`, and `onSubmit`, React provides event handlers for various other events like `onMouseOver`, `onMouseOut`, `onFocus`, `onBlur`, etc. You can use these event handlers to handle user interactions and update the UI based on different events.

## Live Example (Code Editor try on your own)

```jsx live
function AllEventsExample() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleMouseOver = () => {
    setValue("Mouse over event triggered");
  };

  const handleFocus = () => {
    setValue("Input field focused");
  };

  return (
    <div>
      <h2>All Events Example</h2>
      <div style={{ marginBottom: "10px" }}>
        <p style={{ marginBottom: "10px" }}>Value: {value}</p>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onMouseOver={handleMouseOver}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
}
```

In the example above, we have defined a functional component `AllEventsExample` that demonstrates handling different events like `onChange`, `onMouseOver`, and `onFocus`. The `handleChange`, `handleMouseOver`, and `handleFocus` functions update the state value based on the respective events.

:::tip 
You can experiment with different event handlers and their behavior by modifying the example above. Try adding new event handlers like `onMouseOut`, `onBlur`, etc., and observe how the component responds to user interactions.
:::

## Conclusion

In this lesson, you learned how to handle user interactions in React using event handlers like `onClick`, `onChange`, etc. You can use these event handlers to respond to user actions and update the UI based on events. Practice using event handlers in your React applications to build interactive and responsive user interfaces.
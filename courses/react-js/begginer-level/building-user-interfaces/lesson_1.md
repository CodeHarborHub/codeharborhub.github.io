---
id: lesson-1
title: "Conditional rendering: Displaying content based on state (if/else statements, ternary operator)"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "Learn how to conditionally render content in React based on component state. Understand how to use if/else statements, the ternary operator, and logical operators to control the visibility of elements."
tags: [courses, react-js, beginner-level, building-user-interfaces, conditional-rendering, if-else, ternary-operator, logical-operators]
---

import IfElseExample from "./IfElseExample";
import TernaryOperatorExample from "./TernaryOperatorExample";

In this lesson, you will learn how to conditionally render content in React based on component state. Conditional rendering allows you to display different elements or components based on certain conditions, such as user interactions, API responses, or internal component state.

## Introduction to conditional rendering in React

Conditional rendering is a powerful feature in React that allows you to control the visibility of elements based on specific conditions. You can use if/else statements, the ternary operator, and logical operators to conditionally render content in your components. This enables you to create dynamic and interactive user interfaces that respond to user actions and external events.

## Using if/else statements for conditional rendering

In React, you can use if/else statements to conditionally render content based on component state. By checking a condition and rendering different elements accordingly, you can create dynamic UIs that adapt to changing data or user interactions. Let's see an example of using if/else statements for conditional rendering in React:

```jsx title="IfElseExample.js"
import React, { useState } from "react";

function IfElseExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>Welcome, user!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else
    return (
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default IfElseExample;
```

<BrowserWindow minHeight="300px">
  <IfElseExample />
</BrowserWindow>

In this example, we define a functional component called `IfElseExample` that conditionally renders content based on the `isLoggedIn` state. If the user is logged in (`isLoggedIn` is `true`), we display a welcome message and a "Logout" button. Otherwise, we show a "Login" button to allow the user to log in.

## Using the ternary operator for conditional rendering

Another common approach to conditional rendering in React is using the ternary operator (`condition ? true : false`). The ternary operator is a concise way to conditionally render content based on a condition. Let's see an example of using the ternary operator for conditional rendering in React:

```jsx title="TernaryOperatorExample.js"
import React, { useState } from "react";

function TernaryOperatorExample() {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div>
      {isError ? (
        <p style={{ color: "red" }}>An error occurred!</p>
      ) : (
        <button onClick={handleError}>Trigger Error</button>
      )}
    </div>
  );
}

export default TernaryOperatorExample;
```

<BrowserWindow minHeight="300px">
  <TernaryOperatorExample />
</BrowserWindow>

In this example, we define a functional component called `TernaryOperatorExample` that uses the ternary operator to conditionally render content based on the `isError` state. If an error occurs (`isError` is `true`), we display an error message in red text. Otherwise, we show a button that triggers the error when clicked.

## Differences between if/else statements and the ternary operator

Both if/else statements and the ternary operator are commonly used for conditional rendering in React. Here are some key differences between the two approaches:

|No. | Feature           | If/Else Statements | Ternary Operator |
|----|-------------------|--------------------|------------------|
|1.  | Syntax            | Uses `if/else` keywords to define conditions and blocks of code. | Uses a concise `condition ? true : false` syntax to conditionally render content. |
|2.  | Readability       | Can be more readable for complex conditions and multiple branches of logic. | Provides a compact and concise way to handle simple conditional rendering. |
|3.  | Flexibility       | Offers more flexibility for handling complex conditions and logic. | Suitable for simple conditional rendering with a single condition and two branches. |
|4.  | Code structure    | Requires curly braces `{}` to define blocks of code for each branch. | Does not require curly braces and can be used inline within JSX expressions. |
|5.  | Use cases         | Ideal for scenarios with multiple conditions, complex logic, and extensive branching. | Suitable for simple toggling of elements, conditional styling, and basic conditional rendering. |

Understanding the differences between if/else statements and the ternary operator will help you choose the appropriate approach for conditional rendering based on the complexity of your logic and the readability of your code.


:::tip 
By using if/else statements, the ternary operator, and logical operators, you can control the visibility of elements based on component state and user interactions. Practice using conditional rendering in your React components to build responsive and engaging web applications.

:::

## Live Example for try yourself

```jsx live 
function Example() {
  const [showMessage, setShowMessage] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p>Hello, World!</p>}
    </div>
  );
}
```

In the example above, we define a functional component `Example` that toggles the visibility of a message based on the `showMessage` state. The button text changes dynamically to "Show Message" or "Hide Message" based on the current state, and the message is displayed or hidden accordingly.


## Conclusion

Conditional rendering is a fundamental concept in React that allows you to create dynamic and interactive user interfaces. By using if/else statements, the ternary operator, and logical operators, you can control the visibility of elements based on component state and user interactions. Practice using conditional rendering in your React components to build responsive and engaging web applications.
---
id: lesson-3
title: "Using JSX for building UI elements"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "Learn how to use JSX (JavaScript XML) to build UI elements in React and understand its syntax and features."
tags:
  [
    courses,
    react-js,
    beginner-level,
    building-your-first-react-app,
    jsx,
    ui-elements,
  ]
---

import MyComponent from "./MyComponent.js";


In this lesson, we will explore JSX (JavaScript XML) and learn how to use it to build UI elements in React. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It provides a more readable and concise way to define UI components in React.

## What is JSX?

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is not a separate templating language, but a syntax that is transformed into regular JavaScript by tools like Babel. JSX makes it easier to define UI components in React by combining the power of JavaScript and HTML.

Here's an example of JSX code:

```jsx title="JSXExample.jsx"
import React from "react";

function JSXExample() {
  return (
    <div>
      <h1>Hello, I am a JSX element!</h1>
      <p>This is a paragraph element.</p>
    </div>
  );
}

export default JSXExample;
```

In this example, we define a functional component called `JSXExample` that returns a JSX element containing a `div` element with `h1` and `p` child elements. JSX allows you to write HTML-like code directly within your JavaScript files, making it easier to define UI components and structures.

## JSX Features

JSX provides several features that make it a powerful tool for building UI elements in React:

- **Embedding Expressions**: You can embed JavaScript expressions within JSX using curly braces `{}`. This allows you to dynamically generate content based on variables or functions.
- **Attributes and Props**: JSX allows you to define attributes and props for HTML elements using a syntax similar to HTML. You can pass data and event handlers to components using props.
- **Conditional Rendering**: You can use JavaScript expressions and conditional statements within JSX to conditionally render elements based on certain conditions.
- **Mapping Arrays**: JSX allows you to map over arrays and render multiple elements based on the array data. This is useful for rendering lists and collections of data.
- **Styling**: You can apply inline styles to JSX elements using JavaScript objects. This allows you to define styles dynamically based on variables or conditions.
- **Fragments**: JSX provides a shorthand syntax for returning multiple elements without a parent container. You can use fragments (`<></>`) to group elements together without adding an extra DOM node.
- **Comments**: JSX supports adding comments within curly braces `{/* */}`. This allows you to add comments directly within your JSX code for documentation or debugging purposes.
- **Event Handling**: JSX allows you to define event handlers for DOM events using camelCase syntax. You can attach event handlers to elements to handle user interactions.
- **Component Composition**: JSX allows you to compose components together by nesting them within each other. This makes it easy to build complex UI structures by combining smaller components.
- **JSX Spread Attributes**: JSX supports the spread operator (`...`) for passing props to components. This allows you to pass multiple props to a component without explicitly specifying each prop.
- **JSX Inheritance**: JSX elements can inherit properties from their parent components. This allows you to pass down props and context to child components without manually passing them as props.
- **JSX Transformation**: JSX code is transformed into regular JavaScript by tools like Babel. This transformation process converts JSX elements into `React.createElement` calls, which are used to create React elements.

By leveraging these features, you can build dynamic and interactive UI components in React using JSX. It provides a declarative and expressive way to define UI structures and behaviors, making it easier to create complex user interfaces in your applications.

:::note Practice Time ✏️

## Exercise - Create a Simple Functional Component using JSX

Let's create a simple functional component using JSX and explore its features. Define a functional component called `MyComponent` that renders a greeting message, conditional text based on a variable, an image element, a conditional paragraph, a list of fruits, and a composed `Button` component.

You can use the following code snippet as a starting point:

```jsx title="MyComponent.jsx"
import React from 'react';

// Define a functional component using JSX
const MyComponent = () => {
  // Define some variables to use in JSX expressions
  const name = "Ajay";
  const isLoggedIn = true;
  const fruits = ["apple", "banana", "orange"];

  // JSX component rendering
  return (
    <div>
      <h1>Hello, {name}!</h1>
      
      {/* Embedding expressions */}
      <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>

      {/* Defining attributes */}
      <img src="https://github.com/ajay-dhangar.png" alt="Ajay" style={{ width: "100px", borderRadius: "50%" }} />

      {/* Conditionally render elements */}
      {isLoggedIn && <p>Welcome back, {name}!</p>}

      {/* Mapping over arrays */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Compose components */}
      <Button text="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}

// Another component to compose
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

export default MyComponent;
```

In this example, we define a functional component called `MyComponent` that renders a greeting message, conditional text, an image, a conditional paragraph, a list of fruits, and a composed `Button` component. We use JSX features like embedding expressions, defining attributes, conditional rendering, mapping arrays, and composing components to build the UI structure.

<BrowserWindow>
  <MyComponent />
</BrowserWindow>

Try modifying the JSX code and exploring different features to understand how JSX works and how you can use it to build UI elements in React.

:::

## Conclusion

In this lesson, we explored JSX and learned how to use it to build UI elements in React. JSX provides a more readable and concise way to define UI components by combining the power of JavaScript and HTML. It offers several features like embedding expressions, defining attributes, conditional rendering, mapping arrays, and composing components that make it a powerful tool for building dynamic and interactive user interfaces.
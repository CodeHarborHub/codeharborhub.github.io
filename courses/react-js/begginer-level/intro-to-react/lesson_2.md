---
id: react-intro-lesson-2
title: "Core concepts: Components, JSX, Virtual DOM"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "In this lesson, we will learn about the core concepts of React, such as components, JSX, and Virtual DOM. We will also learn how to create a simple React component."
tags: [courses, react-js, beginner-level, intro-to-react, core-concepts, components, jsx, virtual-dom]
---

In this lesson, we will learn about the core concepts of React, such as components, JSX, and Virtual DOM. We will also learn how to create a simple React component.

## Components

Components are the building blocks of a React application. A component is a reusable piece of code that defines how a part of the user interface should look and behave. Components can be simple, such as a button or a text input, or complex, such as a form or a navigation bar.

There are two main types of components in React:

### Functional components 

Functional components are JavaScript functions that return JSX (JavaScript XML) to describe the UI. They are simple and lightweight, making them ideal for rendering UI elements.

For example, a simple functional component that displays a greeting message might look like this:

```jsx title="Greeting.js"
import React from 'react';

function Greeting() {
  return <h1>Hello, React!</h1>;
}

export default Greeting;
```

### Class components

Class components are ES6 classes that extend the `React.Component` class. They have additional features such as state and lifecycle methods, making them suitable for more complex logic and interactions.

For example, a class component that displays a counter might look like this:

```jsx title="Counter.js"
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
```

## JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in JavaScript. JSX makes it easier to create and manipulate the UI components in React. JSX is not a separate templating language but a syntax that is transformed into regular JavaScript by tools like Babel.

For example, the following JSX code:

```jsx title="JSX Example"
const element = <h1>Hello, React!</h1>;
```

is transformed into the following JavaScript code:

```jsx title="JSX Transformed"
const element = React.createElement('h1', null, 'Hello, React!');
```

JSX allows developers to write code that looks similar to HTML but is actually JavaScript under the hood. This makes it easier to understand and work with React components.

## Virtual DOM

The Virtual DOM is a lightweight copy of the real DOM (Document Object Model) that React uses to optimize the rendering process. When a component's state changes, React updates the Virtual DOM instead of the real DOM. React then compares the Virtual DOM with the real DOM and only applies the necessary changes to the actual DOM, minimizing the number of updates and improving performance.

The Virtual DOM allows React to efficiently update the UI without re-rendering the entire page. This optimization technique is one of the key reasons why React is fast and efficient for building dynamic user interfaces.

## Creating a simple React component

Let's create a simple React component using JSX and functional components. We will create a component that displays a greeting message.

1. Create a new file named `Greeting.js` in your React project.

2. Add the following code to define the `Greeting` component:

    ```jsx title="Greeting.js"
    import React from 'react';
    
    function Greeting() {
      return <h1>Hello, React!</h1>;
    }
    
    export default Greeting;
    ```

3. Import and use the `Greeting` component in your main application file (e.g., `App.js`):

    ```jsx title="App.js"
    import React from 'react';
    import Greeting from './Greeting';

    function App() {
      return (
        <div>
          <h1>Welcome to React!</h1>
          <Greeting />
        </div>
      );
    }

    export default App;
    ```

4. Run your React application to see the `Greeting` component in action.

    <BrowserWindow>
        <div>
          <h1>Welcome to React!</h1>
          <h1>Hello, React!</h1>
        </div>
    </BrowserWindow>

5. You should see the greeting message "Hello, React!" displayed on the screen.
6. Congratulations! You have created your first React component using JSX and functional components.

## Conclusion

In this lesson, we learned about the core concepts of React, including components, JSX, and Virtual DOM. We also created a simple React component to display a greeting message. Understanding these concepts is essential for building interactive and dynamic user interfaces with React. In the next lesson, we will explore more advanced topics in React and build on the knowledge gained in this lesson.
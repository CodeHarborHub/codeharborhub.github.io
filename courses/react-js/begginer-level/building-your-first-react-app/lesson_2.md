---
id: lesson-2
title: "Understanding components and their structure (functional and class-based)"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "Learn about the different types of components in React and understand their structure and usage in building React applications."
tags:
  [
    courses,
    react-js,
    beginner-level,
    building-your-first-react-app,
    react-components,
    functional-components,
    class-based-components,
  ]
---

import WelcomeMessage from "./WelcomeMessage";
import Counter from "./Counter";

In this lesson, we will explore the concept of components in React and understand the structure and usage of functional and class-based components. Components are the building blocks of a React application, and they encapsulate the UI elements and logic of the application.

## What are components in React?

Components are reusable and independent units of UI that can be composed together to build complex user interfaces. In React, components can be of two types: functional components and class-based components. Both types of components serve the same purpose of rendering UI elements, but they differ in their syntax and features.

## Functional components

Functional components are JavaScript functions that return JSX (JavaScript XML) elements. They are simple and lightweight, making them ideal for representing UI elements that don't require state or lifecycle methods. Here's an example of a functional component:

```jsx title="FunctionalComponent.js"
import React from "react";

function FunctionalComponent() {
  return <div>Hello, I am a functional component!</div>;
}

export default FunctionalComponent;
```

In this example, we define a functional component called `FunctionalComponent` that returns a `div` element with a text content. Functional components are easy to read and understand, and they promote the concept of "function as a child" or "function as a prop."

## Class-based components

Class-based components are ES6 classes that extend the `React.Component` class. They have additional features such as state management and lifecycle methods. Class-based components are used when you need to manage state or use lifecycle methods in your component. Here's an example of a class-based component:

```jsx title="ClassBasedComponent.js"
import React, { Component } from "react";

class ClassBasedComponent extends Component {
  render() {
    return <div>Hello, I am a class-based component!</div>;
  }
}

export default ClassBasedComponent;
```

In this example, we define a class-based component called `ClassBasedComponent` that extends the `Component` class from React. The `render` method is used to return the JSX elements to be rendered on the screen. Class-based components provide more features and flexibility compared to functional components.

## When to use functional components vs. class-based components

- **Functional components**: Use functional components for simple UI elements that don't require state or lifecycle methods. They are lightweight and easy to understand, making them suitable for presentational components.

- **Class-based components**: Use class-based components when you need to manage state, use lifecycle methods, or implement complex logic within the component. They provide more features and flexibility compared to functional components.

## Differences between functional and class-based components

| No. | Feature           | Functional Components | Class-based Components |
| --- | ----------------- | --------------------- | ---------------------- |
| 1.  | Syntax            | Function declaration  | Class declaration      |
| 2.  | State management  | No state              | Stateful               |
| 3.  | Lifecycle methods | No lifecycle methods  | Lifecycle methods      |
| 4.  | Reusability       | Reusable              | Reusable               |
| 5.  | Flexibility       | Limited               | More flexible          |
| 6.  | Performance       | Lightweight           | Heavier                |

Understanding the differences between functional and class-based components will help you choose the right component type based on your application requirements. In the next lesson, we will explore how to create and use components in a React application.

:::note Practice Time ✏️

### Practice Exercise

In this practice session, you will create a new functional component and a class-based component in your React application. Follow the steps below to complete the practice:

1. Create a new functional component called `WelcomeMessage` that displays a welcome message to the user.

   ```jsx title="src/WelcomeMessage.js"
   import React from "react";

   function WelcomeMessage() {
     return <div>Welcome to React!</div>;
   }

   export default WelcomeMessage;
   ```

2. Create a new class-based component called `Counter` that displays a counter value and increments it when a button is clicked.

   ```jsx title="src/Counter.js"
   import React, { Component } from "react";

   class Counter extends Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 };
     }

     incrementCount = () => {
       this.setState({ count: this.state.count + 1 });
     };

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button onClick={this.incrementCount}>Increment</button>
         </div>
       );
     }
   }

   export default Counter;
   ```

3. Add the `WelcomeMessage` and `Counter` components to the `App` component and test them in your React application.

   ```jsx title="src/App.js"
   import React from "react";
   import WelcomeMessage from "./WelcomeMessage";
   import Counter from "./Counter";

   function App() {
     return (
       <div>
         <WelcomeMessage />
         <Counter />
       </div>
     );
   }

   export default App;
   ```

    Now, run your React application and test the `WelcomeMessage` and `Counter` components to see how they work.

    <BrowserWindow>
        <div>
            <WelcomeMessage />
            <Counter />
        </div>
    </BrowserWindow>

4. Experiment with the `WelcomeMessage` and `Counter` components by customizing their content and functionality. Try adding new features or modifying the existing components to enhance your React application. After making changes, test the components to see the updated behavior. And share your experience with us on our [Discord Community](https://discord.gg/5VjTyJcf).

5. Congratulations! You have successfully created and tested new functional and class-based components in your React application. Keep exploring more features of React and building exciting applications.

### Questions to Consider

1. What are the differences between functional components and class-based components in React?
2. When should you use functional components, and when should you use class-based components in your React application?
3. How do you manage state in a class-based component, and why is it important for building interactive UIs?
4. What are the benefits of using components in a React application, and how do they help in building scalable and maintainable applications?

:::


:::tip Quick Recap

- Components are the building blocks of a React application that encapsulate UI elements and logic.
- Components can be of two types: functional components and class-based components.
- Functional components are simple and lightweight, while class-based components provide more features and flexibility.
- Use functional components for simple UI elements and class-based components for managing state and lifecycle methods.
- Understanding the differences between these two types of components will help you choose the right component type based on your application requirements.

:::

## Conclusion

In this lesson, you learned about the different types of components in React: functional components and class-based components. Functional components are simple and lightweight, while class-based components provide more features and flexibility. Understanding the differences between these two types of components will help you choose the right component type based on your application requirements.

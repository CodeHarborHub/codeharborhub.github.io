---
title: "A Beginner’s Guide to the Top 5 React Hooks"
sidebar_label: React hooks
authors: [dharshibalasubramaniyam]
tags: [react.js, react-hooks]
date: 2024-06-19
hide_table_of_contents: true
---

In this beginner’s guide, we’ll explore the top 5 React hooks that every React developer should know. React hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components. They provide a more elegant and composable way to manage component logic compared to class components. Let’s dive into the top 5 React hooks you should be familiar with.

<!-- truncate -->

## Why React Hooks?

### Evolution of React:

- Since its inception, React has undergone significant evolution, with each new release introducing enhancements and improvements to the framework. In the early days of React, class components were the primary means of building reusable UI components. Class components provided a way to manage component state and lifecycle methods, allowing developers to create dynamic and interactive user interfaces.

- Introducing Functional Components:

- With the release of React 16.8 in February 2019, the React team introduced a groundbreaking feature known as hooks. This shift towards functional components with hooks opened up new possibilities for organizing and managing React code, leading to cleaner, more concise component logic.

### The Need for Hooks:

- While class components served as the cornerstone of React development for many years, they had certain limitations. Class components often led to complex hierarchies, known as “wrapper hell,” and made it challenging to reuse component logic.

- In response to these challenges, the React team introduced hooks as a more elegant and composable solution for managing component logic. Hooks allow developers to encapsulate stateful logic and side effects within functional components, making it easier to understand, test, and maintain React code.

- Now that we have some context on React hooks, let’s explore the react hooks every beginner should know.

## 1. ‘useState’ hook

- The useState hook is one of the fundamental hooks in React, allowing functional components to manage local state. With useState, you can add state variables to your components and update them over time, enabling dynamic and interactive user interfaces.

### Importing useState hook from react:

```js
import { useState } from "react";
```

### Declaring a state variable named count with an initial value of 0,

- The useState hook takes an initial state value as an argument and returns a stateful value paired with a function to update that value.

```js
const [count, setCount] = useState(0);
```

### Updating count variable using setCount method,

```js
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

- In above example, when the button is clicked, the onClick event handler calls the setCount function with the updated value of count (count + 1), causing the component to re-render with the new state value.

- Note: We cannot update a state variable like, count = count +1

### Updating objects and arrays in useState,

- To update specific properties of an object or array stored in state using useState, you need to use the functional form of set function and spread the previous state (prevState) along with the updated properties.

```js
const Counter = () => {
  const [person, setPerson] = useState({ id: "1", name: "John", age: 25 });

  const updateName = (newName) => {
    setPerson((prevState) => {
      return { ...prevState, name: newName };
    });
  };

  const updateAge = (newAge) => {
    setPerson((prevState) => {
      return { ...prevState, age: newAge };
    });
  };

  return <div>{/* form to update name and age */}</div>;
};
```

## 2. ‘useEffect’ hook

- The useEffect hook in React enables functional components to perform side effects, such as data fetching, DOM manipulation, or subscriptions. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

### componentDidMount

- In class components, this method is called after a component is mounted or rendered in the DOM. It’s commonly used for performing initialization that requires DOM nodes or data fetching operations.

- For componentDidMount behavior, you can pass an empty dependency array ([]) as the second argument to useEffect, which tells React to run the effect only once after the initial render.

```js
useEffect(() => {
  // Perform initialization or side effects
  console.log("The component is rendered initially.");
}, []);
```

### componentDidUpdate

- In class components, this method is called after the component’s state or props are updated and the component re-renders. It’s useful for performing side effects after a component updates, such as updating the DOM in response to prop or state changes.

- For componentDidUpdate behavior, we can simply omit the dependency array in useEffect . his means the effect will be executed whenever any state or prop value changes, potentially leading to unnecessary re-renders or performance issues if not used carefully.

```js
useEffect(() => {
  // Effect runs after every render
  console.log("The component is rendered.");
});
```

- To overcome unnecessary re-renders, you can specify dependencies in the dependency array. When any of these dependencies change, the effect will be re-run.

```js
useEffect(() => {
  // Perform side effects after state or props update
  console.log("dependency1 or dependency2 have updated.");
}, [dependency1, dependency2]);
```

### componentWillUnmount

- In class components, this method is called just before a component is unmounted from the DOM. It’s used for cleanup tasks like removing event listeners or cancelling network requests to prevent memory leaks.

- For componentWillUnmount behavior, you can return a cleanup function from the effect. This function will be called when the component is unmounted.

```js
useEffect(() => {
  // Perform side effects
  console.log("dependency is updated.");
  return () => {
    // Cleanup tasks
    console.log("The component is unmounted.");
  };
}, [dependency]);
```

## 3. ‘useContext’ hook

- The useContext hook is a powerful feature in React that allows components to consume data from a context without explicitly passing the data through each component manually (as props). This is particularly useful for passing down global data, such as themes, user authentication status, language preferences, etc., to deeply nested components in your application without prop drilling.

### Create a Context

- First, you need to create a context using the createContext function provided by React. This function returns a Context object.

```js
// themeContext.js
import React, { createContext } from "react";

export const ThemeContext = createContext(null);
```

### Provide Context

- Then, you need to wrap the part of your component tree where you want to make the context available using the Context.Provider component. This is typically placed at a higher level in your component hierarchy.

```js
function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent />
    </ThemeContext.Provider>
  );
}
```

### Consume Context

- Now, any component within the provider can access the context using the useContext hook.

```js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MyComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#fff",
      }}
    >
      Content
    </div>
  );
}
```

- Now, MyComponent can access the theme value without having to pass it as a prop from higher-level components.

- That’s the basics of using the useContext hook in React! It simplifies the process of passing data through the component tree, making your code cleaner and more efficient.

## 4. ‘useReducer’ hook

- The useReducer hook in React is used for managing more complex state logic within functional components. It's an alternative to the more commonly used useState hook, especially when you have state transitions that are more intricate and involve multiple sub-values or when the next state depends on the previous one.

### State Initialization

- You start by defining an initial state. This could be a single value, an object, or an array depending on your application’s needs.

```js
const Counter = () => {
  // Step 1: Define initial state
  const initialState = { count: 0 };

  return <div>content</div>;
};
```

### Reducer Function

- You define a reducer function. This function takes two arguments: the current state and an action, and returns the new state based on the action. The reducer function is responsible for updating the state.

```js
// Step 2: Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
```

### Dispatching Actions

- To update the state, you dispatch actions. An action is an object that describes what kind of state change you want to perform. It typically has a type property that describes the action type, and optionally a payload property that carries data relevant to the action.

```js
const Counter = () => {
  const initialState = { count: 0 };

  // Step 3: Use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};
```

- When you dispatch an action, React calls your reducer with the current state and the action you’ve dispatched. The reducer decides how to update the state based on the action type and returns the new state.

- React re-renders the component with the new state, and any components that depend on that state will also re-render.

### 5. ‘useRef’ hook

- useRef is used to create a mutable reference that persists across renders without causing re-renders when the value changes.

Example 1

```js
import React, { useRef } from "react";

function MyComponent() {
  // Create a ref to store a DOM element
  const myInputRef = useRef(null);

  // Function to focus on the input element
  const focusInput = () => {
    // Accessing the current value of the ref
    myInputRef.current.focus();
  };

  return (
    <div>
      {/* Attaching the ref to the input element */}
      <input type="text" ref={myInputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default MyComponent;
```

In this example, myInputRef is created using useRef, and it's attached to the input element. When the button is clicked, the focusInput function is called, which accesses the current property of the myInputRef to focus on the input element.

Example 2

```js
import React, { useState, useRef } from "react";

function Counter() {
  // State for storing the count
  const [count, setCount] = useState(0);

  // Ref for storing the interval ID
  const intervalIdRef = useRef(null);

  // Function to start the counter
  const startCounter = () => {
    // Check if counter is already running
    if (intervalIdRef.current !== null) {
      return; // If already running, do nothing
    }

    // Start the counter
    intervalIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  // Function to stop the counter
  const stopCounter = () => {
    // Check if counter is running
    if (intervalIdRef.current === null) {
      return; // If not running, do nothing
    }

    // Stop the counter
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
}

export default Counter;
```

- We have a state variable count that stores the current count.
- We create a ref named intervalIdRef using useRef(null). This ref will be used to store the ID returned by setInterval so that we can later clear the interval.
- startCounter function starts a timer using setInterval and increments the count every second. It first checks if the counter is already running to avoid starting multiple timers simultaneously.
- stopCounter function stops the timer by calling clearInterval. It also checks if the counter is running before attempting to stop it.
- The buttons call startCounter and stopCounter when clicked, respectively.
- This example demonstrates how useRef can be used to store mutable values (in this case, the interval ID) across re-renders without causing unnecessary re-renders.

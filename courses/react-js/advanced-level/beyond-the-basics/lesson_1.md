---
id: lesson-1
title: "React Hooks in Depth (useEffect, useContext, useReducer, etc.)"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "In this lesson, we will learn about React Hooks in depth. We will learn about useEffect, useContext, useReducer, and other hooks. We will also learn how to create custom hooks in React."
tags:
  [
    courses,
    react-js,
    advanced-level,
    beyond-the-basics,
    hooks,
    useEffect,
    useContext,
    useReducer,
    custom-hooks,
  ]
---

import Counter from './exercises/Counter';
import AppUseReducer from './exercises/AppUseReducer';
import AppUseCustomHook from './exercises/AppUseCustomHook';

In the React Hooks in Depth lesson, we will learn about React Hooks in depth. We will learn about useEffect, useContext, useReducer, and other hooks. We will also learn how to create custom hooks in React.

## What are React Hooks?

React Hooks are functions that let you use state and other React features in functional components. They are introduced in React 16.8.0. Hooks do not work inside classes. They let you use state and other React features without writing a class.

## Why React Hooks?

Before React Hooks, functional components were stateless. They were used for simple components that did not require state or lifecycle methods. But with the introduction of React Hooks, functional components can now have state and lifecycle methods. This makes functional components more powerful and easier to use.

## List of React Hooks

React provides several built-in hooks that you can use in your functional components. Here are some of the most commonly used React Hooks:

### useState Hook

The `useState` hook lets you add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.

```jsx title="Counter.js"
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

<BrowserWindow minHeight={300}>
  <Counter />
</BrowserWindow>

### useEffect Hook

The `useEffect` hook lets you perform side effects in functional components. It is similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in class components.

```jsx title="ExampleComponent"
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      <div>Component unmounted</div>;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>
            <b>Email:</b> {userData.email},<b>Phone:</b> {userData.phone}
          </p>
          <p>
            <b>Website:</b> {userData.website},<b>Company:</b>{" "}
            {userData.company.name}
          </p>
          <p>
            <b>City:</b> {userData.address.city},<b>Zipcode:</b>{" "}
            {userData.address.zipcode}
          </p>
          <p>
            <b>Latitude:</b> {userData.address.geo.lat},<b>Longitude:</b>{" "}
            {userData.address.geo.lng}
          </p>

          <button onClick={() => setUserData(null)}>Clear user data</button>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default ExampleComponent;
```

### useContext Hook

The `useContext` hook lets you access the value of a context provider in functional components. It is similar to the `static contextType` property in class components.

```jsx title="ContextProvider.js"
import React, { createContext, useContext, useState } from "react";

// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Create a Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
          width: "100%",
          height: "300px",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Step 3: Create a Consumer Component (Optional)

// Step 4: Use the useContext Hook in child components
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <p>The current theme is: {theme}</p>;
};

// Step 5: Use the Provider Component to wrap your application
const ContextProvider = () => {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggler />
        <DisplayTheme />
      </div>
    </ThemeProvider>
  );
};

export default ContextProvider;
```

### useReducer Hook

The `useReducer` hook lets you manage complex state logic in functional components. It is similar to the `this.setState` method in class components.

```jsx title="AppUseReducer.js"
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function AppUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={() => dispatch({ type: "decrement" })}>
          {" "}
          Decrement{" "}
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          {" "}
          Increment{" "}
        </button>
      </div>
    </div>
  );
}

export default AppUseReducer;
```

<BrowserWindow minHeight={300}>
  <AppUseReducer />
</BrowserWindow>

### Custom Hooks

You can create custom hooks to reuse stateful logic across multiple components. Custom hooks are JavaScript functions whose names start with `use`. They can call other hooks if needed.

```jsx title="AppUseCustomHook.js"
import React from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return { count, increment, decrement };
}

function AppUseCustomHook() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={decrement}> Decrement </button>
        <button onClick={increment}> Increment </button>
      </div>
    </div>
  );
}

export default AppUseCustomHook;
```

<BrowserWindow minHeight={300}>
  <AppUseCustomHook />
</BrowserWindow>

## Conclusion

In this lesson, we learned about React Hooks in depth. We learned about `useState`, `useEffect`, `useContext`, `useReducer`, and how to create custom hooks in React. React Hooks make it easier to manage state and lifecycle methods in functional components. They provide a more concise and readable way to write React components.

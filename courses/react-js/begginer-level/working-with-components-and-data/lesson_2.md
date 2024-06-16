---
id: lesson-2
title: "Managing dynamic data within components using the useState hook"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "learn how to manage dynamic data within components using the useState hook in React. The useState hook allows you to add stateful logic to functional components and handle dynamic data updates."
tags: [courses]
---

import ComplexStateExample from "./ComplexStateExample";

In this lesson, we will explore how to manage dynamic data within components using the `useState` hook in React. The `useState` hook is a built-in React hook that allows you to add stateful logic to functional components. It enables you to handle dynamic data updates and re-renders in response to user interactions or external events.

## What is the useState hook?

The `useState` hook is a built-in React hook that allows you to add state to functional components. State is used to store and manage dynamic data within a component, such as user input, API responses, or component state. The `useState` hook returns a stateful value and a function to update that value, allowing you to manage state in functional components.

Here's an example of using the `useState` hook to manage a counter value:

```jsx title="CounterExample.js"
import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterExample;
```

In this example, we define a functional component called `CounterExample` that uses the `useState` hook to manage a counter value. The `useState` hook initializes the `count` state to `0` and provides a `setCount` function to update the state value. When the "Increment" button is clicked, the `increment` function is called to update the `count` state.

## Updating state with the useState hook

You can update state values using the `setCount` function returned by the `useState` hook. When you call the `setCount` function with a new value, React will re-render the component with the updated state value. This allows you to handle dynamic data updates and trigger re-renders based on user interactions or external events.

Here's an example of updating state with the `useState` hook:

```jsx title="CounterExample.js"
import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterExample;
```

In this updated example, we add a `decrement` function that calls `setCount` with `count - 1` to decrement the counter value. When the "Decrement" button is clicked, the `decrement` function is called to update the `count` state and trigger a re-render of the component.

## Managing complex state with the useState hook

The `useState` hook can manage complex state values, such as objects or arrays, by storing them in the component state. You can update specific properties of an object or elements of an array by creating a new state object or array and passing it to the `setCount` function.

Here's an example of managing complex state with the `useState` hook:

```jsx title="ComplexStateExample.js"
import React, { useState } from "react";

function ComplexStateExample() {
  const [user, setUser] = useState({ name: "Ajay", age: 24 });

  const updateName = () => {
    setUser({ ...user, name: "Pawan" });
  };

  const updateAge = () => {
    setUser({ ...user, age: 23 });
  };

  return (
    <div>
        <h2>Complex State Example</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={updateName}>Update Name</button>
            <button onClick={updateAge}>Update Age</button>
        </div>      
    </div>
  );
}

export default ComplexStateExample;
```

<BrowserWindow>
  <ComplexStateExample />
</BrowserWindow>

In this example, we define a functional component called `ComplexStateExample` that uses the `useState` hook to manage a complex state object `user`. The `updateName` and `updateAge` functions update the `name` and `age` properties of the `user` object by creating a new state object with the updated values.

:::info
When updating complex state values like objects or arrays, it's important to create a new state object or array to trigger a re-render of the component. This ensures that React detects the state change and updates the component UI accordingly.

In the example above, we use the spread operator `{ ...user }` to create a new object with the existing properties of the `user` object and then update the specific property (`name` or `age`) with the new value.
:::


## Live Example (Code Editor try on your own)

```jsx live
function CounterExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p style={{ fontSize: "1.5rem" }}>Count: {count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increment} style={{ padding: "5px 10px", fontSize: "1rem" }}>Increment</button>
        <button onClick={decrement} style={{ padding: "5px 10px", fontSize: "1rem" }}>Decrement</button>
      </div>
    </div>
  );
}
```

## Conclusion

In this lesson, we learned how to manage dynamic data within components using the `useState` hook in React. The `useState` hook allows you to add stateful logic to functional components and handle dynamic data updates. By using the `useState` hook, you can create interactive and dynamic user interfaces in React applications.
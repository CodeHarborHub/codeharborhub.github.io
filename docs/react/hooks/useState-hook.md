---
id: useState hook
title: useState Hook Concept
sidebar_label: useState Hook
sidebar_position: 1
tags: [react, create-react-app, useState, hooks, react-scripts, react-dom, react-app]
---
### useState

**Explanation:**
`useState` is a fundamental hook in React that allows functional components to manage state. State refers to data that changes over time and causes a component to rerender when updated. Prior to hooks, state management was exclusive to class components using `this.state`.

When you call `useState(initialState)`, it returns an array with two elements:
- The current state (`count` in our example).
- A function (`setCount`) that allows you to update the state.

**Example:**
```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* On button click, update 'count' using 'setCount' */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

<BrowserWindow>
    <div>
       <p>You clicked <span id="display">0</span> times</p>
       <button onClick={()=>{
        let display=document.getElementById("display")
        display.textContent=Number(display.textContent)+1
       }}>Click me</button>
    </div>
</BrowserWindow>

In this example, `count` is the state variable initialized to 0, and `setCount` is the function used to update `count`. When the button is clicked, `setCount` is called with the new value of `count + 1`, causing the component to rerender with the updated count displayed.
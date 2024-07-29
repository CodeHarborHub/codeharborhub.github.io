---
id: useCallback hook
title: useCallback Hook Concept
sidebar_label: useCallback Hook
sidebar_position: 5
tags: [react, create-react-app, useCallback, hooks, react-scripts, react-dom, react-app]
---
### useCallback

**Explanation:**
`useCallback` is used to memoize functions to prevent unnecessary renders in child components. It is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

When you call `useCallback`, you pass it a function and a dependency array. It returns a memoized version of the callback function that only changes if one of the dependencies has changed.

**Example:**
```jsx
import React, { useState, useCallback } from 'react';

function MemoizedCounter() {
  const [count, setCount] = useState(0);
  
  // Memoize 'increment' function to prevent unnecessary renders
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button uses memoized 'increment' function */}
      <button onClick={increment}>Increment</button>
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

In this example, `useCallback` memoizes the `increment` function to ensure that it only changes when `count` changes. This optimization prevents unnecessary re-renders of `MemoizedCounter` when passed as a prop to child components.

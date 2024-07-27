---
id: useReducer hook
title: useReducer Hook Concept
sidebar_label: useReducer Hook
sidebar_position: 4
tags: [react, create-react-app, useReducer, hooks, react-scripts, react-dom, react-app]
---

### useReducer

**Explanation:**
`useReducer` is an alternative to `useState` for managing complex state logic within a component. It is often preferable when you have state transitions that involve multiple sub-values or when the next state depends on the previous one.

When you call `useReducer`, you pass it a reducer function and an initial state. It returns an array with the current state (`state`) and a dispatch function (`dispatch`) to trigger state updates based on action objects.

**Example:**
```jsx
import React, { useReducer } from 'react';

// Initial state with a 'count' property initialized to 0
const initialState = { count: 0 };

// Reducer function defines how state updates in response to actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Increment 'count'
    case 'decrement':
      return { count: state.count - 1 }; // Decrement 'count'
    default:
      throw new Error(); // Throw an error for unknown actions
  }
}

function Counter() {
  // Use 'useReducer' with 'reducer' function and 'initialState'
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Buttons dispatch 'increment' and 'decrement' actions */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
```

<BrowserWindow> 
         <p>Count: <span id="count">0</span></p>
          <button onClick={() =>{
            let count=document.getElementById("count")
            count.textContent=Number(count.textContent)+1
          }}>Increment</button>
      <button onClick={() => {
             let count=document.getElementById("count")
             count.textContent=Number(count.textContent)-1
      }}>Decrement</button> 
</BrowserWindow>

In this example, `useReducer` manages state updates for `count`. `dispatch` is used to trigger actions (`{ type: 'increment' }` or `{ type: 'decrement' }`), which are processed by the `reducer` function to compute the next state.

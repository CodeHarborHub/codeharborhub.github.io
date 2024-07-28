---
id: useEffect hook
title: useEffect Hook Concept
sidebar_label: useEffect Hook
sidebar_position: 2
tags: [react, create-react-app, useEffect, hooks, react-scripts, react-dom, react-app]
---

### useEffect

**Explanation:**
`useEffect` is used to perform side effects in function components. Side effects include data fetching, subscriptions, or manually changing the DOM. In class components, side effects were managed in lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

When you call `useEffect`, you pass it a function that contains the code for your side effect. This function runs after every render by default. You can also provide a dependency array (`[]`) to control when the effect runs based on changes in state or props.

**Example:**
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This function runs after every render
    const interval = setInterval(() => {
      // Update 'seconds' every 1000ms (1 second)
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // Return a cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty array means effect runs only on mount and unmount

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}
```

<BrowserWindow>
    <div id="output_ele_1" style={{display:"none"}}>
       <p>Timer: <span id="Timer" >0</span></p>
    </div>
    <button id="output_btn_1" onClick={()=>{
        let output_ele_1=document.getElementById("output_ele_1")
        output_ele_1.style.display="block"
        let output_btn_1=document.getElementById("output_btn_1")
        output_btn_1.style.display="none"
        setInterval(() => { 
                if(document.getElementById("Timer")){
                document.getElementById("Timer").textContent = Number(document.getElementById("Timer").textContent)+1 
                }
                else{
                  return 
                }
            }, 1000) 
    }}>click to view output</button>
</BrowserWindow>

In this example, `useEffect` is used to create a timer that updates the `seconds` state every second (`1000ms`). The cleanup function returned by `useEffect` clears the interval when the component unmounts or when `seconds` changes due to a dependency array (`[]`) change.

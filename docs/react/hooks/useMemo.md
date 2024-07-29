---
id: useMemo hook
title: useMemo Hook Concept
sidebar_label: useMemo Hook
sidebar_position: 6
tags: [react, create-react-app, useMemo, hooks, react-scripts, react-dom, react-app]
---

### useMemo

**Explanation:**
`useMemo` is used to memoize expensive calculations or computations so that they are only recomputed when necessary. It is similar to `useCallback`, but instead of memoizing functions, it memoizes the result of a computation.

When you call `useMemo`, you pass it a function that performs the expensive computation and a dependency array. It returns the memoized value that only changes when one of the dependencies has changed.

**Example:**
```jsx
import React, { useMemo, useState } from 'react';

function MemoizedFactorial() {
  const [number, setNumber] = useState(5);

  // Memoize factorial calculation to optimize performance
  const factorial = useMemo(() => {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }, [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorial}</p>
      {/* Input updates 'number' to recompute factorial */}
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
    </div>
  );
}
```

<BrowserWindow>
      <div>
          <p>Factorial of <span id="give_num"></span> is: <span id="output_num"></span></p>
          <input type="number" onChange={(e) => {
            let number=Number(e.target.value)
            let give_num=document.getElementById("give_num")
            let output_num=document.getElementById("output_num")
            let fact = 1;
            for (let i = 1; i <= number; i++) {
            fact *= i;
            }
            give_num.textContent=number
            output_num.textContent=fact
          }} />
      </div>
</BrowserWindow>

In this example, `useMemo` memoizes the `factorial` calculation based on the `number` state. It ensures that the factorial computation is only recalculated when `number` changes, optimizing performance by avoiding unnecessary computations on each render.

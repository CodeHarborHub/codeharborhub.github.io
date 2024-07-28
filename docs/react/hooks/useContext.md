---
id: useContext hook
title: useContext Hook Concept
sidebar_label: useContext Hook
sidebar_position: 3
tags: [react, create-react-app, useContext, hooks, react-scripts, react-dom, react-app]
---

### useContext

**Explanation:**
`useContext` provides a way to pass data through the component tree without having to pass props down manually at every level. It allows you to access values from the nearest `Context.Provider` in the tree.

When you call `useContext`, you pass it the context object that was created with `React.createContext()`. It returns the current context value for that context, determined by the nearest provider above the calling component in the tree.

**Example:**
```jsx
import React, { useContext } from 'react';

// Create a context object with a default value ('light')
const ThemeContext = React.createContext('light');

function ThemeComponent() {
  // Use 'useContext' to access the current theme value ('light')
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}
```
<BrowserWindow>
     <div>
         <p>Current theme:<span id="Theme">light</span></p>
     </div>
</BrowserWindow>

In this example, `ThemeComponent` uses `useContext` to consume the current theme value (`'light'`) provided by the nearest `ThemeContext.Provider` higher up in the component tree.

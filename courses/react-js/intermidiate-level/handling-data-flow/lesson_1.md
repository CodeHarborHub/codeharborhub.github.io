---
id: lesson-1
title: "Context API for managing global state without prop drilling (Optional)"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "Learn how to use the Context API in React to manage global state without prop drilling. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This lesson will introduce you to the Context API and show you how to use it to manage global state in your React applications."
tags: [courses, react-js, intermediate-level, state-management, context-api, prop-drilling]
---

import App from './App';

In React applications, managing shared state between components can be challenging, especially when components are not directly related in the component tree. The Context API is a feature in React that allows you to manage global state without prop drilling. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This lesson will introduce you to the Context API and show you how to use it to manage global state in your React applications.

## What is the Context API?

The Context API is a feature in React that allows you to share data across the component tree without having to pass props down manually at every level. It provides a way to manage global state in your application and avoid prop drilling, where props are passed through multiple levels of components.

The Context API consists of the following key concepts:

1. **Context Object**: The context object is created using the `createContext` function from the `react` package. It represents the shared data that you want to pass down the component tree.
2. **Provider Component**: The provider component is used to wrap the part of the component tree where you want to make the context available. It accepts a `value` prop that contains the data you want to share.
3. **Consumer Component**: The consumer component is used to access the context data within a component. It uses the `useContext` hook to consume the context data provided by the nearest `Provider` component in the tree.
4. **Context Hook**: The `useContext` hook is used to consume the context data within a functional component. It takes the context object as an argument and returns the current context value.
5. **Context Type**: The `ContextType` is a property that can be added to a class component to access the context data. It provides a way to consume context data in class components.
6. **Context API with Class Components**: The Context API can also be used with class components by using the `Consumer` component and the `ContextType` property. This allows you to access context data in class components.
7. **Default Value**: The `createContext` function accepts a default value as an argument. This default value is used when a component does not have a matching `Provider` component in the tree.

Here's an example of using the Context API to manage global state in a React application:

<Tabs>
  <TabItem value="App.js" label="App.js">    
    ```jsx
    import React from "react";
    import { ThemeProvider } from "./ThemeContext";
    import Header from "./Header";
    import Content from "./Content";

    function App() {
      return (
        <ThemeProvider>
          <div>
            <Header />
            <Content />
          </div>
        </ThemeProvider>
      );
    }

    export default App;
    ```
  </TabItem>
  <TabItem value="ThemeContext.js" label="ThemeContext.js">        
    ```jsx
    import React, { createContext, useState } from "react";
    const ThemeContext = createContext();
    
    function ThemeProvider({ children }) {
      const [theme, setTheme] = useState("light");
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
    
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    }
    
    export { ThemeProvider, ThemeContext };
    ```
  </TabItem>
  <TabItem value="Header.js" label="Header.js">        
    ```jsx
    import React, { useContext } from "react";
    import { ThemeContext } from "./ThemeContext";

    function Header() {
      const { theme, toggleTheme } = useContext(ThemeContext);

      return (
        <header style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#333" : "#fff", padding: "10px" }}>
          <h1>Theme Switcher</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
      );
    }

    export default Header;
    ```
   </TabItem>
   <TabItem value="Content.js" label="Content.js">        
    ```jsx
    import React, { useContext } from "react";
    import { ThemeContext } from "./ThemeContext";

    function Content() {
      const { theme } = useContext(ThemeContext);

      return (
        <div style={{ color: theme === "light" ? "#333" : "#fff", padding: "10px", backgroundColor: theme === "light" ? "#fff" : "#333" }}>
          <h2>Content Area</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            in turpis nec felis fermentum ultricies. Donec sit amet nunc
            vitae libero ultricies ultricies.
          </p>
        </div>
      );
    }

    export default Content;
    ```
  </TabItem>
</Tabs>

In this example, we have a `ThemeProvider` component that wraps the `Header` and `Content` components in the `App` component. The `ThemeProvider` component provides the theme data and the `toggleTheme` function to the `Header` and `Content` components using the `ThemeContext.Provider` component. The `Header` and `Content` components consume the theme data and the `toggleTheme` function using the `useContext` hook.

When the "Toggle Theme" button in the `Header` component is clicked, it calls the `toggleTheme` function to update the theme state in the `ThemeProvider` component. This change in the theme state is reflected in the `Header` and `Content` components, allowing them to update their styles based on the theme.

<BrowserWindow bodyStyle={{padding: "0"}}>
    <App />
</BrowserWindow>

By using the Context API, we can manage global state in our application without having to pass props down manually through multiple levels of components. This makes it easier to share data across the component tree and avoid prop drilling.

:::info 

The Context API is a powerful feature in React that allows you to manage global state in your application. It is especially useful when you have shared data that needs to be accessed by multiple components at different levels in the component tree. By using the Context API, you can avoid prop drilling and keep your components decoupled from each other.

:::

## Conclusion

The Context API in React provides a way to manage global state in your application without prop drilling. By using the Context API, you can share data across the component tree and avoid passing props down manually at every level. This lesson introduced you to the Context API and showed you how to use it to manage global state in your React applications. You learned about the context object, provider component, consumer component, context hook, context type, and default value in the Context API. You also saw an example of using the Context API to manage global state in a React application.
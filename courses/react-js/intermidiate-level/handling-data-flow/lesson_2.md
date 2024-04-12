---
id: lesson-2
title: "Introduction to Redux: Advanced state management for complex applications"
sidebar_label: Lesson - 2
sidebar_position: 2
description: "Learn how to use Redux for advanced state management in React applications. Redux is a predictable state container for JavaScript apps that helps you manage complex application state in a more organized and efficient way. This lesson will introduce you to the core concepts of Redux and show you how to integrate Redux into your React applications."
tags: [courses, react-js, intermediate-level, state-management, redux, react-redux]
---

import ReduxApp from './ReduxApp';

In React applications, managing complex state across multiple components can be challenging, especially when components are not directly related in the component tree. Redux is a predictable state container for JavaScript apps that helps you manage complex application state in a more organized and efficient way. Redux provides a centralized store for your application's state and allows you to define actions and reducers to update the state in a predictable manner. This lesson will introduce you to the core concepts of Redux and show you how to integrate Redux into your React applications.

## What is Redux?

Redux is a state management library for JavaScript applications that provides a predictable state container. It helps you manage the state of your application in a more organized and efficient way by centralizing the state and defining actions and reducers to update the state. Redux follows a unidirectional data flow pattern, where the state is stored in a single store and can only be modified by dispatching actions. This pattern helps you keep your application's data in sync and makes it easier to debug and test your application. Redux is commonly used with React to manage the state of complex applications.

The core concepts of Redux are:

1. **Store**: The store is a centralized container that holds the state of your application. It provides methods to access the state, dispatch actions, and subscribe to changes in the state. The store is created using the `createStore` function from the `redux` package.
2. **Actions**: Actions are plain JavaScript objects that represent events in your application. They are used to describe what happened in your application and contain a `type` property that defines the action type. Actions are dispatched using the `dispatch` method on the store. 
3. **Reducers**: Reducers are pure functions that specify how the state should change in response to an action. They take the current state and an action as arguments and return the new state. Reducers are combined using the `combineReducers` function from the `redux` package.
4. **Dispatch**: Dispatch is a method provided by the store to dispatch actions to update the state. When an action is dispatched, the store calls the reducers to calculate the new state based on the action type.
5. **Selectors**: Selectors are functions that extract specific pieces of state from the store. They help you access the state in a more organized way and avoid direct access to the store.
6. **Middleware**: Middleware is a function that intercepts actions before they reach the reducers. It provides a way to add additional functionality to the dispatch process, such as logging, async actions, or routing. Middleware is added to the store using the `applyMiddleware` function from the `redux` package.
7. **React-Redux**: React-Redux is the official Redux binding for React. It provides a set of APIs that allow you to connect your React components to the Redux store and access the state and dispatch actions in your components.

Here's an example of using Redux to manage state in a React application:

<Tabs>
  <TabItem value="App.js" label="App.js">    
    ```jsx title="src/App.js"
    import React from "react";
    import { Provider } from "react-redux";
    import store from "./store";
    import Counter from "./Counter";
    
    function App() {
      return (
        <Provider store={store}>
          <div style={{ textAlign: "center" }}>
            <h1>Redux App</h1>
            <Counter />
          </div>
        </Provider>
      );
    }
    
    export default App;
    ```
  </TabItem>
  <TabItem value="store.js" label="store.js">        
    ```jsx title="src/store.js"
    import { createStore } from "redux";
    import rootReducer from "./reducers";

    const store = createStore(rootReducer);

    export default store;
    ```
  </TabItem>
  <TabItem value="reducers.js" label="reducers.js">        
    ```jsx title="src/reducers.js"
    const initialState = {
      count: 0,
    };

    function counterReducer(state = initialState, action) {
      switch (action.type) {
        case "INCREMENT":
          return { ...state, count: state.count + 1 };
        case "DECREMENT":
          return { ...state, count: state.count - 1 };
        default:
          return state;
      }
    }

    export default counterReducer;
    ```
  </TabItem>
  <TabItem value="Counter.js" label="Counter.js">        
    ```jsx title="src/Counter.js"
    import React from "react";
    import { connect } from "react-redux";

    function Counter({ count, increment, decrement }) {
      return (
        <div>
          <h2>Count: <span style={{ color: count < 0 ? "red" : "" }}>{count}</span></h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={decrement} style={{ margin: "10px", padding: "5px 10px" }}>Decrement ( - )</button>
            <button onClick={increment} style={{ margin: "10px",padding: "5px 10px" }}>Increment ( + )</button>
          </div>
        </div>
      );
    }

    const mapStateToProps = (state) => ({
      count: state.count,
    });

    const mapDispatchToProps = (dispatch) => ({
      increment: () => dispatch({ type: "INCREMENT" }),
      decrement: () => dispatch({ type: "DECREMENT" }),
    });

    export default connect(mapStateToProps, mapDispatchToProps)(Counter);
    ```
  </TabItem>
</Tabs>

Now, Run application to see the output.

<BrowserWindow>
    <ReduxApp />
</BrowserWindow>

In this example, we have a simple Redux counter application with the following components:

- `App.js`: The main component that wraps the application with the `Provider` component from `react-redux` and renders the `Counter` component. The `Provider` component provides the Redux store to the application.
- `store.js`: The store configuration file that creates the Redux store using the `createStore` function from `redux` and the root reducer.
- `reducers.js`: The reducer file that defines the `counterReducer` function, which specifies how the state should change in response to the "INCREMENT" and "DECREMENT" actions.
- `Counter.js`: The counter component that displays the count value and provides buttons to increment and decrement the count. The `connect` function from `react-redux` is used to connect the component to the Redux store and map the state and dispatch functions to props.

When the "Increment" or "Decrement" buttons are clicked in the `Counter` component, they dispatch the corresponding actions to update the count state in the Redux store. The `counterReducer` function then calculates the new state based on the action type, and the updated state is reflected in the `Counter` component.

:::warning

If you want to use Redux in your React application, you need to install the following packages:

```bash
npm install redux react-redux
```

:::

Redux provides a powerful and flexible way to manage state in complex React applications. By following the core concepts of Redux and integrating it with React using React-Redux, you can build scalable and maintainable applications with predictable state management.

## Benefits of using Redux

Using Redux for state management in React applications offers several benefits:

1. **Predictable state management**: Redux follows a strict unidirectional data flow pattern, making it easier to understand how data changes in your application.
2. **Centralized state**: Redux provides a single source of truth for your application's state, making it easier to manage and debug the state.
3. **Debugging and testing**: Redux makes it easier to debug and test your application by providing a clear separation of concerns between actions, reducers, and components.
4. **Scalability**: Redux scales well with large applications by providing a structured way to manage state and data flow.
5. **Developer tools**: Redux comes with a set of developer tools that help you inspect the state, actions, and performance of your application during development.
6. **Middleware support**: Redux allows you to add middleware to intercept actions and add additional functionality to the dispatch process.
7. **Integration with React**: Redux integrates seamlessly with React using the React-Redux library, providing a set of APIs to connect your components to the Redux store.

By leveraging the benefits of Redux, you can build robust and maintainable React applications that scale well with complex state management requirements.

:::tip 

Redux is a powerful state management library for JavaScript applications that provides a predictable state container. By following the core concepts of Redux and integrating it with React using React-Redux, you can build scalable and maintainable applications with predictable state management.

:::

## Conclusion

Redux is a predictable state container for JavaScript applications that helps you manage complex application state in a more organized and efficient way. In this lesson, you learned about the core concepts of Redux, including the store, actions, reducers, dispatch, selectors, middleware, and React-Redux. You also saw an example of using Redux to manage state in a React application and how to connect React components to the Redux store. By integrating Redux into your React applications, you can build scalable and maintainable applications with predictable state management.
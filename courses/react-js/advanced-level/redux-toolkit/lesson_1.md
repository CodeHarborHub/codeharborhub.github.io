---
id: lesson-1
title: "Introduction to Redux Toolkit"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "In this lesson, you will learn the basics of Redux Toolkit, including its core concepts and how it simplifies the process of managing state in your React applications."
tags:
  [
    courses,
    redux-toolkit,
    react-js,
    state-management,
    redux,
    introduction,
  ]
---

## Introduction

Redux Toolkit is the official, recommended way to write Redux logic. It provides a set of tools and best practices that make it easier to write Redux applications. Redux Toolkit includes utilities to simplify common use cases, such as store setup, creating reducers, and writing immutable update logic.

## Why Use Redux Toolkit?

Redux Toolkit addresses many common concerns when working with Redux:

1. **Boilerplate Reduction:** Simplifies the process of creating reducers, actions, and the store.
2. **Immutability:** Enforces immutable state updates using Immer.
3. **Efficiency:** Includes performance optimizations and simplifies common tasks.
4. **Configuration:** Provides built-in middleware like Redux Thunk for handling side effects.

## Getting Started with Redux Toolkit

### 1. Installing Redux Toolkit

To get started with Redux Toolkit, you need to install it along with React-Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Creating a Redux Store

Redux Toolkit provides a `configureStore` function that simplifies store creation. It includes good defaults and automatically sets up the Redux DevTools extension.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

### 3. Creating a Slice

A slice is a collection of Redux reducer logic and actions for a single feature of your app. Redux Toolkit’s `createSlice` function automatically generates action creators and action types.

```javascript
// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

### 4. Using the Redux Store in a React Component

Now that the store and slice are set up, you can use them in your React components. Use the `useSelector` hook to read state and the `useDispatch` hook to dispatch actions.

```javascript
// src/features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

export default Counter;
```

### 5. Providing the Redux Store to Your Application

To make the Redux store available to your entire app, wrap your application in the `Provider` component from `react-redux`.

```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Redux Data Flow

Understanding the data flow in Redux is crucial to effectively managing state in your application. The following diagram illustrates how data moves through a Redux application:

![Redux Data Flow Diagram](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

*Description:* This diagram demonstrates the unidirectional data flow in Redux: Actions are dispatched by components, which are then processed by reducers to update the state. The updated state is then passed to the components via the store, closing the loop.

### Conclusion

In this lesson, you learned the basics of Redux Toolkit, including how to install it, create a Redux store, define a slice, and use the Redux store in your React components. Redux Toolkit simplifies the process of working with Redux by providing utility functions and sensible defaults. Understanding the data flow in Redux will help you build more efficient and maintainable state management solutions.

---

This structured approach provides a solid foundation for managing state with Redux Toolkit, making your Redux code more concise and maintainable.
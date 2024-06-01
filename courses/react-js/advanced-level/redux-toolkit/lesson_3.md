---
id: lesson-3
title: "Middleware and Custom Redux Logic with Redux Toolkit"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "In this lesson, you will learn how to extend Redux functionality with custom middleware and how to write reusable logic with createSlice and createReducer in Redux Toolkit."
tags:
  [
    courses,
    redux-toolkit,
    react-js,
    state-management,
    redux,
    middleware,
    custom-logic,
  ]
---

## Introduction

In the previous lessons, we covered the basics of Redux Toolkit and advanced state management techniques. In this lesson, we'll explore how to extend Redux functionality with custom middleware and how to write reusable logic using `createSlice` and `createReducer`.

## Understanding Middleware

Middleware in Redux is a powerful way to extend the functionality of the store. Middleware can intercept actions before they reach the reducers, allowing you to perform side effects, log actions, or even modify actions.

### 1. Applying Middleware

Redux Toolkit's `configureStore` makes it easy to add middleware to your Redux store.

```javascript
// src/app/store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
```

### 2. Writing Custom Middleware

You can write your own custom middleware to handle specific tasks. Middleware is a function that returns another function, which receives the `next` function and the `action`.

```javascript
// src/middleware/customMiddleware.js
const customMiddleware = (storeAPI) => (next) => (action) => {
  console.log('Dispatching action:', action);
  let result = next(action);
  console.log('Next state:', storeAPI.getState());
  return result;
};

export default customMiddleware;
```

### 3. Using Custom Middleware

Add the custom middleware to your Redux store using `configureStore`.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customMiddleware from '../middleware/customMiddleware';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export default store;
```

## Writing Reusable Logic with createSlice and createReducer

### 1. Creating a Reusable Slice

Sometimes you may want to reuse the same logic in different parts of your application. You can create a reusable slice that can be configured for different use cases.

```javascript
// src/features/toggle/toggleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const createToggleSlice = (name) => {
  return createSlice({
    name,
    initialState: false,
    reducers: {
      toggle: (state) => !state,
      set: (state, action) => action.payload,
    },
  });
};

export default createToggleSlice;
```

### 2. Using the Reusable Slice

You can create instances of the reusable slice for different parts of your state.

```javascript
// src/features/toggle/toggleInstances.js
import createToggleSlice from './toggleSlice';

export const lightSlice = createToggleSlice('light');
export const darkSlice = createToggleSlice('dark');

export const { toggle: toggleLight, set: setLight } = lightSlice.actions;
export const { toggle: toggleDark, set: setDark } = darkSlice.actions;

export default {
  light: lightSlice.reducer,
  dark: darkSlice.reducer,
};
```

### 3. Combining Reducers

Use Redux Toolkit's `combineReducers` to combine the reducers into a single reducer.

```javascript
// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import toggleReducers from '../features/toggle/toggleInstances';

const rootReducer = combineReducers({
  ...toggleReducers,
});

export default rootReducer;
```

### 4. Creating the Store

Create the store with the combined reducer.

```javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
```

### 5. Using the Toggle in Components

Use the toggle slices in your components.

```javascript
// src/features/toggle/LightSwitch.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLight } from './toggleInstances';

function LightSwitch() {
  const isLightOn = useSelector((state) => state.light);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleLight())}>
        {isLightOn ? 'Turn off the light' : 'Turn on the light'}
      </button>
    </div>
  );
}

export default LightSwitch;
```

### Conclusion

In this lesson, you learned how to extend Redux functionality with custom middleware and how to write reusable logic using `createSlice` and `createReducer`. Middleware allows you to intercept and handle actions, while reusable slices enable you to define logic once and use it across multiple parts of your application.

By mastering these advanced techniques, you can create more powerful and maintainable Redux applications.

---

These three lessons cover the essential aspects of Redux Toolkit, from basic setup to advanced usage and middleware. Each lesson builds on the previous one, providing a comprehensive understanding of how to use Redux Toolkit effectively in your React applications.

![Middleware and Custom Redux Logic](https://miro.medium.com/v2/resize:fit:724/1*UgcaQCIPE0XGsVkP24yShg.png)

*Description:* Middleware and custom Redux logic play a crucial role in extending Redux functionality and writing reusable logic. The image above illustrates the concept of middleware in Redux and how it intercepts actions before they reach the reducers, allowing for additional processing or side effects.
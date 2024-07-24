---
id: lesson-1
title: "State Management Libraries in React Native"
sidebar_label: State Management
sidebar_position: 1
description: "Learn State Management Libraries in React Native"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
  

Effective state management is crucial for building robust and scalable applications. There are several libraries and tools available for managing state in React Native applications.

#### Introduction to Redux

**Redux** is a predictable state container for JavaScript apps, often used with React for managing application state.

- **Core Concepts:**
  - **Store:** The single source of truth.
  - **Actions:** Plain objects representing payloads of information that send data from your application to the store.
  - **Reducers:** Pure functions that take the current state and an action and return the next state.
  - **Dispatch:** A method to send actions to the store.

**Example: Setting Up Redux**

1. **Install Redux and React-Redux:**

```bash
npm install redux react-redux
```

2. **Create a Redux Store:**

```jsx
// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
```

3. **Provide the Store:**

```jsx
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
```

4. **Connect Components:**

```jsx
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default Counter;
```
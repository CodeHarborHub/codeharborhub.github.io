---
id: lesson-2
title: "Using Redux Thunk for Asynchronous Actions"
sidebar_label: Redux Asynchronous Actions
sidebar_position: 2
description: "Learn Using Redux Thunk for Asynchronous Actions"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 

**Redux Thunk** is a middleware that allows you to write action creators that return a function instead of an action. This can be used for delayed actions or to dispatch only if a certain condition is met.

1. **Install Redux Thunk:**

```bash
npm install redux-thunk
```

2. **Apply Thunk Middleware:**

```jsx
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
```

3. **Create Async Actions:**

```jsx
// actions.js
export const fetchData = () => {
  return async dispatch => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error });
    }
  };
};
```

4. **Dispatch Async Actions:**

```jsx
// Counter.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

const Counter = () => {
  const count = useSelector(state => state.count);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <View>
      <Text>{count}</Text>
      <Text>{data}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Decrement" onPress={() => dispatch({ type: 'DECREMENT' })} />
    </View>
  );
};

export default Counter;
```

#### Introduction to Context API for State Management

**Context API** provides a way to pass data through the component tree without having to pass props down manually at every level.

1. **Create a Context:**

```jsx
// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState({ count: 0 });

  const increment = () => setState({ count: state.count + 1 });
  const decrement = () => setState({ count: state.count - 1 });

  return (
    <MyContext.Provider value={{ state, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
```

2. **Provide the Context:**

```jsx
// App.js
import React from 'react';
import { MyProvider } from './MyContext';
import Counter from './Counter';

const App = () => (
  <MyProvider>
    <Counter />
  </MyProvider>
);

export default App;
```

3. **Consume the Context:**

```jsx
// Counter.js
import React, { useContext } from 'react';
import { MyContext } from './MyContext';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const { state, increment, decrement } = useContext(MyContext);

  return (
    <View>
      <Text>{state.count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default Counter;
```
 
:::tip
- **Redux:** Provides a robust way to manage state in large applications. Redux Thunk can handle asynchronous actions.
- **Context API:** Suitable for simpler or more localized state management without the need for additional libraries.
:::
---
id: lesson-1
title: "Managing App State in React Native"
sidebar_label: Managing App State in React Native
sidebar_position: 1
description: "Learn Managing App State in React Native"
tags: [courses,Advance-level,Introduction]
---  
   

Managing application state is crucial for ensuring consistent behavior and user experience across different parts of your app. This involves using state management libraries, persisting state, and handling state changes when the app transitions between foreground and background.
 
#### 1. Advanced State Management

**1.1. Redux**

Redux is a popular state management library that provides a centralized store for application state and enforces unidirectional data flow.

**Setup and Basic Usage:**

1. **Installation:**

   ```bash
   npm install redux react-redux
   ```

2. **Create a Redux Store:**

   ```javascript
   import { createStore } from 'redux';

   // Reducer
   const counterReducer = (state = { count: 0 }, action) => {
     switch (action.type) {
       case 'INCREMENT':
         return { count: state.count + 1 };
       case 'DECREMENT':
         return { count: state.count - 1 };
       default:
         return state;
     }
   };

   // Store
   const store = createStore(counterReducer);
   ```

3. **Connect React Components:**

   ```javascript
   import React from 'react';
   import { Provider, connect } from 'react-redux';
   import { Text, View, Button } from 'react-native';

   const App = ({ count, increment, decrement }) => (
     <View>
       <Text>Count: {count}</Text>
       <Button title="Increment" onPress={increment} />
       <Button title="Decrement" onPress={decrement} />
     </View>
   );

   const mapStateToProps = state => ({
     count: state.count,
   });

   const mapDispatchToProps = dispatch => ({
     increment: () => dispatch({ type: 'INCREMENT' }),
     decrement: () => dispatch({ type: 'DECREMENT' }),
   });

   const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

   const Main = () => (
     <Provider store={store}>
       <ConnectedApp />
     </Provider>
   );

   export default Main;
   ```

**1.2. MobX**

MobX is another state management library that uses observables to manage state and provides a more flexible and reactive approach compared to Redux.

**Setup and Basic Usage:**

1. **Installation:**

   ```bash
   npm install mobx mobx-react
   ```

2. **Create a MobX Store:**

   ```javascript
   import { makeAutoObservable } from 'mobx';

   class CounterStore {
     count = 0;

     constructor() {
       makeAutoObservable(this);
     }

     increment() {
       this.count += 1;
     }

     decrement() {
       this.count -= 1;
     }
   }

   export const counterStore = new CounterStore();
   ```

3. **Connect React Components:**

   ```javascript
   import React from 'react';
   import { observer } from 'mobx-react-lite';
   import { Text, View, Button } from 'react-native';
   import { counterStore } from './CounterStore';

   const App = observer(() => (
     <View>
       <Text>Count: {counterStore.count}</Text>
       <Button title="Increment" onPress={() => counterStore.increment()} />
       <Button title="Decrement" onPress={() => counterStore.decrement()} />
     </View>
   ));

   export default App;
   ```
 

#### 2. Persisting State with Redux Persist

**2.1. Setup Redux Persist:**

Redux Persist allows you to persist the Redux store in local storage or other storage solutions.

1. **Installation:**

   ```bash
   npm install redux-persist
   ```

2. **Configure Redux Persist:**

   ```javascript
   import { createStore } from 'redux';
   import { persistStore, persistReducer } from 'redux-persist';
   import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
   import { Provider } from 'react-redux';

   // Reducer
   const counterReducer = (state = { count: 0 }, action) => {
     switch (action.type) {
       case 'INCREMENT':
         return { count: state.count + 1 };
       case 'DECREMENT':
         return { count: state.count - 1 };
       default:
         return state;
     }
   };

   // Persist config
   const persistConfig = {
     key: 'root',
     storage,
   };

   const persistedReducer = persistReducer(persistConfig, counterReducer);

   // Store
   const store = createStore(persistedReducer);
   const persistor = persistStore(store);

   const Main = () => (
     <Provider store={store}>
       {/* Application components */}
     </Provider>
   );

   export default Main;
   ```

3. **Wrap Application with PersistGate:**

   ```javascript
   import React from 'react';
   import { PersistGate } from 'redux-persist/integration/react';
   import { Provider } from 'react-redux';
   import { store, persistor } from './store'; // Import store and persistor

   const App = () => (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         {/* Your application components */}
       </PersistGate>
     </Provider>
   );

   export default App;
   ```
 
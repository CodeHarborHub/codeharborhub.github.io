---
id: lesson-2
title: "Basic State Management Patterns"
sidebar_label:  Basic State Management Patterns
sidebar_position: 2
description: "Basic State Management Patterns"
tags: [courses,beginner-level,React Native,Introduction]
--- 
      
:::note
1. **Local State**: Managed using hooks like `useState` within individual components.
2. **Context API**: Used for sharing state globally across the app without prop drilling.
3. **External Libraries**: Tools like Redux or MobX for more complex state management needs.
:::

**Example: Using Context API**

```jsx
import React, { createContext, useState, useContext } from 'react';
import { View, Text, Button } from 'react-native';

const CountContext = createContext();

function CounterDisplay() {
  const { count } = useContext(CountContext);
  return <Text>Count: {count}</Text>;
}

function CounterButton() {
  const { setCount } = useContext(CountContext);
  return <Button title="Increase" onPress={() => setCount(prev => prev + 1)} />;
}

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function App() {
  return (
    <CounterProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CounterDisplay />
        <CounterButton />
      </View>
    </CounterProvider>
  );
}

export default App;
```
 
:::tip
- **State in React Native**: Represents mutable data within components.
- **useState Hook**: Adds state to functional components.
- **Lifting State Up**: Moves shared state to the nearest common ancestor.
- **State Management Patterns**:
  - Local State using hooks.
  - Context API for global state.
  - External libraries for complex state management.
:::

---
id: lesson-1
title: "State Management in React Native"
sidebar_label:  Introduction
sidebar_position: 1
description: "Learn State Management in React Native"
tags: [courses,beginner-level,React Native,Introduction]
--- 
      

State management is a crucial part of React Native applications. It involves maintaining and updating the state of the application, ensuring that the UI reflects the current state of the data.

#### Introduction to State in React Native

State in React Native represents the parts of the app that can change. Each component can maintain its own state, and React Native re-renders the component when the state changes.

#### Using `useState` Hook

The `useState` hook is a fundamental part of React's functional component API, allowing you to add state to functional components.

**Example: Using `useState` Hook**

```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Counter;
```

In this example, `useState` initializes `count` to 0, and `setCount` is used to update the state.

#### Lifting State Up

When multiple components need to share the same state, it is best to move the state to the closest common ancestor. This is called lifting state up.

**Example: Lifting State Up**

```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function ChildA({ count }) {
  return (
    <View>
      <Text>Child A: {count}</Text>
    </View>
  );
}

function ChildB({ onIncrease }) {
  return (
    <View>
      <Button title="Increase" onPress={onIncrease} />
    </View>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ChildA count={count} />
      <ChildB onIncrease={() => setCount(count + 1)} />
    </View>
  );
}

export default Parent;
```

Here, the state `count` is lifted to the `Parent` component and passed down to `ChildA` and `ChildB` as props.

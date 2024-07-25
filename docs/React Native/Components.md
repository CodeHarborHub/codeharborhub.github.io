---
id: components-react-native
title: Components
sidebar_label: Components
sidebar_position: 2
tags: [React Native,JavaScript,React.Js,Components,Framework]
description: Components in React Native
---

In React Native, components are fundamental building blocks used to create the user interface of mobile applications. They encapsulate UI elements and their behaviors into reusable pieces of code, following a component-based architecture.

### 1. **Component Structure**

Components in React Native are defined as JavaScript functions or classes that return a hierarchy of React elements (JSX). There are two main types of components:

- **Functional Components**: These are simple functions that take `props` (short for properties) as input and return JSX to describe the UI. They are preferred for simple components that don't need state or lifecycle methods.

  ```javascript
  import React from 'react';
  import { View, Text } from 'react-native';

  const MyComponent = (props) => {
      return (
          <View>
              <Text>{props.message}</Text>
          </View>
      );
  };

  export default MyComponent;
  ```

- **Class Components**: These are ES6 classes that extend `React.Component`. They are used for more complex components that require state, lifecycle methods, or performance optimizations.

  ```javascript
  import React, { Component } from 'react';
  import { View, Text } from 'react-native';

  class MyComponent extends Component {
      render() {
          return (
              <View>
                  <Text>{this.props.message}</Text>
              </View>
          );
      }
  }

  export default MyComponent;
  ```

### 2. **Props**

Props are used to pass data from parent components to child components. They are read-only and help make components more reusable by allowing them to be configured dynamically. Props are typically specified as attributes in JSX.

Example of using props in a parent component:

```javascript
import React from 'react';
import { View } from 'react-native';
import MyComponent from './MyComponent';

const App = () => {
    return (
        <View>
            <MyComponent message="Hello, React Native!" />
        </View>
    );
};

export default App;
```

### 3. **State**

State is used to store and manage component-specific data that may change over time. It allows components to re-render when the state updates, reflecting the latest data in the UI. State is initialized in the constructor (for class components) or using the `useState` hook (for functional components).

Example using state in a class component:

```javascript
import React, { Component } from 'react';
import { View, Button } from 'react-native';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    render() {
        return (
            <View>
                <Button title="Increment" onPress={this.incrementCount} />
                <Text>Count: {this.state.count}</Text>
            </View>
        );
    }
}

export default Counter;
```

### 4. **Lifecycle Methods**

Class components in React Native have lifecycle methods that allow developers to hook into various stages of a component's lifecycle, such as when it is mounted, updated, or unmounted. Common lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

Example using `componentDidMount`:

```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyComponent extends Component {
    componentDidMount() {
        // Perform initialization tasks here
        console.log('Component mounted');
    }

    render() {
        return (
            <View>
                <Text>Hello, React Native!</Text>
            </View>
        );
    }
}

export default MyComponent;
```

### 5. **Functional Components and Hooks**

Since the introduction of Hooks in React 16.8, functional components can also have state and lifecycle-like features. Hooks like `useState`, `useEffect`, `useContext`, etc., allow functional components to manage state and perform side effects without using classes.

Example using `useState` hook:

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        // Effect to run on component mount and when count changes
        console.log('Count changed:', count);
    }, [count]);

    return (
        <View>
            <Button title="Increment" onPress={incrementCount} />
            <Text>Count: {count}</Text>
        </View>
    );
};

export default Counter;
```
 
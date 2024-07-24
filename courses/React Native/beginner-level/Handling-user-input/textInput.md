---
id: lesson-1
title: "Handling User Input"
sidebar_label:  Handling User Input
sidebar_position: 1
description: "Learn Handling User Input"
tags: [courses,beginner-level,React Native,Introduction]
--- 
     

#### 1. Working with TextInput

`TextInput` is a core component in React Native that allows users to enter text. It can be configured to handle various types of input, such as plain text, passwords, and more.

**Example: Basic TextInput**

```jsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.displayText}>You typed: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: '80%',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 18,
  },
});

export default App;
```

#### 2. Handling User Interactions (onPress, onChange)

React Native provides various ways to handle user interactions like button presses and text input changes.

**Example: Handling Button Presses**

```jsx
import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  };

  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

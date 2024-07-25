---
id: lesson-2
title: "Using TouchableOpacity and TouchableHighlight"
sidebar_label:  TouchableOpacity and TouchableHighlight
sidebar_position: 2
description: "Learn TouchableOpacity and TouchableHighlight"
tags: [courses,beginner-level,React Native,Introduction]
--- 
      

`TouchableOpacity` and `TouchableHighlight` are components used to handle touch interactions with feedback effects.

**Example: TouchableOpacity**

```jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('TouchableOpacity Pressed')}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
```

**Example: TouchableHighlight**

```jsx
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="darkblue"
        onPress={() => alert('TouchableHighlight Pressed')}
      >
        <Text style={styles.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
```

#### Implementing Forms and Input Validation

Forms are crucial in many applications for collecting user input. React Native provides various ways to handle form input and validation.

**Example: Simple Form with Validation**

```jsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!name || !email) {
      setError('All fields are required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
    } else {
      setError('');
      Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Submit" onPress={validate} />
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
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
```
 
:::tip
- **TextInput**: Collects text input from the user.
- **Handling User Interactions**: Handles user interactions with `onPress`, `onChange`, etc.
- **Touchable Components**: Provides touch feedback with `TouchableOpacity` and `TouchableHighlight`.
- **Forms and Validation**: Implements forms and validates user input to ensure correctness.
:::
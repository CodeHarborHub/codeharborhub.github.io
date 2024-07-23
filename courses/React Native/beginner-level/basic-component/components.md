---
id: lesson-1
title: "Basic Components and Layout"
sidebar_label:  Basic Components and Layout
sidebar_position: 1
description: "Learn Basic Components and Layout"
tags: [courses,beginner-level,React Native,Introduction]
--- 
     

#### 1. Introduction to React Native Components

React Native provides a set of core components that you can use to build your mobile application. These components are the building blocks for creating the user interface.

#### 2. Basic Components

**View**
- The most fundamental component for building the UI.
- Used as a container for other components.
- Example:
  ```jsx
  import React from 'react';
  import { View, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <View style={styles.container}>
        {/* Other components go here */}
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

**Text**
- Used to display text.
- Example:
  ```jsx
  import React from 'react';
  import { Text, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <Text style={styles.text}>Hello, React Native!</Text>
    );
  };

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: 'blue',
    },
  });

  export default App;
  ```

**Image**
- Used to display images.
- Example:
  ```jsx
  import React from 'react';
  import { Image, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <Image
        style={styles.image}
        source={{ uri: 'https://example.com/my-image.jpg' }}
      />
    );
  };

  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
    },
  });

  export default App;
  ```

**TextInput**
- Used to create input fields for text entry.
- Example:
  ```jsx
  import React, { useState } from 'react';
  import { TextInput, StyleSheet } from 'react-native';

  const App = () => {
    const [text, setText] = useState('');

    return (
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />
    );
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 8,
    },
  });

  export default App;
  ```

**ScrollView**
- Used to create scrollable views.
- Example:
  ```jsx
  import React from 'react';
  import { ScrollView, Text, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Scrollable content here...</Text>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 20,
    },
  });

  export default App;
  ```

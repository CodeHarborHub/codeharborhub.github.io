---
id: lesson-2
title: "Styling Components Using StyleSheet"
sidebar_label:  Styling Components Using StyleSheet
sidebar_position: 2
description: "Learn Styling Components Using StyleSheet"
tags: [courses,beginner-level,React Native,Introduction]
--- 
    

React Native uses `StyleSheet` for styling components. It is similar to CSS but with a few differences tailored for mobile development.

- Example:
  ```jsx
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Styled text</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    text: {
      fontSize: 18,
      color: '#333',
    },
  });

  export default App;
  ```

#### Layout Fundamentals (Flexbox, Alignment, and Positioning)

React Native uses Flexbox for layout, which allows for a flexible way to create layouts that adapt to different screen sizes.

**Flexbox**
- `flexDirection`: Defines the direction of the main axis (row or column).
- `justifyContent`: Aligns children along the main axis.
- `alignItems`: Aligns children along the cross axis.

- Example:
  ```jsx
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';

  const App = () => {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Box 1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Box 2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Box 3</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box: {
      width: 50,
      height: 50,
      backgroundColor: 'skyblue',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
    },
  });

  export default App;
  ```

**Alignment and Positioning**
- `justifyContent`: Aligns items along the main axis (e.g., `flex-start`, `center`, `flex-end`, `space-between`, `space-around`).
- `alignItems`: Aligns items along the cross axis (e.g., `flex-start`, `center`, `flex-end`, `stretch`).
- `flex`: Defines how a flex item grows relative to the rest of the flex items.
 
:::tip
- **React Native Components**: Fundamental building blocks like `View`, `Text`, `Image`, `TextInput`, and `ScrollView`.
- **Styling with StyleSheet**: Similar to CSS, but optimized for mobile development.
- **Flexbox Layout**: Powerful layout system that adapts to different screen sizes, using properties like `flexDirection`, `justifyContent`, and `alignItems`.
:::
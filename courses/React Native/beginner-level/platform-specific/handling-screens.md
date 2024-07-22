---
id: lesson-2
title: "Handling Different Screen Sizes and Orientations"
sidebar_label:  Handling Different Screen Sizes and Orientations
sidebar_position: 2
description: "Learn Handling Different Screen Sizes and Orientations"
tags: [courses,beginner-level,React Native,Introduction]
--- 
     
  

React Native provides tools to handle different screen sizes and orientations effectively.

**Responsive Design with Flexbox:**

Flexbox is the default layout system in React Native, making it easy to create responsive layouts.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  box: {
    width: '30%',
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default App;
```

**Handling Orientation Changes:**

You can handle orientation changes using the `useWindowDimensions` hook or the `Dimensions` API.

```jsx
import React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Width: {width}</Text>
      <Text style={styles.text}>Height: {height}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
```

**Example with Layout Animation:**

React Native also provides the `LayoutAnimation` API to animate layout changes smoothly.

```jsx
import React, { useState } from 'react';
import { View, Text, Button, LayoutAnimation, StyleSheet } from 'react-native';

function App() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Expand" onPress={toggleExpand} />
      <View style={[styles.box, expanded && styles.expandedBox]}>
        <Text>Expandable Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedBox: {
    width: 200,
    height: 200,
  },
});

export default App;
```


:::tip
- **Platform Module and Specific Files:** Use the `Platform` module and platform-specific file extensions to handle differences between iOS and Android.
- **Platform-Specific Components and APIs:** Leverage components and APIs specific to each platform as needed.
- **Responsive Design:** Use Flexbox for responsive layouts and handle screen sizes and orientations effectively.
- **Handling Orientation Changes:** Utilize hooks and APIs like `useWindowDimensions` and `Dimensions` for dynamic layout adjustments.
- **Layout Animation:** Use the `LayoutAnimation` API for smooth layout transitions.
:::

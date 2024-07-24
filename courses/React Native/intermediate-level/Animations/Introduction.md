---
id: lesson-1
title: "Animation and Gestures in React Native"
sidebar_label: Animations
sidebar_position: 1
description: "Learn Animation and Gestures in React Native"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 

Animations and gestures are essential for creating engaging and interactive mobile applications. React Native provides powerful tools for handling animations and gestures, enabling you to create smooth and responsive user experiences.

#### Introduction to React Native Animations

Animations in React Native are managed using the `Animated` API, which provides a variety of ways to animate components. This API allows for complex and performant animations.

:::note
**Concepts:**
- **Animated Value:** Represents the value of an animation.
- **Animated.View:** A component that can be animated.
- **Animation Types:** Include spring, timing, and decay animations.
:::

#### Using the Animated API for Animations

**1. Basic Animation Example:**

```jsx
// BasicAnimation.js
import React, { useRef, useEffect } from 'react';
import { View, Animated, Button, StyleSheet } from 'react-native';

const BasicAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const animatedStyle = {
    opacity: animation,
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default BasicAnimation;
```

**2. Spring Animation Example:**

```jsx
// SpringAnimation.js
import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Button } from 'react-native';

const SpringAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 2,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export default SpringAnimation;
```

#### Gesture Handling with React Native Gesture Handler

**React Native Gesture Handler** provides better performance and flexibility for handling gestures compared to the default gesture system.

**1. Installation:**

```bash
npm install react-native-gesture-handler
```

**2. Basic Gesture Example:**

```jsx
// GestureHandlerExample.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { event, Value, cond, eq, add, set } = Animated;

const GestureHandlerExample = () => {
  const translateX = new Value(0);
  const translateY = new Value(0);

  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: translateX,
        translationY: translateY,
      },
    },
  ]);

  const onHandlerStateChange = event([
    {
      nativeEvent: {
        state: state => cond(eq(state, State.END), [
          set(translateX, add(translateX, translateX)),
          set(translateY, add(translateY, translateY)),
        ]),
      },
    },
  ]);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateX }, { translateY }],
          },
        ]}
      >
        <Text>Drag Me</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GestureHandlerExample;
```

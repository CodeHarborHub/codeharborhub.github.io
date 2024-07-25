---
id: lesson-2
title: "Building Complex Animations and Gesture Interactions"
sidebar_label:  Gestures
sidebar_position: 2
description: "Learn Building Complex Animations and Gesture Interactions"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 
 

For more complex animations and gesture interactions, you can combine different types of animations and gestures. For example, you can animate a view while handling drag gestures.

**Example: Combining Animation and Gesture:**

```jsx
// ComplexAnimationGesture.js
import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { event, Value, add, multiply, interpolate } = Animated;

const ComplexAnimationGesture = () => {
  const translateX = useRef(new Value(0)).current;
  const translateY = useRef(new Value(0)).current;

  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: translateX,
        translationY: translateY,
      },
    },
  ]);

  const animatedStyle = {
    transform: [
      {
        translateX: interpolate(translateX, {
          inputRange: [-100, 0, 100],
          outputRange: [-50, 0, 50],
        }),
      },
      {
        translateY: interpolate(translateY, {
          inputRange: [-100, 0, 100],
          outputRange: [-50, 0, 50],
        }),
      },
    ],
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text>Drag Me</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComplexAnimationGesture;
```
 
:::tip
- **Animations:** Use the `Animated` API for various animation types and effects.
- **Gestures:** Handle gestures with React Native Gesture Handler for more robust gesture recognition.
- **Complex Interactions:** Combine animations and gestures to create interactive and dynamic user interfaces.
:::

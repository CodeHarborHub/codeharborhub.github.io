---
id: lesson-2
title: "Passing Parameters Between Screens"
sidebar_label: Passing Parameters Between Screens
sidebar_position: 2
description: "Learn Passing Parameters Between Screens in React Native"
tags: [courses,beginner-level,React Native,Introduction]
--- 
   
 

You can pass parameters between screens using the `navigation.navigate` method and retrieve them in the target screen using the `route.params` object.

**Example: Passing Parameters**

```jsx
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 42, otherParam: 'anything you want here' })}
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
 
:::tip
- **React Navigation**: A library for routing and navigation in React Native.
- **Stack Navigator**: Manages a stack of screens.
- **Tab Navigator**: Provides tab-based navigation.
- **Drawer Navigator**: Allows side drawer navigation.
- **Passing Parameters**: Passes data between screens using `navigation.navigate` and retrieves them using `route.params`.
:::
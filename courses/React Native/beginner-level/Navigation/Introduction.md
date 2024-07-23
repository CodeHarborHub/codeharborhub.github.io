---
id: lesson-1
title: "Navigation in React Native"
sidebar_label:  Navigation
sidebar_position: 1
description: "Learn Navigation in React Native"
tags: [courses,beginner-level,React Native,Introduction]
--- 
    

#### Introduction to React Navigation

React Navigation is a popular library for routing and navigation in React Native applications. It provides a way to manage navigation between different screens in a mobile app.

:::note
**Benefits of React Navigation:**
- Simple and customizable API
- Supports stack, tab, and drawer navigation
- Handles deep linking and URL integration
- Manages navigation state
:::

#### Setting up React Navigation

To set up React Navigation in your React Native project, follow these steps:

1. **Install React Navigation and dependencies:**

:::important
```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
npm install react-native-screens react-native-safe-area-context
```
:::

2. **Install peer dependencies:**

```bash
npm install react-native-gesture-handler react-native-reanimated
```

3. **Wrap your application in a Navigation Container:**

```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
```

#### Stack Navigator

A Stack Navigator allows you to manage a stack of screens where each new screen is placed on top of a stack.

**Example: Basic Stack Navigator**

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
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
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

#### Tab Navigator

A Tab Navigator allows you to switch between different screens with tabs.

**Example: Basic Tab Navigator**

```jsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function UpdatesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Updates Screen</Text>
    </View>
  );
}

function ProfileScreen(){
 return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```


:::success
![output](https://callstack.github.io/react-native-paper/screenshots/material-bottom-tabs.gif)
:::

#### Drawer Navigator

A Drawer Navigator allows you to navigate between screens using a side drawer.

**Example: Basic Drawer Navigator**

```jsx
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

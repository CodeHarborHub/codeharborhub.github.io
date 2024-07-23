---
id: lesson-2
title: "Handling Deep Linking"
sidebar_label: Handling Deep Linking
sidebar_position: 2
description: "Learn Handling Deep Linking"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 
 

Deep linking allows you to open specific screens in your app using URLs.

**Setting up Deep Linking:**

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: '',
      Details: 'details',
    },
  },
};

const App = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
```

**Testing Deep Linking:**
To test deep linking, you can use a URL like `myapp://details` to open the Details screen.

#### Customizing Navigation Headers

Customizing navigation headers can help enhance the look and feel of your app.

**Custom Header Example:**

```jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My Home' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
```

#### Managing Navigation State

Managing navigation state is crucial for creating a seamless user experience, especially when dealing with complex navigation flows.

**Example: Checking Navigation State:**

```jsx
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const state = useNavigationState(state => state);
  useEffect(() => {
    console.log('Current state:', state);
  }, [state]);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const DetailsScreen = () => (
  <View>
    <Text>Details Screen</Text>
  </View>
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
``` 
:::tip
- **Nested Navigators:** Organize navigation structures hierarchically for better modularity and readability.
- **Deep Linking:** Use URLs to navigate directly to specific screens within your app.
- **Custom Headers:** Enhance your app's UI by customizing the navigation headers.
- **Navigation State Management:** Monitor and manage navigation state to ensure smooth transitions and handle complex navigation flows effectively.
:::

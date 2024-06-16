---
id: lesson-3
title: "Exploring advanced topics like React Native for mobile development (Optional)"
sidebar_label: Lesson - 3
sidebar_position: 3
description: "In this lesson, you will explore advanced topics like React Native for mobile development. We will cover the basics of React Native, how it differs from React, and how you can use it to build mobile applications for iOS and Android."
tags:
  [
    courses,
    react-js,
    advanced-level,
    react-native,
    mobile-development,
    ios,
    android,
  ]
---

In this lesson, you will explore advanced topics like React Native for mobile development. We will cover the basics of React Native, how it differs from React, and how you can use it to build mobile applications for iOS and Android.

## What is React Native?

React Native is a framework for building native mobile applications using JavaScript and React. It allows you to write mobile applications using the same codebase and development workflow as React web applications. React Native provides a set of components and APIs that map directly to the native UI elements and features of iOS and Android platforms.

## How does React Native differ from React?

While React is a library for building user interfaces on the web, React Native is a framework for building native mobile applications. React Native uses native components and APIs to render UI elements and interact with device features like camera, GPS, and push notifications. React Native applications are compiled to native code and run directly on the device, providing a native user experience.

## Getting started with React Native

To get started with React Native, you can use the Expo CLI or the React Native CLI to create a new project. Expo is a set of tools and services that simplifies the development and deployment of React Native applications. It provides a development server, build tools, and a set of pre-built components and APIs for common mobile app features.

### Using Expo CLI

To create a new React Native project using Expo CLI, you can run the following command:

```bash
npx expo init MyNewApp
cd MyNewApp
npm start
```

Expo CLI will generate a new React Native project with a basic structure and configuration. You can use the Expo client app on your iOS or Android device to preview and test your application during development.

### Using React Native CLI

If you prefer to use the React Native CLI, you can create a new project using the following commands:

```bash
npx react-native init MyNewApp
cd MyNewApp
npx react-native run-ios
```

The React Native CLI will generate a new React Native project with the default configuration. You can use Xcode or Android Studio to build and run your application on an iOS or Android simulator.

## Building mobile applications with React Native

Once you have set up your React Native project, you can start building mobile applications using React components and APIs. React Native provides a set of core components like `View`, `Text`, `Image`, and `ScrollView` that you can use to create UI layouts and interact with user input.

### Example React Native component

```jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default App;
```

In this example, we define a simple React Native component that renders a `View` container with a `Text` element. We use the `StyleSheet` API to define styles for the container and text elements.

:::info

To learn more about building mobile applications with React Native, check out the official [React Native documentation](https://reactnative.dev/docs/getting-started).

:::

## Conclusion

React Native is a powerful framework for building native mobile applications using JavaScript and React. By leveraging the same codebase and development workflow as React web applications, you can build mobile applications for iOS and Android with ease. Explore the React Native documentation and community resources to learn more about building mobile applications with React Native.

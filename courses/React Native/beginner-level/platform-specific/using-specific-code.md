---
id: lesson-1
title: "Platform-Specific Code in React Native"
sidebar_label:  Platform-Specific Code in React Native
sidebar_position: 1
description: "Learn Platform-Specific Code in React Native"
tags: [courses,beginner-level,React Native,Introduction]
--- 
     
   

React Native allows you to write code that runs on both iOS and Android with a single codebase. However, there are situations where you might need to write platform-specific code to handle differences between the two platforms. This includes platform-specific components, APIs, and handling various screen sizes and orientations.

#### Using Platform-Specific Code (iOS vs. Android)

**Platform Module:**
React Native provides the `Platform` module, which allows you to conditionally render code based on the platform.

```jsx
import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Platform.OS === 'ios' ? 'Hello, iOS user!' : 'Hello, Android user!'}
      </Text>
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
    color: Platform.OS === 'ios' ? 'blue' : 'green',
  },
});

export default App;
```

**Platform-Specific Files:**
You can create platform-specific files by appending `.ios` or `.android` to the filename. React Native will automatically pick the correct file based on the platform.

- `MyComponent.ios.js`
- `MyComponent.android.js`

Example for `MyComponent.ios.js`:
```jsx
import React from 'react';
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View>
      <Text>This is iOS specific component</Text>
    </View>
  );
}

export default MyComponent;
```

Example for `MyComponent.android.js`:
```jsx
import React from 'react';
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View>
      <Text>This is Android specific component</Text>
    </View>
  );
}

export default MyComponent;
```

#### Platform-Specific Components and APIs

Some components and APIs are specific to either iOS or Android.

**Example: Using Platform-Specific Components**

```jsx
import React from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import { DatePickerIOS } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Platform Specific Components</Text>
      {Platform.OS === 'ios' ? (
        <DatePickerIOS date={new Date()} onDateChange={() => {}} />
      ) : (
        <Button title="Pick a Date" onPress={() => {}} />
      )}
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

**Platform-Specific APIs:**

Certain APIs are also specific to platforms. For example, the `StatusBar` module has different properties for iOS and Android.

```jsx
import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```
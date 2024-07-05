---
id: styling-react-native
title: Styling
sidebar_label: Styling
sidebar_position: 6
tags: [React Native,JavaScript,React.Js,Styling,Framework]
description: Styling in React Native
---

Styling in React Native is handled differently compared to web development. While it uses a similar approach with CSS-like properties, React Native uses a subset of CSS properties and introduces a few unique concepts.  

### 1. Inline Styles with `style` Prop

In React Native, you apply styles to components using the `style` prop. This prop accepts a JavaScript object where keys are camelCased versions of the CSS property names, and values are the style values, typically strings or numbers.

Example:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default MyComponent;
```

### 2. StyleSheet Object

To manage styles efficiently, React Native provides the `StyleSheet.create` method. This method accepts a JavaScript object where each key represents a unique style name and its value is a set of CSS properties. Using `StyleSheet.create` ensures that styles are optimized and only created once during initialization.

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
});
```

### 3. Supported CSS Properties

React Native supports a subset of CSS properties that are most relevant for mobile app development. Some examples include:

- **Layout**: `flex`, `flexDirection`, `justifyContent`, `alignItems`, `alignSelf`
- **Typography**: `fontSize`, `fontWeight`, `color`, `textAlign`, `lineHeight`
- **Borders and Backgrounds**: `borderWidth`, `borderColor`, `backgroundColor`
- **Dimensions and Positioning**: `width`, `height`, `margin`, `padding`, `position`

Notably, properties related to web-specific layouts like `display`, `float`, and percentage-based units (`%`) are not supported in React Native.

### 4. Flexbox Layout

React Native uses Flexbox for layout by default, similar to CSS in web development. Flexbox allows you to create responsive layouts by specifying how components should be arranged relative to their parent container.

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // align vertically
        alignItems: 'center', // align horizontally
    },
});
```

### 5. Conditional Styles and Dynamic Styling

You can conditionally apply styles based on props or state in React Native, similar to traditional React:

```javascript
const MyComponent = ({ isImportant }) => {
    return (
        <Text style={[styles.text, isImportant && styles.importantText]}>
            Hello, React Native!
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'black',
    },
    importantText: {
        fontWeight: 'bold',
        color: 'red',
    },
});
```

### 6. Platform-specific Styles

React Native provides a way to define styles specific to different platforms (iOS and Android) using the `Platform` module:

```javascript
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: 'white',
            },
            android: {
                backgroundColor: 'lightgrey',
            },
        }),
    },
});
```

### 7. External Stylesheets

You can also use external stylesheets by importing them into your components, similar to how you import other modules in JavaScript:

```javascript
import styles from './styles'; // Import from a separate file
``` 
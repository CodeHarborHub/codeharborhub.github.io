---
id: lesson-2
title: "Using Third-Party Libraries for Styling"
sidebar_label: Third-Party Libraries 
sidebar_position: 2
description: "Learn Using Third-Party Libraries for Styling"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 

 

**Styled Components:**

```jsx
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: palevioletred;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <StyledButton onPress={() => alert('Styled Button Pressed')}>
        <ButtonText>Click Me</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default App;
```

**Responsive Design Principles:**

**Using `Dimensions` and `useWindowDimensions`:**

```jsx
import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
```

**Using Flexbox for Responsive Layouts:**

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: '30%',
    height: 100,
    backgroundColor: 'lightgray',
  },
});

export default App;
```
 
:::tip
- **Custom Components:** Create modular and reusable components by encapsulating UI and behavior.
- **Advanced Styling:** Use the `Animated` API for animations and transitions to enhance user experience.
- **Third-Party Libraries:** Integrate libraries like styled-components for more advanced and flexible styling solutions.
- **Responsive Design:** Utilize Flexbox, `Dimensions`, and `useWindowDimensions` to create responsive and adaptable layouts for different screen sizes and orientations.
:::
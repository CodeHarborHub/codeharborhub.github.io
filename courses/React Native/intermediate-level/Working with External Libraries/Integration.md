---
id: lesson-1
title: "Working with External Libraries in React Native"
sidebar_label: Working with External Libraries
sidebar_position: 1
description: "Learn Working with External Libraries in React Native"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 

Integrating external libraries into your React Native project can greatly enhance functionality and streamline development. This includes libraries for maps, charts, authentication, and more. Here's how to work with external libraries in React Native, including integration with Expo and managing dependencies.

#### 1. Integrating with Third-Party Libraries

**1.1. Maps Integration**

To integrate maps, you can use libraries like `react-native-maps`.

**Installation:**

```bash
npm install react-native-maps
```

**Example:**

```jsx
// MapComponent.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
```

**1.2. Charts Integration**

For charts, you can use libraries like `react-native-chart-kit`.

**Installation:**

```bash
npm install react-native-chart-kit
```

**Example:**

```jsx
// ChartComponent.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [
            {
              data: [50, 10, 40, 95, 85],
            },
          ],
        }}
        width={320}
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffd700',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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

export default ChartComponent;
```

#### 2. Using Expo and Its Ecosystem

Expo provides a set of tools and services that make it easier to build React Native apps, including a library of pre-built components and APIs.

**2.1. Installing Expo:**

If you're starting a new project, you can use Expo CLI:

```bash
npm install -g expo-cli
expo init my-new-project
```

**2.2. Using Expo Libraries:**

Expo comes with many built-in libraries for common tasks like image picking, location, and notifications.

**Example:**

```jsx
// ExpoImagePicker.js
import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ExpoImagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ExpoImagePicker;
```

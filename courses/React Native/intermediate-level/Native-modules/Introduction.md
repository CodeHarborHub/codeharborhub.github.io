---
id: lesson-1
title: "Native Modules and APIs in React Native"
sidebar_label: Native Modules 
sidebar_position: 1
description: "Learn Native Modules and APIs in React Native"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
  

Native modules allow you to write code in native languages (Java, Objective-C, Swift) and expose it to your React Native application. This is useful when you need to use platform-specific APIs or perform performance-intensive tasks.

#### Introduction to Native Modules

**Native modules** are bridges between JavaScript and native code. They allow JavaScript to access native platform APIs and functionality.

:::note
**Concepts:**
- **Bridge:** The communication layer between JavaScript and native code.
- **Native Module:** Custom native code that exposes functionality to JavaScript.
- **Native Event:** Native code can emit events that JavaScript can listen to.
:::

#### Using Built-in React Native APIs

React Native provides several built-in APIs for accessing device capabilities.

**Example: Using the Camera API**

1. **Install the Camera Library:**

```bash
npm install react-native-camera
```

2. **Link the Library (if using React Native < 0.60):**

```bash
react-native link react-native-camera
```

3. **Use the Camera Component:**

```jsx
// CameraExample.js
import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraExample = () => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
      />
      <TouchableOpacity onPress={takePicture}>
        <Text>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraExample;
```

**Example: Using the Geolocation API**

1. **Request Permissions (iOS):** Add the following to your `Info.plist`:

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to show where you are on the map</string>
```

2. **Use the Geolocation API:**

```jsx
// GeolocationExample.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const GeolocationExample = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View>
      {location ? (
        <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
      ) : (
        <Text>Fetching location...</Text>
      )}
    </View>
  );
};

export default GeolocationExample;
```

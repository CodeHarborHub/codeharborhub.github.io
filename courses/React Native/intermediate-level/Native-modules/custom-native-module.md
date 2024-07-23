---
id: lesson-2
title: "Creating Custom Native Modules"
sidebar_label: Custom Native Modules
sidebar_position: 2
description: "Learn Creating Custom Native Modules"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 
 

To create custom native modules, you need to write native code for each platform and expose it to JavaScript.

**Example: Creating a Native Module for Android**

1. **Create a Native Module:**

```java
// MyModule.java
package com.myapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class MyModule extends ReactContextBaseJavaModule {
  public MyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MyModule";
  }

  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
}
```

2. **Register the Module:**

```java
// MyPackage.java
package com.myapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyPackage implements ReactPackage {
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new MyModule(reactContext));
    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
```

3. **Add the Package to Your Application:**

```java
// MainApplication.java
import com.myapp.MyPackage;

@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new MyPackage()
  );
}
```

4. **Use the Native Module in JavaScript:**

```jsx
// App.js
import React from 'react';
import { View, Button } from 'react-native';
import { NativeModules } from 'react-native';

const { MyModule } = NativeModules;

const App = () => {
  const showMessage = () => {
    MyModule.show('Hello from Native Module!', 1);
  };

  return (
    <View>
      <Button title="Show Message" onPress={showMessage} />
    </View>
  );
};

export default App;
```

#### Linking Native Code with React Native

For React Native versions below 0.60, you need to link native modules manually:

1. **Link the Library:**

```bash
react-native link <library-name>
```

For React Native versions 0.60 and above, auto-linking is supported, and manual linking is not necessary.
 
:::tip
- **Built-in APIs:** Utilize React Native's built-in APIs for common functionalities like Camera, Geolocation, and Sensors.
- **Custom Native Modules:** Create custom modules to access platform-specific features.
- **Linking:** Manually link libraries if auto-linking is not available (for React Native < 0.60).
:::
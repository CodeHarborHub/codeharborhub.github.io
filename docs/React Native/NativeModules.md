---
id: native-modules
title: Native Modules
sidebar_label: Native Modules
sidebar_position: 5
tags: [React Native,JavaScript,React.Js,Native Modules,Framework]
description: Native Modules
---

In React Native, "native modules" are JavaScript interfaces that allow your JavaScript code to communicate with platform-specific native code written in Java (for Android) or Objective-C / Swift (for iOS). These modules are essential for accessing device-specific functionalities that are not available through the core React Native APIs.

### Purpose of Native Modules

React Native provides a set of core components and APIs (like `View`, `Text`, `Image`, etc.) that are cross-platform and managed entirely in JavaScript. However, for tasks like accessing the camera, using location services, or integrating with platform-specific SDKs (e.g., Google Maps on Android or Apple HealthKit on iOS), you need to write custom native code.

### Creating Native Modules

Creating a native module involves two main steps:

1. **Define the Native Module in Native Code**:
   - **Android**: Create a Java class that extends `ReactContextBaseJavaModule` and annotate methods with `@ReactMethod`.
   - **iOS**: Create an Objective-C or Swift class that conforms to the `RCTBridgeModule` protocol and expose methods using the `RCT_EXPORT_METHOD` macro.

2. **Bridge Native Code to JavaScript**:
   - Once you've defined your native module in Java or Objective-C / Swift, you can call its methods from your JavaScript code using the `NativeModules` API provided by React Native.
   - Methods exposed through native modules can return values synchronously or asynchronously (using Promises on JavaScript side).

### Example of a Native Module

Here’s a simplified example of a native module that provides a method to get the device's battery level:

**Android (Java)**:

```java
// BatteryModule.java

package com.yourapp;

import android.content.Intent;
import android.os.BatteryManager;
import android.content.Context;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class BatteryModule extends ReactContextBaseJavaModule {
    private Context mContext;

    public BatteryModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "BatteryModule";
    }

    @ReactMethod
    public void getBatteryLevel(Promise promise) {
        Intent batteryIntent = mContext.registerReceiver(null,
                new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        int level = batteryIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
        int scale = batteryIntent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
        float batteryPct = level / (float)scale;

        promise.resolve(batteryPct);
    }
}
```

**iOS (Objective-C)**:

```objective-c
// BatteryModule.m

#import "BatteryModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>

@implementation BatteryModule

RCT_EXPORT_MODULE(BatteryModule);

RCT_EXPORT_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  UIDevice *device = UIDevice.currentDevice;
  device.batteryMonitoringEnabled = YES;
  double batteryLevel = (double)device.batteryLevel;
  device.batteryMonitoringEnabled = NO;
  
  if (batteryLevel > 0) {
    resolve(@(batteryLevel));
  } else {
    NSError *error = [NSError errorWithDomain:@"BatteryModule" code:1 userInfo:nil];
    reject(@"no_battery_level", @"Could not get battery level", error);
  }
}

@end
```

### Using Native Modules in JavaScript

Once you have defined and implemented your native module, you can use it in your JavaScript code:

```javascript
import { NativeModules } from 'react-native';

const BatteryModule = NativeModules.BatteryModule;

BatteryModule.getBatteryLevel()
  .then(batteryLevel => {
    console.log('Battery level:', batteryLevel);
  })
  .catch(error => {
    console.error('Error getting battery level:', error);
  });
```
 
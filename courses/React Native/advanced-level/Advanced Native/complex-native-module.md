---
id: lesson-1
title: "Advanced Native Integration in React Native"
sidebar_label: Advanced Native Integration 
sidebar_position: 1
description: "Learn Advanced Native Integration in React Native"
tags: [courses,Advance-level,Introduction]
---  
   

Integrating native modules and libraries allows React Native applications to interact with platform-specific features and utilize native SDKs for enhanced functionality. Here’s a detailed guide on advanced native integration, including creating complex native modules, interacting with platform-specific features, and using native libraries and SDKs.
 

#### 1. Creating Complex Native Modules

**1.1. Introduction to Native Modules**

Native modules in React Native allow you to bridge between JavaScript and native code (Java for Android, Objective-C/Swift for iOS). This is useful when you need to access platform-specific APIs or integrate with native SDKs.

**1.2. Creating a Native Module**

**For iOS:**

1. **Create a Swift/Objective-C Class:**
   - Create a new Swift or Objective-C file in your Xcode project.

   ```swift
   // MyNativeModule.swift
   import Foundation
   import React

   @objc(MyNativeModule)
   class MyNativeModule: NSObject {
     @objc
     func showMessage(_ message: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
       // Example: Show an alert with the message
       DispatchQueue.main.async {
         let alert = UIAlertController(title: "Message", message: message, preferredStyle: .alert)
         alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
         UIApplication.shared.keyWindow?.rootViewController?.present(alert, animated: true, completion: nil)
         resolver("Alert shown")
       }
     }
   }

   @objc(MyNativeModule)
   extension MyNativeModule: RCTBridgeModule {
     static func moduleName() -> String {
       return "MyNativeModule"
     }
   }
   ```

2. **Expose the Module to React Native:**
   - Register the module in `AppDelegate.m` or `AppDelegate.swift`.

   ```swift
   // AppDelegate.swift
   import React
   @objc(AppDelegate)
   class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
     func sourceURL(for bridge: RCTBridge!) -> URL! {
       return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
     }
     // Register the module
     func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
       let bridge = RCTBridge(delegate: self, launchOptions: launchOptions)
       let rootView = RCTRootView(bridge: bridge, moduleName: "MyReactNativeApp", initialProperties: nil)
       return true
     }
   }
   ```

**For Android:**

1. **Create a Java/Kotlin Class:**

   ```java
   // MyNativeModule.java
   package com.myapp;

   import com.facebook.react.bridge.ReactApplicationContext;
   import com.facebook.react.bridge.ReactContextBaseJavaModule;
   import com.facebook.react.bridge.ReactMethod;
   import com.facebook.react.bridge.Promise;
   import android.widget.Toast;

   public class MyNativeModule extends ReactContextBaseJavaModule {
     MyNativeModule(ReactApplicationContext reactContext) {
       super(reactContext);
     }

     @Override
     public String getName() {
       return "MyNativeModule";
     }

     @ReactMethod
     public void showMessage(String message, Promise promise) {
       Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
       promise.resolve("Message shown");
     }
   }
   ```

2. **Register the Module:**

   ```java
   // MyNativeModulePackage.java
   package com.myapp;

   import com.facebook.react.ReactPackage;
   import com.facebook.react.bridge.ReactContextBaseJavaModule;
   import com.facebook.react.bridge.ReactApplicationContext;
   import com.facebook.react.bridge.ReactContext;
   import com.facebook.react.bridge.ReactContextBaseJavaModule;
   import com.facebook.react.bridge.ReactMethod;
   import com.facebook.react.bridge.ReactPackage;
   import java.util.Arrays;
   import java.util.Collections;
   import java.util.List;

   public class MyNativeModulePackage implements ReactPackage {
     @Override
     public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
       return Arrays.<NativeModule>asList(new MyNativeModule(reactContext));
     }

     @Override
     public List<Class<? extends JavaScriptModule>> createJSModules() {
       return Collections.emptyList();
     }
   }
   ```

   - Register the package in `MainApplication.java`.

   ```java
   // MainApplication.java
   @Override
   protected List<ReactPackage> getPackages() {
     return Arrays.<ReactPackage>asList(
       new MainReactPackage(),
       new MyNativeModulePackage() // Register the package
     );
   }
   ```

**1.3. Using the Native Module in React Native:**

```javascript
import { NativeModules } from 'react-native';
const { MyNativeModule } = NativeModules;

MyNativeModule.showMessage("Hello from Native Module")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
 

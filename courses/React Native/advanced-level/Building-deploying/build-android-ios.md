---
id: lesson-1
title: "Building and Deploying React Native Apps"
sidebar_label: Building and Deploying
sidebar_position: 1
description: "Learn Building and Deploying React Native Apps"
tags: [courses,Advance-level,Introduction]
---  
  

Building and deploying React Native apps involves several steps, including configuring for both iOS and Android platforms, signing and publishing your app, handling updates, and setting up CI/CD pipelines. Here’s a comprehensive guide to each step:


#### 1. Building and Configuring for iOS and Android

**1.1. Building for iOS**

1. **Prerequisites:**
   - **macOS** with Xcode installed.
   - An Apple developer account.

2. **Configure the iOS App:**
   - Open the iOS project in Xcode (`ios/YourApp.xcworkspace`).
   - Set up the `Info.plist` file with necessary permissions and configurations.
   - Configure signing and capabilities in Xcode.

3. **Build the iOS App:**
   ```bash
   cd ios
   xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release -archivePath $PWD/build/YourApp.xcarchive archive
   xcodebuild -exportArchive -archivePath $PWD/build/YourApp.xcarchive -exportOptionsPlist YourApp/Info.plist -exportPath $PWD/build
   ```

**1.2. Building for Android**

 **Prerequisites:**
   - **Android Studio** installed with the necessary SDKs and environment variables set.

 :::note
 **Configure the Android App:**
   - Modify `android/app/build.gradle` for versioning and signing.
   - Configure `android/app/src/main/AndroidManifest.xml` for permissions and settings.
   :::

 **Build the Android App:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```
   :::important
   The APK will be located in `android/app/build/outputs/apk/release/app-release.apk`.
   :::


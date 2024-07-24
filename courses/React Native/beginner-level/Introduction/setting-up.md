---
id: lesson-2
title: "Setting Up the Development Environment"
sidebar_label:  Setting Up
sidebar_position: 2
description: "Learn Setting Up the Development Environment"
tags: [courses,beginner-level,React Native,Introduction]
--- 
    

To start developing with React Native, you'll need to set up your development environment. This involves installing Node.js, React Native CLI, and either Android Studio or Xcode (depending on whether you're developing for Android or iOS).

**For Windows/Linux:**

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install React Native CLI**:
   - Open your terminal or command prompt and run:
     ```bash
     npm install -g react-native-cli
     ```

3. **Set Up Android Development Environment**:
   - Install Android Studio from [developer.android.com](https://developer.android.com/studio).
   - Follow the setup instructions to install Android SDK and Android Virtual Device (AVD).

4. **Set Up iOS Development Environment** (Mac only):
   - Install Xcode from the Mac App Store.
   - Ensure you have Xcode Command Line Tools installed.

**For macOS:**

1. **Install Homebrew** (if not already installed):
   - Open Terminal and run:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

2. **Install Node.js**:
   - Run:
     ```bash
     brew install node
     ```

3. **Install Watchman** (recommended for macOS):
   - Run:
     ```bash
     brew install watchman
     ```

4. **Install React Native CLI**:
   - Run:
     ```bash
     npm install -g react-native-cli
     ```

5. **Set Up Xcode**:
   - Download Xcode from the Mac App Store and install it.

6. **Set Up Android Development Environment** (optional):
   - Install Android Studio as described above.

#### Creating and Running Your First React Native App

1. **Create a New React Native Project**:
   - Open your terminal or command prompt and run:
     ```bash
     npx react-native init MyFirstApp
     ```
   - Replace `MyFirstApp` with your desired project name.

2. **Navigate to the Project Directory**:
   - Change to your project directory:
     ```bash
     cd MyFirstApp
     ```

3. **Run the Application**:
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
     - Make sure you have an iOS simulator running or an iOS device connected.

   - For Android:
     ```bash
     npx react-native run-android
     ```
     - Make sure you have an Android emulator running or an Android device connected.

**Example Output**:

After running the above commands, your default React Native app should launch on your emulator or device. You will see a screen displaying the text "Welcome to React Native!" along with instructions to edit the `App.js` file.

**Basic `App.js` Example**:

```jsx
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to React Native!</Text>
    </SafeAreaView>
  );
};

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

**Output**:
- The screen should display `Welcome` centered on the screen.

![Huawei-P30-PRO-localhost](https://github.com/user-attachments/assets/3f49e94e-e566-401c-bc89-1b0f949e8772)
 
:::tip
- **React Native**: Allows you to build mobile apps using React and JavaScript, with native performance and cross-platform capabilities.
- **Benefits**: Includes cross-platform development, fast development, native performance, and code reusability.
- **Setup**: Requires Node.js, React Native CLI, and platform-specific tools (Android Studio for Android, Xcode for iOS).
- **Getting Started**: Involves creating a new project and running it on an emulator or device to see the default app.
:::
---
id: flutter-installation
title: Flutter Installation
sidebar_label: Flutter Installation
sidebar_position: 2
tags: [introduction,Flutter,App development]
description: Flutter Installation
---

This chapter provides a detailed guide on how to install Flutter on your local computer.

## Installation in Windows

To install Flutter SDK and its requirements on a Windows system, follow these steps:

1. Go to [https://flutter.dev/docs/get-started/install/windows](https://flutter.dev/docs/get-started/install/windows) and download the latest Flutter SDK (version 1.2.1 as of April 2019) from the provided URL.

2. Unzip the downloaded zip archive into a folder, for example, `C:\flutter\`.

3. Update the system path to include the Flutter bin directory.

4. Run the command `flutter doctor` to check if all the requirements for Flutter development are met. The command will analyze the system and provide a report.

5. If the report shows any issues, such as a missing Android SDK or Android Studio, follow the instructions to install the required components.

6. Connect an Android device through USB or start an Android emulator to resolve the "No devices available" issue.

7. Install the latest Android SDK and Android Studio if reported by `flutter doctor`.

8. Install the Flutter and Dart plugin for Android Studio by following these steps:
    - Open Android Studio.
    - Click on File → Settings → Plugins.
    - Select the Flutter plugin and click Install.
    - Click Yes when prompted to install the Dart plugin.
    - Restart Android Studio.

## Installation in MacOS

To install Flutter on MacOS, follow these steps:

1. Go to [https://flutter.dev/docs/get-started/install/macos](https://flutter.dev/docs/get-started/install/macos) and download the latest Flutter SDK (version 1.2.1 as of April 2019) from the provided URL.

2. Unzip the downloaded zip archive into a folder, for example, `/path/to/flutter`.

3. Update the system path to include the Flutter bin directory by adding the following line to the `~/.bashrc` file:
    ```
    export PATH="$PATH:/path/to/flutter/bin"
    ```

4. Enable the updated path in the current session by running the following commands:
    ```
    source ~/.bashrc
    source $HOME/.bash_profile
    echo $PATH
    ```

5. Run the command `flutter doctor` to check if all the requirements for Flutter development are met.

6. If the report shows any issues, such as a missing XCode or Android SDK, follow the instructions to install the required components.

7. Start an Android emulator or connect a real Android device to the system for Android application development.

8. Open the iOS simulator or connect a real iPhone device to the system for iOS application development.

9. Install the Flutter and Dart plugin for Android Studio by following these steps:
    - Open Android Studio.
    - Click on Preferences → Plugins.
    - Select the Flutter plugin and click Install.
    - Click Yes when prompted to install the Dart plugin.
    - Restart Android Studio.


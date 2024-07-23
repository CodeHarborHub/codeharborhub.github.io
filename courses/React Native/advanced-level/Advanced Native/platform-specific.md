---
id: lesson-2
title: "Interacting with Platform-Specific Featuress"
sidebar_label: Interacting with Platform-Specific Features
sidebar_position: 2
description: "Learn Interacting with Platform-Specific Features"
tags: [courses,Advance-level,Introduction]
---   

**1.1. Bluetooth:**

- **iOS:** Use the CoreBluetooth framework.
- **Android:** Use the BluetoothAdapter and BluetoothManager APIs.

**1.2. NFC:**

- **iOS:** Use the Core NFC framework.
- **Android:** Use the NfcAdapter and NfcManager classes.

**Example:**

**Bluetooth Integration (Android):**
:::important
1. **Add Permissions in `AndroidManifest.xml`:**

   ```xml
   <uses-permission android:name="android.permission.BLUETOOTH" />
   <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
   ```

2. **Access Bluetooth in Java:**

   ```java
   BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
   if (bluetoothAdapter != null) {
     if (bluetoothAdapter.isEnabled()) {
       // Bluetooth is enabled
     } else {
       // Bluetooth is not enabled
     }
   }
   ```
:::
 
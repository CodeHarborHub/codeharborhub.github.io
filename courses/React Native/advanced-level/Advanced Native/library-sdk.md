---
id: lesson-3
title: "Using Native Libraries and SDKs"
sidebar_label: Native Libraries and SDKs 
sidebar_position: 3
description: "Learn Using Native Libraries and SDKs"
tags: [courses,Advance-level,Introduction]
---  
 

**1.1. Firebase Integration:**

1. **Set Up Firebase SDK:**
   - Follow the Firebase setup instructions for both iOS and Android.

2. **Add Firebase to Your Project:**
   - Use the `react-native-firebase` library or the Firebase JavaScript SDK.

**1.2. Stripe Integration:**

1. **Set Up Stripe SDK:**
   - Follow the Stripe documentation to integrate with your React Native project.

2. **Example Code for Stripe:**

   ```javascript
   import { StripeProvider } from '@stripe/stripe-react-native';

   const App = () => {
     return (
       <StripeProvider publishableKey="your-publishable-key">
         {/* Your app code */}
       </StripeProvider>
     );
   };
   ```

**1.3. Handling External Libraries with Expo:**

- Use `expo install` to add supported libraries.
- For unsupported libraries, use Expo’s bare workflow to include them.
 
:::tip
- **Creating Complex Native Modules:** Develop custom native modules for iOS and Android to extend your app’s functionality.
- **Interacting with Platform-Specific Features:** Integrate with native features like Bluetooth and NFC using platform-specific APIs.
- **Using Native Libraries and SDKs:** Utilize libraries such as Firebase and Stripe to enhance your app’s capabilities.
:::
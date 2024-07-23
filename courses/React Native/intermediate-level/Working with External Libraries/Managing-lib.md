---
id: lesson-2
title: "Managing Library Dependencies and Versions"
sidebar_label: Managing Library Dependencies and Versions
sidebar_position: 2
description: "Learn Managing Library Dependencies and Versions"
tags: [courses,intermediate-level,Rect Native,Introduction]
--- 
 


Managing dependencies and versions is crucial for maintaining compatibility and stability in your project.

**1.1. Adding Dependencies:**

Use `npm` or `yarn` to add dependencies:

```bash
npm install <library-name>
# or
yarn add <library-name>
```

**1.2. Checking and Updating Dependencies:**

- **Check outdated packages:**

  ```bash
  npm outdated
  # or
  yarn outdated
  ```

- **Update packages:**

  ```bash
  npm update
  # or
  yarn upgrade
  ```

- **Check installed package versions:**

  ```bash
  npm list
  # or
  yarn list
  ```

**1.3. Using `package.json`:**

Ensure that `package.json` is up-to-date with correct versions of dependencies. For more control, you can specify exact versions or version ranges.

**Example `package.json` snippet:**

```json
{
  "dependencies": {
    "react-native-maps": "^0.29.0",
    "react-native-chart-kit": "^6.0.0",
    "expo": "^45.0.0"
  }
}
```

:::tip
- **Integrating Libraries:** Use libraries like `react-native-maps` and `react-native-chart-kit` to add advanced functionality.
- **Expo:** Leverage Expo’s ecosystem for easier development and access to built-in features.
- **Dependency Management:** Use `npm` or `yarn` to manage and update dependencies, ensuring compatibility and stability in your project. 
:::

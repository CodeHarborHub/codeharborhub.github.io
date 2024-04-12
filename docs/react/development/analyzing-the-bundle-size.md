---
id: analyzing-the-bundle-size
title: Analyzing Bundle Size
sidebar_label: Analyzing Bundle Size
sidebar_position: 3
tags: [react, create-react-app, source-map-explorer, bundle-size, performance]
description: "Learn how to analyze the bundle size of your Create React App project using Source Map Explorer. Identify areas of your codebase that might be bloated and optimize them for better performance."
---

If you want to understand where the excess code in your JavaScript bundles is coming from, you can use a helpful tool called Source Map Explorer. In this guide, we'll learn how to add Source Map Explorer to your Create React App project and analyze the bundle size.

## Installation

To get started, follow these steps:

1. Open your command line interface.

2. If you're using npm, run the following command:
```sh
npm install --save source-map-explorer
```
   If you prefer using yarn, use this command instead:
```sh
yarn add source-map-explorer
```

## Configuration

Once you've installed Source Map Explorer, you need to configure your project to use it. Here's how:

1. Open your `package.json` file.

2. Locate the `"scripts"` section and add the following line:
```diff
   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```
   This adds a new script named `"analyze"` that will run Source Map Explorer on your production build.

## Analyzing the Bundle

Now that you've set up Source Map Explorer, it's time to analyze your bundle size. Follow these steps:

1. Run the production build command in your command line interface:
```sh
npm run build
```
   This command generates the optimized and minified version of your React app.

2. After the build process completes, run the analyze script:
```sh
npm run analyze
```
   Source Map Explorer will open in your default browser and display a visual representation of your bundle. It will show you which parts of your code contribute the most to the bundle size.

By analyzing the bundle size, you can identify areas of your codebase that might be bloated and optimize them for better performance.

Congratulations! You now know how to use Source Map Explorer to analyze the bundle size of your Create React App project.

Remember to regularly analyze your bundle size to ensure your app remains fast and efficient.

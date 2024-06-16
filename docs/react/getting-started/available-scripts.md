---
id: available-scripts
title: Available Scripts
sidebar_position: 3
tags: [react, create-react-app, scripts, npm, start, test, build, eject, react-scripts, react-dom, react-app]
description: "Learn about the available scripts in a Create React App project. Use these scripts to start, test, build, and eject your app, as well as to run custom scripts."
---

In your project directory, you can use the following scripts:

## `npm start`

This script runs your app in development mode. It starts a local server and opens your app in a web browser at [http://localhost:3000](http://localhost:3000). Whenever you make changes to your code, the page will automatically reload. If there are any errors in your code, you will see them in the console.

## `npm test`

This script launches the test runner in interactive watch mode. It helps you run tests for your app and provides feedback. You can learn more about running tests in the <u>running tests</u> section.

## `npm run build`

This script builds your app for production. It creates an optimized version of your app in the `build` folder. The production build is minified and the filenames include unique hashes to ensure browser caching works correctly. React is also bundled in production mode for better performance. If needed, you can enable class and function names for profiling purposes. You can find more information about the production build process in the <u>production build</u> section.

Your app is now ready to be deployed! Check out the <u>deployment</u> section to learn how to deploy your application to popular hosting providers.

## `npm run eject`

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you're not satisfied with the build tool and configuration choices, you can use this script to eject. Ejecting removes the single build dependency from your project.

Instead, it copies all the configuration files and the necessary dependencies (like webpack, Babel, ESLint, etc.) into your project's `package.json`. The distinction between regular dependencies and development dependencies is less important for front-end apps that produce static bundles.

In the past, this separation caused issues with some hosting platforms that didn't install development dependencies. As a result, they couldn't build or test the project properly before deployment. By ejecting, you're free to arrange your dependencies in `package.json` as you see fit.

All the commands except `eject` will continue to work, but they will now refer to the copied scripts, allowing you to customize them. However, from this point forward, you're responsible for maintaining and configuring the build tools on your own.

Remember, you don't have to use `eject`. The pre-configured features are suitable for small to medium deployments, and you're not obligated to use this customization feature. However, we understand that customization is important when you're ready for it. You can read more about the <u>ejecting</u> process in the documentation.

## Custom Scripts

You can also run custom scripts by adding them to the `scripts` section of your `package.json` file. For example, you can add a script to run a linter or a custom build process. You can then run the script using `npm run <script-name>`. For more information, refer to the <u>custom scripts</u> section.

## Learn More

You can learn more about the available scripts and their usage in the [Create React App documentation](https://create-react-app.dev/docs/available-scripts).
---
id: supported-browsers-features
title: Supported Browsers and Features
sidebar_position: 4
tags: [react, create-react-app, browsers, browser compatibility, polyfills, modern JavaScript, language features, async/await, object rest/spread properties, dynamic import, class fields, static properties, JSX, Flow, TypeScript, browserslist, react-app-polyfill, JavaScript]
description: "Learn about the supported browsers and advanced language features in the website project. Understand how to ensure broad browser compatibility and leverage modern JavaScript capabilities."
---

## Supported Browsers

When building your website, it is designed to work well with all modern web browsers. This means that visitors using popular browsers like Chrome, Firefox, Safari, and Edge should have a smooth experience without any issues.

However, if you need to support older browsers such as Internet Explorer 9, 10, and 11, you'll need to do a little extra work. These older browsers require something called "polyfills" to understand and use some of the newer features your website might be using. Polyfills are like language translators that help older browsers understand and execute modern code.

To include the necessary polyfills for older browsers, you can use a package called [react-app-polyfill](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md). It provides the polyfills you need, so your website will work smoothly across different browsers.

## Supported Language Features

The website project supports various advanced features of the JavaScript language. These features enhance the capabilities of your website and make it easier to write clean and efficient code.

Here are some of the supported language features:

- **Exponentiation Operator**: This feature allows you to perform exponentiation calculations easily. For example, `2 ** 3` means 2 raised to the power of 3, which equals 8.

- **Async/await**: This feature simplifies working with asynchronous operations, such as fetching data from an API or loading resources. With `async/await`, you can write asynchronous code in a more readable and sequential manner.

- **Object Rest/Spread Properties**: This feature provides a concise way to clone or merge objects. It allows you to copy properties from one object to another or extract specific properties from an object effortlessly.

- **Dynamic import()**: With dynamic import, you can load JavaScript modules on-demand, when they are needed. This feature is particularly useful for code splitting, where you can load parts of your website only when required, optimizing performance.

- **Class Fields and Static Properties**: This feature simplifies the declaration of instance variables and static properties within classes. It allows you to define properties directly inside the class, making your code cleaner and more readable.

- **JSX, Flow, and TypeScript**: The website project fully supports JSX syntax, which is a powerful way to write React components. Additionally, it provides optional support for static type checking using Flow or TypeScript. These type checkers help catch errors and provide better documentation for your code.

It's important to note that while these features are supported, some of them are still considered experimental and may not be fully standardized. Therefore, it's recommended to use them with caution and keep an eye on any updates or changes in the future.

## Configuring Supported Browsers

By default, the website project is configured to work well with a wide range of web browsers. The configuration is specified in a file called `package.json`, which you'll find in your project.

The configuration includes a section called `browserslist`. It defines the list of browsers your website will target for compatibility. By default, the production build targets a broad range of browsers that cover the majority of users, while the development build focuses on more modern browsers for a better development experience.

The `browserslist` configuration is set up to ensure your website works smoothly across different browsers. It takes into account factors like browser usage statistics and compatibility data.

Please note that the `browserslist` configuration does not automatically include polyfills for you. If you're using any other modern JavaScript features that require additional support, make sure to include the necessary polyfills manually.

To summarize, your website is designed to work with all modern web browsers out of the box. If you need to support older browsers, you can include the required polyfills using the [react-app-polyfill](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md) package. Additionally, the website project supports advanced JavaScript language features to enhance your coding experience. The `browserslist` configuration ensures broad browser compatibility, and you can manually add polyfills if needed.
---
id: adding-a-sass-stylesheet
title: Adding A Sass Stylesheet
sidebar_label: Sass Stylesheet
sidebar_position: 3
tags: [react, create-react-app, sass, stylesheet]
description: "Learn how to add a Sass stylesheet to your Create React App project. Use the power of Sass to write cleaner and more maintainable styles for your React components."
---

:::caution warn
This feature is available with `react-scripts@2.0.0` and higher.
:::

When working with React components, it's generally recommended not to reuse the same CSS classes across different components. Instead, it's better to create separate component styles and compose them together. However, if you find CSS preprocessors valuable, you can integrate Sass into your React project.

***To use Sass in your Create React App project, follow these steps:***

## Step 1: Install Sass
First, install the `sass` package by running the following command in your project's terminal:

```sh title="Terminal"
$ npm install sass
# or
$ yarn add sass
```

## Step 2: Rename and Import the Sass Stylesheet

Next, rename the `src/App.css` file to `src/App.scss`. This will signal Create React App to use the Sass compiler for this file. Update `src/App.js` to import `src/App.scss` as follows:

```jsx title="App.js"
import React from 'react';
import './App.scss';

function App() {
  // Your component code goes here
  return (
    // JSX code
  );
}

export default App;
```

By importing the Sass file, Create React App will automatically compile it.

## Step 3: Share Variables Between Sass Files

To share variables between Sass files, you can use the `@use` rule provided by Sass. For example, in `src/App.scss` or other component style files, you can include the following line to import a shared Sass file with variable definitions:

```scss
@use "./shared.scss";
```

You can then use those variables within your component styles.

## Step 4: Importing External Sass Files

To import Sass files from external sources or libraries, you can use the `@use` rule. Here are a couple of examples:

```scss
@use 'styles/_colors.scss'; // assuming a styles directory under src/
@use '~nprogress/nprogress'; // loading a CSS file from the nprogress node module
```

The `~` symbol followed by the module name allows you to resolve modules from the `node_modules` directory.

:::tip info
If you're using Windows, separate your paths by semicolons:

```
SASS_PATH=path1;path2;path3
```
:::

Step 5: Using Sass with CSS Modules
----------------------------------
You can also use Sass in combination with [CSS modules](adding-a-css-modules-stylesheet.md). To enable this feature, follow the same steps mentioned above, but use `.module.scss` as the file extension instead (e.g., `src/App.module.scss`).

:::tip info
If you're using Flow, make sure to update your `.flowconfig` file to recognize `.sass` or `.scss` files. Add the following lines to the `[options]` section:

```
module.file_ext=.sass
module.file_ext=.scss
```
:::

:::note
LibSass and the packages built on top of it, including Node Sass, are deprecated. If you're currently using Node Sass, it's recommended to migrate to Dart Sass. You can do this by replacing `node-sass` in your `package.json` file with `sass` or by running the following commands:

```sh
$ npm uninstall node-sass
$ npm install sass
# or
$ yarn remove node-sass
$ yarn add sass
```
:::

That's it! You've successfully added a Sass stylesheet to your Create React App project. Now you can leverage the power of Sass to write cleaner and more maintainable styles for your React components.


**Some popular resources and official sites that beginners can refer to when learning about adding Sass stylesheets in a React project:**

1. **Sass Documentation** - The official Sass documentation is an excellent resource for learning about Sass features, syntax, and usage. It provides comprehensive guides, examples, and explanations: [Sass Documentation](https://sass-lang.com/documentation)

2. **Create React App Documentation** - The official documentation for Create React App includes a section on adding Sass stylesheets. It provides instructions and guidelines specific to Create React App projects: [Create React App - Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet)

3. **React Documentation** - The official React documentation is a valuable resource for understanding React concepts and features. While it doesn't specifically focus on Sass, it provides information on working with styles in React components: [React Documentation - Styling and CSS](https://reactjs.org/docs/faq-styling.html)

4. **Sass Guidelines** - The Sass Guidelines website offers a collection of best practices, tips, and coding conventions for writing maintainable Sass code. It covers various aspects of Sass development, including architecture and organization: [Sass Guidelines](https://sass-guidelin.es/)

5. **CSS-Tricks** - CSS-Tricks is a popular web development resource that covers a wide range of topics, including Sass. It has a dedicated section with tutorials, articles, and examples related to Sass: [CSS-Tricks - Sass](https://css-tricks.com/category/sass/)

6. **Smashing Magazine** - Smashing Magazine is a well-known online publication for web designers and developers. It has a collection of articles and tutorials related to Sass, covering different aspects and techniques: [Smashing Magazine - Sass](https://www.smashingmagazine.com/tag/sass/)

7. **SitePoint** - SitePoint offers an extensive library of web development tutorials and articles. It has a section dedicated to Sass, featuring tutorials, tips, and tricks for using Sass in various contexts: [SitePoint - Sass](https://www.sitepoint.com/tag/sass/)

These resources should provide beginners with a solid foundation for learning about Sass and its integration with React. Remember to provide appropriate attribution and links to the original sources when including content from these sites on your own website. This helps maintain ethical and legal standards for content usage and sharing.

**Some popular resources and official sites that beginners can refer to when learning about adding Sass stylesheets in a React project:**

1. **Sass Documentation** - The official Sass documentation is an excellent resource for learning about Sass features, syntax, and usage. It provides comprehensive guides, examples, and explanations: [Sass Documentation](https://sass-lang.com/documentation)
2. **Create React App Documentation** - The official documentation for Create React App includes a section on adding Sass stylesheets to a project. It provides instructions and guidelines specific to Create React App projects: [Create React App - Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
3. **React Documentation** - The official React documentation is a valuable resource for understanding React concepts and features. While it doesn't specifically focus on Sass, it provides information on working with styles in React components: [React Documentation - Styling and CSS](https://reactjs.org/docs/faq-styling.html)
4. **Sass Guidelines** - The Sass Guidelines website offers a collection of best practices, tips, and coding conventions for writing maintainable Sass code. It covers various aspects of Sass development, including architecture and organization: [Sass Guidelines](https://sass-guidelin.es/)
5. **CSS-Tricks** - CSS-Tricks is a popular web development resource that covers a wide range of topics, including Sass. It has a dedicated section with tutorials, articles, and examples related to Sass: [CSS-Tricks - Sass](https://css-tricks.com/category/sass/)
6. **Smashing Magazine** - Smashing Magazine is a well-known online publication for web designers and developers. It has a collection of articles and tutorials related to Sass, covering different aspects and techniques: [Smashing Magazine - Sass](https://www.smashingmagazine.com/tag/sass/)
7. **SitePoint** - SitePoint offers an extensive library of web development tutorials and articles. It has a section dedicated to Sass, featuring tutorials, tips, and tricks for using Sass in various contexts: [SitePoint - Sass](https://www.sitepoint.com/tag/sass/)

These resources should provide beginners with a solid foundation for learning about Sass and its integration with React. Remember to provide appropriate attribution and links to the original sources when including content from these sites on your own website. This helps maintain ethical and legal standards for content usage and sharing.
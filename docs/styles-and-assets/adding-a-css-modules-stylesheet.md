---
id: adding-a-css-modules-stylesheet
title: Adding A CSS Modules Stylesheet
sidebar_label: CSS Modules Stylesheet
sidebar_position: 2
tags: [react, create-react-app, css-modules, css, stylesheet, styling, react-scripts, react-dom, react-app]
description: "Learn how to add a CSS Modules stylesheet to your Create React App project. Use scoped styling and prevent naming clashes by automatically generating unique class names for your styles."
---

import '../css/style.css'

:::note
This feature is available with `react-scripts@2.0.0` and higher.
:::

This tutorial will guide you through the process of adding a CSS Modules stylesheet to your React project. CSS Modules provide scoped styling and prevent naming clashes by automatically generating unique class names for your styles.

:::tip
If you prefer to use Sass for preprocessing your stylesheets, make sure to [follow the installation instructions](https://codemastermindhq.vercel.app/docs/react/create-react-app/styles-and-assets/adding-a-sass-stylesheet) and use the `.module.scss` or `.module.sass` file extension.
:::
CSS Modules allow you to reuse the same class names across different files without worrying about conflicts. To learn more about CSS Modules, check out this [CSS-Tricks article](https://css-tricks.com/css-modules-part-1-need/).


CSS Modules is a popular approach for styling React applications, providing a scoped and modularized way of managing styles. In this guide, we will walk you through the steps of adding a CSS Modules stylesheet to your Create React App project.

## Step 1: Set up a Create React App project

If you haven't already, create a new React project using Create React App. Open your command line and run the following command:

```shell title="Terminal"
npx create-react-app my-app
```

This command will set up a new React project in a directory called `my-app`.

## Step 2: Create a CSS file

Inside the `src` directory of your project, create a new CSS file. Let's name it `styles.module.css`. The `.module.css` extension is important as it tells Create React App to enable CSS Modules for this file.

## Step 3: Write some CSS code

Open the `styles.module.css` file and write your desired CSS code. For example:

```css title="styles.module.css"
.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  color: #333;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}
```

Feel free to add more CSS rules as per your project requirements.

## Step 4: Import and use the CSS classes

Now, go to the JavaScript file where you want to use the CSS classes. Import the `styles` object from the CSS file you created:

```javascript title="MyComponent.jsx"
import styles from './styles.module.css';
```

You can now use the imported `styles` object to access the CSS classes defined in the file. For example:

```javascript title="MyComponent.jsx"
function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <button className={styles.button}>Click me</button>
    </div>
  );
}
```

By using `styles.container`, `styles.title`, and `styles.button`, you are ensuring that the CSS class names are scoped locally to the components, preventing any conflicts with other styles.

## Step 5: Start the development server

Save your changes and start the development server by running the following command in your project directory:

```shell title="Terminal"
cd my-app
npm start
```

Now, you can visit `http://localhost:3000` in your browser to see your React application with the CSS Modules styles applied.


<BrowserWindow>
      
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{fontSize: '24px', color: '#333'}}>Welcome to My App</h1>
      <button style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px'}}>Click me</button>
    </div>
      
 </BrowserWindow>


## Create a CSS Modules stylesheet

First, create a new CSS file in the `src` directory of your React project. For example, let's name it `Button.module.css`. The `.module.css` extension is crucial, as it enables CSS Modules for that specific file.

Add the following CSS code to your `Button.module.css` file:

```css title="Button.module.css"
.error {
  background-color: red;
}
```

## Import the CSS Modules stylesheet

Next, open the component file where you want to use the CSS Modules styles. Import the CSS classes from the `Button.module.css` file and apply them to your elements.

For instance, in your `Button.js` file, import the CSS classes as follows:

```javascript title="Button.jsx"
import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return <button className={styles.error}>Error Button</button>;
  }
}
``` 

In this example, the `styles.error` class is applied to the button, which will give it a red background color.


## Use CSS Modules and regular stylesheets together

CSS Modules can coexist with regular stylesheets in your project. To demonstrate this, let's assume you have another regular stylesheet named `another-stylesheet.css` that defines an `.error` class with different styles.

To use the regular stylesheet, import it in your `Button.js` file:

```javascript 
import './another-stylesheet.css';
```

Now, the `Button` component will have both the CSS Modules styles and the styles from the regular stylesheet.

## Result

When the `Button` component is rendered, the CSS Modules class will automatically generate a unique class name, preventing clashes with other `.error` class names.

***This button has a red background but not red text***

<BrowserWindow>
      
    <div>
      <button className="error">Error Button</button>
    </div>
      
 </BrowserWindow>

CSS Modules provide a convenient and efficient way to manage styles in your React project, ensuring encapsulation and avoiding global style conflicts.

:::note
Using CSS Modules is optional. You can still use regular `<link>` stylesheets and CSS files in your project. CSS Modules are only enabled for files with the `.module.css` extension.
:::

## Live Coding

### Example-1:

```jsx live
function MyComponent() {
  return (
    <div style={{maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{fontSize: '24px', color: '#333'}}>Welcome to My App</h1>
      <button style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px'}}>Click me</button>
    </div>
  );
}
```

### Example-2:

```jsx live
class Button extends Component {
  render() {
    return <button style={{backgroundColor:'red'}}>Error Button</button>;
  }
}
```

## Conclusion

You've successfully learned how to add a CSS Modules stylesheet to your Create React App project. By using CSS Modules, you can manage your styles in a modular and scoped manner, preventing naming clashes and ensuring encapsulation.
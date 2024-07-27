---
id: post-processing-css
title: Post Processing CSS
sidebar_label: Post Processing CSS
sidebar_position: 5
tags: [react, create-react-app, css, stylesheet, styling, react-scripts, react-dom, react-app]
description: "Learn how to leverage post-processing CSS in Create React App to enhance your stylesheets and ensure cross-browser compatibility. Automatically add vendor prefixes, embrace new CSS features, and more."
---

import '../css/style.css'

## Introduction:
Welcome to the enchanting world of post-processing CSS! In Create React App, your CSS is automatically minified and provided with vendor prefixes by the powerful [Autoprefixer](https://github.com/postcss/autoprefixer), saving you from the hassle. If you've ever wished to sprinkle a touch of magic onto your stylesheets, you've come to the right place. In this guide, we'll delve into the fascinating realm of post-processing CSS and explore how it can enhance your React applications.

Moreover, with the support of post-processing tools, you can embrace new CSS features and ensure compatibility with older browsers. Custom properties, media query ranges, and other cutting-edge features are automatically polyfilled to deliver a consistent experience.

## Customizing Browser Support

You have the flexibility to define your target browser support by adjusting the `browserslist` key in your `package.json` file. This allows you to cater to your specific audience while considering the [Browserslist specification](https://github.com/browserslist/browserslist#readme).

For example, you can specify support for modern browsers by updating your `browserslist` to:

```
"browserslist": [
  "last 2 Chrome versions",
  "last 2 Firefox versions",
  "last 2 Safari versions"
]
```

## A Magical Transformation

Let's witness the enchanting transformation of a CSS class using Autoprefixer:

```css
/* Before */
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

```css
/* After */
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
```

Isn't it magical? Autoprefixer gracefully adds the necessary vendor prefixes, ensuring the widest browser compatibility for your styles.

## Fine-Tuning Autoprefixer

If, for any reason, you need to disable Autoprefixer for specific CSS rules, you can follow [this section](https://github.com/postcss/autoprefixer#disabling) to learn how.

By default, Autoprefixer doesn't add prefixes for [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). However, manual prefixes will be preserved. If you'd like to opt-in to CSS Grid prefixing, make sure you understand its limitations by reading [this documentation](https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie).

To enable CSS Grid prefixing, simply add the following comment at the top of your CSS file:

```css
/* autoprefixer grid: autoplace */
```

Now, go forth and create captivating styles with the power of post-processing CSS in Create React App!

## For Example 

***Step-by-step example demonstrating the post-processing CSS capabilities in Create React App:***

**1. Create a new React application using Create React App by running the following command in your terminal:**
```shell
npx create-react-app my-app
```

**2. Navigate into the project directory:**
```shell
cd my-app
```

**3. Open the `src/App.css` file in your preferred code editor.**

**4. Replace the existing CSS code with the following:**

```css
.App {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
```

**5. Save the file and start the development server:**
```shell
npm start
```

**6. Open your browser and visit `http://localhost:3000` to see the React application running.**

<BrowserWindow>
      
    <div style={{display: 'grid', gridTemplateColumns:' repeat(2, 1fr)'}}>
      <h1>Welcome to My Magical App</h1>
      <p>Enjoy the wonders of post-processing CSS!</p>
    </div>
      
 </BrowserWindow>

**1. Now, let's witness the magic of post-processing CSS. Open the browser's developer tools and inspect the `.App` element.**

**2. In the Styles tab, you'll notice that the CSS properties have been automatically prefixed by the browser. For example, the `display: grid` property is transformed into:**

```css
display: -ms-grid;
display: grid;
```

This transformation is performed by Autoprefixer, one of the post-processing tools integrated with Create React App. It ensures that your styles are compatible with various browsers.

**9. Stop the development server by pressing `Ctrl + C` in the terminal.**

Congratulations! You have successfully experienced the post-processing CSS in Create React App. In this example, Autoprefixer automatically added the necessary prefixes to the CSS property `display: grid`, ensuring cross-browser compatibility.

Feel free to explore more CSS features and observe how Autoprefixer and other post-processing tools enhance your styles in Create React App.


## Live Coding

```jsx live
function App() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: '20px'}}>
      <div style={{backgroundColor: '#f0e', padding: '20px', textAlign: 'center'}}>Box 1</div>
      <div style={{backgroundColor: '#f0e', padding: '20px', textAlign: 'center'}}>Box 2</div>
      <div style={{backgroundColor: '#f0e', padding: '20px', textAlign: 'center'}}>Box 3</div>
    </div>
  );
}
```


## Conclusion

In this guide, we explored the captivating world of post-processing CSS in Create React App. By leveraging the power of post-processing tools like Autoprefixer, you can effortlessly enhance your stylesheets and ensure cross-browser compatibility. Whether you're embracing new CSS features or catering to specific browser requirements, post-processing CSS has got you covered. Now, go forth and create captivating styles with the magic of post-processing CSS in Create React App!
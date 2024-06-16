---
id: adding-css-reset
title: Adding A CSS Reset
sidebar_label: CSS Reset
sidebar_position: 4
tags: [react, create-react-app, css, stylesheet, styling, react-scripts, react-dom, react-app]
description: "Learn how to add a CSS reset to your Create React App project using PostCSS Normalize. Ensure consistent styling across different browsers by providing a solid foundation for your React components."
---

This tutorial will guide you on adding a CSS reset to your React project using [PostCSS Normalize], which provides a solid foundation for consistent styling across different browsers.

**To get started, follow these steps:**

## Step 1: Set up PostCSS Normalize

**1. Install the necessary dependencies by running the following command in your terminal:**

   ```shell
   npm install postcss-normalize
   ```

**2. In your project's main CSS file (e.g., `index.css` or `App.css`), import PostCSS Normalize by adding the following line:**

   ```css title="index.css"
   @import-normalize; /* Import normalize.css styles */
   ```

   By including this line, you bring in the necessary CSS reset styles.

:::tip
If you're using Visual Studio Code and encounter an "_Unknown at rule @import-normalize css(unknownAtRules)_" warning, you can change the `css.lint.unknownAtRules` setting to `ignore` in your editor preferences.
:::

**3. Feel free to add your custom styles below the `@import-normalize` line. This is where you can customize the appearance of your React components.**

## Step 2: Customize Normalize.css (Optional)

PostCSS Normalize allows you to control which parts of [normalize.css] you want to include based on your project's specific requirements. The styles provided by normalize.css ensure consistent rendering across different browsers.

For example, when targeting older browsers like Internet Explorer 9, you may see the following styles added to your CSS:

```css title="normalize.css"
/**
 * Add the correct display in IE 9-.
 */

audio,
video {
  display: inline-block;
}

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}
```

If you only need to support the last two versions of modern browsers, these additional styles will be omitted.

## Browser Support

PostCSS Normalize supports a wide range of browsers, ensuring your styles render consistently across different platforms. The supported browsers include:

- Chrome (last 3 versions)
- Edge (last 3 versions)
- Firefox (last 3 versions)
- Firefox ESR
- Opera (last 3 versions)
- Safari (last 3 versions)
- iOS Safari (last 2 versions)
- Internet Explorer 9 and above

[PostCSS Normalize]: https://github.com/csstools/postcss-normalize
[normalize.css]: https://github.com/csstools/normalize.css

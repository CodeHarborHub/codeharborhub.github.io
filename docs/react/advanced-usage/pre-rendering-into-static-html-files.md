---
id: pre-rendering-into-static-html-files
title: Pre-Rendering into Static HTML Files
sidebar_label: Pre-Rendering Static HTML
sidebar_position: 3
tags: [React, Pre-Rendering, Static HTML, SEO, Performance]
keywords: [pre-rendering, static html, react pre-rendering, react static html, pre-rendering in react, static html in react, react performance, react seo]
description: Learn how to pre-render your React application into static HTML files to improve performance and SEO.
---

If you're hosting your React application using a static hosting provider, you have a fantastic opportunity to enhance its performance and SEO by pre-rendering it into static HTML files. Pre-rendering involves generating HTML pages for each route or link in your application, making them readily available to users even before the JavaScript bundle loads. This seamless process not only improves loading times but also boosts your website's visibility on search engines.

## What is Pre-Rendering and Why Use It?

Pre-rendering, also known as "snapshotting," is a technique that produces static HTML versions of your dynamic React app during the build process. This means that instead of waiting for the JavaScript to load and render the content, users receive the pre-rendered HTML instantly. It greatly improves the initial loading speed, which is crucial for providing a smooth and delightful user experience.

### Benefits of Pre-Rendering:

1. **Faster Initial Page Load**: Users see the core content of each page even before the JavaScript bundle finishes downloading, resulting in quicker load times and reduced bounce rates.

2. **Improved SEO**: Search engines can easily crawl and index static HTML pages, which enhances your website's visibility and ranking in search results.

3. **Server Load Reduction**: Pre-rendering shifts the burden of generating and caching routes from the server to the build process, optimizing server performance.

## How to Pre-Render with `react-snapshot` or `react-snap`

Two popular libraries, `react-snapshot` and `react-snap`, can help you achieve pre-rendering in your React application:

1. **react-snapshot** (Link: [npm](https://www.npmjs.com/package/react-snapshot))

   This library allows you to pre-render your app into static HTML pages for each route. The pages become active or "hydrated" once the JavaScript bundle loads.

2. **react-snap** (Link: [npm](https://www.npmjs.com/package/react-snap))

   Similar to `react-snapshot`, `react-snap` also generates static HTML pages for each route or relative link in your application.

## Setting Up Pre-Rendering

To get started with pre-rendering using either of these libraries, follow these general steps:

1. **Create a React App**:

   If you haven't already, create a new React app using Create React App or your preferred method.

2. **Install the Chosen Library**:

   For `react-snapshot`, use the following command:

   ```bash
   npm install react-snapshot
   ```

   For `react-snap`, use:

   ```bash
   npm install react-snap
   ```

3. **Configure the Build Scripts**:

   Open your project's `package.json` file and modify the scripts section to include the pre-rendering library's command. For example:

   ```json
   "scripts": {
     "prebuild": "react-snapshot", // or "react-snap" for react-snap
     "build": "react-scripts build"
   }
   ```

4. **Pre-Render Your App**:

   Run the following command to generate static HTML pages:

   ```bash
   npm run build
   ```

5. **Test Your Pre-Rendered App**:

   After the build process completes, you can serve your pre-rendered app locally to test it:

   ```bash
   npx serve -s build
   ```

   Your pre-rendered app should now be accessible at `http://localhost:5000`.

## Conclusion

Pre-rendering your React app into static HTML files is a game-changer in terms of performance and SEO. By serving pre-rendered content to users, you significantly improve the initial loading speed, leading to higher user satisfaction and engagement. Moreover, search engines will have an easier time indexing your pages, potentially boosting your website's visibility.

So go ahead, give pre-rendering a try, and experience the remarkable benefits it brings to your React applications!
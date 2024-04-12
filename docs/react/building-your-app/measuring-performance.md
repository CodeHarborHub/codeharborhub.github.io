---
id: measuring-performance
title: Measuring Performance in React with Create React App
sidebar_label: Measuring Performance
sidebar_position: 11
tags: [react, performance, web vitals, lighthouse, react devtools, performance.measure, react profiler, performance, web vitals, lighthouse, react devtools, performance.measure, react profiler, performance, web vitals, lighthouse, react devtools, performance.measure, react profiler, performance, web vitals, lighthouse, react devtools, performance.measure, react profiler]
description: Learn how to measure and optimize the performance of your React app using Create React App. Unleash the power of Web Vitals, Lighthouse, and React DevTools to create a blazing-fast user experience!
---

Create React App comes with a built-in feature to help you measure and analyze your app's performance. It uses something called "Web Vitals," which are helpful metrics that capture how users experience your web page. Let's see how we can use this powerful tool to optimize your app!

## Measuring Performance in Your React App

Create React App comes with a built-in feature to help you measure and analyze your app's performance. It uses something called "Web Vitals," which are helpful metrics that capture how users experience your web page. Let's see how we can use this powerful tool to optimize your app!

## What are Web Vitals?

Web Vitals are metrics that tell us about the user experience of a web page. They help us understand how fast the page loads, how quickly it responds to user actions, and more. This way, we can make our app snappier and delightful for users.

## Introduction

When building a React app, it's essential to ensure that it performs optimally to provide a smooth and responsive user experience. Measuring the performance of your React application can help you identify potential bottlenecks and optimize its speed and efficiency. In this guide, we'll explore some practical techniques for measuring performance using Create React App (CRA), a popular tool for bootstrapping React projects.

## 1. Why Measure Performance?

Imagine you have created a fantastic React app with stunning visuals and innovative features, but it feels sluggish and unresponsive. Users may get frustrated and abandon your app, leading to a loss in engagement and potential customers. Measuring performance helps you:

- **Identify Performance Issues:** By analyzing metrics, you can pinpoint areas where your app might be slow or inefficient.

- **Optimize User Experience:** Improving performance leads to faster load times, smoother interactions, and happier users.

- **Boost Conversion Rates:** A performant app encourages users to stick around and engage more, which can lead to higher conversion rates.

Now, let's dive into how you can measure the performance of your React app effectively.

## 2. Performance Metrics to Track

Before we start measuring, let's understand the essential performance metrics:

- **First Contentful Paint (FCP):** This metric measures the time from navigation to when the first content appears on the screen. A lower FCP indicates a faster-loading app.

- **Time to Interactive (TTI):** TTI measures how long it takes for the app to become fully interactive. Users can click buttons or interact with elements after this point.

- **Total Blocking Time (TBT):** TBT calculates the total duration when the app is unresponsive to user input due to long tasks running on the main thread.

- **Memory Usage:** Monitoring memory consumption helps you identify memory leaks and improve resource management.

## 3. Using Lighthouse for Performance Auditing

Create React App comes with excellent tools for performance auditing, and one such tool is Google Lighthouse. Lighthouse is an open-source tool that can help you assess various aspects of your app's performance, accessibility, and more.

To use Lighthouse, follow these steps:

1. Open your app in Google Chrome.
2. Press `F12` or right-click and select "Inspect" to open DevTools.
3. Click on the "Lighthouse" tab.
4. Choose the desired categories (Performance, Accessibility, etc.).
5. Click "Generate Report."

Lighthouse will analyze your app and provide a detailed report with suggestions to improve performance.

## 4. Analyzing Performance with React DevTools

React DevTools is another powerful tool for measuring performance and debugging React applications. It's available as a browser extension and allows you to inspect React component hierarchies, state changes, and performance profiles.

To get started with React DevTools:

1. Install the extension in your preferred browser.
2. Open your app and launch DevTools (`F12` or right-click and select "Inspect").
3. Look for the "React" or "Components" tab in the DevTools panel.

You can use React DevTools to check component rendering times, identify unnecessary re-renders, and optimize your app's performance.

## 5. Manual Performance Profiling

For more advanced performance analysis, you can manually profile your app using the following approaches:

- **Performance.measure():** This API allows you to measure custom metrics and performance between specific points in your code.

- **React Profiler:** This built-in component provides detailed information about rendering time, re-renders, and component hierarchies.

## Getting Started

To start measuring Web Vitals, all you need to do is use the `reportWebVitals` function in your `index.js` file. It's as simple as passing a function to it, like this:

```js
reportWebVitals(console.log);
```

This function will give you the final values of various metrics after they finish calculating on the page. You can log these results to the console or even send them to an analytics endpoint.

## Sending Results to Analytics

By sending Web Vitals data to analytics, you can track how your app performs in the real world for actual users. Here's an example of how to send the results to an analytics endpoint:

```js
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = 'https://example.com/analytics';

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);
```

:::note Note for Google Analytics Users
If you use Google Analytics, you can send the results to it using the `id` value. This helps you easily analyze and calculate important metrics.
:::

```js
function sendToAnalytics({ id, name, value }) {
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to the current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
```

That's it! With these simple steps, you can now measure your app's performance and make it faster and more enjoyable for your users.

## Conclusion

Measuring performance is a critical step in the development process. By using tools like Lighthouse and React DevTools, along with manual profiling techniques, you can identify performance bottlenecks and optimize your React app for a better user experience.

Remember, a faster app not only delights your users but also improves your chances of success in the competitive world of web development!

Now go ahead, measure your app's performance, and unleash the true potential of your React project!
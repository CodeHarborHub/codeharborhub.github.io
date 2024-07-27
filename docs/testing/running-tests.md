---
id: running-tests
title: Running Tests in Create React App
sidebar_label: Running Tests
sidebar_position: 1
tags: [react, testing, jest, create-react-app, react-scripts, react-dom, react-testing-library, jest-dom, testing-library, jest, react-app, create-react-app, cypress, react-testing, react-test-renderer, testing, testing-library, jest-dom, react-dom, react-scripts, react-test-renderer, react-testing-library, testing-library, jest]
description: "Learn how to run tests in a Create React App project using Jest. Explore the basics of testing and discover the joy of catching bugs early!"
---

## Introduction

Welcome to the world of testing in Create React App! Testing is a crucial aspect of building robust and bug-free applications. In this guide, we will explore how to run tests effectively in a Create React App environment, with a focus on simplicity and fun!

## Prerequisites

Before we dive into testing, ensure you have the following set up:

1. Node.js and npm (Node Package Manager) installed on your system.
2. A working knowledge of JavaScript and React basics.

## Getting Started

To begin, make sure you have a Create React App project set up. If you don't have one, you can quickly create a new app using the following commands:

```bash
npx create-react-app my-app
cd my-app
```

Now, let's take a closer look at the different testing options available.

## Test Suites and Files

Create React App uses **Jest** as the default testing framework. When you run tests, Jest looks for test files with specific naming patterns:

- Test files should be named with the `.test.js` or `.spec.js` suffix, e.g., `MyComponent.test.js`.

All test files should be placed inside the `src` directory, usually within the same folder as the component or module they are testing.

## What is Jest?
Jest is a powerful test runner developed by Facebook. It allows us to write and execute tests in a Node.js environment, which makes testing fast and reliable. Jest is widely used in the React community and provides various utilities to make testing components, functions, and modules a breeze.

## Writing Your First Test

Let's create a simple test for a fictional `Button` component to get you started:

1. Open your editor and navigate to the `src` directory.
2. Create a new file named `Button.test.js`.

```javascript title="src/Button.test.js"
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders the button with the correct label', () => {
  const { getByText } = render(<Button label="Click Me" />);
  const buttonElement = getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
```

In this example, we use **@testing-library/react** to render the `Button` component and check if it displays the correct label.

## Running Tests

Now that you've written your first test, it's time to run it!

1. Open your terminal or command prompt.
2. Navigate to your project's root directory.
3. To run all tests, execute the following command:

```bash
npm test
```

Jest will automatically find and execute all test files with the `.test.js` or `.spec.js` suffix.

## Watching for Changes

Running tests manually can become tiresome, especially during development. Jest allows you to watch for changes and automatically re-run tests when files are modified.

To start the watch mode, use the following command:

```bash
npm test -- --watch
```

Now, every time you save a file, Jest will re-run the relevant tests, giving you instant feedback.

## Code Coverage

Code coverage is a valuable metric that shows how much of your code is being tested. Create React App comes with built-in code coverage reports powered by Jest.

To generate a code coverage report, run the following command:

```bash
npm test -- --coverage
```

The coverage report will be available in the `coverage` directory, which you can view in your browser.

## Additional Testing Techniques
Beyond basic function testing, you can also test React components. Testing components helps ensure that they render correctly and behave as expected. For component testing, you can use **React Testing Library**, a powerful library that allows you to interact with and assert on rendered components.

To use React Testing Library, you need to install it first:

```
npm install --save @testing-library/react @testing-library/jest-dom
```

Now you can write tests for your components using React Testing Library:

```js title="src/App.test.js"
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the "Learn React" message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
```

React Testing Library encourages testing components in a way that resembles how users interact with them, making your tests more reliable and meaningful.

## Conclusion

Congratulations! You've successfully learned how to write and run tests in a Create React App project. Testing is an essential skill for any developer, and it helps ensure your application remains reliable and stable.

Remember, testing doesn't have to be dull; embrace the fun of catching bugs early and building top-notch React applications! 

## Summary

In this guide, you learned how to run tests in a Create React App project using Jest. You explored the basics of testing and discovered the joy of catching bugs early. You also learned about watching for changes, code coverage, and additional testing techniques using React Testing Library.
---
title: Step-by-Step Guide Debugging Tests in Create React App
authors: [ajay-dhangar]
tags: [Debugging Tests]
date: 2024-03-14
description: Step-by-Step Guide Debugging Tests in Create React App
draft: false
---

Debugging tests in a React application can be challenging, but fear not! We've got you covered with this step-by-step guide to help you overcome the common hurdles and make your tests shine.

<!-- truncate -->

Let's dive in:

**Step 1: Install Create React App**

If you haven't already set up your Create React App project, start by installing it:

```bash
npx create-react-app my-app
cd my-app
```

**Step 2: Writing a Test**

Create a simple React component (e.g., a Button) in a separate file and write a test for it. For example:

```jsx title="src/Button.js"
import React from "react";

const Button = () => {
  return <button>Click Me</button>;
};

export default Button;
```

```jsx title="src/Button.test.js"
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders the button", () => {
  render(<Button />);
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});
```

**Step 3: Run the Tests**

Execute the tests using the following command:

```bash
npm test
```

**Step 4: Spotting the Failure**

If the test fails, don't panic! First, identify the failing test case.

**Step 5: Reproduce the Failure Locally**

Make sure the failure occurs consistently by reproducing it locally. Ensure that you're running the correct test files and dependencies.

**Step 6: Debugging Techniques**

Now, let's employ some debugging techniques to resolve the issue:

**6.1. Use `console.log`**

Place `console.log` statements at different points in your test to check the values of variables or components. For example:

```jsx
test("renders the button", () => {
  render(<Button />);
  console.log(screen.getByRole("button").outerHTML);
  const buttonElement = screen.getByText("Click Me");
  console.log(buttonElement); // Check the button element in the console
  expect(buttonElement).toBeInTheDocument();
});
```

**6.2. Utilize `debugger`**

You can use the `debugger` keyword to pause test execution at a specific point. Open your browser's developer tools to inspect variables and the call stack. For example:

```jsx
test("renders the button", () => {
  render(<Button />);
  debugger; // Execution will pause here, and you can inspect the app and test code.
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});
```

**6.3. Inspect with Chrome DevTools**

Open your app in Chrome, right-click, and select "Inspect." Navigate to the "Console" tab to interactively debug your tests using the same tools you use for your regular app.

**6.4. Snapshot Testing**

If you suspect issues with rendering, consider using snapshot testing. Jest can generate snapshots of your components and compare them for changes. Learn more about snapshot testing in the official documentation.

**Step 7: Fix the Test**

Based on your observations during debugging, fix the failing test case. It might involve modifying the component or adjusting your expectations in the test.

**Step 8: Rerun the Tests**

After making changes, run the tests again to ensure everything is working correctly:

```bash
npm test
```

**Step 9: Celebrate Success!**

Congratulations! You've successfully debugged your test and conquered the Bug Monsters. Repeat these steps whenever you encounter testing issues in your React applications.

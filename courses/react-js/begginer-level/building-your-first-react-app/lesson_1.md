---
id: lesson-1
title: "Creating a simple 'Hello World' app"
sidebar_label: Lesson - 1
sidebar_position: 1
description: "Learn how to create a simple 'Hello World' app using React and understand the basic structure of a React component."
tags: [courses, react-js, beginner-level, building-your-first-react-app, hello-world, react-component]
---

In this lesson, we will learn how to create a simple 'Hello World' app using React. We will explore the basic structure of a React component and understand how to render content to the screen.

## Getting started with React

To get started with React, you need to have Node.js and npm (Node Package Manager) installed on your system. If you haven't installed them yet, follow the instructions in the [Setting up your development environment](../intro-to-react/lesson_3.md) lesson. Once you have Node.js and npm installed, you can create a new React project using Create React App.

## Create React App

Create React App is a tool that helps you set up a new React project with a single command. It provides a modern build setup with no configuration required. To create a new React project, open your terminal or command prompt and run the following command:

```bash
npx create-react-app hello-world-app
```

This command will create a new directory called `hello-world-app` with all the necessary files and dependencies to start building your React app.

## Creating a 'Hello World' component

Once you have created a new React project, navigate to the project directory and open it in your code editor. You will find a file called `App.js` inside the `src` directory. This file contains the main component of your React app.

Let's create a new component called `HelloWorld` inside `App.js` to display a simple 'Hello World' message. Replace the content of `App.js` with the following code:

```jsx title="src/App.js"
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default HelloWorld;
```

In this code snippet, we define a new functional component called `HelloWorld` that returns a `div` element containing an `h1` element with the text 'Hello World!'. This is a simple React component that renders content to the screen.

## Rendering the component

To render the `HelloWorld` component in your app, you need to import it in the `App.js` file and include it in the JSX code. Update the `App.js` file as follows:

```jsx title="src/App.js"
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

In this updated code snippet, we define a new functional component called `App` that includes the `HelloWorld` component. When you run your React app, the `App` component will be rendered to the screen, and the `HelloWorld` component will display the 'Hello World!' message.

## Running your React app

To run your React app, open a terminal or command prompt in the project directory and run the following command:

```bash
npm start
```

This command will start the development server and open your React app in a new browser window. You should see the 'Hello World!' message displayed on the screen.

<BrowserWindow minHeight="400px">
   <div>
      <h1>Hello World!</h1>
   </div>
</BrowserWindow>

Congratulations! You have successfully created a simple 'Hello World' app using React. And you have learned how to create a basic React component and render it to the screen. Now practice creating more components and explore the different features of React. 

## Practice and Excercise time

1. Modify the `HelloWorld` component to display a different message. For example, 'Welcome to React!' or 'Hello, World!'. or may be your name (e.g., 'Hello, Ajay!').

2. Create a new component called `Greeting` that takes a `name` prop and displays a personalized greeting message. For example, if the `name` prop is 'Alice', the component should display 'Hello, Alice!'.

3. Add the `Greeting` component to the `App` component and pass a `name` prop to it. Test the app to see if the personalized greeting message is displayed correctly. 

4. Experiment with different HTML elements and CSS styles to enhance the appearance of your app. Try adding a background color, changing the font size, or applying other styles to the components.

5. Share your 'Hello World' app with your friends or on social media. Let them know that you have started learning React and built your first app. And Join our [Discord Community](https://discord.gg/5VjTyJcf) to share your work and get feedback from other learners.

That's it for this lesson! In the next lesson, we will explore more advanced concepts of React and build a more interactive app. Stay tuned!

## Conclusion

In this lesson, we learned how to create a simple 'Hello World' app using React. We explored the basic structure of a React component and understood how to render content to the screen. We also learned how to create a new React project using Create React App and run the app in the development server (localhost) to see the output.
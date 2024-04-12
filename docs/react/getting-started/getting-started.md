---
id: getting-started
title: Getting Started with React
sidebar_label: Getting Started
sidebar_position: 1
description: "Learn how to get started with React by creating a new app using Create React App. Follow the steps to set up your development environment and build your first React application." 
tags: [React, JavaScript, User interfaces, Library, Virtual DOM, Declarative syntax, Components, Rendering, Web applications, Node.js, Create React App, Development server, React fundamentals, State management, Props, React documentation, React hooks, React Router, React Context API, Awesome React]
---

import '../css/style.css';

Create React App is an officially supported way to create single-page React applications. It provides a modern build setup with zero configuration required.

## Quick Start

To quickly get started with Create React App, follow these steps:

```sh npm2yarn
npx create-react-app my-app
cd my-app
npm start
```

If you have previously installed `create-react-app` globally using `npm install -g create-react-app`, we recommend uninstalling it using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that the latest version is always used.

Once the above commands have executed successfully, open [http://localhost:3000/](http://localhost:3000/) in your browser to see your app.


When you are ready to deploy your app to production, create a minified bundle using `npm run build`.

![npm start](./../img/getting-started-react.svg)


## Get Started Immediately

With Create React App, you don't need to install or configure tools like webpack or Babel. They are already preconfigured and hidden, allowing you to focus solely on writing code.

Just create a project, and you're good to go!

## Creating a New App

To create a new React app, you can choose one of the following methods based on your preferred package manager:

### Using npx

```pwsh npm2yarn
npx create-react-app@latest my-app
```

### Using npm

```pwsh
npm init react-app my-app
```

Make sure you have npm 6+ installed on your machine.

### Using Yarn

```pwsh
yarn create react-app my-app
```

Make sure you have Yarn 0.25+ installed.

## Selecting a Template

You can optionally start a new app from a template by appending `--template [template-name]` to the creation command. If no template is selected, your project will be created with the base template.

Templates are named in the format `cra-template-[template-name]`. You only need to provide the `[template-name]` to the creation command.

For example:

```pwsh npm2yarn
npx create-react-app my-app --template [template-name]
```

You can find a list of available templates by searching for ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

To build your own template, refer to our `Custom Templates` documentation.

### Creating a TypeScript App

To start a new TypeScript app, append `--template typescript` to the creation command:

```pwsh npm2yarn
npx create-react-app my-app --template typescript
```

If you already have a project and want to add TypeScript, check out our <u>Adding TypeScript</u> documentation.

## Selecting a Package Manager

When creating a new app, the CLI will use either npm or Yarn to install dependencies, depending on the tool you use to run `create-react-app`.

```pwsh npm2yarn
npx create-react-app my-app
```

## Project Structure

Running the above commands will create a directory named `my-app` in the current folder. Inside this directory, the initial project structure and necessary dependencies will be generated:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

No configuration or complex folder structures are required. You will find only the files necessary to build your app. Once the installation is complete, navigate to your project folder:

```pwsh
cd my-app
```

## Available Scripts

Inside the project folder, you can run the following built-in commands:

### Start the Development Server

```pwsh npm2yarn
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

<BrowserWindow>
    <div style={{textAlign: 'center'}}>
      <header style={{minHeight: '80vh', display:' flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)'}}>
        <img src='/code-harbor-hub/img/docs/react/logo.svg' className="App-logo" alt="logo" />
        <br/>
        <p>
          Edit src/App.js and save to reload.
        </p> 
        <a
          style={{color: '#61dafb'}}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
</BrowserWindow>

The page will automatically reload if you make changes to the code. Any build errors or lint warnings will be displayed in the console.

### Test the App

```pwsh npm2yarn
npm test
```

Runs the test watcher in interactive mode. By default, it runs tests related to files changed since the last commit. Refer to our `Running Tests`` documentation for more details.

### Build the App for Production

```pwsh npm2yarn
npm run build
```

Builds the app for production in the `build` folder. It bundles React in production mode and optimizes the build for better performance.

The build output is minified, and the filenames include hashes for caching.

Your app is now ready to be deployed! Check out our `Deployment` documentation to learn how to deploy your app to popular hosting providers.

:::tip Vite for React Development
For an alternative and more modern approach to setting up your React projects, consider using Vite, a blazing-fast build tool. Learn more about getting started with React and Vite in our dedicated guide: [Getting Started with React and Vite](/blog/getting-started-with-vite).
:::

## Conclusion 

In this guide, we learned how to get started with React by creating a new app using Create React App. We followed the steps to set up our development environment and build our first React application. We also explored the project structure and available scripts for managing our React app.
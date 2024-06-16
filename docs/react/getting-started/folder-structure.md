---
id: folder-structure
title: Folder Structure
sidebar_position: 2
tags: [react, create-react-app, folder-structure, project-structure, file-structure]
description: "Learn how to organize your files and folders in a new React project. This structure will help you keep things tidy and make it easier to build and maintain your site."
---

When you create a new project for your website, it's important to organize your files in a specific way. This structure will help you keep things tidy and make it easier to build and maintain your site.

Here's how your project should look like:

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


Let's break it down:

- **`my-app/`:** This is the main folder for your project. You can choose any name you like for this folder.

- **`README.md`:** This is a file where you can provide information and instructions about your project. It's helpful for others (and yourself) to understand what your website is about and how to use it.

- **`node_modules/`:** This folder contains all the external libraries and packages that your website depends on. You don't need to worry too much about this folder for now. Just know that it's important for your website to work correctly.

- **`package.json`:** This file holds various information about your project, such as its name, version, and dependencies. It's used by tools to manage and build your website correctly.

- **`public/`:** This folder contains files that are publicly accessible from your website. It includes the main HTML file, `index.html`, which serves as the starting point for your site.

- **`src/`:** This folder is where you'll put most of your code. It stands for "source" and holds the JavaScript and CSS files that make up your website.

  - **`App.css`:** This file contains styles specific to your main app component, such as colors, layout, and fonts.

  - **`App.js`:** This is the main JavaScript file that defines your app component. It's where you'll write most of your code.

  - **`App.test.js`:** This file is used for testing your app. You can ignore it for now if you're just starting out.

  - **`index.css`:** This file contains styles that apply globally to your entire website.

  - **`index.js`:** This is the entry point of your JavaScript code. It's where your app starts and gets rendered on the page.

  - **`logo.svg`:** This file is an example of an image file. You can use it for your website's logo or replace it with your own image.

You can delete or rename any files that you don't need for your project. Remember to keep the `public/index.html` and `src/index.js` files as they are, because they're essential for your website to work.

As a beginner, it's recommended to put your JavaScript and CSS files inside the `src` folder to ensure they get processed correctly. Webpack, a tool used for building websites, will take care of bundling and optimizing your code.

Feel free to create additional folders at the top level for organizing your project, like "images" or "docs". However, keep in mind that files in these folders won't be included in the final version of your website when you're ready to publish it.

If you're using Git version control system and your project is not part of a larger repository, a new repository will be initialized, creating a `.git` folder. This helps you track changes to your code and collaborate with others if needed. You can ignore this folder for now if you're not familiar with Git.
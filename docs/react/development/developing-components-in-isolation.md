---
id: developing-components-in-issolation
title: Developing Components in Isolation
sidebar_label: Developing Components
sidebar_position: 2
tags: [react, storybook, react-styleguidist, components, ui, development, isolation, preview, states, storybook-for-react, react-styleguidist]
description: "Learn how to develop and preview your React components in isolation from your main app using Storybook or React Styleguidist. Create a convenient way to work on components individually and view all their states."
---

In a typical app, you have various UI components, each having multiple states. Let's take a basic button component as an example, which can have the following states:

- Regular state with a text label.
- Disabled mode.
- Loading state.

However, it can be challenging to visualize these states without running a sample app or looking at examples.

By using third-party tools like [Storybook for React](https://storybook.js.org) or [React Styleguidist](https://react-styleguidist.js.org/), you can develop and preview your components in isolation from your main app. These tools provide a convenient way to work on components individually and view all their states.

![Storybook for React Demo](https://raw.githubusercontent.com/storybookjs/storybook/next/docs/get-started/storybook-third-party-docs.gif)

Additionally, you can deploy your Storybook or style guide as a static app, allowing your team members to review different UI component states without the need for a backend server or creating app accounts.

## Getting Started with Storybook

Storybook is a development environment specifically designed for React UI components. It enables you to browse a component library, view different states of each component, and interactively develop and test your components.

To set up Storybook in your project, run the following command within your app's directory:

```sh
npx sb init
```

Follow the instructions displayed on the screen after running the command.

Here are some resources to learn more about React Storybook:

- [Learn Storybook (tutorial)](https://storybook.js.org/tutorials/)
- [Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [GitHub Repo](https://github.com/storybooks/storybook)
- [Snapshot Testing UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) with Storybook + addon/storyshot

## Getting Started with Styleguidist

Styleguidist is another useful tool that combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, and an environment for developing components in isolation, similar to Storybook. In Styleguidist, you write examples in Markdown, and each code snippet is rendered as a live editable playground.

To install Styleguidist, use the following command:

```sh
npm install --save react-styleguidist
```

Alternatively, you can use `yarn`:

```sh
yarn add react-styleguidist
```

After installing Styleguidist, add the following scripts to your `package.json` file:

```diff
   "scripts": {
+    "styleguide": "styleguidist server",
+    "styleguide:build": "styleguidist build",
     "start": "react-scripts start",
```

To start the Styleguidist server, run the following command within your app's directory:

```sh
npm run styleguide
```

Follow the instructions provided on the screen to continue setting up Styleguidist.

Here are some resources to learn more about React Styleguidist:

- [GitHub Repo](https://github.com/styleguidist/react-styleguidist)
- [Documentation](https://react-styleguidist.js.org/docs/getting-started.html)

Now, whenever you make a commit, Prettier will automatically format the changed files. If you want to format your entire project for the first time, you can run `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"`.

To integrate Prettier into your favorite editor, refer to the [Editor Integration](https://prettier.io/docs/en/editors.html) section on the Prettier GitHub page.

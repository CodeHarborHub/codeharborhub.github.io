---
id: setting-up-your-editor
title: Setting Up Your Editor
sidebar_label: Editor Setup
sidebar_position: 1
tags: [react, create-react-app, editor, syntax-highlighting, linting, debugging, code-formatting, prettier, vscode, webstorm]
description: "Learn how to set up your text editor for working with Create React App. Enhance your editing experience and maximize productivity with these tips."
---

When working with Create React App, there are several tools you can use to enhance your editing experience and maximize productivity. Let's go through some tips to get your editor set up correctly.

## Syntax Highlighting

To enable syntax highlighting in your favorite text editor, you can refer to the [Babel documentation page](https://babeljs.io/docs/editors) for instructions. Most popular editors have coverage in the documentation.

## Displaying Lint Output in the Editor

:::note
- This feature requires `react-scripts@0.2.0` or higher.

- For projects created with `react-scripts@2.0.3` or higher, this feature works out of the box.

- Please ensure you have npm 3 or higher.
:::

Some editors like Sublime Text, Atom, and Visual Studio Code provide ESLint plugins for displaying linting output in the editor. However, these plugins are not mandatory. You will still see the linting results in your terminal and browser console by default. If you prefer to view the linting results directly in your editor, you can install an ESLint plugin or extension.

Keep in mind that any customizations made to your ESLint config will only affect the editor integration, not the terminal or in-browser lint output. Create React App intentionally provides a minimal set of rules to catch common mistakes.

If you want to enforce a specific coding style for your project, you can consider using [Prettier](https://github.com/jlongster/prettier) instead of ESLint style rules.

### Extending or Replacing the Default ESLint Config

You have the option to extend the base ESLint config provided by Create React App or replace it entirely, depending on your needs. Here are a few things to remember:

1. We highly recommend extending the base config instead of removing it completely, as removing it may introduce hard-to-find issues.
2. When working with TypeScript, you'll need to provide an `overrides` object to apply rules specifically to TypeScript files.
3. It's important to note that any rules set to `"error"` will prevent the project from building.

In the example below:

- The base config is extended by a shared ESLint config.
- A new rule is added that applies to all JavaScript and TypeScript files.
- Another new rule is added that targets TypeScript files only.

```json
{
  "eslintConfig": {
    "extends": ["react-app", "shared-config"],
    "rules": {
      "additional-rule": "warn"
    },
    "overrides": [
      {
        "files": ["**/*.ts?(x)"],
        "rules": {
          "additional-typescript-only-rule": "warn"
        }
      }
    ]
  }
}
```

## Debugging in the Editor

**This feature currently supports only [Visual Studio Code](https://code.visualstudio.com) and [WebStorm](https://www.jetbrains.com/webstorm/).**

Create React App provides built-in support for debugging in Visual Studio Code and WebStorm, allowing you to write and debug your React code seamlessly within the editor. This minimizes the need for context switching between tools and provides a continuous development workflow.

### Visual Studio Code

Make sure you have the latest version of [VS Code](https://code.visualstudio.com) installed.

To enable debugging in VS Code, add the following block to your `launch.json` file, located inside the `.vscode` folder in your app's root directory:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

:::note
- If you've adjusted the <u>HOST or PORT environment variables</u>, the URL may be different.
:::
Start your app by running `npm start`, and then you can start debugging in VS Code by pressing `F5` or clicking the green debug icon. This allows you to write code, set breakpoints, make changes, and debug your code without leaving the editor.

If you encounter any issues with VS Code debugging, refer to their [troubleshooting guide](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting).

### WebStorm

To use the debugging feature in WebStorm, you'll need [WebStorm](https://www.jetbrains.com/webstorm/) and the [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) Chrome extension installed.

In WebStorm, go to the `Run` menu and select `Edit Configurations...`. Click the `+` button, choose `JavaScript Debug`, and paste `http://localhost:3000` into the URL field. Save the configuration.

:::note
- If you've adjusted the <u>HOST or PORT environment variables</u>, the URL may be different.
:::

Start your app by running `npm start`, then press `^D` on macOS or `F9` on Windows and Linux, or click the green debug icon in WebStorm to start debugging.

You can also use this method to debug your application in IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, and RubyMine.

## Automatic Code Formatting

Prettier is an opinionated code formatter that supports JavaScript, CSS, and JSON. It helps maintain consistent code style within your project. For more information, you can visit [Prettier's GitHub page](https://github.com/prettier/prettier) or see it in action on their [playground](https://prettier.io/playground/).

To format your code automatically whenever you make a commit in Git, you need to install the following dependencies:

```sh
npm install --save husky lint-staged prettier
```

Alternatively, you can use `yarn`:

```sh
yarn add husky lint-staged prettier
```

- `husky` enables using Git hooks as if they are npm scripts.
- `lint-staged` allows running scripts on staged files in Git. You can learn more about it in this [blog post about lint-staged](https://medium.com/@okonetchnikov/make-linting-great-again-f3890e1ad6b8).
- `prettier` is the JavaScript formatter that will run before commits.

After installing the dependencies, you can ensure that every file is formatted correctly by adding a few lines to the `package.json` file in your project's root.

Add the following field to the `package.json`:

```diff
+ "husky": {
+   "hooks": {
+     "pre-commit": "lint-staged"
+   }
+ }
```

Next, add a `lint-staged` field to the `package.json`, for example:

```diff
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,

jsx,ts,tsx,json,css,scss,md}": [
+     "prettier --write"
+   ]
+ },
  "scripts": {
```

Now, whenever you make a commit, Prettier will automatically format the changed files. You can also run `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"` to format your entire project for the first time.

To integrate Prettier with your favorite editor, refer to the [Editor Integration](https://prettier.io/docs/en/editors.html) section on the Prettier GitHub page.
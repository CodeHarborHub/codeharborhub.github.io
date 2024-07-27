---
id: custom-templates
title: Custom Templates
sidebar_label: Importing a Component
sidebar_position: 1
tags: [create react app, custom templates, custom template, react project, project setup, project configuration, project dependencies, project folder structure, react app, react project setup, react project configuration, react project dependencies, react project folder structure, react project template, react project scaffolding, react project boilerplate, react project starter kit, react project setup template, react project configuration template, react project dependencies template, react project folder structure template, react project scaffolding template, react project boilerplate template, react project starter kit template, react project setup boilerplate, react project configuration boilerplate, react project dependencies boilerplate, react project folder structure boilerplate, react project scaffolding boilerplate, react project starter kit boilerplate]
keywords: [create react app, custom templates, custom template, react project, project setup, project configuration, project dependencies, project folder structure, react app, react project setup, react project configuration, react project dependencies, react project folder structure, react project template, react project scaffolding, react project boilerplate, react project starter kit, react project setup template, react project configuration template, react project dependencies template, react project folder structure template, react project scaffolding template, react project boilerplate template, react project starter kit template, react project setup boilerplate, react project configuration boilerplate, react project dependencies boilerplate, react project folder structure boilerplate, react project scaffolding boilerplate, react project starter kit boilerplate]
description: Learn how to create and use custom templates in Create React App to quickly start new projects with specific configurations, dependencies, and folder structures.
---

## Introduction to Custom Templates

Custom templates in Create React App (CRA) are pre-configured project setups that allow developers to scaffold new projects with specific configurations, dependencies, and folder structures. They enable you to avoid repetitive manual setup and quickly start your projects with your preferred settings. In this guide, we'll create a custom template that includes a popular UI library, sets up a state management system, and adds some custom scripts for building an engaging React app.

:::note
This feature is available with `react-scripts@3.3.0` and higher.
:::

Custom Templates in Create React App empower you to select a specialized project template while retaining all the benefits of Create React App's features.

Custom Templates follow the naming convention `cra-template-[template-name]`, but you only need to provide `[template-name]` when creating a new project.

Scoped templates are also supported using the format `@[scope-name]/cra-template` or `@[scope-name]/cra-template-[template-name]`, which can be installed via `@[scope]` and `@[scope]/[template-name]` respectively.

To create a new project using a custom template, use the following command:

```sh
npx create-react-app my-app --template [template-name]
```

## Finding Custom Templates

Create React App ships with two default templates:

- [`cra-template`](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [`cra-template-typescript`](https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript)

However, the community offers a wide range of great custom templates. You can find them by searching for ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

## Building a Custom Template

If you're interested in creating your custom template, start by exploring how the default [`cra-template`](https://github.com/facebook/create-react-app/tree/main/packages/cra-template) is built.

A custom template must adhere to the following structure:

```
cra-template-[template-name]
  ├── README.md (for npm)
  ├── template.json
  ├── package.json
  ├── template
  |     ├──README.md (for projects created from this template)
  |     ├──gitignore
  |     ├──public
  |     |   ├──index.html
  |     |   └── ...
  |     ├──src
  |         ├── index.js (or index.tsx)
  |         └── ...  
  └── ... 
```

### Testing a Custom Template

To test a custom template locally, use the `file:` prefix followed by the file path to your template source.

```sh
npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]
```

### The `template` Folder

The `template` folder is copied to the user's app directory when Create React App installs. During this process, the file `gitignore` is renamed to `.gitignore`.

Feel free to add any additional files you want in this folder, but ensure you have at least the files specified above.

### The `template.json` File

The `template.json` file is the configuration file for your custom template. As this feature evolves, more options will be added. For now, only the `package` key is supported.

The `package` key allows you to provide any keys/values you want to add to the new project's `package.json`. You can include dependencies and any custom scripts your template relies on.

Below is an example `template.json` file:

```json title="template.json"
{
  "package": {
    "dependencies": {
      "eslint-plugin-jsx-a11y": "^6.2.3",
      "serve": "^11.2.0"
    },
    "scripts": {
      "serve": "serve -s build",
      "build-and-serve": "npm run build && npm run serve"
    },
    "eslintConfig": {
      "extends": ["react-app", "plugin:jsx-a11y/recommended"],
      "plugins": ["jsx-a11y"]
    }
  }
}
```

Any values you add for `"dependencies"` and `"scripts"` will merge with the Create React App defaults. For other keys, the values will be used as-is, replacing any matching Create React App defaults.

As a convenience, we automatically replace `npm run` with `yarn` in your custom `"scripts"`, as well as in your `README` when projects are initialized with yarn.


## Step-by-Step Guide to Creating Custom Templates in Create React App

### Step 1: Setting Up the Initial CRA Project

Before creating our custom template, we need to set up a basic Create React App project. If you haven't installed CRA, do it using npm (Node Package Manager):

```bash
npm install -g create-react-app
```

Once installed, create a new React app with the following command:

```bash
npx create-react-app my-custom-template-app
```

Replace `my-custom-template-app` with your preferred project name.

### Step 2: Customize Your CRA Project

In the newly created `my-custom-template-app` directory, you'll find the basic CRA project structure. We'll now add some customizations to our template.

#### Example Customization 1: Adding a UI Library

For our example, let's use the popular UI library `Material-UI`. Install it using npm:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Next, create a new file `CustomButton.js` in the `src` folder with the following code:

```jsx title="CustomButton.js"
// CustomButton.js
import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ text }) => {
  return <Button variant="contained" color="primary">{text}</Button>;
};

export default CustomButton;
```

In the `src/App.js` file, import and use the `CustomButton` component:

```jsx title="App.js"
// App.js
import React from 'react';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <h1>Hello, Custom Template!</h1>
      <CustomButton text="Click Me!" />
    </div>
  );
}

export default App;
```

#### Example Customization 2: Setting Up State Management (using Redux)

For state management, we'll integrate Redux into our custom template. Install the required packages:

```bash
npm install redux react-redux
```

Now, create a new folder named `store` in the `src` directory. Inside this folder, create a file `counterSlice.js` with the following code:

```jsx title="src/store/counterSlice.js"
// src/store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

In the `src/store` folder, create a file named `store.js` to set up the Redux store:

```jsx title="src/store/store.js"
// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Finally, update `src/index.js` to wrap the `App` component with the Redux Provider and pass the store:

```jsx title="src/index.js"
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Step 3: Create the Custom Template

Now that we've customized our CRA project, let's turn it into a reusable template.

**1. Template Folder Structure**

Create a new folder named `template` in the root directory of your CRA project. Move all the files and folders (except the `node_modules` folder) from the root to this `template` folder.

**2. Custom Template Package.json**

In the `template` folder, create a new `package.json` file. Add the following:

```json title="package.json"
{
  "name": "my-custom-react-template",
  "version": "0.1.0",
  "dependencies": {
    "@mui/material": "^5.0.0",
    "@emotion/react": "^11.4.1",
    "@emotion/styled": "^11.3.0",
    "redux": "^4.1.1",
    "react-redux": "^7.2.5",
    "react-scripts": "4.0.3"
  }
}
```

Note: The dependencies listed here should match the ones used in your CRA project. Additionally, update the version numbers if needed.

**3. README.md**

Create a `README.md` file in the `template` folder and add documentation for your custom template. Describe the purpose of the template, its features, and any additional setup or configuration instructions.

### Step 4: Test Your Custom Template Locally

Before publishing your template, test it locally to ensure everything works as expected.

**1. Link Your Custom Template**

In the root directory of your CRA project, run the following command to create a symlink for your custom template:

```bash
npm link
```

**2. Create a New Project**

Now, create a new directory outside your custom template project and use the following command to generate a new CRA project using your custom template:

```bash
npx create-react-app my-custom-app --template file:../path/to/my-custom-template-app/template
```

Replace `../path/to/my-custom-template-app/template` with the actual path to your custom template.

**3. Start the New Project**

Move into the newly created `my-custom-app` directory and start the app:

```bash
cd my-custom-app
npm start
```

### Conclusion

Congratulations! You've successfully created your custom template in Create React App. Now you can reuse it or share it with others, making it easier to kickstart future React projects with your preferred configurations, dependencies, and folder structures. Happy coding!
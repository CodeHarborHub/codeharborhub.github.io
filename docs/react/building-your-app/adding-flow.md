---
id: adding-flow
title: Adding Flow
sidebar_position: 5
tags: [flow, static, type, checker, create react app, react, javascript, type safety, bug prevention, type annotations, union types, optional types, type checking, type errors, live example, flow-bin, flowconfig, vscode, vim, lsp, absolute imports, type annotations, union types, optional types, type checking, type errors, live example, flow-bin, flowconfig, vscode, vim, lsp, absolute imports]
keywords: [flow, static, type, checker, create react app, react, javascript, type safety, bug prevention, type annotations, union types, optional types, type checking, type errors, live example, flow-bin, flowconfig, vscode, vim, lsp, absolute imports, type annotations, union types, optional types, type checking, type errors, live example, flow-bin, flowconfig, vscode, vim, lsp, absolute imports]
description: Learn how to add Flow, a static type checker, to your Create React App, empowering your code with type safety and bug prevention.
---

Flow, a formidable static type checker, stands ready to protect your code from lurking bugs. Fear not, for we shall guide you on this thrilling journey into the realm of static types in JavaScript. If you are new to this concept, fear not! Delve into this [enchanting introduction](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb) to discover the power of static types.

:::note
Recent versions of [Flow](https://flow.org/) seamlessly integrate with Create React App projects.
:::

## Introduction:
Welcome, aspiring Code Masterminds, to the magical world of Create React App! In this guide, we will delve into the realm of type checking and unveil the powers of Flow to bring order and certainty to your React applications. Prepare to embark on an adventure of static typing and fearless coding!

[Flow's documentation](https://flow.org/)

### 1: Introducing Flow - The Guardian of Types

Meet Flow, a stalwart guardian bestowed upon us by the ancient sorcerers at Facebook. Flow is a static type checker that adds an extra layer of protection to your JavaScript code, ensuring that it adheres to predefined types and preventing sneaky bugs from infiltrating your app.


### 2: Unleashing Flow in Your Create React App (Dance of Installation)

Let us begin our quest by integrating Flow into your Create React App project. Fear not, for the path is straightforward. 

Prepare to summon Flow into your Create React App project by performing a few delicate steps:

1. Utter the incantation `npm install --save flow-bin` (or `yarn add flow-bin`) to add Flow to your magical dependencies.
2. Inscribe the sacred command `"flow": "flow"` into the `scripts` section of your `package.json` to harness Flow's power.
3. Invoke the initiation ritual `npm run flow init` (or `yarn flow init`) to conjure a [`.flowconfig` file](https://flow.org/en/docs/config/) at your project's core.
4. Fortify your code with the mark of Flow - `// @flow`. Bestow this incantation upon any files you wish to bless with type checking, such as `src/App.js`.

### 3: Unleashing the Magic

Behold the power Flow bestows upon you! With a simple command, `npm run flow` (or `yarn flow`), Flow will roam through your files, inspecting for lurking bugs and ensuring harmony among types.

Let us not forget the comforts of modern coding. Embrace extensions like [Flow Language Support](https://github.com/flowtype/flow-for-vscode) for Visual Studio Code or the wondrous Language Server Protocol standard (e.g. [vim LSP](https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow)) to receive hints as you weave your code.

### 4: The Elegance of Absolute Imports

Should you seek the elegance of absolute imports while dancing with Flow, heed this secret. Enchant your `.flowconfig` with the following:

```diff
  [options]
+ module.name_mapper='^\([^\.].*\)$' -> '<PROJECT_ROOT>/src/\1'
```

Let the magic of this incantation make Flow aware of your desires.

### 5: Casting Spells - Annotating Your Code with Types

Now that Flow is up and running, it's time to adorn your code with type annotations. Brace yourself, for the power of type annotations will make your code more robust and comprehensible.

```js
// @flow
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result: number = addNumbers(4, 5);
```

Observe how the `number` type annotations indicate that `a` and `b` are expected to be numbers, and the function itself will return a number. Flow will diligently check if the types match during development, sparing you the anguish of runtime errors.

### 6: Magical Unions and Optional Types

Flow bestows upon us the gift of union types, allowing variables to possess multiple possible types. Behold this example:

```javascript
// @flow
function getLength(value: string | Array<any>): number {
  return value.length;
}
```

In this spellbinding incantation, `value` can be either a string or an array. Flow gracefully accepts this union of types and validates the code accordingly.

Moreover, Flow also offers the blessing of optional types. Take a look:

```javascript
// @flow
type User = {
  name: 'Ajay Dhangar',
  age?: 22,
};

function getUserInfo(user: User): string {
  if (user.age) {
    return `Name: ${user.name}, Age: ${user.age}`;
  } else {
    return `Name: ${user.name}`;
  }
}
```

Here, the `age` property of the `User` type is marked as optional with the `?` symbol. Flow acknowledges this optionality and allows for graceful handling within the `getUserInfo` function.

### 7: Vanquishing Bugs - Leveraging Flow's Power

Flow is not just about type annotations; it also possesses the power to unearth hidden bugs lurking within your code. With a simple command, `npx flow`, Flow will perform static analysis on your codebase, detecting potential type errors and revealing them to you. Let Flow guide you on your path to bug-free coding!

### 8: The Spell of a Live Example

In the grand tradition of Code Mastermind HQ, behold a live example to witness the power of Flow in action. Brace yourself as you explore this enchanting example, complete with code snippets and a detailed explanation:

## Live Example For Better Understanding

Absolutely! Here's a simple working live example of using Flow in a Create React App. This example demonstrates how to add type annotations to a component's props and state, and how Flow helps to catch type errors during development.

1. Create a new React app using Create React App:

  ```bash title="terminal (bash)"
  npx create-react-app flow-example-app
  cd flow-example-app
  ```

2. Install Flow:

  ```bash title="terminal (bash)"
  npm install --save flow-bin
  ```

3. Initialize Flow:

  ```bash title="terminal (bash)"
  npx flow init
  ```

4. Add `// @flow` to `App.js` to enable type checking:

  ```js title="App.js"
  // App.js
  // @flow
  import React, { Component } from 'react';

  type Props = {
    name: 'Ajay',
  };

  type State = {
    age: 23,
  };

  class App extends Component<Props, State> {
    state = {
      age: 25,
    };

    render() {
      const { name } = this.props;
      const { age } = this.state;

      return (
        <div>
          <h1>Hello, {name}!</h1>
          <p>You are {age} years old.</p>
        </div>
      );
    }
  }

  export default App;
  ```

5. Run the app and check for type errors:

  ```bash
  npm start
  ```

6. You can now access the app at `http://localhost:3000`. The component `App` now expects a `name` prop of type `string`, and its state contains an `age` property of type `number`.

  <BrowserWindow>      
      <div>
        <h1>Hello, name: Ajay!</h1>
        <p>You are 23 years old.</p>
      </div>        
   </BrowserWindow>

  If you attempt to use the component without providing the `name` prop or try to set the `age` to a non-numeric value, Flow will catch these type errors and display them in your terminal.
  
  With this live example, you can witness how Flow enhances your React app's robustness and detects potential type-related issues during development, saving you from future bugs and headaches.
  
  Remember to install Flow globally on your system if you haven't already, and make sure to use the `// @flow` pragma in files you wish to enable type checking for.
  
  May this example empower you to embrace the magic of Flow and wield the power of static typing in your React adventures! Happy coding!

## Conclusion:
Congratulations, dear apprentice! You have mastered the art of integrating Flow into your Create React App and harnessing its magic to strengthen your codebase. With Flow as your companion, you can fearlessly journey through the lands of React, confident in the knowledge that your types are checked and your code is resilient.

Remember, the path of a Code Mastermind is one of continuous learning and growth. Embrace the power of type checking and let Flow be your guiding light as you unlock new realms of coding excellence!

May your code be elegant, your types be sound, and your journey be filled with joy. Happy coding, and may the magic of Flow be with you always! 
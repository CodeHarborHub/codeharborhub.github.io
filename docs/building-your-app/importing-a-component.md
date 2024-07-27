---
id: importing-a-component
title: Importing Components in React
sidebar_label: Importing a Component
sidebar_position: 2
tags: [react, import, component, importation, import, export, module, file, path, relative, absolute, jsx, javascript, code, code-splitting, dynamic, lazy, suspense, react.lazy, react.suspense, dynamic-import, import, export, module, file, path, relative, absolute, jsx, javascript, code, code-splitting, dynamic, lazy, suspense, react.lazy, react.suspense, dynamic-import]
description: "Learn how to import components in your React applications. Unleash the magic of component importation and integrate them into your app with ease!"
---

Welcome, brave Code Masterminds, to the wondrous world of component importation! In this guide, we shall unravel the secrets of importing components in your React applications, enabling you to summon their powers and weave them into the fabric of your app.

## The Art of Component Summoning

When crafting your React masterpiece, you'll often encounter the need to import components from external sources. Fear not, for we shall equip you with the mystical knowledge to achieve this feat!

To import a component, follow these steps:

**Step 1:** Prepare your spellbook (a.k.a. your code editor) and open the file where you wish to import the component.

**Step 2:** Utter the sacred incantation, starting with the `import` keyword. Specify the name of the component you wish to summon, and assign it to a variable of your choosing.

```jsx
import { ComponentName } from './path/to/component';
```

Here, `ComponentName` represents the name you desire for your component variable, and `'./path/to/component'` refers to the relative path of the component file from the current file. Feel free to customize these as per your needs!

**Step 3:** With the component summoned, you are now ready to employ its powers within your code. Invoke it as a JSX tag, just like any other HTML element, and witness the magic unfold!

```jsx title="MyMagicalApp.jsx"
import { ComponentName } from './path/to/component';

function MyMagicalApp() {
  return (
    <div>
      <h1>Welcome to My Magical App!</h1>
      <ComponentName />
    </div>
  );
}
```

Voilà! You have successfully summoned and integrated the component into your app. The magic of React is now at your fingertips!

## A Live Example to Unleash the Magic

To solidify your understanding, let us embark on a mystical journey with a live example. Imagine you possess a component called `Wizard`, capable of conjuring spells and enchantments. We shall import this component and unleash its powers within our app.

**Step 1:** Create a new file called `Wizard.jsx` and add the following code:

```jsx title="Wizard.jsx"
import React from 'react';

function Wizard() {
  return <h2>I am a Wizard! Prepare to be amazed!</h2>;
}

export default Wizard;
```

**Step 2:** Open your main app file (e.g., `App.js`) and import the `Wizard` component:

```jsx title="App.js"
import React from 'react';
import Wizard from './Wizard';

function App() {
  return (
    <div>
      <h1>Welcome to My Magical App!</h1>
      <Wizard />
    </div>
  );
}

export default App;
```

Behold the power of importation! The `Wizard` component shall grace your app, displaying the majestic message "I am a Wizard! Prepare to be amazed!"

<BrowserWindow>
      
    <div>
      <h1>Welcome to My Magical App!</h1>
      <h2>I am a Wizard! Prepare to be amazed!</h2>
    </div>
      
 </BrowserWindow>

## Conclusion

Congratulations, dear apprentice! You have mastered the art of importing components in your React app. With this newfound knowledge, you can now summon and integrate a myriad of components to bring your app to life.

Remember, the path of a Code Mastermind is filled with curiosity and exploration. Experiment with different components, combine their powers, and create awe-inspiring React applications that mesmerize the world!

May your code be elegant, your components harmonious, and your journey through React be filled with laughter and enchantment.
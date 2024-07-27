---
id: installing-a-dependency
title: Installing a Dependency
sidebar_label: Dependency
sidebar_position: 1
tags: [react, create react app, npm, dependencies, package, install, installation, node package manager, react-scripts, react-dom, react-icons, react-scripts, react-app, react-app-template]
description: Learn how to install a dependency in your Create React App project. Unleash the power of enchanting packages and add new spells to your React app with the help of npm.
---

:::note
Welcome, brave apprentice! Let's embark on a magical quest of installing dependencies in your enchanted Create React App. Fear not, for we shall guide you through the mystical process step-by-step.
:::

## 🧙‍♂️ The Art of Dependency Sorcery

In the realm of React, dependencies are powerful allies that bestow extraordinary abilities upon your app. These magical spells come in the form of packages, designed and crafted by the brilliant wizards of the open-source community.

## 📦 Unveiling the Magic of `npm`

To summon these powerful allies, we shall wield the mighty `npm`, also known as Node Package Manager. `npm` is the gateway to a vast library of enchanting packages. With a single incantation, it can fetch and install any spell your heart desires.

## 🔮 The Chant of Installation

Let's dive into the process of installing a dependency. Open your command-line spellbook, and within the enchanted directory of your Create React App, invoke the sacred incantation:

```bash
npm install <package-name>
```

Replace `<package-name>` with the name of the magical package you wish to add. For instance, if you seek the powers of a styling spell called `awesome-styler`, the chant shall be:

```bash
npm install awesome-styler
```

## 🌟 Casting the Spell - A Live Example

Behold! As a testament to our guidance, we shall demonstrate the mystical art of installing a dependency with a live example.

### Step 1: Create Your Enchanted React App

First, create a new Create React App. In your command-line spellbook, execute:

```bash
npx create-react-app magical-app
cd magical-app
```

### Step 2: Unleash the Spell

Now, it is time to summon a magical package! Let's bring forth the mystical `react-icons`, a library full of captivating icons for your app.

```bash
npm install react-icons
```

### Step 3: Wield the Magic

Open the spellbook of your React app, and behold the wonders of `react-icons`. Cast the spell by adding this code to your enchanted `App.js`:

```jsx
import React from 'react';
import { FaReact } from 'react-icons/fa';

const App = () => {
  return (
    <div>
      <h1>Welcome to Your Magical App!</h1>
      <p>Behold the sacred symbol of React:</p>
      <FaReact size={50} />
    </div>
  );
};

export default App;
```

### Step 4: Enchant the World

With your spell complete, return to your command-line spellbook, and recite the following:

```bash
npm start
```

<BrowserWindow>
      
    <div>
      <h1>Welcome to Your Magical App!</h1>
      <p>Behold the sacred symbol of React:</p>
      <FaReact size={50} />
    </div>
      
 </BrowserWindow>

Witness the magic come to life as your app springs forth with the enchanting `FaReact` icon, symbolizing the power of React!

## 🎉 Celebration and Further Exploration

Congratulations, brave apprentice! You have delved into the secrets of installing dependencies and wielded the magic of `react-icons`. But fear not, for this is just the beginning of your journey.

Explore the vast magical repository of `npm`, and discover new spells to enhance your creations. Unravel the mysteries of more complex dependencies and conquer the challenges that lie ahead.

Remember, the quest of a developer is a never-ending adventure, filled with wonder, excitement, and endless possibilities.

May your code be bug-free, and your creativity know no bounds. Onwards to new magical horizons!
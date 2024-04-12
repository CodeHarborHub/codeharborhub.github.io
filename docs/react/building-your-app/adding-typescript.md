---
id: adding-typescript
title: Adding TypeScript
sidebar_position: 6
tags: [react, adding-typescript, typescript]
description: "Learn how to add TypeScript to your Create React App project. Enhance your code with type safety and unleash the power of TypeScript in your React applications."
---

:::note
> **Attention, aspiring wizards of code!**
> Welcome to a magical journey where we shall unleash the power of TypeScript upon our Create React App. Fear not, for this enchanting endeavor shall aid you in writing more robust and delightful spells in the realm of React!
:::

## Introduction:

Welcome, brave Code Apprentices, to the realm of TypeScript—a powerful sorcery that brings type safety and enchanting possibilities to your JavaScript spells. In this guide, we shall embark on an epic quest to integrate TypeScript into your Create React App, paving the way for a magical journey of robust and error-free coding!

### 1: Embrace the TypeScript Magic

TypeScript, a captivating typed superset of JavaScript, compiles to pure JavaScript, bringing clarity and precision to your code incantations. But fear not, for its integration is swift and graceful. To commence your journey, ensure your `react-scripts` version is 2.1.0 or higher, and invoke the sacred command:

```sh
npx create-react-app my-app --template typescript
```

Or, if you are a follower of the yarn tradition:

```sh
yarn create react-app my-app --template typescript
```

Fear not, for a seamless TypeScript setup awaits you!

### 2: Enchanting Existing Projects

For seasoned adventurers with existing Create React App projects, the path to TypeScript enlightenment is equally accessible. Embark on this path by installing the following mystical packages:

```sh
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

Or let yarn's magic weave its wonders:

```sh
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

But be mindful, to unlock the true essence of TypeScript, bestow upon your files the illustrious `.tsx` extension (e.g., `src/index.js` to `src/index.tsx`). And lo, as you cast your eyes upon your code, a [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) shall emerge, guiding your TypeScript endeavors.

Finally, to invoke the full powers of TypeScript, perform the sacred rite: **restart your development server!** Your creation shall now be shielded by the embrace of type safety.

Behold, as the veil of type errors reveals itself in the console! Fear not, for by resolving these, you shall wield the mighty powers of TypeScript and take your React project to new heights. For the intrepid explorers, [advanced configuration](../advanced-usage/advanced-configuration.md) awaits!

### 3: Venturing into TypeScript and React

Dear adventurers, rejoice, for the journey has only begun! As you dive deeper into the depths of TypeScript, treasure troves of knowledge await:

- [The TypeScript Handbook](https://www.typescriptlang.org/): An exquisite tome that unveils the secrets of TypeScript's arcane syntax and features.
- [TypeScript Example on React](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react): A magical sandbox where you can experiment with TypeScript in the realm of React.
- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets): A sacred manuscript offering invaluable insights into the fusion of React and TypeScript.

### 4: Overcoming Challenges and Sorcery

In every adventurer's journey, challenges arise, and even TypeScript is not immune. Should you encounter the absence of TypeScript in your creation, heed this advice: cast away the lingering shadows of cached versions by uninstalling `create-react-app` globally. Allow `npx` to guide you to the latest version, ever fresh and powerful!

As you grow in wisdom, be mindful of the limitations of TypeScript and Babel. Constant enums and namespaces may elude you in this union, but fret not! [Understanding the constraints](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats) shall aid your path to enlightenment.

## Conclusion:

Congratulations, esteemed Code Apprentices! You have harnessed the power of TypeScript within your React projects, ushering in an era of type safety and spellbinding possibilities. Let your code flourish in the embrace of TypeScript, safeguarded from the clutches of runtime errors!

Remember, the journey of a Code Apprentice is never-ending, filled with knowledge and growth. Embrace TypeScript's magic and let your code inspire and dazzle fellow adventurers. May your journey be filled with wonder and enchantment!
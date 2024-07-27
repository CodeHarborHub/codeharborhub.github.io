---
id: using-global-variables
title: Using Global Variables
sidebar_position: 3
tags: [react, global, variables, global-variables, global-variables-in-react, global-variables-in-javascript, global-variables-in-react-app, global-variables-in-react-component, global-variables-in-react-application, global-variables-in-react-js, global-variables-in-react-jsx, global-variables-in-react-javascript, global-variables-in-react-jsx-javascript, global-variables-in-react-jsx-component, global-variables-in-react-jsx-application, global-variables-in-react-jsx-app, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-javascripts, global-variables-in-react-jsx-javascript, global-variables-in-react-jsx-apps, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-component, global-variables-in-react-jsx-application, global-variables-in-react-jsx-app, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-javascripts, global-variables-in-react-jsx-javascript, global-variables-in-react-jsx-apps, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-component, global-variables-in-react-jsx-application, global-variables-in-react-jsx-app, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-javascripts, global-variables-in-react-jsx-javascript, global-variables-in-react-jsx-apps, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-component, global-variables-in-react-jsx-application, global-variables-in-react-jsx-app, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-javascripts, global-variables-in-react-jsx-javascript, global-variables-in-react-jsx-apps, global-variables-in-react-jsx-applications, global-variables-in-react-jsx-components, global-variables-in-react-jsx-component, global-variables-in-react-jsx-application, global-variables-in-react-jsx-app, global-variables-in-react-jsx-applications, global-variables-in-react-jsx]
description: "Learn how to use global variables in your React applications. Unleash the magic of global variables and wield their power to share data across your entire app!"
---

:::note
*Attention, aspiring Coders! Let's delve into the arcane world of global variables. Fear not, for this knowledge shall empower you to wield their magic with finesse.*
:::

## The Mysterious Realm of Global Variables

Welcome to the mystical realm of global variables—a source of both power and peril in the world of React. These special entities hold information that can be accessed from anywhere within your enchanted application.

But beware, dear apprentice! With great power comes great responsibility. Mishandling global variables can lead to chaos and tangled spells within your code.

## The Enchantment Spell: Defining a Global Variable

Let us cast the incantation to define a global variable. Within the sacred halls of your `src` folder, create a file named `env.js`. It shall be our vessel to hold the magic:

```js title="src/env.js"
const globalWizardName = 'Merlin';
export default globalWizardName;
```

Behold, `globalWizardName` is now accessible throughout your sorcery, for it has been declared within the mystical realm of global variables!

## The Spellbook: Accessing the Global Variable

Now that we have conjured our global variable, let us learn how to access its power. Within any of your enchanted components, simply recite the `import` spell and invoke the global variable:

```jsx title="src/components/MagicComponent.jsx"
// src/components/MagicComponent.jsx
import React from 'react';
import globalWizardName from '../env';

const MagicComponent = () => {
  return (
    <div>
      <h2>Welcome, esteemed apprentice, to the realm of {globalWizardName}!</h2>
      <p>Prepare to embark on a journey of magical coding.</p>
    </div>
  );
};

export default MagicComponent;
```

<BrowserWindow>      
    <div>
      <h2>Welcome, esteemed apprentice, to the realm of Merlin!</h2>
      <p>Prepare to embark on a journey of magical coding.</p>
    </div>      
</BrowserWindow>

See how `globalWizardName` enriches your component with its knowledge? Embrace its power, but always remember to wield it responsibly.

## The Bewitching Dance: Using the Global Variable in Your Spells

Now that you've grasped the essence of global variables, let us create a spellbinding example using them.

**Step 1:** Create a new component, `SpellComponent.jsx`, and import the global variable:

```js title="src/components/SpellComponent.jsx"
// src/components/SpellComponent.jsx
import React from 'react';
import globalWizardName from '../env';

const SpellComponent = () => {
  const spellText = `Hear my words, for I invoke the great ${globalWizardName}!`;

  return (
    <div>
      <h3>Behold the Magic Spell:</h3>
      <p>{spellText}</p>
    </div>
  );
};

export default SpellComponent;
```

Step 2: Embrace the unity of spells by adding `SpellComponent` to your main enchantment, `App.js`:

```js title="src/App.js"
// src/App.js
import React from 'react';
import MagicComponent from './components/MagicComponent';
import SpellComponent from './components/SpellComponent';

const App = () => {
  return (
    <div>
      <MagicComponent />
      <SpellComponent />
    </div>
  );
};

export default App;
```


**Step 3:** Witness the magic come alive as you run your application! The mystical words of the great `{globalWizardName}` shall grace your screen.

<BrowserWindow>      
    <div>
      <div>
         <h2>Welcome, esteemed apprentice, to the realm of Merlin!</h2>
         <p>Prepare to embark on a journey of magical coding.</p>
      </div>
      <div>
         <h3>Behold the Magic Spell:</h3>
        <p>Hear my words, for I invoke the great Merlin!</p>
      </div>
    </div>      
 </BrowserWindow>

## The Perils of the Dark Arts: Misusing Global Variables

Ah, but heed this warning, dear apprentice! Misusing global variables can lead to unexpected enchantments and tangled webs of code.

**Example of a Dark Spell:**

```js title="src/components/DarkComponent.jsx"
// src/components/DarkComponent.jsx
import React from 'react';
import globalWizardName from '../env';

const DarkComponent = () => {
  globalWizardName = 'Voldemort'; // Oops! You shall not reassign a const from the magical realm!

  return (
    <div>
      <h2>Dark Arts Warning:</h2>
      <p>{`Beware, ${globalWizardName} is a name not to be spoken lightly!`}</p>
    </div>
  );
};

export default DarkComponent;
```

:::tip
Greetings, young Code Apprentices! This knowledge is unveiled with `react-scripts@3.0.0` and higher.
:::

## Unleashing the Power of Global Variables

Behold, the realm of global variables—a mystical concept that grants you the ability to wield data accessible across your entire React kingdom. However, heed this warning, dear beginners: global variables are both a potent weapon and a treacherous pitfall. With great power comes great responsibility.

### The Forbidden Artifact - The Global Object

In the enchanted lands of Create React App, there exists a powerful artifact called the "Global Object." It is an omnipotent entity that can hold any data you desire, accessible from any corner of your kingdom. But beware! Mishandling this artifact may lead to chaos, bugs, and cursed code.

As guardians of the React realm, we advocate for the wise use of global variables. But first, let us uncover their hidden potential.

### Discovering the Global Object's True Form

To conjure the Global Object, you must invoke its essence within your React spells. Fear not, for it is a natural part of the cosmic order and requires no additional incantations.

In your JavaScript tomes, simply access the Global Object using the mystical keyword `window`. Witness its grandeur in the code snippet below:

```jsx
// A noble variable, fit for the Global Object
const mysticalData = 'I am available across the realm!';

// Binding the noble variable to the Global Object
window.globalVariable = mysticalData;
```

### Beware the Pitfalls of Unbridled Magic

As the wise elders of the React realm advise, global variables must be used with caution. Excessive use of this power may lead to unpredictable behavior and jeopardize the harmony of your code.

Remember, dear apprentices, the React way encourages the use of state management libraries like Redux or React Context for managing shared data. These time-honored practices ensure order and maintain the sanctity of your codebase.

### A Tale of Practicality - A Live Example

Let us weave a tale of practicality, where global variables serve a noble purpose in enhancing our application.

In this example, we shall bestow our React kingdom with a day-night toggle switch—a magical artifact that changes the theme of our site.

```jsx live
// Within the enchanted lands of React, we create a functional component
function DayNightToggle () {
  // Embrace the power of state to control the day and night
  const [isDay, setDay] = useState(true);

  // A mystical function to toggle the day and night
  const toggleDayNight = () => {
    setDay((prevIsDay) => !prevIsDay);
  };

  // The enchanted return statement, where we create the toggle
  return (
    <div>
      <button onClick={toggleDayNight}>
        {isDay ? 'Switch to Night' : 'Switch to Day'}
      </button>
      <p>{isDay ? 'Good day, brave traveler!' : 'Good night, weary soul.'}</p>
    </div>
  );
}
```

With this enchanting example, the DayNightToggle component shall bring harmony and joy to your React kingdom, all thanks to the wise use of global variables.

### Parting Wisdom

Remember, dear Code Apprentices, global variables are powerful tools—tools that should be used sparingly and judiciously. Embrace the React way, and you shall discover the true beauty of state management libraries, which offer a more structured and scalable approach to shared data.

Go forth now, and may your React kingdom flourish with enchanted code and mesmerizing user experiences!

## In Conclusion

Congratulations, aspiring wizard! You have unlocked the secrets of global variables and wielded their power in your magical React spells.

But remember, with great power comes great responsibility. Use global variables wisely, and your journey into the enchanted realm of React shall be filled with joy and triumph.

Now, go forth and create wondrous applications, for you are now equipped with the knowledge to conjure and control the magic of global variables!

May your code be bug-free and your spells enchanting. Onwards to new magical horizons!
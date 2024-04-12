---
id: adding-bootstrap
title: Adding Bootstrap
sidebar_position: 4
tags: [react, create react app, bootstrap, css, styling, components, responsive, layout, design, ui, user interface, integration]
keywords: [react, create react app, bootstrap, css, styling, components, responsive, layout, design, ui, user interface, integration, npm, install, package, library, framework, pre-designed, enchanting, styles, responsive, layouts, components, buttons, forms, grid, system, columns, rows, container, app, project, example, tutorial, guide, how-to, learn, step-by-step, beginner, basics, introduction, overview, explanation, example, code, source, snippet, tutorial, guide, learn, how-to, steps]
description: Learn how to integrate Bootstrap into your Create React App, unlocking the power of pre-designed components, responsive layouts, and enchanting styles.
---

import './style.css'


:::tip
Welcome, aspiring Coders! In this guide, we'll unlock the power of Bootstrap and elevate your Create React App to new heights of elegance and style.
:::

## Embrace the Magic of Bootstrap

Bootstrap, a legendary CSS framework, bestows upon you a treasure trove of pre-designed components, responsive layouts, and enchanting styles. To wield its power, we shall embark on a mystical journey to integrate it into your Create React App.

### Unleash Bootstrap with npm

First, you need to install Bootstrap as one of your app's dependencies using npm. Open your terminal and type this arcane incantation:

```bash
npm install bootstrap
```

The magical npm spirits will work their wonders, and Bootstrap will be summoned to your project.

### Empower Your App with Bootstrap's Styling

Now that Bootstrap resides within your project, it's time to harness its styles. Open the `src/index.js` file, the very heart of your application, and invoke the Bootstrap magic by adding the following line at the top:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

With this spell, Bootstrap's captivating styles will weave their way into your app, imbuing it with elegance.

## Casting Spells with Bootstrap Components

Prepare to be amazed by Bootstrap's wondrous components! From spellbinding buttons to mysterious modals, you can now summon them with ease.

### Invoking Buttons

Buttons are the building blocks of any magical user interface. To conjure a Bootstrap button, simply create an element with the `btn` class:

```jsx title="MagicalButton,jsx"
import React from 'react';

function MagicalButton() {
  return (
    <button className="btn btn-primary">Cast Your Spell</button>
  );
}
```

**Live Preview:**

<BrowserWindow>      
    <div>
      <button className="btn btn-primary">Cast Your Spell</button>
    </div>      
 </BrowserWindow>

### Live Coding:

apply (try your self) other like: `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, etc.

```jsx live
function MagicalButton() {
  return (
    <button className="btn btn-primary">Cast Your Spell</button>
  );
}
```

### Enchanting Forms

Spice up your forms with Bootstrap's form components. Behold, an input with the `form-control` class:

```jsx title="MagicalForm.jsx"
import React from 'react';

function MagicalForm() {
  return (
    <input type="text" className="form-control" placeholder="Enter your name" />
  );
}
```

**Live Preview:**

<BrowserWindow>      
    <div>
      <input type="text" className="form-control" placeholder="Enter your name" />
    </div>      
 </BrowserWindow>

### Creating Responsive Layouts

Bootstrap's responsive grid system grants you the ability to craft captivating layouts for any screen size. Embrace the power of rows and columns:

```jsx title="ResponsiveLayout.jsx"
import React from 'react';

function ResponsiveLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p>This is the left column.</p>
        </div>
        <div className="col-sm-6">
          <p>This is the right column.</p>
        </div>
      </div>
    </div>
  );
}
```

**Live Preview:**

<BrowserWindow>      
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p>This is the left column.</p>
        </div>
        <div className="col-sm-6">
          <p>This is the right column.</p>
        </div>
      </div>
    </div>      
 </BrowserWindow>

## A Grand Finale - A Live Example

And now, for the grand finale, a live example demonstrating the fusion of React and Bootstrap. Witness the creation of a stunning app showcasing Bootstrap's magic:

```jsx title="MagicalApp.jsx"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MagicalApp() {
  return (
    <div className="container">
      <h1 className="mt-4">Welcome to the Magical World of React and Bootstrap!</h1>
      <p className="lead">Prepare to be enchanted by the wonders they create together.</p>

      <div className="row mt-5">
        <div className="col-sm-6">
          <img src="/img/logo.png" alt="logo" className="img-fluid" />
        </div>
        <div className="col-sm-6">
          <h2>Discover Your Powers</h2>
          <p>Embark on a journey of coding mastery as you learn the secrets of React and the magic of Bootstrap. Your powers shall know no bounds!</p>
          <button className="btn btn-primary">Start Your Quest</button>
        </div>
      </div>
    </div>
  );
}

export default MagicalApp;
```

**Live Preview:**

<BrowserWindow>      
    <div className="container">
      <h1 className="mt-4" style={{fontSize:'34px'}}>Welcome to the Magical World of React and Bootstrap!</h1>
      <p className="lead">Prepare to be enchanted by the wonders they create together.</p>
      <div className="row mt-5">
        <div className="col-sm-6">
          <img src="/code-harbor-hub/img/svg/static_website.svg" alt="logo" className="img-fluid" />
        </div>
        <div className="col-sm-6">
          <h2>Discover Your Powers</h2>
          <p>Embark on a journey of coding mastery as you learn the secrets of React and the magic of Bootstrap. Your powers shall know no bounds!</p>
          <button className="btn btn-primary">Start Your Quest</button>
        </div>
      </div>
    </div>      
 </BrowserWindow>

By reciting this mystical incantation, you shall witness the wonders of React and Bootstrap merging in harmony, crafting an exquisite and responsive user interface.

May this knowledge serve as your guide in the mesmerizing realms of React and Bootstrap. May you code with joy and spread magic across the web!

### Celebrate Your Success!

You have successfully integrated Bootstrap into your Create React App, unlocking the power of pre-designed components, responsive layouts, and enchanting styles. Your app now radiates elegance and charm, ready to captivate the world.
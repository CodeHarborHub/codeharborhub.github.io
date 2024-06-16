---
id: can-i-use-decorators
title: The Power of Decorators in CRA
sidebar_label: Use Decorators
sidebar_position: 2
tags: [decorators, create react app, decorators in create react app, decorators in react, decorators in javascript, decorators in typescript]
keywords: [decorators, create react app, decorators in create react app, decorators in react, decorators in javascript, decorators in typescript]
description: Learn how to use decorators in Create React App to enhance and extend the functionality of your components.
---


## Introduction to Decorators

Decorators are an amazing feature in JavaScript that allows us to enhance and extend the functionality of classes and their properties. They are essentially special functions that wrap around components and add magic to our code. Create React App (CRA) supports decorators out of the box, making it super easy for us to level up our React components! In this guide, we'll delve into decorators, how to set up CRA for using them, and explore some cool examples.

## Understanding Decorators

In simple terms, decorators are like cool stickers that you put on your React components to make them extra special. They start with the `@` symbol, and you can think of them as powerful modifiers that can change the behavior of classes, methods, or properties.

## Setting Up CRA for Decorators

Before we can start using decorators in our CRA project, we need to set up the right environment. Don't worry; it's a breeze! Here's what you need to do:

1. First, let's create your CRA project:

   ```bash
   npx create-react-app my-app
   cd my-app
   ```

2. Now, let's install the magical `babel-plugin-transform-decorators-legacy` package:

   ```bash
   npm install babel-plugin-transform-decorators-legacy --save-dev
   ```

3. Finally, let's configure Babel to recognize decorators by adding the plugin in your `package.json` file:

   ```json title="package.json"
   {
     "name": "my-app",
     "version": "0.1.0",
     "babel": {
       "plugins": [
         "babel-plugin-transform-decorators-legacy"
       ]
     }
   }
   ```

## Using Decorators in CRA

Now comes the fun part! Let's see how we can use decorators to make our components shine:

### Class Decorators

Imagine class decorators as superhero capes you put on your entire component class. They can change the class's behavior or even add cool superpowers! Check this out:

```jsx title="MyComponent.jsx"
import React from 'react';

function withHoverStyle(WrappedComponent) {
  return class extends React.Component {
    state = { isHovered: false };

    handleMouseEnter = () => this.setState({ isHovered: true });
    handleMouseLeave = () => this.setState({ isHovered: false });

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <WrappedComponent {...this.props} isHovered={this.state.isHovered} />
        </div>
      );
    }
  };
}

@withHoverStyle
class MyComponent extends React.Component {
  render() {
    const { isHovered } = this.props;
    const style = isHovered ? { backgroundColor: 'lightblue' } : {};

    return (
      <div style={style}>
        {/* Your component content here */}
      </div>
    );
  }
}
```

In this example, the `withHoverStyle` decorator adds a nice hover effect to our component, all without modifying the original component code!

### Method Decorators

Method decorators are like little wizards that cast spells on specific methods in your component. Let's create a decorator to throttle an expensive method:

```jsx title="MyComponent.jsx"
function throttle(wait) {
  return function (target, key, descriptor) {
    let timeout;

    descriptor.value = function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        target.apply(this, args);
      }, wait);
    };

    return descriptor;
  };
}

class MyComponent extends React.Component {
  @throttle(500)
  handleScroll() {
    // Expensive operation
  }
}
```

Here, the `throttle` decorator makes sure that the `handleScroll` method is only called every 500 milliseconds, preventing performance bottlenecks!

### Property Decorators

Property decorators are like the secret agents that guard your component properties. They can enforce rules or do other behind-the-scenes stuff. Let's make a property read-only:

```jsx title="MyComponent.jsx"
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class MyComponent extends React.Component {
  @readonly
  title = 'My Component';
}
```

Now, the `title` property cannot be changed from outside the component, keeping your data safe and sound.

## Conclusion

Decorators are a superpower in Create React App, and now you know how to use them to make your components even more awesome! By leveraging class, method, and property decorators, you can add exciting features, enhance behavior, and make your codebase cleaner and more organized.

Remember, with great power comes great responsibility. Use decorators wisely and sparingly, and you'll become a true React pro in no time! Happy coding! 
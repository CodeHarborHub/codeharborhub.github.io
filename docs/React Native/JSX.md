---
id: jsx-how-work
title: JSX
sidebar_label: JSX
sidebar_position: 3
tags: [React Native,JavaScript,React.Js,JSX,Framework]
description: How it works JSX?
---

JSX (JavaScript XML) is an extension to JavaScript syntax used by React (and React Native) to describe what the UI should look like. It allows developers to write HTML-like code within JavaScript, making it easier to create and manipulate the DOM (Document Object Model) elements.

### Key Features of JSX:

1. **Embedding Expressions**: You can embed JavaScript expressions within JSX using curly braces `{}`. This allows dynamic rendering of content based on variables, functions, or props.

   ```javascript
   const name = 'John Doe';
   const element = <h1>Hello, {name}</h1>;
   ```

2. **HTML-like Syntax**: JSX resembles HTML syntax, making it intuitive and familiar for developers who have experience with web development.

   ```javascript
   const element = <div className="container">
                     <h2>Welcome to React</h2>
                     <p>This is a JSX example.</p>
                   </div>;
   ```

3. **Attributes**: JSX allows you to use HTML attributes like `class` (in JSX, use `className`), `style`, and custom data attributes (`data-*`).

   ```javascript
   const element = <input type="text" className="form-control" placeholder="Enter your name" />;
   ```

4. **Expressions as Children**: JSX supports using JavaScript expressions as children inside elements, enabling conditional rendering or iteration over arrays.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const listItems = numbers.map((number) => <li key={number}>{number}</li>);
   const element = <ul>{listItems}</ul>;
   ```

5. **Components**: JSX allows you to define custom components and use them within other components or JSX elements.

   ```javascript
   function Greeting(props) {
       return <h1>Hello, {props.name}</h1>;
   }

   const element = <Greeting name="Alice" />;
   ```

### JSX and React.createElement

Under the hood, JSX is transformed into calls to `React.createElement` by Babel (or TypeScript) during the build process. For example, the JSX code:

```javascript
const element = <h1>Hello, {name}</h1>;
```

gets transformed into:

```javascript
const element = React.createElement('h1', null, 'Hello, ', name);
```

This transformation makes it possible for React to understand and render JSX code into the actual DOM elements.

### JSX Constraints:

1. **Single Root Element**: JSX expressions must have a single root element. This means wrapping multiple elements in a parent element like `<div>` or `<Fragment>` when needed.

   ```javascript
   const element = (
       <div>
           <h1>Title</h1>
           <p>Content</p>
       </div>
   );
   ```

2. **JavaScript Keywords**: JSX treats certain keywords like `class` differently due to JavaScript's reserved words. In JSX, use `className` for the `class` attribute.

   ```javascript
   const element = <div className="container">Hello, world!</div>;
   ```

### Benefits of JSX:

- **Readable and Concise**: Combines HTML-like syntax with JavaScript, improving readability and reducing the verbosity of traditional DOM manipulation.
  
- **Full Power of JavaScript**: Allows the use of JavaScript expressions, variables, functions, and other language features directly within markup, facilitating dynamic UI rendering.
  
- **Type Safety**: JSX can be statically analyzed for type errors (especially with TypeScript), providing improved development tooling and catching errors early in the development process. 
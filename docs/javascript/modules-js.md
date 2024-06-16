---
id: modules-in-js
title: Modules in JavaScript
sidebar_label: Modules
sidebar_position: 37
tags:
  [
    JavaScript,
    Modules,
    ES6,
    ES2015,
    ES6 Features,
    ES2015 Features,
    ES6 Tutorials,
    ES2015 Tutorials,
    ES6 Tutorial,
    ES2015 Tutorial,
    ES6 Modules,
    ES2015 Modules,
    Modules in JavaScript,
    Modules in ES6,
    Modules in ES2015,
    JavaScript Modules,
    ES6 Modules Tutorial,
    ES2015 Modules Tutorial,
    Modules Tutorial,
    Modules in JavaScript Tutorial,
    Modules in ES6 Tutorial,
    Modules in ES2015 Tutorial,
    JavaScript Modules Tutorial,
    ES6 Modules Example,
    ES2015 Modules Example,
    Modules Example,
    Modules in JavaScript Example,
    Modules in ES6 Example,
    Modules in ES2015 Example,
    JavaScript Modules Example,
    ES6 Modules Syntax,
    ES2015 Modules Syntax,
    Modules Syntax,
    Modules in JavaScript Syntax,
    Modules in ES6 Syntax,
    Modules in ES2015 Syntax,
    JavaScript Modules Syntax,
    ES6 Modules Syntax Example,
    ES2015 Modules Syntax Example,
    Modules Syntax Example,
    Modules in JavaScript Syntax Example,
    Modules in ES6 Syntax Example,
    Modules in ES2015 Syntax Example,
    JavaScript Modules Syntax Example,
    ES6 Modules Syntax Tutorial,
    ES2015 Modules Syntax Tutorial,
    Modules Syntax Tutorial,
    Modules in JavaScript Syntax Tutorial,
    Modules in ES6 Syntax Tutorial,
    Modules in ES2015 Syntax Tutorial,
    JavaScript Modules Syntax Tutorial,
    ES6 Modules Syntax Example Tutorial,
    ES2015 Modules Syntax Example Tutorial,
    Modules Syntax Example Tutorial,
    Modules in JavaScript Syntax Example Tutorial,
    Modules in ES6 Syntax Example Tutorial,
    Modules in ES2015 Syntax Example Tutorial,
    JavaScript Modules Syntax Example Tutorial,
  ]
description: "In this tutorial, you will learn about modules in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to organize your code into reusable pieces."
---

In JavaScript, modules are a new feature introduced in <mark>ES6 (ES2015)</mark> that allows you to organize your code into reusable pieces. Modules are a way to split your code into separate files and import/export the parts you need.

In this tutorial, you will learn about modules in JavaScript with the help of examples.

## Modules in JavaScript

The syntax for importing and exporting modules in JavaScript is as follows:

<Tabs
defaultValue="module1"
values={[
{label: 'module1.js', value: 'module1'},
{label: 'module2.js', value: 'module2'},
{label: 'module3.js', value: 'module3'},
{label: 'app.js', value: 'app'},
]}>
<TabItem value="module1">

    ```js
    // Exporting a variable
    export const PI = 3.14159;
    ```

</TabItem>
<TabItem value="module2">

    ```js
    // Exporting a function
    export function add(a, b) {
        return a + b;
    }
    ```

</TabItem>
<TabItem value="module3">

    ```js
    // Exporting a class
    export class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    }
    ```

</TabItem>
<TabItem value="app">

```js
// Importing a variable
import { PI } from "./module1.js";

// Importing a function
import { add } from "./module2.js";

// Importing a class
import { Person } from "./module3.js";

console.log(PI); // Output: 3.14159

console.log(add(5, 3)); // Output: 8

const john = new Person("John", 30);

console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.
```

</TabItem>
</Tabs>


In the example above, we have three modules: `module1.js`, `module2.js`, and `module3.js`, each exporting a variable, a function, and a class, respectively. The `app.js` file imports these modules and uses the exported values.

Here's a breakdown of the example:

1. `module1.js` exports a variable `PI` with the value `3.14159`.
2. `module2.js` exports a function `add` that takes two parameters and returns their sum.
3. `module3.js` exports a class `Person` with a constructor that initializes the `name` and `age` properties and a `greet` method that returns a greeting message.
4. `app.js` imports the exported values from the modules and uses them in the code.

When you run `app.js`, you will see the following output:

```bash title="Output"
3.14159
8
Hello, my name is John and I am 30 years old.
```

This is how you can use modules in JavaScript to organize your code into reusable pieces.

## Default Exports

In addition to named exports, you can also use default exports in JavaScript modules. A default export is a single value that is exported from a module and can be imported without using curly braces `{}`.

Here's an example of using default exports in JavaScript modules:

<Tabs 
defaultValue="module1"
values={[
{label: 'module1.js', value: 'module1'},
{label: 'module2.js', value: 'module2'},
{label: 'app.js', value: 'app'},
]}

>
<TabItem value="module1">

```js
// Default export
const PI = 3.14159;

export default PI;
```

</TabItem>

<TabItem value="module2">

```js
// Default export
export default function add(a, b) {
    return a + b;
}
```

</TabItem>

<TabItem value="app">

```js
// Importing a default export
import PI from "./module1.js";

// Importing a default export
import add from "./module2.js";

console.log(PI); // Output: 3.14159

console.log(add(5, 3)); // Output: 8
```

</TabItem>

</Tabs>

In this example, we have two modules: `module1.js` and `module2.js`, each exporting a single value using default exports. The `app.js` file imports these default exports without using curly braces `{}`.

When you run `app.js`, you will see the following output:

```bash title="Output"
3.14159
8
```

This is how you can use default exports in JavaScript modules.

## Multiple Exports and Imports in a Single Statement 

You can also export and import multiple values in a single statement using the `export` and `import` keywords.

Here's an example of exporting and importing multiple values in a single statement:

<Tabs
defaultValue="module1"
values={[
{label: 'module1.js', value: 'module1'},
{label: 'module2.js', value: 'module2'},
{label: 'app.js', value: 'app'},
]}
>

<TabItem value="module1">

```js
// Exporting multiple values
export const PI = 3.14159;
export const E = 2.71828;
```

</TabItem>

<TabItem value="module2">

```js
// Exporting multiple values
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}
```

</TabItem>

<TabItem value="app">

```js
// Importing multiple values
import { PI, E } from "./module1.js";

// Importing multiple values
import { add, subtract } from "./module2.js";

console.log(PI); // Output: 3.14159
console.log(E); // Output: 2.71828

console.log(add(5, 3)); // Output: 8

console.log(subtract(5, 3)); // Output: 2
```

</TabItem>

</Tabs>


In this example, we have two modules: `module1.js` and `module2.js`, each exporting multiple values using the `export` keyword. The `app.js` file imports these multiple values in a single statement using the `import` keyword.

When you run `app.js`, you will see the following output:

```bash title="Output"
3.14159
2.71828
8
2
```

This is how you can export and import multiple values in a single statement in JavaScript modules.

:::info 📝 Note

You can also use the `export * from 'module'` syntax to re-export all named exports from another module. This can be useful when you want to aggregate exports from multiple modules into a single module.

For example:

<Tabs
defaultValue="module1"
values={[
{label: 'module1.js', value: 'module1'},
{label: 'module2.js', value: 'module2'},
{label: 'module.js', value: 'module'},
{label: 'app.js', value: 'app'},
]}
>

<TabItem value="module1">

```js
// Exporting a variable
export const PI = 3.14159;
```

</TabItem>

<TabItem value="module2">

```js
// Exporting a variable
export const E = 2.71828;
```

</TabItem>

<TabItem value="module">

```js
// Re-exporting named exports
export * from "./module1.js";
export * from "./module2.js";
```

</TabItem>

<TabItem value="app">

```js
// Importing re-exported values
import { PI, E } from "./module.js";

console.log(PI); // Output: 3.14159
console.log(E); // Output: 2.71828
```

</TabItem>
</Tabs>

In this example, we have two modules `module1.js` and `module2.js`, each exporting a variable. The `module.js` file re-exports the named exports from `module1.js` and `module2.js`. The `app.js` file imports the re-exported values from `module.js`.

When you run `app.js`, you will see the following output:

```bash title="Output"
3.14159
2.71828
```

This is how you can re-export named exports from other modules in JavaScript.

:::

:::important

When using modules in JavaScript, you need to be aware of the module system you are using. Common module systems include CommonJS, AMD, and ES6 modules. ES6 modules are the standard module system in modern JavaScript applications.

If you are using a module in html file, you can use the `type="module"` attribute in the `<script>` tag to indicate that the script is a module.

For example:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module Example</title>
    <script type="module" src="app.js"></script>
</head>
<body>
    <!-- Your HTML content here -->
</body>
</html>
```

In this example, the `type="module"` attribute in the `<script>` tag indicates that the `app.js` script is a module.

:::

## Conclusion

Modules in JavaScript provide a way to organize your code into reusable pieces. You can export and import variables, functions, classes, and other values between modules to create a modular and maintainable codebase.
---
id: hoisting-in-javascript
title: Hoisting in JavaScript
sidebar_label: Hoisting
sidebar_position: 2
tags: [javascript, hoisting, variable hoisting]
description: Learn about hoisting in JavaScript and how it affects variable declarations and function definitions.
---

<AdsComponent />

Hoisting is a unique feature of JavaScript that allows you to access variables and functions before they are declared in your code. This behavior can be surprising if you're not familiar with it, so understanding how hoisting works is essential for writing reliable JavaScript code.

In this tutorial, we'll explore what hoisting is, how it works in JavaScript, and how it affects variable declarations and function definitions.

## What Is Hoisting?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can access variables and functions before they are declared in your code, as if they had been "hoisted" to the top of the scope.

It's important to note that only the declarations are hoisted, not the initializations. This means that the variable or function is available for use, but its value is `undefined` until the assignment is encountered in the code.

## How Does Hoisting Work?

### Hoisting with Variables

When it comes to variables, hoisting behaves differently depending on whether the variable is declared using `var`, `let`, or `const`.

#### 1. Variables Declared with `var`

Variables declared with `var` are hoisted to the top of their containing function or global scope. This means that you can access the variable before it is declared in the code, but its value will be `undefined` until it is assigned a value.

**Example:**

```javascript title="app.js"
console.log(myVar); // Output: undefined
var myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!
```

In this example, the variable `myVar` is hoisted to the top of the scope, so the first `console.log` statement outputs `undefined`. The value of `myVar` is assigned later in the code, so the second `console.log` statement outputs the actual value of the variable.

#### 2. Variables Declared with `let` and `const`

Variables declared with `let` and `const` are also hoisted to the top of their containing block, but they are not initialized until the actual declaration is encountered in the code. This means that you cannot access the variable before it is declared.

:::note Note
Variables declared with `let` and `const` are in a "temporal dead zone" **(TDZ)** until they are initialized. Accessing them before the declaration results in a `ReferenceError`.
:::

**Example with `let`:**

```javascript title="app.js"
console.log(myVar); // Throws a ReferenceError
let myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!
```

**Example with `const`:**

```javascript title="app.js"
console.log(myVar); // Throws a ReferenceError
const myVar = "Hello, World!";
console.log(myVar); // Output: Hello, World!
```

In both examples, trying to access the variable `myVar` before its declaration results in a `ReferenceError`. This is because variables declared with `let` and `const` are not initialized until the actual declaration is encountered in the code.

### Hoisting with Functions

Hoisting behaves differently for function declarations and function expressions.

#### 1. Function Declarations

Function declarations are hoisted to the top of their containing scope, similar to variables declared with `var`. This means that you can call the function before it is declared in the code.

**Example:**

```javascript title="app.js"
sayHello(); // Output: Hello, World!

function sayHello() {
  console.log("Hello, World!");
}
```

In this example, the function `sayHello` is hoisted to the top of the scope, so you can call it before its actual declaration in the code.

#### 2. Function Expressions

Function expressions are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.

**Example:**

```javascript title="app.js"
sayHello(); // Throws a TypeError

var sayHello = function () {
  console.log("Hello, World!");
};
```

In this example, the variable `sayHello` is hoisted to the top of the scope, but the function assignment is not. Trying to call `sayHello` before the function assignment results in a `TypeError`.

### Summary of Hoisting Behavior

Here's a summary of how hoisting works in JavaScript:

- Variables declared with `var` are hoisted to the top of their containing function or global scope. They are accessible before they are declared, but their value is `undefined` until the assignment is encountered.
- Variables declared with `let` and `const` are hoisted to the top of their containing block but are not initialized until the actual declaration is encountered. Accessing them before the declaration results in a `ReferenceError`. They are in the "temporal dead zone" until they are initialized.
- Function declarations are hoisted to the top of their containing scope, so you can call them before they are declared in the code.
- Function expressions are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.
- Hoisting can lead to unexpected behavior if you're not aware of how it works. It's important to understand hoisting to write reliable and predictable JavaScript code.

By understanding how hoisting works, you can avoid common pitfalls and write more robust JavaScript code.

:::tip Tip

To avoid confusion and potential issues related to hoisting, it's a good practice to declare your variables and functions at the beginning of their containing scope. This makes your code more readable and predictable.

**Remember:**

- Use `let` and `const` for variable declarations to avoid hoisting-related bugs.
- Declare functions before calling them to ensure they are hoisted correctly.
- Be mindful of the TDZ when using `let` and `const` to prevent `ReferenceError` issues.
- Write clean and readable code by declaring variables and functions at the beginning of their containing scope.
- Take advantage of function declaration hoisting to organize your code in a way that is logical and easy to follow.

Hoisting can feel like magic, but understanding how it works will help you write better JavaScript code.
:::

## Conclusion

Hoisting is a unique feature of JavaScript that allows you to access variables and functions before they are declared in your code. By hoisting declarations to the top of their containing scope, JavaScript enables you to write code that might seem out of order but still works as expected.

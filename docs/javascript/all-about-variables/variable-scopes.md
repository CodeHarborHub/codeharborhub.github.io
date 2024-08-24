---
id: variable-scopes
title: Variable Scopes in JavaScript
sidebar_label: Variable Scopes
sidebar_position: 4
tags: [javascript, variable, scope, global, local, block, function]
description: Learn about the different scopes of variables in JavaScript.
---

<AdsComponent />

<br />

Understanding variable scope in JavaScript is essential for writing effective and bug-free code. The scope of a variable determines where in your code a particular variable can be accessed or modified. Knowing how scopes work will help you prevent errors and make your code more predictable and maintainable.

In this tutorial, we'll explore the different types of scopes in JavaScript, how they work, and how you can use them to control the accessibility of your variables.

## What Is Scope?

In JavaScript, scope refers to the current context of code execution. It determines which variables and functions are accessible at a given point in your code. Think of scope as the set of rules that govern where and how variables and functions can be accessed or referenced.

:::info Imagination:
Imagine you’re in a house with several rooms. Some items (variables) are available in all rooms (global scope), while others are only accessible in specific rooms (local scope). The doors between the rooms represent the boundaries of scope, and crossing them determines whether you can access a particular item.
:::

## Types of Scopes in JavaScript

JavaScript primarily has three types of scopes:

1. [Global Scope](#1-global-scope)
2. [Local Scope (Function Scope)](#2-local-scope-function-scope)
3. [Block Scope](#3-block-scope)

Let's look at each of these scopes in detail.

### 1. Global Scope

The global scope is the outermost scope in JavaScript. Variables declared outside of any function or block have global scope. These variables are accessible from anywhere in your code, regardless of the context.

Here's an example of a variable declared in the global scope:

```javascript title="app.js" showLineNumbers
let globalVar = "I am a global variable";

function accessGlobalVar() {
  console.log(globalVar); // Accessible here
}

accessGlobalVar(); // Outputs: I am a global variable

console.log(globalVar); // Accessible here too, Outputs: I am a global variable
```

In the example above, the `globalVar` variable is declared outside any function, making it a global variable. It can be accessed from both the `accessGlobalVar` function and the global scope.

Global variables are accessible from any part of your code, but they can also lead to naming conflicts and make your code harder to maintain. It's generally recommended to avoid using global variables unless necessary.

### 2. Local Scope (Function Scope)

Local scope refers to the scope within a function. Variables declared inside a function are local to that function and are not accessible outside of it. This is known as function scope.

Here's an example of a variable declared in a local scope:

```javascript title="app.js" showLineNumbers
function myFunction() {
  let localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

myFunction(); // Outputs: I am a local variable

console.log(localVar); // Error: localVar is not defined
```

`localVar` is declared inside the `myFunction` function, making it a local variable. It can only be accessed within the function and not outside of it. Attempting to access `localVar` outside the function will result in a `ReferenceError`.

Local scope helps prevent naming conflicts and allows you to encapsulate variables within specific functions, making your code more modular and easier to manage.

### 3. Block Scope

Block scope refers to the scope within a block of code enclosed by curly braces `{}`. Blocks can be found within functions, loops, conditional statements, and other code structures. Variables declared with `let` and `const` inside a block are only accessible within that block.

Here's an example of a variable declared in a block scope:

```javascript title="app.js" showLineNumbers
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined
```

In the example above, `blockVar` is declared inside an `if` block, making it a block-scoped variable. It can only be accessed within the block where it's defined. Attempting to access `blockVar` outside the block will result in a `ReferenceError`.

Block scope helps you control the visibility and lifetime of variables within specific code blocks, reducing the chances of unintended side effects and making your code more predictable.

<AdsComponent />

<br />

## Shadowing and Variable Scope

Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. In such cases, the inner variable "shadows" the outer variable, making the outer variable inaccessible within the inner scope.

Here's an example of variable shadowing:

```javascript title="app.js" showLineNumbers
let name = "Global Name";

function displayName() {
  let name = "Local Name"; // Shadows the global variable
  console.log(name); // Outputs: Local Name
}

displayName();

console.log(name); // Outputs: Global Name
```

`name` is declared as a global variable, and another variable with the same name is declared inside the `displayName` function. The inner `name` variable shadows the global `name` variable within the function, and the global variable remains unaffected.

Shadowing can lead to confusion and bugs if not used carefully. It's generally recommended to avoid shadowing variables with the same name to maintain code clarity and prevent unexpected behavior.

## The `var` Keyword and Function Scope

Before the introduction of `let` and `const` in ES6, JavaScript used the `var` keyword to declare variables. Variables declared with `var` have function scope rather than block scope. This means that `var` variables are accessible throughout the function in which they are declared, regardless of block boundaries.

Here's an example illustrating function scope with `var`:

```javascript title="app.js" showLineNumbers
function myFunction() {
  if (true) {
    var varVariable = "I am a var variable";
  }

  console.log(varVariable); // Accessible here
}

myFunction(); // Outputs: I am a var variable

console.log(varVariable); // Outputs: I am a var variable
```

In the example above, `varVariable` is declared inside an `if` block but is still accessible outside the block due to function scope. This behavior can lead to unexpected results and make it harder to reason about your code.

It's generally recommended to use `let` and `const` instead of `var` to avoid issues related to function scope and improve code readability and maintainability.

## The `let` and `const` Keywords and Block Scope

The `let` and `const` keywords introduced in ES6 provide block scope for variables, making them more predictable and easier to manage. Variables declared with `let` and `const` are only accessible within the block in which they are defined, helping to prevent unintended side effects and naming conflicts.

Here's an example illustrating block scope with `let`:

```javascript title="app.js" showLineNumbers
if (true) {
  let letVariable = "I am a let variable";
  const constVariable = "I am a const variable";

  console.log(letVariable); // Accessible here
  console.log(constVariable); // Accessible here
}

console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined
```

In the example above, `letVariable` and `constVariable` are declared inside an `if` block and are only accessible within that block. Attempting to access them outside the block will result in a `ReferenceError`.

Using `let` and `const` for variable declarations helps you write more robust and maintainable code by limiting the scope of variables to specific blocks, reducing the chances of bugs and making your code easier to understand.

## Conclusion

Understanding variable scopes in JavaScript is crucial for writing clean, maintainable code. By knowing how global, local, and block scopes work, you can control the visibility and accessibility of variables in your code, prevent naming conflicts, and reduce the chances of bugs.
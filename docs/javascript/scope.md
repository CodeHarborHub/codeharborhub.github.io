---
id: scopes-in-javascript
title: Scopes in JavaScript
sidebar_label: Scopes
sidebar_position: 32
tags: [JavaScript, Scopes, Global Scope, Local Scope, Function Scope, Block Scope, Lexical Scope, Closures, Hoisting, Temporal Dead Zone, Global Object, Strict Mode, Module Scope]
description: "In this tutorial, we will learn about scopes in JavaScript. A scope is a region of a program where a variable is defined and can be accessed. We will see the different types of scopes in JavaScript and how they work."
---

In JavaScript, a scope is a region of a program where a variable is defined and can be accessed. JavaScript has three types of scopes:

1. **Global Scope**: The global scope is the outermost scope in JavaScript. Variables declared outside of any function or block have global scope. Global variables can be accessed from any part of the program.
2. **Local Scope (Function Scope)**: The local scope is the innermost scope in JavaScript. Variables declared inside a function have local scope. Local variables can only be accessed from within the function in which they are declared. Each function has its own local scope. When a function is called, a new local scope is created. When the function returns, the local scope is destroyed. Local Scope is also known as Function Scope.
3. **Block Scope**: The block scope is the scope of a block of code enclosed in curly braces `{}`. Variables declared inside a block have block scope. Block scope is introduced in ECMAScript 6 (ES6) using the `let` and `const` keywords. Block scope is not available in ECMAScript 5 (ES5) and earlier versions.

## Global Scope

The global scope is the outermost scope in JavaScript. Variables declared outside of any function or block have global scope. Global variables can be accessed from any part of the program. For example:

```javascript title="app.js"
let name = "Ajay Dhangar"; // Global variable

function greet() {
    console.log("Hello, " + name); // Accessing global variable
}

greet(); // Output: Hello, Ajay Dhangar
```

In the above example, the variable `name` is declared outside of any function, so it has global scope. The `greet` function can access the `name` variable.

## Local Scope (Function Scope)

The local scope is the innermost scope in JavaScript. Variables declared inside a function have local scope. Local variables can only be accessed from within the function in which they are declared. Each function has its own local scope. When a function is called, a new local scope is created. When the function returns, the local scope is destroyed. Local Scope is also known as Function Scope. For example:

```javascript title="app.js"
function greet() {
    let message = "Hello, World!"; // Local variable
    console.log(message); // Accessing local variable
}

greet(); // Output: Hello, World!
console.log(message); // ReferenceError: message is not defined
```

In the above example, the variable `message` is declared inside the `greet` function, so it has local scope. The `greet` function can access the `message` variable, but it cannot be accessed outside of the function.

## Block Scope

The block scope is the scope of a block of code enclosed in curly braces `{}`. Variables declared inside a block have block scope. Block scope is introduced in ECMAScript 6 (ES6) using the `let` and `const` keywords. Block scope is not available in ECMAScript 5 (ES5) and earlier versions. For example:

```javascript title="app.js"
if (true) {
    let x = 10; // Block-scoped variable
    console.log(x); // Accessing block-scoped variable
}

console.log(x); // ReferenceError: x is not defined
```

In the above example, the variable `x` is declared inside the block of code, so it has block scope. The `x` variable can only be accessed within the block in which it is declared. It cannot be accessed outside of the block.

## Lexical Scope

Lexical scope is a scope in which a variable is defined at the time of writing the code. JavaScript uses lexical scope to resolve variable names. When a variable is referenced, JavaScript looks up the variable in the scope in which it was defined. If the variable is not found in the current scope, JavaScript looks up the variable in the outer scope. This process continues until the variable is found or the global scope is reached.

Here is an example of lexical scope:

```javascript title="app.js"
let name = "Ajay Dhangar"; // Global variable

function greet() {
    let message = "Hello, " + name; // Accessing global variable
    console.log(message);
}

greet(); // Output: Hello, Ajay Dhangar
```

In the above example, the `greet` function can access the `name` variable, which is defined in the global scope. This is an example of lexical scope.

:::info 📚 Learn More:

**Closures:**  In JavaScript, a closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are used to create private variables and to encapsulate functionality. Lexical scope is an important concept in understanding closures.

Example of a closure with lexical scope for better understanding:

```javascript title="app.js"
function outer() {
    let x = 10; // Outer function variable
    function inner() {
        console.log(x); // Accessing outer function variable
    }
    return inner;
}

let innerFunction = outer();
innerFunction(); // Output: 10
```

In this example, the `inner` function has access to the `x` variable, which is defined in the `outer` function. This is an example of a closure with lexical scope. The `inner` function has access to the `x` variable even after the `outer` function has returned.

In the above example, the lexical scope of the `inner` function includes the scope of the `outer` function, which is why the `inner` function can access the `x` variable. This is an example of a closure with lexical scope.

**Block Scope in ES6:**  In ECMAScript 6 (ES6), the `let` and `const` keywords are introduced to declare block-scoped variables. Block scope is not available in ECMAScript 5 (ES5) and earlier versions.

**Hoisting:**  In JavaScript, variable declarations are hoisted to the top of their scope. This means that you can access a variable before it is declared. However, the value of the variable is not hoisted. Only the declaration is hoisted.

**Temporal Dead Zone (TDZ):**  In ECMAScript 6 (ES6), the `let` and `const` variables are hoisted to the top of their scope, but they are not initialized. This period between the creation of the variable and its initialization is called the Temporal Dead Zone (TDZ). If you try to access a `let` or `const` variable before it is initialized, you will get a ReferenceError.

**Global Object:**  In JavaScript, the global object is the object that holds global variables and functions. In a web browser, the global object is the `window` object. In Node.js, the global object is the `global` object.

**Strict Mode:**  In JavaScript, strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode makes it easier to write secure JavaScript code by catching common mistakes and preventing unsafe features from running. Strict mode also changes the behavior of the `this` keyword and disallows the use of undeclared variables.

**Module Scope:**  In ECMAScript 6 (ES6), JavaScript introduces the concept of modules. A module is a file that contains JavaScript code. Each module has its own scope, and the variables and functions defined in a module are not accessible outside of the module unless they are explicitly exported.

:::


## Scope Chain 

The scope chain is the order in which JavaScript resolves variable names. When a variable is referenced, JavaScript looks up the variable in the scope in which it was defined. If the variable is not found in the current scope, JavaScript looks up the variable in the outer scope. This process continues until the variable is found or the global scope is reached. The scope chain is determined by the lexical scope of the code.

Here is an example of the scope chain:

```javascript title="app.js"
let name = "Ajay Dhangar"; // Global variable

function greet() {
    let message = "Hello, " + name; // Accessing global variable
    console.log(message);
}

greet(); // Output: Hello, Ajay Dhangar
```

In the above example, the `greet` function can access the `name` variable, which is defined in the global scope. This is an example of the scope chain.




## Conclusion

In this tutorial, we learned about scopes in JavaScript. A scope is a region of a program where a variable is defined and can be accessed. JavaScript has three types of scopes: global scope, local scope (function scope), and block scope. We also learned about lexical scope, which is used by JavaScript to resolve variable names.

---
id: const-in-javascript
title: Const Keyword in JavaScript
sidebar_label: Const Keyword
sidebar_position: 9
tags: [JavaScript, const, ES6, Variables, Block Scope, Hoisting, Redeclaration, Best Practices, Comparison, let, var, Constants, ECMAScript 6, ES6, ES2015, Syntax, Example, Block Scope, Reassignment, Best Practices, Comparison with let, Comparison with var, Hoisting, Summary]
description: What is the const keyword in JavaScript and how to use it.
---

In JavaScript, the `const` keyword is used to declare a block-scoped variable that cannot be reassigned. It was introduced in <mark>ECMAScript 6 (ES6)</mark> and is the preferred way to declare constants in modern JavaScript.

> ***ES6 (ECMAScript 2015) is a major update to JavaScript that adds new syntax and features to the language. It was officially released in June 2015.***

## Syntax

The syntax to declare a constant using the `const` keyword is:

```js title="Syntax"
const variableName = value;
```

Here, `variableName` is the name of the constant and `value` is the value assigned to the constant.

## Example

Let's see an example to understand how to use the `const` keyword in JavaScript:

```js title="Example"
const PI = 3.14159;
console.log(PI); // Output: 3.14159
```

In the above example, we have declared a constant `PI` using the `const` keyword and assigned it a value `3.14159`. We then printed the value of the constant using `console.log()`.

## Block Scope

The `const` keyword is block-scoped, which means that the constant declared using `const` is only available within the block in which it is defined.

```js title="Block Scope"
{
  const x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

In the above example, the constant `x` is only available within the block in which it is defined. If we try to access it outside the block, it will result in a `ReferenceError`.

## Reassignment

The `const` keyword does not allow reassignment of the same constant once it has been initialized.

```js title="Reassignment"
const x = 10;
x = 20; // Uncaught TypeError: Assignment to constant variable.
```

In the above example, we are trying to reassign the value of the constant `x`, which results in a `TypeError`.

## Best Practices

- Use the `const` keyword for values that are not intended to be reassigned.
- Use descriptive variable names to improve code readability.
- Use uppercase letters and underscores to name constants (e.g., `MAX_LENGTH`, `PI`, `TAX_RATE`).
- Avoid using `const` for complex objects or arrays, as it only prevents reassignment of the variable itself, not its properties or elements.
- Use `let` or `var` for values that need to be reassigned.
- Use `const` for values that are known at compile time and are not expected to change.
- Use `const` for function expressions, arrow functions, and classes to prevent accidental reassignment.
- Use `const` for values that are shared across multiple files or modules.
- Use `const` for values that are used as configuration settings or constants in your application.
- Use `const` for values that are used as default parameters in functions.

## Comparison with let

The `const` keyword is similar to the `let` keyword in that it is block-scoped and cannot be hoisted. However, the main difference is that a variable declared using `const` cannot be reassigned, whereas a variable declared using `let` can be reassigned.

```js title="Comparison with let"
const x = 10;
x = 20; // Uncaught TypeError: Assignment to constant variable

let y = 10;
y = 20; // No error
```

In the above example, we are trying to reassign the value of the constant `x`, which results in a `TypeError`. However, we can reassign the value of the variable `y` without any error.

## Comparison with var

The `const` keyword differs from the `var` keyword in terms of block scope, reassignment, and hoisting.

### Block Scope

Variables declared using the `var` keyword are function-scoped or globally-scoped, whereas variables declared using the `const` keyword are block-scoped.

```js title="Block Scope"
// var
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10
}

// const

{
  const y = 10;
  console.log(y); // Output: 10
}

console.log(y); // Uncaught ReferenceError: y is not defined
```

In the above example, the variable `x` declared using the `var` keyword is available outside the block in which it is defined, whereas the constant `y` declared using the `const` keyword is not available outside the block.

### Redeclaration

The `var` keyword allows redeclaration of the same variable within the same block scope, whereas the `const` keyword does not allow redeclaration of the same constant within the same block scope.

```js title="Redeclaration"
var x = 10;
var x = 20; // No error

const y = 10;
const y = 20; // Uncaught SyntaxError: Identifier 'y' has already been declared
```

In the above example, we are trying to redeclare the variable `x` using the `var` keyword, which does not result in an error. However, we are trying to redeclare the constant `y` using the `const` keyword, which results in a `SyntaxError`.

### Hoisting

Variables declared using the `var` keyword are hoisted to the top of their function or global scope, whereas variables declared using the `const` keyword are not hoisted.

```js title="Hoisting"
console.log(x); // Output: undefined
var x = 10;

console.log(y); // Uncaught ReferenceError: y is not defined
const y = 10;
```

In the above example, the variable `x` declared using the `var` keyword is hoisted to the top of the global scope, whereas the constant `y` declared using the `const` keyword is not hoisted.

:::info 📝 Note
It is recommended to use the `const` keyword for values that are not intended to be reassigned and are known at compile time. This helps prevent accidental reassignment and improves code readability.
:::

## Summary

Constants are block-scoped variables that cannot be reassigned once they are initialized. The `const` keyword is used to declare constants in JavaScript and is the preferred way to declare constants in modern JavaScript. It is similar to the `let` keyword in terms of block scope and hoisting, but it differs in that it does not allow reassignment. It also differs from the `var` keyword in terms of block scope, redeclaration, and hoisting. It is recommended to use the `const` keyword for values that are not intended to be reassigned and are known at compile time.
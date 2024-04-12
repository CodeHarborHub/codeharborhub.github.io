---
id: let-in-javascript
title: Let Keyword in JavaScript
sidebar_label: Let Keyword
sidebar_position: 8
tags: [JavaScript, let, ES6, Variables, Block Scope, Hoisting, Redeclaration]
description: What is the let keyword in JavaScript and how to use it.
---

In JavaScript, the `let` keyword is used to declare a block-scoped variable. It was introduced in <mark>ECMAScript 6 (ES6)</mark> and is the preferred way to declare variables in modern JavaScript.

> ***ES6 (ECMAScript 2015) is a major update to JavaScript that adds new syntax and features to the language. It was officially released in June 2015.***

## Syntax

The syntax to declare a variable using the `let` keyword is:

```js title="Syntax"
let variableName = value;
```

Here, `variableName` is the name of the variable and `value` is the value assigned to the variable.

## Example

Let's see an example to understand how to use the `let` keyword in JavaScript:

```js title="Example"
let name = "John";
console.log(name); // Output: John
```

In the above example, we have declared a variable `name` using the `let` keyword and assigned it a value `"John"`. We then printed the value of the variable using `console.log()`.

## Block Scope

The `let` keyword is block-scoped, which means that the variable declared using `let` is only available within the block in which it is defined.

```js title="Block Scope"
{
  let x = 10;
  console.log(x); // Output: 10
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

In the above example, the variable `x` is only available within the block in which it is defined. If we try to access it outside the block, it will result in a `ReferenceError`.

## Redeclaration

The `let` keyword does not allow redeclaration of the same variable within the same block scope.

```js title="Redeclaration"
let x = 10;
let x = 20; // Uncaught SyntaxError: Identifier 'x' has already been declared
```

In the above example, we are trying to redeclare the variable `x` within the same block scope, which results in a `SyntaxError`.

## Hoisting

Variables declared using the `let` keyword are not hoisted to the top of their block. This means that you cannot access the variable before it is declared.

```js title="Hoisting"
console.log(x); // Uncaught ReferenceError: x is not defined
let x = 10;
```

In the above example, we are trying to access the variable `x` before it is declared, which results in a `ReferenceError`.

## Comparison with var

The `let` keyword differs from the `var` keyword in terms of block scope, redeclaration, and hoisting.

### Block Scope

Variables declared using the `var` keyword are function-scoped or globally-scoped, whereas variables declared using the `let` keyword are block-scoped.

```js title="Block Scope"
// var
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10
}

varExample();

// let
function letExample() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Uncaught ReferenceError: x is not defined
}

letExample();
```

In the above example, the variable `x` declared using the `var` keyword is available outside the block in which it is defined, whereas the variable `x` declared using the `let` keyword is not available outside the block.

:::info
A block is a set of statements enclosed in curly braces `{}`.
:::

## Conclusion

In this article, we learned about the `let` keyword in JavaScript and how to use it to declare block-scoped variables. We also saw how the `let` keyword differs from the `var` keyword in terms of block scope, redeclaration, and hoisting.
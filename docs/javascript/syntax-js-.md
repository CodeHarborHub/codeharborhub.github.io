---
id: syntax-of-js
title: Syntax of JavaScript
sidebar_label: Syntax of JavaScript
sidebar_position: 5
tags: [JavaScript, Syntax of JavaScript, syntax of js, syntax of JavaScript, JavaScript syntax]
description: Write a JavaScript program using the syntax of JavaScript. Learn about the syntax of JavaScript, how to create a JavaScript file, how to create variables, how to use variables, how to create and use functions, JavaScript values, operators, literals, keywords, comments, statements, expressions, identifiers, naming conventions, case sensitivity, and the JavaScript character set.
---

In this tutorial, you will learn about the syntax of JavaScript. The syntax of JavaScript is the set of rules that define how a JavaScript program will be written and interpreted. The syntax of JavaScript is similar to the syntax of other programming languages like C, C++, and Java.

## Hello, World! Program in JavaScript

Let's start with a simple "Hello, World!" program in JavaScript.

```js title="HelloWorld.js"
console.log("Hello, World!");
```

In the above program, we have used the `console.log()` method to print "Hello, World!" to the console.

## How to create a JavaScript file?

You can create a JavaScript file with a `.js` extension. For example, `HelloWorld.js`.

## How to create variables in JavaScript?

You can create variables in JavaScript using the `var`, `let`, or `const` keyword. For example,

```js title="variables.js"
var name = "Ajay";
let age = 23;
const PI = 3.14;
```

In the above program, we have created three variables `name`, `age`, and `PI` using the `var`, `let`, and `const` keyword respectively.

## How to use variables in JavaScript?

You can use variables in JavaScript to store and manipulate data. For example,

```js title="use-variables.js"
var name = "Ajay";
console.log(name); // Output: Ajay

let age = 23;

age = age + 1;

console.log(age); // Output: 24
```

In the above program, we have used the `name` and `age` variables to store and manipulate data.

## How to create and use functions in JavaScript?

You can create and use functions in JavaScript to perform a specific task. Functions is created using the `function` keyword. For example,

```js title="functions.js"
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!
```

In the above program, we have created a function `greet()` that prints "Hello, World!" to the console.

## JavaScript Values

JavaScript values are the data that is stored in variables. For example, `10`, `"Hello, World!"`, `true`, `false`, etc.

for example,

```js title="values.js"
var num = 10;
var name = "Ajay";
var isStudent = true;
```

## JavaScript Operators

JavaScript operators are used to perform operations on variables and values. For example, `+`, `-`, `*`, `/`, `==`, `!=`, `>`, `<`, etc.

For example,

```js title="operators.js"
var num1 = 10;
var num2 = 20;

var sum = num1 + num2;
console.log(sum); // Output: 30

var isGreater = num1 > num2;
console.log(isGreater); // Output: false
```

## JavaScript Literals

JavaScript literals are fixed values that are directly written in the code. For example, `10`, `"Hello, World!"`, `true`, `false`, etc.

For example,

```js title="literals.js"
console.log(10); // Output: 10
console.log("Hello, World!"); // Output: Hello, World!
console.log(true); // Output: true
```

## JavaScript Keywords

JavaScript keywords are the reserved words that have a special meaning in JavaScript. For example, `var`, `let`, `const`, `function`, `if`, `else`, `for`, `while`, etc.

For example,

```js title="keywords.js"
var name = "Ajay";
let age = 23;
const PI = 3.14;

if (age > 18) {
  console.log("You are an adult!");
} else {
  console.log("You are a child!");
}
```

## JavaScript Comments

JavaScript comments are used to explain the code and make it more readable. There are two types of comments in JavaScript: single-line comments and multi-line comments.

For example,

```js title="comments.js"

// This is a single-line comment

/*
This is a multi-line comment
It can span multiple lines
*/
```

## JavaScript Statements

JavaScript statements are the instructions that are executed by the browser. For example, variable declaration, conditional statement, loop statement, function statement, etc.

For example,

```js title="statements.js"
var name = "Ajay";
let age = 23;
const PI = 3.14;

if (age > 18) {
  console.log("You are an adult!");
} else {
  console.log("You are a child!");
}
```

In the above program, we have declared variables `name`, `age`, and `PI` using the `var`, `let`, and `const` keyword respectively. We have also used the `if...else` statement to check if the `age` is greater than `18`.

## JavaScript Expressions

JavaScript expressions are the combination of values, variables, and operators that are evaluated to produce a value. For example, `10 + 20`, `name + " is " + age + " years old"`, etc.

For example,

```js title="expressions.js"
var num1 = 10;
var num2 = 20;

var sum = num1 + num2;

var name = "Ajay";
let age = 23;

var message = name + " is " + age + " years old.";
```

In the above program, `num1 + num2` and `name + " is " + age + " years old"` are expressions.

## JavaScript Identifiers, Naming Conventions, and Case Sensitivity

JavaScript identifiers are the names given to variables, functions, labels, and objects. JavaScript identifiers are case-sensitive and can contain letters, digits, underscores, and dollar signs.

A JavaScript name must start with:

- A letter (A-Z or a-z)
- A dollar sign ($)
- Or an underscore (_)
- After the first letter, a JavaScript name can also contain digits (0-9).
- JavaScript names are case-sensitive.

For example,

```js title="identifiers.js"
var name = "Ajay";
let Age = 23;
const $currency = "USD";
const _PI = 3.14;
const isStudent = true;
const surname123 = "Dhangar";
```

In the above program, `name`, `Age`, `$currency`, `_PI`, `isStudent`, and `surname123` are identifiers.

## JavaScript Character Set

JavaScript uses the Unicode character set. JavaScript supports both ASCII and Unicode characters.

for example,

```js title="character-set.js"
var name = "Ajay";
var ₹ = "Rupee";
var こんにちは = "Hello";
```

In the above program, `name`, `₹`, and `こんにちは` are identifiers.

:::warning
- JavaScript identifiers should not start with a digit (0-9).
  for example,
  ```js title="invalid-identifiers.js"
    var 123name = "Ajay"; // Invalid
  ```
- JavaScript identifiers should not contain special characters except `$` and `_`.
  for example,
  ```js title="invalid-identifiers.js"
    var first-name = "Ajay"; // Invalid
  ```
- JavaScript identifiers should not be a JavaScript keyword.
    for example,
    ```js title="invalid-identifiers.js"
        var var = "Ajay"; // Invalid
    ```
:::

## Conclusion

In this tutorial, you have learned about the syntax of JavaScript. The syntax of JavaScript is the set of rules that define how a JavaScript program will be written and interpreted. The syntax of JavaScript is similar to the syntax of other programming languages like C, C++, and Java. You have also learned about the "Hello, World!" program, how to create a JavaScript file, how to create variables, how to use variables, how to create and use functions, JavaScript values, operators, literals, keywords, comments, statements, expressions, identifiers, naming conventions, case sensitivity, and the JavaScript character set.
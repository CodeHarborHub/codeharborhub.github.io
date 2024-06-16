---
id: satatement-in-js
title: Statement in JavaScript
sidebar_label: Statement in JavaScript
sidebar_position: 4
tags: [JavaScript, Statement in JavaScript, statement in js, statement in JavaScript, JavaScript statement]
description: Write statements in JavaScript to perform different actions. Learn about different types of statements in JavaScript such as declaration statement, assignment statement, conditional statement, loop statement, function statement, return statement, break statement, continue statement, try...catch statement, and throw statement.
---

In this tutorial, you will learn about the statement in JavaScript. A statement is a command that performs an action. JavaScript is a scripting language, and it is executed by the browser. JavaScript statements are executed by the browser in the order they are written.

## Types of Statements in JavaScript

There are different types of statements in JavaScript. Some of the most commonly used statements are:

### 1. Declaration Statement

A declaration statement is used to declare a variable in JavaScript. For example,

```js title="declaration-statement.js"
var name;
let age;
const PI = 3.14;
```

In the above program, we have declared three variables `name`, `age`, and `PI` using the `var`, `let`, and `const` keyword respectively.

### 2. Assignment Statement

An assignment statement is used to assign a value to a variable in JavaScript. For example,

```js title="assignment-statement.js"
var name = "Ajay";
let age = 23;
const PI = 3.14;
```

In the above program, we have assigned the value `"Ajay"` to the `name` variable, `23` to the `age` variable, and `3.14` to the `PI` variable.

### 3. Conditional Statement

A conditional statement is used to perform different actions based on different conditions. For example,

```js title="conditional-statement.js"
var age = 23;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
```

In the above program, we have used the `if...else` statement to check if the `age` is greater than or equal to `18`. If the condition is `true`, then it will print `"You are eligible to vote."`, otherwise it will print `"You are not eligible to vote."`.

### 4. Loop Statement

A loop statement is used to execute a block of code multiple times. For example,

```js title="loop-statement.js"
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
```

In the above program, we have used the `for` loop to print numbers from `1` to `5`.

### 5. Function Statement

A function statement is used to define a function in JavaScript. For example,

```js title="function-statement.js"
function greet() {
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!
```

In the above program, we have defined a function `greet()` that prints `"Hello, World!"` to the console.

### 6. Return Statement

A return statement is used to return a value from a function in JavaScript. For example,

```js title="return-statement.js"
function add(a, b) {
  return a + b;
}

var sum = add(5, 3);

console.log(sum); // Output: 8
```

In the above program, we have used the `return` statement to return the sum of `a` and `b` from the `add()` function.

### 7. Break Statement

A break statement is used to terminate a loop in JavaScript. For example,

```js title="break-statement.js"
for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
```

In the above program, we have used the `break` statement to terminate the loop when `i` is equal to `3`.

### 8. Continue Statement

A continue statement is used to skip the current iteration of a loop in JavaScript. For example,

```js title="continue-statement.js"

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

In the above program, we have used the `continue` statement to skip the iteration when `i` is equal to `3`.

### 9. Try...Catch Statement

A try...catch statement is used to handle errors in JavaScript. For example,

```js title="try-catch-statement.js"
try {
  var result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message); 
}
```

In the above program, we have used the `try...catch` statement to handle the division by zero error.

### 10. Throw Statement

A throw statement is used to throw an exception in JavaScript. For example,

```js title="throw-statement.js"
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  var result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("An error occurred: " + error.message); // Output: An error occurred: Division by zero
}
```

In the above program, we have used the `throw` statement to throw an exception when `b` is equal to `0`.

:::info
In JavaScript, a statement is terminated by a semicolon `;`. However, it is optional in most cases. But it is a good practice to use a semicolon to terminate a statement.
:::

## Conclusion

In this tutorial, you have learned about the statement in JavaScript. A statement is a command that performs an action. JavaScript statements are executed by the browser in the order they are written. There are different types of statements in JavaScript such as declaration statement, assignment statement, conditional statement, loop statement, function statement, return statement, break statement, continue statement, try...catch statement, and throw statement. You can use these statements to perform different actions in JavaScript.

I hope this tutorial will help you to understand the statement in JavaScript.

If you have any questions or feedback, feel free to reach out to me in the comment section below.
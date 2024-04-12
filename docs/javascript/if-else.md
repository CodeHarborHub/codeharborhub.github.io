---
id: if-else-in-javascript
title: If...Else in JavaScript
sidebar_label: If...Else
sidebar_position: 19
tags: [JavaScript, Conditional, Statement, If, Else, Ternary, Operator, Nested, Switch, Nullish, Coalescing, Operator, Decision, Making, Control, Flow, Conditional, Statements]
description: "In this tutorial, we will learn about the if...else statement in JavaScript. We will learn how to use the if...else statement to make decisions in JavaScript."
---

In JavaScript, the `if...else` statement is used to execute a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

## Syntax

The syntax of the `if...else` statement is as follows:

```js title="app.js"
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}
```

## Example

The following example demonstrates how to use the `if...else` statement to check if a number is even or odd:

```js title="app.js"
let num = 10;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}
```

In the above example, the `if...else` statement checks if the number `num` is even or odd and logs the result to the console.

## Nested if...else

You can also use the `if...else` statement inside another `if...else` statement. This is known as a nested `if...else` statement.

The following example demonstrates how to use a nested `if...else` statement to check if a number is positive, negative, or zero:

```js title="app.js"
let num = 10;

if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}
```

In the above example, the nested `if...else` statement checks if the number `num` is positive, negative, or zero and logs the result to the console.

## Ternary Operator

The `if...else` statement can also be written using the ternary operator (`? :`).

The following example demonstrates how to use the ternary operator to check if a number is even or odd:

```js title="app.js"
let num = 10;

const result = num % 2 === 0 ? `${num} is even` : `${num} is odd`;

console.log(result);
```

In the above example, the ternary operator checks if the number `num` is even or odd and assigns the result to the `result` variable.

:::info 📝 Note
<h2>Conditional Statements</h2>

The `if...else` statement is a conditional statement that executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

In JavaScript we have the following conditional statements:

- **`if` statement:** executes a block of code if a specified condition is true.
- **`if...else` statement:** executes a block of code if a specified condition is true and another block of code if the condition is false.
- **`if...else if...else` statement:** executes a block of code if a specified condition is true, another block of code if another condition is true, and another block of code if the conditions are false.
- **`switch` statement:** selects one of many code blocks to be executed.
- **`ternary operator`:** assigns a value to a variable based on a specified condition.
- **`nullish coalescing operator`:** returns the right-hand operand when the left-hand operand is `null` or `undefined`.

:::

## Conclusion

In this tutorial, we learned about the `if...else` statement in JavaScript. We learned how to use the `if...else` statement to make decisions in JavaScript. We also saw examples of how to use the `if...else` statement to check if a number is even or odd and to check if a number is positive, negative, or zero.
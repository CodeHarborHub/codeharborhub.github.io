---
id: while-loop-in-javascript
title: While Loop in JavaScript
sidebar_label: While Loop
sidebar_position: 24
tags:
  [JavaScript, While Loop, Loop, Iteration, Control, Flow, Iterative, Statements, Loops, Iteration, Iterating, Iterations]
description: "In this tutorial, we will learn about the while loop in JavaScript. We will learn how to use the while loop to execute a block of code repeatedly as long as a specified condition is true."
---

In JavaScript, the `while` loop is used to execute a block of code repeatedly as long as a specified condition is true. It is often used when you do not know the number of iterations you want to perform.

## Syntax

The syntax of the `while` loop is as follows:

```js title="app.js"
while (condition) {
  // code to be executed
}
```

- The `while` loop starts with the `while` keyword followed by parentheses.
- Inside the parentheses, you need to specify a `condition` that will be evaluated before each iteration.
- The code inside the loop will be executed as long as the `condition` is `true`.
- If the `condition` is `false`, the loop terminates, and the program continues with the next statement after the loop.
- The `condition` can be any expression that evaluates to a boolean value (`true` or `false`).
- If the `condition` is `true` initially, the code inside the loop will be executed at least once.
- If the `condition` is `false` initially, the code inside the loop will not be executed at all.
- It is important to ensure that the `condition` will eventually become `false` to avoid an infinite loop.
- An infinite loop occurs when the `condition` never becomes `false`, and the loop continues indefinitely.
- An infinite loop can crash the browser or the server and should be avoided.
- The `break` statement can be used to exit the `while` loop prematurely.
- The `continue` statement can be used to skip the rest of the code inside the loop and continue with the next iteration.
- The `while` loop should be used when you do not know the number of iterations you want to perform.
- The `for` loop is often used when you know the number of iterations you want to perform.
- The `do...while` loop is similar to the `while` loop but guarantees that the code inside the loop will be executed at least once.

## Example

The following example demonstrates how to use the `while` loop to print the numbers from 1 to 5:

```js title="app.js"
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

In this example, the `while` loop checks if `i` is less than or equal to `5`. If the condition is `true`, it executes the code inside the loop and increments `i` by `1`. This process continues until `i` is no longer less than or equal to `5`.

The output of the above example will be:

```plaintext title="Output"
1
2
3
4
5
```

In each iteration, the value of `i` is printed to the console.

## Infinite `while` Loop

It is important to ensure that the `condition` will eventually become `false` to avoid an infinite loop. An infinite loop occurs when the `condition` never becomes `false`, and the loop continues indefinitely.

If you omit the `condition` expression, the `while` loop will run indefinitely. This is known as an infinite loop. For example:

```js title="app.js"
while (true) {
  // code to be executed
}
```

In this example, the `while` loop will run indefinitely because the `condition` is `true`. This is an example of an infinite loop and should be avoided.

The `break` statement can be used to exit the `while` loop prematurely. For example:

```js title="app.js"
let i = 1;
while (true) {
  console.log(i);
  i++;
  if (i > 5) {
    break;
  }
}
```

In this example, the `while` loop will run indefinitely because the `condition` is `true`. However, the `break` statement is used to exit the loop when `i` is greater than `5`.

The output of the above example will be:

```plaintext title="Output"
1
2
3
4
5
```

In each iteration, the value of `i` is printed to the console. The `break` statement is used to exit the loop when `i` is greater than `5`.

## Nested `while` Loop

You can use a `while` loop inside another `while` loop. This is known as a nested `while` loop. For example:

```js title="app.js"
let i = 1;

while (i <= 3) {
  let j = 1;
  while (j <= 3) {
    console.log(`i = ${i}, j = ${j}`);
    j++;
  }
  i++;
}
```

In this example, the outer `while` loop runs three times, and the inner `while` loop runs three times for each iteration of the outer loop. The output of the above example will be:

```plaintext title="Output"
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
```

In each iteration of the outer loop, the inner loop runs three times, printing the value of `i` and `j` to the console.

:::info 📝 Note

**1.** You can use the `break` statement to exit a `while` loop prematurely. You can also use the `continue` statement to skip the current iteration and continue with the next iteration.

:::

## Summary

In this tutorial, we learned about the `while` loop in JavaScript. We learned how to use the `while` loop to execute a block of code repeatedly as long as a specified condition is `true`. We also learned about infinite `while` loops and nested `while` loops.
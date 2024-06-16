---
id: random-in-javascript
title: Random in JavaScript
sidebar_label: Random
sidebar_position: 18
tags: [JavaScript, Math, Object, Methods, Random, Number, Integer, Range, Floating-point, Generate, Math.random()]
description: "In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript."
---

In JavaScript, the `Math.random()` method is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive).

## Syntax

The syntax of the `Math.random()` method is as follows:

```js title="app.js"
Math.random()
```

## Example

The following example demonstrates how to use the `Math.random()` method to generate a random number between 0 and 1:

```js title="app.js"
console.log(Math.random()); // 0.12345678901234567
```

In the above example, the `Math.random()` method returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

## Generate Random Number within a Range

To generate a random number within a specific range, you can use the following formula:

```js title="app.js"
Math.floor(Math.random() * (max - min + 1)) + min
```

Where `min` is the minimum value and `max` is the maximum value.

The following example demonstrates how to generate a random number between 1 and 10:

```js title="app.js"
console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5
```

In the above example, the `Math.floor(Math.random() * (10 - 1 + 1)) + 1` expression generates a random number between 1 and 10.

## Generate Random Integer

To generate a random integer within a specific range, you can use the following formula:

```js title="app.js"
Math.floor(Math.random() * (max - min + 1)) + min
```

Where `min` is the minimum value and `max` is the maximum value.

The following example demonstrates how to generate a random integer between 1 and 10:

```js title="app.js"
console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5
```

In the above example, the `Math.floor(Math.random() * (10 - 1 + 1)) + 1` expression generates a random integer between 1 and 10.

## A property of Math.random() method

The `Math.random()` method returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

:::info 📝 Note
The `Math.random()` method returns a random number between 0 (inclusive) and 1 (exclusive).
:::

## Conclusion

In this tutorial, you learned how to use the `Math.random()` method to generate random numbers in JavaScript. You also learned how to generate random numbers within a specific range and how to generate random integers.
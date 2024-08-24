---
id: number
title: Numbers in JavaScript
sidebar_label: Number
sidebar_position: 3
tags: [javascript, data type, primitive type, number]
description: Learn about the number data type in JavaScript, how to create number values, and common operations with number values.
---

<AdsComponent />

<br />

Numbers are a crucial part of any programming language, and JavaScript is no exception. In JavaScript, numbers are used to perform calculations, manipulate data, and handle various operations. This tutorial will walk you through everything you need to know about numbers in JavaScript, from basic concepts to advanced usage.

## What Is a Number in JavaScript?

In JavaScript, the `number` data type represents numeric values, including integers and floating-point numbers. Numbers in JavaScript are used to perform arithmetic operations, store numerical data, and represent quantities in various contexts.

Here are some key points about numbers in JavaScript:

- Numbers can be positive, negative, or zero.
- Numbers can be integers (whole numbers) or floating-point numbers (numbers with decimal points).
- JavaScript uses the `number` data type to represent all numeric values, regardless of whether they are integers or floating-point numbers.
- Numbers in JavaScript are stored as 64-bit floating-point values using the [IEEE 754 standard](https://en.wikipedia.org/wiki/IEEE_754).
- JavaScript provides built-in functions and operators for performing arithmetic operations, comparisons, and other operations with numbers.

**Example:**

```javascript title="app.js"
let integerNumber = 42; // Integer number
let floatingPointNumber = 3.14; // Floating-point number

console.log(integerNumber); // Output: 42
console.log(floatingPointNumber); // Output: 3.14
```

In the example above, `integerNumber` is an integer value (`42`), and `floatingPointNumber` is a floating-point value (`3.14`). Both values are stored as `number` data types in JavaScript.

## Types of Numbers in JavaScript

### 1. Integers

Integers are whole numbers without any decimal points. In JavaScript, integers can be positive, negative, or zero. The `number` data type in JavaScript can represent integer values within a certain range.

**Example:**

```javascript title="app.js"
let positiveInteger = 42; // Positive integer
let negativeInteger = -10; // Negative integer
let zero = 0; // Zero

console.log(positiveInteger); // Output: 42
console.log(negativeInteger); // Output: -10
console.log(zero); // Output: 0
```

### 2. Floating-Point Numbers

Floating-point numbers are numbers with decimal points. In JavaScript, floating-point numbers can represent fractional values, scientific notation, and other real numbers. The `number` data type in JavaScript can represent floating-point values with a certain precision.

**Example:**

```javascript title="app.js"
let pi = 3.14159; // Pi (π) approximation

console.log(pi); // Output: 3.14159
```

### 3. Scientific Notation

JavaScript supports scientific notation for representing very large or very small numbers. Scientific notation uses the `e` character to denote the exponent of a number.

**Example:**

```javascript title="app.js"
let largeNumber = 5e6; // 5 million, equivalent to 5 * 10^6
let smallNumber = 5e-6; // 0.000005, equivalent to 5 * 10^-6

console.log(largeNumber); // Outputs: 5000000
console.log(smallNumber); // Outputs: 0.000005
```

In the examples above, `5e6` represents `5` multiplied by `10` raised to the power of `6` (i.e., `5,000,000`), and `5e-6` represents `5` multiplied by `10` raised to the power of `-6` (i.e., `0.000005`).

<AdsComponent />

<br />

## Number Precision

JavaScript numbers are precise up to 15 digits. Beyond this, precision may be lost, and the results of calculations might not be what you expect.

**Example:**

```javascript title="app.js"
let preciseNumber = 0.1 + 0.2;
console.log(preciseNumber); // Outputs: 0.30000000000000004
```

In the example above, adding `0.1` and `0.2` results in `0.30000000000000004` due to the limited precision of JavaScript numbers.

## Special Numeric Values

JavaScript provides special numeric values to represent exceptional cases, such as `Infinity`, `-Infinity`, and `NaN` (Not-a-Number).

### 1. Infinity

The `Infinity` value represents positive infinity in JavaScript. It is used to denote a value that exceeds the upper limit of representable numbers.

**Example:**

```javascript title="app.js"
let positiveInfinity = Infinity;

console.log(positiveInfinity); // Output: Infinity
console.log(positiveInfinity + 1); // Output: Infinity
```

### 2. -Infinity

The `-Infinity` value represents negative infinity in JavaScript. It is used to denote a value that exceeds the lower limit of representable numbers.

**Example:**

```javascript title="app.js"
let negativeInfinity = -Infinity;

console.log(negativeInfinity); // Output: -Infinity
console.log(negativeInfinity - 1); // Output: -Infinity
```

<AdsComponent />

<br />

### 3. NaN (Not-a-Number)

The `NaN` value represents a special "not-a-number" value in JavaScript. It is used to denote the result of an invalid mathematical operation, such as dividing zero by zero.

**Example:**

```javascript title="app.js"
let notANumber = NaN;

console.log(notANumber); // Output: NaN
console.log(0 / 0); // Output: NaN
```

## Number Methods

JavaScript provides built-in methods for working with numbers. These methods can be used to perform various operations, such as rounding numbers, converting numbers to strings, and generating random numbers.

Here are some common number methods in JavaScript:

### 1. `toFixed()`

The `toFixed()` method formats a number using fixed-point notation with a specified number of decimal places.

**Example:**

```javascript title="app.js"
let number = 3.14159;
let formattedNumber = number.toFixed(2);

console.log(formattedNumber); // Output: 3.14
```

### 2. `toString()`

The `toString()` method converts a number to a string representation.

**Example:**

```javascript title="app.js"
let number = 42;

console.log(number.toString()); // Output: "42"
```

### 3. `parseInt()`

The `parseInt()` function parses a string and returns an integer.

**Example:**

```javascript title="app.js"
let number = parseInt("42");

console.log(number); // Output: 42
```

<AdsComponent />

<br />

### 4. `parseFloat()`

The `parseFloat()` function parses a string and returns a floating-point number.

**Example:**

```javascript title="app.js"
let number = parseFloat("3.14");

console.log(number); // Output: 3.14
```

### 5. `Math.random()`

The `Math.random()` function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

**Example:**

```javascript title="app.js"
let randomNumber = Math.random();

console.log(randomNumber); // Output: A random number between 0 and 1
```

### 6. `toPrecision()`

The `toPrecision()` method formats a number to a specified precision.

**Example:**

```javascript title="app.js"
let number = 123.456;

console.log(number.toPrecision(2)); // Output: 1.2e+2
```

### 7. `isNaN()`

The `isNaN()` function checks if a value is `NaN` (Not-a-Number).

**Example:**

```javascript title="app.js"
console.log(isNaN(123)); // Outputs: false
console.log(isNaN("abc")); // Outputs: true
```

### 8. `isFinite()`

The `isFinite()` function checks if a value is a finite number.

**Example:**

```javascript title="app.js"
console.log(isFinite(42)); // Outputs: true
console.log(isFinite(Infinity)); // Outputs: false
```

<AdsComponent />

<br />

### 9. `Number()`

The `Number()` function converts a value to a number.

**Example:**

```javascript title="app.js"
let str = "123";
let num = Number(str);

console.log(num); // Outputs: 123
```

## Common Arithmetic Operations with Numbers

JavaScript provides arithmetic operators for performing basic arithmetic operations with numbers. Here are some common arithmetic operations you can perform with numbers in JavaScript:

### 1. Addition (`+`)

The addition operator (`+`) is used to add two numbers together.

**Example:**

```javascript title="app.js"
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

console.log(sum); // Output: 30
```

### 2. Subtraction (`-`)

The subtraction operator (`-`) is used to subtract one number from another.

**Example:**

```javascript title="app.js"
let num1 = 20;
let num2 = 10;
let difference = num1 - num2;

console.log(difference); // Output: 10
```

### 3. Multiplication (`*`)

The multiplication operator (`*`) is used to multiply two numbers.

**Example:**

```javascript title="app.js"
let num1 = 5;
let num2 = 6;
let product = num1 * num2;

console.log(product); // Output: 30
```

<AdsComponent />

<br />

### 4. Division (`/`)

The division operator (`/`) is used to divide one number by another.

**Example:**

```javascript title="app.js"
let num1 = 20;
let num2 = 5;
let quotient = num1 / num2;

console.log(quotient); // Output: 4
```

### 5. Modulus (`%`)

The modulus operator (`%`) is used to find the remainder of the division of two numbers.

**Example:**

```javascript title="app.js"
let num1 = 10;
let num2 = 3;
let remainder = num1 % num2;

console.log(remainder); // Output: 1
```

### 6. Exponentiation (`**`)

The exponentiation operator (`**`) is used to raise one number to the power of another.

**Example:**

```javascript title="app.js"
let base = 2;
let exponent = 3;
let result = base ** exponent;

console.log(result); // Output: 8
```

## Conclusion

Numbers are an essential part of JavaScript programming, used for calculations, data manipulation, and various operations. In this tutorial, you learned about the `number` data type in JavaScript, different types of numbers, special numeric values, number precision, number methods, and arithmetic operations with numbers. Understanding numbers in JavaScript will help you work with numeric data effectively and efficiently in your JavaScript applications.
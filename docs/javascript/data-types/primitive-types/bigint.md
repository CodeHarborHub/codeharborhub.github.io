---
id: bigint
title: BigInt Data Type in JavaScript
sidebar_label: BigInt
sidebar_position: 4
tags: [javascript, data type, primitive type, bigint]
description: Learn about the BigInt data type in JavaScript, how to create BigInt values, and common operations with BigInt values.
---

<AdsComponent />

<br />

In JavaScript, `BigInt` is a built-in object that provides a way to represent whole numbers larger than `Number.MAX_SAFE_INTEGER`. It allows you to work with integers of arbitrary length, overcoming the limitations of the `Number` data type.

## Creating BigInt Values

You can create `BigInt` values in JavaScript by appending the letter `n` to an integer literal or by using the `BigInt()` constructor. Here are examples of both methods:

### Using Integer Literals

You can create `BigInt` values using integer literals by appending the letter `n` to the end of the number. This tells JavaScript to treat the number as a `BigInt` value:

```javascript title="app.js"
let bigIntLiteral = 1234567890123456789012345678901234567890n;

console.log(bigIntLiteral); // Output: 1234567890123456789012345678901234567890n
```

### Using the `BigInt()` Constructor

You can also create `BigInt` values using the `BigInt()` constructor. The `BigInt()` function converts a value to a `BigInt` number:

```javascript title="app.js"
let bigIntConstructor = BigInt("1234567890123456789012345678901234567890");

console.log(bigIntConstructor); // Output: 1234567890123456789012345678901234567890n
```

<AdsComponent />

<br />

## Common Operations with BigInt Values

### Arithmetic Operations

You can perform arithmetic operations on `BigInt` values just like you would with regular numbers. The following operators are supported for `BigInt` values:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulus (`%`)
- Exponentiation (`**`)
- Bitwise operations (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`)
- Comparison operators (`<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`)
- Logical operators (`&&`, `||`, `!`)
- Increment (`++`) and decrement (`--`)
- Assignment operators (`+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `&=`, `|=`, `^=`, `<<=`, `>>=`, `>>>=`)

Here's an example of performing arithmetic operations with `BigInt` values:

```javascript title="app.js"
let a = 1234567890123456789012345678901234567890n;
let b = 9876543210987654321098765432109876543210n;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

console.log(sum); // Output: 11111111101111111110111111110111111111100n
console.log(difference); // Output: -8641975310864197531086419753086419755320n
console.log(product); // Output: 12193263111263526912193263111263526912100n
console.log(quotient); // Output: 0n
console.log(remainder); // Output: 1234567890123456789012345678901234567890n
```

### Comparison Operations

You can compare `BigInt` values using comparison operators like `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, and `!==`. Here's an example of comparing `BigInt` values:

```javascript title="app.js"
let a = 1234567890123456789012345678901234567890n;
let b = 9876543210987654321098765432109876543210n;

console.log(a < b); // Output: true
console.log(a === b); // Output: false
```

### Converting to Number

You can convert a `BigInt` value to a regular number using the `Number()` function. Be aware that converting a `BigInt` value to a number may result in a loss of precision if the `BigInt` value is larger than `Number.MAX_SAFE_INTEGER`:

```javascript title="app.js"
let bigIntValue = 1234567890123456789012345678901234567890n;
let numberValue = Number(bigIntValue);

console.log(numberValue); // Output: 1.2345678901234568e+39
```

### Converting to String

You can convert a `BigInt` value to a string using the `toString()` method. The `toString()` method converts a `BigInt` value to a string representation:

```javascript title="app.js"
let bigIntValue = 1234567890123456789012345678901234567890n;
let stringValue = bigIntValue.toString();

console.log(stringValue); // Output: 1234567890123456789012345678901234567890
```

<AdsComponent />

<br />

:::tip ES2020 (ECMAScript 2020)

The `BigInt` data type was introduced in ECMAScript 2020 (ES11) to provide a way to work with arbitrarily large integers in JavaScript.

**Browser Support:** The `BigInt` data type is supported in modern browsers, including Chrome, Firefox, Safari, and Edge. Internet Explorer does not support `BigInt`.

:::

## Conclusion

The `BigInt` data type in JavaScript provides a way to work with integers of arbitrary length, overcoming the limitations of the `Number` data type for very large numbers. By using `BigInt` values, you can perform precise integer arithmetic and handle calculations that exceed the maximum safe integer value in JavaScript.
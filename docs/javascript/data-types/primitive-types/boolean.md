---
id: boolean
title: Boolean Data Type in JavaScript
sidebar_label: Boolean
sidebar_position: 5
tags: [javascript, data type, primitive type, boolean]
description: Learn about the Boolean data type in JavaScript, how to create Boolean values, and common operations with Boolean values.
---

<AdsComponent />

<br />

In JavaScript, `Boolean` is a built-in data type that represents a logical value. It can have one of two values: `true` or `false`. The `Boolean` data type is used to store the result of logical operations and comparisons.

## Creating Boolean Values

You can create `Boolean` values in JavaScript using the `true` and `false` literals. Here are examples of both values:

### Using `true` and `false` Literals

You can create `Boolean` values using the `true` and `false` literals. These are case-sensitive and must be written in lowercase:

```javascript title="app.js"
let isTrue = true;
let isFalse = false;

console.log(isTrue); // Output: true
console.log(isFalse); // Output: false
```

### Using Logical Expressions

You can also create `Boolean` values using logical expressions that evaluate to `true` or `false`. For example:

```javascript title="app.js"
let greaterThan = 10 > 5; // true
let lessThan = 5 < 2; // false

console.log(greaterThan); // Output: true
console.log(lessThan); // Output: false
```

<AdsComponent />

<br />

## Common Operations with Boolean Values

### Logical Operators

You can perform logical operations on `Boolean` values using logical operators. The following logical operators are supported in JavaScript:

- Logical AND (`&&`): Returns `true` if both operands are `true`, otherwise returns `false`.
- Logical OR (`||`): Returns `true` if at least one of the operands is `true`, otherwise returns `false`.
- Logical NOT (`!`): Returns `true` if the operand is `false`, and `false` if the operand is `true`.
- Logical XOR (exclusive OR) (`^`): Returns `true` if exactly one of the operands is `true`, otherwise returns `false`.

Here are examples of using logical operators with `Boolean` values:

```javascript title="app.js"
let a = true;
let b = false;

console.log(a && b); // Output: false
console.log(a || b); // Output: true
console.log(!a); // Output: false
console.log(a ^ b); // Output: true
```

### Comparison Operators

You can compare `Boolean` values using comparison operators. The following comparison operators are supported in JavaScript:

- Equal to (`==` or `===`): Returns `true` if the operands are equal, otherwise returns `false`.
- Not equal to (`!=` or `!==`): Returns `true` if the operands are not equal, otherwise returns `false`.
- Greater than (`>`): Returns `true` if the left operand is greater than the right operand, otherwise returns `false`.
- Less than (`<`): Returns `true` if the left operand is less than the right operand, otherwise returns `false`.
- Greater than or equal to (`>=`): Returns `true` if the left operand is greater than or equal to the right operand, otherwise returns `false`.
- Less than or equal to (`<=`): Returns `true` if the left operand is less than or equal to the right operand, otherwise returns `false`.
- Strict equality (`===`): Returns `true` if the operands are equal and of the same type, otherwise returns `false`.
- Strict inequality (`!==`): Returns `true` if the operands are not equal and/or not of the same type, otherwise returns `false`.
- Logical AND (`&&`): Returns `true` if both operands are `true`, otherwise returns `false`.
- Logical OR (`||`): Returns `true` if at least one of the operands is `true`, otherwise returns `false`.

Here are examples of using comparison operators with `Boolean` values:

```javascript title="app.js"
let a = true;
let b = false;

console.log(a === b); // Output: false
console.log(a !== b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false
```

### Conditional (Ternary) Operator

You can use the conditional (ternary) operator to assign values based on a condition. The syntax of the conditional operator is as follows:

```javascript
condition ? valueIfTrue : valueIfFalse
```

Here's an example of using the conditional operator with `Boolean` values:

```javascript title="app.js"
let a = true;
let b = false;

let result = a ? "It's true" : "It's false";
console.log(result); // Output: It's true

result = b ? "It's true" : "It's false";
console.log(result); // Output: It's false
```

The conditional operator evaluates the condition (`a` or `b` in this case) and returns the value specified after `?` if the condition is `true`, and the value specified after `:` if the condition is `false`.

<AdsComponent />

<br />

## Converting Values to Boolean

You can convert values to `Boolean` using the `Boolean()` function. The `Boolean()` function converts a value to a `Boolean` value based on the truthy or falsy nature of the value. Here's how it works:

- If the value is falsy (e.g., `0`, `null`, `undefined`, `NaN`, `false`, or an empty string `""`), it returns `false`.
- If the value is truthy (e.g., non-zero numbers, non-empty strings, objects, arrays, functions), it returns `true`.
- For `Boolean` values, it returns the value as is.

Here are examples of converting values to `Boolean` using the `Boolean()` function:

```javascript title="app.js"
console.log(Boolean(0)); // Output: false
console.log(Boolean(1)); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean("Hello")); // Output: true
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean({})); // Output: true
console.log(Boolean([])); // Output: true
console.log(Boolean(function() {})); // Output: true
console.log(Boolean(true)); // Output: true
console.log(Boolean(false)); // Output: false
```

The `Boolean()` function is useful when you need to convert values to `Boolean` for logical operations or comparisons.

<AdsComponent />

<br />

## Conclusion

In this tutorial, you learned about the `Boolean` data type in JavaScript, how to create `Boolean` values using `true` and `false` literals, and common operations with `Boolean` values. You also learned how to convert values to `Boolean` using the `Boolean()` function.
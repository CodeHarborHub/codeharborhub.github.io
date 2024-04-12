---
id: type-of-in-javascript
title: typeof Operator in JavaScript
sidebar_label: typeof
sidebar_position: 28
tags: [JavaScript, typeof, Operator, Type, Value, Data, Typeof, Typeof Operator, Typeof Keyword, Typeof Operator in JavaScript, Typeof Keyword in JavaScript, Typeof Operator, Typeof Keyword, Typeof Operator in JS, Typeof Keyword in JS]
description: "In this tutorial, we will learn about the typeof operator in JavaScript. We will learn how to use the typeof operator to determine the type of a value in JavaScript."
---

In JavaScript, the `typeof` operator is used to determine the type of a value. It is often used when you want to check the type of a variable or a value before performing an operation on it.

## Syntax

The syntax of the `typeof` operator is as follows:

```js title="app.js"
typeof value
```

- The `typeof` operator is followed by the `value` whose type you want to determine.
- The `value` can be a variable, a literal, or an expression.
- The `typeof` operator returns a string that represents the type of the `value`.
- The returned string can be one of the following values:
  - `"undefined"`: If the `value` is `undefined`.
  - `"boolean"`: If the `value` is a boolean.
  - `"number"`: If the `value` is a number.
  - `"string"`: If the `value` is a string.
  - `"symbol"`: If the `value` is a symbol.
  - `"function"`: If the `value` is a function.
  - `"object"`: If the `value` is an object or `null`.
  - `"bigint"`: If the `value` is a BigInt.
  - `"object"`: If the `value` is an object or `null`.

## Example

The following example demonstrates how to use the `typeof` operator to determine the type of a value:

```js title="app.js"
const name = "John";
const age = 30;
const isMarried = false;
const fruits = ["apple", "banana", "cherry"];
const person = {
  name: "John",
  age: 30,
};

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof fruits); // object
console.log(typeof person); // object
console.log(typeof undefinedVariable); // undefined
console.log(typeof nullVariable); // object
```

- In this example, we have used the `typeof` operator to determine the type of different values such as strings, numbers, booleans, arrays, objects, `undefined`, and `null`.
- The `typeof` operator returns the type of the value as a string.
- The `typeof` operator is often used to check the type of a value before performing an operation on it, such as type conversion or type-specific operations.
- The `typeof` operator is useful when you want to handle different types of values differently in your code.
- The `typeof` operator can be used to determine the type of a variable or a value at runtime, which can be useful in dynamic programming scenarios.
- The `typeof` operator can be used to determine the type of a value before performing an operation on it, such as type conversion or type-specific operations.
- The `typeof` operator can be used to handle different types of values differently in your code.
- The `typeof` operator can be used to determine the type of a variable or a value at runtime, which can be useful in dynamic programming scenarios.
- The `typeof` operator can be used to determine the type of a value before performing an operation on it, such as type conversion or type-specific operations.

## Using the `typeof` Operator with Functions

The `typeof` operator can be used to determine the type of a function. It returns `"function"` if the value is a function.

```js title="app.js"
function greet() {
  console.log("Hello, World!");
}

console.log(typeof greet); // function
```

- In this example, we have used the `typeof` operator to determine the type of the `greet` function.
- The `typeof` operator returns `"function"` because the `greet` value is a function.
- The `typeof` operator can be used to determine the type of a function, which can be useful when you want to handle functions differently in your code.
- The `typeof` operator can be used to determine the type of a function at runtime, which can be useful in dynamic programming scenarios.
- The `typeof` operator can be used to determine the type of a function before performing an operation on it, such as calling the function or passing it as an argument to another function.
- The `typeof` operator can be used to handle functions differently in your code based on their type.

## Using the `typeof` Operator with `null`

The `typeof` operator returns `"object"` if the value is `null`. This is a historical bug in JavaScript, and it is not expected to change.

```js title="app.js"
const person = null;

console.log(typeof person); // object
```

In this example, we have used the `typeof` operator to determine the type of the `person` value, which is `null`. The `typeof` operator returns `"object"` because the `person` value is `null`.

The `typeof` operator returns `"object"` if the value is `null`. This is a historical bug in JavaScript, and it is not expected to change.

The `typeof` operator can be used to determine the type of a value at runtime, which can be useful in dynamic programming scenarios.

The `typeof` operator can be used to determine the type of a value before performing an operation on it, such as type conversion or type-specific operations.


## Using the `typeof` Operator with Symbols

The `typeof` operator returns `"symbol"` if the value is a symbol.

```js title="app.js"
const symbol = Symbol("mySymbol");

console.log(typeof symbol); // symbol
```

- In this example, we have used the `typeof` operator to determine the type of the `symbol` value, which is a symbol.
- The `typeof` operator returns `"symbol"` because the `symbol` value is a symbol.
- The `typeof` operator can be used to determine the type of a symbol, which can be useful when you want to handle symbols differently in your code.
- The `typeof` operator can be used to determine the type of a symbol at runtime, which can be useful in dynamic programming scenarios.
- The `typeof` operator can be used to determine the type of a symbol before performing an operation on it, such as type conversion or type-specific operations.
- The `typeof` operator can be used to handle symbols differently in your code based on their type.

:::caution

The `typeof` operator returns `"object"` if the value is `null`. This is a historical bug in JavaScript, and it is not expected to change.

:::

## Conclusion

In this tutorial, you learned about the `typeof` operator in JavaScript and how to use it to determine the type of a value. You also learned about the different types of values that the `typeof` operator can return, such as `"undefined"`, `"boolean"`, `"number"`, `"string"`, `"symbol"`, `"function"`, `"object"`, and `"bigint"`. You also learned about the historical bug in JavaScript where the `typeof` operator returns `"object"` for `null` values. The `typeof` operator is useful when you want to handle different types of values differently in your code, and it can be used to determine the type of a variable or a value at runtime, which can be useful in dynamic programming scenarios.
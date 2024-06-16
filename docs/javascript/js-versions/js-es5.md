---
id: es5-version-of-javascript
title: ES5 Version of JavaScript
sidebar_label: ES5 Version (2009)
sidebar_position: 1
tags: [JavaScript, ES5, ES5 Version of JavaScript, ES5 JavaScript, ES5 JavaScript Tutorial, ES5 JavaScript Example, ES5 JavaScript Features, ES5 JavaScript Improvements, ES5 JavaScript Development, ES5 JavaScript Changes, ES5 JavaScript New Features, ES5 JavaScript Tutorial for Beginners, ES5 JavaScript Tutorial for Developers, ES5 JavaScript Tutorial Example, ES5 JavaScript Tutorial Features, ES5 JavaScript Tutorial Improvements, ES5 JavaScript Tutorial Changes, ES5 JavaScript Tutorial New Features, ES5 JavaScript Tutorial Development, ES5 JavaScript Tutorial Beginners, ES5 JavaScript Tutorial Developers, ES5 JavaScript Tutorial Example, ES5 JavaScript Tutorial Features, ES5 JavaScript Tutorial Improvements, ES5 JavaScript Tutorial Changes, ES5 JavaScript Tutorial New Features, ES5 JavaScript Tutorial Development]
description: "In this tutorial, we will learn about the ES5 version of JavaScript, which was released in 2009. We will explore the new features and improvements introduced in ES5 and how they have impacted JavaScript development."
---

JavaScript ES5 (ECMAScript 5) is the fifth edition of the ECMAScript standard, which was released in 2009. It introduced several new features and improvements to the language, making it more powerful and flexible for developers. In this tutorial, we will learn about the ES5 version of JavaScript and how it has impacted JavaScript development.

## Features of ES5

### Strict Mode

One of the key features introduced in ES5 is strict mode. Strict mode is a special mode that allows you to opt into a restricted variant of JavaScript that enforces stricter parsing and error handling. It helps you write more secure and optimized code by catching common coding mistakes and preventing certain actions that are considered bad practice.

To enable strict mode in your code, you can add the following directive at the beginning of your script:

```javascript title="Strict Mode in ES5"
"use strict";

function myFunction() {
  console.log("This is a strict mode function");
}

myFunction();
```

By using strict mode, you can avoid common pitfalls in JavaScript and write cleaner, more reliable code.

### `JSON` Object

ES5 introduced the `JSON` object, which provides methods for parsing and serializing JSON data. The `JSON` object includes two main methods:

- `JSON.parse()`: Parses a JSON string and returns a JavaScript object.
- `JSON.stringify()`: Converts a JavaScript object into a JSON string.
  - This method is useful for serializing data before sending it to a server or storing it in a database.
  - It can also be used to pretty-print JSON data for debugging purposes.
  - The `JSON.stringify()` method can take an optional `replacer` function or an array of properties to include or exclude from the serialization process.
  - It can also take an optional `space` parameter to specify the indentation level for the output JSON string.
  - The `JSON.stringify()` method can handle circular references by throwing an error or replacing the circular reference with a placeholder value.
- The `JSON` object also includes the `JSON.parse()` method, which can parse a JSON string and return a JavaScript object.
- The `JSON.parse()` method can take an optional `reviver` function to transform the parsed data before returning it.
- The `JSON.parse()` method can handle invalid JSON strings by throwing a `SyntaxError` or returning `null`.
- The `JSON.parse()` method can also handle duplicate keys by throwing a `SyntaxError` or using the last key-value pair encountered.

Here is an example of using the `JSON` object to parse and stringify JSON data:

```javascript title="JSON Object in ES5"
// Parsing JSON data
const jsonString = '{"name": "John", "age": 30}';
const data = JSON.parse(jsonString);

console.log(data.name); // John
console.log(data.age); // 30

// Stringifying JavaScript object
const person = { name: "Alice", age: 25 };
const jsonData = JSON.stringify(person);

console.log(jsonData); // {"name":"Alice","age":25}
```

### `Array` Methods

ES5 introduced several new methods for the `Array` object, making it easier to work with arrays in JavaScript. Some of the key methods introduced in ES5 include:

- `Array.prototype.forEach()`: Executes a provided function once for each array element.
- `Array.prototype.map()`: Creates a new array with the results of calling a provided function on every element in the array.
- `Array.prototype.filter()`: Creates a new array with all elements that pass a test implemented by the provided function.
- `Array.prototype.reduce()`: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
- `Array.prototype.some()`: Tests whether at least one element in the array passes the test implemented by the provided function.
- `Array.prototype.every()`: Tests whether all elements in the array pass the test implemented by the provided function.
- `Array.prototype.indexOf()`: Returns the first index at which a given element can be found in the array.
- `Array.prototype.lastIndexOf()`: Returns the last index at which a given element can be found in the array.
- `Array.prototype.reduceRight()`: Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
- `Array.prototype.forEach()`: Executes a provided function once for each array element.
- `Array.prototype.map()`: Creates a new array with the results of calling a provided function on every element in the array.

Here is an example of using the `Array` methods introduced in ES5:

```javascript title="Array Methods in ES5"
const numbers = [1, 2, 3, 4, 5];

// Using forEach

numbers.forEach((number) => {
  console.log(number);
});

// Using map

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Using filter

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Using reduce

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15
```

### `Function.prototype.bind()`

ES5 introduced the `Function.prototype.bind()` method, which allows you to create a new function with a specified `this` value and initial arguments. This method is useful for creating functions with a fixed context, which can be helpful when working with event handlers or callbacks.

Here is an example of using the `Function.prototype.bind()` method:

```javascript title="Function.prototype.bind() in ES5"
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const greetFunction = person.greet;
greetFunction(); // Hello, my name is undefined

const boundGreetFunction = person.greet.bind(person);
boundGreetFunction(); // Hello, my name is Alice
```

### Getters and Setters

ES5 introduced support for getters and setters in JavaScript objects. Getters are used to get the value of a property, while setters are used to set the value of a property. Getters and setters allow you to define computed properties and control access to object properties.

Here is an example of using getters and setters in ES5:

```javascript title="Getters and Setters in ES5"
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName); // John Doe

person.fullName = "Alice Smith";
console.log(person.firstName); // Alice
console.log(person.lastName); // Smith
```

### `Object.keys()`

ES5 introduced the `Object.keys()` method, which returns an array of a given object's own enumerable property names. This method is useful for iterating over the properties of an object and accessing their values.

Here is an example of using the `Object.keys()` method in ES5:

```javascript title="Object.keys() in ES5"
const person = {
  name: "John",
  age: 30,
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age"]

keys.forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
```

### `Array.isArray()`

ES5 introduced the `Array.isArray()` method, which checks whether a given value is an array. This method is useful for determining the type of a value and handling it accordingly.

Here is an example of using the `Array.isArray()` method in ES5:

```javascript title="Array.isArray() in ES5"
const numbers = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers)); // true

const person = {
  name: "Alice",
  age: 25,
};

console.log(Array.isArray(person)); // false
```

## Browser Support for ES5

ES5 is supported by all modern web browsers, including Chrome, Firefox, Safari, Edge, and Opera. It is also supported by Internet Explorer 9 and later versions. Since ES5 was released in 2009, it is widely adopted and compatible with most web development environments.

By using ES5 features in your JavaScript code, you can ensure better compatibility with a wide range of browsers and devices. ES5 provides a solid foundation for building web applications and enables you to write more efficient and maintainable code.

### Compatibility Table for ES5

Here is a compatibility table showing the support for ES5 features in modern web browsers:

| Feature               | Chrome | Firefox | Safari | Edge | Opera | IE    |
|-----------------------|--------|---------|--------|------|-------|-------|
| Strict Mode           | 5      | 4       | 5      | 12   | 12    | 9     |
| `JSON` Object         | 3      | 3.5     | 4      | 8    | 10.5  | 8     |
| `Array` Methods       | 5      | 4       | 5      | 12   | 12    | 9     |
| `Function.prototype.bind()` | 7 | 4       | 5      | 12   | 12    | 9     |
| Getters and Setters   | 3      | 2       | 5      | 12   | 12    | 9     |
| `Object.keys()`       | 5      | 4       | 5      | 12   | 12    | 9     |
| `Array.isArray()`     | 5      | 4       | 5      | 12   | 12    | 9     |
| `Array.prototype.forEach()` | 1 | 1.5     | 5      | 12   | 10.5  | 9     |
| `Array.prototype.map()` | 1    | 1.5     | 5      | 12   | 10.5  | 9     |
| `Array.prototype.filter()` | 1 | 1.5     | 5      | 12   | 10.5  | 9     |
| `Array.prototype.reduce()` | 1 | 3       | 5      | 12   | 10.5  | 9     |
| `Array.prototype.some()` | 1   | 3       | 5      | 12   | 10.5  | 9     |
| `Array.prototype.every()` | 1  | 3       | 5      | 12   | 10.5  | 9     |
| `Array.prototype.indexOf()` | 1 | 3     | 5      | 12   | 10.5  | 9     |
| `Array.prototype.lastIndexOf()` | 1 | 3 | 5      | 12   | 10.5  | 9     |
| `Array.prototype.reduceRight()` | 1 | 3 | 5 | 12   | 10.5  | 9     |

:::info Note
The version numbers in the compatibility table represent the first stable release of the browser that supports the feature. For example, Chrome 5 indicates that the feature is supported in Chrome version 5 and later.

> The version numbers in the compatibility table represent the first stable version that supports the feature. The compatibility data is based on [Can I use](https://caniuse.com/) and [MDN Web Docs](https://developer.mozilla.org/).

:::

## Conclusion

In this tutorial, we learned about the ES5 version of JavaScript, which introduced several new features and improvements to the language. We explored the key features of ES5, including strict mode, the `JSON` object, new `Array` methods, `Function.prototype.bind()`, getters and setters, `Object.keys()`, and `Array.isArray()`. We also discussed the browser support for ES5 and how it has impacted JavaScript development. By understanding the features of ES5, you can write more efficient and maintainable JavaScript code for your web applications.
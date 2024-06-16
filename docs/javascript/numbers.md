---
id: all-about-numbers
title: All About Numbers in JavaScript
sidebar_label: Numbers
sidebar_position: 14
tags: [JavaScript, Numbers, Number Properties, Number Methods, toString, toFixed, toPrecision, valueOf, parseInt, parseFloat, isNaN, isFinite, Number, MAX_VALUE, MIN_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY, EPSILON, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER, Number Object]
description: "In the JavaScript programming language, numbers are used to represent numerical values. In this section, you will learn how to create and manipulate numbers in JavaScript. You will also learn about the different methods that can be used to manipulate numbers. We are going to cover the following topics in this section:"
---

> Numbers are used to represent numerical values. They are written with or without decimals.

```js title="index.js"
let x = 3.14;
let y = 3;
```

## Number Properties

JavaScript has only one type of number. Numbers can be written with or without decimals.
    
```js title="index.js"
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals
```

## Number Methods

JavaScript has a number of built-in methods for working with numbers.

### `toString()`

The `toString()` method returns a number as a string.

```js title="index.js"
let x = 123;
console.log(x.toString()); // "123"
```

### `toFixed()`

The `toFixed()` method formats a number with a specific number of digits after the decimal point.

```js title="index.js"
let x = 9.656;
console.log(x.toFixed(0)); // 10
console.log(x.toFixed(2)); // 9.66
console.log(x.toFixed(4)); // 9.6560
```

### `toPrecision()`

The `toPrecision()` method formats a number to a specified length.

```js title="index.js"
let x = 9.656;
console.log(x.toPrecision()); // 9.656
console.log(x.toPrecision(2)); // 9.7
console.log(x.toPrecision(4)); // 9.656
console.log(x.toPrecision(6)); // 9.65600
```

### `valueOf()`

The `valueOf()` method returns the primitive value of a number.

```js title="index.js"
let x = 123;
console.log(x.valueOf()); // 123
```

### `parseInt()`

The `parseInt()` method parses a string and returns an integer.

```js title="index.js"
let x = "10";
console.log(parseInt(x)); // 10
```

### `parseFloat()`

The `parseFloat()` method parses a string and returns a floating point number.

```js title="index.js"
let x = "10.33";
console.log(parseFloat(x)); // 10.33
```

### `isNaN()`

The `isNaN()` method returns `true` if the value is `NaN`, and `false` otherwise.

```js title="index.js"
let x = NaN;
console.log(isNaN(x)); // true
```

### `isFinite()`

The `isFinite()` method returns `true` if the value is a finite number, and `false` otherwise.

```js title="index.js"
let x = 10 / 0;
console.log(isFinite(x)); // false
```

### `Number()`

The `Number()` method returns a number, converted from its argument.

```js title="index.js"
let x = true;
console.log(Number(x)); // 1
```

### `MAX_VALUE`

The `MAX_VALUE` property returns the largest number possible in JavaScript.

```js title="index.js"
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

### `MIN_VALUE`

The `MIN_VALUE` property returns the smallest number possible in JavaScript.

```js title="index.js"
console.log(Number.MIN_VALUE); // 5e-324
```

### `POSITIVE_INFINITY`

The `POSITIVE_INFINITY` property represents positive infinity.

```js title="index.js"
console.log(Number.POSITIVE_INFINITY); // Infinity
```

### `NEGATIVE_INFINITY`

The `NEGATIVE_INFINITY` property represents negative infinity.

```js title="index.js"
console.log(Number.NEGATIVE_INFINITY); // -Infinity
```

### `EPSILON`

The `EPSILON` property represents the difference between 1 and the smallest floating point number greater than 1.

```js title="index.js"
console.log(Number.EPSILON); // 2.220446049250313e-16
```

### `MIN_SAFE_INTEGER`

The `MIN_SAFE_INTEGER` property returns the minimum safe integer in JavaScript.

```js title="index.js"
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
```

### `MAX_SAFE_INTEGER`

The `MAX_SAFE_INTEGER` property returns the maximum safe integer in JavaScript.

```js title="index.js"
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

:::info 📝 Note
The `Number` object is a wrapper object allowing you to work with numerical values. A `Number` object is created using the `Number()` constructor.

```js title="index.js"
let x = new Number(123);
console.log(x); // [Number: 123]
```
:::

## Conclusion

In this section, you learned how to create and manipulate numbers in JavaScript. You also learned about the different methods that can be used to manipulate numbers. In the next section, you will learn about strings in JavaScript.
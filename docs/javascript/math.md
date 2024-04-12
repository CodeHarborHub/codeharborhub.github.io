---
id: math-in-javascript
title: Math in JavaScript
sidebar_label: Math
sidebar_position: 17
tags: [JavaScript, Math, Object, Properties, Methods]
description: "In this tutorial, we will learn about the Math object in JavaScript. We will learn about the properties and methods of the Math object."
---

In JavaScript, the `Math` object is a built-in object that has properties and methods for mathematical constants and functions. It allows you to perform mathematical tasks on numbers.

## Properties

The `Math` object has the following properties:

- `Math.E`: Returns Euler's number, the base of natural logarithms, approximately 2.718.

  for example:

  ```js title="app.js"
  console.log(Math.E); // 2.718281828459045
  ```

- `Math.PI`: Returns the ratio of the circumference of a circle to its diameter, approximately 3.14159.
  for example:

  ```js title="app.js"
      console.log(Math.PI); // 3.141592653589793
  ```

- `Math.LN2`: Returns the natural logarithm of 2, approximately 0.693.
    for example:
    
    ```js title="app.js"
    console.log(Math.LN2); // 0.6931471805599453
    ```

- `Math.LN10`: Returns the natural logarithm of 10, approximately 2.303.
    for example:
    
    ```js title="app.js"
    console.log(Math.LN10); // 2.302585092994046
    ```

- `Math.LOG2E`: Returns the base 2 logarithm of E, approximately 1.442.

    for example:
    
    ```js title="app.js"
    console.log(Math.LOG2E); // 1.4426950408889634
    ```

- `Math.LOG10E`: Returns the base 10 logarithm of E, approximately 0.434.

    for example:
    
    ```js title="app.js"
    console.log(Math.LOG10E); // 0.4342944819032518
    ```

- `Math.SQRT1_2`: Returns the square root of 1/2, approximately 0.707.

    for example:
    
    ```js title="app.js"
    console.log(Math.SQRT1_2); // 0.7071067811865476
    ```

- `Math.SQRT2`: Returns the square root of 2, approximately 1.414.

    for example:
    
    ```js title="app.js"
    console.log(Math.SQRT2); // 1.4142135623730951
    ```
    
## Methods 

The `Math` object has the following methods:

- `Math.abs(x)`: Returns the absolute value of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.abs(-5)); // 5
    console.log(Math.abs(5)); // 5
    ```

- `Math.ceil(x)`: Returns the smallest integer greater than or equal to a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.ceil(5.1)); // 6
    console.log(Math.ceil(5.9)); // 6
    ```

- `Math.floor(x)`: Returns the largest integer less than or equal to a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.floor(5.1)); // 5
    console.log(Math.floor(5.9)); // 5
    ```

- `Math.round(x)`: Returns the value of a number rounded to the nearest integer.

    for example:
    
    ```js title="app.js"
    console.log(Math.round(5.1)); // 5
    console.log(Math.round(5.9)); // 6
    ```

- `Math.max(x, y, z, ..., n)`: Returns the largest of zero or more numbers.

    for example:
    
    ```js title="app.js"
    console.log(Math.max(5, 10, 15, 20)); // 20
    ```

- `Math.min(x, y, z, ..., n)`: Returns the smallest of zero or more numbers.

    for example:
    
    ```js title="app.js"
    console.log(Math.min(5, 10, 15, 20)); // 5
    ```

- `Math.pow(x, y)`: Returns the value of x to the power of y.

    for example:
    
    ```js title="app.js"
    console.log(Math.pow(2, 3)); // 8
    ``` 

- `Math.sqrt(x)`: Returns the square root of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.sqrt(16)); // 4
    ``` 

- `Math.random()`: Returns a random number between 0 (inclusive), and 1 (exclusive).

    for example:
    
    ```js title="app.js"
    console.log(Math.random()); // 0.123456789
    ```

- `Math.sin(x)`: Returns the sine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.sin(90)); // 0.8939966636005579
    ```

- `Math.cos(x)`: Returns the cosine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.cos(0)); // 1
    ```

- `Math.tan(x)`: Returns the tangent of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.tan(45)); // 1.6197751905438615
    ``` 

- `Math.log(x)`: Returns the natural logarithm (base E) of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.log(2)); // 0.6931471805599453
    ```

- `Math.exp(x)`: Returns the value of E^x.

    for example:
    
    ```js title="app.js"
    console.log(Math.exp(2)); // 7.3890560989306495
    ```

- `Math.atan(x)`: Returns the arctangent of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.atan(1)); // 0.7853981633974483
    ```

- `Math.acos(x)`: Returns the arccosine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.acos(0)); // 1.5707963267948966
    ```

- `Math.asin(x)`: Returns the arcsine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.asin(1)); // 1.5707963267948966
    ```

- `Math.atan2(y, x)`: Returns the arctangent of the quotient of its arguments.

    for example:
    
    ```js title="app.js"
    console.log(Math.atan2(1, 1)); // 0.7853981633974483
    ```

- `Math.cosh(x)`: Returns the hyperbolic cosine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.cosh(0)); // 1
    ```

- `Math.sinh(x)`: Returns the hyperbolic sine of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.sinh(0)); // 0
    ```

- `Math.tanh(x)`: Returns the hyperbolic tangent of a number.

    for example:
    
    ```js title="app.js"
    console.log(Math.tanh(0)); // 0
    ```

:::tip 📝 Note

The `Math` object is not a constructor. All properties and methods of the `Math` object can be called by using the `Math` object as a namespace.

:::

## Conclusion

In this tutorial, we learned about the `Math` object in JavaScript. We learned about the properties and methods of the `Math` object. We also saw examples of how to use the `Math` object to perform mathematical tasks on numbers.
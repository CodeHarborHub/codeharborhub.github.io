---
id: for-in-loop-in-javascript
title: For In Loop in JavaScript
sidebar_label: For...In
sidebar_position: 22
tags:
  [
    JavaScript,
    For In Loop,
    Loop,
    Iteration,
    Control,
    Flow,
    Iterative,
    Statements,
    Loops,
    Iteration,
    Iterating,
    Iterations,
  ]
description: "In this tutorial, we will learn about the for...in loop in JavaScript. We will learn how to use the for...in loop to iterate over the properties of an object in JavaScript."
---

In JavaScript, the `for...in` loop is used to iterate over the properties of an object. It is often used when you want to perform an action on each property of an object.

## Syntax

The syntax of the `for...in` loop is as follows:

```js title="app.js"
for (variable in object) {
  // code to be executed
}
```

- The `for...in` loop starts with the `for` keyword followed by parentheses.
- Inside the parentheses, you need to specify a `variable` to hold the property name and the `object` over which you want to iterate.
- The `variable` will be assigned the property name of the object on each iteration.
- The code inside the loop will be executed for each property of the object.
- The loop will iterate over all enumerable properties of the object, including inherited properties from the object's prototype chain.
- The order of iteration is not guaranteed and may vary between different JavaScript engines.
- It is recommended to use the `hasOwnProperty` method to check if the property is a direct property of the object and not inherited from its prototype chain.
- The `for...in` loop should not be used to iterate over arrays, as it may produce unexpected results due to the iteration of array indices and inherited properties.
- The `for...in` loop should be used only for objects.

## Example

The following example demonstrates how to use the `for...in` loop to iterate over the properties of an object:

```js title="app.js"
const person = {
  name: "John",
  age: 23,
  // Method
  greet: function () {
    console.log(
      "Hello, I am " + this.name + " and I am " + this.age + " years old."
    );
  },
};

for (let property in person) {
  console.log(property + ": " + person[property]);
}
```

In this example, the `for...in` loop iterates over the properties of the `person` object. On each iteration, the `property` variable is assigned the name of the property, and the code inside the loop logs the property name and its value to the console.

The output of the above example will be:

```plaintext title="Output"
name: John
age: 23
greet: function () {
  console.log(
    "Hello, I am " + this.name + " and I am " + this.age + " years old."
  );
}
```

In each iteration, the property name and its value are printed to the console.

## Using `hasOwnProperty` Method

To check if the property is a direct property of the object and not inherited from its prototype chain, you can use the `hasOwnProperty` method. Here's an example:

```js title="app.js"
const person = {
  name: "John",
  age: 23,
  // Method
  greet: function () {
    console.log(
      "Hello, I am " + this.name + " and I am " + this.age + " years old."
    );
  },
};

for (let property in person) {
  if (person.hasOwnProperty(property)) {
    console.log(property + ": " + person[property]);
  }
}
```

In this example, the `hasOwnProperty` method is used to check if the property is a direct property of the `person` object. If it is, the property name and its value are printed to the console.

:::tip tips & tricks
The `hasOwnProperty` method returns `true` if the property is a direct property of the object, otherwise it returns `false`.

The `for...in` loop should be used with caution, as it iterates over all enumerable properties of the object, including inherited properties from the object's prototype chain. It is recommended to use the `hasOwnProperty` method to check if the property is a direct property of the object.

The `for...in` loop should not be used to iterate over arrays, as it may produce unexpected results due to the iteration of array indices and inherited properties.

The `for...in` loop should be used only for objects.

:::

:::info 📚 Learn Extra

## Array.forEach Method

If you want to iterate over the elements of an array, you can use the `forEach` method. The `forEach` method is a more appropriate way to iterate over the elements of an array, as it provides a concise and readable syntax for performing actions on each element of the array.

Here's an example that demonstrates the use of the `forEach` method to iterate over the elements of an array:

```js title="app.js"
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});
```

In this example, the `forEach` method iterates over the elements of the `numbers` array and executes the provided function for each element.

The `forEach` method is a convenient and concise way to iterate over the elements of an array in JavaScript.

## Array.forEach Method vs. for...of Loop vs. for...in Loop Comparison

| No. | forEach Method                                            | for...of Loop                                             | for...in Loop                                     |
| :-: | :-------------------------------------------------------- | :-------------------------------------------------------- | :------------------------------------------------ |
| 1.  | Iterates over the elements of an array.                   | Iterates over the elements of an iterable object.         | Iterates over the properties of an object.        |
| 2.  | Provides a concise and readable syntax.                   | Provides a concise and readable syntax.                   | Provides a concise and readable syntax.           |
| 3.  | Should be used for arrays.                                | Should be used for iterable objects.                      | Should be used for objects.                       |
| 4.  | Does not iterate over inherited properties.               | Does not iterate over inherited properties.               | Iterates over inherited properties.               |
| 5.  | Does not iterate over array indices.                      | Does not iterate over array indices.                      | Iterates over array indices.                      |
| 6.  | Does not require a loop variable.                         | Requires a loop variable.                                 | Requires a loop variable.                         |
| 7.  | Does not require an explicit check for direct properties. | Does not require an explicit check for direct properties. | Requires an explicit check for direct properties. |

:::

## Summary

In this tutorial, we learned about the `for...in` loop in JavaScript. We learned how to use the `for...in` loop to iterate over the properties of an object. We also learned about using the `hasOwnProperty` method to check if the property is a direct property of the object and not inherited from its prototype chain.

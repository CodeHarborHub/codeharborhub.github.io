---
id: set-in-javascript
title: Sets in JavaScript
sidebar_label: Sets
sidebar_position: 26
tags:
  [
    JavaScript,
    Set,
    Data Structure,
    Collection,
    Unique,
    Values,
    Iteration,
    Iterative,
    Statements,
    Loops,
    Iteration,
    Iterating,
    Iterations,
    Spread Operator,
    Set Methods,
  ]
description: "In this tutorial, we will learn about sets in JavaScript. We will learn how to use sets to store unique values in JavaScript."
---

In JavaScript, a `Set` is a built-in object that allows you to store unique values. It is often used when you want to store a collection of unique values without any duplicates.

## Creating a Set

You can create a new `Set` by using the `new` keyword followed by the `Set` constructor. You can pass an iterable

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
console.log(set); // Set { 1, 2, 3, 4, 5 }
```

- The `Set` constructor creates a new `Set` object.
- You can pass an iterable (such as an array) to the `Set` constructor to initialize the set with the values from the iterable.
- The `Set` object stores unique values, so any duplicate values will be removed.
- The order of elements in a `Set` is guaranteed to be the same as the order of insertion.
- The `Set` object is iterable, so you can use it in a `for...of` loop to iterate over its elements.
- The `Set` object has a `size` property that returns the number of elements in the set.
- The `Set` object has methods to add, delete, and check for the presence of elements.
- The `Set` object does not have methods to access elements by index, as it does not maintain the order of elements.

## Adding Elements to a Set

You can add elements to a `Set` by using the `add` method.

```js title="app.js"
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }
```

- The `add` method is used to add a new element to the set.
- If the element is already present in the set, it will not be added again.
- The `add` method returns the `Set` object, so you can chain multiple `add` calls together.
- The `add` method is chainable, so you can add multiple elements to the set in a single statement.

## Deleting Elements from a Set

You can delete elements from a `Set` by using the `delete` method.

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
set.delete(3);
console.log(set); // Set { 1, 2, 4, 5 }
```

- The `delete` method is used to remove an element from the set.
- If the element is present in the set, it will be removed, and the method will return `true`.
- If the element is not present in the set, the method will return `false`.
- The `delete` method returns `true` if the element is removed, and `false` otherwise.
- The `delete` method is chainable, so you can remove multiple elements from the set in a single statement.
- The `delete` method does not throw an error if the element is not present in the set.
- The `delete` method does not return the removed element.

## Checking for the Presence of an Element in a Set

You can check if an element is present in a `Set` by using the `has` method.

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(3)); // true
console.log(set.has(6)); // false
```

- The `has` method is used to check if an element is present in the set.
- If the element is present in the set, the method will return `true`.
- If the element is not present in the set, the method will return `false`.
- The `has` method is chainable, so you can check for the presence of multiple elements in a single statement.
- The `has` method does not throw an error if the element is not present in the set.
- The `has` method does not return the element itself.
- The `has` method is often used to check if a value is present in the set before adding or deleting it.

## Iterating Over a Set

You can iterate over the elements of a `Set` by using a `for...of` loop.

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
for (const element of set) {
  console.log(element);
}
```

The `for...of` loop is used to iterate over the elements of the set. In each iteration, the value of the current element is assigned to the loop variable `element`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
1
2
3
4
5
```

In each iteration, the value of the current element is printed to the console.

## Converting a Set to an Array

You can convert a `Set` to an array by using the `Array.from` method or the spread operator (`...`).

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
const array = Array.from(set);
console.log(array); // [1, 2, 3, 4, 5]
```

- The `Array.from` method is used to create a new array from an iterable (such as a `Set`).
- The `Array.from` method returns a new array that contains the elements of the iterable.
- The spread operator (`...`) can also be used to create a new array from an iterable.
- The spread operator (`...`) returns a new array that contains the elements of the iterable.

## Using the Set Constructor

You can use the `Set` constructor to create an empty `Set` and then add elements to it.

```js title="app.js"
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }
```

The `Set` constructor creates a new empty `Set` object. You can then use the `add` method to add elements to the set. The `Set` object stores unique values, so any duplicate values will be removed.

## Using the Spread Operator

You can use the spread operator (`...`) to create a new `Set` from an existing `Set`.

```js title="app.js"
const set1 = new Set([1, 2, 3]);
const set2 = new Set([...set1, 4, 5]);
console.log(set2); // Set { 1, 2, 3, 4, 5 }
```

The spread operator (`...`) is used to create a new `Set` that contains the elements of an existing `Set`, as well as additional elements. The new `Set` will contain the unique values from the existing `Set` and the additional elements.

## Using the Set Methods

You can use the `Set` methods to add, delete, and check for the presence of elements in a `Set`.

```js title="app.js"
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
set.delete(3);
console.log(set.has(3)); // false
```

The `add` method is used to add a new element to the set. The `delete` method is used to remove an element from the set. The `has` method is used to check if an element is present in the set.

:::info 📝 Note

The `Set` object is iterable, so you can use it in a `for...of` loop to iterate over its elements. The `Set` object has a `size` property that returns the number of elements in the set.

**1. Spread Operator:** The spread operator (`...`) can be used to create a new `Set` from an existing `Set`. The new `Set` will contain the unique values from the existing `Set and the additional elements. The spread operator can also be used to convert a `Set` to an array.

**2. Set Methods:** The `Set` object has methods to add, delete, and check for the presence of elements. The `add` method is used to add a new element to the set. The `delete` method is used to remove an element from the set. The `has` method is used to check if an element is present in the set.

**3. Iterating Over a Set:** The `Set` object is iterable, so you can use it in a `for...of` loop to iterate over its elements. In each iteration, the value of the current element is assigned to the loop variable, and the loop body is executed.

**4. Converting a Set to an Array:** You can convert a `Set` to an array by using the `Array.from` method or the spread operator (`...`). The `Array.from` method is used to create a new array from an iterable, such as a `Set`. The spread operator (`...`) can also be used to create a new array from an iterable.

:::

## Summary

In this tutorial, we learned about sets in JavaScript. We learned how to use sets to store unique values in JavaScript. We learned about the `Set` object and its methods for adding, deleting, and checking for the presence of elements. We also learned how to iterate over the elements of a `Set` and convert a `Set` to an array.
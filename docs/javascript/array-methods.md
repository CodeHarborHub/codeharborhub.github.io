---
id: array-methods
title: Array methods in JavaScript 
sidebar_label: Array-methods
sidebar_position: 18
tags: [JavaScript, Arrays, Array Methods,Array length, Array Slice ]
description: "This tutorial demonstrates how to use  Array methods in JavaScript with Example"
---

# JavaScript Array Methods

JavaScript provides a variety of methods to manipulate and work with arrays efficiently. Here is a comprehensive overview of some basic and essential array methods.

## Basic Array Methods

### Array `length`

The `length` property returns the length (size) of an array.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size); // Output: 4
```

### Array `toString()`

The `toString()` method converts an array to a string of comma-separated array values.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Output: "Banana,Orange,Apple,Mango"
```

### Array `at()`

The `at()` method returns the element at the specified index. It also supports negative indexing.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit); // Output: "Apple"
```

**Note:**
Many languages allow negative bracket indexing like `[-1]` to access elements from the end of an array. This is not possible in JavaScript using `[]` because `[]` is used for accessing both arrays and objects. The `at()` method, introduced in ES2022, solves this problem.

### Array `join()`

The `join()` method joins all array elements into a string. You can specify a separator.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * ")); // Output: "Banana * Orange * Apple * Mango"
```

## Popping and Pushing

When you work with arrays, it is easy to remove elements and add new elements.

### JavaScript Array `pop()`

The `pop()` method removes the last element from an array and returns it.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruit); // Output: "Mango"
console.log(fruits); // Output: ["Banana", "Orange", "Apple"]
```

### JavaScript Array `push()`

The `push()` method adds a new element to an array (at the end).

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
```

## Shifting Elements

Shifting is equivalent to popping, but working on the first element instead of the last.

### JavaScript Array `shift()`

The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); // Output: ["Orange", "Apple", "Mango"]
```

### JavaScript Array `unshift()`

The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements.

**Example:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits); // Output: ["Lemon", "Banana", "Orange", "Apple", "Mango"]
```

## JavaScript Array `delete`

**Warning!** Using `delete` leaves `undefined` holes in the array. Use `pop()` or `shift()` instead.

## Merging Arrays (Concatenating)

In programming languages, concatenation means joining strings end-to-end. Concatenating arrays means joining arrays end-to-end.

### JavaScript Array `concat()`

The `concat()` method creates a new array by merging (concatenating) existing arrays.

**Example (Merging Two Arrays):**
```javascript
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren); // Output: ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]
```
:::info Note

The `concat()` method does not change the existing arrays. It always returns a new array and can take any number of array arguments.

:::

**Example (Merging Three Arrays):**
```javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren); // Output: ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]
```

### Array `copyWithin()`

The `copyWithin()` method copies array elements to another position in an array.

**Example: Copy to index 2, all elements from index 0:**
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits); // Output: ["Banana", "Orange", "Banana", "Orange"]
```


Additional methods and their usage:

- Array `slice()`
- Array `splice()`
- Array `toSpliced()`
- Array `flat()`

These methods provide additional flexibility and functionality when working with arrays in JavaScript.
---
id: arrays-in-javascript
title: Arrays in JavaScript for Beginners 
sidebar_label: Arrays
sidebar_position: 15
tags: [JavaScript, Arrays, Array Methods, Array Destructuring, Array Properties, Array Methods, Array Iterators, Array Object, Array Destructuring, Array Length, Access Array Elements, Change Array Elements, Add Array Elements, Remove Array Elements, Loop Through Array, Array Methods, Array Destructuring]
description: "In the JavaScript programming language, arrays are used to store multiple values in a single variable. In this section, you will learn how to create and manipulate arrays in JavaScript. You will also learn about the different methods that can be used to manipulate arrays. We are going to cover the following topics in this section:"
---

> Arrays are used to store multiple values in a single variable. They are written with square brackets.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
```

## Access the Elements of an Array

You can access an array element by referring to the index number.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[3]); // Orange
```

## Change an Array Element

You can change the value of an array element by referring to the index number.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits[0] = "Cherry";
console.log(fruits); // ["Cherry", "Banana", "Mango", "Orange"]
```

## Add an Array Element

You can add an element to an array using the `push()` method.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry"]
```

## Remove an Array Element

You can remove an element from an array using the `pop()` method.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

## Array Length

The `length` property returns the length of an array (number of elements).

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.length); // 4
```

## Loop Through an Array

You can use a `for` loop to loop through all the elements of an array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

## Array Methods

JavaScript has a number of built-in methods for working with arrays.

### `toString()`

The `toString()` method converts an array to a string of (comma separated) array values.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.toString()); // Apple,Banana,Mango,Orange
```

### `join()`

The `join()` method joins all the elements of an array into a string.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.join(" * ")); // Apple * Banana * Mango * Orange
```

### `pop()`

The `pop()` method removes the last element from an array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let lastFruit = fruits.pop();
console.log(lastFruit); // Orange
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

### `push()`

The `push()` method adds a new element to an array (at the end).

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry"]
```

### `shift()`

The `shift()` method removes the first element from an array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let firstFruit = fruits.shift();
console.log(firstFruit); // Apple
console.log(fruits); // ["Banana", "Mango", "Orange"]
```

### `unshift()`

The `unshift()` method adds a new element to an array (at the beginning).

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.unshift("Cherry");
console.log(fruits); // ["Cherry", "Apple", "Banana", "Mango", "Orange"]
```

### `concat()`

The `concat()` method joins two or more arrays, and returns a new array.

```js title="index.js"
let fruits1 = ["Apple", "Banana", "Mango", "Orange"];
let fruits2 = ["Cherry", "Grapes", "Pineapple"];

let allFruits = fruits1.concat(fruits2);
console.log(allFruits); // ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"]
```

### `slice()`

The `slice()` method slices out a piece of an array into a new array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"];

let citrusFruits = fruits.slice(2, 5);
console.log(citrusFruits); // ["Mango", "Orange", "Cherry"]
```

### `splice()`

The `splice()` method adds/removes items to/from an array, and returns the removed item(s).

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange", "Cherry", "Grapes", "Pineapple"];

fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits); // ["Apple", "Banana", "Lemon", "Kiwi", "Cherry", "Grapes", "Pineapple"]
```

### `sort()`

The `sort()` method sorts the elements of an array.

```js title="index.js"
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]
```

### `reverse()`

The `reverse()` method reverses the order of the elements in an array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.reverse()); // ["Orange", "Mango", "Banana", "Apple"]
```

### `indexOf()`

The `indexOf()` method searches the array for an element and returns its position.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.indexOf("Mango")); // 2
```

### `lastIndexOf()`

The `lastIndexOf()` method searches the array for an element, starting at the end, and returns its position.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.lastIndexOf("Banana")); // 1
```

### `includes()`

The `includes()` method checks if an array contains a specified element.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Cherry")); // false
```

### `find()`

The `find()` method returns the value of the first element in an array that passes a test (provided as a function).

```js title="index.js"
let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.find(checkAdult)); // 18
```

### `findIndex()`

The `findIndex()` method returns the index of the first element in an array that passes a test (provided as a function).

```js title="index.js"
let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.findIndex(checkAdult)); // 2
```

### `every()`

The `every()` method checks if all elements in an array pass a test (provided as a function).

```js title="index.js"
let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.every(checkAdult)); // false
```

### `some()`

The `some()` method checks if some elements in an array pass a test (provided as a function).

```js title="index.js"
let ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.some(checkAdult)); // true
```

### `filter()`

The `filter()` method creates a new array with all elements that pass a test (provided as a function).

```js title="index.js"
let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(ages.filter(checkAdult)); // [32, 33, 40]
```

### `map()`

The `map()` method creates a new array with the result of calling a function for each array element.

```js title="index.js"
let numbers = [4, 9, 16, 25];

function myFunction(value) {
  return value * 2;
}

console.log(numbers.map(myFunction)); // [8, 18, 32, 50]
```

### `reduce()`

The `reduce()` method reduces the array to a single value (going left-to-right).

```js title="index.js"
let numbers = [175, 50, 25];

function myFunction(total, num) {
  return total - num;
}

console.log(numbers.reduce(myFunction)); // 100
```

### `reduceRight()`

The `reduceRight()` method reduces the array to a single value (going right-to-left).

```js title="index.js"
let numbers = [175, 50, 25];

function myFunction(total, num) {
  return total - num;
}

console.log(numbers.reduceRight(myFunction)); // -50
```

### `forEach()`

The `forEach()` method calls a function once for each array element.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach(function (value, index, array) {
  console.log(value);
});
```

### `isArray()`

The `isArray()` method checks if an object is an array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(Array.isArray(fruits)); // true
```

### `from()`

The `from()` method creates a new Array instance from an array-like or iterable object.

```js title="index.js"
let myArr = Array.from("ABCDEFG");

console.log(myArr); // ["A", "B", "C", "D", "E", "F", "G"]
```

### `of()`

The `of()` method creates a new Array instance with a variable number of arguments.

```js title="index.js"
let myArr = Array.of(1, 2, 3, 4, 5);

console.log(myArr); // [1, 2, 3, 4, 5]
```

### `fill()`

The `fill()` method fills the elements of an array with a static value.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.fill("Cherry")); // ["Cherry", "Cherry", "Cherry", "Cherry"]
```

### `copyWithin()`

The `copyWithin()` method copies array elements within the array, to and from specified positions.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.copyWithin(2, 0)); // ["Apple", "Banana", "Apple", "Banana"]
```

### `entries()`

The `entries()` method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let iterator = fruits.entries();

for (let e of iterator) {
  console.log(e);
}
```

### `keys()`

The `keys()` method returns a new Array Iterator object that contains the keys for each index in the array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let iterator = fruits.keys();

for (let e of iterator) {
  console.log(e);
}
```

### `values()`

The `values()` method returns a new Array Iterator object that contains the values for each index in the array.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let iterator = fruits.values();

for (let e of iterator) {
  console.log(e);
}
```

## Array Destructuring

Array destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js title="index.js"
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let [first, second, third, fourth] = fruits;

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Mango
console.log(fourth); // Orange
```

:::info 📝 Note
**Best Practice**

It is best practice to use the `const` keyword when declaring arrays, as the array values are not expected to change.
    
    ```js title="index.js"
        const fruits = ["Apple", "Banana", "Mango", "Orange"];
    ```
:::


## Conclusion

In this section, you learned how to create and manipulate arrays in JavaScript. You also learned about the different methods that can be used to manipulate arrays. You can now use arrays to store multiple values in a single variable and perform various operations on them. 
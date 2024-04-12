---
id: map-in-javascript
title: Maps in JavaScript
sidebar_label: Maps
sidebar_position: 27
tags:
  [
    JavaScript,
    Map,
    Data Structure,
    Collection,
    Key,
    Value,
    Pairs,
    Iteration,
    Iterative,
    Statements,
    Loops,
    Iteration,
    Iterating,
    Iterations,
  ]
description: "In this tutorial, we will learn about maps in JavaScript. We will learn how to use maps to store key-value pairs in JavaScript."
---

In JavaScript, a `Map` is a built-in object that allows you to store key-value pairs. It is often used when you want to store a collection of key-value pairs and access them by their keys.

## Creating a Map

You can create a new `Map` by using the `new` keyword followed by the `Map` constructor. You can pass an iterable

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

console.log(map); // Map { 'name' => 'John', 'age' => 23, 'person' => { name: 'John', age: 23, greet: [Function: greet] } }
```

- The `Map` constructor creates a new `Map` object.
- You can pass an iterable (such as an array of key-value pairs) to the `Map` constructor to initialize the map with the key-value pairs from the iterable.
- The `Map` object stores key-value pairs, so any duplicate keys will be overwritten.
- The order of elements in a `Map` is guaranteed to be the same as the order of insertion.
- The `Map` object is iterable, so you can use it in a `for...of` loop to iterate over its elements.
- The `Map` object has a `size` property that returns the number of key-value pairs in the map.
- The `Map` object has methods to add, delete, and check for the presence of key-value pairs.
- The `Map` object does not have methods to access key-value pairs by index, as it does not maintain the order of elements.
- The `Map` object can store any type of key or value, including objects, functions, and other maps.
- The `Map` object can store key-value pairs with the same key, as it uses the `===` operator to compare keys.
- The `Map` object can store key-value pairs with `NaN` as the key, as it uses the `===` operator to compare keys.

## Adding Key-Value Pairs to a Map

You can add key-value pairs to a `Map` by using the `set` method.

```js title="app.js"
const map = new Map();
map.set("name", "John");
map.set("age", 23);
map.set("person", {
  name: "John",
  age: 23,
  greet: function () {
    console.log(
      "Hello, I am " + this.name + " and I am " + this.age + " years old."
    );
  },
});
console.log(map); // Map { 'name' => 'John', 'age' => 23, 'person' => { name: 'John', age: 23, greet: [Function: greet] } }
```

In this example, the `set` method is used to add key-value pairs to the map. The first argument to the `set` method is the key, and the second argument is the value.

- The `set` method is used to add a new key-value pair to the map.
- If the key is already present in the map, its value will be updated with the new value.
- The `set` method returns the `Map` object, so you can chain multiple `set` calls together.
- The `set` method can store any type of key or value, including objects, functions, and other maps.
- The `set` method can store key-value pairs with the same key, as it uses the `===` operator to compare keys.
- The `set` method can store key-value pairs with `NaN` / `undefined` as the key, as it uses the `===` operator to compare keys.

## Deleting Key-Value Pairs from a Map

You can delete key-value pairs from a `Map` by using the `delete` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

map.delete("age");

console.log(map); // Map { 'name' => 'John', 'person' => { name: 'John', age: 23, greet: [Function: greet] } }
```

In this example, the `delete` method is used to remove the key-value pair with the key `"age"` from the map. The `delete` method returns `true` if the key-value pair is removed, and `false` otherwise.

- The `delete` method is used to remove a key-value pair from the map.
- If the key is present in the map, the key-value pair will be removed, and the method will return `true`.
- If the key is not present in the map, the method will return `false`.
- The `delete` method does not throw an error if the key is not present in the map.
- The `delete` method does not return the removed key-value pair.
- The `delete` method is chainable, so you can remove multiple key-value pairs from the map in a single statement.
- The `delete` method can be used to remove key-value pairs with `NaN` / `undefined` as the key, as it uses the `===` operator to compare keys.
- The `delete` method can be used to remove key-value pairs with the same key, as it uses the `===` operator to compare keys.

## Checking for the Presence of a Key in a Map

You can check if a key is present in a `Map` by using the `has` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

console.log(map.has("age")); // true
```

In this example, the `has` method is used to check if the key `"age"` is present in the map. If the key is present, the method will return `true`; otherwise, it will return `false`.

- The `has` method is used to check if a key is present in the map.
- If the key is present in the map, the method will return `true`.
- If the key is not present in the map, the method will return `false`.
- The `has` method does not throw an error if the key is not present in the map.
- The `has` method does not return the key itself.
- The `has` method is often used to check if a key is present in the map before adding or deleting it.
- The `has` method can be used to check for the presence of `NaN` / `undefined` as the key, as it uses the `===` operator to compare keys.
- The `has` method can be used to check for the presence of the same key, as it uses the `===` operator to compare keys.
- The `has` method can be used to check for the presence of a key with a value of `undefined`.

## Iterating Over a Map

You can iterate over the key-value pairs of a `Map` by using a `for...of` loop.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

for (const [key, value] of map) {
  console.log(key + ": " + value);
}
```

The `for...of` loop is used to iterate over the key-value pairs of the map. In each iteration, the value of the current key-value pair is assigned to the loop variable `[key, value]`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name: John
age: 23
person: [object Object]
```

In each iteration, the key and value of the current key-value pair are printed to the console.

## Iterating Over the Keys of a Map

You can iterate over the keys of a `Map` by using the `keys` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

for (const key of map.keys()) {
  console.log(key);
}
```

The `keys` method is used to iterate over the keys of the map. In each iteration, the value of the current key is assigned to the loop variable `key`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name
age
person
```

In each iteration, the key of the current key-value pair is printed to the console.

## Iterating Over the Values of a Map

You can iterate over the values of a `Map` by using the `values` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

for (const value of map.values()) {
  console.log(value);
}
```

The `values` method is used to iterate over the values of the map. In each iteration, the value of the current key-value pair is assigned to the loop variable `value`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
John
23
[object Object]
```

In each iteration, the value of the current key-value pair is printed to the console.

## Converting a Map to an Array

You can convert a `Map` to an array by using the `Array.from` method or the spread operator (`...`).

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
        console.log(
            "Hello, I am " + this.name + " and I am " + this.age + " years old."
        );
        },
    }],
]);

const array = Array.from(map);

console.log(array); // [ [ 'name', 'John' ], [ 'age', 23 ], [ 'person', { name: 'John', age: 23, greet: [Function: greet] } ] ]
```

- The `Array.from` method is used to create a new array from an iterable (such as a `Map`).
- The `Array.from` method returns a new array that contains the key-value pairs of the map.
- The spread operator (`...`) can also be used to create a new array from an iterable.
- The spread operator (`...`) returns a new array that contains the key-value pairs of the map.
- The `Array.from` method and the spread operator (`...`) can be used to convert a `Map` to an array of key-value pairs.
- The `Array.from` method and the spread operator (`...`) can be used to convert a `Map` to an array of keys or values.

## Using the Map Constructor

You can use the `Map` constructor to create an empty `Map` and then add key-value pairs to it.

```js title="app.js"
const map = new Map();
map.set("name", "John");
map.set("age", 23);
map.set("person", {
  name: "John",
  age: 23,
  greet: function () {
    console.log(
      "Hello, I am " + this.name + " and I am " + this.age + " years old."
    );
  },
});

console.log(map); // Map { 'name' => 'John', 'age' => 23, 'person' => { name: 'John', age: 23, greet: [Function: greet] } }
```

The `Map` constructor creates a new empty `Map` object. You can then use the `set` method to add key-value pairs to the map. The `Map` object stores key-value pairs, so any duplicate keys will be overwritten.

## Using the Spread Operator

You can use the spread operator (`...`) to create a new `Map` from an existing `Map`.

```js title="app.js"
const map1 = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const map2 = new Map([...map1]);

console.log(map2); // Map { 'name' => 'John', 'age' => 23, 'person' => { name: 'John', age: 23, greet: [Function: greet] } }
```

The spread operator (`...`) is used to create a new `Map` from an existing `Map`. The new `Map` contains the key-value pairs of the existing `Map`.

## Using the `forEach` Method

You can use the `forEach` method to iterate over the key-value pairs of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

map.forEach((value, key) => {
  console.log(key + ": " + value);
});
```

The `forEach` method is used to iterate over the key-value pairs of the map. In each iteration, the value of the current key-value pair is assigned to the loop variable `value`, and the key is assigned to the loop variable `key`. The loop body is executed for each key-value pair.

The output of the above example will be:

```plaintext title="Output"
name: John
age: 23
person: [object Object]
```

In each iteration, the key and value of the current key-value pair are printed to the console.

## Using the `clear` Method

You can use the `clear` method to remove all key-value pairs from a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

map.clear();

console.log(map); // Map {}
```

The `clear` method is used to remove all key-value pairs from the map. After calling the `clear` method, the map will be empty.

The `clear` method does not return any value.

The `clear` method can be used to remove all key-value pairs from the map in a single statement.    

## Using the `size` Property

You can use the `size` property to get the number of key-value pairs in a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

console.log(map.size); // 3
```

The `size` property returns the number of key-value pairs in the map. It can be used to get the size of the map in a single statement.

The `size` property is read-only, so you cannot change its value.

The `size` property can be used to get the number of key-value pairs in the map.

## Using the `entries` Method

You can use the `entries` method to get an iterator that contains the key-value pairs of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const iterator = map.entries();

console.log(iterator.next().value); // [ 'name', 'John' ]
console.log(iterator.next().value); // [ 'age', 23 ]
console.log(iterator.next().value); // [ 'person', { name: 'John', age: 23, greet: [Function: greet] } ]
```

The `entries` method returns an iterator that contains the key-value pairs of the map. You can use the `next` method of the iterator to get the next key-value pair.

The `entries` method can be used to get an iterator that contains the key-value pairs of the map.

The `entries` method can be used to iterate over the key-value pairs of the map.

## Using the `keys` Method

You can use the `keys` method to get an iterator that contains the keys of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const iterator = map.keys();

console.log(iterator.next().value); // name
console.log(iterator.next().value); // age
console.log(iterator.next().value); // person
```

The `keys` method returns an iterator that contains the keys of the map. You can use the `next` method of the iterator to get the next key.

The `keys` method can be used to get an iterator that contains the keys of the map.

The `keys` method can be used to iterate over the keys of the map.

## Using the `values` Method

You can use the `values` method to get an iterator that contains the values of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const iterator = map.values();

console.log(iterator.next().value); // John
console.log(iterator.next().value); // 23
console.log(iterator.next().value); // { name: 'John', age: 23, greet: [Function: greet] }
```

The `values` method returns an iterator that contains the values of the map. You can use the `next` method of the iterator to get the next value.

The `values` method can be used to get an iterator that contains the values of the map.

The `values` method can be used to iterate over the values of the map.

## Using the `Symbol.iterator` Property

You can use the `Symbol.iterator` property to get an iterator that contains the key-value pairs of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const iterator = map[Symbol.iterator]();

console.log(iterator.next().value); // [ 'name', 'John' ]
console.log(iterator.next().value); // [ 'age', 23 ]
console.log(iterator.next().value); // [ 'person', { name: 'John', age: 23, greet: [Function: greet] } ]
```

The `Symbol.iterator` property returns an iterator that contains the key-value pairs of the map. You can use the `next` method of the iterator to get the next key-value pair.

The `Symbol.iterator` property can be used to get an iterator that contains the key-value pairs of the map.

The `Symbol.iterator` property can be used to iterate over the key-value pairs of the map.

## Using the `for...of` Loop

You can use a `for...of` loop to iterate over the key-value pairs of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const [key, value] of map) {
  console.log(key + ": " + value);
}
```

The `for...of` loop is used to iterate over the key-value pairs of the map. In each iteration, the value of the current key-value pair is assigned to the loop variable `[key, value]`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name: John
age: 23
person: [object Object]
```

In each iteration, the key and value of the current key-value pair are printed to the console.

## Using the `for...of` Loop with the `entries` Method

You can use a `for...of` loop to iterate over the key-value pairs of a `Map` by using the `entries` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const [key, value] of map.entries()) {
  console.log(key + ": " + value);
}
```

The `for...of` loop is used to iterate over the key-value pairs of the map by using the `entries` method. In each iteration, the value of the current key-value pair is assigned to the loop variable `[key, value]`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name: John
age: 23
person: [object Object]
```

In each iteration, the key and value of the current key-value pair are printed to the console.

## Using the `for...of` Loop with the `keys` Method

You can use a `for...of` loop to iterate over the keys of a `Map` by using the `keys` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const key of map.keys()) {
  console.log(key);
}
```

The `for...of` loop is used to iterate over the keys of the map by using the `keys` method. In each iteration, the value of the current key is assigned to the loop variable `key`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name
age
person
```

In each iteration, the key of the current key-value pair is printed to the console.

## Using the `for...of` Loop with the `values` Method

You can use a `for...of` loop to iterate over the values of a `Map` by using the `values` method.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const value of map.values()) {
  console.log(value);
}
```

The `for...of` loop is used to iterate over the values of the map by using the `values` method. In each iteration, the value of the current key-value pair is assigned to the loop variable `value`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
John
23
[object Object]
```

In each iteration, the value of the current key-value pair is printed to the console.

## Using the `for...in` Loop

You can use a `for...in` loop to iterate over the keys of a `Map`.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const key in map) {
  console.log(key);
}
```

The `for...in` loop is used to iterate over the keys of the map. In each iteration, the value of the current key is assigned to the loop variable `key`, and the loop body is executed.

The output of the above example will be:

```plaintext title="Output"
name
age
person
```

In each iteration, the key of the current key-value pair is printed to the console.

## Using the `hasOwnProperty` Method

To check if the key is a direct property of the map and not inherited from its prototype chain, you can use the `hasOwnProperty` method. Here's an example:

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

for (const key in map) {
  if (map.hasOwnProperty(key)) {
    console.log(key);
  }
}
```

In this example, the `hasOwnProperty` method is used to check if the key is a direct property of the map. If it is, the key is printed to the console.

The output of the above example will be:

```plaintext title="Output"
name
age
person
```

In each iteration, the key is checked if it is a direct property of the map. If it is, the key is printed to the console.

## Using the `Array.from` Method

You can use the `Array.from` method to convert a `Map` to an array of key-value pairs.

```js title="app.js"
const map = new Map([
  ["name", "John"],
  ["age", 23],
  ["person", {
    name: "John",
    age: 23,
    greet: function () {
      console.log(
        "Hello, I am " + this.name + " and I am " + this.age + " years old."
      );
    },
  }],
]);

const array = Array.from(map);

console.log(array); // [ [ 'name', 'John' ], [ 'age', 23 ], [ 'person', { name: 'John', age: 23, greet: [Function: greet] } ] ]
```

The `Array.from` method is used to create a new array from the map. The new array contains the key-value pairs of the map.

The `Array.from` method can be used to convert a `Map` to an array of key-value pairs.

The `Array.from` method can be used to convert a `Map` to an array of keys or values.

:::info 📝 Note

## Why Use Maps?

Maps are often used when you want to store a collection of key-value pairs and access them by their keys. They are more flexible than objects, as they can store any type of key or value, including objects, functions, and other maps. They can also store key-value pairs with the same key, as they use the `===` operator to compare keys.

## Benefits of Using Maps

- Maps are iterable, so you can use them in a `for...of` loop to iterate over their elements.
- Maps have a `size` property that returns the number of key-value pairs in the map.
- Maps have methods to add, delete, and check for the presence of key-value pairs.
- Maps do not have methods to access key-value pairs by index, as they do not maintain the order of elements.
- Maps can store any type of key or value, including objects, functions, and other maps.
- Maps can store key-value pairs with the same key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with `NaN` as the key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with `undefined` as the key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with `null` as the key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with `0` as the key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with `false` as the key, as they use the `===` operator to compare keys.
- Maps can store key-value pairs with an empty string as the key, as they use the `===` operator to compare keys.

## When to Use Maps

- Use maps when you want to store a collection of key-value pairs and access them by their keys.
- Use maps when you want to store key-value pairs with the same key, as maps can store duplicate keys.
- Use maps when you want to store key-value pairs with `NaN` as the key, as maps can store `NaN` as the key.
- Use maps when you want to store key-value pairs with `undefined` as the key, as maps can store `undefined` as the key.
- Use maps when you want to store key-value pairs with `null` as the key, as maps can store `null` as the key.
- Use maps when you want to store key-value pairs with `0` as the key, as maps can store `0` as the key.
- Use maps when you want to store key-value pairs with `false` as the key, as maps can store `false` as the key.

## When Not to Use Maps

- Do not use maps when you want to access key-value pairs by index, as maps do not maintain the order of elements.
- Do not use maps when you want to store key-value pairs with the same key, as maps will overwrite the existing key-value pair.
- Do not use maps when you want to store key-value pairs with `NaN` as the key, as maps will treat `NaN` as the same key.
- Do not use maps when you want to store key-value pairs with `undefined` as the key, as maps will treat `undefined` as the same key.
- Do not use maps when you want to store key-value pairs with `null` as the key, as maps will treat `null` as the same key.
- Do not use maps when you want to store key-value pairs with `0` as the key, as maps will treat `0` as the same key.
- Do not use maps when you want to store key-value pairs with `false` as the key, as maps will treat `false` as the same key.

:::

## Summary

In this tutorial, we learned about maps in JavaScript. We learned how to use maps to store key-value pairs in JavaScript. We also learned how to add, delete, and check for the presence of key-value pairs in a map. Finally, we learned how to iterate over the key-value pairs, keys, and values of a map.
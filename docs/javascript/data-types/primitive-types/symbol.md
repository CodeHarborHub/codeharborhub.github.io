---
id: symbol
title: "Symbol Data Type in JavaScript"
sidebar_label: "Symbol"
sidebar_position: 7
tags: [javascript, data type, primitive type, symbol]
description: Learn about the symbol data type in JavaScript, how to create symbols, and common operations with symbols.
---

<AdsComponent />

<br />

In JavaScript, `Symbol` is a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique and immutable value. Symbols are used to create unique identifiers for object properties and are often used as property keys in objects. The `Symbol` type is a special data type that is used to create unique values that are guaranteed to be different from other values.

## Creating Symbols

You can create symbols in JavaScript using the `Symbol()` function. The `Symbol()` function returns a new unique symbol value each time it is called. Here is an example of creating a symbol:

```javascript title="app.js"
// Create a new symbol
let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1); // Output: Symbol()
console.log(symbol2); // Output: Symbol()

// Check if the symbols are equal

console.log(symbol1 === symbol2); // Output: false
```

In the example above, the `Symbol()` function is used to create two unique symbols, `symbol1` and `symbol2`. The symbols are guaranteed to be different from each other, as shown by the strict equality comparison (`===`) between `symbol1` and `symbol2`.

You can also create symbols with a description (also known as a symbol key) to provide additional information about the symbol. The description is a string that is used to identify the symbol. Here is an example of creating a symbol with a description:

```javascript title="app.js"
// Create a symbol with a description
let symbolWithDescription = Symbol("mySymbol");

console.log(symbolWithDescription); // Output: Symbol(mySymbol)
```

In the example above, the `Symbol("mySymbol")` function is used to create a symbol with the description `"mySymbol"`. The description is displayed when the symbol is converted to a string.

<AdsComponent />

<br />

## Common Operations with Symbols

### Using Symbols as Object Properties

Symbols are often used as property keys in objects to create unique properties that are not accessible using regular property access methods. Symbols are guaranteed to be unique, which makes them useful for creating private properties or methods in objects. Here is an example of using symbols as object properties:

```javascript title="app.js"
// Create a symbol for a property key
let firstName = Symbol("firstName");

// Create an object with a symbol property
let person = {
  [firstName]: "John",
  lastName: "Doe",
  age: 30
};

console.log(person[firstName]); // Output: John
```

In the example above, the `firstName` symbol is used as a property key in the `person` object to create a unique property that is not accessible using regular property access methods. The value associated with the `firstName` symbol can be accessed using bracket notation (`person[firstName]`).

### Using Symbols to Avoid Property Name Collisions

Symbols can be used to avoid property name collisions in objects. Since symbols are guaranteed to be unique, they can be used to create properties that are unlikely to clash with properties created by other code. This can be useful when working with third-party libraries or frameworks. Here is an example of using symbols to avoid property name collisions:

```javascript title="app.js"
// Create a symbol for a property key
let logSymbol = Symbol("log");

// Create an object with a symbol property
let logger = {
  [logSymbol]: function(message) {
    console.log(message);
  }
};

logger[logSymbol]("Logging a message"); // Output: Logging a message
```

In the example above, the `logSymbol` symbol is used as a property key in the `logger` object to create a unique property that contains a logging function. The logging function can be accessed using bracket notation (`logger[logSymbol]`) and called with a message argument.

### Using Well-Known Symbols

JavaScript provides a set of well-known symbols that are used to define the behavior of objects in specific contexts. Well-known symbols are predefined symbols that have special meanings and are used by built-in JavaScript objects. For example, the `Symbol.iterator` symbol is used to define an iterator method for objects that can be iterated over using a `for...of` loop. Here is an example of using the `Symbol.iterator` symbol:

```javascript title="app.js"
// Create an array
let numbers = [1, 2, 3];

// Get the iterator symbol
let iterator = numbers[Symbol.iterator]();

// Iterate over the array using the iterator
for (let number of iterator) {
  console.log(number);
}
```

In the example above, the `Symbol.iterator` symbol is used to get the iterator method of the `numbers` array. The iterator method is then used to iterate over the array elements using a `for...of` loop.

<AdsComponent />

<br />

Symbols are a powerful feature in JavaScript that allow you to create unique identifiers for object properties and avoid property name collisions. By using symbols, you can create properties that are guaranteed to be unique and not accessible using regular property access methods. Symbols are commonly used in libraries, frameworks, and built-in JavaScript objects to define special behaviors and features.

:::note

- Symbols are unique and immutable values that are used to create unique identifiers for object properties.
- You can create symbols using the `Symbol()` function with an optional description.
- Symbols are often used as property keys in objects to create unique properties that are not accessible using regular property access methods.
- Symbols can be used to avoid property name collisions and define special behaviors in objects.
- JavaScript provides a set of well-known symbols that are used to define the behavior of objects in specific contexts.
- Well-known symbols are predefined symbols that have special meanings and are used by built-in JavaScript objects.
- Symbols are a powerful feature in JavaScript that allow you to create unique identifiers for object properties and avoid property name collisions.
- By using symbols, you can create properties that are guaranteed to be unique and not accessible using regular property access methods.
- Symbols are commonly used in libraries, frameworks, and built-in JavaScript objects to define special behaviors and features.
- Symbols are unique and immutable values that are used to create unique identifiers for object properties.

:::

## Conclusion

In JavaScript, the `Symbol` data type is used to create unique and immutable values that can be used as property keys in objects. Symbols are guaranteed to be different from other values and are often used to create private properties, avoid property name collisions, and define special behaviors in objects. By using symbols, you can create unique identifiers that are not accessible using regular property access methods, making them a powerful tool for defining object properties and behaviors.
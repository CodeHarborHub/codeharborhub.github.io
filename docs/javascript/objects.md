---
id: objects-in-javascript
title: Objects in JavaScript
sidebar_label: Objects
sidebar_position: 16
tags: [JavaScript, Objects, Object Literals, Constructor Function, Dot Notation, Bracket Notation, Object Destructuring, Object Methods, Object Prototypes]
description: "In this tutorial, we will learn about objects in JavaScript. We will learn how to create objects, access object properties, and methods. We will also learn about object destructuring, object methods, and object prototypes."
---

In JavaScript, an object is a standalone entity, with properties and type. It is a collection of key-value pairs. The keys are strings and the values can be anything. An object can be created using object literal or constructor function.

## Creating Objects

There are two ways to create objects in JavaScript:

1. **Object Literal**: The object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces `{}`.
2. **Constructor Function**: The constructor function is used to create an object. It is a function that is used to create an object.

### Object Literal

The object literal is the easiest way to create an object. It is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces `{}`.

Here's an example of creating an object using object literal:

```js title="app.js"
// Creating an object using object literal
let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }

};

console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.email); // john@example.com
console.log(person.greet()); // Hello, my name is John Doe
```

In the above example, we have created an object `person` using object literal. The object has properties `name`, `age`, `email`, and a method `greet`.

### Constructor Function

The constructor function is used to create an object. It is a function that is used to create an object.

Here's an example of creating an object using constructor function:

```js title="app.js"
// Creating an object using constructor function
function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
}

let person = new Person('John Doe', 30, 'john@example.com');

console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.email); // john@example.com
console.log(person.greet()); // Hello, my name is John Doe
```

In the above example, we have created an object `person` using constructor function `Person`. The constructor function `Person` takes three parameters `name`, `age`, and `email` and assigns them to the object properties.

## Accessing Object Properties

You can access the properties of an object using dot notation or bracket notation.

### Dot Notation

You can access the properties of an object using dot notation `.`.

Here's an example of accessing object properties using dot notation:

```js title="app.js"
// Accessing object properties using dot notation
let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

console.log(person.name); // John Doe
console.log(person.age); // 30
console.log(person.email); // john@example.com

// Accessing object properties using dot notation
person.name = 'Ajay Dhangar';
console.log(person.name); // Ajay Dhangar
```

In the above example, we have accessed the properties of the object `person` using dot notation.

### Bracket Notation

You can also access the properties of an object using bracket notation `[]`.

Here's an example of accessing object properties using bracket notation:

```js title="app.js"
// Accessing object properties using bracket notation
let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'

};

console.log(person['name']); // John Doe
console.log(person['age']); // 30
console.log(person['email']); // john@example.com
```

In the above example, we have accessed the properties of the object `person` using bracket notation.

## Object Destructuring

Object destructuring is a way to extract properties from an object and assign them to variables.

Here's an example of object destructuring:

```js title="app.js"
// Object destructuring

let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};

let { name, age, email } = person;

console.log(name); // John Doe
console.log(age); // 30
console.log(email); // john@example.com
```

In the above example, we have extracted the properties `name`, `age`, and `email` from the object `person` and assigned them to variables using object destructuring.

## Object Methods

An object can also have methods. A method is a function that is a property of an object.

Here's an example of object methods:

```js title="app.js"
// Object methods

let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // Hello, my name is John Doe
```

In the above example, we have added a method `greet` to the object `person`.

## Object Prototypes

In JavaScript, every object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

Here's an example of object prototypes:

```js title="app.js"
// Object prototypes

let person = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }

};

console.log(person.toString()); // [object Object]
```

In the above example, we have called the `toString` method on the object `person`. The `toString` method is inherited from the prototype of the object `person`.

:::info Note

In JavaScript, all objects inherit from `Object.prototype`. The `Object.prototype` is the prototype of all objects.

:::

## Conclusion

In this tutorial, we learned about objects in JavaScript. We learned how to create objects, access object properties, and methods. We also learned about object destructuring, object methods, and object prototypes.
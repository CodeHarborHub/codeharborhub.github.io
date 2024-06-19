---
title: 'Unveiling the Significance of JS ES6 features'
sidebar_label: Design-Patterns
authors: [dharshibalasubramaniyam]
tags: [ES6, javascript, best-practices]
date: 2024-06-18
hide_table_of_contents: true
---

- In the fast-paced world of web development, staying ahead of the curve is not just an advantage — it’s a necessity. Enter ECMAScript 6, or ES6 for short, a game-changer that has redefined the landscape of JavaScript programming.

- What if you could write JavaScript code that is not only more concise but also more powerful? How would it feel to have a set of features that streamline your workflow, enhance code readability, and unlock new possibilities in your projects? The answer lies in understanding the transformative impact of ES6 on the world’s most widely-used programming language.

- As we dive into the significance of ES6, we’ll discover how this evolution has not only simplified the developer experience but has also laid the foundation for more robust, expressive, and maintainable code.

- ES6 introduces a plethora of features that elevate JavaScript development to new heights.


## 1. let and const
- In ECMAScript 2015 (ES6), the let and const keywords were introduced to declare variables, offering improvements over the traditional var keyword.
- Scope: Variables declared with ‘let’ and ‘const’ have block-level scope, meaning they are limited to the block, statement, or expression where ‘var’ has global level scope.

```
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
  console.log(x); // Outputs: 10
  console.log(y); // Outputs: 20
  console.log(z); // Outputs: 30
}


console.log(x); // Outputs: Error: x is not defined
console.log(y); // Outputs: Error: x is not defined
console.log(z); // Outputs: 30
```

- Hoisting: Unlike variables declared with var, variables declared with let and const are not hoisted to the top of their scope. They remain in the temporal dead zone until the point of declaration.

```
console.log(a); // outputs: 20
var a = 20;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;

console.log(c); // Error: Cannot access 'c' before initialization
const c = 20;
```

- Reassignment: Variables declared with let can be reassigned, allowing for flexibility in updating values where, variables declared with const are constant and cannot be reassigned once a value is assigned.

```
let p = 30;
p = 40; // Valid

const pi = 3.14;
pi = 3.145; // Error: Assignment to constant variable
```

- However, this does not make objects or arrays declared with const immutable; it means the reference to the object or array cannot be changed.

```
const colors = ['red', 'green', 'blue'];
colors.push('yellow'); // Valid
colors = ['purple'];   // Error: Assignment to constant variable
```

- Declaration: Variables declared with const must be assigned a value at the time of declaration.

```
var x; // valid
let y; // valid
const z; // Error: Missing initializer in const declaration
```

## 2. Arrow functions

- Arrow functions, introduced in ECMAScript 2015 (ES6), provide a concise and more readable syntax for writing functions in JavaScript.

```
// In ES5
var add = function(x, y) {
  return x + y;
};
// ES6 (Arrow Function)
const add = (x, y) {
  return x + y;
}
// If the function body is a single expression, 
// you can omit the braces {} and the return keyword.
const add = (x, y) => x + y;
```

- Arrow functions are more concise compared to traditional function expressions, especially when the function has a simple body.


## 3. Template literals

- Template literals, introduced in ECMAScript 2015 (ES6), provide a more flexible and concise way to create strings in JavaScript. They use backticks (`) instead of single or double quotes and allow for embedded expressions and multiline strings.
- Embedded expressions: Template literals support the embedding of expressions, including variables, functions, and operations, directly within the string.

```
// In ES5
var a = 5;
var b = 10;
var result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b) + '.';

// In ES6 (Template Literal with Embedded Expression)
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
```

- Multiline strings: One of the significant advantages of template literals is their ability to create multiline strings without the need for explicit line breaks or concatenation.

```
// In ES5
var multilineString = 'This is a long string\n' +
                      'that spans multiple lines\n' +
                      'using concatenation.';

// In ES6 (Template Literal)
const multilineString = `This is a long string
that spans multiple lines
using template literals.`;
```

## 4. Destructuring assignments

- Destructuring is a powerful feature introduced in ECMAScript 2015 (ES6) that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and expressive way.
- It simplifies the process of working with complex data structures.
- Array destructuring

```
// In ES5
var numbers = [1, 2, 3];
var a = numbers[0];
var b = numbers[1];
var c = numbers[2];

// In ES6
const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Outputs: 1 2 3
```

- Object destructuring - Alias assignment, Nested destructuring

```
// In ES5
var person = { name: 'John', marks: 85 };
var name = person.name;
var marks = person.marks;

// In ES6
const person = { name: 'John', marks: 85 };
const { name, marks } = person;
console.log(name, marks); // Outputs: John 85

// In ES6 - alias assignment
const person = { name: 'John', marks: 85 };
const { name: studentName, marks: finalMarks } = person;
console.log(studentName, finalMarks); // Outputs: John 85

//In ES6 - Nested destructuring
const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const { name, age, address: { city, country } } = user;
console.log(name, age, city, country); // Outputs: John 30 New York USA
```

- Function Parameter Destructuring

```
// ES6
function printPerson({ firstName, lastName }) {
  console.log(`${firstName} ${lastName}`);
}

const person = { firstName: 'John', lastName: 'Doe' };
printPerson(person); // Outputs: John Doe
```

## 5. Default parameters

- Default parameters, introduced in ECMAScript 2015 (ES6), allow you to assign default values to function parameters in case the arguments are not provided or are explicitly set to undefined.

```
// without default values

function add(x, y) {
  return x + y;
}
console.log(add()); // outputs NaN 
console.log(add(1, 2)); // outputs 3

// let’s see how we handle this issue in ES5 and ES6.

// In ES5
function add(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

// ES6 (Default Parameters)
function add(x = 0, y = 0) {
  return x + y;
}

console.log(add());       // Outputs: 0
console.log(add(1, 2));   // Outputs: 3
```

## 6. The spread and rest operator

- The rest and spread operators are two powerful features introduced in ECMAScript 2015 (ES6) that enhance the way we work with arrays and function parameters. Despite having similar syntax (the ellipsis …), they serve different purposes.
- As the name suggests, the spread operator “spreads” the values in an array or a string across one or more arguments. In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.

```
// In ES6 - spread operator example 1 with array

const greeting = ['Welcome', 'back', 'John!'];

console.log(greeting);   // ['Welcome', 'back', 'John!']
console.log(...greeting); // Welcome back John!

// Note: console.log(...greeting) is equivalent to console.log('Welcome', 'back', 'John!');
// In ES6 - spread operator example 1 with Object

const obj1 = { a : 1, b : 2 };

// add members obj1 to obj3
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}
```

- The rest operator is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator collects several elements compress them into an array. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.

```
// In ES6 - rest operator example 1
let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]

// In ES6 - rest operator example 2
function func(a, b, ...nums) {
  console.log( a + ' ' + b ); // 1 2
  // the rest go into titles array
  console.log(nums); [3, 4, 5]
}

func(1, 2, 3, 4, 5);

// Note: There must be only one rest operator in javascript functions and 
// should always be at the end in the parameter list, else it causes an error.
```

## 7. Promises

- Promises were introduced in ECMAScript 2015 (ES6) to simplify asynchronous programming and provide a more structured way to handle asynchronous operations.
They are especially useful for dealing with asynchronous operations like network requests, file reading, or timeouts.
- Creating a promise — A Promise is created using the Promise constructor, which takes a function called the "executor." The executor function has two parameters, resolve and reject, which are functions provided by the Promise implementation.
- A Promise can be in one of three states: Pending, Fulfilled, Rejected
- Pending: The initial state; the promise is neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully, and the promise has a resulting value.
- Rejected: The operation failed, and the promise has a reason for the failure.
- Handling promises — To handle the result of a Promise, you can use the .then() method for success and .catch() method for failure. These methods are called on the Promise instance.

```
// creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulate success or failure randomly

      if (success) {
        const data = { message: 'Data successfully fetched!' };
        resolve(data); // Resolve with the fetched data
      } else {
        reject(new Error('Failed to fetch data')); // Reject with an error
      }
    }, 1000); // Simulate a 1-second delay
  });
};

// handling promise
fetchData()
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

- We define a function fetchData that returns a new Promise.

- Inside the Promise constructor, we simulate an asynchronous operation using setTimeout. The operation randomly succeeds or fails.

- If the operation is successful, we call resolve with an object representing the fetched data. If there is an error, we call reject with an Error object.

- We use the then method to handle the successful result and the catch method to handle errors.

- promise.all() — A utility method that takes an array of Promises and returns a new Promise that is fulfilled with an array of the fulfilled values when all the promises in the array are fulfilled. If any promise in the array is rejected, the resulting Promise is rejected with the reason of the first rejected promise.

```
const promise1 = Promise.resolve('One');
const promise2 = Promise.resolve('Two');
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Three'), 1000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // Outputs: ['One', 'Two', 'Three']
  })
  .catch((error) => {
    console.error(error);
  });

```

- promise.race() — Similar to Promise.all(), but it settles as soon as any of the promises in the array settles, either fulfilled or rejected.

```
const promise1 = Promise.resolve('Fast');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Slow'), 2000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // Outputs: 'Fast'
  })
  .catch((error) => {
    console.error(error);
  });
```

## 8. Modules

- In ECMAScript 2015 (ES6), the module system was introduced to allow developers to organize their code into reusable and maintainable pieces. Before ES6 modules, JavaScript relied on various patterns like immediately-invoked function expressions (IIFE) or the CommonJS pattern for modular development. ES6 modules provide a standardized and native way to work with modules in JavaScript.
- In ES6, a file becomes a module when it contains at least one import or export statement.
- export statement is used to specify what values are accessible from a module, and the import statement is used to bring those values into another module.
- Individual export

```
// student.js
export const name = "Mary";
export const age = 17;

// main.js
import { name, age } from "./person.js";
console.log(name, age); // outputs: Mary 17


- All at once export
// student.js
const name = "Jesse";
const age = 40;

export {name, age};

// main.js
import { name, age } from "./person.js";
console.log(name, age); // outputs: Mary 17
```

- default export — A module can have a default export, which is the main export of the module. It is often used when a module represents a single value or function.

```
// myModule.js

// Default exporting a function
export default function() {
  console.log('Default function executed!');
}

// main.js

// Importing the default export
import myDefaultFunction from './myModule';

myDefaultFunction(); // Outputs: Default function executed!
```

## 9. Classes
- Classes in ECMAScript 2015 (ES6) introduced a more convenient and syntactic way to create constructor functions and work with prototype-based inheritance. JavaScript, being a prototype-based language, lacked a formal class structure prior to ES6.
- Classes provide a cleaner and more familiar syntax for creating objects and organizing code in an object-oriented manner.

```
class Animal {
  // Constructor method for initializing instances
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  // Method for making the animal make its sound
  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// Creating instances of the class
const dog = new Animal('Dog', 'Woof');
const cat = new Animal('Cat', 'Meow');

// Using class methods
dog.makeSound(); // Outputs: Dog says Woof
cat.makeSound(); // Outputs: Cat says Meow
```

Classes support inheritance through the extends keyword. This allows a new class to inherit the properties and methods of an existing class.

```
class Cat extends Animal {
  constructor(name, sound, color) {
    super(name, sound); // Calls the constructor of the parent class
    this.color = color;
  }

  // unique method for cats
  purr() {
    console.log(`${this.name} purrs softly.`);
  }
}

const kitty = new Cat('Kitty', 'Meow', 'White');
kitty.makeSound(); // Outputs: Kitty says Meow
kitty.purr();      // Outputs: Kitty purrs softly.
```

## 10. Symbols
- Symbols are a primitive data type introduced in ECMAScript 2015 (ES6) to provide a way to create unique identifiers.
- Unlike strings or numbers, symbols are guaranteed to be unique, which makes them useful for scenarios where you need to create property keys that won’t clash with other properties.

```
// creating symbol
const mySymbol = Symbol();
console.log(typeof mySymbol); // Outputs: symbol
```

Symbols are guaranteed to be unique, even if they have the same description. The description is a human-readable string that can be used for debugging but does not affect the uniqueness of the symbol.

```
const symbol1 = Symbol('apple');
const symbol2 = Symbol('apple');

console.log(symbol1 === symbol2); // Outputs: false

// Symbols are often used to create non-enumerable properties on objects,
// helping prevent unintentional name collisions.

const myObject = {
  [Symbol('key')]: 'value',
};

for (const key in myObject) {
  console.log(key); // No output, as the symbol property is non-enumerable
}

console.log(Object.keys(myObject)); // Outputs: []
```

## conclusion
From the simplicity of arrow functions to the modularity of ES6 modules, and the flexibility of template literals, ES6 has revolutionized the way developers write and structure their code. The introduction of let and const for variable declarations, destructuring for concise data extraction, and the powerful features of Promises for asynchronous operations have all contributed to a more robust and developer-friendly JavaScript.

ES6 not only addressed common pain points in JavaScript but also paved the way for a more modern and scalable approach to building applications. With advancements like the spread and rest operators, default parameters, and the introduction of classes for object-oriented programming, ES6 has empowered developers to create cleaner, more maintainable code.

In conclusion, ES6 has not only elevated the capabilities of JavaScript but has also redefined the developer experience, making it more enjoyable and productive.

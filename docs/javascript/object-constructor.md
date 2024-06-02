---
id: Object Constructor
title: JavaScript Object Constructor
sidebar_label: Object Constructor
sidebar_position: 17
tags : [JavaScript,Object,OOP,constructor,constructor-function,function ]
description: "this tutorial demonstrates how to use constructors in javascript , types of constructors and methods"
---

# Object Constructor Functions

Sometimes we need to create many objects of the same type. To create an object type, we use an object constructor function. It is considered good practice to name constructor functions with an upper-case first letter.

## Object Type: Person

```javascript
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```
:::info Note

> In the constructor function, `this` has no value. The value of `this` will become the new object when a new object is created.

:::
### Creating New Person Objects

Now we can use `new Person()` to create many new Person objects:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
```

## Property Default Values

A value given to a property will be a default value for all objects created by the constructor:

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

### Adding a Property to an Object

Adding a property to a created object is easy:

```javascript
myFather.nationality = "English";
```

:::info Note

> The property will be added to `myFather`. Not to any other Person objects.

:::
### Adding a Property to a Constructor

You cannot add a new property directly to an object constructor. To add a new property, you must add it to the constructor function prototype:

```javascript
Person.prototype.nationality = "English";
```

## Adding a Method to a Constructor

You cannot add a new method directly to an object constructor function. This code will produce a TypeError:

```javascript
Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
// TypeError: myMother.changeName is not a function
```

## Built-in JavaScript Constructors

JavaScript has built-in constructors for all native objects:

```javascript
new Object();   // A new Object object
new Array();    // A new Array object
new Map();      // A new Map object
new Set();      // A new Set object
new Date();     // A new Date object
new RegExp();   // A new RegExp object
new Function(); // A new Function object
```

## Best Practices

- Use object literals `{}` instead of `new Object()`.
- Use array literals `[]` instead of `new Array()`.
- Use pattern literals `/()/` instead of `new RegExp()`.
- Use function expressions `() {}` instead of `new Function()`.

### Examples

```javascript
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/;         // regexp object
function(){}; // function
```

### Creating Another Person Object

```javascript
const mySelf = new Person("Johnny", "Rally", 22, "green");
```

![JavaScript Constructors](https://miro.medium.com/v2/resize:fit:804/1*oREMGa3m7L4j1DzdNJc6GA.jpeg)

## Constructor Functions in Detail

### Constructor

A constructor is a function that initializes an object. In JavaScript, constructors are more similar to normal Java constructors.

### Object Constructor

In JavaScript, there is a special constructor function known as `Object()` that is used to create and initialize an object. The return value of the `Object()` constructor is assigned to a variable. The variable contains a reference to the new object. We need an object constructor to create an object “type” that can be used multiple times without redefining the object every time.

#### Example

```javascript
function GFG(A, B, C) {
    this.g = A;
    this.f = B;
    this.gg = C;
}
```
Here, `GFG` is the constructor name and `A`, `B`, `C` are the arguments of the constructor.

### Instantiating an Object Constructor

There are two ways to instantiate an object constructor:

1. 
    ```javascript
    var object_name = new Object(); 
    var object_name = new Object("java", "JavaScript", "C#");
    ```
2. 
    ```javascript
    var object_name = { };
    ```

In the first method, the object is created by using the `new` keyword like in normal OOP languages, and `"Java"`, `"JavaScript"`, `"C#"` are the arguments passed when the constructor is invoked. In the second method, the object is created using curly braces `{ }`.

### Assigning Properties to the Objects

There are two ways to assign properties to objects:

#### Using Dot (.) Operator

```javascript
object_name.properties = value;
```

#### Using Bracket Notation

```javascript
object_name['properties'] = value;
```

#### Example 1: Using `new` Keyword and Dot Operator

```javascript
// Creating object using "new" keyword 
var gfg = new Object(); 
  
// Assigning properties to the object using dot (.) operator     
gfg.a = "JavaScript"; 
gfg.b = "GeeksforGeeks"; 
  
console.log("Subject: " + gfg.a); 
console.log("Author: " + gfg.b );
```
**Output:**
```
Subject: JavaScript
Author: GeeksforGeeks
```

#### Example 2: Using Curly Braces and Bracket Notation

```javascript
// Creating an object using "{ }" bracket 
var gfg = { }; 
  
// Assigning properties to the object using bracket notation 
gfg['a'] = "JavaScript"; 
gfg['b'] = "GeeksforGeeks"; 
  
console.log("Subject: " + gfg.a); 
console.log("Author: " + gfg.b );
```
**Output:**
```
Subject: JavaScript
Author: GeeksforGeeks
```

#### Example 3: Using Function with Object Constructor

```javascript
// Creating object     
var gfg = new Object(); 
  
// Assigning properties to the object     
gfg.a = "JavaScript"; 
gfg.b = "GeeksforGeeks"; 
  
// Use function() 
gfg.c = function () { 
    return (gfg.a + " " + gfg.b); 
}; 
  
console.log("Subject: " + gfg.a); 
console.log("Author: " + gfg.b); 
  
// Call function with object constructor     
console.log("Adding the strings: " + gfg.c() );
```
**Output:**
```
Subject: JavaScript
Author: GeeksforGeeks
Adding the strings: JavaScript GeeksforGeeks
```

#### Example: Another Way to Create a Function Using Function Name

```javascript
// Creating object using "{ }" bracket 
var gfg = { }; 
  
// Assigning properties to the object     
gfg.a = "JavaScript"; 
gfg.b = "GeeksforGeeks"; 
  
// Use function() 
gfg.c = add; 
  
// Declare function add() 
function add() { 
    return (gfg.a + " " + gfg.b); 
}; 
  
console.log("Subject: " + gfg.a); 
console.log("Author: " + gfg.b); 
  
// Call function with object constructor     
console.log("Adding the strings: " + gfg.c());
```
**Output:**
```
Subject: JavaScript
Author: GeeksforGeeks
Adding the strings: JavaScript GeeksforGeeks
```

## Conclusion

Object constructor functions in JavaScript provide a powerful way to create and manage objects of the same type. By following best practices, such as using prototypes and understanding the limitations of constructors, you can write more efficient and maintainable code.
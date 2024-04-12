---
id: datatypes-in-javascript
title: Data Types in JavaScript
sidebar_label: Data Types
sidebar_position: 1
tags: [JavaScript, Data Types, Primitive Data Types, Non-Primitive Data Types, String, Number, BigInt, Boolean, Undefined, Symbol, 'Null', Object, Array, Function, Type Conversion, Implicit Type Conversion, Explicit Type Conversion]
description: What is the data type in JavaScript? Learn about the primitive and non-primitive data types in JavaScript, including string, number, bigint, boolean, undefined, symbol, null, object, array, and function.
---

Data types are the classification or categorization of data items. It represents the kind of value that tells what operations can be performed on a particular data. Since everything is an object in JavaScript, data types are divided into two categories:

1. **Primitive Data Types**
2. **Non-Primitive Data Types**

## Primitive Data Types

JavaScript has seven primitive data types: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`.

### 1. String Data Type

```js title="index.js"
let name = "John Doe";
let message = 'Hello World!';
```

### 2. Number Data Type

The number data type is used to represent numeric values. It can be an integer or a floating-point number. For example:

```js title="index.js"
let count = 100;
let price = 99.99;
```

### 3. Boolean Data Type

The boolean data type represents a logical value. It can have only two values: `true` or `false`. For example:

```js title="index.js"
let isTrue = true;
let isFalse = false;
```

### 4. Undefined Data Type

The `undefined` data type represents an undefined value. If a variable has been declared, but has not been assigned a value, it is of type `undefined`. For example:

```js title="index.js"
let data;
console.log(data); // Output: undefined
```

### 5. Null Data Type

The `null` data type represents a null value. In JavaScript, `null` is not a reference to a non-existing object. It is simply a special value that represents "nothing", "empty", or "value unknown". For example:

```js title="index.js"
let car = null;
```

### 6. Symbol Data Type

The `symbol` data type represents a unique and immutable value and may be used as the key of an `Object` property. For example:

```js title="index.js"
let id = Symbol('id');
```

### 7. BigInt Data Type

The `bigint` data type is used to represent whole numbers larger than `2^53 - 1`. It is a new feature in JavaScript and is not supported in all browsers. For example:

```js title="index.js"
let value = 9007199254740991n;
```

## Non-Primitive Data Types

Non-primitive data types are called reference types because they are accessed by reference. These data types are `Object`, `Array`, and `Function`.

### 1. Object Data Type

The `object` data type represents a collection of key-value pairs. For example:

```js title="index.js"
let person = {
  name: 'John Doe',
  age: 25
};

console.log(person.name); // Output: John Doe
```

### 2. Array Data Type

The `array` data type represents a list of elements. For example:

```js title="index.js"
let colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: red
```

### 3. Function Data Type

The `function` data type represents a function. For example:

```js title="index.js"
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('John Doe')); // Output: Hello, John Doe!
```

## Type Conversion

Type conversion is the process of converting the value from one data type to another. JavaScript provides two types of type conversion:

1. **Implicit Type Conversion**
2. **Explicit Type Conversion**

### 1. Implicit Type Conversion

Implicit type conversion, also known as type coercion, is the automatic conversion of data types. For example:

```js title="index.js"
let x = 10;
let y = "5";
let z = x + y;

console.log(z); // Output: 105
```

In the above example, the number `10` is converted to a string and concatenated with the string `"5"`.

### 2. Explicit Type Conversion

Explicit type conversion, also known as type casting, is the manual conversion of data types. For example:

```js title="index.js"
let x = "10";
let y = 5;
let z = Number(x) + y;

console.log(z); // Output: 15
```

In the above example, the string `"10"` is converted to a number and added to the number `5`.

:::tip tips and tricks
- In JavaScript, you can use the `Number()`, `String()`, `Boolean()`, and `BigInt()` functions to convert a value to a number, string, boolean, and bigint, respectively.
- The `parseInt()` and `parseFloat()` functions are used to convert a string to an integer and floating-point number, respectively.
:::

:::info note
**1. Difference between primitive and non-primitive data types:**

|No. |Primitive Data Types|Non-Primitive Data Types|
|--- |--- |--- |
|1. |Primitive data types are immutable.|Non-primitive data types are mutable.|
|2. |Primitive data types are stored in the stack.|Non-primitive data types are stored in the heap.|
|3. |Primitive data types are accessed by value.|Non-primitive data types are accessed by reference.|

**2. Type conversion in JavaScript:**

|No. |Implicit Type Conversion|Explicit Type Conversion|
|--- |--- |--- |
|1. |Implicit type conversion is the automatic conversion of data types.|Explicit type conversion is the manual conversion of data types.|
|2. |Implicit type conversion is performed by JavaScript.|Explicit type conversion is performed by the developer.|
|3. |Implicit type conversion is also known as type coercion.|Explicit type conversion is also known as type casting.|

**3. Difference between pass by value and pass by reference:**

|No. |Pass by Value|Pass by Reference|
|--- |--- |--- |
|1. |In pass by value, a copy of the actual value is passed to the function.|In pass by reference, the actual value is passed to the function.|
|2. |Pass by value is used for primitive data types.|Pass by reference is used for non-primitive data types.|
|3. |Pass by value is used in JavaScript for primitive data types.|Pass by reference is used in JavaScript for non-primitive data types.|
|4. |Pass by value is faster than pass by reference.|Pass by reference is slower than pass by value.|
|5. |Pass by value is used in the stack.|Pass by reference is used in the heap.|

6. for example:
   ```js title="pass by value"
    let x = 10;
    let y = x;
    x = 20;
    console.log(y); // Output: 10
   ```
   ---

   ```js title="Pass by Reference"
    let person = { 
      name: 'Ajay Dhangar', 
      age: 25 
    };
    let p = person;
    person.name = 'Jane Doe';
    console.log(p.name); // Output: Jane Doe
   ```

**4. Difference between `null` and `undefined`:**

|No. |null|undefined|
|--- |--- |--- |
|1. |`null` represents a null value.|`undefined` represents an undefined value.|
|2. |`null` is an object.|`undefined` is a type.|
|3. |`null` is assigned to a variable.|`undefined` is the value of a variable that has not been assigned a value.|
|4. |`null` is used to represent "nothing", "empty", or "value unknown".|`undefined` is used to represent "undefined", "not defined", or "value unknown".|
|5. |`null` is a special value that represents "nothing", "empty", or "value unknown".|`undefined` is a special value that represents an undefined value.|
|6. |`let car = null;`|`let data;`|
|   |`console.log(car); // Output: null`|`console.log(data); // Output: undefined`|

:::

## Conclusion

In this article, we learned about the data types in JavaScript. We also learned about the type conversion in JavaScript. Understanding data types and type conversion is important for writing efficient and bug-free code. 
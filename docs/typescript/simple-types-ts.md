---
id: simple-types-ts
title: Simple Datatypes in TypeScript
sidebar_label: Simple Datatypes in TypeScript
sidebar_position: 2
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Simple Datatypes used in TypeScript
---

In this tutorial, you will learn about the basic concepts of data types in TypeScript. We know that TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development.

In this section, we focus more on generic datatypes that transcend into TypeScript from JavaScript, which will be helpful to know once we move forward to TypeScript Special Datatypes.

You will explore various data types such as **string, number, boolean, array, tuple, enum, any, void, null, and undefined,** and learn how to use them effectively in your TypeScript programs.

## List of Datatypes common in both JavaScript and TypeScript -

## 1. Number

The 'Number' datatype is used to represent both integer and floating-point numbers. Also includes special values like 'Infinity', '-Infinity', and 'NaN'.

Example: `let age: number = 25;`

## 2. String

The 'String' datatype is used to represent a sequence of characters.

Example: `let name: string = "Alice";`

## 3. Boolean

The 'Boolean' datatype is used to represent a logical entity with two values: true or false.

Example: `let isActive: boolean = true;`

## 4. Object

The 'Object' datatype is used to represent a collection of key-value pairs.

Example: `let person: object = { name: "Alice", age: 25 };`

## 5. Array

The 'Array' datatype is used to represent a list of values.

Example: `let numbers: number[] = [1, 2, 3, 4];`

## 6. Function

The 'Function' datatype is used to represent a callable piece of code.

Example: `let greet: Function = function(name: string) { return "Hello " + name; };`

## 7. Undefined

The 'Undefined' datatype is used to represent a variable that has been declared but not assigned a value.

Example: `let notAssigned: undefined;`

## 8. Null

The 'Null' datatype is used to represent the intentional absence of any object value.

Example: `let empty: null = null;`

## 9. Symbol

The 'Symbol' datatype (introduced in ES6) is used to represent a unique and immutable primitive value.

Example: `let sym: symbol = Symbol("unique");`

## 10. BigInt

The 'BigInt' datatype (introduced in ES2020) is used to represent an integer with arbitrary precision.

Example: `let bigNumber: bigint = 9007199254740991n;`

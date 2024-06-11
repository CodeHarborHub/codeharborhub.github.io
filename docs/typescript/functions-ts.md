---
id: funtions-ts
title: Functions in TypeScript
sidebar_label: Functions in TypeScript
sidebar_position: 5
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Functions used in TypeScript
---

Now that you're equipped with a detailed description of Simple Datatypes, Special Datatypes, Control Statements and other conecpts, it's time to put them to good use!

In this section, you will explore various function-related concepts such as functions, function types, optional parameters, default parameters, rest parameters, and function overloadings, and learn how to use them effectively in your TypeScript programs.

## 1. Functions

 Type annotations in functions ensure that the arguments passed to the function and the value it returns are of the expected type.

Example:

```tsx title='typescript'
function add(a: number, b: number): number {
    return a + b;
}

let result = add(5, 3); // 8
console.log(result); // Output: 8
```

## 2. Function Types

Function types specify the parameter types and return type, allowing you to ensure consistency when assigning functions to variables.

Example:

```tsx title='typescript'
let myFunction: (a: number, b: number) => number;

myFunction = function(x: number, y: number): number {
    return x + y;
}

console.log(myFunction(2, 3)); // Output: 5
```

## 3. Optional Parameters

Optional parameters allow you to call a function without passing some arguments, using the ? syntax.

Example:

```tsx title='typescript'
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!
```

## 4. Default Parameters

Default parameters allow you to specify default values for function parameters, which will be used if no value is provided.

Example:

```tsx title='typescript'
function multiply(a: number, b: number = 1): number {
    return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10
```

## 5. Rest Parameters

Use the rest parameters to handle an infinite number of arguments of a function. Rest parameters allow you to represent an indefinite number of arguments as an array.

Example:

```tsx title='typescript'
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

## 6. Function Overloadings

Function overloadings allow you to define multiple function signatures for the same function, enabling it to handle different argument types and counts.

Example:

```tsx title='typescript'
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}

console.log(combine("Hello, ", "world!")); // Output: Hello, world!
console.log(combine(10, 20)); // Output: 30
```

These concepts and examples illustrate how to effectively use functions and their advanced features in TypeScript, enhancing your ability to write robust and type-safe code.

---
id: generics-ts
title: Generics in TypeScript
sidebar_label: Generics in TypeScript
sidebar_position: 9
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Generics in TypeScript
---

In Computer Science, generics refer to a programming language feature that allows for the creation of functions, classes, and data structures that can operate on multiple data types.

The concept of generics is rooted in the idea of parameterizing types or algorithms over other types. This means that you can define a function, class, or data structure with placeholders for the types it works with, rather than specifying concrete types.

## 1. Introduction to TypeScript Generics

Discover how to use TypeScript generics to develop generic functions. Generics enable you to write functions that can work with a variety of data types, providing type safety and code reusability.

Example -

```tsx title='typescript'
// Generic function to echo an argument
function echo<T>(arg: T): T {
    return arg;
}

let result1: string = echo("Hello, TypeScript Generics!");
let result2: number = echo(42);

console.log(result1); // Output: Hello, TypeScript Generics!
console.log(result2); // Output: 42
```

## 2. Generic Constraints

Generic constraints allow you to restrict the types that can be used with generics, providing additional type safety and enabling more precise type inference.

Example -

```tsx title='typescript'
// Generic function to log the length of an array
function logLength<T extends { length: number }>(arr: T): void {
    console.log(`Length of array: ${arr.length}`);
}

logLength([1, 2, 3]); // Output: Length of array: 3
logLength("typescript"); // Output: Length of array: 10
// logLength(42); // Error: Argument of type '42' is not assignable to parameter of type '{ length: number; }'
```

## 3. Generic Classes

Generic classes allow you to create classes that can work with different types of data, providing flexibility and code reusability.

Example -

```tsx title='typescript'
// Generic class for a pair of values
class Pair<T, U> {
    constructor(public first: T, public second: U) {}

    toString(): string {
        return `(${this.first}, ${this.second})`;
    }
}

let pair1 = new Pair<number, string>(1, "one");
let pair2 = new Pair<string, boolean>("yes", true);

console.log(pair1.toString()); // Output: (1, one)
console.log(pair2.toString()); // Output: (yes, true)
```

## 4. Generic Interfaces

Generic interfaces enable you to define interfaces with generic type parameters, allowing for the creation of flexible and reusable abstractions.

Example -

```tsx title='typescript'
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<number, string> = { first: 1, second: "two" };
console.log(pair); // Output: { first: 1, second: "two" }
```

These implementations demonstrate how to use TypeScript generics to create generic functions, add constraints to generic types, develop generic classes, and define generic interfaces, showcasing the flexibility and reusability provided by generics in TypeScript.

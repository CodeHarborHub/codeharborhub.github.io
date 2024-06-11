---
id: special-types-ts
title: Special Datatypes in TypeScript
sidebar_label: Special Datatypes in TypeScript
sidebar_position: 3
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Special Datatypes used in TypeScript
---
In this section, we focus more on the datatypes that are specific to TypeScript, which are the gateway for you to start properly delving into some TypeScript Coding.

In the first module, we told you that TypeScript is a “flavor” or “variant” of JavaScript. These datatypes add up onto the datatypes we learnt in the previous module.

You will explore various data types such as **tuple, enum, any, void  and learn how to use them effectively in your TypeScript programs.

## 1. Tuple

The 'Tuple' datatype is used to represent an array with a fixed number of elements, each with a specific type.

Example: `let tuple: [number, string] = [1, "Alice"];`

## 2. Enum

The 'Enum' datatype is used to define a set of named constants.

Example:

```tsx title='typescript'
typescript

enum Color { Red, Green, Blue }
let c: Color = Color.Green;
```

## 3. Any

The 'Any' datatype is used to represent any type, and is used to opt out of type-checking.

Example: `let variable: any = "Could be anything";`

## 4. Void

The 'Void' datatype is used to represent the absence of any type, commonly used as the return type of functions that do not return a value.

Example: `function log(message: string): void { console.log(message); }`

## 5. Never

The 'Never' datatype is used to represent the type of values that never occur, typically used for functions that always throw an error or never return.

Example: `function error(message: string): never { throw new Error(message); }`

## 6. Unknown

The 'Unknown' datatype is used to represent a type-safe counterpart to any.

Example: `let uncertain: unknown = 4;`

## 7. Intersection Types

The 'Intersection Types' datatype is used to combine multiple types into one.

Example: `type Combined = { a: number } & { b: string };`

## 8. Union Types

The 'Union Types' datatype is used to represent a value that can be one of several types.

Example: `let value: number | string = "hello";`

## 9. Literal Types

The 'Literal Types' datatype is used to represent specific values.

Example: `let direction: "up" | "down" = "up";`

## 10. Type Aliases

The 'Type Aliases' datatype is used to provide a name for any type.

Example: `type StringOrNumber = string | number;`

## 11. Interfaces

The 'Interfaces' datatype is used to describe the shape of an object.

Example:

```tsx title='typescript'
typescript

interface Person {
  name: string;
  age: number;
}
let user: Person = { name: "Alice", age: 25 };
```

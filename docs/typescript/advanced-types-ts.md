---
id: advanced-types-ts
title: Advanced Types in TypeScript
sidebar_label: Advanced Types in TypeScript
sidebar_position: 8
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Advanced Types in TypeScript
---

In this section, you'll delve into advanced TypeScript types, which enable you to express more complex relationships between data structures and provide additional tools for type safety and flexibility in your code.

## 1. Intersection Types

Intersection types allow you to combine multiple types into one, creating a type that possesses all the properties and methods of each constituent type.

Example -

```tsx title='typescript'
interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

type Pet = Dog & Cat;

class DogImpl implements Dog {
    bark(): void {
        console.log("Woof! Woof!");
    }
}

class CatImpl implements Cat {
    meow(): void {
        console.log("Meow! Meow!");
    }
}

function makePet(): Pet {
    return new DogImpl() as Pet;
}

let pet: Pet = makePet();
pet.bark(); // Output: Woof! Woof!
pet.meow(); // Output: Error: Property 'meow' does not exist on type 'Pet'.
```

## 2. Type Guards

Type guards are runtime checks that allow TypeScript to infer more specific types within certain code paths, enhancing type safety and enabling more precise type checking.

Example -

```tsx title='typescript'
function isNumber(x: any): x is number {
    return typeof x === "number";
}

function processValue(value: string | number): void {
    if (isNumber(value)) {
        console.log(value * 2);
    } else {
        console.log(value.toUpperCase());
    }
}

processValue(10); // Output: 20
processValue("hello"); // Output: HELLO

```

## 3. Type Casting

Type casting allows you to assert the type of a value, informing TypeScript's type system of your intent and enabling you to perform operations that require a specific type.

Example -

```tsx title='typescript'
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 5
```

## 4. Type Assertions

Type assertions provide a way to override TypeScript's type inference and explicitly specify the type of a variable, giving you more control over type checking and enabling you to work with external data sources or dynamic values.

Example -

```tsx title='typescript'
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 5
```

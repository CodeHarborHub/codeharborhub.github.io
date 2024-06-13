---
id: control-flow-ts
title: Control Flow Statements in TypeScript
sidebar_label: Control Flow Statements in TypeScript
sidebar_position: 4
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Control Flow Statements used in TypeScript
---

Control flow statements are essential constructs that allow you to dictate the order in which statements are executed in your TypeScript programs. These statements enable you to make decisions, repeat actions, and handle exceptions, thereby creating more dynamic and responsive applications.

Below, we explore the various control flow statements available in TypeScript, complete with descriptions and examples to illustrate their use.

You will explore various control flow statements such as if...else, switch, for, for...of, for...in, while, do...while, break, continue, try...catch...finally, and throw, and learn how to use them effectively in your TypeScript programs.

## 1. if...else

The if...else statement is used to execute a block of code based on a condition.

Example:

```tsx title='typescript'
let age: number = 25;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

## 2. switch

The switch statement is used to perform different actions based on different conditions.

Example:

```tsx title='typescript'
typescript

let fruit: string = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Unknown fruit");
}
```

## 3. for

The for loop is used to execute a block of code a specified number of times.

Example:

```tsx title='typescript'
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 4. for...of

The for...of loop is used to iterate over the values of an iterable object (like an array).

Example:

```tsx title='typescript'
let numbers: number[] = [1, 2, 3, 4];
for (let num of numbers) {
    console.log(num);
}
```

## 5. for...in

The for...in loop is used to iterate over the keys of an object.

Example:

```tsx title='typescript'
let person: { name: string, age: number } = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

## 6. while

The while loop is used to execute a block of code as long as a specified condition is true.

Example:

```tsx title='typescript'
let count: number = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

## 7. do...while

The do...while loop is similar to the while loop, but it will execute the block of code at least once before checking the condition.

Example:

```tsx title='typescript'
let count: number = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```

## 8. break

The break statement is used to exit a loop or a switch statement.

Example:

```tsx title='typescript'
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

## 9. continue

The continue statement is used to skip the current iteration of a loop and continue with the next one.

Example:

```tsx title='typescript'
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

## 10. try...catch...finally

The try...catch...finally statement is used to handle exceptions and execute code regardless of whether an exception was thrown.

Example:

```tsx title='typescript'
try {
    let result: number = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This will always execute");
}
```

## 11. throw

The throw statement is used to create a custom error.

Example:

```tsx title='typescript'
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

---
id: loops-in-java
title: Loops in Java
sidebar_label: Loops in Java
sidebar_position: 2
tags: [java, loops, for loop, while loop, do while loop, programming, java loops]
description: In this tutorial, we will learn about loops in Java. We will learn about the different types of loops available in Java, how to use them, and how they can be used to repeat a block of code multiple times.
---


# Loops in Java

## Introduction

Loops in Java are used to execute a block of code repeatedly until a specified condition is met. They are essential for tasks that require repetition, such as iterating over arrays or performing a series of calculations.

## Types of Loops

### For Loop

The `for` loop is used when you know in advance how many times you want to execute a statement or a block of statements.

**Syntax:**

```java
for (initialization; condition; update) {
    // code to be executed
}
```

**Example:**

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
```

### Enhanced For Loop (For-Each Loop)

The enhanced `for` loop, also known as the `for-each` loop, is used to iterate over elements in arrays or collections.

**Syntax:**

```java
for (type element : array) {
    // code to be executed
}
```

**Example:**

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int number : numbers) {
    System.out.println("Number: " + number);
}
```

### While Loop

The `while` loop is used when you do not know in advance how many times you need to execute a block of code. It repeats the block as long as the specified condition is true.

**Syntax:**

```java
while (condition) {
    // code to be executed
}
```

**Example:**

```java
int i = 0;
while (i < 5) {
    System.out.println("Iteration: " + i);
    i++;
}
```

### Do-While Loop

The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.

**Syntax:**

```java
do {
    // code to be executed
} while (condition);
```

**Example:**

```java
int i = 0;
do {
    System.out.println("Iteration: " + i);
    i++;
} while (i < 5);
```

## Control Statements

### Break Statement

The `break` statement is used to exit a loop prematurely when a certain condition is met.

**Example:**

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println("Iteration: " + i);
}
```

### Continue Statement

The `continue` statement is used to skip the current iteration of the loop and proceed to the next iteration.

**Example:**

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    System.out.println("Iteration: " + i);
}
```

## Nested Loops

You can nest loops within each other to handle more complex situations.

**Example:**

```java
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        System.out.println("i: " + i + ", j: " + j);
    }
}
```

## Conclusion

Loops are fundamental constructs in Java that help execute code repeatedly based on specified conditions. Understanding how to use `for`, `while`, and `do-while` loops, along with control statements like `break` and `continue`, is essential for efficient programming.
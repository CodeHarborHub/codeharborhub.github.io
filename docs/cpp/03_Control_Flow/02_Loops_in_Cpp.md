---
id: loops-in-cpp
title: Loops in C++
sidebar_label: Loops in C++
sidebar_position: 2
tags:
  [
    c++,
    programming,
    c++ features,
    c++ control flow,
    control flow,
    c++ loops,
    for, while
  ]
description: In this tutorial, we will learn about loops in the C++ programming language. We will explore the syntax and usage of `for`, `while`, and `do-while` loops. By understanding how to implement these looping constructs, you will be able to execute code repeatedly based on specified conditions, making your C++ programs more efficient and powerful.
---

# Loops in C++

## Introduction

Loops in C++ are used to execute a block of code repeatedly until a specified condition is met. They are essential for tasks that require repetition, such as iterating over arrays or performing a series of calculations.

## Types of Loops

### For Loop

The `for` loop is used when you know in advance how many times you want to execute a statement or a block of statements.

**Syntax:**

```cpp
for (initialization; condition; update) {
    // code to be executed
}
```

**Example:**

```cpp
for (int i = 0; i < 5; i++) {
    std::cout << "Iteration: " << i << std::endl;
}
```

### Range-based For Loop

The range-based `for` loop, also known as the `for-each` loop, is used to iterate over elements in arrays or collections.

**Syntax:**

```cpp
for (type element : array) {
    // code to be executed
}
```

**Example:**

```cpp
int numbers[] = {1, 2, 3, 4, 5};
for (int number : numbers) {
    std::cout << "Number: " << number << std::endl;
}
```

### While Loop

The `while` loop is used when you do not know in advance how many times you need to execute a block of code. It repeats the block as long as the specified condition is true.

**Syntax:**

```cpp
while (condition) {
    // code to be executed
}
```

**Example:**

```cpp
int i = 0;
while (i < 5) {
    std::cout << "Iteration: " << i << std::endl;
    i++;
}
```

### Do-While Loop

The `do-while` loop is similar to the `while` loop, but it ensures that the code block is executed at least once before checking the condition.

**Syntax:**

```cpp
do {
    // code to be executed
} while (condition);
```

**Example:**

```cpp
int i = 0;
do {
    std::cout << "Iteration: " << i << std::endl;
    i++;
} while (i < 5);
```

## Control Statements

### Break Statement

The `break` statement is used to exit a loop prematurely when a certain condition is met.

**Example:**

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    std::cout << "Iteration: " << i << std::endl;
}
```

### Continue Statement

The `continue` statement is used to skip the current iteration of the loop and proceed to the next iteration.

**Example:**

```cpp
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    std::cout << "Iteration: " << i << std::endl;
}
```

## Nested Loops

You can nest loops within each other to handle more complex situations.

**Example:**

```cpp
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        std::cout << "i: " << i << ", j: " << j << std::endl;
    }
}
```

## Conclusion

Loops are fundamental constructs in C++ that help execute code repeatedly based on specified conditions. Understanding how to use `for`, `while`, and `do-while` loops, along with control statements like `break` and `continue`, is essential for efficient programming.

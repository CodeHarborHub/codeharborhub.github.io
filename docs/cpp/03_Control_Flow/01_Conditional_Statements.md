---
id: cpp-conditional-statements
title: C++ Conditional Statements
sidebar_label: C++ Conditional Statements
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ features,
    c++ control flow,
    control flow,
    c++ conditional statements,
    conditional statements,
    if, else if, else
  ]
description: In this tutorial, we will learn about conditional statements in the C++ programming language. We will explore the syntax and usage of `if`, `else if`, and `else` statements, as well as switch-case structures. By understanding how to implement these conditional statements, you will be able to control the flow of your C++ programs and make decisions based on different conditions.
---

# Conditional Statements in C++

## Introduction

Conditional statements in C++ are used to execute different blocks of code based on certain conditions. These statements allow you to control the flow of your program and make decisions during runtime.

## Types of Conditional Statements

### If Statement

The `if` statement evaluates a boolean expression and executes a block of code if the expression is true.

**Syntax:**

```cpp
if (condition) {
    // code to be executed if the condition is true
}
```

**Example:**

```cpp
int number = 10;
if (number > 0) {
    std::cout << "The number is positive." << std::endl;
}
```

### If-Else Statement

The `if-else` statement provides an alternative block of code that executes if the boolean expression is false.

**Syntax:**

```cpp
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

**Example:**

```cpp
int number = -10;
if (number > 0) {
    std::cout << "The number is positive." << std::endl;
} else {
    std::cout << "The number is negative or zero." << std::endl;
}
```

### If-Else-If Ladder

The `if-else-if` ladder allows you to check multiple conditions in sequence. The first condition that evaluates to true will have its corresponding block executed.

**Syntax:**

```cpp
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if all conditions are false
}
```

**Example:**

```cpp
int number = 0;
if (number > 0) {
    std::cout << "The number is positive." << std::endl;
} else if (number < 0) {
    std::cout << "The number is negative." << std::endl;
} else {
    std::cout << "The number is zero." << std::endl;
}
```

### Nested If Statements

You can nest `if` or `if-else` statements within another `if` or `if-else` statement to create more complex conditions.

**Syntax:**

```cpp
if (condition1) {
    // code to be executed if condition1 is true
    if (condition2) {
        // code to be executed if condition2 is true
    }
}
```

**Example:**

```cpp
int number = 5;
if (number > 0) {
    if (number % 2 == 0) {
        std::cout << "The number is positive and even." << std::endl;
    } else {
        std::cout << "The number is positive and odd." << std::endl;
    }
}
```

### Short Hand If...Else (Ternary Operator)

There is also a short-hand if-else, known as the ternary operator because it consists of three operands. It can be used to replace multiple lines of code with a single line. It is often used to replace simple if-else statements.

**Syntax:**

```cpp
variable = (condition) ? expressionTrue : expressionFalse;
```

**Example:**

Instead of writing:

```cpp
int time = 20;
if (time < 18) {
    std::cout << "Good day." << std::endl;
} else {
    std::cout << "Good evening." << std::endl;
}
```

You can simply write:

```cpp
int time = 20;
std::string result = (time < 18) ? "Good day." : "Good evening.";
std::cout << result << std::endl;
```

### Switch Statement

The `switch` statement is used to execute one block of code among many based on the value of a variable or expression.

**Syntax:**

```cpp
switch (expression) {
    case value1:
        // code to be executed if expression equals value1
        break;
    case value2:
        // code to be executed if expression equals value2
        break;
    // you can have any number of case statements
    default:
        // code to be executed if none of the cases match
        break;
}
```

**Example:**

```cpp
int day = 3;
switch (day) {
    case 1:
        std::cout << "Monday" << std::endl;
        break;
    case 2:
        std::cout << "Tuesday" << std::endl;
        break;
    case 3:
        std::cout << "Wednesday" << std::endl;
        break;
    case 4:
        std::cout << "Thursday" << std::endl;
        break;
    case 5:
        std::cout << "Friday" << std::endl;
        break;
    case 6:
        std::cout << "Saturday" << std::endl;
        break;
    case 7:
        std::cout << "Sunday" << std::endl;
        break;
    default:
        std::cout << "Invalid day" << std::endl;
        break;
}
```

## Conclusion

Conditional statements are essential for controlling the flow of your C++ programs. By using `if`, `if-else`, `if-else-if` statements, nested `if` statements, the ternary operator, and `switch` statements, you can make your programs more dynamic and responsive to different conditions.

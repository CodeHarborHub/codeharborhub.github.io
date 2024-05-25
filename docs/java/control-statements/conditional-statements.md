---
id: conditional-statements
title: Conditional Statements
sidebar_label: Conditional Statements
sidebar_position: 1
tags:
  [
    java,
    conditional statements,
    if else,
    switch case,
    programming,
    java conditional statements,
  ]
description: In this tutorial, we will learn about conditional statements in Java. We will learn about the different types of conditional statements available in Java, how to use them, and how they can be used to control the flow of a program.
---

# Conditional Statements in Java

## Introduction

Conditional statements in Java are used to execute different blocks of code based on certain conditions. These statements allow you to control the flow of your program and make decisions during runtime.

## Types of Conditional Statements

### If Statement

The `if` statement evaluates a boolean expression and executes a block of code if the expression is true.

**Syntax:**

```java
if (condition) {
    // code to be executed if the condition is true
}
```

**Example:**

```java
int number = 10;
if (number > 0) {
    System.out.println("The number is positive.");
}
```

### If-Else Statement

The `if-else` statement provides an alternative block of code that executes if the boolean expression is false.

**Syntax:**

```java
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
```

**Example:**

```java
int number = -10;
if (number > 0) {
    System.out.println("The number is positive.");
} else {
    System.out.println("The number is negative or zero.");
}
```

### If-Else-If Ladder

The `if-else-if` ladder allows you to check multiple conditions in sequence. The first condition that evaluates to true will have its corresponding block executed.

**Syntax:**

```java
if (condition1) {
    // code to be executed if condition1 is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else {
    // code to be executed if all conditions are false
}
```

**Example:**

```java
int number = 0;
if (number > 0) {
    System.out.println("The number is positive.");
} else if (number < 0) {
    System.out.println("The number is negative.");
} else {
    System.out.println("The number is zero.");
}
```

### Nested If Statements

You can nest `if` or `if-else` statements within another `if` or `if-else` statement to create more complex conditions.

**Syntax:**

```java
if (condition1) {
    // code to be executed if condition1 is true
    if (condition2) {
        // code to be executed if condition2 is true
    }
}
```

**Example:**

```java
int number = 5;
if (number > 0) {
    if (number % 2 == 0) {
        System.out.println("The number is positive and even.");
    } else {
        System.out.println("The number is positive and odd.");
    }
}
```

### Switch Statement

The `switch` statement is used to execute one block of code among many based on the value of a variable or expression. It is a cleaner alternative to using multiple `if-else-if` statements.

**Syntax:**

```java
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

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    case 6:
        System.out.println("Saturday");
        break;
    case 7:
        System.out.println("Sunday");
        break;
    default:
        System.out.println("Invalid day");
        break;
}
```

## Conclusion

Conditional statements are essential for controlling the flow of your Java programs. By using `if`, `if-else`, `if-else-if`, nested `if` statements, and `switch` statements, you can make your programs more dynamic and responsive to different conditions.

```

You can add this content to your Markdown file in Visual Studio Code by following the same steps as before.
```

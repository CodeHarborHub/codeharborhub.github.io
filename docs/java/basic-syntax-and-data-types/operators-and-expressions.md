---
id: operators-and-expressions
title: Operators and Expressions
sidebar_label: Operators and Expressions
sidebar_position: 3
tags:
  [java, operators, expressions, programming, java operators, java expressions]
description: In this tutorial, we will learn about operators and expressions in Java. We will learn about the different types of operators available in Java, how to use them, and how to create expressions using operators.
---

## Operators

Java supports various operators for arithmetic, comparison, logical operations, etc.

### Arithmetic Operators

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `%` (modulus)

Example:

```java
int sum = 10 + 5; // 15
int difference = 10 - 5; // 5
```

### Comparison Operators

- `==` (equal to)
- `!=` (not equal to)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

Example:

```java
boolean isEqual = (10 == 10); // true
boolean isGreater = (10 > 5); // true
```

### Logical Operators

- `&&` (logical AND)
- `||` (logical OR)
- `!` (logical NOT)

Example:

```java
boolean result = (true && false); // false
boolean orResult = (true || false); // true
```

## Control Flow Statements

### If-Else Statement

```java
int number = 10;
if (number > 0) {
    System.out.println("Positive number");
} else {
    System.out.println("Negative number or zero");
}
```

### Switch Statement

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Another day");
        break;
}
```

### Loops

#### For Loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

#### While Loop

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

#### Do-While Loop

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

## Conclusion

Understanding Java syntax and structure is crucial for writing effective and efficient Java programs. By mastering these basics, you can begin to build more complex and powerful applications.

```

```

---
id: operators-and-expressions
title: Operators and Expressions
sidebar_label: Operators and Expressions
sidebar_position: 3
tags:
  [c++, operators, expressions, programming, c++ operators, c++ expressions]
description: In this tutorial, we will learn about operators and expressions in C++. We will learn about the different types of operators available in C++, how to use them, and how to create expressions using operators.
---

# Operators and Expressions in C++

## Operators

C++ supports various operators for arithmetic, comparison, logical operations, etc.

### Arithmetic Operators

- `+` (addition)
- `-` (subtraction)
- `*` (multiplication)
- `/` (division)
- `%` (modulus)

Example:

```cpp
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

```cpp
bool isEqual = (10 == 10); // true
bool isGreater = (10 > 5); // true
```

### Logical Operators

- `&&` (logical AND)
- `||` (logical OR)
- `!` (logical NOT)

Example:

```cpp
bool result = (true && false); // false
bool orResult = (true || false); // true
```

## Expressions

Expressions in C++ are formed using operators and operands. An expression can be a combination of literals, variables, and operators.

Example:

```cpp
int x = 10;
int y = 5;
int z = x + y; // z = 15
bool isTrue = (x > y) && (z != y); // true
```

## Conclusion

Understanding C++ operators and expressions is fundamental to writing effective C++ code. By mastering these concepts, you can perform various operations and create complex expressions in your C++ programs.

---
id: cpp-function-overloading
title: Function Overloading in C++
sidebar_label: Function Overloading in C++
sidebar_position: 3
tags:
  [
    c++,
    programming,
    c++ features,
    c++ functions
    function parameters,
    function return types
  ]
description: In this tutorial, we will explore the concept of function overloading in the C++ programming language. We'll delve into how to define multiple functions with the same name but different parameter lists. By understanding function overloading, you'll learn how to write cleaner, more concise code and enhance the flexibility and readability of your C++ programs.
---

# Function Overloading in C++

Function overloading in C++ allows you to have multiple functions with the same name but different parameters. This enables you to create more flexible and reusable code by providing different ways to handle inputs based on their types or number.

## Syntax

```cpp
return_type function_name(type1 parameter1, type2 parameter2, ...);
```

## Example

Consider the following example, which has two functions that add numbers of different types:

```cpp
int plusFuncInt(int x, int y) {
  return x + y;
}

double plusFuncDouble(double x, double y) {
  return x + y;
}

int main() {
  int myNum1 = plusFuncInt(8, 5);
  double myNum2 = plusFuncDouble(4.3, 6.26);
  cout << "Int: " << myNum1 << "\n";
  cout << "Double: " << myNum2;
  return 0;
}
```

Instead of defining two separate functions that essentially do the same thing, it's better to overload one function. Here's how you can overload the `plusFunc` function to work for both `int` and `double`:

```cpp
int plusFunc(int x, int y) {
  return x + y;
}

double plusFunc(double x, double y) {
  return x + y;
}

int main() {
  int myNum1 = plusFunc(8, 5);
  double myNum2 = plusFunc(4.3, 6.26);
  cout << "Int: " << myNum1 << "\n";
  cout << "Double: " << myNum2;
  return 0;
}
```

> **Note :** Note that multiple functions can have the same name as long as the number and/or type of parameters are different. This flexibility allows you to write more concise and expressive code while maintaining readability and efficiency.
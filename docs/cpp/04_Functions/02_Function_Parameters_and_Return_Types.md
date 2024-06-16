---
id: cpp-function-parameters-and-return-types
title: Function Parameters and Return Types 
sidebar_label: Function Parameters and Return Types in C++
sidebar_position: 2
tags:
  [
    c++,
    programming,
    c++ features,
    c++ functions
    function parameters,
    function return types
  ]
description: In this tutorial, we will learn about function parameters and return types in the C++ programming language. We will explore how to define and use parameters, the different types of return values, and how to handle multiple parameters. By understanding function parameters and return types, you will be able to create more flexible and powerful functions in your C++ programs.
---

# Parameters and Arguments 

## Introduction

Information can be passed to functions as parameters. Parameters act as variables inside the function.

## Parameters / Arguments

Parameters are specified after the function name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.

### Syntax

```cpp
void functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

The following example has a function that takes a string called `fname` as a parameter. When the function is called, we pass along a first name, which is used inside the function to print the full name.

### Example

```cpp
#include <iostream>
using namespace std;

void myFunction(string fname) {
  cout << fname << " Refsnes\n";
}

int main() {
  myFunction("Liam");
  myFunction("Jenny");
  myFunction("Anja");
  return 0;
}

// Outputs:
// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes
```

### Arguments

When a parameter is passed to the function, it is called an argument. So, from the example above: `fname` is a parameter, while `Liam`, `Jenny`, and `Anja` are arguments.


## Default Parameter Value

You can also use a default parameter value by using the equals sign (`=`). If we call the function without an argument, it uses the default value ("Norway"):

```cpp
void myFunction(string country = "Norway") {
  cout << country << "\n";
}

int main() {
  myFunction("Sweden");
  myFunction("India");
  myFunction();
  myFunction("USA");
  return 0;
}
```

Output:
```
Sweden
India
Norway
USA
```

A parameter with a default value is often known as an "optional parameter." From the example above, `country` is an optional parameter, and "Norway" is the default value.

## Multiple Parameters

Inside the function, you can add as many parameters as you want:

```cpp
void myFunction(string fname, int age) {
  cout << fname << " Refsnes. " << age << " years old. \n";
}

int main() {
  myFunction("Liam", 3);
  myFunction("Jenny", 14);
  myFunction("Anja", 30);
  return 0;
}
```

Output:
```
Liam Refsnes. 3 years old.
Jenny Refsnes. 14 years old.
Anja Refsnes. 30 years old.
```

> **_NOTE:_** Note that when you are working with multiple parameters, the function call must have the same number of arguments as there are parameters, and the arguments must be passed in the same order.

## Return Values

The `void` keyword, used in the previous examples, indicates that the function should not return a value. If you want the function to return a value, you can use a data type (such as `int`, `string`, etc.) instead of `void`, and use the `return` keyword inside the function:

```cpp
int myFunction(int x) {
  return 5 + x;
}

int main() {
  cout << myFunction(3); // Outputs 8 (5 + 3)
  return 0;
}
```

This example returns the sum of a function with two parameters:

```cpp
int myFunction(int x, int y) {
  return x + y;
}

int main() {
  cout << myFunction(5, 3); // Outputs 8 (5 + 3)
  return 0;
}
```

You can also store the result in a variable:

```cpp
int myFunction(int x, int y) {
  return x + y;
}

int main() {
  int z = myFunction(5, 3);
  cout << z; // Outputs 8 (5 + 3)
  return 0;
}
```

## Conclusion

Parameters and arguments are essential for passing information to functions, enabling code reusability and modular programming. Parameters are variables defined by the function to receive the input values (arguments) when the function is called.

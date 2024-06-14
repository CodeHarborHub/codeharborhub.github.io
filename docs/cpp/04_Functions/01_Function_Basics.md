---
id: cpp-functions-basics
title: The Basics of C++ Functions
sidebar_label: The Basics of C++ Functions
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ features,
    functions basics,
    c++ functions
  ]
description: In this tutorial, we will learn about the basics of functions in the C++ programming language. We will explore the syntax for defining and calling functions, the concept of return types, and the use of parameters. By understanding how to create and utilize functions, you will be able to organize your code more effectively and improve its modularity and reusability.
---

# Functions

## Introduction

A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. Functions are used to perform certain actions and are important for reusing code: define the code once, and use it many times.

## Create a Function

C++ provides some pre-defined functions, such as `main()`, which is used to execute code. But you can also create your own functions to perform certain actions. To create (often referred to as declare) a function, specify the name of the function, followed by parentheses `()`.

### Syntax

```cpp
void myFunction() {
  // code to be executed
}
```

### Example Explained

- `myFunction()` is the name of the function.
- `void` means that the function does not have a return value. You will learn more about return values later.
- Inside the function (the body), add code that defines what the function should do.

## Call a Function

Declared functions are not executed immediately. They are "saved for later use" and will be executed later, when they are called. To call a function, write the function's name followed by two parentheses `()` and a semicolon `;`.

### Example

Inside `main`, call `myFunction()`:

```cpp
// Create a function
void myFunction() {
  std::cout << "I just got executed!";
}

int main() {
  myFunction(); // call the function
  return 0;
}

// Outputs "I just got executed!"
```

A function can be called multiple times:

### Example

```cpp
void myFunction() {
  std::cout << "I just got executed!\n";
}

int main() {
  myFunction();
  myFunction();
  myFunction();
  return 0;
}

// I just got executed!
// I just got executed!
// I just got executed!
```

## Function Declaration and Definition

A C++ function consists of two parts:

1. **Declaration:** the return type, the name of the function, and parameters (if any).
2. **Definition:** the body of the function (code to be executed).

```cpp 
int main() {
  myFunction();
  return 0;
}

void myFunction() {
  cout << "I just got executed!";
}

// Error
```

Note: If a user-defined function, such as `myFunction()`, is declared after the `main()` function, an error will occur:

### Example

```cpp
int main() {
  myFunction();
  return 0;
}

void myFunction() {
  std::cout << "I just got executed!";
}

// Error
```

However, it is possible to separate the declaration and the definition of the function - for code optimization. You will often see C++ programs that have function declaration above `main()`, and function definition below `main()`. This will make the code better organized and easier to read:

### Example

```cpp
// Function declaration
void myFunction();

// The main method
int main() {
  myFunction();  // call the function
  return 0;
}

// Function definition
void myFunction() {
  std::cout << "I just got executed!";
}
```

## Conclusion

Functions are fundamental building blocks in C++ programming that help in organizing code, improving readability, and promoting code reuse. Understanding how to declare, define, and call functions is essential for efficient and effective programming in C++.

---
id: c-errors
title: Errors in C
sidebar_label: C Errors
sidebar_position: 16
tags: [c, c errors]
description: In this tutorial, you will learn about the Errors in C, what it is.
---
Errors are an inherent and inevitable part of the programming process but if we are aware about the different types of errors then it can help us or effective debugging and writing a robust code. Errors in C can be broadly classified into three main categories: syntax errors, runtime errors, and logical errors.

### Syntax Errors

- Syntax errors arise during the compilation of program. If a syntax error is found, the compilation process is halted, and an error message is generated.
- Some common reasons for syntax errors are as follows:
  - Missing Semicolons: Forgetting to end a statement with a semicolon (;).
  - Mismatched Braces: Incorrectly pairing parentheses () or braces {}.
  - Incorrect Keyword Usage: Using incorrect or misspelled keywords.
  - Improper Declaration: Failing to declare variables or functions correctly.
- Example:
  ```c
  int main() {
    printf("Hello, World!") // Missing semicolon
    return 0;
    }
  ```

### Runtime Errors

- Runtime errors occur during the execution of the program. These errors are not detected by the compiler, as they depend on the program's runtime environment and input data. Runtime errors lead to incorrect results.
- Some common reasons for runtime errors are as follows:
  - Division by Zero: Attempting to divide a number by zero, which is mathematically undefined.
  - Trying to open a file which has not been created.
  - Null Pointer Dereferencing: Accessing memory through a pointer that has not been initialized or has been set to NULL.
  - Lack of free memory space
  - Array Index Out of Bounds: Accessing an array element outside its defined range.
- Example:
  ```c
  int a = 10;
  int b = 0;
  int result = a / b; // Division by zero, causing a runtime error
  ```

### Logical Errors

- Logical errors occur when a program compiles and runs without crashing, but produces incorrect or undesired output.
- Some common reasons for logical errors are as follows:
  - Misplaced Parentheses
  -  Incorrect Use of Conditional Statements
  -  Floating-Point Precision Issues
  -  Incorrect Boolean Logic
- Example:
  ```c
  int a = 10, b = 5, c = 2;
  int result = a + b * c; // Expected result might be 30, but it's actually 20
  ```
  

---
id: switch-case-statements-in-cpp
title: Switch Case Statements in C++
sidebar_label: Switch Case Statements in C++
sidebar_position: 3
tags:
  [
    c++,
    programming,
    c++ features,
    c++ control flow,
    control flow,
    c++ switch,
    switch case statement
  ]
description: In this tutorial, we will learn about switch case statements in the C++ programming language. We will explore the syntax and usage of the switch statement and how to handle multiple cases. By understanding how to implement switch case statements, you will be able to simplify complex conditional logic and improve the readability of your C++ programs.
---

# Switch and Ternary Statements

## Introduction

Switch and ternary statements are control flow tools in C++ that help manage decision-making processes within your code. The `switch` statement provides a way to handle multiple conditions based on the value of a single variable, while the ternary operator offers a concise way to execute one of two possible expressions based on a condition.

## Switch Statement

The `switch` statement is used to execute one block of code among many based on the value of a variable or expression. It is particularly useful when you have multiple potential values for a variable and want to execute different code blocks depending on that value.

### Syntax

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

### Example

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

### Points to Remember

- Each `case` must be followed by a constant value and a colon.
- The `break` statement is used to terminate a case and prevent fall-through to subsequent cases.
- The `default` case is optional and executes if none of the other cases match. It is similar to the `else` clause in an `if-else` statement.

## Ternary Operator

The ternary operator is a shorthand way of writing an `if-else` statement. It is used to assign a value to a variable based on a condition.

### Syntax

```cpp
variable = (condition) ? expressionTrue : expressionFalse;
```

### Example

```cpp
int time = 20;
std::string result = (time < 18) ? "Good day." : "Good evening.";
std::cout << result << std::endl;
```

#### Explanation

- The condition `time < 18` is evaluated.
- If the condition is true, "Good day." is assigned to `result`.
- If the condition is false, "Good evening." is assigned to `result`.

### Points to Remember

- The ternary operator is composed of three parts: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
- It is a more concise way to write simple `if-else` statements and can make the code more readable when used appropriately.

## Conclusion

Switch and ternary statements are powerful tools for managing control flow in C++ programs. The `switch` statement is useful for handling multiple conditions based on a single variable, while the ternary operator offers a compact way to perform conditional assignments. Understanding how to use these constructs effectively can enhance your ability to write clear and efficient C++ code.

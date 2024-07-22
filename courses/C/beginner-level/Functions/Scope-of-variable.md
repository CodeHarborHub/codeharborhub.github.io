---
title: Recursion & Scope and lifetime of variables
sidebar_label: Recursion & Scope variable
sidebar_position: 2
description: Learn Recursion & Scope and lifetime of variables.
tags: [courses,C] 
---

#### Recursion

Recursion is a process where a function calls itself. It's useful for problems that can be divided into similar sub-problems.

**Example: Recursive Function for Factorial**

```c
#include <stdio.h>

// Function declaration
int factorial(int n);

// Main function
int main() {
    int num = 5;
    printf("Factorial of %d is %d\n", num, factorial(num));
    return 0;
}

// Function definition
int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

**Output:**
```
Factorial of 5 is 120
```

#### Scope and Lifetime of Variables

- **Scope**: The region of the program where a variable can be accessed.
  - **Local Scope**: Variables declared inside a function or block are local to that function/block.
  - **Global Scope**: Variables declared outside any function are accessible throughout the program.
- **Lifetime**: The duration for which a variable exists in memory.
  - **Local Variables**: Exist only during the execution of the function/block.
  - **Global Variables**: Exist for the entire lifetime of the program.

**Example: Scope and Lifetime of Variables**

```c
#include <stdio.h>

// Global variable
int globalVar = 10;

// Function declaration
void display();

int main() {
    // Local variable
    int localVar = 20;
    printf("In main: globalVar = %d, localVar = %d\n", globalVar, localVar);
    display();
    return 0;
}

// Function definition
void display() {
    // Accessing global variable
    printf("In display: globalVar = %d\n", globalVar);
    // Uncommenting the following line will cause a compilation error
    // printf("localVar = %d\n", localVar);
}
```

**Output:**
```
In main: globalVar = 10, localVar = 20
In display: globalVar = 10
```

#### Flowchart for Function Execution

1. **Function Declaration**: Declare the function's prototype if the function is defined after the `main` function.
2. **Function Call**: Call the function from the `main` function or another function.
3. **Function Definition**: Define the function with its logic and return value.

```
  +-------------------------+
  | Function Declaration    |
  +-------------------------+
            |
            v
  +-------------------------+
  |     Main Function       |
  +-------------------------+
            |
            v
  +-------------------------+
  |    Function Call        |
  +-------------------------+
            |
            v
  +-------------------------+
  |    Function Definition  |
  +-------------------------+
            |
            v
  +-------------------------+
  |    Function Return      |
  +-------------------------+
            |
            v
  +-------------------------+
  |    Continue Execution   |
  +-------------------------+
```

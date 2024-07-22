---
title: Functions in C
sidebar_label: Functions
sidebar_position: 1
description: Learn Functions in C.
tags: [courses,C] 
--- 

Functions are a fundamental aspect of C programming, allowing code to be modular, reusable, and easier to understand. Functions help in breaking down a complex problem into smaller, manageable parts. Here are key concepts related to functions in C:

#### Defining and Declaring Functions

- **Function Declaration (Prototype)**: Declares the function's name, return type, and parameters. It must be done before the function can be used.
- **Function Definition**: Contains the actual body of the function where the logic is implemented.
- **Function Call**: Invokes the function to perform its task.

**Example: Function Declaration and Definition**

```c
#include <stdio.h>

// Function declaration
void greet();

// Main function
int main() {
    // Function call
    greet();
    return 0;
}

// Function definition
void greet() {
    printf("Hello, World!\n");
}
```

**Output:**
```
Hello, World!
```

#### Function Arguments and Return Values

Functions can take arguments (parameters) and return values. This allows for more flexible and reusable code.

**Example: Function with Arguments and Return Value**

```c
#include <stdio.h>

// Function declaration
int add(int a, int b);

// Main function
int main() {
    int result;
    result = add(5, 3); // Function call with arguments
    printf("Result: %d\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b; // Function with return value
}
```

**Output:**
```
Result: 8
```

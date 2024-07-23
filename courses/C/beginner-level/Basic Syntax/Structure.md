---
id: lesson-1
title: "Basic Syntax and Structure"
sidebar_label: Basic Syntax and Structure
sidebar_position: 1
description: "Learn Basic Syntax and Structure"
tags: [courses,beginner-level,C,Introduction]
--- 
  

#### Structure of a C Program

A typical C program consists of the following components:

1. **Preprocessor Directives**: These are commands that give instructions to the compiler to preprocess the source code before actual compilation starts. They usually begin with `#`. For example, `#include <stdio.h>` is a preprocessor directive that includes the Standard Input Output library.

2. **Main Function**: This is the entry point of every C program. The execution of the program starts from the `main` function.

3. **Statements and Expressions**: These form the body of the `main` function and other functions. They include variable declarations, expressions, and function calls.

Here is an example of the basic structure of a C program:

```c
#include <stdio.h>  // Preprocessor directive

int main() {        // Main function
    // Statements
    printf("Hello, World!\n");
    return 0;       // Return statement
}
``` 

**Output:**
```
Hello, World!
```

#### Data Types and Variables

C provides various data types that can be used to define variables. The primary data types in C are:

:::note
- **int**: Used to store integers.
- **float**: Used to store floating-point numbers.
- **double**: Used to store double-precision floating-point numbers.
- **char**: Used to store single characters.
:::

Variables are used to store data that can be manipulated by the program. Here is how you declare and initialize variables in C:

```c
int main() {
    int age = 25;           // Integer variable
    float salary = 55000.5; // Floating-point variable
    double pi = 3.14159;    // Double-precision floating-point variable
    char grade = 'A';       // Character variable

    // Output the values of the variables
    printf("Age: %d\n", age);
    printf("Salary: %.2f\n", salary);
    printf("Pi: %.5f\n", pi);
    printf("Grade: %c\n", grade);

    return 0;
}
```


**Output:**
```
Age: 25
Salary: 55000.50
Pi: 3.14159
Grade: A
```


#### Constants and Literals

Constants are fixed values that do not change during the execution of a program. C supports several types of constants:

- **Integer Constants**: `10`, `-100`, `0`
- **Floating-point Constants**: `3.14`, `-0.001`
- **Character Constants**: `'A'`, `'9'`
- **String Literals**: `"Hello, World!"`

Constants can be defined using the `const` keyword or the `#define` preprocessor directive:

```c
#include <stdio.h>

#define PI 3.14159  // Constant using #define

int main() {
    const int MAX_AGE = 100; // Constant using const keyword

    printf("Pi: %.5f\n", PI);
    printf("Max Age: %d\n", MAX_AGE);

    return 0;
}
```

**Output:**
```
Pi: 3.14159
Max Age: 100
```


 
 

 
 
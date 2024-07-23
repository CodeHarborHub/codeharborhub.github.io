---
id: lesson-1
title: "Structure of C++ programming"
sidebar_label:  Introduction
sidebar_position: 1
description:  "Structure of C++ programming"
tags: [courses,beginner-level,C++,Introduction]
---   
 
A C++ program generally consists of the following parts:

:::note
- **Preprocessor Directives:** Instructions to the compiler to include files and define constants.
- **Main Function:** The entry point of the program where execution begins.
- **Functions:** Blocks of code that perform specific tasks.
- **Variables:** Containers for storing data values.
::::

**Example:**
```cpp
#include <iostream> // Preprocessor directive to include the standard input/output stream library

// Main function where program execution begins
int main() {
    std::cout << "Hello, World!" << std::endl; // Output "Hello, World!" to the console
    return 0; // Return 0 to indicate successful execution
}
```

#### Data Types and Variables
Variables are used to store data. Each variable must be declared with a data type.

:::note
**Common Data Types:**
- **int:** Integer numbers
- **float:** Floating-point numbers
- **double:** Double-precision floating-point numbers
- **char:** Single characters
- **bool:** Boolean values (true or false)
:::

**Example:**
```cpp
#include <iostream>

int main() {
    int age = 25; // Integer variable
    float height = 5.9; // Floating-point variable
    char grade = 'A'; // Character variable
    bool isStudent = true; // Boolean variable

    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Is Student: " << std::boolalpha << isStudent << std::endl;

    return 0;
}
```

**Output:**
```
Age: 25
Height: 5.9
Grade: A
Is Student: true
```

#### Constants and Literals
Constants are fixed values that cannot be altered during the execution of a program. They can be defined using the `const` keyword or `#define` preprocessor directive.

**Example:**
```cpp
#include <iostream>

#define PI 3.14159 // Define a constant using preprocessor directive

int main() {
    const int DAYS_IN_WEEK = 7; // Define a constant using const keyword

    std::cout << "Value of PI: " << PI << std::endl;
    std::cout << "Days in a week: " << DAYS_IN_WEEK << std::endl;

    return 0;
}
```

**Output:**
```
Value of PI: 3.14159
Days in a week: 7
```

---
id: lesson-1
title: "Preprocessor Directives"
sidebar_label: Preprocessor Directives
sidebar_position: 1
description: "Learn Preprocessor Directives in C"
tags: [courses,intermediate-level,File Inclusion,Introduction]
---
  

Preprocessor directives in C are instructions that are processed by the preprocessor before the actual compilation of the code begins. They are used to control the compilation process, define constants, include files, and more.

#### Introduction to the C Preprocessor

The C preprocessor is a tool that performs textual substitutions on the source code before it is compiled. It handles directives that are introduced with a `#` symbol and processes them to prepare the code for compilation.


#### Flowchart: Conditional Compilation
:::note
1. **Start**
2. **Check if macro is defined (`#ifdef`)**
   - If defined, include the code between `#ifdef` and `#endif`
   - If not, skip the code between `#ifdef` and `#endif`
3. **Check additional conditions using `#elif`, `#else` if applicable**
4. **End**
:::

```
 +--------------------------+
 | Start                    |
 +--------------------------+
            |
            v
 +--------------------------+
 | Check if macro is        |
 | defined (`#ifdef`)       |
 +--------------------------+
            |
          /   \
       Yes     No
        |       |
        v       v
+------------------+  +--------------------------+
| Include code      |  | Skip code                |
| between #ifdef    |  | between #ifdef and       |
| and #endif        |  | #endif                   |
+------------------+  +--------------------------+
        |
        v
+--------------------------+
 | Check additional         |
 | conditions with #elif,   |
 | #else if applicable     |
 +--------------------------+
        |
        v
+--------------------------+
 | End                      |
 +--------------------------+
```

#### Key Preprocessor Directives

1. **Macros and Macro Functions**

   - **Object-like Macros**: These are simple replacements where a name is replaced with a value or a piece of code.
     ```c
     #define PI 3.14
     ```

   - **Function-like Macros**: These are more complex and can take arguments.
     ```c
     #define SQUARE(x) ((x) * (x))
     ```

   - **Example Usage**:
     ```c
     #include <stdio.h>

     #define PI 3.14
     #define SQUARE(x) ((x) * (x))

     int main() {
         printf("PI: %f\n", PI);
         printf("Square of 5: %d\n", SQUARE(5));
         return 0;
     }
     ```

   **Output**:
   ```
   PI: 3.140000
   Square of 5: 25
   ```

2. **Conditional Compilation**

   Conditional compilation allows you to include or exclude parts of code based on certain conditions. This is useful for including platform-specific code or debugging.

   - **`#ifdef` and `#ifndef`**: Check if a macro is defined or not.
     ```c
     #ifdef DEBUG
     printf("Debug mode is enabled\n");
     #endif
     ```

   - **`#if`, `#elif`, `#else`, and `#endif`**: Provides more complex conditions.
     ```c
     #define VERSION 2

     #if VERSION >= 2
     printf("Version is 2 or higher\n");
     #else
     printf("Version is less than 2\n");
     #endif
     ```


#### Example 1: Macros and Macro Functions

```c
#include <stdio.h>

#define PI 3.14159
#define CIRCLE_AREA(radius) (PI * (radius) * (radius))

int main() {
    double radius = 5.0;
    printf("Area of circle with radius %.2f: %.2f\n", radius, CIRCLE_AREA(radius));
    return 0;
}
```

**Output**:
```
Area of circle with radius 5.00: 78.54
```

#### Example : Conditional Compilation

```c
#include <stdio.h>

#define DEBUG

int main() {
    #ifdef DEBUG
    printf("Debug mode is enabled\n");
    #endif

    #ifndef RELEASE
    printf("Release mode is not defined\n");
    #endif

    return 0;
}
```

**Output**:
```
Debug mode is enabled
Release mode is not defined
```

---
id: lesson-2
title: "File Inclusion"
sidebar_label: File Inclusion
sidebar_position: 2
description: "Learn File Inclusion in C"
tags: [courses,intermediate-level,File Inclusion,Introduction]
---
 

   File inclusion allows you to include the contents of one file into another. This is often used to include header files that contain function declarations, macros, or type definitions.

   - **`#include`**: Used to include header files.
     ```c
     #include <stdio.h> // Standard library header
     #include "myheader.h" // User-defined header
     ```

   - **Include Guards**: Prevent multiple inclusions of the same header file.
     ```c
     #ifndef MYHEADER_H
     #define MYHEADER_H

     void myFunction();

     #endif
     ```
 


#### Example: File Inclusion and Include Guards

**Header File (myheader.h)**:
```c
#ifndef MYHEADER_H
#define MYHEADER_H

void printMessage();

#endif
```

**Source File (myheader.c)**:
```c
#include <stdio.h>
#include "myheader.h"

void printMessage() {
    printf("Hello from myheader!\n");
}
```

**Main File (main.c)**:
```c
#include <stdio.h>
#include "myheader.h"

int main() {
    printMessage();
    return 0;
}
```

**Output**:
```
Hello from myheader!
```


### Summary

- **Macros**: Allow you to define constants and inline code snippets.
- **Function-like Macros**: Enable you to define reusable code patterns.
- **Conditional Compilation**: Controls which parts of the code are compiled based on certain conditions.
- **File Inclusion**: Facilitates modular programming and code reuse with include files and guards.

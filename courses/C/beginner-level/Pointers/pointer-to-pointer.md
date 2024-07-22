---
id: lesson-2
title: "Pointer to Pointer"
sidebar_label: Pointer to Pointer
sidebar_position: 2
description: "Learn Pointer to Pointer"
tags: [courses,beginner-level,Pointer to Pointer,C,Introduction]
---   

A pointer to a pointer (double pointer) is a pointer that stores the address of another pointer.

**Example: Pointer to Pointer**

```c
#include <stdio.h>

int main() {
    int var = 10;
    int *ptr;
    int **pptr;

    ptr = &var; // Pointer to int
    pptr = &ptr; // Pointer to pointer to int

    printf("Value of var: %d\n", var);
    printf("Value pointed to by ptr: %d\n", *ptr);
    printf("Value pointed to by pptr: %d\n", **pptr);

    return 0;
}
```

**Output:**

```
Value of var: 10
Value pointed to by ptr: 10
Value pointed to by pptr: 10
```



#### Example : Pointer to Pointer

```c
#include <stdio.h>

int main() {
    int var = 10;
    int *ptr;
    int **pptr;

    ptr = &var; // Pointer to int
    pptr = &ptr; // Pointer to pointer to int

    printf("Value of var: %d\n", var);
    printf("Value pointed to by ptr: %d\n", *ptr);
    printf("Value pointed to by pptr: %d\n", **pptr);

    return 0;
}
```

**Explanation**: This program illustrates the concept of a pointer to a pointer. The `pptr` is a pointer that stores the address of the pointer `ptr`, which in turn stores the address of the variable `var`.

**Output:**

```
Value of var: 10
Value pointed to by ptr: 10
Value pointed to by pptr: 10
```

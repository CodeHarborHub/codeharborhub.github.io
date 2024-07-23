---
id: lesson-1
title: "Advanced Pointers in C"
sidebar_label: Advanced Pointers
sidebar_position: 1
description: "Learn Advanced Pointers in C"
tags: [courses,intermediate-level,File Handling,Introduction]
---
 

Understanding advanced concepts of pointers is crucial for writing efficient and flexible C programs. This section covers function pointers, pointers to arrays and structures, pointer arrays, and dynamic arrays using pointers.

#### Function Pointers

Function pointers are pointers that point to the address of a function. They are used to pass functions as arguments to other functions, create callback functions, and more.

1. **Declaring and Using Function Pointers**:
   
   ```c
   void (*fptr)(int);
   
   void myFunction(int a) {
       printf("Value: %d\n", a);
   }

   int main() {
       fptr = myFunction; // Assign function address to pointer
       fptr(10); // Call function using pointer
       return 0;
   }
   ```

2. **Function Pointer as Arguments**:

   ```c
   void executeFunction(void (*fptr)(int), int value) {
       fptr(value); // Call the function via pointer
   }

   void display(int a) {
       printf("Display: %d\n", a);
   }

   int main() {
       executeFunction(display, 5);
       return 0;
   }
   ```

#### Pointers to Arrays and Structures

1. **Pointers to Arrays**:

   ```c
   int arr[5] = {1, 2, 3, 4, 5};
   int *p = arr; // Pointer to array

   for (int i = 0; i < 5; i++) {
       printf("%d ", *(p + i)); // Access array elements using pointer
   }
   ```

2. **Pointers to Structures**:

   ```c
   struct Point {
       int x, y;
   };

   int main() {
       struct Point p1 = {10, 20};
       struct Point *ptr = &p1;

       printf("x: %d, y: %d\n", ptr->x, ptr->y); // Access structure members using pointer
       return 0;
   }
   ```

#### Pointer Arrays

Pointer arrays are arrays of pointers, which can be used to point to multiple variables or arrays.

1. **Array of Pointers**:

   ```c
   int a = 1, b = 2, c = 3;
   int *arr[3] = {&a, &b, &c};

   for (int i = 0; i < 3; i++) {
       printf("%d ", *arr[i]); // Access values using array of pointers
   }
   ```

2. **Pointer to Pointer (Double Pointer)**:

   ```c
   int a = 10;
   int *p1 = &a;
   int **p2 = &p1;

   printf("Value: %d\n", **p2); // Access value using double pointer
   ```


#### Example 1: Function Pointers

```c
#include <stdio.h>

void printMessage() {
    printf("Hello, World!\n");
}

void execute(void (*funcPtr)()) {
    funcPtr(); // Call the function via pointer
}

int main() {
    void (*fptr)() = printMessage; // Function pointer assignment
    execute(fptr); // Pass function pointer as argument
    return 0;
}
```

**Output**:
```
Hello, World!
```

#### Example 2: Pointers to Arrays and Structures

```c
#include <stdio.h>

struct Point {
    int x, y;
};

int main() {
    struct Point p = {5, 10};
    struct Point *ptr = &p;

    printf("x: %d, y: %d\n", ptr->x, ptr->y); // Access structure members using pointer

    int arr[3] = {1, 2, 3};
    int *pArr = arr;

    for (int i = 0; i < 3; i++) {
        printf("%d ", *(pArr + i)); // Access array elements using pointer
    }
    return 0;
}
```

**Output**:
```
x: 5, y: 10
1 2 3
```

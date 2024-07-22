---
id: lesson-1
title: "Arrays and Strings in C"
sidebar_label: Arrays and Strings 
sidebar_position: 1
description: "Learn Arrays and Strings in C"
tags: [courses,beginner-level,C,Introduction]
---  

Arrays and strings are fundamental concepts in C programming. They allow you to store and manipulate collections of data efficiently.

#### Introduction to Arrays

An array is a collection of variables of the same type, stored in contiguous memory locations. Arrays are used to store multiple values in a single variable.

**Declaration and Initialization of an Array:**

```c
#include <stdio.h>

int main() {
    // Declaration
    int numbers[5];

    // Initialization
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    // Printing array elements
    for (int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\n", i, numbers[i]);
    }

    return 0;
}
```

**Output:**

```
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50
```

#### Single-Dimensional Arrays

A single-dimensional array is a list of elements of the same type stored in contiguous memory locations.

**Example: Single-Dimensional Array**

```c
#include <stdio.h>

int main() {
    // Declaration and initialization
    int numbers[5] = {10, 20, 30, 40, 50};

    // Printing array elements
    for (int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\n", i, numbers[i]);
    }

    return 0;
}
```

**Output:**

```
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50
```

#### Multidimensional Arrays

A multidimensional array is an array of arrays. The most common multidimensional array is the two-dimensional array (matrix).

**Example: Two-Dimensional Array**

```c
#include <stdio.h>

int main() {
    // Declaration and initialization
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    // Printing array elements
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("matrix[%d][%d] = %d\n", i, j, matrix[i][j]);
        }
    }

    return 0;
}
```

**Output:**

```
matrix[0][0] = 1
matrix[0][1] = 2
matrix[0][2] = 3
matrix[1][0] = 4
matrix[1][1] = 5
matrix[1][2] = 6
matrix[2][0] = 7
matrix[2][1] = 8
matrix[2][2] = 9
```
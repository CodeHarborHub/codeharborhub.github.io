---
id: lesson-2
title: "Introduction to Unions"
sidebar_label: Introduction to Unions
sidebar_position: 2
description: "Learn Introduction to Unions"
tags: [courses,beginner-level,C,Unions,Introduction]
---   

A union is similar to a structure, but its members share the same memory location. This means that only one member can contain a value at any given time.

**Defining a Union:**

```c
#include <stdio.h>

// Define a union
union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    // Declare a union variable
    union Data data;

    // Assign values to the members of the union
    data.i = 10;
    printf("data.i: %d\n", data.i);

    data.f = 220.5;
    printf("data.f: %.2f\n", data.f);

    strcpy(data.str, "Hello");
    printf("data.str: %s\n", data.str);

    return 0;
}
```

**Output:**

```
data.i: 10
data.f: 220.50
data.str: Hello
```

#### Differences Between Structures and Unions

1. **Memory Allocation**:
   - **Structure**: Allocates separate memory for each member.
   - **Union**: Shares the same memory location for all its members.

2. **Usage**:
   - **Structure**: Used when you need to store different types of data together.
   - **Union**: Used when you need to store different types of data but only one at a time.



#### Example : Using Unions

```c
#include <stdio.h>

// Define a union
union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    // Declare a union variable
    union Data data;

    // Assign values to the members of the union
    data.i = 10;
    printf("data.i: %d\n", data.i);

    data.f = 220.5;
    printf("data.f: %.2f\n", data.f);

    strcpy(data.str, "Hello");
    printf("data.str: %s\n", data.str);

    return 0;
}
```
 

**Output:**

```
data.i: 10
data.f: 220.50
data.str: Hello
```

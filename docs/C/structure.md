---
id: c-tsructures
title: C Structures
sidebar_label: C Structures
sidebar_position: 14
tags: [c, c structures]
description: In this tutorial, you will learn about the C Structures, what it is.
---

In C programming, a structure is a user-defined data type that allows you to group together different types of variables under a single name. It enables you to create a composite data type that can hold multiple related pieces of information.

#### Syntax
```c
struct structure_name {
    type member1;
    type member2;
    // more members...
};
```

#### Example 
```c
#include <stdio.h>

// Define a structure named 'Person'
struct Person {
    char name[50];
    int age;
    float height;
};

int main() {
    // Declare a variable of type 'Person'
    struct Person person1;

    // Assign values to the members of the structure
    strcpy(person1.name, "John Doe");
    person1.age = 30;
    person1.height = 1.75;

    // Access and print the values
    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);
    printf("Height: %.2f meters\n", person1.height);

    return 0;
}
```
Certainly! Let's go through each step to create, access, modify, and a simpler structure in C.

### 1. Creating a Structure

To create a structure in C, you define it using the `struct` keyword followed by a structure tag (name) and curly braces `{}` containing its members.

```c
#include <stdio.h>
#include <string.h> // For strcpy function

// Define a structure named 'Person'
struct Person {
    char name[50];
    int age;
    float height;
};
```

### 2. Accessing Structure Members

You can access structure members using the dot (`.`) operator. Here’s how you can access and print the members of a structure variable:

```c
int main() {
    // Declare a variable of type 'Person'
    struct Person person1;

    // Assign values to the members of the structure
    strcpy(person1.name, "John Doe");
    person1.age = 30;
    person1.height = 1.75;

    // Access and print the values
    printf("Name: %s\n", person1.name);
    printf("Age: %d\n", person1.age);
    printf("Height: %.2f meters\n", person1.height);

    return 0;
}
```

### 3. Modifying Structure Members

You can modify structure members directly by assigning new values using the dot (`.`) operator:

```c
int main() {
    struct Person person1;

    // Assign values to the members of the structure
    strcpy(person1.name, "John Doe");
    person1.age = 30;
    person1.height = 1.75;

    // Modify the values
    strcpy(person1.name, "Jane Smith"); // Change the name
    person1.age = 25;                   // Update the age
    person1.height = 1.68;              // Adjust the height

    // Access and print the modified values
    printf("Modified Name: %s\n", person1.name);
    printf("Modified Age: %d\n", person1.age);
    printf("Modified Height: %.2f meters\n", person1.height);

    return 0;
}
```

### 4. Simpler Structure in C

A simpler structure could represent just a single piece of data, such as an integer or a character:

```c
#include <stdio.h>

// Define a structure named 'Point' representing a 2D point
struct Point {
    int x;
    int y;
};

int main() {
    // Declare and initialize a variable of type 'Point'
    struct Point p1 = {10, 20};

    // Access and print the values
    printf("Point coordinates: (%d, %d)\n", p1.x, p1.y);

    return 0;
}
```

- **Creating a Structure**: Use the `struct` keyword followed by the structure name and define its members inside curly braces `{}`.
  
- **Accessing Structure Members**: Use the dot (`.`) operator to access members of a structure variable.
  
- **Modifying Structure Members**: Modify structure members directly by assigning new values using the dot (`.`) operator.

- **Simpler Structure**: A simpler structure can consist of basic data types like integers (`int`) or characters (`char`), providing a compact way to organize related data.


### Key Points 

1. **Definition**: Structures allow you to create custom data types by grouping together variables of different data types.
  
2. **Members**: Members of a structure can be of any data type, including basic types (int, float, char), arrays, other structures, or pointers.

3. **Memory Allocation**: Memory for a structure is allocated contiguously for its members. The size of a structure is determined by the sum of the sizes of its members, plus any padding for alignment.

4. **Initialization**: Structures can be initialized when declared, similar to variables.

5. **Accessing Members**: Structure members are accessed using the dot (`.`) operator.

6. **Passing Structures to Functions**: Structures can be passed to functions by value or by reference (using pointers).

7. **Nested Structures**: Structures can contain other structures as members, allowing for hierarchical data representation.

8. **typedef**: `typedef` can be used to create aliases for structures, simplifying their use and improving code readability.

### Conclusion

C structures provide a powerful way to organize and manipulate data in a program. They offer flexibility and efficiency by allowing developers to define complex data types that suit specific needs. Structures are widely used in C programming for representing entities such as employees, students, and complex data records.


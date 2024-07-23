---
id: lesson-2
title: "Introduction to Unions"
sidebar_label:  Unions
sidebar_position: 2
description:  "Unions in c++"
tags: [courses,beginner-level,C++,Introduction]
---  
 

A **union** is a user-defined data type that allows storing different data types in the same memory location. Only one of the members can contain a value at any given time.

```cpp
#include <iostream>
using namespace std;

// Define a union
union Data {
    int intValue;
    float floatValue;
    char charValue;
};

int main() {
    // Declare a union variable
    Data data;

    // Assign and access union members
    data.intValue = 10;
    cout << "Integer: " << data.intValue << endl;

    data.floatValue = 3.14;
    cout << "Float: " << data.floatValue << endl;

    data.charValue = 'A';
    cout << "Char: " << data.charValue << endl;

    return 0;
}
```

**Output:**
```
Integer: 10
Float: 3.14
Char: A
```

#### Differences Between Structures and Unions

| Feature            | Structure                                            | Union                                                |
|--------------------|------------------------------------------------------|------------------------------------------------------|
| Storage            | All members have their own storage                   | All members share the same memory location           |
| Size               | Sum of the sizes of all members                      | Size of the largest member                           |
| Access             | All members can be accessed at any time              | Only one member can be accessed at a time            |
| Use Case           | Used for grouping related data together              | Used for efficient memory usage                      |


:::tip
- **Structures:** Use structures for grouping related data together. They are helpful for creating records like a student's details or an employee's profile.
- **Unions:** Use unions when you need to store one of several types of data in the same memory location. This can be useful for memory-efficient representations of data that can take multiple forms.
- **Initialization:** Always initialize structures and unions properly to avoid undefined behavior.
- **Nested Structures:** Utilize nested structures to represent complex data relationships.
- **Accessing Members:** When using unions, remember that assigning a new value to one member will overwrite any existing value in the union.
:::
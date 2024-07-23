---
id: lesson-2
title: "Pointer to Pointer"
sidebar_label: Pointer to Pointer
sidebar_position: 2
description:  "Learn Pointer to Pointer"
tags: [courses,beginner-level,C++,Introduction]
---  
  
A pointer to a pointer is a form of multiple indirection or a chain of pointers.


#### Example
```cpp
#include <iostream>
using namespace std;

int main() {
    int var = 10;
    int *ptr = &var;
    int **ptr2ptr = &ptr;

    cout << "Value of var: " << var << endl;
    cout << "Value of ptr: " << ptr << endl;
    cout << "Value pointed by ptr: " << *ptr << endl;
    cout << "Value of ptr2ptr: " << ptr2ptr << endl;
    cout << "Value pointed by ptr2ptr: " << **ptr2ptr << endl;

    return 0;
}
```

**Output:**
```
Value of var: 10
Value of ptr: 0x7ffd6fdfd8ac
Value pointed by ptr: 10
Value of ptr2ptr: 0x7ffd6fdfd8a0
Value pointed by ptr2ptr: 10
```


:::tip
- **Pointer Initialization:** Always initialize pointers to avoid undefined behavior.
- **Pointer Arithmetic:** Understand pointer arithmetic to efficiently navigate arrays.
- **Function Arguments:** Use pointers in function arguments to modify variables outside the function.
- **Multiple Indirection:** Use pointers to pointers for complex data structures and dynamic memory management.
- **Debugging:** Be cautious with pointer operations to avoid memory leaks and segmentation faults.
:::
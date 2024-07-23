---
id: lesson-2
title: "Memory Management Techniques"
sidebar_label: Memory Management Techniques
sidebar_position: 2
description: "Learn Memory Management Techniques"
tags: [courses,intermediate-level,React Native,Introduction]
--- 
     

Proper memory management involves:

- **Allocating memory** only when needed.
- **Deallocating memory** when it is no longer needed to avoid memory leaks.
- **Setting pointers to nullptr** after deletion to avoid dangling pointers.

#### Common Memory-Related Issues

- **Memory Leaks**: Occur when allocated memory is not deallocated, leading to wasted memory.
- **Dangling Pointers**: Pointers that reference memory that has been deallocated.
- **Double Deletion**: Deallocating the same memory more than once, which can cause program crashes or undefined behavior.

##### Example: Memory Leak
```cpp
#include <iostream>
using namespace std;

void createMemoryLeak() {
    int *p = new int[10]; // Memory is allocated but never deallocated
}

int main() {
    createMemoryLeak();
    // Memory leak occurs here because the allocated memory is not deallocated
    return 0;
}
```

#### Preventing Memory Leaks and Dangling Pointers

- Always pair `new` with `delete` and `new[]` with `delete[]`.
- Set pointers to `nullptr` after deleting.
- Use smart pointers (like `std::unique_ptr` and `std::shared_ptr` in C++11 and later) to manage memory automatically.

##### Example: Using Smart Pointers
```cpp
#include <iostream>
#include <memory>
using namespace std;

int main() {
    unique_ptr<int> p(new int(10)); // Automatically manages memory

    cout << "Value: " << *p << endl; // Output: Value: 10

    // No need to manually delete, smart pointer takes care of it

    return 0;
}
```

**Output:**
```
Value: 10
```

:::tip
- **Always Deallocate Memory**: Ensure that every `new` is paired with a corresponding `delete` to prevent memory leaks.
- **Avoid Dangling Pointers**: Set pointers to `nullptr` after deleting the allocated memory.
- **Use Smart Pointers**: Consider using smart pointers (`std::unique_ptr`, `std::shared_ptr`) to manage memory automatically and avoid common pitfalls associated with manual memory management.
- **Check for nullptr**: Before using a pointer, always check if it is `nullptr` to prevent dereferencing invalid memory.
:::
---
id: lesson-2
title: "Custom Allocators"
sidebar_label: Custom Allocators
sidebar_position: 2
description: "Learn Custom Allocators"
tags: [courses,Advance-level,Introduction]
---    

**Custom Allocators**: Custom allocators provide control over memory allocation strategies and can be used to optimize memory usage for specific applications.

##### Example: Custom Allocator

```cpp
#include <iostream>
#include <memory>
#include <vector>

template<typename T>
class CustomAllocator : public std::allocator<T> {
public:
    typedef T value_type;

    T* allocate(std::size_t n) {
        std::cout << "Allocating " << n << " elements." << std::endl;
        return std::allocator<T>::allocate(n);
    }

    void deallocate(T* p, std::size_t n) {
        std::cout << "Deallocating " << n << " elements." << std::endl;
        std::allocator<T>::deallocate(p, n);
    }
};

int main() {
    std::vector<int, CustomAllocator<int>> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);

    std::cout << "Vector size: " << vec.size() << std::endl;
    return 0;
}
```

**Output:**
```
Allocating 1 elements.
Allocating 1 elements.
Allocating 1 elements.
Vector size: 3
Deallocating 1 elements.
Deallocating 1 elements.
Deallocating 1 elements.
```

### Memory Alignment and Padding

**Memory Alignment and Padding**: Memory alignment refers to arranging data in memory to meet certain hardware requirements. Padding is used to align data structures in memory.

##### Example: Memory Alignment

```cpp
#include <iostream>
#include <cstddef> // For offsetof

struct AlignedStruct {
    char a;
    int b;
    double c;
};

int main() {
    std::cout << "Size of AlignedStruct: " << sizeof(AlignedStruct) << std::endl;
    std::cout << "Offset of 'a': " << offsetof(AlignedStruct, a) << std::endl;
    std::cout << "Offset of 'b': " << offsetof(AlignedStruct, b) << std::endl;
    std::cout << "Offset of 'c': " << offsetof(AlignedStruct, c) << std::endl;

    return 0;
}
```

**Output:**
```
Size of AlignedStruct: 16
Offset of 'a': 0
Offset of 'b': 4
Offset of 'c': 8
```



:::tip
- **Memory Pools**: Useful for scenarios with frequent allocation and deallocation. They reduce fragmentation and improve performance.
- **Smart Pointers**: Prefer using `unique_ptr` for single ownership, `shared_ptr` for shared ownership, and `weak_ptr` for non-owning references.
- **Custom Allocators**: Utilize custom allocators for specialized memory management needs, especially in performance-critical applications.
- **Memory Alignment**: Ensure data structures are aligned properly to meet hardware requirements and avoid performance penalties.
:::
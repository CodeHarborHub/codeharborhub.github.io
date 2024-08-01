# cpp_deques.md: Explanation and Usage of Deque (Double-Ended Queue) in STL

## Introduction

The `deque` (double-ended queue) is a sequence container in the C++ Standard Library (STL) that allows fast insertion and deletion of elements at both the beginning and the end. Unlike vectors, deques are not guaranteed to store all elements in contiguous memory, but they provide similar functionality with efficient insertions and deletions at both ends.

## Syntax

To use `deque`, you need to include the `<deque>` header:

```cpp
#include <deque>
```
## Declaration
You can declare a deque as follows:

```cpp
std::deque<int> myDeque;
```

# Basic Operations
## Adding Elements
push_back: Adds an element to the end of the deque.
push_front: Adds an element to the front of the deque.


```cpp
myDeque.push_back(10);    // Adds 10 to the end
myDeque.push_front(5);    // Adds 5 to the front
```

# Removing Elements
pop_back: Removes an element from the end of the deque.
pop_front: Removes an element from the front of the deque.

```cpp
myDeque.pop_back();       // Removes the last element
myDeque.pop_front();      // Removes the first element
```

# Accessing Elements
operator[]: Provides random access to elements.
at: Provides bounds-checked access to elements.
front: Accesses the first element.
back: Accesses the last element.

```cpp
int firstElement = myDeque.front();
int lastElement = myDeque.back();
int elementAt2 = myDeque[2];
int elementAt3 = myDeque.at(3); // Throws an exception if out of range
```

# Iterators
begin: Returns an iterator to the first element.
end: Returns an iterator to one past the last element.

```cpp
for (auto it = myDeque.begin(); it != myDeque.end(); ++it) {
    std::cout << *it << " ";
}
```

# Example Code
Here is an example demonstrating the usage of deque:

```cpp
#include <iostream>
#include <deque>

int main() {
    std::deque<int> myDeque;

    // Adding elements
    myDeque.push_back(10);
    myDeque.push_front(5);
    myDeque.push_back(15);
    myDeque.push_front(1);

    // Display elements
    std::cout << "Deque elements: ";
    for (int num : myDeque) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Accessing elements
    std::cout << "Front element: " << myDeque.front() << std::endl;
    std::cout << "Back element: " << myDeque.back() << std::endl;
    std::cout << "Element at index 2: " << myDeque[2] << std::endl;

    // Removing elements
    myDeque.pop_front();
    myDeque.pop_back();

    // Display elements after removal
    std::cout << "Deque elements after pop operations: ";
    for (int num : myDeque) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```
# Conclusion
The deque container in the C++ STL is a versatile sequence container that allows efficient insertion and deletion of elements at both ends. It combines the strengths of both vectors and lists, making it a suitable choice for scenarios where you need quick access to both ends of a sequence.

---
id: cpp-vector
title: C++ Vectors
sidebar_label: CPP STL
tags:
  - dsa
  - data-structures
  - cpp
  - intermediate
  - stl
  - standard template library
  - cpp stl
  - programming
  - tutorial
  - vectors
sidebar_position: 2
---

# Exploring Vectors in C++: The Ultimate Guide

Welcome back, C++ enthusiasts! Today, we're going to take a deep dive into one of the most versatile and widely used components of the C++ Standard Template Library (STL): the `vector`. If you’re looking to enhance your understanding and utilization of vectors in C++, you’re in the right place. This guide will cover everything you need to know about vectors, from basic usage to advanced features, complete with examples and practical applications.

## What is a Vector?

In C++, a `vector` is a dynamic array that can resize itself automatically when an element is added or removed. Unlike standard arrays, vectors provide flexibility and a host of functionalities that make managing collections of data more efficient.

### Why Use Vectors?

1. **Dynamic Sizing**: Vectors can grow and shrink dynamically, which makes them more versatile than arrays.
2. **Ease of Use**: Vectors come with built-in functions for common operations like insertion, deletion, and access.
3. **Efficiency**: Vectors are optimized for performance, offering constant-time complexity for element access and amortized constant time for insertion at the end.

## Basics of Vectors

Let’s start with the basics of creating and using vectors in C++.

### Creating a Vector

To use vectors, you need to include the `<vector>` header.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers; // Creates an empty vector of integers
    std::vector<int> numbers_with_initial_size(10); // Creates a vector with 10 elements initialized to 0
    std::vector<int> numbers_with_initial_values(10, 5); // Creates a vector with 10 elements initialized to 5

    return 0;
}
```

### Adding and Accessing Elements

You can add elements to a vector using `push_back`, and access them using the `[]` operator or the `at` method.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers;
    numbers.push_back(1); // Adds 1 to the vector
    numbers.push_back(2); // Adds 2 to the vector

    std::cout << "First element: " << numbers[0] << std::endl; // Accesses the first element
    std::cout << "Second element: " << numbers.at(1) << std::endl; // Accesses the second element using at()

    return 0;
}
```

### Iterating Over a Vector

You can iterate over the elements of a vector using a range-based for loop or iterators.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    std::cout << "Using range-based for loop:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Using iterators:" << std::endl;
    for (auto it = numbers.begin(); it != numbers.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Advanced Vector Features

Now that we've covered the basics, let's explore some advanced features and techniques for using vectors in C++.

### Resizing a Vector

You can resize a vector using the `resize` method, which adjusts the size of the vector.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3};
    numbers.resize(5); // Resizes the vector to contain 5 elements

    std::cout << "Vector after resizing:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Inserting and Erasing Elements

You can insert and erase elements at any position using the `insert` and `erase` methods.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 4, 5};
    auto it = numbers.begin() + 2;
    numbers.insert(it, 3); // Inserts 3 at the third position

    std::cout << "Vector after insertion:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    numbers.erase(it); // Erases the element at the third position

    std::cout << "Vector after erasing:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Capacity and Size

Vectors provide several methods to manage and query their capacity and size.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    std::cout << "Size: " << numbers.size() << std::endl; // Number of elements
    std::cout << "Capacity: " << numbers.capacity() << std::endl; // Capacity of the vector
    std::cout << "Is empty: " << (numbers.empty() ? "Yes" : "No") << std::endl; // Check if vector is empty

    numbers.reserve(10); // Increase the capacity of the vector to at least 10

    std::cout << "Capacity after reserve: " << numbers.capacity() << std::endl;

    return 0;
}
```

### Swapping Vectors

You can `swap` the contents of two vectors using the swap method, which is useful for optimizing performance.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers1 = {1, 2, 3};
    std::vector<int> numbers2 = {4, 5, 6};

    numbers1.swap(numbers2);

    std::cout << "numbers1 after swap:" << std::endl;
    for (int num : numbers1) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "numbers2 after swap:" << std::endl;
    for (int num : numbers2) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Practical Applications of Vectors

Vectors are not just theoretical constructs; they are immensely practical and can be used in various scenarios to solve real-world problems.

### Problem 1: Storing Dynamic User Input

Imagine you are developing a program that collects an unknown number of user inputs. Vectors are ideal for this scenario because they can dynamically grow as needed.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> inputs;
    int input;

    std::cout << "Enter numbers (enter -1 to stop):" << std::endl;
    while (std::cin >> input && input != -1) {
        inputs.push_back(input);
    }

    std::cout << "You entered:" << std::endl;
    for (int num : inputs) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Problem 2: Performing Operations on a List of Numbers

Vectors are perfect for storing and manipulating lists of numbers, such as calculating the average or finding the maximum value.

```cpp
#include <iostream>
#include <vector>
#include <numeric> // For std::accumulate

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // Calculate the sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);

    // Calculate the average
    double average = static_cast<double>(sum) / numbers.size();

    // Find the maximum value
    int max_value = *std::max_element(numbers.begin(), numbers.end());

    std::cout << "Sum: " << sum << std::endl;
    std::cout << "Average: " << average << std::endl;
    std::cout << "Max value: " << max_value << std::endl;

    return 0;
}
```

## In Conclusion

Vectors are a cornerstone of the C++ Standard Template Library, providing a dynamic and flexible way to handle collections of data. By mastering vectors, you can write more efficient, readable, and maintainable code. Whether you're dealing with dynamic user input, performing complex calculations, or simply managing a list of items, vectors are the go-to solution. <br />

So, dive into the world of vectors, experiment with their features, and unlock the full potential of your C++ programming skills. Happy coding, and may your vectors always be well-sized and efficiently managed!
---
id: cpp-functor
title: Functors in C++
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
  - functors
  - cpp functor
sidebar_position: 8
---

Greetings, C++ enthusiasts! Today, we’re going to dive into the world of functors, also known as function objects. If you’re eager to enhance your C++ skills and learn how to create flexible, reusable functions, you’ve come to the right place. This comprehensive guide will cover everything you need to know about functors, from basic usage to advanced features, complete with practical examples.

## What are Functors?

A functor, short for function object, is an object that can be used as though it were a function. It achieves this by overloading the function call operator operator(). Functors are more than just functions; they can maintain state, be customized, and provide more flexible and reusable code.

### Why Use Functors?

1. **Flexibility**: Functors can maintain state between function calls, allowing for more complex behavior.
2. **Customization**: They provide a way to parameterize behavior, making code more adaptable.
3. **Reusability**: Functors can be reused across different contexts, promoting code modularity.

## Basics of Functors

Let’s start with the basics of creating and using functors in C++.

### Creating a Functor

To create a functor, define a class and overload the function call operator `operator()`.

```cpp
#include <iostream>

class MyFunctor {
public:
    void operator()(int x) const {
        std::cout << "Functor called with argument: " << x << std::endl;
    }
};

int main() {
    MyFunctor functor;
    functor(42); // Using the functor like a function
    return 0;
}
```

### Using Functors

Functors can be used wherever functions are expected, such as in algorithms, as function pointers, and with standard library containers.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class Square {
public:
    int operator()(int x) const {
        return x * x;
    }
};

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    Square square;
    std::transform(numbers.begin(), numbers.end(), numbers.begin(), square);

    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Advanced Functors

Now that we’ve covered the basics, let’s explore some advanced features and techniques for using functors in C++.

### Functors with State

Functors can maintain internal state between function calls, enabling more complex behavior.

```cpp
#include <iostream>

class Counter {
    int count = 0;
public:
    int operator()() {
        return ++count;
    }
};

int main() {
    Counter counter;
    std::cout << "First call: " << counter() << std::endl;
    std::cout << "Second call: " << counter() << std::endl;
    std::cout << "Third call: " << counter() << std::endl;

    return 0;
}
```

### Parameterized Functors

Functors can accept constructor parameters, allowing for customized behavior.

```cpp
#include <iostream>

class Multiplier {
    int factor;
public:
    Multiplier(int f) : factor(f) {}
    int operator()(int x) const {
        return x * factor;
    }
};

int main() {
    Multiplier multiplyByTwo(2);
    std::cout << "5 multiplied by 2: " << multiplyByTwo(5) << std::endl;

    Multiplier multiplyByThree(3);
    std::cout << "5 multiplied by 3: " << multiplyByThree(5) << std::endl;

    return 0;
}
```

### Functors as Function Objects

Functors can act as function objects, providing a way to encapsulate and parameterize behavior.

```cpp
#include <iostream>
#include <algorithm>
#include <vector>

class ThresholdChecker {
    int threshold;
public:
    ThresholdChecker(int t) : threshold(t) {}
    bool operator()(int x) const {
        return x > threshold;
    }
};

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int threshold = 2;
    ThresholdChecker isAboveThreshold(threshold);
    auto it = std::find_if(numbers.begin(), numbers.end(), isAboveThreshold);

    if (it != numbers.end()) {
        std::cout << "First element above threshold " << threshold << ": " << *it << std::endl;
    } else {
        std::cout << "No elements above threshold " << threshold << " found." << std::endl;
    }

    return 0;
}
```

### Combining Functors with Standard Library Algorithms

Functors can be combined with standard library algorithms to perform complex operations efficiently.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class Increment {
    int increment_value;
public:
    Increment(int inc) : increment_value(inc) {}
    int operator()(int x) const {
        return x + increment_value;
    }
};

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    Increment incrementBy(3);
    std::transform(numbers.begin(), numbers.end(), numbers.begin(), incrementBy);

    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Practical Applications of Functors

Functors are not just theoretical constructs; they are immensely practical and can be used in various scenarios to solve real-world problems.

### Problem 1: Sorting with Custom Criteria

You have a list of items, and you want to sort them using custom criteria.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

struct Person {
    std::string name;
    int age;

    Person(std::string n, int a) : name(n), age(a) {}
};

class CompareByAge {
public:
    bool operator()(const Person &a, const Person &b) const {
        return a.age < b.age;
    }
};

int main() {
    std::vector<Person> people = {{"Alice", 30}, {"Bob", 25}, {"Charlie", 35}};
    std::sort(people.begin(), people.end(), CompareByAge());

    for (const auto &person : people) {
        std::cout << person.name << ": " << person.age << std::endl;
    }

    return 0;
}
```

### Problem 2: Filtering Elements in a Container

You need to filter elements in a container based on a specific condition.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class IsEven {
public:
    bool operator()(int x) const {
        return x % 2 == 0;
    }
};

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6};
    auto end = std::remove_if(numbers.begin(), numbers.end(), IsEven());
    numbers.erase(end, numbers.end());

    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Problem 3: Accumulating Values with Custom Behavior

You want to accumulate values in a container using custom behavior.

```cpp
#include <iostream>
#include <vector>
#include <numeric>

class Multiply {
public:
    int operator()(int a, int b) const {
        return a * b;
    }
};

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    int result = std::accumulate(numbers.begin(), numbers.end(), 1, Multiply());

    std::cout << "Product of all elements: " << result << std::endl;
    return 0;
}
```

## In Conclusion

Functors, or function objects, are powerful tools in C++ that enable more flexible and reusable code. By mastering functors, you can encapsulate complex behavior, maintain state, and create customizable functions that integrate seamlessly with the standard library algorithms.<br />

Functors, or function objects, are powerful tools in C++ that enable more flexible and reusable code. By mastering functors, you can encapsulate complex behavior, maintain state, and create customizable functions that integrate seamlessly with the standard library algorithms.
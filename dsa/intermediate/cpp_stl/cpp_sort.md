---
id: cpp-sort
title: The Sort Algorithm in C++
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
  - sort algorithm
  - cpp sort
sidebar_position: 6
---

# Mastering the sort Algorithm in C++: A Comprehensive Guide

Hello, C++ enthusiasts! Today, we’re diving into one of the most fundamental and powerful components of the C++ Standard Library: the `sort` algorithm. If you're looking to enhance your understanding and utilization of sorting in C++, you're in the right place. This guide will cover everything you need to know about the `sort` algorithm, from basic usage to advanced features, complete with examples and practical applications.

## What is the `sort` Algorithm?

The `sort` algorithm is a built-in function in the C++ Standard Library that allows you to sort elements in a range, typically specified by two iterators. It is part of the `<algorithm>` header and uses a highly efficient sorting algorithm, typically an introspective sort, which is a hybrid of quicksort, heapsort, and insertion sort.

### Why Use the `sort` Algorithm?

1. **Efficiency**: The `sort` algorithm is optimized for performance and typically runs in O(n log n) time complexity.
2. **Convenience**: It is easy to use and reduces the amount of boilerplate code needed to implement sorting.
3. **Flexibility**: The `sort` algorithm can be customized with comparison functions to define custom sorting orders.

## Basics of the `sort` Algorithm

Let’s start with the basics of using the `sort` algorithm in C++.

### Including the Header

To use the `sort` algorithm, you need to include the `<algorithm>` header.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>
```

### Basic Usage

The `sort` algorithm requires two iterators: one pointing to the beginning of the range and the other pointing to the end.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2};
    std::sort(numbers.begin(), numbers.end());

    std::cout << "Sorted elements:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Custom Comparison Function

You can customize the sorting order by providing a comparison function.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

bool descending(int a, int b) {
    return a > b;
}

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2};
    std::sort(numbers.begin(), numbers.end(), descending);

    std::cout << "Sorted elements in descending order:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Advanced Features

Now that we've covered the basics, let's explore some advanced features and techniques for using the `sort` algorithm in C++.

### Sorting Structures

You can sort a vector of structures or classes by defining a custom comparison function or by overloading the comparison operators.

Example with Custom Comparison Function:

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

struct Person {
    std::string name;
    int age;
};

bool compareByAge(const Person &a, const Person &b) {
    return a.age < b.age;
}

int main() {
    std::vector<Person> people = {{"Alice", 30}, {"Bob", 25}, {"Charlie", 35}};
    std::sort(people.begin(), people.end(), compareByAge);

    std::cout << "People sorted by age:" << std::endl;
    for (const Person &p : people) {
        std::cout << p.name << ": " << p.age << std::endl;
    }

    return 0;
}
```

Example with Overloaded Operators:

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

struct Person {
    std::string name;
    int age;

    bool operator<(const Person &other) const {
        return age < other.age;
    }
};

int main() {
    std::vector<Person> people = {{"Alice", 30}, {"Bob", 25}, {"Charlie", 35}};
    std::sort(people.begin(), people.end());

    std::cout << "People sorted by age:" << std::endl;
    for (const Person &p : people) {
        std::cout << p.name << ": " << p.age << std::endl;
    }

    return 0;
}
```

### Sorting with Lambdas

Lambdas provide a concise way to define custom comparison functions.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2};
    std::sort(numbers.begin(), numbers.end(), [](int a, int b) {
        return a > b; // Sort in descending order
    });

    std::cout << "Sorted elements in descending order using lambda:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Partial Sorting

If you only need the top N elements sorted, you can use `std::partial_sort`.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2};
    std::partial_sort(numbers.begin(), numbers.begin() + 3, numbers.end());

    std::cout << "Top 3 sorted elements:" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Sorting Specific Ranges

You can sort only a part of a container by specifying the range with iterators.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {5, 3, 1, 4, 2, 6, 8, 7};
    std::sort(numbers.begin() + 2, numbers.begin() + 6);

    std::cout << "Partially sorted elements (index 2 to 5):" << std::endl;
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

## Practical Applications of the `sort` Algorithm

The `sort` algorithm is not just a theoretical construct; it is immensely practical and can be used in various scenarios to solve real-world problems.

### Problem 1: Sorting a List of Names

You have a list of names, and you want to sort them alphabetically.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector<std::string> names = {"Charlie", "Alice", "Bob"};
    std::sort(names.begin(), names.end());

    std::cout << "Sorted names:" << std::endl;
    for (const std::string &name : names) {
        std::cout << name << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

### Problem 2: Sorting by Multiple Criteria

You have a list of students with names and grades, and you want to sort them first by grade, then by name.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>
#include <string>

struct Student {
    std::string name;
    int grade;
};

bool compareStudents(const Student &a, const Student &b) {
    if (a.grade == b.grade) {
        return a.name < b.name;
    }
    return a.grade > b.grade; // Higher grades first
}

int main() {
    std::vector<Student> students = {{"Charlie", 85}, {"Alice", 95}, {"Bob", 85}, {"Dave", 70}};
    std::sort(students.begin(), students.end(), compareStudents);

    std::cout << "Sorted students:" << std::endl;
    for (const Student &student : students) {
        std::cout << student.name << ": " << student.grade << std::endl;
    }

    return 0;
}
```

### Problem 3: Sorting a Custom Data Structure

You have a custom data structure, and you want to sort it based on a specific member variable.

```cpp
#include <algorithm>
#include <iostream>
#include <vector>
#include <string>

struct Book {
    std::string title;
    int year;
};

bool compareByYear(const Book &a, const Book &b) {
    return a.year < b.year;
}

int main() {
    std::vector<Book> books = {{"C++ Primer", 2012}, {"Effective C++", 2005}, {"The C++ Programming Language", 2013}};
    std::sort(books.begin(), books.end(), compareByYear);

    std::cout << "Books sorted by year:" << std::endl;
    for (const Book &book : books) {
        std::cout << book.title << ": " << book.year << std::endl;
    }

    return 0;
}
```

# In Conclusion

The sort algorithm is a powerful and versatile tool in the C++ Standard Library, offering efficient and flexible sorting capabilities. By mastering the sort algorithm, you can write more efficient, readable, and maintainable code. Whether you're sorting simple arrays, complex data structures, or using custom comparison functions, the sort algorithm is the go-to solution. <br />

So, dive into the world of sorting, experiment with the sort algorithm, and unlock the full potential of your C++ programming skills. Happy coding, and may your sorted arrays always be in the right order!
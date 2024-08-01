---
id: cpp-exception-basics
title: The Basics of Exceptions in C++
sidebar_label: The Basics of Exceptions in C++
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ exception handling,
    exception handling basics,
    c++ exception
  ]
description: In this tutorial, we'll cover the basics of exceptions in C++. We'll explore how exceptions provide a mechanism for handling errors and unexpected situations in your code, allowing you to gracefully respond to exceptional conditions. You'll learn about the try-catch block, exception handling syntax, and how to throw and catch exceptions. Understanding exceptions is essential for writing robust and resilient C++ programs, ensuring proper error handling and improving overall program reliability.
---

Exceptions provide a robust mechanism for handling errors and unexpected situations in C++ programs. They allow you to separate error-handling code from regular code, making your programs more readable and maintainable.

### 1. **Exception Handling Syntax**

In C++, exceptions are handled using three keywords: `try`, `catch`, and `throw`.

- **`try` Block**: Encloses the code that might throw an exception.
- **`catch` Block**: Catches and handles the exception.
- **`throw` Keyword**: Used to throw an exception.

Here's the basic syntax:

```cpp
try {
    // Code that may throw an exception
    // Example: if (some_condition) throw some_exception;
} catch (ExceptionType1 e1) {
    // Code to handle ExceptionType1
} catch (ExceptionType2 e2) {
    // Code to handle ExceptionType2
} catch (...) {
    // Code to handle any exception
}
```

### 2. **Throwing Exceptions**

To throw an exception, use the `throw` keyword followed by an exception object or value. This can be any type, but typically, exceptions are objects of a class derived from the `std::exception` class.

Example:

```cpp
void mightGoWrong() {
    bool errorOccurred = true;
    if (errorOccurred) {
        throw std::runtime_error("Something went wrong");
    }
}
```

### 3. **Catching Exceptions**

To catch exceptions, use the `catch` block. The parameter of the `catch` block specifies the type of exception it can handle.

Example:

```cpp
try {
    mightGoWrong();
} catch (const std::runtime_error& e) {
    std::cerr << "Runtime error: " << e.what() << std::endl;
} catch (const std::exception& e) {
    std::cerr << "Exception: " << e.what() << std::endl;
} catch (...) {
    std::cerr << "An unknown exception occurred" << std::endl;
}
```

### 4. **Standard Exception Classes**

The C++ Standard Library provides several standard exception classes, all of which are derived from `std::exception`. Some commonly used ones include:

- `std::runtime_error`
- `std::logic_error`
- `std::out_of_range`
- `std::invalid_argument`

Each of these classes provides a `what()` method that returns a descriptive error message.

### 5. **Creating Custom Exceptions**

You can create your own exception classes by inheriting from `std::exception` or any of its derived classes.

Example:

```cpp
class MyException : public std::exception {
public:
    const char* what() const noexcept override {
        return "My custom exception occurred";
    }
};
```

### 6. **Best Practices**

- **Throw by Value, Catch by Reference**: Throw exception objects by value and catch them by reference to avoid slicing and ensure polymorphic behavior.
- **Use Specific Exceptions**: Catch specific exceptions before catching general exceptions to handle different error conditions appropriately.
- **Exception Safety**: Ensure that your code remains in a valid state even if an exception occurs. This often involves using RAII (Resource Acquisition Is Initialization) to manage resources.

#### Example 

```cpp
#include <iostream>
#include <stdexcept>

void mightGoWrong() {
    bool errorOccurred = true;
    if (errorOccurred) {
        throw std::runtime_error("Something went wrong");
    }
}

int main() {
    try {
        mightGoWrong();
    } catch (const std::runtime_error& e) {
        std::cerr << "Runtime error: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Exception: " << e.what() << std::endl;
    } catch (...) {
        std::cerr << "An unknown exception occurred" << std::endl;
    }
    return 0;
}
```

### Key Points 

1. **Exception Handling Keywords**:
   - **`try`**: Wraps code that might throw an exception.
   - **`catch`**: Handles exceptions thrown within the corresponding `try` block.
   - **`throw`**: Throws an exception, which is then caught by a `catch` block.

2. **Throwing Exceptions**:
   - Use `throw` to signal an error or exceptional condition.
   - Exceptions can be any type, but using classes derived from `std::exception` is common.

3. **Catching Exceptions**:
   - Use `catch` blocks to handle specific types of exceptions.
   - General catch block `catch (...)` handles all types of exceptions.

4. **Standard Exception Classes**:
   - Derived from `std::exception` and include `std::runtime_error`, `std::logic_error`, `std::out_of_range`, and `std::invalid_argument`.
   - Provide a `what()` method to return a descriptive error message.

5. **Custom Exceptions**:
   - Create by inheriting from `std::exception` or its derived classes.
   - Override the `what()` method to provide a custom error message.

6. **Best Practices**:
   - **Throw by Value, Catch by Reference**: Prevents object slicing and retains polymorphic behavior.
   - **Use Specific Exceptions**: Handle different error conditions appropriately.
   - **Exception Safety**: Ensure code remains in a valid state even if an exception occurs. Use RAII to manage resources safely.

7. **Example Structure**:
   ```cpp
   try {
       // Code that might throw an exception
   } catch (const SpecificExceptionType& e) {
       // Handle specific exception
   } catch (const std::exception& e) {
       // Handle other standard exceptions
   } catch (...) {
       // Handle all other exceptions
   }
   ```

Understanding and implementing these key points will help you write more robust and error-resistant C++ programs.

### Conclusion
Understanding and effectively using exceptions in C++ is essential for developing robust and resilient programs. By leveraging the `try`, `catch`, and `throw` constructs, you can handle errors and unexpected situations gracefully, ensuring that your code remains maintainable and reliable. Proper exception handling not only separates error-handling logic from regular code but also enhances the overall quality and stability of your applications, making it a critical skill for any C++ programmer.
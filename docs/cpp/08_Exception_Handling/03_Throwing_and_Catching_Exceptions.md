---
id: cpp-throwing-and-catching-exceptions
title: Throwing and Catching Exceptions in C++
sidebar_label: Throwing and Catching Exceptions in C++
sidebar_position: 3
tags:
  [
    c++,
    programming,
    c++ exceptions,
    exception handling,
    throwing exceptions,
    catching exceptions
  ]
description: In this tutorial, we'll explore throwing and catching exceptions in C++. We'll delve into how to use the throw keyword to generate exceptions and the catch block to handle them gracefully. You'll learn about different types of exceptions, how to create custom exception classes, and best practices for exception handling. Understanding throwing and catching exceptions is crucial for robust error management in C++ programs, ensuring reliability and resilience in the face of unexpected situations.
---

Exception handling provides a powerful mechanism to manage errors and unexpected situations within your programs. By throwing exceptions using the throw keyword and catching them with catch blocks, you can effectively handle and recover from exceptional conditions, ensuring robustness and reliability in your code.

#### Throwing Exceptions

Exceptions are thrown using the `throw` keyword followed by an exception object. The object can be of any type, but it's common to use standard exception classes or custom exception classes.

```cpp
#include <iostream>
#include <stdexcept>

void mightGoWrong() {
    bool error = true;
    if (error) {
        throw std::runtime_error("Something went wrong!");
    }
}

int main() {
    try {
        mightGoWrong();
    } catch (const std::exception& e) {
        std::cout << "Caught exception: " << e.what() << std::endl;
    }

    return 0;
}
```

In the above example, `mightGoWrong` function throws a `std::runtime_error` exception when an error condition is met. The `main` function catches this exception using a `catch` block.

#### Catching Exceptions

Exceptions are caught using `catch` blocks. Each `catch` block can handle a different type of exception. The `catch` block that matches the type of the thrown exception is executed.

```cpp
#include <iostream>
#include <stdexcept>

void mightGoWrong() {
    bool error1 = true;
    bool error2 = false;
    if (error1) {
        throw std::runtime_error("Runtime error occurred");
    }
    if (error2) {
        throw std::out_of_range("Out of range error occurred");
    }
}

int main() {
    try {
        mightGoWrong();
    } catch (const std::out_of_range& e) {
        std::cout << "Caught an out_of_range exception: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cout << "Caught a generic exception: " << e.what() << std::endl;
    }

    return 0;
}
```

In this example, the `mightGoWrong` function can throw either a `std::runtime_error` or a `std::out_of_range` exception. The `main` function has `catch` blocks for both types of exceptions.

### Custom Exception Classes

You can create custom exception classes by inheriting from the `std::exception` class. This allows you to define your own exception types with specific messages or data.

```cpp
#include <iostream>
#include <exception>

class MyException : public std::exception {
public:
    const char* what() const noexcept override {
        return "My custom exception occurred";
    }
};

void mightGoWrong() {
    throw MyException();
}

int main() {
    try {
        mightGoWrong();
    } catch (const MyException& e) {
        std::cout << "Caught custom exception: " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cout << "Caught generic exception: " << e.what() << std::endl;
    }

    return 0;
}
```

 `MyException` is a custom exception class that overrides the `what` method to provide a custom error message. The `main` function catches and handles this custom exception.

### Best Practices for Exception Handling

1. **Use Standard Exceptions**: Whenever possible, use the standard exception classes provided by the C++ Standard Library.
2. **Catch by Reference**: Always catch exceptions by reference to avoid slicing and unnecessary copying.
3. **Specific Catch Blocks First**: Place more specific `catch` blocks before more general ones to ensure the correct exception is caught.
4. **Minimal Exception Handling**: Only use exceptions for truly exceptional conditions and not for regular control flow.
5. **Clean Up Resources**: Ensure that resources are properly cleaned up in the event of an exception, using RAII (Resource Acquisition Is Initialization) and smart pointers.

### Conclusion

Throwing and catching exceptions in C++ is a powerful mechanism for handling errors and unexpected situations in your programs. By understanding how to use the `throw` keyword, `catch` blocks, and creating custom exception classes, you can build more robust and resilient applications. Remember to follow best practices to ensure your exception handling is efficient and effective.
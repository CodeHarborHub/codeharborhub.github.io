---
id: lesson-2
title: "Creating Custom Exceptions"
sidebar_label: Creating Custom Exceptions
sidebar_position: 2
description: "Learn Creating Custom Exceptions"
tags: [courses,intermediate-level,React Native,Introduction]
---  

Custom exceptions can be created by inheriting from the `std::exception` class.

##### Example: Custom Exception

```cpp
#include <iostream>
#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const throw() {
        return "Custom Exception Occurred";
    }
};

int main() {
    try {
        throw MyException();
    } catch (MyException& e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

**Output:**
```
Custom Exception Occurred
```

:::important
1. **Use Exceptions for Exceptional Conditions**: Only use exceptions for conditions that are truly exceptional and not for regular control flow.
2. **Catch by Reference**: Catch exceptions by reference to avoid slicing and unnecessary copying.
3. **Be Specific**: Catch specific exceptions before catching more general exceptions.
4. **Cleanup Resources**: Ensure that all resources are properly cleaned up in case of an exception. This can be achieved using RAII (Resource Acquisition Is Initialization) principles.
5. **Avoid Overuse**: Do not overuse exceptions; use them judiciously.
:::


##### Example

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    try {
        int a = 10;
        int b = 0;
        if (b == 0) {
            throw runtime_error("Runtime Error: Division by zero!");
        }
        cout << a / b << endl;
    } catch (const runtime_error& e) {
        cerr << "Caught a runtime_error: " << e.what() << endl;
    } catch (const exception& e) {
        cerr << "Caught an exception: " << e.what() << endl;
    } catch (...) {
        cerr << "Caught an unknown exception" << endl;
    }
    return 0;
}
```

**Output:**
```
Caught a runtime_error: Runtime Error: Division by zero!
```

:::tip
- **Handle Exceptions at Appropriate Levels**: Exceptions should be handled at levels where recovery is possible.
- **Use Standard Exceptions**: Leverage standard exceptions provided by the C++ library to avoid redundancy.
- **Provide Useful Error Messages**: Ensure that exceptions provide meaningful messages to help diagnose the problem.
- **Test Exception Handling Paths**: Regularly test your exception handling code to ensure it works as expected.
:::
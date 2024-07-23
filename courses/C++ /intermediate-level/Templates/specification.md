---
id: lesson-2
title: "Template Specialization"
sidebar_label: Template Specialization
sidebar_position: 2
description: "Learn Template Specialization in C++"
tags: [courses,intermediate-level,React Native,Introduction]
--- 
    

Template specialization allows customizing the behavior of a template for a specific data type.

##### Example: Template Specialization
```cpp
#include <iostream>
using namespace std;

template <typename T>
class Box {
private:
    T value;
public:
    Box(T v) : value(v) {}
    T getValue() {
        return value;
    }
};

// Specialization for string type
template <>
class Box<string> {
private:
    string value;
public:
    Box(string v) : value(v) {}
    string getValue() {
        return "String value: " + value;
    }
};

int main() {
    Box<int> intBox(123);
    Box<string> strBox("Hello");

    cout << "Integer value: " << intBox.getValue() << endl;
    cout << strBox.getValue() << endl;
    return 0;
}
```

**Output:**
```
Integer value: 123
String value: Hello
```

:::tip
- **Use Templates for Reusability**: Templates are ideal for creating functions and classes that can work with any data type.
- **Template Specialization**: Use template specialization to handle specific data types differently if needed.
- **Type Safety**: Templates provide type safety, ensuring that the operations performed are valid for the data type.
- **Compile-Time Errors**: Many template-related errors are caught at compile time, reducing runtime errors.
:::
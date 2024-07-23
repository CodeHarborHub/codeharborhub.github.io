---
id: lesson-2
title: "RTTI (Run-Time Type Information)"
sidebar_label: RTTI
sidebar_position: 2
description: "Learn RTTI (Run-Time Type Information)"
tags: [courses,Advance-level,Introduction]
---   

 

**RTTI**: Run-Time Type Information allows the type of an object to be determined during program execution. It provides mechanisms for safe downcasting and type checking.

##### Example: RTTI

```cpp
#include <iostream>
#include <typeinfo>
using namespace std;

class Base {
public:
    virtual ~Base() {}
};

class Derived : public Base {};

int main() {
    Base* b = new Derived();

    if (typeid(*b) == typeid(Derived)) {
        cout << "b is of type Derived" << endl;
    } else {
        cout << "b is not of type Derived" << endl;
    }

    delete b;
    return 0;
}
```

**Output:**
```
b is of type Derived
```

:::tip
- **Abstract Classes**: Use abstract classes to define a common interface and enforce implementation in derived classes.
- **Multiple Inheritance**: While useful, be cautious of the complexities and ambiguities it may introduce.
- **Virtual Inheritance**: Utilize virtual inheritance to prevent multiple instances of a base class in complex inheritance hierarchies.
- **RTTI**: Use RTTI for safe type identification and downcasting, but avoid overusing it as it can impact performance.
:::
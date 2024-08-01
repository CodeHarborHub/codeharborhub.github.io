---
id: cpp-inheritance
title: Inheritance in C++
sidebar_label: Inheritance in C++
sidebar_position: 2
tags:
  [
    c++,
    programming,
    object oriented programming,
    c++ OOP,
    inheritance,
    c++ inheritance
  ]
description: In this tutorial, we'll dive into inheritance in C++. We'll explore how to create derived classes that inherit properties and behaviors from base classes. You'll learn about different types of inheritance, such as single, multiple, and hierarchical inheritance, along with the use of access specifiers like public, protected, and private. Understanding inheritance is key to building flexible and scalable C++ programs, allowing you to reuse code and create complex class hierarchies with ease.
---

 Inheritance is a fundamental concept in object-oriented programming that allows a class (derived class) to inherit properties and behaviors from another class (base class). This promotes code reuse and helps create a hierarchical class structure.

- **Base Class (Parent Class)**: The class whose properties and methods are inherited.
- **Derived Class (Child Class)**: The class that inherits properties and methods from the base class.
- **Access Specifiers**: Keywords that define the accessibility of the members of a class (`public`, `protected`, `private`).

## Types of Inheritance

1. **Single Inheritance**: A derived class inherits from only one base class.
2. **Multiple Inheritance**: A derived class inherits from more than one base class.
3. **Hierarchical Inheritance**: Multiple derived classes inherit from a single base class.
4. **Multilevel Inheritance**: A derived class inherits from another derived class.
5. **Hybrid Inheritance**: A combination of two or more types of inheritance.

### Single Inheritance

In single inheritance, a derived class inherits from a single base class.

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    void displayBase() {
        cout << "Base class display function" << endl;
    }
};

class Derived : public Base {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
    }
};

int main() {
    Derived obj;
    obj.displayBase();      // Calling base class function
    obj.displayDerived();   // Calling derived class function

    return 0;
}
```

### Multiple Inheritance

In multiple inheritance, a derived class inherits from more than one base class.

```cpp
#include <iostream>
using namespace std;

class Base1 {
public:
    void displayBase1() {
        cout << "Base1 class display function" << endl;
    }
};

class Base2 {
public:
    void displayBase2() {
        cout << "Base2 class display function" << endl;
    }
};

class Derived : public Base1, public Base2 {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
    }
};

int main() {
    Derived obj;
    obj.displayBase1();     // Calling Base1 class function
    obj.displayBase2();     // Calling Base2 class function
    obj.displayDerived();   // Calling derived class function

    return 0;
}
```

### Hierarchical Inheritance

In hierarchical inheritance, multiple derived classes inherit from a single base class.

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    void displayBase() {
        cout << "Base class display function" << endl;
    }
};

class Derived1 : public Base {
public:
    void displayDerived1() {
        cout << "Derived1 class display function" << endl;
    }
};

class Derived2 : public Base {
public:
    void displayDerived2() {
        cout << "Derived2 class display function" << endl;
    }
};

int main() {
    Derived1 obj1;
    Derived2 obj2;
    
    obj1.displayBase();     // Calling base class function
    obj1.displayDerived1(); // Calling Derived1 class function

    obj2.displayBase();     // Calling base class function
    obj2.displayDerived2(); // Calling Derived2 class function

    return 0;
}
```

### Multilevel Inheritance

In multilevel inheritance, a derived class inherits from another derived class.

```cpp
#include <iostream>
using namespace std;

class Base {
public:
    void displayBase() {
        cout << "Base class display function" << endl;
    }
};

class Intermediate : public Base {
public:
    void displayIntermediate() {
        cout << "Intermediate class display function" << endl;
    }
};

class Derived : public Intermediate {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
    }
};

int main() {
    Derived obj;
    obj.displayBase();          // Calling base class function
    obj.displayIntermediate();  // Calling intermediate class function
    obj.displayDerived();       // Calling derived class function

    return 0;
}
```

## Access Specifiers in Inheritance
Access specifiers play a crucial role in determining how the members of a base class are inherited and accessed in a derived class in C++. They define the visibility and accessibility of inherited members from the base class within the derived class.

There are three main access specifiers in C++ inheritance

### 1. Public Inheritance
 When a derived class inherits publicly from a base class:
   - Public members of the base class become public members of the derived class.
   - Protected members of the base class become protected members of the derived class.
   - Private members of the base class are not accessible directly in the derived class.

#### Example: Public Inheritance

```cpp
#include <iostream>
using namespace std;

// Base class
class Base {
public:
    int publicVar;      // Public member
protected:
    int protectedVar;   // Protected member
private:
    int privateVar;     // Private member

public:
    Base() : publicVar(1), protectedVar(2), privateVar(3) {}

    void display() {
        cout << "Base class display function" << endl;
        cout << "Public Var: " << publicVar << endl;
        cout << "Protected Var: " << protectedVar << endl;
        cout << "Private Var: " << privateVar << endl;
    }
};

// Derived class publicly inheriting from Base
class Derived : public Base {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
        cout << "Public Var: " << publicVar << endl;         // Accessible
        cout << "Protected Var: " << protectedVar << endl;   // Accessible
        // cout << "Private Var: " << privateVar << endl;   // Not accessible
    }
};

int main() {
    Derived obj;
    obj.displayDerived();   // Accesses public and protected members of Base
    obj.display();          // Accesses public, protected, and private members of Base via Derived

    return 0;
}
```

### 2. Protected Inheritance
When a derived class inherits protectedly from a base class:
   - Public and protected members of the base class become protected members of the derived class.
   - Private members of the base class are not accessible directly in the derived class.


#### Example: Protected Inheritance

```cpp
#include <iostream>
using namespace std;

// Base class
class Base {
public:
    int publicVar;      // Public member
protected:
    int protectedVar;   // Protected member
private:
    int privateVar;     // Private member

public:
    Base() : publicVar(1), protectedVar(2), privateVar(3) {}

    void display() {
        cout << "Base class display function" << endl;
        cout << "Public Var: " << publicVar << endl;
        cout << "Protected Var: " << protectedVar << endl;
        cout << "Private Var: " << privateVar << endl;
    }
};

// Derived class protectedly inheriting from Base
class Derived : protected Base {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
        cout << "Public Var: " << publicVar << endl;         // Accessible
        cout << "Protected Var: " << protectedVar << endl;   // Accessible
        // cout << "Private Var: " << privateVar << endl;   // Not accessible
    }
};

int main() {
    Derived obj;
    obj.displayDerived();   // Accesses public and protected members of Base via Derived
    // obj.display();       // Error: display is inaccessible due to protected inheritance

    return 0;
}
```
### 3. Private Inheritance
 When a derived class inherits privately from a base class:
   - All members of the base class become private members of the derived class.
   - This means both public and protected members of the base class become private members of the derived class.
   - Private members of the base class are not accessible directly in the derived class.


#### Example: Private Inheritance

```cpp
#include <iostream>
using namespace std;

// Base class
class Base {
public:
    int publicVar;      // Public member
protected:
    int protectedVar;   // Protected member
private:
    int privateVar;     // Private member

public:
    Base() : publicVar(1), protectedVar(2), privateVar(3) {}

    void display() {
        cout << "Base class display function" << endl;
        cout << "Public Var: " << publicVar << endl;
        cout << "Protected Var: " << protectedVar << endl;
        cout << "Private Var: " << privateVar << endl;
    }
};

// Derived class privately inheriting from Base
class Derived : private Base {
public:
    void displayDerived() {
        cout << "Derived class display function" << endl;
        cout << "Public Var: " << publicVar << endl;         // Accessible
        cout << "Protected Var: " << protectedVar << endl;   // Accessible
        // cout << "Private Var: " << privateVar << endl;   // Not accessible
    }
};

int main() {
    Derived obj;
    obj.displayDerived();   // Accesses public and protected members of Base via Derived
    // obj.display();       // Error: display is inaccessible due to private inheritance

    return 0;
}
```


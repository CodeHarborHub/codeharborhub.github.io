---
id: cpp-polymorphism
title: Polymorphism in C++
sidebar_label: Polymorphism in C++
sidebar_position: 3
tags:
  [
    c++,
    programming,
    object oriented programming,
    c++ OOP,
    polymorphism,
    c++ polymorphism
  ]
description: In this tutorial, we'll explore polymorphism in C++. We'll delve into how polymorphism allows objects of different derived classes to be treated as objects of a common base class, enabling dynamic method binding and runtime polymorphic behavior. You'll learn about virtual functions, abstract classes, and the use of pointers and references to achieve polymorphic behavior. Understanding polymorphism is crucial for building flexible and extensible C++ programs, facilitating code reuse and enhancing code maintainability and readability.
---

 Polymorphism is a key concept in object-oriented programming that allows objects of different classes in a hierarchy to be treated as objects of a common base class. This enables flexibility and extensibility in code, promoting code reuse and enhancing maintainability.


**Polymorphism**: Means "many forms." In C++, polymorphism is achieved through virtual functions and is of two types:
  - **Compile-time (Static) Polymorphism**: Achieved using function overloading and operator overloading.
  - **Run-time (Dynamic) Polymorphism**: Achieved using virtual functions.

## Virtual Functions

- **Virtual Function**: A member function in a base class that you expect to be overridden in derived classes. It enables the dynamic (run-time) binding of the function call to the derived class object.
- **Virtual Function Syntax**: Declare a function as virtual in the base class and optionally override it in the derived class using the `override` keyword.

### Example

```cpp
#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    // Virtual function
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

// Derived class Dog
class Dog : public Animal {
public:
    // Override the virtual function
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

// Derived class Cat
class Cat : public Animal {
public:
    // Override the virtual function
    void sound() override {
        cout << "Cat meows" << endl;
    }
};

int main() {
    Animal* ptr;  // Base class pointer

    Dog dog;
    Cat cat;

    // Pointer to Dog object
    ptr = &dog;
    ptr->sound();  // Calls Dog's sound function dynamically

    // Pointer to Cat object
    ptr = &cat;
    ptr->sound();  // Calls Cat's sound function dynamically

    return 0;
}
```

### Key Points 

- **Dynamic Binding**: Virtual functions enable dynamic method binding, where the function call is resolved at runtime based on the object's actual type rather than the pointer or reference type.

- **Late Binding**: The decision of which function to call is deferred until runtime, allowing for flexibility in handling objects of different derived classes through a common interface.

- **Pure Virtual Functions**: When a virtual function is declared as `virtual` and set to `= 0` in the base class (pure virtual function), it turns the class into an abstract base class, requiring derived classes to override this function to be instantiated.

- **Virtual Destructor**: Base classes with virtual functions often need virtual destructors to ensure that the correct destructor is called for derived class objects when they are destroyed.

### Benefits 

- **Polymorphism**: Enables polymorphic behavior, allowing for code reuse and flexible object-oriented design.
  
- **Interface Design**: Defines interfaces in base classes that derived classes implement, ensuring consistent behavior across different types of objects.

- **Runtime Flexibility**: Facilitates runtime decisions on method calls, crucial for scenarios where the exact type of object may vary during program execution.


## Abstract Classes and Pure Virtual Functions

- **Abstract Class**: A class that contains at least one pure virtual function.
- **Pure Virtual Function**: A virtual function declared in a base class that has no implementation and is meant to be overridden by derived classes.
- **Syntax**: Define a pure virtual function by appending `= 0` to its declaration in the base class.

### Example

```cpp
#include <iostream>
using namespace std;

// Abstract base class
class Shape {
public:
    // Pure virtual function
    virtual void displayArea() const = 0;
};

// Derived class Rectangle
class Rectangle : public Shape {
private:
    int length;
    int width;

public:
    Rectangle(int l, int w) : length(l), width(w) {}

    // Override pure virtual function
    void displayArea() const override {
        cout << "Area of Rectangle: " << length * width << endl;
    }
};

// Derived class Circle
class Circle : public Shape {
private:
    int radius;

public:
    Circle(int r) : radius(r) {}

    // Override pure virtual function
    void displayArea() const override {
        cout << "Area of Circle: " << 3.14 * radius * radius << endl;
    }
};

int main() {
    // Shape* ptr = new Shape(); // Error: Cannot instantiate an abstract class
    Shape* ptr;

    Rectangle rect(5, 10);
    Circle circle(5);

    // Pointer to Rectangle object
    ptr = &rect;
    ptr->displayArea();  // Calls Rectangle's displayArea dynamically

    // Pointer to Circle object
    ptr = &circle;
    ptr->displayArea();  // Calls Circle's displayArea dynamically

    return 0;
}
```
Abstract classes and pure virtual functions are fundamental concepts in C++ that facilitate polymorphic behavior and enforce a consistent interface across derived classes. 

### Key Points

1. **Abstract Classes**:
   - An abstract class is a class that cannot be instantiated on its own because it contains at least one pure virtual function.
   - Abstract classes are designed to serve as base classes from which other classes can be derived.
   - They define a common interface that derived classes must implement.

2. **Pure Virtual Functions**:
   - A pure virtual function is a virtual function declared in a base class with `= 0` at the end of its declaration.
   - Pure virtual functions have no implementation in the base class and must be overridden in derived classes.
   - Classes containing pure virtual functions cannot be instantiated unless all pure virtual functions are overridden in derived classes.

### Benefits

1. **Polymorphism**:
   - Abstract classes and pure virtual functions enable polymorphic behavior, allowing objects of different derived classes to be treated through a common base class interface.
   - This promotes code reuse and flexibility by providing a standardized way to interact with objects of related types.

2. **Enforcement of Interface**:
   - Abstract classes define a blueprint or contract for derived classes, ensuring that all derived classes provide specific functionality.
   - This helps in enforcing a consistent interface across a hierarchy of classes, making the design more robust and maintainable.

3. **Modularity and Extensibility**:
   - By defining abstract classes with pure virtual functions, you create modular components that can be easily extended through inheritance.
   - New derived classes can be added to the hierarchy without modifying existing code, enhancing the scalability and extensibility of the software.

4. **Design Patterns**:
   - Abstract classes and pure virtual functions are foundational to several design patterns, such as the Factory Method pattern and Template Method pattern.
   - They enable the implementation of these patterns by providing the necessary structure and flexibility required for dynamic behavior and object creation.


## Polymorphism with Pointers and References

- Polymorphism is often achieved using pointers or references to base class objects.
- Using pointers or references, you can store addresses of derived class objects and call their overridden functions dynamically.

### Example

```cpp
#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    // Virtual function
    virtual void sound() {
        cout << "Animal makes a sound" << endl;
    }
};

// Derived class Dog
class Dog : public Animal {
public:
    // Override the virtual function
    void sound() override {
        cout << "Dog barks" << endl;
    }
};

// Derived class Cat
class Cat : public Animal {
public:
    // Override the virtual function
    void sound() override {
        cout << "Cat meows" << endl;
    }
};

int main() {
    Animal* ptr;  // Base class pointer

    Dog dog;
    Cat cat;

    // Pointer to Dog object
    ptr = &dog;
    ptr->sound();  // Calls Dog's sound function dynamically

    // Pointer to Cat object
    ptr = &cat;
    ptr->sound();  // Calls Cat's sound function dynamically

    return 0;
}
```

### Key Points

1. **Base Class Pointers and References**: 
   - Pointers and references of a base class type can refer to objects of derived classes.
   - This allows treating objects of derived classes uniformly through a common base class interface.

2. **Virtual Functions**: 
   - Virtual functions enable polymorphic behavior by allowing derived classes to override base class methods.
   - The actual function called is determined at runtime based on the object pointed to or referenced, rather than the type of pointer or reference.

3. **Dynamic Binding**: 
   - Polymorphism with pointers and references uses dynamic binding, where the correct function implementation is selected based on the actual type of the object during runtime.
   - This flexibility allows the same interface (base class methods) to exhibit different behaviors depending on the derived class implementation.

### Benefits

1. **Code Flexibility and Reusability**:
   - Polymorphism with pointers and references promotes code reuse by enabling the use of a single base class interface to manipulate objects of different derived classes.
   - This reduces code duplication and promotes modular design, making the codebase more maintainable and extensible.

2. **Enhanced Modularity**:
   - By using base class pointers or references, you can design systems where new derived classes can be added without modifying existing code that interacts with them.
   - This modular approach simplifies code maintenance and reduces the risk of introducing errors when extending the system.

3. **Run-time Flexibility**:
   - The ability to determine the function to call at runtime based on the actual object type provides runtime flexibility.
   - This is particularly useful in scenarios where the exact type of objects may vary dynamically during program execution, such as in polymorphic collections or in handling user interactions.

4. **Polymorphic Behavior**:
   - Polymorphism with pointers and references supports polymorphic behavior, where a base class pointer or reference can be used to access specific behaviors defined in derived classes.
   - This supports the principle of substitutability, where objects of derived classes can be used interchangeably wherever the base class is expected.

.
## Conclusion
 polymorphism in C++ empowers developers with the ability to create flexible and extensible code through the use of inheritance and virtual functions. By allowing objects of derived classes to be treated as objects of a common base class, polymorphism enables dynamic method binding and runtime polymorphic behavior. This not only enhances code reusability but also improves code maintainability and readability by promoting a modular and hierarchical class structure. Understanding and effectively utilizing polymorphism is essential for building scalable and efficient C++ programs, enabling developers to craft robust software solutions that can evolve and adapt to changing requirements with ease.
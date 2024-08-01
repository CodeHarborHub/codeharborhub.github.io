---
id: cpp-classes-and-objects
title: Class and Objects in C++
sidebar_label: Class and Objects in C++
sidebar_position: 1
tags:
  [
    c++,
    programming,
    c++ classes,
    c++ objects,
    object oriented programming,
    c++ OOP,
    classes and objects
  ]
description: In this tutorial, we'll explore classes and objects in C++. We'll cover how to define classes, create objects, and access their members. Additionally, we'll delve into constructors, destructors, and member functions, essential components for building robust and reusable code. Understanding classes and objects is fundamental to object-oriented programming in C++, enabling you to organize and encapsulate data and functionality effectively.
---


## 1. Defining Classes
A class in C++ is a user-defined data type that encapsulates data and functions that operate on that data. The primary components of a class are its data members (attributes) and member functions (methods).

### Syntax:
```cpp
class ClassName {
public:
    // Data members
    int attribute1;
    float attribute2;

    // Member functions
    void function1() {
        // Function body
    }

    int function2(int param) {
        // Function body
        return param;
    }
};
```

## 2. Creating Objects
Objects are instances of a class. They are created using the class name.

### Syntax
```cpp
ClassName objectName;
```

#### Example
```cpp
class Car {
public:
    // Data members
    string brand;
    string model;
    int year;

    // Member function
    void displayInfo() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    // Creating an object
    Car car1;
    
    // Accessing data members
    car1.brand = "Toyota";
    car1.model = "Corolla";
    car1.year = 2020;

    // Calling member function
    car1.displayInfo();

    return 0;
}
```

## 3. Constructors
Constructors are special member functions that initialize objects. They have the same name as the class and no return type.

#### Example
```cpp
class Car {
public:
    string brand;
    string model;
    int year;

    // Constructor
    Car(string b, string m, int y) {
        brand = b;
        model = m;
        year = y;
    }

    void displayInfo() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    // Creating an object with the constructor
    Car car1("Toyota", "Corolla", 2020);
    
    car1.displayInfo();

    return 0;
}
```

### Types of Constructors

1. **Default Constructor**: A constructor that takes no arguments.
2. **Parameterized Constructor**: A constructor that takes one or more arguments.
3. **Copy Constructor**: A constructor that initializes an object using another object of the same class.

### Default Constructor

A default constructor does not take any arguments. If no constructor is defined, C++ provides a default constructor.

```cpp
class Example {
public:
    int value;

    // Default constructor
    Example() {
        value = 0;
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Example obj;  // Calls the default constructor
    obj.display();

    return 0;
}
```

### Parameterized Constructor

A parameterized constructor takes arguments to initialize an object with specific values.

```cpp
class Example {
public:
    int value;

    // Parameterized constructor
    Example(int val) {
        value = val;
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Example obj(42);  // Calls the parameterized constructor
    obj.display();

    return 0;
}
```

### Copy Constructor

A copy constructor initializes an object using another object of the same class. It is used for creating a new object as a copy of an existing object.

```cpp
class Example {
public:
    int value;

    // Parameterized constructor
    Example(int val) {
        value = val;
    }

    // Copy constructor
    Example(const Example &obj) {
        value = obj.value;
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Example obj1(42);   // Calls the parameterized constructor
    Example obj2 = obj1;  // Calls the copy constructor

    obj1.display();
    obj2.display();

    return 0;
}
```

### Initialization List

Constructors can also use an initialization list to initialize data members. This approach is more efficient, especially for initializing constant or reference data members.

```cpp
class Example {
public:
    int value;

    // Parameterized constructor using initialization list
    Example(int val) : value(val) {
    }

    void display() {
        cout << "Value: " << value << endl;
    }
};

int main() {
    Example obj(42);  // Calls the parameterized constructor with initialization list
    obj.display();

    return 0;
}
```

### Constructor Overloading

Constructors can be overloaded, meaning a class can have multiple constructors with different parameter lists.

```cpp
class Example {
public:
    int value1;
    int value2;

    // Default constructor
    Example() {
        value1 = 0;
        value2 = 0;
    }

    // Parameterized constructor
    Example(int val1, int val2) {
        value1 = val1;
        value2 = val2;
    }

    void display() {
        cout << "Value1: " << value1 << ", Value2: " << value2 << endl;
    }
};

int main() {
    Example obj1;  // Calls the default constructor
    Example obj2(42, 84);  // Calls the parameterized constructor

    obj1.display();
    obj2.display();

    return 0;
}
```

## 4. Destructors
Destructors are special member functions that are invoked when an object is destroyed. They have the same name as the class but are preceded by a tilde `~`.

### Basic Structure of a Destructor

- A destructor has the same name as the class but is preceded by a tilde `~`.
- A destructor does not take any arguments and does not return any values.

### Syntax:

```cpp
class ClassName {
public:
    // Constructor
    ClassName() {
        // Initialization code
    }

    // Destructor
    ~ClassName() {
        // Cleanup code
    }
};
```

#### Example
```cpp
class Car {
public:
    string brand;
    string model;
    int year;

    // Constructor
    Car(string b, string m, int y) {
        brand = b;
        model = m;
        year = y;
    }

    // Destructor
    ~Car() {
        cout << "Destructor called for " << brand << endl;
    }

    void displayInfo() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    Car car1("Toyota", "Corolla", 2020);
    
    car1.displayInfo();

    return 0;
}
```

### Use Cases for Destructors

1. **Memory Management**:
   - If an object dynamically allocates memory, the destructor should release that memory to avoid memory leaks.

2. **File Handling**:
   - If an object opens a file, the destructor should close the file to ensure no data is lost.

3. **Network Connections**:
   - If an object opens a network connection, the destructor should close the connection to free up network resources.

#### Example
 Destructor for Memory Management

```cpp
#include <iostream>
using namespace std;

class Array {
private:
    int* arr;
    int size;

public:
    // Constructor
    Array(int s) {
        size = s;
        arr = new int[size];
        cout << "Array of size " << size << " created" << endl;
    }

    // Destructor
    ~Array() {
        delete[] arr;
        cout << "Array deleted" << endl;
    }

    void setValue(int index, int value) {
        if (index >= 0 && index < size) {
            arr[index] = value;
        }
    }

    void display() {
        for (int i = 0; i < size; ++i) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Array arr(5);  // Array of size 5 created
    arr.setValue(0, 10);
    arr.setValue(1, 20);
    arr.setValue(2, 30);
    arr.setValue(3, 40);
    arr.setValue(4, 50);

    arr.display(); // Displays: 10 20 30 40 50

    return 0; // Array deleted
}
```

1. **Constructor**:
    ```cpp
    Array(int s) {
        size = s;
        arr = new int[size];
        cout << "Array of size " << size << " created" << endl;
    }
    ```
   - The constructor allocates memory for an array of integers and prints a message.

2. **Destructor**:
    ```cpp
    ~Array() {
        delete[] arr;
        cout << "Array deleted" << endl;
    }
    ```
   - The destructor deallocates the memory and prints a message.

3. **Main Function**:
    ```cpp
    int main() {
        Array arr(5);
        arr.setValue(0, 10);
        arr.setValue(1, 20);
        arr.setValue(2, 30);
        arr.setValue(3, 40);
        arr.setValue(4, 50);

        arr.display();

        return 0;
    }
    ```
   - An `Array` object is created, values are set, and the array is displayed. When the program ends, the destructor is called, releasing the allocated memory.

### Rule of Three

In C++, if a class requires a user-defined destructor, it almost certainly needs a user-defined copy constructor and copy assignment operator as well. This is known as the Rule of Three.

#### Example

```cpp
#include <iostream>
using namespace std;

class Example {
private:
    int* data;

public:
    // Constructor
    Example(int value) {
        data = new int(value);
        cout << "Constructor: Allocating " << *data << endl;
    }

    // Copy Constructor
    Example(const Example& other) {
        data = new int(*other.data);
        cout << "Copy Constructor: Allocating " << *data << endl;
    }

    // Copy Assignment Operator
    Example& operator=(const Example& other) {
        if (this != &other) {
            delete data;
            data = new int(*other.data);
            cout << "Copy Assignment: Allocating " << *data << endl;
        }
        return *this;
    }

    // Destructor
    ~Example() {
        cout << "Destructor: Releasing " << *data << endl;
        delete data;
    }

    void display() {
        cout << "Value: " << *data << endl;
    }
};

int main() {
    Example obj1(42);  // Constructor is called
    Example obj2 = obj1;  // Copy constructor is called
    obj2 = obj1;  // Copy assignment operator is called

    obj1.display();
    obj2.display();

    return 0;  // Destructor is called for both obj1 and obj2
}
```

## 5. Member Functions
Member functions are functions defined inside a class. They operate on objects of the class.
### Basic Structure of Member Functions
Member functions can be defined inside the class definition or outside the class definition. When defined outside, the function declaration is made inside the class, and the definition is made outside using the scope resolution operator ::.

Let's dive into member functions in C++. Member functions are functions that are defined within a class and operate on objects of that class. They have access to the data members of the class and can be used to manipulate those data members.

## 5. Member Functions

### Basic Structure of Member Functions

Member functions can be defined inside the class definition or outside the class definition. When defined outside, the function declaration is made inside the class, and the definition is made outside using the scope resolution operator `::`.

#### Example
Defining Member Functions Inside the Class

```cpp
#include <iostream>
using namespace std;

class Rectangle {
public:
    int width;
    int height;

    // Member function defined inside the class
    int area() {
        return width * height;
    }
};

int main() {
    Rectangle rect;
    rect.width = 5;
    rect.height = 10;
    
    cout << "Area: " << rect.area() << endl;  // Calls the member function

    return 0;
}
```

#### Example
 Defining Member Functions Outside the Class

```cpp
#include <iostream>
using namespace std;

class Rectangle {
public:
    int width;
    int height;

    // Declaration of the member function
    int area();
};

// Definition of the member function outside the class
int Rectangle::area() {
    return width * height;
}

int main() {
    Rectangle rect;
    rect.width = 5;
    rect.height = 10;

    cout << "Area: " << rect.area() << endl;  // Calls the member function

    return 0;
}
```

### Types of Member Functions

1. **Simple Member Functions**: Basic functions that perform operations on data members.
2. **Const Member Functions**: Functions that do not modify the object.
3. **Static Member Functions**: Functions that can be called on the class itself, not on objects.
4. **Inline Member Functions**: Functions defined inside the class definition.

### Simple Member Functions

Simple member functions perform operations on the class's data members.

```cpp
class Rectangle {
public:
    int width;
    int height;

    void setDimensions(int w, int h) {
        width = w;
        height = h;
    }

    int area() {
        return width * height;
    }
};

int main() {
    Rectangle rect;
    rect.setDimensions(5, 10);
    
    cout << "Area: " << rect.area() << endl;

    return 0;
}
```

### Const Member Functions

Const member functions are functions that do not modify any data members of the class. They are declared with the `const` keyword.

```cpp
class Rectangle {
public:
    int width;
    int height;

    void setDimensions(int w, int h) {
        width = w;
        height = h;
    }

    int area() const {  // Const member function
        return width * height;
    }
};

int main() {
    Rectangle rect;
    rect.setDimensions(5, 10);
    
    cout << "Area: " << rect.area() << endl;

    return 0;
}
```

### Static Member Functions

Static member functions belong to the class rather than any object. They can be called without creating an object of the class.

```cpp
class Math {
public:
    static int add(int a, int b) {  // Static member function
        return a + b;
    }
};

int main() {
    cout << "Sum: " << Math::add(5, 3) << endl;  // Calling static member function

    return 0;
}
```

### Inline Member Functions

Inline member functions are defined inside the class definition and are automatically considered `inline` by the compiler. They are typically small functions.

```cpp
class Rectangle {
public:
    int width;
    int height;

    // Inline member function
    int area() {
        return width * height;
    }
};

int main() {
    Rectangle rect;
    rect.width = 5;
    rect.height = 10;
    
    cout << "Area: " << rect.area() << endl;

    return 0;
}
```

#### Example
 Combining Different Types of Member Functions

```cpp
#include <iostream>
using namespace std;

class Rectangle {
private:
    int width;
    int height;

public:
    // Constructor
    Rectangle(int w, int h) : width(w), height(h) {}

    // Const member function
    int area() const {
        return width * height;
    }

    // Static member function
    static int compareArea(const Rectangle& r1, const Rectangle& r2) {
        return r1.area() - r2.area();
    }

    // Inline member function
    int perimeter() {
        return 2 * (width + height);
    }
};

int main() {
    Rectangle rect1(5, 10);
    Rectangle rect2(3, 4);

    cout << "Area of rect1: " << rect1.area() << endl;
    cout << "Area of rect2: " << rect2.area() << endl;
    cout << "Perimeter of rect1: " << rect1.perimeter() << endl;

    int comparison = Rectangle::compareArea(rect1, rect2);
    if (comparison > 0) {
        cout << "rect1 has a larger area" << endl;
    } else if (comparison < 0) {
        cout << "rect2 has a larger area" << endl;
    } else {
        cout << "Both rectangles have the same area" << endl;
    }

    return 0;
}
```

## Conclusion
Understanding classes and objects is fundamental in C++ for object-oriented programming. They help in organizing code, encapsulating data, and defining behaviors effectively. Constructors and destructors manage object lifecycle, while member functions define the actions that objects can perform.


---
id: flutter-dart-introduction
title: Flutter - Introduction to Dart Programming
sidebar_label: Flutter - Introduction to Dart Programming
sidebar_position: 4
tags: [introduction, Flutter, App development]
description: Introduction to Dart Programming

---

Dart is an open-source general-purpose programming language developed by Google. It is an object-oriented language with C-style syntax. Dart supports programming concepts like interfaces and classes. However, unlike other programming languages, Dart doesn't support arrays. Instead, Dart collections can be used to replicate data structures such as arrays, generics, and optional typing.

Here is a simple Dart program:

```dart
void main() {
    print("Dart language is easy to learn");
}
```

## Variables and Data Types

In Dart, variables are named storage locations, and data types refer to the type and size of data associated with variables and functions.

Dart uses the `var` keyword to declare variables. For example:

```dart
var name = 'Dart';
```

The `final` and `const` keywords are used to declare constants. For example:

```dart
void main() {
    final a = 12;
    const pi = 3.14;
    print(a);
    print(pi);
}
```

Dart language supports the following data types:

- Numbers: Used to represent numeric literals, such as integers and doubles.
- Strings: Represents a sequence of characters. String values are specified in either single or double quotes.
- Booleans: Dart uses the `bool` keyword to represent Boolean values, `true` and `false`.
- Lists and Maps: Used to represent a collection of objects. For example:

```dart
void main() {
    var list = [1, 2, 3, 4, 5];
    print(list);
}
```

The above code produces the output: `[1, 2, 3, 4, 5]`.

Map can be defined as shown here:

```dart
void main() {
    var mapping = {'id': 1, 'name': 'Dart'};
    print(mapping);
}
```

The above code produces the output: `{'id': 1, 'name': 'Dart'}`.

Dynamic: If the variable type is not defined, then its default type is dynamic. For example:

```dart
void main() {
    dynamic name = "Dart";
    print(name);
}
```

## Decision Making and Loops

Dart supports decision-making statements like `if`, `if..else`, and `switch`. It also supports loops like `for`, `for..in`, `while`, and `do..while`. Here's an example:

```dart
void main() {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            print(i);
        }
    }
}
```

The above code prints the even numbers from 1 to 10.

## Functions

A function is a group of statements that together performs a specific task. Here's an example of a simple function in Dart:

```dart
void main() {
    add(3, 4);
}

void add(int a, int b) {
    int c;
    c = a + b;
    print(c);
}
```

The above function adds two values and produces the output: `7`.

## Object-Oriented Programming

Dart is an object-oriented language that supports features like classes and interfaces. A class is a blueprint for creating objects and includes fields, getters and setters, constructors, and functions. Here's an example:

```dart
class Employee {
    String name;
    
    // Getter method
    String get emp_name {
        return name;
    }
    
    // Setter method
    void set emp_name(String name) {
        this.name = name;
    }
    
    // Function definition
    void result() {
        print(name);
    }
}

void main() {
    // Object creation
    Employee emp = new Employee();
    emp.name = "employee1";
    emp.result(); // Function call
}
```

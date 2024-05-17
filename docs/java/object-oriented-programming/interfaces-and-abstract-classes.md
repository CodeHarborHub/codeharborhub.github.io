---
id: interfaces-and-abstract-classes
title: Interfaces and Abstract Classes in Java
sidebar_label: Interfaces and Abstract Classes
sidebar_position: 8
tags: [java, interfaces, abstract-classes, programming, java interfaces, java abstract classes]
description: In this tutorial, we will learn about interfaces and abstract classes in Java. We will learn about what interfaces and abstract classes are, how they are used, and the differences between them.
---

# Interfaces and Abstract Classes in Java

## Introduction

Interfaces and abstract classes are two fundamental concepts in Java that are used to achieve abstraction. Both are used to define abstract types that can be implemented or extended by concrete classes, but they serve different purposes and have different characteristics.

## Abstract Classes

### Definition

An abstract class in Java is a class that cannot be instantiated on its own and is meant to be subclassed. It can contain abstract methods (methods without a body) as well as concrete methods (methods with a body).

### Characteristics

- Can have abstract and non-abstract methods.
- Can have instance variables.
- Can have constructors.
- Can extend only one class.
- Can implement multiple interfaces.

### Example

```java
abstract class Animal {
    // Abstract method (does not have a body)
    public abstract void makeSound();

    // Concrete method
    public void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // Outputs: Woof
        dog.sleep();     // Outputs: Sleeping...
    }
}
```

### When to Use

Use an abstract class when you have a base class that should not be instantiated directly and you want to provide some common functionality to subclasses.

## Interfaces

### Definition

An interface in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields or constructors.

### Characteristics

- All methods in an interface are implicitly `public` and `abstract` (except default and static methods).
- Cannot have instance variables (only constants).
- Cannot have constructors.
- A class can implement multiple interfaces.
- Provides a way to achieve multiple inheritance.

### Example

```java
interface Animal {
    void makeSound();
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // Outputs: Woof
    }
}
```

### Default Methods

Interfaces can have default methods, which provide a default implementation.

#### Example

```java
interface Animal {
    void makeSound();

    default void sleep() {
        System.out.println("Sleeping...");
    }
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.makeSound(); // Outputs: Woof
        dog.sleep();     // Outputs: Sleeping...
    }
}
```

### When to Use

Use an interface when you want to define a contract that multiple classes can implement, regardless of where those classes are in the class hierarchy.

## Key Differences

- **Implementation**: Abstract classes can provide partial implementation, while interfaces cannot (except default methods).
- **Multiple Inheritance**: A class can implement multiple interfaces, but it can extend only one abstract class.
- **Fields**: Abstract classes can have instance fields, while interfaces cannot (only constants).
- **Constructors**: Abstract classes can have constructors, interfaces cannot.

## Conclusion

Both abstract classes and interfaces are powerful tools in Java for achieving abstraction. They allow you to define methods that must be implemented by derived classes or implementing classes. Choosing between them depends on the specific needs of your application, such as whether you need multiple inheritance or whether you want to provide common behavior in a base class.

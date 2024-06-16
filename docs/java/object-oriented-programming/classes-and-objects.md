---
id: classes-and-objects
title: Classes and Objects in Java
sidebar_label: Classes and Objects
sidebar_position: 1
tags: [java, classes, objects, programming, java classes, java objects]
description: In this tutorial, we will learn about classes and objects in Java. We will learn about what classes and objects are, how to define classes, how to create objects of a class, and how to access and use objects in Java.
---

# Classes and Objects in Java

## Introduction

Classes and objects are fundamental concepts in Java's object-oriented programming (OOP) paradigm. A class serves as a blueprint for creating objects, encapsulating data for the object, and methods to manipulate that data.

## Defining a Class

### Syntax

```java
class ClassName {
    // Fields (variables)
    dataType fieldName;
    
    // Constructor
    public ClassName(parameters) {
        // Initialization code
    }
    
    // Methods
    returnType methodName(parameters) {
        // Method code
    }
}
```

### Example

```java
public class Person {
    // Fields
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // Setter for name
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter for age
    public int getAge() {
        return age;
    }
    
    // Setter for age
    public void setAge(int age) {
        this.age = age;
    }
    
    // Method to display person details
    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}
```

## Creating Objects

### Syntax

```java
ClassName objectName = new ClassName(parameters);
```

### Example

```java
public class Main {
    public static void main(String[] args) {
        // Creating an object of the Person class
        Person person1 = new Person("Alice", 30);
        
        // Accessing object methods
        person1.display();
        
        // Modifying object properties
        person1.setName("Alice Smith");
        person1.setAge(31);
        
        // Displaying modified details
        person1.display();
    }
}
```

## Constructors

A constructor is a special method that is called when an object is instantiated. It is used to initialize the object.

### Example

```java
public class Person {
    private String name;
    private int age;
    
    // No-argument constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }
    
    // Parameterized constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Other methods...
}
```

## Methods

Methods define the behavior of objects created from a class. They can be used to perform operations on the object's data.

### Example

```java
public class Calculator {
    // Method to add two numbers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method to subtract two numbers
    public int subtract(int a, int b) {
        return a - b;
    }
    
    // Method to multiply two numbers
    public int multiply(int a, int b) {
        return a * b;
    }
    
    // Method to divide two numbers
    public double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return (double) a / b;
    }
}
```

## Access Modifiers

Access modifiers define the visibility of classes, methods, and variables. The most common access modifiers are:

- `public`: The member is accessible from any other class.
- `private`: The member is accessible only within its own class.
- `protected`: The member is accessible within its own package and by subclasses.
- `default` (no modifier): The member is accessible only within its own package.

### Example

```java
public class Example {
    public int publicField;
    private int privateField;
    protected int protectedField;
    int defaultField; // Default access
    
    public void publicMethod() {}
    private void privateMethod() {}
    protected void protectedMethod() {}
    void defaultMethod() {} // Default access
}
```

## Conclusion

Understanding classes and objects is crucial for mastering Java's object-oriented programming. By defining classes, creating objects, and using methods and constructors, you can build robust and modular applications.

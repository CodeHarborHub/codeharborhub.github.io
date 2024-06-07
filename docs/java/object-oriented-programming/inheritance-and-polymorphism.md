---
id: inheritance-and-polymorphism
title: Inheritance and Polymorphism in Java
sidebar_label: Inheritance and Polymorphism
sidebar_position: 2
tags: [java, object-oriented-programming, inheritance, polymorphism, programming, java inheritance, java polymorphism]
description: In this tutorial, we will learn about inheritance and polymorphism in Java. We will learn about how to create subclasses and superclasses, how to use inheritance to reuse code, and how to use polymorphism to create flexible and extensible code in Java.
---

# Inheritance and Polymorphism in Java

## Introduction

Inheritance and polymorphism are key concepts in Java's object-oriented programming (OOP) paradigm. Inheritance allows a class to inherit properties and methods from another class, while polymorphism enables objects to be treated as instances of their parent class rather than their actual class.

## Inheritance

### Definition

Inheritance is a mechanism where one class (subclass or derived class) inherits the properties and behaviors (fields and methods) of another class (superclass or base class).

### Syntax

```java
class SubclassName extends SuperclassName {
    // Additional fields and methods
}
```

### Example

```java
// Superclass
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
    }
}

// Subclass
public class Dog extends Animal {
    
    public Dog(String name) {
        super(name); // Call the constructor of the superclass
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        dog.displayInfo(); // Inherited method
        dog.makeSound(); // Overridden method
    }
}
```

### Access Modifiers in Inheritance

- `public`: Accessible everywhere.
- `protected`: Accessible in the same package and subclasses.
- `private`: Not accessible in subclasses.
- `default` (no modifier): Accessible only in the same package.

## Polymorphism

### Definition

Polymorphism means "many forms" and it allows one interface to be used for a general class of actions. The specific action is determined by the exact nature of the situation. There are two types of polymorphism in Java: compile-time (method overloading) and runtime (method overriding).

### Method Overloading (Compile-Time Polymorphism)

Method overloading allows a class to have more than one method with the same name, but different parameters.

#### Example

```java
public class MathOperations {
    // Overloaded method for adding two integers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded method for adding three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded method for adding two double values
    public double add(double a, double b) {
        return a + b;
    }
}
```

## Key Rules of Method Overloading
Remember these rules when overloading a method:

The overloaded and overloading methods must be in the same class (Note: this includes any methods inherited, even implicitly, from a superclass).
The method parameters must change: either the number or the type of parameters must be different in the two methods.
The return type can be freely modified.
The access modifier (public, private, and so on) can be freely modified.
Thrown exceptions, if any, can be freely modified.


### Method Overriding (Runtime Polymorphism)

Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.

#### Example

```java
public class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        
        myDog.makeSound(); // Outputs: Woof
        myCat.makeSound(); // Outputs: Meow
    }
}
```
## Key Rules of Method Overriding
Remember these rules when overriding a method:

The parameter list must not change: the overriding method must take the same number and type of parameters as the overridden method – otherwise, you would just be overloading the method.
The return type must not change (Note: if the method returns an object, a subclass of that object is allowed as the return type).
The access modifier must be either the same or a less restrictive one (for example, if the overridden method is protected, you can declare the overriding method as public, but not private).
Thrown checked exceptions, if any, can be removed or reduced by the overriding method. This means that the overriding method can throw the same checked exception as the overridden method, or a subclass of that checked exception, but not a broader exception. This restriction does not apply to unchecked exceptions.

### Dynamic Method Dispatch

Dynamic method dispatch is a mechanism by which a call to an overridden method is resolved at runtime rather than compile-time. It is the foundation of runtime polymorphism in Java.

#### Example

```java
public class Main {
    public static void main(String[] args) {
        Animal myAnimal; // Declare a reference variable of type Animal
        
        myAnimal = new Dog(); // myAnimal refers to a Dog object
        myAnimal.makeSound(); // Outputs: Woof
        
        myAnimal = new Cat(); // myAnimal refers to a Cat object
        myAnimal.makeSound(); // Outputs: Meow
    }
}
```



## Conclusion

Inheritance and polymorphism are powerful features of Java that enable code reusability and flexibility. Inheritance allows classes to inherit properties and methods from other classes, while polymorphism allows methods to behave differently based on the object that is invoking them. Understanding these concepts is essential for effective Java programming.

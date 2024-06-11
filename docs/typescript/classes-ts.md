---
id: classes-ts
title: Classes and Inheritance in TypeScript
sidebar_label: Classes and Inheritance in TypeScript
sidebar_position: 6
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Classes and Inheritance Rules used in TypeScript
---
Classes are a fundamental feature of object-oriented programming (OOP) that provide a blueprint for creating objects with predefined properties and methods. In TypeScript, classes offer a powerful way to structure your code, encapsulate data, and organize functionality in a modular and reusable manner.

**Using classes in TypeScript allows you to:**

    ***1. Encapsulate Data:*** Classes allow you to encapsulate related data and behavior into a single unit, promoting code organization and maintainability.

    ***2. Define Blueprints for Objects:*** With classes, you can define blueprints or templates for creating objects with consistent structures and behaviors.

    ***3. Implement Inheritance:*** TypeScript supports inheritance, allowing classes to inherit properties and methods from parent classes, enabling code reuse and promoting the principle of DRY (Don't Repeat Yourself).

    ***4. Utilize Access Modifiers:*** TypeScript provides access modifiers such as public, private, and protected, which allow you to control the visibility and accessibility of class members, enhancing data encapsulation and security.

    ***5. Implement Abstraction:*** Abstract classes and methods enable you to define common behaviors and structures without providing a concrete implementation, fostering modular design and extensibility.

    ***6. Utilize Static Members:*** Static members belong to the class itself rather than to any specific instance, providing a convenient way to define utility functions or shared data.

In this section, you will explore various class-related concepts such as classes, access modifiers, the readonly modifier, getters & setters, inheritance, static methods & properties, and abstract classes, and learn how to use them effectively in your TypeScript programs.

## 1. Classes

Classes are blueprints for creating objects with predefined properties and methods. They encapsulate data and behavior, providing a clear structure for your programs.

Example:

    ```tsx title='typescript'
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet(): void {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    let person = new Person("Alice", 30);
    person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
    ```

## 2. Access Modifiers

 These modifiers control the visibility of class members, enhancing encapsulation and protecting data.
 The three types of access possible in TypeScript are private, protected, and public access modifiers.

Example:

    ```tsx title='typescript'
    class Employee {
        public name: string; // accessible from anywhere
        private salary: number; // accessible only within the class
        protected department: string; // accessible within the class and subclasses

        constructor(name: string, salary: number, department: string) {
            this.name = name;
            this.salary = salary;
            this.department = department;
        }

        public getDetails(): void {
            console.log(`${this.name} works in the ${this.department} department.`);
        }

        private getSalary(): number {
            return this.salary;
        }
    }

    class Manager extends Employee {
        constructor(name: string, salary: number, department: string) {
            super(name, salary, department);
        }

        public getManagerDetails(): void {
            console.log(`${this.name} is a manager in the ${this.department} department.`);
        }
    }

    let manager = new Manager("Bob", 80000, "HR");
    manager.getDetails(); // Output: Bob works in the HR department.
    // manager.getSalary(); // Error: Property 'getSalary' is private and only accessible within class 'Employee'.
    manager.getManagerDetails(); // Output: Bob is a manager in the HR department.
    ```

## 3. The readonly Modifier

Use the readonly modifier to make class properties immutable. Once assigned, the value of readonly properties cannot be changed, ensuring that certain critical properties remain constant.

Example:

    ```tsx title='typescript'
    class Car {
        readonly make: string;
        readonly model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        displayDetails(): void {
            console.log(`${this.year} ${this.make} ${this.model}`);
        }
    }

    let car = new Car("Toyota", "Corolla", 2020);
    car.displayDetails(); // Output: 2020 Toyota Corolla
    car.year = 2021;
    car.displayDetails(); // Output: 2021 Toyota Corolla
    // car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
    ```

## 4. Getters & Setters

Getters and Setters allow you to control the access of the class properties. They enable the encapsulation of data, providing controlled access and modification of properties.

Example:

    ```tsx title='typescript'
    class Circle {
        private _radius: number;

        constructor(radius: number) {
            this._radius = radius;
        }

        get radius(): number {
            return this._radius;
        }

        set radius(value: number) {
            if (value <= 0) {
                throw new Error("Radius must be positive.");
            }
            this._radius = value;
        }

        getArea(): number {
            return Math.PI * this._radius * this._radius;
        }
    }

    let circle = new Circle(5);
    console.log(circle.radius); // Output: 5
    circle.radius = 10;
    console.log(circle.getArea()); // Output: 314.159...
    // circle.radius = -5; // Error: Radius must be positive.
    ```

## 5. Inheritance

Learn how to use inheritance to reuse the functionality of another class. Inheritance allows you to create a new class based on an existing class, extending its properties and methods.

Example:

    ```tsx title='typescript'
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        move(distance: number = 0): void {
            console.log(`${this.name} moved ${distance} meters.`);
        }
    }

    class Dog extends Animal {
        bark(): void {
            console.log("Woof! Woof!");
        }
    }

    let dog = new Dog("Rex");
    dog.bark(); // Output: Woof! Woof!
    dog.move(10); // Output: Rex moved 10 meters.
    ```

## 6. Static Methods & Properties

Define static methods and properties shared by all instances of a class. Static members belong to the class itself rather than to any specific instance, making them useful for utility functions or shared data.

Example:

    ```tsx title='typescript'
    class MathUtil {
        static PI: number = 3.14;

        static calculateCircumference(radius: number): number {
            return 2 * MathUtil.PI * radius;
        }
    }

    console.log(MathUtil.PI); // Output: 3.14
    console.log(MathUtil.calculateCircumference(10)); // Output: 62.8
    ```

## 7. Abstract Classes

Explain the abstract classes that define some common behaviors. Abstract classes cannot be instantiated directly and are meant to be extended by other classes, providing a base structure and forcing implementation of specific methods.

Example -

    ```tsx title='typescript'
    abstract class Shape {
        abstract getArea(): number;

        display(): void {
            console.log(`The area is ${this.getArea()}`);
        }
    }

    class Rectangle extends Shape {
        width: number;
        height: number;

        constructor(width: number, height: number) {
            super();
            this.width = width;
            this.height = height;
        }

        getArea(): number {
            return this.width * this.height;
        }
    }

    let rectangle = new Rectangle(5, 10);
    rectangle.display(); // Output: The area is 50
    ```

These concepts and examples illustrate how to effectively use classes and their advanced features in TypeScript, enhancing your ability to write robust and maintainable object-oriented code.

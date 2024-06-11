---
id: interfaces-ts
title: Interfaces in TypeScript
sidebar_label: Interfaces in TypeScript
sidebar_position: 7
tags: [TypeScript, Introduction to TypeScript, TypeScript Basics, TypeScript Introduction, TypeScript Overview, TypeScript Tutorial, TypeScript Guide, TypeScript Getting Started, TypeScript Introduction Tutorial, TypeScript Introduction Guide, TypeScript Introduction Getting Started, TypeScript Introduction Overview, TypeScript Introduction Basics, TypeScript Introduction Basics Tutorial, TypeScript Introduction Basics Guide, TypeScript Introduction Basics Overview, TypeScript Introduction Basics Getting Started, TypeScript Introduction Basics Getting Started Tutorial, TypeScript Introduction Basics Getting Started Guide]
description: A Description of Interfaces and its implementation in TypeScript
---

In Computer Science, interfaces refer to a key concept used in various programming paradigms, particularly in object-oriented programming (OOP). An interface defines a contract for a set of operations or functionalities that a class or object must adhere to. It serves as a blueprint for defining the structure and behavior of objects without providing any concrete implementation details.

**Key Aspects of Interfaces:**

***1. Abstraction:*** Interfaces abstract away the implementation details of a class, focusing solely on the functionalities it must provide. This allows for clear separation of concerns and promotes modular design.

***2. Contractual Obligation:*** Classes that implement an interface are obligated to implement all the methods and properties specified by the interface. This ensures consistency and interoperability within the codebase.

***3. Polymorphism:*** Interfaces enable polymorphic behavior, where objects of different classes that implement the same interface can be treated uniformly, allowing for flexibility and extensibility in software design.

***4. Multiple Inheritance:*** In languages that support it, interfaces provide a way to achieve multiple inheritance by allowing a class to implement multiple interfaces. This allows for the composition of different behaviors from multiple sources.

***5. Design by Contract:*** Interfaces facilitate the design by contract principle, where the interactions between components are defined through preconditions, postconditions, and invariants specified by interfaces, promoting robust and reliable software systems.

***6. Loose Coupling:*** By programming to interfaces rather than concrete implementations, code becomes less coupled to specific classes, making it easier to refactor and maintain.

In this section, you'll delve into interfaces, a key feature of TypeScript, and explore how they facilitate creating contracts within your codebase. You'll also learn about extending interfaces to compose new ones and understand the distinctions between interfaces and abstract classes.

## 1. Interfaces

Interfaces in TypeScript define the structure of objects and specify the types of their properties and methods, ensuring consistency and interoperability.

```tsx title='typescript'
interface Shape {
    name: string;
    area(): number;
}

class Circle implements Shape {
    name: string;
    radius: number;

    constructor(name: string, radius: number) {
        this.name = name;
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

let circle: Shape = new Circle("Circle", 5);
console.log(circle.area()); // Output: 78.54
```

## 2. Extending Interfaces

Extending interfaces allows you to inherit the properties and methods of one interface into another, enabling you to build more complex and reusable interfaces.

```tsx title='typescript'
interface Animal {
    name: string;
    sound(): string;
}

interface Dog extends Animal {
    breed: string;
}

class Labrador implements Dog {
    name: string;
    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    sound(): string {
        return "Woof! Woof!";
    }
}

let dog: Dog = new Labrador("Max", "Labrador");
console.log(dog.sound()); // Output: Woof! Woof!
```

## 3. Interfaces vs. Abstract Classes

While both interfaces and abstract classes enable you to define blueprints for objects, they have distinct purposes and characteristics. Understanding these differences is crucial for choosing the appropriate approach for your design needs.

```tsx title='typescript'
interface Vehicle {
    name: string;
    start(): void;
    stop(): void;
}

abstract class Car implements Vehicle {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    start(): void {
        console.log(`${this.name} started.`);
    }

    abstract stop(): void;
}

class Sedan extends Car {
    stop(): void {
        console.log(`${this.name} stopped.`);
    }
}

let sedan: Vehicle = new Sedan("Toyota Camry");
sedan.start(); // Output: Toyota Camry started.
sedan.stop(); // Output: Toyota Camry stopped.
```

These examples demonstrate how interfaces and abstract classes are implemented and utilized in TypeScript, showcasing their versatility and usefulness in defining contracts and structuring your codebase.

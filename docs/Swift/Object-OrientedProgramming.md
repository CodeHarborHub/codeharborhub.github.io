---
id: swift-object-oriented-programming
title: Swift Object-Oriented Programming
sidebar_label: Object-Oriented Programming
sidebar_position: 6
description: Object-Oriented Programming (OOP) focuses on modeling software using objects that encapsulate data and behavior
tags: [Swift,Introduction,Object-Oriented Programming,Concepts,programming Language]
--- 

Object-Oriented Programming (OOP) focuses on modeling software using objects that encapsulate data and behavior. Swift supports OOP principles such as encapsulation, inheritance, polymorphism, and abstraction, which help in building modular, maintainable, and scalable applications.

### Concepts:

1. **Classes and Objects**:
   - **Class**: Blueprint for creating objects. Defines properties (data) and methods (functions) that characterize objects.
   - **Object**: Instance of a class that encapsulates data and behavior defined by its class.

2. **Encapsulation**:
   - **Concept**: Bundling of data (properties) and methods that operate on the data within a single unit (class). Access to data is restricted to methods of the class.
   - **Example**:
     ```swift
     class Car {
         private var engine: String // Encapsulated property
         
         init(engine: String) {
             self.engine = engine
         }
         
         func start() {
             print("Starting \(engine) engine")
         }
     }
     
     let myCar = Car(engine: "V8")
     myCar.start() // Output: Starting V8 engine
     // myCar.engine = "V6" // Error: 'engine' is inaccessible due to 'private' protection level
     ```

3. **Inheritance**:
   - **Concept**: Mechanism where a class (subclass) can inherit properties and methods from another class (superclass).
   - **Example**:
     ```swift
     class Vehicle {
         var brand: String
         
         init(brand: String) {
             self.brand = brand
         }
         
         func drive() {
             print("Driving the \(brand)")
         }
     }
     
     class Car: Vehicle {
         var type: String
         
         init(brand: String, type: String) {
             self.type = type
             super.init(brand: brand)
         }
     }
     
     let myCar = Car(brand: "Toyota", type: "Sedan")
     myCar.drive() // Output: Driving the Toyota
     ```

4. **Polymorphism**:
   - **Concept**: Ability to present the same interface for different data types. Methods can be overridden in subclasses to provide specialized implementations.
   - **Example**:
     ```swift
     class Shape {
         func draw() {
             print("Drawing shape")
         }
     }
     
     class Circle: Shape {
         override func draw() {
             print("Drawing circle")
         }
     }
     
     let shape: Shape = Circle()
     shape.draw() // Output: Drawing circle
     ```

5. **Abstraction**:
   - **Concept**: Hides complex implementation details behind a simpler interface. Abstract classes and protocols define interfaces without specifying implementation.
   - **Example**:
     ```swift
     protocol Drawable {
         func draw()
     }
     
     class Circle: Drawable {
         func draw() {
             print("Drawing circle")
         }
     }
     
     let circle = Circle()
     circle.draw() // Output: Drawing circle
     ```

### Example:

```swift
// Example of using inheritance and polymorphism
class Animal {
    var name: String
    
    init(name: String) {
        self.name = name
    }
    
    func makeSound() {
        print("Animal makes a sound")
    }
}

class Dog: Animal {
    override func makeSound() {
        print("Bark!")
    }
}

class Cat: Animal {
    override func makeSound() {
        print("Meow!")
    }
}

let myDog = Dog(name: "Buddy")
let myCat = Cat(name: "Whiskers")

myDog.makeSound() // Output: Bark!
myCat.makeSound() // Output: Meow!
```

### Concepts :

- **Classes and Objects**: `Animal`, `Dog`, and `Cat` are classes representing different types of animals.
- **Inheritance**: `Dog` and `Cat` inherit from `Animal`, sharing common behavior (`makeSound`) defined in `Animal`.
- **Polymorphism**: `makeSound` method is overridden in `Dog` and `Cat` to provide specialized behavior. 
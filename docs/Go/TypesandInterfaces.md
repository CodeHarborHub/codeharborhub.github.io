---
id: go-types-and-interfaces
title: Types and Interfaces
sidebar_label: Types and Interfaces
sidebar_position: 3
tags: [introduction,Go,open-source,Types and Interfaces,programming language]
description: Go concept of Types and Interfaces.
---

In Go (Golang), types and interfaces are fundamental concepts that facilitate robust and flexible code design. Let's explore each of these concepts in detail:

### Types

In Go, a type defines the blueprint for a set of values. It specifies the representation of data and the operations that can be performed on that data. Types in Go include basic types (like `int`, `float64`, `string`), composite types (like `struct`, `array`, `slice`, `map`), and user-defined types (created using `type` keyword).

#### Example of Types:

```go
package main

import "fmt"

// Define a new type using type alias
type Celsius float64

// Define a struct type
type Person struct {
    Name string
    Age  int
}

func main() {
    // Using basic types
    var age int = 30
    var temperature Celsius = 20.5

    // Using composite types
    var john Person
    john.Name = "John Doe"
    john.Age = 40

    fmt.Printf("Age: %d\n", age)
    fmt.Printf("Temperature: %.1f°C\n", temperature)
    fmt.Printf("Person: %+v\n", john)
}
```

In this example:
- `Celsius` is a user-defined type alias for `float64`.
- `Person` is a struct type with fields `Name` and `Age`.
- Instances of these types (`age`, `temperature`, `john`) demonstrate different uses of types in Go.

### Interfaces

Interfaces in Go provide a way to specify behavior—what a type can do—without specifying how it does it. An interface is a collection of method signatures that a type can implement. Unlike some languages, interfaces in Go are implicit; a type automatically satisfies an interface if it implements all the methods defined by that interface.

#### Example of Interfaces:

```go
package main

import "fmt"

// Define an interface
type Shape interface {
    Area() float64
}

// Define a struct type implementing the Shape interface
type Rectangle struct {
    Width  float64
    Height float64
}

// Method to calculate area of Rectangle
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func main() {
    // Create an instance of Rectangle
    rectangle := Rectangle{Width: 10, Height: 5}

    // The Rectangle type satisfies the Shape interface
    var shape Shape
    shape = rectangle

    // Call Area method via Shape interface
    fmt.Printf("Area of rectangle: %.2f square units\n", shape.Area())
}
```

In this example:
- `Shape` is an interface with a single method `Area()` that returns a `float64`.
- `Rectangle` struct implements the `Shape` interface by defining its `Area()` method.
- The `rectangle` instance of type `Rectangle` is assigned to `shape` of type `Shape`, demonstrating interface assignment and method invocation.

### Key Points and Benefits

- **Type Safety**: Go's type system ensures compile-time type checking, reducing runtime errors.
- **Abstraction and Flexibility**: Interfaces allow decoupling of code by specifying behavior rather than implementation details, promoting code reusability and modularity.
- **Polymorphism**: Interfaces enable polymorphic behavior where different types can be used interchangeably based on shared methods.
 
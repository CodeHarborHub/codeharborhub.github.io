---
id: go-structs-and-methods
title: Structs and Methods
sidebar_label: Structs and Methods
sidebar_position: 8
tags: [introduction,Go,open-source,Structs and Methods,programming language]
description: Go Concept of Structs and Methods
---

In Go (Golang), structs and methods are fundamental concepts used to define custom data types and associated behaviors. Let's delve into structs and methods, their definitions, usage, and examples.

### Structs

A struct is a composite data type that groups together zero or more named fields of possibly different types into a single unit. Structs are used to create complex data structures that can represent real-world entities in a program. Key points about structs include:

- **Definition**: Structs are defined using the `type` and `struct` keywords followed by a list of fields inside curly braces `{}`.
- **Fields**: Each field in a struct has a name and a type.
- **Initialization**: Structs can be initialized with field values using a struct literal.

#### Example of Structs:

```go
package main

import "fmt"

// Define a struct type
type Person struct {
    FirstName string
    LastName  string
    Age       int
}

func main() {
    // Create a new instance of Person struct
    person := Person{
        FirstName: "John",
        LastName:  "Doe",
        Age:       30,
    }

    // Accessing struct fields
    fmt.Println("First Name:", person.FirstName)
    fmt.Println("Last Name:", person.LastName)
    fmt.Println("Age:", person.Age)
}
```

In this example:
- `Person` is a struct type with three fields: `FirstName`, `LastName`, and `Age`.
- An instance `person` of type `Person` is created using a struct literal with initial values.

### Methods

Methods in Go are functions that are associated with a particular type. They allow you to define behavior (functions) for your custom types (structs or any other types). Methods can either be associated with a struct type (`receiver`) or a non-struct type.

#### Receiver Syntax:

- **Pointer Receiver (`*T`)**: Modifies the value pointed to by the receiver. Changes are visible to the caller.
- **Value Receiver (`T`)**: Operates on a copy of the receiver. Changes are not visible to the caller unless the receiver is a struct or array and is not defined as a pointer.

#### Example of Methods:

```go
package main

import "fmt"

// Define a struct type
type Rectangle struct {
    Width  float64
    Height float64
}

// Method with value receiver
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Method with pointer receiver
func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    // Create a new instance of Rectangle struct
    rectangle := Rectangle{
        Width:  10.0,
        Height: 5.0,
    }

    // Call methods
    fmt.Println("Area:", rectangle.Area())  // Calling method with value receiver
    rectangle.Scale(2.0)                    // Calling method with pointer receiver
    fmt.Println("Scaled Width:", rectangle.Width)
    fmt.Println("Scaled Height:", rectangle.Height)
}
```

In this example:
- `Rectangle` is a struct type with `Width` and `Height` fields.
- `Area()` is a method with a value receiver `Rectangle`. It calculates and returns the area of the rectangle.
- `Scale()` is a method with a pointer receiver `*Rectangle`. It scales the dimensions of the rectangle by a given factor.

### When to Use Methods vs Functions

- **Methods** are used to associate behavior with a specific type (struct or non-struct). They enhance code readability and maintainability by keeping related operations grouped together with the data they operate on.
  
- **Functions** are used for generic computations or operations that don't necessarily need to be associated with a specific type.
 
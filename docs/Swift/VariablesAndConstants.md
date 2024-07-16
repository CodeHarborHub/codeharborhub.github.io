---
id: swift-variable-constants
title: Variable and Constants
sidebar_label: Variable and Constants
sidebar_position: 2
description: variables and constants are used to store values
tags: [Swift,Introduction,Variable,Concepts,programming Language]
---  

In Swift, variables and constants are used to store values of different types like `Int`, `String`, `Bool`, etc. Variables are mutable, meaning their values can change after they are initialized, while constants are immutable, meaning their values cannot change once set.

### Concepts:

1. **Variables (`var`)**:
   - **Declaration**: Declared using the `var` keyword followed by a name and optional type annotation (`: Type`).
   - **Example**:
     ```swift
     var age: Int = 30
     age = 31 // Valid: Changing the value of a variable
     ```

2. **Constants (`let`)**:
   - **Declaration**: Declared using the `let` keyword followed by a name and optional type annotation (`: Type`).
   - **Example**:
     ```swift
     let name: String = "John"
     // name = "Jane" // Error: Cannot assign to value: 'name' is a 'let' constant
     ```

3. **Type Inference**:
   - **Concept**: Swift uses type inference to automatically determine the type of a variable or constant based on the initial value assigned.
   - **Example**:
     ```swift
     var temperature = 25.5 // Inferred as Double
     let message = "Welcome!" // Inferred as String
     ```

4. **Mutability**:
   - **Variables (`var`)**: Mutable; their values can be changed after initialization.
   - **Constants (`let`)**: Immutable; their values cannot be changed once set.

5. **Naming Conventions**:
   - **CamelCase**: Preferred naming convention for variables and constants (`myVariable`, `myConstant`).
   - **Meaningful Names**: Use descriptive names to indicate the purpose or content of the variable or constant.

### Example:

```swift
// Example demonstrating variables and constants
var count: Int = 10
count = 15 // Valid: Changing the value of a variable

let pi: Double = 3.14
// pi = 3.14159 // Error: Cannot assign to value: 'pi' is a 'let' constant

// Type inference example
var message = "Hello, World!" // Inferred as String
var number = 42 // Inferred as Int

// Naming conventions
let firstName: String = "Alice"
var numberOfStudents: Int = 30
```

### Concepts :

- **Variables (`var`)**: `count` is declared as a variable and its value is mutable (`Int`).
- **Constants (`let`)**: `pi` is declared as a constant and its value is immutable (`Double`).
- **Type Inference**: Swift infers the type of `message` and `number` based on their initial values.
- **Naming Conventions**: `firstName` and `numberOfStudents` follow Swift's naming conventions for variables and constants.
 
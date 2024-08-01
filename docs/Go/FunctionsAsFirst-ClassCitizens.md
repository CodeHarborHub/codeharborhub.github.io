---
id: functions-as-first-class-citizens
title: Functions as First-Class Citizens
sidebar_label: Functions as First-Class Citizens
sidebar_position: 4
tags: [introduction,Go,open-source,programming language]
description: Go Concept of Functions as First-Class Citizens.
---

In Go (or Golang), functions are treated as first-class citizens, which means they can be treated like any other variable. This includes passing functions as arguments to other functions, returning functions as values from other functions, assigning functions to variables, and storing functions in data structures.

Here are a few ways functions are treated as first-class citizens in Go:

### 1. Assigning Functions to Variables

In Go, you can assign functions to variables just like you would assign integers, strings, or any other data type.

```go
package main

import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    var sumFunc func(int, int) int // Declare a variable of function type
    sumFunc = add                   // Assign the add function to sumFunc
    
    result := sumFunc(3, 5)         // Call the function using the variable
    fmt.Println("Sum:", result)
}
```

### 2. Passing Functions as Arguments

Functions can be passed as arguments to other functions in Go, allowing for powerful abstractions and higher-order functions.

```go
package main

import "fmt"

func apply(f func(int, int) int, a, b int) int {
    return f(a, b)
}

func add(a, b int) int {
    return a + b
}

func multiply(a, b int) int {
    return a * b
}

func main() {
    result1 := apply(add, 3, 5)       // Pass add function as an argument
    result2 := apply(multiply, 3, 5)  // Pass multiply function as an argument
    
    fmt.Println("Addition result:", result1)
    fmt.Println("Multiplication result:", result2)
}
```

### 3. Returning Functions from Functions

Functions can also return other functions as values, allowing for functional programming techniques such as closures.

```go
package main

import "fmt"

func makeGreeter(greeting string) func(string) string {
    return func(name string) string {
        return fmt.Sprintf("%s, %s!", greeting, name)
    }
}

func main() {
    englishGreeter := makeGreeter("Hello")
    spanishGreeter := makeGreeter("Hola")

    fmt.Println(englishGreeter("Alice"))
    fmt.Println(spanishGreeter("Carlos"))
}
```

In this example, `makeGreeter` returns a function that takes a `name` argument and returns a greeting string. This demonstrates how functions can be used to encapsulate behavior and create reusable components.

### 4. Functions in Data Structures

You can store functions in data structures such as slices, maps, or structs.

```go
package main

import "fmt"

type mathFunc func(int, int) int

func add(a, b int) int {
    return a + b
}

func multiply(a, b int) int {
    return a * b
}

func main() {
    mathFuncs := map[string]mathFunc{
        "add":      add,
        "multiply": multiply,
    }

    result1 := mathFuncs["add"](3, 5)
    result2 := mathFuncs["multiply"](3, 5)

    fmt.Println("Addition result:", result1)
    fmt.Println("Multiplication result:", result2)
}
```

Here, `mathFunc` is a type that represents functions with a specific signature. Functions `add` and `multiply` are stored in a map and called based on their keys.

### Benefits of First-Class Functions in Go

- **Higher-order functions**: Functions that can accept functions as arguments or return functions enable flexible and expressive programming.
- **Closures**: Functions can access variables defined in their lexical scope, allowing for powerful encapsulation of state.
- **Modularity**: Functions can be easily composed and reused, enhancing code maintainability and readability.

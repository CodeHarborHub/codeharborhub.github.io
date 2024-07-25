---
id: swift-control-flow
title: Swift Control Flow
sidebar_label: Control Flow
sidebar_position: 4
description: Statements and Condition checking.
tags: [Swift,Introduction,Concepts,Control Flow,programming Language]
--- 

Control flow in Swift allows developers to dictate the order in which code statements are executed. It includes conditional statements (`if`, `guard`, `switch`) for making decisions based on conditions, and looping statements (`for-in`, `while`, `repeat-while`) for repeating code blocks until a condition is met or satisfied.

### Key Concepts:

1. **Conditional Statements**:
   - **`if` Statement**: Executes a block of code if a condition is true.
     ```swift
     let number = 10
     if number > 0 {
         print("Number is positive")
     } else {
         print("Number is non-positive")
     }
     ```

   - **`guard` Statement**: Provides an early exit from a function if a condition isn’t met.
     ```swift
     func process(number: Int?) {
         guard let number = number else {
             print("Number is nil")
             return
         }
         print("Number is \(number)")
     }
     process(number: 42) // Output: Number is 42
     ```

   - **`switch` Statement**: Evaluates a value against multiple possible matching patterns.
     ```swift
     let grade = "A"
     switch grade {
         case "A":
             print("Excellent!")
         case "B", "C":
             print("Good")
         default:
             print("Need improvement")
     }
     ```

2. **Looping Statements**:
   - **`for-in` Loop**: Iterates over a sequence (e.g., array, range) of items.
     ```swift
     let names = ["Alice", "Bob", "Charlie"]
     for name in names {
         print("Hello, \(name)!")
     }
     ```

   - **`while` Loop**: Executes a block of code repeatedly as long as a condition is true.
     ```swift
     var counter = 5
     while counter > 0 {
         print("Counter: \(counter)")
         counter -= 1
     }
     ```

   - **`repeat-while` Loop**: Similar to `while`, but ensures the block of code is executed at least once before checking the condition.
     ```swift
     var attempts = 0
     repeat {
         print("Attempt \(attempts)")
         attempts += 1
     } while attempts < 3
     ```

3. **Control Transfer Statements**:
   - **`break`**: Terminates the execution of a loop or switch statement.
   - **`continue`**: Skips the current iteration of a loop and proceeds to the next iteration.
   - **`fallthrough`**: Used in a `switch` statement to fall through to the next case.

### Example:

```swift
// Example combining conditional and looping statements
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0

for number in numbers {
    if number % 2 == 0 {
        continue // Skip even numbers
    }
    
    if number > 5 {
        break // Stop processing when number exceeds 5
    }
    
    sum += number
}

print("Sum of odd numbers less than or equal to 5: \(sum)") // Output: Sum of odd numbers less than or equal to 5: 9
```

### Key Concepts Demonstrated:

- **Combining Statements**: The example demonstrates using `for-in` loop to iterate over an array, using `if` statements for conditions (`continue` and `break`), and accumulating a sum based on specific conditions.
- **Control Transfer**: `continue` skips even numbers, `break` stops processing when a condition is met, showing how control flow statements alter program execution.
 
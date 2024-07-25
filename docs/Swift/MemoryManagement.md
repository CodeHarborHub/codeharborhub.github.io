---
id: swift-memory-management
title: Swift Memory Management
sidebar_label: Memory Management
sidebar_position: 7
description: Swift revolves around the automatic management of memory allocation and deallocation. 
tags: [Swift,Introduction,Concepts,Memory Management,programming Language]
--- 

Memory management in Swift revolves around the automatic management of memory allocation and deallocation through Automatic Reference Counting (ARC). ARC tracks and manages instances of classes to ensure that memory is deallocated when no longer needed, preventing memory leaks and improving performance.

### Key Concepts:

1. **Automatic Reference Counting (ARC)**:
   - **Concept**: ARC automatically tracks and manages the memory used by instances of classes.
   - **Increment and Decrement**: ARC increments the reference count when a new instance is created or an existing reference is retained. It decrements the count when a reference is released or becomes nil.
   
2. **Strong References**:
   - **Concept**: By default, Swift uses strong references to manage memory. A strong reference keeps an instance alive as long as at least one strong reference to it exists.
   - **Example**:
     ```swift
     class Person {
         var name: String
         init(name: String) {
             self.name = name
             print("\(name) is initialized")
         }
         deinit {
             print("\(name) is deinitialized")
         }
     }
     
     var reference1: Person?
     var reference2: Person?
     var reference3: Person?
     
     reference1 = Person(name: "John")
     reference2 = reference1 // Strong reference, increments reference count
     reference3 = reference1 // Strong reference, increments reference count
     
     reference1 = nil // Decrements reference count
     reference2 = nil // Decrements reference count
     reference3 = nil // Decrements reference count
     // Output: John is initialized
     // John is deinitialized
     ```

3. **Weak and Unowned References**:
   - **Concept**: Weak and unowned references are used to avoid strong reference cycles (retain cycles) where two instances hold strong references to each other, preventing deallocation.
   - **Example**:
     ```swift
     class Apartment {
         var tenant: Person?
     }
     
     class Person {
         var apartment: Apartment?
     }
     
     var john: Person?
     var apartment: Apartment?
     
     john = Person()
     apartment = Apartment()
     
     john!.apartment = apartment
     apartment!.tenant = john
     
     john = nil // Breaks the strong reference cycle
     apartment = nil // Breaks the strong reference cycle
     ```

4. **Unowned References**:
   - **Concept**: Unowned references are similar to weak references but assume that the reference will always have a value throughout its lifetime. They do not keep the instance alive, but do not require unwrapping as weak references do.
   - **Example**:
     ```swift
     class Customer {
         let name: String
         var card: CreditCard?
         init(name: String) {
             self.name = name
         }
         deinit { print("\(name) is being deinitialized") }
     }
     
     class CreditCard {
         let number: UInt64
         unowned let customer: Customer
         init(number: UInt64, customer: Customer) {
             self.number = number
             self.customer = customer
         }
         deinit { print("Card #\(number) is being deinitialized") }
     }
     
     var john: Customer?
     john = Customer(name: "John Appleseed")
     john!.card = CreditCard(number: 1234_5678_9012_3456, customer: john!)
     
     john = nil
     // Prints:
     // John Appleseed is being deinitialized
     // Card #1234567890123456 is being deinitialized
     ```

### Example:

```swift
// Example of strong reference cycle (retain cycle) without using weak or unowned references
class Person {
    var apartment: Apartment?
    deinit {
        print("Person instance is being deinitialized")
    }
}

class Apartment {
    var tenant: Person?
    deinit {
        print("Apartment instance is being deinitialized")
    }
}

var john: Person?
var unit4A: Apartment?

john = Person()
unit4A = Apartment()

john!.apartment = unit4A
unit4A!.tenant = john

john = nil // Person instance is not deallocated because of the strong reference cycle
unit4A = nil // Apartment instance is not deallocated because of the strong reference cycle
```

### Concepts :

- **Automatic Reference Counting (ARC)**: Manages memory allocation and deallocation automatically based on strong reference counts.
- **Strong, Weak, and Unowned References**: Differentiates between reference types to manage memory effectively and avoid retain cycles.
- **Deinitialization**: Executed automatically when an instance is no longer referenced, freeing up allocated memory.
 
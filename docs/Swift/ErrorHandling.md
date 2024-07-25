---
id: swift-error-handling
title: Swift Error Handling
sidebar_label: Error Handling
sidebar_position: 8
description: Enable code to respond to and recover from unexpected or erroneous conditions during execution.
tags: [Swift,Introduction,Concepts,Error Handling,programming Language]
--- 
 
Error handling in Swift enables code to respond to and recover from unexpected or erroneous conditions during execution. It uses the `throw`, `try`, `catch`, and `throws` keywords to propagate and handle errors safely.

### Key Concepts:

1. **Throwing Errors**:
   - **`throw`**: Used to throw an error explicitly within a function or method.
     ```swift
     enum CustomError: Error {
         case notFound
         case serverError(String)
     }
     
     func fetchData(from url: String) throws -> String {
         if url.isEmpty {
             throw CustomError.notFound
         }
         // Simulate fetching data
         return "Data from \(url)"
     }
     ```

2. **Error Handling**:
   - **`try`**: Marks a segment of code that can potentially throw an error.
   - **`catch`**: Catches and handles errors thrown by a `try` block.
     ```swift
     do {
         let data = try fetchData(from: "https://example.com/data")
         print(data)
     } catch CustomError.notFound {
         print("Data not found")
     } catch CustomError.serverError(let message) {
         print("Server error: \(message)")
     } catch {
         print("An error occurred: \(error)")
     }
     ```

3. **Propagating Errors**:
   - **`throws`**: Indicates that a function or method can throw errors to its caller.
   - Allows errors to be handled or propagated up the call stack.
     ```swift
     func process() throws {
         let result = try fetchData(from: "https://example.com/data")
         print(result)
     }
     
     do {
         try process()
     } catch {
         print("Error processing data: \(error)")
     }
     ```

4. **Rethrowing Errors**:
   - Functions marked with `throws` can rethrow errors thrown by functions they call.
   - Useful for forwarding errors without handling them.
     ```swift
     func fetchAndProcessData(from url: String) throws {
         let data = try fetchData(from: url)
         // Process data
     }
     ```

5. **Error Types**:
   - Errors are represented as types conforming to the `Error` protocol.
   - Custom errors can be defined using `enum` to provide structured error handling.

### Example:

```swift
enum NetworkError: Error {
    case invalidURL
    case noInternetConnection
}

func fetchData(from url: String) throws -> String {
    guard let url = URL(string: url) else {
        throw NetworkError.invalidURL
    }
    
    // Simulate fetching data (network call)
    if !isConnectedToInternet() {
        throw NetworkError.noInternetConnection
    }
    
    return "Data fetched successfully from \(url)"
}

func processURL(_ urlString: String) {
    do {
        let result = try fetchData(from: urlString)
        print(result)
    } catch NetworkError.invalidURL {
        print("Invalid URL")
    } catch NetworkError.noInternetConnection {
        print("No internet connection")
    } catch {
        print("Error: \(error)")
    }
}

func isConnectedToInternet() -> Bool {
    // Simulate internet connectivity check
    return true
}

// Usage
processURL("https://example.com/data") 
processURL("invalid-url")
```

### Key Concepts Demonstrated:

- **Custom Errors**: `NetworkError` enum defines specific error cases (`invalidURL`, `noInternetConnection`) for structured error handling.
- **Error Propagation**: `fetchData(from:)` function propagates errors (`throw`) to its caller (`processURL(_:)`) using `throws` and `try`.
- **Error Handling**: `do-catch` block in `processURL(_:)` handles different error cases gracefully, ensuring robust error management in the application.
 
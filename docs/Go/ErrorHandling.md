---
id: go-error-handling
title: Error Handling
sidebar_label: Error Handling
sidebar_position: 7
tags: [introduction,Go,Garbage Collection,Packages and Imports,Error Handling,open-source,Types and Interfaces,programming language]
description: Go concept of Error Handling.
---

Error handling in Go is designed to be explicit and straightforward, emphasizing the importance of handling errors directly where they occur rather than relying on exceptions or runtime errors. Here's a detailed explanation of how error handling works in Go:

### Returning Errors

In Go, functions that can produce an error typically return an error as the last return value (often of type `error`). It's a common practice to return `nil` (indicating no error) when the function succeeds, and a non-nil `error` when it fails.

```go
package main

import (
    "errors"
    "fmt"
)

func divide(x, y float64) (float64, error) {
    if y == 0 {
        return 0, errors.New("division by zero")
    }
    return x / y, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

    result, err = divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

In this example:
- The `divide` function returns a `float64` result and an `error`. It checks if `y` is zero and returns an error if true.
- In `main`, we call `divide` twice with different arguments. We check if `err` is `nil` to determine if an error occurred.

### Error Handling Patterns

1. **Check Errors Immediately:** Always check errors immediately after calling a function that can return an error. This ensures errors are handled promptly.

2. **Error Propagation:** Functions can propagate errors up the call stack by returning them to the caller. Each layer of the call stack can add context or handle the error accordingly.

3. **Error Wrapping:** Go supports error wrapping using `fmt.Errorf` or `errors.Wrap` from the `errors` package to add context to errors while preserving the original error information.

```go
package main

import (
    "errors"
    "fmt"
    "github.com/pkg/errors"
)

func openFile(filename string) error {
    _, err := os.Open(filename)
    if err != nil {
        return errors.Wrap(err, "failed to open file")
    }
    return nil
}

func main() {
    err := openFile("nonexistent.txt")
    if err != nil {
        fmt.Println("Error:", err)
        // Extract the underlying error message
        fmt.Println("Underlying error:", errors.Unwrap(err))
    }
}
```

### Error Handling Best Practices

- **Avoid Panic:** In Go, panicking should be reserved for unrecoverable errors, like out-of-memory conditions or unrecoverable state.
  
- **Contextual Error Messages:** Provide clear and meaningful error messages that help developers understand the cause of the error.

- **Handle Errors Appropriately:** Decide whether to handle an error locally or propagate it to the caller based on the application's needs and the context in which the error occurred.
 
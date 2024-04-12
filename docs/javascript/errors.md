---
id: errors-in-javascript
title: Errors in JavaScript
sidebar_label: Errors
sidebar_position: 31
tags: [JavaScript, Errors, Try Catch Finally, Error Object, Throw Error, Error Handling, DOMException, AggregateError, TypeError, RangeError, URIError, EvalError, InternalError, Error, AbortError, NotAllowedError, NotFoundError, SecurityError, try, catch, finally]
description: "In this tutorial, we will learn about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We will see the different types of errors in JavaScript and how to handle them using try...catch...finally blocks."
---

In JavaScript, an error is an unexpected event that occurs during the execution of a program. Errors can occur due to various reasons such as incorrect syntax, logical errors, or runtime errors. When an error occurs, JavaScript stops the execution of the program and generates an error message.

JavaScript provides a built-in `Error` object that represents an error. The `Error` object contains information about the error such as the error message and the stack trace. The stack trace is a list of function calls that were in progress when the error occurred.

There are several types of errors in JavaScript. Some common types of errors are:

1. **SyntaxError**: This error occurs when there is a syntax error in the code. For example, missing parentheses, missing semicolons, or misspelled keywords.
2. **ReferenceError**: This error occurs when a variable or function is used without being declared.
3. **TypeError**: This error occurs when a value is not of the expected type. For example, trying to call a non-function value.
4. **RangeError**: This error occurs when a value is not within the expected range. For example, using an invalid index in an array.
5. **URIError**: This error occurs when a global URI handling function is used in a wrong way.
6. **EvalError**: This error occurs when an error occurs during the execution of `eval()` function.
7. **InternalError**: This error occurs when an internal error in the JavaScript engine occurs.
8. **Error**: This is the base class for all errors in JavaScript.
9. **AggregateError**: This error is a subclass of `Error` that represents an error when multiple errors need to be wrapped in a single error.
10. **DOMException**: This error is a subclass of `Error` that represents an error in the DOM.
11. **AbortError**: This error is a subclass of `DOMException` that represents an error when an operation is aborted.
12. **NotAllowedError**: This error is a subclass of `DOMException` that represents an error when an operation is not allowed.
13. **NotFoundError**: This error is a subclass of `DOMException` that represents an error when a requested resource is not found.
14. **SecurityError**: This error is a subclass of `DOMException` that represents a security error.
15. **TypeError**: This error is a subclass of `Error` that represents a type error.
16. **RangeError**: This error is a subclass of `Error` that represents a range error.

## Handling Errors in JavaScript

To handle errors in JavaScript, you can use the `try...catch...finally` statement. The `try` block contains the code that may throw an error. The `catch` block contains the code to handle the error. The `finally` block contains the code that will be executed regardless of whether an error occurs or not.

Here is the syntax of the `try...catch...finally` statement:

```javascript title="app.js"
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that will be executed regardless of whether an error occurs or not
}
```

Let's see an example of handling errors in JavaScript using the `try...catch...finally` statement:

```javascript title="app.js"
try {
    let x = 10;
    let y = 0;
    let result = x / y; // Division by zero
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("Finally block executed");
}
```

In this example, we are trying to divide a number by zero, which will throw a `TypeError` (division by zero). We are handling this error using the `try...catch...finally` statement.

When you run the above code, you will get the following output:

```bash title="Output"
An error occurred: Division by zero
Finally block executed
```

In the `catch` block, we are logging the error message using `error.message`. In the `finally` block, we are logging a message that will be executed regardless of whether an error occurs or not.

That's all for handling errors in JavaScript. You can use the `try...catch...finally` statement to handle errors and prevent your program from crashing when an error occurs.


:::tip 🧠 Knowledge Check
1. Which of the following is not a type of error in JavaScript?

    A) SyntaxError <br/>
    B) ReferenceError <br/>
    C) TypeError <br/>
    D) NullError

<details>
  <summary><b>Answer</b></summary>
  <p>

  **Answer:** D) NullError

  `NullError` is not a type of error in JavaScript. The correct type of error is `TypeError`.

  </p>
</details>

2. Which block of code will be executed regardless of whether an error occurs or not?

    A) `try` block <br/>
    B) `catch` block <br/>
    C) `finally` block <br/>
    D) None of the above

<details>
  <summary><b>Answer</b></summary>
  <p>

  **Answer:** C) `finally` block

  The `finally` block will be executed regardless of whether an error occurs or not.

  </p>
</details>

:::

:::info 📚 Learn More:

**Throwing Errors in JavaScript:**

You can throw an error in JavaScript using the `throw` statement. The `throw` statement allows you to create a custom error and throw it. Here is an example of throwing an error in JavaScript:

```javascript title="app.js"
try {
    let x = 10;
    let y = 0;
    if (y === 0) {
        throw new Error("Division by zero");
    }
    let result = x / y;
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("Finally block executed");
}
```

In this example, we are throwing a custom error using the `throw` statement when the value of `y` is zero. The error message is "Division by zero".

When you run the above code, you will get the following output:

```bash title="Output"
An error occurred: Division by zero
Finally block executed
```

In the `catch` block, we are logging the error message using `error.message`. In the `finally` block, we are logging a message that will be executed regardless of whether an error occurs or not.

**Error Object in JavaScript:**

The `Error` object in JavaScript has two properties: `name` and `message`. The `name` property contains the name of the error (e.g., "SyntaxError", "ReferenceError", "TypeError"), and the `message` property contains the error message.

Here is an example of creating a custom error using the `Error` object:

```javascript title="app.js"
try {
    throw new Error("Custom Error");
} catch (error) {
    console.log("An error occurred: " + error.message);
}
```

In this example, we are creating a custom error using the `Error` object with the message "Custom Error".

When you run the above code, you will get the following output:

```bash title="Output"
An error occurred: Custom Error
```

That's all for throwing errors in JavaScript. You can use the `throw` statement to throw custom errors and handle them using the `try...catch...finally` statement.

:::

## Summary

In this tutorial, we learned about errors in JavaScript. Errors are unexpected events that occur during the execution of a program. We saw the different types of errors in JavaScript and how to handle them using the `try...catch...finally` statement. We also saw an example of handling errors in JavaScript.
---
id: custom-exceptions-in-java
title: Custom Exceptions in Java
sidebar_label: Custom Exceptions
sidebar_position: 5
tags: [java, exceptions, programming, custom-exceptions, java exceptions]
description: In this tutorial, you will learn how to create and use custom exceptions in Java. We will learn how to define custom exception classes, throw exceptions, and handle exceptions in Java programs.
---

# Custom Exceptions in Java

## Introduction

Custom exceptions in Java allow you to create your own exception classes to handle specific error conditions in a more meaningful way. By creating custom exceptions, you can provide more informative error messages and handle specific scenarios that are unique to your application.

## Creating Custom Exceptions

### Steps to Create a Custom Exception

1. **Extend the Exception class or one of its subclasses**: Most commonly, you extend `Exception` for checked exceptions or `RuntimeException` for unchecked exceptions.
2. **Provide constructors**: Include constructors that take a message, a cause, or both, as parameters.

### Example: Creating a Custom Checked Exception

#### Definition

```java
public class InvalidAgeException extends Exception {
    // Default constructor
    public InvalidAgeException() {
        super();
    }

    // Constructor that accepts a message
    public InvalidAgeException(String message) {
        super(message);
    }

    // Constructor that accepts a message and a cause
    public InvalidAgeException(String message, Throwable cause) {
        super(message, cause);
    }

    // Constructor that accepts a cause
    public InvalidAgeException(Throwable cause) {
        super(cause);
    }
}
```

#### Usage

```java
public class Person {
    private int age;

    public void setAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("Age must be between 0 and 150.");
        }
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        try {
            person.setAge(200);
        } catch (InvalidAgeException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}
```

### Example: Creating a Custom Unchecked Exception

#### Definition

```java
public class InvalidParameterException extends RuntimeException {
    // Default constructor
    public InvalidParameterException() {
        super();
    }

    // Constructor that accepts a message
    public InvalidParameterException(String message) {
        super(message);
    }

    // Constructor that accepts a message and a cause
    public InvalidParameterException(String message, Throwable cause) {
        super(message, cause);
    }

    // Constructor that accepts a cause
    public InvalidParameterException(Throwable cause) {
        super(cause);
    }
}
```

#### Usage

```java
public class Calculator {
    public int divide(int numerator, int denominator) {
        if (denominator == 0) {
            throw new InvalidParameterException("Denominator cannot be zero.");
        }
        return numerator / denominator;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        try {
            int result = calculator.divide(10, 0);
        } catch (InvalidParameterException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }
}
```

## Best Practices for Custom Exceptions

- **Inherit from the appropriate base exception class**: Use `Exception` for checked exceptions and `RuntimeException` for unchecked exceptions.
- **Provide multiple constructors**: Include constructors that take messages and causes to provide more context.
- **Use meaningful exception names**: The name of the exception class should clearly indicate the error condition it represents.
- **Document the exception**: Provide Javadoc comments to explain when and why the custom exception should be used.

### Example with Documentation

```java
/**
 * Thrown to indicate that the age provided is invalid.
 */
public class InvalidAgeException extends Exception {
    /**
     * Constructs a new exception with {@code null} as its detail message.
     */
    public InvalidAgeException() {
        super();
    }

    /**
     * Constructs a new exception with the specified detail message.
     *
     * @param message the detail message
     */
    public InvalidAgeException(String message) {
        super(message);
    }

    /**
     * Constructs a new exception with the specified detail message and cause.
     *
     * @param message the detail message
     * @param cause the cause of the exception
     */
    public InvalidAgeException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * Constructs a new exception with the specified cause.
     *
     * @param cause the cause of the exception
     */
    public InvalidAgeException(Throwable cause) {
        super(cause);
    }
}
```

## Conclusion

Custom exceptions in Java provide a powerful mechanism for handling application-specific error conditions. By creating and using custom exceptions, you can make your error handling code more robust, readable, and maintainable. Ensure that you follow best practices when defining and using custom exceptions to maximize their effectiveness.

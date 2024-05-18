---
id: exception-basics-and-try-catch
title: Exception Basics and Try-Catch
sidebar_label: Exception Basics and Try-Catch
sidebar_position: 1
tags: [java, exceptions, programming, exception-handling, java exceptions]
description: In this tutorial, we will learn about exceptions in Java. We will learn about what exceptions are, why they are important, and how to handle exceptions using try-catch blocks in Java programs.
---

# Exceptions Basics and Try-Catch in Java

## Introduction

Exceptions are events that disrupt the normal flow of a program's execution. In Java, exceptions provide a way to handle errors or other exceptional conditions in a controlled manner. Java provides a robust exception handling mechanism to manage runtime errors, making it easier to debug and maintain code.

## Types of Exceptions

### Checked Exceptions

Checked exceptions are exceptions that are checked at compile-time. These exceptions must be either caught or declared in the method signature using the `throws` keyword.

#### Example

```java
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("file.txt");
        } catch (IOException e) {
            System.out.println("File not found or unable to read the file");
        }
    }
}
```

### Unchecked Exceptions

Unchecked exceptions are exceptions that are not checked at compile-time. These are subclasses of `RuntimeException`. They occur during the execution of the program and can be caught, but are not required to be declared in the method signature.

#### Example

```java
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}
```

### Errors

Errors are serious issues that a reasonable application should not try to catch. They are usually related to the environment in which the application is running (e.g., `OutOfMemoryError`).

## Exception Hierarchy

- `Throwable`
  - `Exception`
    - `RuntimeException`
    - Checked exceptions (e.g., `IOException`, `SQLException`)
  - `Error` (e.g., `OutOfMemoryError`, `StackOverflowError`)

## Try-Catch Block

### Syntax

The `try` block contains code that might throw an exception, and the `catch` block contains code to handle the exception.

```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

### Example

```java
public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds");
        }
    }
}
```

## Multiple Catch Blocks

You can have multiple catch blocks to handle different types of exceptions.

### Example

```java
public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);
            int result = 10 / 0;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index is out of bounds");
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}
```

## Finally Block

The `finally` block is used to execute important code such as closing resources, regardless of whether an exception is thrown or not.

### Syntax

```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
} finally {
    // Code to be executed regardless of an exception
}
```

### Example

```java
public class FinallyExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("This is the finally block");
        }
    }
}
```

## Try-With-Resources

The try-with-resources statement is a try statement that declares one or more resources. A resource is an object that must be closed after the program is finished with it. The try-with-resources statement ensures that each resource is closed at the end of the statement.

### Syntax

```java
try (ResourceType resource = new ResourceType()) {
    // Use the resource
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

### Example

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("File not found or unable to read the file");
        }
    }
}
```

## Conclusion

Understanding exceptions and how to handle them is crucial for writing robust and maintainable Java code. Using try-catch blocks appropriately allows you to manage runtime errors gracefully and ensure your program can handle unexpected conditions without crashing.

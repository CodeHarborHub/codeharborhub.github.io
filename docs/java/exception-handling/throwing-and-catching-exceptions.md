---
id: throwing-and-catching-exceptions
title: Throwing and Catching Exceptions
sidebar_label: Throwing and Catching Exceptions
sidebar_position: 3
tags: [java, exceptions, programming, throwing-exceptions, catching-exceptions]
description: In this tutorial, you will learn how to throw and catch exceptions in Java. We will learn how to throw exceptions using the `throw` statement and how to catch exceptions using the `try-catch` block in Java programs.
---

# Throwing and Catching Exceptions in Java

## Introduction

In Java, exceptions are thrown to indicate exceptional conditions that may occur during the execution of a program. Exceptions can be thrown explicitly using the `throw` keyword or can be thrown implicitly by the Java runtime system.

## Throwing Exceptions

### Syntax

Exceptions can be thrown explicitly using the `throw` keyword followed by an instance of the exception class.

```java
throw new ExceptionType("Error message");
```

### Example

```java
public class ThrowExceptionExample {
    public static void main(String[] args) {
        int age = -5;
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }
}
```

## Catching Exceptions

### Syntax

Exceptions are caught using the `try-catch` block. The `try` block contains the code that may throw an exception, and the `catch` block handles the exception.

```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Code to handle the exception
}
```

### Example

```java
public class CatchExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
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
            System.out.println(numbers[5]); // This will throw ArrayIndexOutOfBoundsException
            int result = 10 / 0; // This will throw ArithmeticException
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
            int result = 10 / 0; // This will throw ArithmeticException
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

Throwing and catching exceptions are essential aspects of Java programming, allowing you to handle unexpected conditions and errors gracefully. By understanding how to throw and catch exceptions, as well as how to use the `finally` block and try-with-resources statement, you can write more robust and reliable Java code.

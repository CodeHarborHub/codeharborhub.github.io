---
id: checked-vs-unchecked-exceptions
title: Checked vs Unchecked Exceptions in Java
sidebar_label: Checked vs Unchecked Exceptions
sidebar_position: 2
tags: [java, exceptions, programming, checked-exceptions, unchecked-exceptions]
description: In this tutorial, you will learn about checked and unchecked exceptions in Java. We will learn about the differences between checked and unchecked exceptions, how to handle them, and when to use them in Java programs.
---

# Checked vs Unchecked Exceptions in Java

## Introduction

Exceptions in Java are categorized into two main types: checked exceptions and unchecked exceptions. Understanding the differences between these two types is crucial for effective exception handling in Java.

## Checked Exceptions

### Definition

Checked exceptions are exceptions that are checked at compile-time. This means that the compiler ensures that these exceptions are either caught or declared in the method signature using the `throws` keyword.

### Characteristics

- **Compile-time Checking**: The compiler enforces handling of these exceptions.
- **Must be Caught or Declared**: Methods that can throw checked exceptions must either catch them or declare them using the `throws` keyword.
- **Typically Used for Recoverable Conditions**: Checked exceptions are often used for conditions from which the program can recover, such as I/O errors, network errors, and file not found exceptions.

### Example

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

### Common Checked Exceptions

- `IOException`
- `SQLException`
- `FileNotFoundException`
- `ClassNotFoundException`

## Unchecked Exceptions

### Definition

Unchecked exceptions are exceptions that are not checked at compile-time. These are subclasses of `RuntimeException`. The compiler does not enforce handling of these exceptions, meaning they do not need to be declared or caught.

### Characteristics

- **Runtime Checking**: These exceptions occur during the execution of the program.
- **No Requirement to Catch or Declare**: Methods are not required to handle or declare these exceptions.
- **Typically Used for Programming Errors**: Unchecked exceptions are often used to indicate programming errors, such as logic errors or improper use of an API.

### Example

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

### Common Unchecked Exceptions

- `NullPointerException`
- `ArrayIndexOutOfBoundsException`
- `ArithmeticException`
- `IllegalArgumentException`

## Key Differences

| Feature                     | Checked Exceptions                      | Unchecked Exceptions                  |
|-----------------------------|-----------------------------------------|---------------------------------------|
| **Compile-time Checking**   | Yes                                     | No                                    |
| **Handling Requirement**    | Must be caught or declared              | No requirement to catch or declare    |
| **Inheritance**             | Extends `Exception`                     | Extends `RuntimeException`            |
| **Typical Use**             | For recoverable conditions (e.g., I/O)  | For programming errors (e.g., null pointers) |

## When to Use

### Checked Exceptions

- Use checked exceptions when the client code should be aware of and recover from the exception.
- Ideal for scenarios where the error is due to external factors (e.g., network issues, file handling).

### Unchecked Exceptions

- Use unchecked exceptions to indicate programming errors that can be avoided by the developer.
- Ideal for scenarios where the error is due to a bug in the code (e.g., null pointer access, array out-of-bounds).

## Example Comparison

### Checked Exception Example

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CheckedExceptionDemo {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
            String line = reader.readLine();
            System.out.println(line);
            reader.close();
        } catch (IOException e) {
            System.out.println("An I/O error occurred: " + e.getMessage());
        }
    }
}
```

### Unchecked Exception Example

```java
public class UncheckedExceptionDemo {
    public static void main(String[] args) {
        String str = null;
        try {
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("A null pointer exception occurred: " + e.getMessage());
        }
    }
}
```

## Conclusion

Understanding the distinction between checked and unchecked exceptions is essential for writing robust Java applications. Checked exceptions force you to handle potential error conditions at compile time, making your code more resilient to expected issues. Unchecked exceptions, on the other hand, highlight potential bugs in your code that should be fixed by the developer. Proper use of both types of exceptions can lead to cleaner, more maintainable code.

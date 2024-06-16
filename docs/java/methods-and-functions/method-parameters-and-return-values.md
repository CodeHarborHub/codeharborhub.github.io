---
id: method-parameters-and-return-values
title: Method Parameters and Return Values
sidebar_label: Method Parameters and Return Values
sidebar_position: 2
tags: [java, methods, functions, programming, java methods, java functions, method parameters, return values]
description: In this tutorial, we will learn about method parameters and return values in Java. We will learn about how to define methods with parameters and return values, how to call methods with arguments, and how to handle return values from methods in Java.
---


## Method Example

Here are a few examples to illustrate different types of methods:

### Method with No Parameters and No Return Value

```java
public void printHello() {
    System.out.println("Hello, World!");
}
```

### Method with Parameters and a Return Value

```java
public int multiply(int x, int y) {
    return x * y;
}
```

### Method with No Parameters but a Return Value

```java
public String getGreeting() {
    return "Hello, Java!";
}
```

### Method with Multiple Parameters

```java
public double calculateArea(double width, double height) {
    return width * height;
}
```

## Calling Methods

To call a method, use the method name followed by parentheses. If the method requires parameters, provide the appropriate arguments within the parentheses.

### Example

```java
public class Main {
    public static void main(String[] args) {
        Main obj = new Main();
        
        // Calling a method with no parameters and no return value
        obj.printHello();
        
        // Calling a method with parameters and a return value
        int result = obj.add(5, 3);
        System.out.println("Sum: " + result);
        
        // Calling a method with no parameters but a return value
        String greeting = obj.getGreeting();
        System.out.println(greeting);
        
        // Calling a method with multiple parameters
        double area = obj.calculateArea(5.5, 4.0);
        System.out.println("Area: " + area);
    }
    
    public void printHello() {
        System.out.println("Hello, World!");
    }

    public int add(int a, int b) {
        return a + b;
    }

    public String getGreeting() {
        return "Hello, Java!";
    }

    public double calculateArea(double width, double height) {
        return width * height;
    }
}

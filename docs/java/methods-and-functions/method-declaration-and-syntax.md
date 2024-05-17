---
id: method-declaration-and-syntax
title: Method Declaration and Syntax
sidebar_label: Method Declaration and Syntax
sidebar_position: 1
tags: [java, methods, functions, programming, java methods, java functions]
description: In this tutorial, we will learn about methods and functions in Java. We will learn about what methods are, how to declare and define methods, and how to call methods in Java.
---


# Method Declaration and Syntax in Java

## Introduction

Methods in Java are blocks of code that perform a specific task and can be called upon whenever needed. They help in organizing code, improving reusability, and making programs more modular and maintainable.

## Method Declaration

A method declaration in Java defines a method's name, return type, and parameters. Here's the basic syntax for declaring a method:

### Syntax

```java
accessModifier returnType methodName(parameters) {
    // method body
}
```

### Example

```java
public int add(int a, int b) {
    return a + b;
}
```

### Explanation

- **Access Modifier**: Defines the visibility of the method. Common access modifiers include `public`, `private`, `protected`, and the default (package-private).
- **Return Type**: Specifies the type of value the method returns. If the method does not return any value, use `void`.
- **Method Name**: The name of the method. It should be a valid identifier and follow camelCase naming convention.
- **Parameters**: A comma-separated list of input parameters. Each parameter consists of a data type and a variable name.

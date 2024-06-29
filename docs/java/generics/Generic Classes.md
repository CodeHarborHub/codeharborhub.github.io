---
id: generic-classes
title: Generic Classes
sidebar_label: Generic Classes
sidebar_position: 2
tags: [java, generics]
description: In this tutorial, we will explore how to create and use generic classes in JAVA.
---

# Generic Classes

- Generic classes in Java allow you to define classes with placeholders for types.

- These placeholders can then be replaced with actual types when creating instances of the class. This provides flexibility and type safety.

- To define a generic class, you use angle brackets `<>` to declare type parameters. These parameters can be used throughout the class definition.

```java
// T is the placeholder representing the type of the item stored in the Box.
public class Box<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }
}
```

When you create an instance of `Box` and specify a type, such as `Box<Integer>`, T is replaced with `Integer`, and the `Box` class effectively becomes a container for integers.

```java
public class Main {
    public static void main(String[] args) {
        Box<Integer> integerBox = new Box<>();
        integerBox.setItem(10);
        System.out.println("Item in the integer box: " + integerBox.getItem());
        
        Box<String> stringBox = new Box<>();
        stringBox.setItem("Hello, World!");
        System.out.println("Item in the string box: " + stringBox.getItem());
    }
}
```

The above Java program demonstrates the usage of a generic class Box with two different types (`Integer` and `String`).

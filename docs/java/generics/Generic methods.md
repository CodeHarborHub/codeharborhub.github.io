---
id: generic-methods
title: Generic methods
sidebar_label: Generic methods
sidebar_position: 3
tags: [java, generics]
description: In this tutorial, we will explore explore how to create and use generic methods in JAVA.
---

# Generic methods

- Generic methods allow you to create methods that work with different types without specifying the actual type until the method is called.

- The syntax for defining a generic method involves placing type parameters in angle brackets before the return type.

```java
public class ArrayPrinter {
    // Generic method to print an array of any type
    public static <T> void printArray(T[] array) {
        for (T item : array) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Integer[] intArray = {1, 2, 3, 4, 5};
        String[] stringArray = {"apple", "banana", "orange"};

        // Print the Integer array
        System.out.print("Integer Array: ");
        printArray(intArray);

        // Print the String array
        System.out.print("String Array: ");
        printArray(stringArray);
    }
}
```

- The above code is to demonstrate the use of a generic method printArray that can print elements of arrays of any type.

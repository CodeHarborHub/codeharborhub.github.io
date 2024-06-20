---
id: creation of streams
title: How can create Streams?
sidebar_label: How can create Streams?
sidebar_position: 2
tags: [java, stream-api]
description: In this tutorial, we will explore multitple ways to create streams in java.
---

# How can create Streams?


## 1. From collections:

- You can create a stream from existing collections like lists, sets, or maps. It allows you to process each element of the collection easily without dealing with traditional loops.

```java
public class StreamFromCollectionsExample {
    public static void main(String[] args) {
        List<Integer> numbersList = new ArrayList<>();
        numbersList.add(1);
        numbersList.add(2);
        numbersList.add(3);
        
        // Creating a stream from a list
        Stream<Integer> streamFromList = numbersList.stream();
        
        // Performing an operation on the stream
        streamFromList.forEach(element -> System.out.println(element));
    }
}
```

## 2. From arrays:
- Similar to collections, you can create streams from arrays. It’s useful when you have data stored in an array format.


```java
public class StreamFromArraysExample {
    public static void main(String[] args) {
        int[] numbersArray = {1, 2, 3, 4, 5};
        
        // Creating a stream from an array
        Stream<Integer> streamFromArray = Arrays.stream(numbersArray).boxed();
        
        // Performing an operation on the stream
        streamFromArray.forEach(element -> System.out.println(element));
    }
}
```


## 3. Using Stream Factories:
- Java provides methods like Stream.of() or Arrays.stream() to directly create streams from given values or arrays.

```java
public class StreamExample {
    public static void main(String[] args) {
        // Creating a stream using Stream.of()
        Stream<Integer> streamOfValues = Stream.of(1, 2, 3, 4, 5);
        
        // Performing an operation on the stream
        streamOfValues.forEach(element -> System.out.println(element));
    }
}
```
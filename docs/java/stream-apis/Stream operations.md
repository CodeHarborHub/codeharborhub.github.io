---
id: stream-operations
title: Stream operations
sidebar_label: Stream operations
sidebar_position: 3
tags: [java, stream-api]
description: In this tutorial, we will explore multiple opertions we can perform on the streams with examples.
---

# Stream operations

- In Java’s Stream API, operations are broadly categorized into two types: Intermediate operations and Terminal operations. 

- Let’s break down each:

## 1. Intermediate Operations

- These operations transform the elements of the stream.
- They are lazy, meaning they don’t execute until a terminal operation is called.
- Intermediate operations return a new stream, allowing for chaining.
- Examples include `map`, `filter`, `sorted`, `distinct`, etc.


## 2. Terminal Operations

- These operations produce a non-stream result.
- They execute the stream pipeline and produce a result or a side-effect.
- Once a terminal operation is invoked, the stream is consumed and cannot be reused.
- Examples include `forEach`, `collect`, `reduce`, `count`, `min`, `max`, etc.


## 3. Common stream operations

## 3.1. Filtering: 

- This operation allows you to select elements from a collection based on a certain condition.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> evenNumbers = numbers.stream()
                                   .filter(num -> num % 2 == 0) // intermediate operation
                                   .collect(Collectors.toList()); // terminal operation

// Output: [2, 4, 6, 8, 10]
System.out.println(evenNumbers);
```

## 3.2. Mapping: 

- This operation involves transforming each element of a collection according to a given function.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> squaredNumbers = numbers.stream()
                                   .map(num -> num * num)
                                   .collect(Collectors.toList());

// Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
System.out.println(squaredNumbers);
```


## 3.3. Reduction: 

- Reduction combines all elements of a stream to produce a single result.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

int sum = numbers.stream()
                 .reduce(0, (n1, n2) -> n1 + n2); // or .reduce(0, Integer::sum);

// Output: 15
System.out.println(sum);
```

## 3.4. Sorting: 

- Sorting rearranges the elements of a collection in a specified order.

```java
List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9, 3);

List<Integer> sortedNumbers = numbers.stream()
                                    .sorted()
                                    .collect(Collectors.toList());

// Output: [1, 2, 3, 5, 8, 9]
System.out.println(sortedNumbers);
```

## 3.5. Counting: 

- Counting calculates the number of elements in a collection.

```java
List<String> names = Arrays.asList("John", "Alice", "Bob", "Emily");

long count = names.stream()
                 .count();

// Output: 4
System.out.println(count);
```

## 3.6. Grouping: 

- Grouping gathers elements of a collection based on a common property.

```java
List<String> names = Arrays.asList("John", "Alice", "Bob", "Emily");

Map<Integer, List<String>> groupedNamesByLength = names.stream()
                                                      .collect(Collectors.groupingBy(String::length));

// Output: {3=[Bob], 5=[Alice, Emily], 4=[John]}
System.out.println(groupedNamesByLength);
```

## 3.7. Limiting and Skipping

- Infinite Streams: Imagine a stream of water that never stops flowing. Similarly, an infinite stream in programming is a sequence of data that goes on forever. You can generate this stream of data dynamically, meaning it keeps producing new elements endlessly.
- Limiting: Think of it like putting a cap on how much water from the stream you want to collect. In programming, you might only want to take the first 10 numbers from an infinite stream of numbers. So, you set a limit to only take the first 10, and then the stream stops there.
- Skipping: Now, imagine you don’t want the first few numbers from the stream; you want to start collecting data from, say, the 11th number onward. Skipping allows you to do just that. It’s like bypassing the initial part of the stream and starting from a certain point.

```java
public class InfiniteStreamsExample {

    public static void main(String[] args) {
        // Generating an infinite stream of numbers starting from 1
        Stream<Integer> infiniteStream = Stream.iterate(1, i -> i + 1);

        // Limiting: Taking only the first 10 elements from the infinite stream
        Stream<Integer> limitedStream = infiniteStream.limit(10);

        System.out.println("First 10 elements from the infinite stream:");
        limitedStream.forEach(System.out::println);

        // Generating the infinite stream again as it was consumed in the previous operation
        infiniteStream = Stream.iterate(1, i -> i + 1);

        // Skipping: Skipping the first 5 elements and taking the next 10 elements
        Stream<Integer> skippedStream = infiniteStream.skip(5).limit(10);

        System.out.println("\nSkipping the first 5 elements and taking the next 10:");
        skippedStream.forEach(System.out::println);
    }
}
```

---
id: parallel-streams
title: Parallel streams
sidebar_label: Parallel streams
sidebar_position: 4
tags: [java, stream-api]
description: In this tutorial, we will explore about parallel stream and its advantages and disadvantages with an example.
---

# Parallel streams


- Sequential execution does one task at a time, while parallel execution does multiple tasks simultaneously.
- When you use a parallel stream, Java automatically splits the data into smaller parts and assigns them to different processors (cores) in your computer.
- Each processor works on its chunk of data independently and then the results are combined. This can speed up processing, especially for large datasets, because multiple tasks are being done simultaneously, rather than one after another.

```java
import java.util.Arrays;

public class ParallelStreamExample {
    public static void main(String[] args) {
        // Create a large array of numbers
        int[] numbers = new int[1000000];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i + 1;
        }

        // Sequential Stream: Summing up all numbers using a sequential stream
        long startTime = System.currentTimeMillis();
        long sequentialSum = Arrays.stream(numbers)
                                   .sum();
        long endTime = System.currentTimeMillis();
        System.out.println("Sequential sum: " + sequentialSum);
        System.out.println("Time taken with sequential stream: " + (endTime - startTime) + " milliseconds");

        // Parallel Stream: Summing up all numbers using a parallel stream
        startTime = System.currentTimeMillis();
        long parallelSum = Arrays.stream(numbers)
                                 .parallel()
                                 .sum();
        endTime = System.currentTimeMillis();
        System.out.println("Parallel sum: " + parallelSum);
        System.out.println("Time taken with parallel stream: " + (endTime - startTime) + " milliseconds");
    }
}
```

- After running this code, you should see the output showing the sum calculated using both sequential and parallel streams, along with the time taken for each approach. 

- Parallel processing can offer significant performance improvements and scalability but introduces complexity and potential challenges related to concurrency management.

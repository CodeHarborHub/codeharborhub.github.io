---
id: working-with-threads-and-executors
title: Working with Threads and Executors in Java
sidebar_label: Working with Threads and Executors
sidebar_position: 4
tags: [java, multithreading, concurrency, threads, executors]
description: In this tutorial, we will learn about working with threads and executors in Java. We will learn about how to create and manage threads using executors in Java.
---

# Working with Threads and Executors in Java

## Introduction

Managing multiple threads efficiently is crucial for building high-performance and responsive applications. Java provides powerful tools like threads and executors to handle concurrent tasks. This guide covers how to create and manage threads, use executors for better resource management, and handle thread synchronization.

## 1. Creating and Managing Threads

### Extending the Thread Class

Creating a thread by extending the `Thread` class involves overriding its `run` method.

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

### Implementing the Runnable Interface

Implementing the `Runnable` interface provides more flexibility, as your class can extend another class.

```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

## 2. Synchronization

### Synchronized Methods

To prevent thread interference and memory consistency errors, use synchronized methods.

```java
public class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
```

### Synchronized Blocks

For finer control, use synchronized blocks within methods.

```java
public class Counter {
    private int count = 0;

    public void increment() {
        synchronized (this) {
            count++;
        }
    }

    public int getCount() {
        synchronized (this) {
            return count;
        }
    }
}
```

## 3. Executors

The `Executor` framework simplifies thread management by providing a higher-level API for managing a pool of threads.

### Creating a Simple Executor

Use the `Executor` interface to run tasks asynchronously.

```java
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class SimpleExecutorExample {
    public static void main(String[] args) {
        Executor executor = Executors.newSingleThreadExecutor();
        executor.execute(() -> System.out.println("Task is running"));
    }
}
```

### ExecutorService

`ExecutorService` extends `Executor` with methods for managing the lifecycle of both the tasks and the executor.

### Fixed Thread Pool

A fixed thread pool is useful for running a fixed number of threads.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class FixedThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 10; i++) {
            executorService.execute(() -> {
                System.out.println("Task is running by " + Thread.currentThread().getName());
            });
        }

        executorService.shutdown();
    }
}
```

### Cached Thread Pool

A cached thread pool creates new threads as needed but reuses previously constructed threads when available.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CachedThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();

        for (int i = 0; i < 10; i++) {
            executorService.execute(() -> {
                System.out.println("Task is running by " + Thread.currentThread().getName());
            });
        }

        executorService.shutdown();
    }
}
```

### Scheduled Thread Pool

A scheduled thread pool can schedule commands to run after a given delay or periodically.

```java
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class ScheduledThreadPoolExample {
    public static void main(String[] args) {
        ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(2);

        scheduledExecutorService.schedule(() -> {
            System.out.println("Task executed after 3 seconds");
        }, 3, TimeUnit.SECONDS);

        scheduledExecutorService.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task executed every 2 seconds");
        }, 1, 2, TimeUnit.SECONDS);

        // Use this line to gracefully shutdown after a delay for demonstration purposes
        scheduledExecutorService.schedule(() -> scheduledExecutorService.shutdown(), 10, TimeUnit.SECONDS);
    }
}
```

## 4. Managing ExecutorService Lifecycle

### Shutting Down an ExecutorService

Shut down the `ExecutorService` to stop accepting new tasks and gracefully terminate existing tasks.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorServiceShutdownExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 10; i++) {
            executorService.execute(() -> {
                System.out.println("Task is running by " + Thread.currentThread().getName());
            });
        }

        executorService.shutdown();
        // executorService.shutdownNow();  // Attempts to stop all executing tasks immediately
    }
}
```

### Awaiting Termination

Wait for the `ExecutorService` to complete its tasks before proceeding.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecutorServiceAwaitTerminationExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 10; i++) {
            executorService.execute(() -> {
                System.out.println("Task is running by " + Thread.currentThread().getName());
            });
        }

        executorService.shutdown();

        try {
            if (!executorService.awaitTermination(60, TimeUnit.SECONDS)) {
                executorService.shutdownNow();
            }
        } catch (InterruptedException e) {
            executorService.shutdownNow();
        }
    }
}
```

## Conclusion

Using threads and executors efficiently allows you to manage concurrent tasks and improve the performance of your Java applications. By leveraging the `Executor` framework and proper synchronization techniques, you can build robust, scalable, and high-performing multithreaded applications.

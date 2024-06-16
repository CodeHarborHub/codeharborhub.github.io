---
id: multithreading-design-patterns
title: Multithreading Design Patterns in Java
sidebar_label: Multithreading Design Patterns
sidebar_position: 6
tags: [java, multithreading, concurrency, design patterns]
description: In this tutorial, we will learn about multithreading design patterns in Java. We will learn about some of the common design patterns used in multithreading and concurrency in Java.
---

# Multithreading Design Patterns in Java

## Introduction

Multithreading design patterns provide structured solutions for handling concurrency in Java applications. These patterns help manage thread creation, synchronization, and communication, ensuring efficient and safe multithreaded program execution.

## 1. Thread-Safe Singleton

The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. In a multithreaded environment, ensuring thread safety is crucial.

### Double-Checked Locking

This approach reduces the overhead of acquiring a lock by first checking the locking criterion without locking.

```java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() { }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

## 2. Producer-Consumer Pattern

The Producer-Consumer pattern separates the work of producing data from consuming it, using a shared buffer.

### Using BlockingQueue

`BlockingQueue` handles the synchronization between producers and consumers.

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class ProducerConsumerExample {
    private static final int BUFFER_SIZE = 10;
    private static final BlockingQueue<Integer> buffer = new ArrayBlockingQueue<>(BUFFER_SIZE);

    public static void main(String[] args) {
        Thread producer = new Thread(() -> {
            try {
                int value = 0;
                while (true) {
                    buffer.put(value);
                    System.out.println("Produced: " + value);
                    value++;
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        Thread consumer = new Thread(() -> {
            try {
                while (true) {
                    int value = buffer.take();
                    System.out.println("Consumed: " + value);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        producer.start();
        consumer.start();
    }
}
```

## 3. Future and Callable

The Future and Callable pattern allows concurrent tasks to return a result and be managed asynchronously.

### Using Callable and Future

`Callable` represents a task that returns a result, while `Future` represents the result of an asynchronous computation.

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class FutureCallableExample {
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(3);

        Callable<Integer> task = () -> {
            int result = 0;
            for (int i = 0; i < 10; i++) {
                result += i;
            }
            return result;
        };

        Future<Integer> future = executorService.submit(task);

        try {
            Integer result = future.get();
            System.out.println("Result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        } finally {
            executorService.shutdown();
        }
    }
}
```

## 4. Read-Write Lock Pattern

The Read-Write Lock pattern allows multiple threads to read a resource concurrently while ensuring exclusive access for write operations.

### Using ReentrantReadWriteLock

`ReentrantReadWriteLock` allows multiple readers or one writer at a time.

```java
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReadWriteLockExample {
    private static final ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
    private static int sharedData = 0;

    public static void main(String[] args) {
        Runnable readTask = () -> {
            lock.readLock().lock();
            try {
                System.out.println("Read: " + sharedData);
            } finally {
                lock.readLock().unlock();
            }
        };

        Runnable writeTask = () -> {
            lock.writeLock().lock();
            try {
                sharedData++;
                System.out.println("Written: " + sharedData);
            } finally {
                lock.writeLock().unlock();
            }
        };

        Thread writer = new Thread(writeTask);
        Thread reader1 = new Thread(readTask);
        Thread reader2 = new Thread(readTask);

        writer.start();
        reader1.start();
        reader2.start();
    }
}
```

## 5. Thread Pool Pattern

The Thread Pool pattern manages a pool of worker threads, assigning tasks to them instead of creating new threads for each task.

### Using ExecutorService

`ExecutorService` simplifies thread pool management.

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
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

## 6. Balking Pattern

The Balking pattern prevents an object from performing an action if it is in an inappropriate state.

### Example of Balking Pattern

```java
public class BalkingExample {
    private boolean isRunning = false;

    public synchronized void start() {
        if (isRunning) {
            return;  // Balking: exit method if already running
        }
        isRunning = true;
        new Thread(this::run).start();
    }

    private void run() {
        System.out.println("Task started");
        // Task execution logic here
    }

    public static void main(String[] args) {
        BalkingExample example = new BalkingExample();
        example.start();
        example.start();  // Second call will balk
    }
}
```

## 7. Worker Thread Pattern

The Worker Thread pattern assigns tasks to a fixed number of threads, allowing for reuse of thread resources.

### Example of Worker Thread Pattern

```java
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class WorkerThreadExample {
    public static void main(String[] args) {
        BlockingQueue<Runnable> taskQueue = new LinkedBlockingQueue<>();
        WorkerThread[] workers = new WorkerThread[3];

        for (int i = 0; i < workers.length; i++) {
            workers[i] = new WorkerThread(taskQueue);
            workers[i].start();
        }

        for (int i = 0; i < 10; i++) {
            taskQueue.add(() -> System.out.println("Task is running by " + Thread.currentThread().getName()));
        }
    }
}

class WorkerThread extends Thread {
    private BlockingQueue<Runnable> taskQueue;

    public WorkerThread(BlockingQueue<Runnable> taskQueue) {
        this.taskQueue = taskQueue;
    }

    @Override
    public void run() {
        while (true) {
            try {
                Runnable task = taskQueue.take();
                task.run();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
}
```

## Conclusion

Understanding and applying multithreading design patterns can greatly enhance the performance and reliability of your Java applications. By leveraging these patterns, you can manage concurrency more effectively and avoid common pitfalls associated with multithreading.

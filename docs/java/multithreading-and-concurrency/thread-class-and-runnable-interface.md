---
id: thread-class-and-runnable-interface
title: Thread Class and Runnable Interface in Java
sidebar_label: Thread Class and Runnable Interface
sidebar_position: 2
tags: [java, multithreading, concurrency, thread class, runnable interface]
description: In this tutorial, we will learn about the Thread class and Runnable interface in Java. We will learn about how to create and manage threads using the Thread class and Runnable interface in Java.
---

# Thread Class and Runnable Interface in Java

## Introduction

Multithreading is a feature that allows concurrent execution of two or more parts of a program. Threads are the smallest unit of processing that can be scheduled by an operating system. In Java, you can create and manage threads using either the `Thread` class or the `Runnable` interface.

## 1. The Thread Class

### Creating a Thread by Extending the Thread Class

To create a thread by extending the `Thread` class, you need to create a new class that extends `Thread` and override its `run` method. The `run` method is where the code for the thread's task is placed.

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();  // Start the thread
    }
}
```

### Key Methods in the Thread Class

- `start()`: Starts the execution of the thread; the JVM calls the `run` method of this thread.
- `run()`: Contains the code that constitutes the new thread's task.
- `sleep(long millis)`: Causes the currently executing thread to sleep for the specified number of milliseconds.
- `join()`: Waits for this thread to die.
- `interrupt()`: Interrupts the thread.

## 2. The Runnable Interface

### Creating a Thread by Implementing the Runnable Interface

To create a thread by implementing the `Runnable` interface, you need to create a new class that implements `Runnable` and provide an implementation of the `run` method. You then create a `Thread` object, passing the `Runnable` object to its constructor, and call the `start` method on the `Thread` object.

```java
public class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable();
        Thread thread = new Thread(myRunnable);
        thread.start();  // Start the thread
    }
}
```

### Benefits of Using Runnable

- **Flexibility**: Your class can extend another class while still implementing `Runnable`.
- **Separation of Concerns**: By implementing `Runnable`, you separate the task from the thread management, which can lead to cleaner and more modular code.

## 3. Comparing Thread Class and Runnable Interface

### Thread Class

- **Inheritance**: Since Java does not support multiple inheritance, extending the `Thread` class means your class cannot extend any other class.
- **Convenience**: Slightly more convenient if you don't need to extend any other class, as you don't need to pass a `Runnable` to a `Thread`.

### Runnable Interface

- **Flexibility**: Allows your class to extend another class while still implementing `Runnable`.
- **Reusability**: You can pass the same `Runnable` instance to multiple `Thread` objects.

### Example of Multiple Threads with Runnable

```java
public class MyRunnable implements Runnable {
    private String threadName;

    MyRunnable(String name) {
        this.threadName = name;
    }

    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(threadName + " running " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
        System.out.println(threadName + " finished");
    }

    public static void main(String[] args) {
        Thread thread1 = new Thread(new MyRunnable("Thread 1"));
        Thread thread2 = new Thread(new MyRunnable("Thread 2"));

        thread1.start();
        thread2.start();
    }
}
```

## Conclusion

Both the `Thread` class and the `Runnable` interface provide ways to create and manage threads in Java. Choosing between the two depends on your specific needs and design preferences. Implementing the `Runnable` interface is often preferred for its flexibility and cleaner separation of concerns, while extending the `Thread` class can be more convenient when inheritance is not an issue.

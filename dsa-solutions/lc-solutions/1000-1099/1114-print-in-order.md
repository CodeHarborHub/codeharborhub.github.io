---

id: print-in-order
title: Print in Order
level: medium
sidebar_label: Print in Order
tags:
  - Concurrency
  - Threads
  - Java
  - Python
  - C++
description: "This document provides solutions for the Print in Order problem on LeetCode."

---

## Problem Description

Suppose we have a class:

```java
class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}
```

The same instance of `Foo` will be passed to three different threads. Thread A will call `first()`, thread B will call `second()`, and thread C will call `third()`. Design a mechanism and modify the program to ensure that `second()` is executed after `first()`, and `third()` is executed after `second()`.

### Examples

**Example 1:**
```
Input: [1,2,3]
Output: "firstsecondthird"
```

**Example 2:**
```
Input: [1,3,2]
Output: "firstsecondthird"
```

### Constraints:

- The input array is a permutation of [1, 2, 3].

---

## Approach to Solve the Print in Order Problem

To ensure that the methods are executed in the correct order, we can use synchronization mechanisms such as locks, condition variables, or semaphores.

### Approach

1. **Using Locks and Condition Variables:**
   - Use a lock to ensure mutual exclusion.
   - Use condition variables to signal when a method can proceed.

2. **Using Semaphores:**
   - Use semaphores to control the order of execution.
   - Initialize semaphores in such a way that they ensure the correct sequence.

#### Code in Different Languages

### C++
```cpp
#include <iostream>
#include <functional>
#include <mutex>
#include <condition_variable>

class Foo {
private:
    std::mutex mtx;
    std::condition_variable cv;
    int step;

public:
    Foo() {
        step = 1;
    }

    void first(std::function<void()> printFirst) {
        std::unique_lock<std::mutex> lock(mtx);
        printFirst();
        step = 2;
        cv.notify_all();
    }

    void second(std::function<void()> printSecond) {
        std::unique_lock<std::mutex> lock(mtx);
        cv.wait(lock, [&]() { return step == 2; });
        printSecond();
        step = 3;
        cv.notify_all();
    }

    void third(std::function<void()> printThird) {
        std::unique_lock<std::mutex> lock(mtx);
        cv.wait(lock, [&]() { return step == 3; });
        printThird();
    }
};
```

### Java
```java
import java.util.concurrent.Semaphore;

class Foo {
    private Semaphore firstDone = new Semaphore(0);
    private Semaphore secondDone = new Semaphore(0);

    public Foo() {
    }

    public void first(Runnable printFirst) throws InterruptedException {
        printFirst.run();
        firstDone.release();
    }

    public void second(Runnable printSecond) throws InterruptedException {
        firstDone.acquire();
        printSecond.run();
        secondDone.release();
    }

    public void third(Runnable printThird) throws InterruptedException {
        secondDone.acquire();
        printThird.run();
    }
}
```

### Python
```python
from threading import Lock

class Foo:
    def __init__(self):
        self.lock1 = Lock()
        self.lock2 = Lock()
        self.lock1.acquire()
        self.lock2.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.lock1.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        with self.lock1:
            # printSecond() outputs "second". Do not change or remove this line.
            printSecond()
            self.lock2.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
        with self.lock2:
            # printThird() outputs "third". Do not change or remove this line.
            printThird()
```

### Complexity

- **Time Complexity:** The time complexity is dependent on the time taken by the `first()`, `second()`, and `third()` methods to print their respective strings. The synchronization mechanism adds minimal overhead.
- **Space Complexity:** $O(1)$ - We are using a constant amount of space for locks and semaphores.

### Summary

This approach uses synchronization primitives like locks and semaphores to ensure that the methods are executed in the specified order. The use of these primitives ensures that `second()` waits for `first()` to complete, and `third()` waits for `second()` to complete, thus maintaining the required order of execution.
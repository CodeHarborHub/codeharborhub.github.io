---
id: print-foobar-alternately
title: Print FooBar Alternately
sidebar_label: 1115 - Print FooBar Alternately
  - Leetcode
---

## Problem Statement

Suppose you are given the following code:

```class FooBar {
  public void foo() {
    for (int i = 0; i < n; i++) {
      print("foo");
    }
  }

  public void bar() {
    for (int i = 0; i < n; i++) {
      print("bar");
    }
  }
}
```

The same instance of FooBar will be passed to two different threads:

thread A will call foo(), while
thread B will call bar().
Modify the given program to output "foobar" n times.

### Example 1

**Input:** `n = 1`  
**Output:** `"foobar"`  
**Explanation:** There are two threads being fired asynchronously. One of them calls `foo()`, while the other calls `bar()`. "foobar" is being output 1 time.

### Example 2

**Input:** `n = 2`  
**Output:** `"foobarfoobar"`  
**Explanation:** "foobar" is being output 2 times.

### Constraints

- $1 <= n <= 1000$

### Explanation

1. **Initialization**: The `FooBar` class is initialized with a `Barrier` that ensures both threads synchronize at specific points.
2. **foo Method**:
   - For each iteration, the `foo` method prints "foo".
   - It then waits at the barrier until the `bar` method reaches the same point.
3. **bar Method**:
   - For each iteration, the `bar` method waits at the barrier until the `foo` method has printed "foo".
   - It then prints "bar".
4. **Thread Execution**:
   - Two threads are created and started: one for `foo` and one for `bar`.
   - The threads are joined to ensure they complete execution.

This ensures that "foo" is always printed before "bar" in each iteration, resulting in the output "foobar" repeated `n` times.

## Python Solution

```python
from threading import Barrier

class FooBar:
    def __init__(self, n):
        self.n = n
        self.barrier = Barrier(2)

    def foo(self, printFoo):
        for i in range(self.n):
            printFoo()
            self.barrier.wait()

    def bar(self, printBar):
        for i in range(self.n):
            self.barrier.wait()
            printBar()

# Helper functions to simulate the print
def printFoo():
    print("foo", end='')

def printBar():
    print("bar", end='')

# Example usage:
n = 2
foo_bar = FooBar(n)

from threading import Thread

threadA = Thread(target=foo_bar.foo, args=(printFoo,))
threadB = Thread(target=foo_bar.bar, args=(printBar,))

threadA.start()
threadB.start()

threadA.join()
threadB.join()
```

Sure, here are the solutions for the problem in C++, Java, and JavaScript.

### C++ Solution

```cpp
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>

class FooBar {
private:
    int n;
    std::mutex mtx;
    std::condition_variable cv;
    bool foo_turn;

public:
    FooBar(int n) {
        this->n = n;
        foo_turn = true;
    }

    void foo(std::function<void()> printFoo) {
        for (int i = 0; i < n; i++) {
            std::unique_lock<std::mutex> lock(mtx);
            cv.wait(lock, [this](){ return foo_turn; });
            printFoo();
            foo_turn = false;
            cv.notify_one();
        }
    }

    void bar(std::function<void()> printBar) {
        for (int i = 0; i < n; i++) {
            std::unique_lock<std::mutex> lock(mtx);
            cv.wait(lock, [this](){ return !foo_turn; });
            printBar();
            foo_turn = true;
            cv.notify_one();
        }
    }
};

void printFoo() {
    std::cout << "foo";
}

void printBar() {
    std::cout << "bar";
}

int main() {
    int n = 2;
    FooBar fooBar(n);

    std::thread threadA(&FooBar::foo, &fooBar, printFoo);
    std::thread threadB(&FooBar::bar, &fooBar, printBar);

    threadA.join();
    threadB.join();

    return 0;
}
```

### Java Solution

```java
import java.util.concurrent.Semaphore;

class FooBar {
    private int n;
    private Semaphore fooSemaphore = new Semaphore(1);
    private Semaphore barSemaphore = new Semaphore(0);

    public FooBar(int n) {
        this.n = n;
    }

    public void foo(Runnable printFoo) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            fooSemaphore.acquire();
            printFoo.run();
            barSemaphore.release();
        }
    }

    public void bar(Runnable printBar) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            barSemaphore.acquire();
            printBar.run();
            fooSemaphore.release();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        int n = 2;
        FooBar fooBar = new FooBar(n);

        Thread threadA = new Thread(() -> {
            try {
                fooBar.foo(() -> System.out.print("foo"));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread threadB = new Thread(() -> {
            try {
                fooBar.bar(() -> System.out.print("bar"));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        threadA.start();
        threadB.start();

        threadA.join();
        threadB.join();
    }
}
```

### JavaScript Solution

```javascript
class FooBar {
  constructor(n) {
    this.n = n;
    this.fooTurn = true;
    this.lock = new Promise((resolve) => (this.resolveFoo = resolve));
  }

  async foo(printFoo) {
    for (let i = 0; i < this.n; i++) {
      await this.lock;
      printFoo();
      this.fooTurn = false;
      this.lock = new Promise((resolve) => (this.resolveBar = resolve));
      this.resolveBar();
    }
  }

  async bar(printBar) {
    for (let i = 0; i < this.n; i++) {
      while (this.fooTurn) {
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
      printBar();
      this.fooTurn = true;
      this.lock = new Promise((resolve) => (this.resolveFoo = resolve));
      this.resolveFoo();
    }
  }
}

const n = 2;
const fooBar = new FooBar(n);

function printFoo() {
  process.stdout.write("foo");
}

function printBar() {
  process.stdout.write("bar");
}

Promise.all([fooBar.foo(printFoo), fooBar.bar(printBar)]);
```

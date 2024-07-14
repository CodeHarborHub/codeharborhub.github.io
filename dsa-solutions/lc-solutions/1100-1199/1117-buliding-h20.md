---
id: building-h20
title: Building-H2o
sidebar_label: 1117 - Building-H2o
  - Leetcode
---

## Problem Statement

There are two kinds of threads: oxygen and hydrogen. Your goal is to group these threads to form water molecules.

There is a barrier where each thread has to wait until a complete molecule can be formed. Hydrogen and oxygen threads will be given `releaseHydrogen` and `releaseOxygen` methods respectively, which will allow them to pass the barrier. These threads should pass the barrier in groups of three, and they must immediately bond with each other to form a water molecule. You must guarantee that all the threads from one molecule bond before any other threads from the next molecule do.

## Examples

### Example 1

- Input: `water = "HOH"`
- Output: "HHO"
- Explanation: "HOH" and "OHH" are also valid answers.

### Example 2

- Input: `water = "OOHHHH"`
- Output: "HHOHHO"
- Explanation: "HOHHHO", "OHHHHO", "HHOHOH", "HOHHOH", "OHHHOH", "HHOOHH", "HOHOHH" and "OHHOHH" are also valid answers.

## Constraints

- $3 * n == water.length$
- $1 <= n <= 20$
- water[i] is either 'H' or 'O'.
- $There will be exactly 2 * n 'H' in water.$
- There will be exactly n 'O' in water.

## Algorithm

1. Use semaphores to control the release of hydrogen and oxygen threads.
2. A barrier is used to ensure that the threads only proceed when the necessary number of hydrogen and oxygen threads have arrived.
3. Count the number of hydrogen and oxygen threads, ensuring that hydrogen threads only proceed when there are enough oxygen threads and vice versa.

## Python Solution

```python
from threading import Semaphore, Barrier

class H2O:
    def __init__(self):
        self.h_semaphore = Semaphore(2)
        self.o_semaphore = Semaphore(1)
        self.barrier = Barrier(3)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self.h_semaphore.acquire()
        self.barrier.wait()
        releaseHydrogen()
        self.h_semaphore.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        self.o_semaphore.acquire()
        self.barrier.wait()
        releaseOxygen()
        self.o_semaphore.release()
```

## C++ Solution

```cpp
#include <iostream>
#include <functional>
#include <thread>
#include <mutex>
#include <condition_variable>

class H2O {
private:
    std::mutex mtx;
    std::condition_variable cv;
    int hydrogenCount = 0;
    int oxygenCount = 0;

public:
    H2O() {}

    void hydrogen(std::function<void()> releaseHydrogen) {
        std::unique_lock<std::mutex> lock(mtx);
        cv.wait(lock, [this] { return hydrogenCount < 2; });
        hydrogenCount++;
        releaseHydrogen();
        if (hydrogenCount == 2 && oxygenCount == 1) {
            hydrogenCount = 0;
            oxygenCount = 0;
            cv.notify_all();
        } else {
            cv.wait(lock, [this] { return hydrogenCount == 0; });
        }
    }

    void oxygen(std::function<void()> releaseOxygen) {
        std::unique_lock<std::mutex> lock(mtx);
        cv.wait(lock, [this] { return oxygenCount < 1; });
        oxygenCount++;
        releaseOxygen();
        if (hydrogenCount == 2 && oxygenCount == 1) {
            hydrogenCount = 0;
            oxygenCount = 0;
            cv.notify_all();
        } else {
            cv.wait(lock, [this] { return oxygenCount == 0; });
        }
    }
};
```

## Java Solution

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;

class H2O {
    private Semaphore hSemaphore = new Semaphore(2);
    private Semaphore oSemaphore = new Semaphore(1);
    private CyclicBarrier barrier = new CyclicBarrier(3);

    public H2O() {}

    public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {
        hSemaphore.acquire();
        try {
            barrier.await();
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
        releaseHydrogen.run();
        hSemaphore.release();
    }

    public void oxygen(Runnable releaseOxygen) throws InterruptedException {
        oSemaphore.acquire();
        try {
            barrier.await();
        } catch (BrokenBarrierException e) {
            e.printStackTrace();
        }
        releaseOxygen.run();
        oSemaphore.release();
    }
}
```

## JavaScript Solution

```javascript
class H2O {
  constructor() {
    this.hSemaphore = new Semaphore(2);
    this.oSemaphore = new Semaphore(1);
    this.barrier = new Barrier(3);
  }

  async hydrogen(releaseHydrogen) {
    await this.hSemaphore.acquire();
    await this.barrier.wait();
    releaseHydrogen();
    this.hSemaphore.release();
  }

  async oxygen(releaseOxygen) {
    await this.oSemaphore.acquire();
    await this.barrier.wait();
    releaseOxygen();
    this.oSemaphore.release();
  }
}

class Semaphore {
  constructor(count) {
    this.count = count;
    this.queue = [];
  }

  acquire() {
    if (this.count > 0) {
      this.count--;
      return Promise.resolve();
    } else {
      return new Promise((resolve) => this.queue.push(resolve));
    }
  }

  release() {
    if (this.queue.length > 0) {
      const resolve = this.queue.shift();
      resolve();
    } else {
      this.count++;
    }
  }
}

class Barrier {
  constructor(parties) {
    this.parties = parties;
    this.count = 0;
    this.resolves = [];
  }

  wait() {
    this.count++;
    if (this.count === this.parties) {
      this.resolves.forEach((resolve) => resolve());
      this.resolves = [];
      this.count = 0;
      return Promise.resolve();
    } else {
      return new Promise((resolve) => this.resolves.push(resolve));
    }
  }
}
```

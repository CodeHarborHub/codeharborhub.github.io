---
id: print-zero-even-odd
title: Print Zero Even Odd
sidebar_label: 1116 - Print Zero Even Odd
  - Leetcode
---

## Problem Statement

You have a function `printNumber` that can be called with an integer parameter and prints it to the console. You are given an instance of the class `ZeroEvenOdd` that has three functions: `zero`, `even`, and `odd`. The same instance of `ZeroEvenOdd` will be passed to three different threads:

- Thread A: calls `zero()` that should only output 0's.
- Thread B: calls `even()` that should only output even numbers.
- Thread C: calls `odd()` that should only output odd numbers.

Modify the given class to output the series "010203040506..." where the length of the series must be `2n`.

## Examples

### Example 1

- Input: `n = 2`
- Output: "0102"
- Explanation: There are three threads being fired asynchronously. One of them calls `zero()`, the other calls `even()`, and the last one calls `odd()`. "0102" is the correct output.

### Example 2

- Input: `n = 5`
- Output: "0102030405"

## Constraints

- $1 <= n <= 1000$

## Algorithm

1. Initialize three semaphores: one for zero, one for even, and one for odd. Initially, the zero semaphore is available, while the even and odd semaphores are not.
2. The `zero` method should:
   - Print `0`.
   - Alternate between enabling the odd and even semaphores.
3. The `even` method should:
   - Wait until its semaphore is available.
   - Print the next even number.
   - Enable the zero semaphore.
4. The `odd` method should:
   - Wait until its semaphore is available.
   - Print the next odd number.
   - Enable the zero semaphore.

## Python Solution

```python
from threading import Semaphore

class ZeroEvenOdd:
    def __init__(self, n):
        self.n = n
        self.zero_semaphore = Semaphore(1)
        self.even_semaphore = Semaphore(0)
        self.odd_semaphore = Semaphore(0)
        self.current_number = 1

    def zero(self, printNumber):
        for _ in range(self.n):
            self.zero_semaphore.acquire()
            printNumber(0)
            if self.current_number % 2 == 1:
                self.odd_semaphore.release()
            else:
                self.even_semaphore.release()

    def even(self, printNumber):
        for _ in range(1, self.n // 2 + 1):
            self.even_semaphore.acquire()
            printNumber(self.current_number)
            self.current_number += 1
            self.zero_semaphore.release()

    def odd(self, printNumber):
        for _ in range((self.n + 1) // 2):
            self.odd_semaphore.acquire()
            printNumber(self.current_number)
            self.current_number += 1
            self.zero_semaphore.release()
```

## C++ Solution

```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>

class ZeroEvenOdd {
private:
    int n;
    int current_number;
    std::binary_semaphore zero_semaphore{1};
    std::binary_semaphore even_semaphore{0};
    std::binary_semaphore odd_semaphore{0};

public:
    ZeroEvenOdd(int n) : n(n), current_number(1) {}

    void zero(std::function<void(int)> printNumber) {
        for (int i = 0; i < n; ++i) {
            zero_semaphore.acquire();
            printNumber(0);
            if (current_number % 2 == 1) {
                odd_semaphore.release();
            } else {
                even_semaphore.release();
            }
        }
    }

    void even(std::function<void(int)> printNumber) {
        for (int i = 2; i <= n; i += 2) {
            even_semaphore.acquire();
            printNumber(current_number++);
            zero_semaphore.release();
        }
    }

    void odd(std::function<void(int)> printNumber) {
        for (int i = 1; i <= n; i += 2) {
            odd_semaphore.acquire();
            printNumber(current_number++);
            zero_semaphore.release();
        }
    }
};

void printNumber(int number) {
    std::cout << number;
}

int main() {
    int n = 5;
    ZeroEvenOdd zeroEvenOdd(n);

    std::thread t1(&ZeroEvenOdd::zero, &zeroEvenOdd, printNumber);
    std::thread t2(&ZeroEvenOdd::even, &zeroEvenOdd, printNumber);
    std::thread t3(&ZeroEvenOdd::odd, &zeroEvenOdd, printNumber);

    t1.join();
    t2.join();
    t3.join();

    return 0;
}
```

## Java Solution

```java
import java.util.concurrent.Semaphore;

class ZeroEvenOdd {
    private int n;
    private int currentNumber = 1;
    private Semaphore zeroSemaphore = new Semaphore(1);
    private Semaphore evenSemaphore = new Semaphore(0);
    private Semaphore oddSemaphore = new Semaphore(0);

    public ZeroEvenOdd(int n) {
        this.n = n;
    }

    public void zero(IntConsumer printNumber) throws InterruptedException {
        for (int i = 0; i < n; i++) {
            zeroSemaphore.acquire();
            printNumber.accept(0);
            if (currentNumber % 2 == 1) {
                oddSemaphore.release();
            } else {
                evenSemaphore.release();
            }
        }
    }

    public void even(IntConsumer printNumber) throws InterruptedException {
        for (int i = 2; i <= n; i += 2) {
            evenSemaphore.acquire();
            printNumber.accept(currentNumber++);
            zeroSemaphore.release();
        }
    }

    public void odd(IntConsumer printNumber) throws InterruptedException {
        for (int i = 1; i <= n; i += 2) {
            oddSemaphore.acquire();
            printNumber.accept(currentNumber++);
            zeroSemaphore.release();
        }
    }
}

@FunctionalInterface
interface IntConsumer {
    void accept(int value);
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        int n = 5;
        ZeroEvenOdd zeroEvenOdd = new ZeroEvenOdd(n);

        Thread t1 = new Thread(() -> {
            try {
                zeroEvenOdd.zero(value -> System.out.print(value));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                zeroEvenOdd.even(value -> System.out.print(value));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread t3 = new Thread(() -> {
            try {
                zeroEvenOdd.odd(value -> System.out.print(value));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        t1.start();
        t2.start();
        t3.start();

        t1.join();
        t2.join();
        t3.join();
    }
}
```

## JavaScript Solution

```javascript
class ZeroEvenOdd {
  constructor(n) {
    this.n = n;
    this.zeroTurn = true;
    this.currentNumber = 1;
    this.zeroSemaphore = new Promise((resolve) => (this.resolveZero = resolve));
    this.evenSemaphore = new Promise((resolve) => (this.resolveEven = resolve));
    this.oddSemaphore = new Promise((resolve) => (this.resolveOdd = resolve));
  }

  async zero(printNumber) {
    for (let i = 0; i < this.n; i++) {
      await this.zeroSemaphore;
      printNumber(0);
      this.zeroTurn = false;
      if (this.currentNumber % 2 === 1) {
        this.resolveOdd();
        this.oddSemaphore = new Promise(
          (resolve) => (this.resolveOdd = resolve)
        );
      } else {
        this.resolveEven();
        this.evenSemaphore = new Promise(
          (resolve) => (this.resolveEven = resolve)
        );
      }
    }
  }

  async even(printNumber) {
    for (let i = 2; i <= this.n; i += 2) {
      await this.evenSemaphore;
      printNumber(this.currentNumber++);
      this.zeroTurn = true;
      this.resolveZero();
      this.zeroSemaphore = new Promise(
        (resolve) => (this.resolveZero = resolve)
      );
    }
  }

  async odd(printNumber) {
    for (let i = 1; i <= this.n; i += 2) {
      await this.oddSemaphore;
      printNumber(this.currentNumber++);
      this.zeroTurn = true;
      this.resolveZero();
      this.zeroSemaphore = new Promise(
        (resolve) => (this.resolveZero = resolve)
      );
    }
  }
}

function printNumber(number) {
  process.stdout.write(number.toString());
}

const n = 5;
const zeroEvenOdd = new ZeroEvenOdd(n);

Promise.all([
  zeroEvenOdd.zero(printNumber),
  zeroEvenOdd.even(printNumber),
  zeroEvenOdd.odd(printNumber),
]);
```

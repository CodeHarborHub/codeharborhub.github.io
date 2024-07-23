---
id: lesson-2
title: "Deadlocks"
sidebar_label: Deadlocks
sidebar_position: 2
description: "Learn Deadlocks in C++"
tags: [courses,Advance-level,Introduction]
---   


#### Avoiding Race Conditions and Deadlocks

**Race Conditions** occur when multiple threads access shared resources concurrently without proper synchronization, leading to unpredictable results.

**Deadlocks** occur when two or more threads are waiting for each other to release resources, causing a standstill.

##### Tips to Avoid Race Conditions:
- Use mutexes or other synchronization primitives to protect shared resources.
- Minimize the scope of locks to reduce contention.

##### Tips to Avoid Deadlocks:
- Always lock resources in the same order.
- Use timeout-based locking to detect potential deadlocks.

##### Example: Avoiding Deadlock

```cpp
#include <iostream>
#include <thread>
#include <mutex>

std::mutex mtx1, mtx2;

void task1() {
    std::lock(mtx1, mtx2);
    std::lock_guard<std::mutex> lg1(mtx1, std::adopt_lock);
    std::lock_guard<std::mutex> lg2(mtx2, std::adopt_lock);
    std::cout << "Task 1 completed." << std::endl;
}

void task2() {
    std::lock(mtx1, mtx2);
    std::lock_guard<std::mutex> lg1(mtx1, std::adopt_lock);
    std::lock_guard<std::mutex> lg2(mtx2, std::adopt_lock);
    std::cout << "Task 2 completed." << std::endl;
}

int main() {
    std::thread t1(task1);
    std::thread t2(task2);

    t1.join();
    t2.join();

    return 0;
}
```

**Output:**
```
Task 1 completed.
Task 2 completed.
```


:::tip
- **Thread Management**: Ensure threads are properly managed using `join()` to avoid detaching issues.
- **Synchronization**: Use the appropriate synchronization primitive based on your needs (e.g., `mutex`, `condition_variable`).
- **Avoid Race Conditions**: Always protect shared resources with locks.
- **Avoid Deadlocks**: Lock resources in a consistent order and use timeout mechanisms when appropriate.
:::
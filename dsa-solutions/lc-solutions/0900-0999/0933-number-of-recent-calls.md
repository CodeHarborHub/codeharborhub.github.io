---
id: number-of-recent-calls
title: Number Of Recent Calls
sidebar_label: 0930-  Number Of Recent Calls
tags:
  - Leet code
description: "Solution to leetocde 933"
---

### Problem Statement

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()`: Initializes the counter with zero recent requests.
- `int ping(int t)`: Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that have happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is guaranteed that every call to `ping` uses a strictly larger value of `t` than the previous call.

### Example:

```plaintext
Input
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]

Output
[null, 1, 2, 3, 3]

Explanation:
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```

## Constraints:

- $`1 <= t <= 10^9`$
- $Each test case will call `ping` with strictly increasing values of `t`.$
- $At most 10^4 calls will be made to `ping`.$

### Algorithm

1. **Initialization**: Each implementation initializes a list (`records` in Python, `std::vector` in C++, `ArrayList` in Java, and array in JavaScript) to store timestamps and a `start` index to track the beginning of the valid range.

2. **`ping` Method**:
   - Appends the current timestamp to `records`.
   - Checks and updates `start` to maintain the invariant that timestamps within the last 3000 milliseconds are within the range `[start, end]`.
   - Returns the number of valid timestamps (from `start` to end of `records`).

### Python Implementation

```python
class RecentCounter:
    def __init__(self):
        self.records = []
        self.start = 0

    def ping(self, t: int) -> int:
        self.records.append(t)
        while self.records[self.start] < t - 3000:
            self.start += 1
        return len(self.records) - self.start
```

### C++ Implementation

```cpp
#include <vector>

class RecentCounter {
private:
    std::vector<int> records;
    int start;
public:
    RecentCounter() {
        start = 0;
    }

    int ping(int t) {
        records.push_back(t);
        while (records[start] < t - 3000) {
            start++;
        }
        return records.size() - start;
    }
};
```

### Java Implementation

```java
import java.util.ArrayList;
import java.util.List;

class RecentCounter {
    private List<Integer> records;
    private int start;

    public RecentCounter() {
        records = new ArrayList<>();
        start = 0;
    }

    public int ping(int t) {
        records.add(t);
        while (records.get(start) < t - 3000) {
            start++;
        }
        return records.size() - start;
    }
}
```

### JavaScript Implementation

```javascript
class RecentCounter {
  constructor() {
    this.records = [];
    this.start = 0;
  }

  ping(t) {
    this.records.push(t);
    while (this.records[this.start] < t - 3000) {
      this.start++;
    }
    return this.records.length - this.start;
  }
}
```

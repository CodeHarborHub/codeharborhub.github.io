---
id: square-root
title: Square Root
sidebar_label: 9 Square Root
tags:
- Math
- Binary Search
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of finding the square root of a given integer using various programming languages."
---

## Problem

Given an integer `x`, find the square root of `x`. If `x` is not a perfect square, then return the floor value of √x.

### Examples

**Example 1:**

```
Input: x = 5
Output: 2
Explanation: Since 5 is not a perfect square, the floor of the square root of 5 is 2.
```

**Example 2:**

```
Input: x = 4
Output: 2
Explanation: Since 4 is a perfect square, its square root is 2.
```

### Your Task

You don't need to read input or print anything. The task is to complete the function `floorSqrt()` which takes `x` as the input parameter and returns its square root. Note: Try solving the question without using the sqrt function. The value of `x` ≥ 0.

**Expected Time Complexity:** O(log N)  
**Expected Auxiliary Space:** O(1)

**Constraints**
- 1 ≤ x ≤ 10^7

## Solution

### Intuition & Approach

To find the square root of a number without using the built-in `sqrt` function, we can use binary search. This approach leverages the fact that the square root of `x` must lie between `0` and `x`. By repeatedly narrowing down the range using binary search, we can efficiently find the floor value of the square root.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    def floorSqrt(self, x: int) -> int:
        if x == 0 or x == 1:
            return x
        start, end = 1, x
        ans = 0
        while start <= end:
            mid = (start + end) // 2
            if mid * mid == x:
                return mid
            if mid * mid < x:
                start = mid + 1
                ans = mid
            else:
                end = mid - 1
        return ans
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
class Solution {
    long floorSqrt(long x) {
        if (x == 0 || x == 1) {
            return x;
        }
        long start = 1, end = x, ans = 0;
        while (start <= end) {
            long mid = (start + end) / 2;
            if (mid * mid == x) {
                return mid;
            }
            if (mid * mid < x) {
                start = mid + 1;
                ans = mid;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
class Solution {
public:
    long long int floorSqrt(long long int x) {
        if (x == 0 || x == 1)
            return x;
        long long int start = 1, end = x, ans = 0;
        while (start <= end) {
            long long int mid = (start + end) / 2;
            if (mid * mid == x)
                return mid;
            if (mid * mid < x) {
                start = mid + 1;
                ans = mid;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class Solution {
    floorSqrt(x) {
        if (x === 0 || x === 1) {
            return x;
        }
        let start = 1, end = x, ans = 0;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (mid * mid === x) {
                return mid;
            }
            if (mid * mid < x) {
                start = mid + 1;
                ans = mid;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class Solution {
    floorSqrt(x: number): number {
        if (x === 0 || x === 1) {
            return x;
        }
        let start = 1, end = x, ans = 0;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (mid * mid === x) {
                return mid;
            }
            if (mid * mid < x) {
                start = mid + 1;
                ans = mid;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
}
```

  </TabItem>
</Tabs>

## Complexity Analysis

The provided solutions efficiently find the floor value of the square root of a given integer `x` using binary search. This approach ensures a time complexity of O(log N) and an auxiliary space complexity of O(1). The algorithms are designed to handle large values of `x` up to 10^7 efficiently without relying on built-in square root functions.

**Time Complexity:** O(log N)  
**Auxiliary Space:** O(1)

---

## References

- **GeeksforGeeks Problem:** [Square root](https://www.geeksforgeeks.org/problems/square-root/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
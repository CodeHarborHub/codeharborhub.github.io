---

id: power-of-two
title: Power of Two
difficulty: Easy
sidebar_label: 0231-Power-of-Two
tags:
  - Math
  - Bit Manipulation
  - LeetCode Easy
---

## Problem Description
Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.

### Example
**Example 1:**
```plaintext
Input: n = 1
Output: true
Explanation: 2^0 = 1
```

**Example 2:**
```plaintext
Input: n = 16
Output: true
Explanation: 2^4 = 16
```

**Example 3:**
```plaintext
Input: n = 3
Output: false
```

**Example 4:**
```plaintext
Input: n = 4
Output: true
```

**Example 5:**
```plaintext
Input: n = 5
Output: false
```

### Constraints
- `-2^31 <= n <= 2^31 - 1`

## Solution Approach

### Approach Overview
To determine if a number `n` is a power of two, we can use bit manipulation. A number is a power of two if it has exactly one `1` bit in its binary representation. For example:
- `2` in binary is `10`
- `4` in binary is `100`
- `8` in binary is `1000`

If `n` is a power of two, `n & (n - 1)` should be `0`. This is because subtracting `1` from a power of two flips all bits after the rightmost `1` (including the rightmost `1` itself).

### Detailed Steps
1. Check if `n` is greater than `0`.
2. Use the bitwise AND operation `n & (n - 1)`.
3. If the result is `0`, then `n` is a power of two.

## Code Examples

### C++
```cpp
class Solution {
public:
    bool isPowerOfTwo(int n) {
        // A number n is a power of two if:
        // 1. n is greater than 0
        // 2. n & (n - 1) is equal to 0
        return n > 0 && (n & (n - 1)) == 0;
    }
};
```

### Python
```python
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        # A number n is a power of two if:
        # 1. n is greater than 0
        # 2. n & (n - 1) is equal to 0
        return n > 0 and (n & (n - 1)) == 0
```

### Java
```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        // A number n is a power of two if:
        // 1. n is greater than 0
        // 2. n & (n - 1) is equal to 0
        return n > 0 && (n & (n - 1)) == 0;
    }
}
```

### C
```c
#include <stdbool.h>

bool isPowerOfTwo(int n) {
    // A number n is a power of two if:
    // 1. n is greater than 0
    // 2. n & (n - 1) is equal to 0
    return n > 0 && (n & (n - 1)) == 0;
}
```

## Complexity

- **Time Complexity**: `O(1)`, because the number of operations is constant and does not depend on the size of the input.
- **Space Complexity**: `O(1)`, because no additional space is used beyond a few integer variables.
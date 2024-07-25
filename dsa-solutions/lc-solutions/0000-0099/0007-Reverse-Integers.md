---
id: reverse-integer
title: Reverse Integer(LeetCode)
sidebar_label: 0007-Reverse Integer
tags: 
    - Math
    - Simulation
description: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
sidebar_position: 7
---

## Problem Statement
Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

### Examples

**Example 1:**

```
Input: x = 123
Output: 321
```

**Example 2:**

```
Input: x = -123
Output: -321
```

**Example 3:**

```
Input: x = 120
Output: 21
```

### Constraints

- `-2^31 <= x <= 2^31 - 1`

## Solution

### Approach 1: Pop and Push Digits & Check before Overflow

#### Intuition

We can build up the reverse integer one digit at a time while checking for overflow.

#### Algorithm

1. Repeatedly "pop" the last digit off of `x` and "push" it to the back of `rev`.
2. Before pushing, check if appending another digit would cause overflow.

#### C++ Implementation

```cpp
class Solution {
public:
    int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (rev > INT_MAX / 10 || (rev == INT_MAX / 10 && pop > 7))
                return 0;
            if (rev < INT_MIN / 10 || (rev == INT_MIN / 10 && pop < -8))
                return 0;
            rev = rev * 10 + pop;
        }
        return rev;
    }
};
```

#### Java Implementation

```java
class Solution {
    public int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (rev > Integer.MAX_VALUE / 10 || (rev == Integer.MAX_VALUE / 10 && pop > 7))
                return 0;
            if (rev < Integer.MIN_VALUE / 10 || (rev == Integer.MIN_VALUE / 10 && pop < -8))
                return 0;
            rev = rev * 10 + pop;
        }
        return rev;
    }
}
```

#### Python Implementation

```python
def reverse(x: int) -> int:
    rev = 0
    while x != 0:
        pop = x % 10
        x //= 10
        if rev > 0 and (rev > 2**31 // 10 or (rev == 2**31 // 10 and pop > 7)):
            return 0
        if rev < 0 and (rev < -2**31 // 10 or (rev == -2**31 // 10 and pop < -8)):
            return 0
        rev = rev * 10 + pop
    return rev
```

#### JavaScript Implementation

```javascript
var reverse = function (x) {
    let rev = 0;
    while (x !== 0) {
        let pop = x % 10;
        x = (x - pop) / 10;
        if (
            rev > Math.pow(2, 31) / 10 ||
            (rev == Math.pow(2, 31) / 10 && pop > 7)
        )
            return 0;
        if (
            rev < Math.pow(-2, 31) / 10 ||
            (rev == Math.pow(-2, 31) / 10 && pop < -8)
        )
            return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};
```

#### Python Class Implementation

```python
class Solution:
    def reverse(self, x: int) -> int:
        sign = [1, -1][x < 0]
        rev, x = 0, abs(x)
        while x:
            x, mod = divmod(x, 10)
            rev = rev * 10 + mod
            if rev > 2**31 - 1:
                return 0
        return sign * rev
```

### Complexity Analysis

- **Time Complexity**: $O(log(x))$. There are roughly log10(x) digits in `x`.
- **Space Complexity**: $O(1)$.

### Conclusion

We have successfully solved the "Reverse Integer" problem using a simple approach that reverses the digits of the given integer while handling overflow conditions. This solution provides an efficient way to reverse an integer without the need for any additional data structures.

```
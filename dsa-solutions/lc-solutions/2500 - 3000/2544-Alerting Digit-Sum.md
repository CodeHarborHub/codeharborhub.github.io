---
id: alternatin-digit-sum
title: Alternating Digit Sum
sidebar_label: 2610 Alternating Digit Sum
tags:
  - Array
  - Hash Table
  - LeetCode
  - C++
description: "This is a solution to the Alternating Digit Sum problem on LeetCode."
---

## Problem Description

You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.

Each other digit has an opposite sign to its adjacent digits.

### Examples

**Example 1:**

```

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4

```

**Example 2:**

```
Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1

```


### Constraints

- 1 <= n <= 109
 

### Approach 

We can directly simulate the process as described in the problem.

We define an initial symbol $sign=1$. Starting from the most significant digit, we take out one digit $x$ each time, multiply it by $sign$, add the result to the answer, then negate $sign$, and continue to process the next digit until all digits are processed.

The time complexity is $O(\log n)$, and the space complexity is $O(\log n)$. Here, $n$ is the given number.

#### Python3

```python
class Solution:
    def alternateDigitSum(self, n: int) -> int:
        return sum((-1) ** i * int(x) for i, x in enumerate(str(n)))
```

#### Java

```java
class Solution {
    public int alternateDigitSum(int n) {
        int ans = 0, sign = 1;
        for (char c : String.valueOf(n).toCharArray()) {
            int x = c - '0';
            ans += sign * x;
            sign *= -1;
        }
        return ans;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int alternateDigitSum(int n) {
        int ans = 0, sign = 1;
        for (char c : to_string(n)) {
            int x = c - '0';
            ans += sign * x;
            sign *= -1;
        }
        return ans;
    }
};
```

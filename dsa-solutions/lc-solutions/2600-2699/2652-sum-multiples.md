---
id: sum-multiples
title: Sum Multiples
sidebar_label: 2625 - Sum Multiples
tags:
- Mathematics
- Loops
- Conditions
- Basic Math
- Iteration
- Sum
- Multiples
- Number Theory
description: "This is a solution to the Sum Multiples problem on LeetCode."
---

## Problem Description

Given a positive integer `n`, find the sum of all integers in the range `[1, n]` **inclusive** that are divisible by `3`, `5`, or `7`.

Return an integer denoting the sum of all numbers in the given range satisfying the constraint.

### Examples

**Example 1:**

```
Input: n = 7
Output: 21
Explanation:  Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

```

**Example 2:**

```
Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

```

**Example 2:**

```
Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
```

### Constraints

- `1 <= n <= 103`

### Approach

Traverse from 1 to n and check if they divide by 3 or 5 or 7 completely then add it to sum and return sum

#### Python3

```python
class Solution:
    def sumOfMultiples(self, n: int) -> int:
        s = 0
        for i in range(1, n + 1):
            if i % 3 == 0 or i % 5 == 0 or i % 7 == 0:
                s += i
        return s

```

#### Java

```java
class Solution {
    public int sumOfMultiples(int n) {
        int s=0;
        for(int i=1;i<=n;i++)
        {
            if(i%3==0 || i%5==0 || i%7==0)
            s = s+i;
        }
        return s; 
    }
}
```

#### C++

```cpp
class Solution {
public:
    int sumOfMultiples(int n) {
        int s = 0;
        for (int i = 1; i <= n; ++i) {
            if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
                s += i;
            }
        }
        return s;
    }
};

```

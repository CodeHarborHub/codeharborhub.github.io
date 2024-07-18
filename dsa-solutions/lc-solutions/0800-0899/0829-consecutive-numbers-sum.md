---
id: consecutive-numbers-sum
title: Consecutive Numbers Sum
sidebar_label: 0829-consecutive-numbers-sum
tags:
  - Math
  - Enumeration
description: "This is a solution to consecutive-numbers-sum problem on LeetCode."
---

## Problem Description
Given an integer `n`, return the number of ways you can write `n` as the sum of consecutive positive integers.

### Examples

**Example 1:**

```
Input: n = 5
Output: 2
**Explanation**: 5 = 2 + 3
```

**Example 2:**

```
Input: n = 9
Output: 3
**Explanation:** 9 = 4 + 5 = 2 + 3 + 4
```

**Example 3:**

```
Input:   n = 15
Output: 4
**Explanation:** 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

```

### Constraints

- `1 <= n <= 10^9`


## Solution for Assign Cookies

### Approach:

1- Discard all factors 2 from N.

2- Check all odd number i if N is divided by i.

3- Calculate the count of factors i that N has.

4- Update res *= count.

5- If N==1, we have found all primes and just return res.

6- Otherwise, N will be equal to P and we should do res *= count + 1 where count = 1. 


## Code in Different Languages

### C++

```cpp
class Solution {
public:
    int consecutiveNumbersSum(int N) {
            int res = 1, count;
        while (N % 2 == 0) N /= 2;
        for (int i = 3; i * i <= N; res *= count + 1, i += 2)
            for (count = 0; N % i == 0; N /= i, count++);
        return N == 1 ? res : res * 2;
    }
};
```
### Java

```java
class Solution {
        public int consecutiveNumbersSum(int N) {
        int res = 1, count;
        while (N % 2 == 0) N /= 2;
        for (int i = 3; i * i <= N; i += 2) {
            count = 0;
            while (N % i == 0) {
                N /= i;
                count++;
            }
            res *= count + 1;
        }
        return N == 1 ? res : res * 2;
    }
}


```

### Python

```python
class Solution(object):
    def consecutiveNumbersSum(self, N):
        res = 1
        i = 3
        while N % 2 == 0:
            N /= 2
        while i * i <= N:
            count = 0
            while N % i == 0:
                N /= i
                count += 1
            res *= count + 1
            i += 2
        return res if N == 1 else res * 2
```

## Complexity Analysis

### Time Complexity: O(logN)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Consecutive Numbers Sum](https://leetcode.com/problems/consecutive-numbers-sum/)


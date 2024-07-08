---
id: perfect-number
title: Perfect Number
level: easy
sidebar_label: Perfect Number
tags:
  - Math
  - Java
  - C++
description: "This document provides solutions for the Perfect Number problem."
---

## Problem Statement

A **perfect number** is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A positive integer `n` is given, and we need to determine whether it is a perfect number.

**Example 1:**

Input: `num = 28`

Output: `true`

Explanation: 28 = 1 + 2 + 4 + 7 + 14

**Example 2:**

Input: `num = 6`

Output: `true`

Explanation: 6 = 1 + 2 + 3

**Example 3:**

Input: `num = 496`

Output: `true`

**Example 4:**

Input: `num = 8128`

Output: `true`

**Example 5:**

Input: `num = 2`

Output: `false`

**Constraints:**

- `1 <= num <= 10^8`

## Solutions

### Approach

To determine if a number is perfect, we can follow these steps:

1. **Initialize Sum**:
   - Initialize a variable to store the sum of divisors.

2. **Find Divisors**:
   - Iterate from 1 to `num/2` and add all divisors of `num` to the sum.

3. **Check Sum**:
   - Compare the sum of divisors with the original number. If they are equal, the number is perfect.

### Java

```java
class Solution {
    public boolean checkPerfectNumber(int num) {
        if (num <= 1) return false;
        int sum = 1;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                sum += i;
                if (i != num / i) {
                    sum += num / i;
                }
            }
        }
        return sum == num;
    }
}
```

### C++

```cpp
class Solution {
public:
    bool checkPerfectNumber(int num) {
        if (num <= 1) return false;
        int sum = 1;
        for (int i = 2; i <= sqrt(num); i++) {
            if (num % i == 0) {
                sum += i;
                if (i != num / i) {
                    sum += num / i;
                }
            }
        }
        return sum == num;
    }
};
```

### Python

```python
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False
        sum_divisors = 1
        for i in range(2, int(num ** 0.5) + 1):
            if num % i == 0:
                sum_divisors += i
                if i != num // i:
                    sum_divisors += num // i
        return sum_divisors == num
```

These solutions efficiently determine if a number is perfect by iterating through potential divisors up to the square root of the number, ensuring an optimal time complexity.
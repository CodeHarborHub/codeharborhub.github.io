---
id: strictly-palindromic-number
title: Strictly Palindromic Number
level: medium
sidebar_label: Strictly Palindromic Number
tags:
  - Math
  - Palindrome
  - Java
description: "This document provides solutions for the Strictly Palindromic Number problem."
---

## Problem Statement

An integer `n` is strictly palindromic if, for every base `b` between 2 and `n - 2` (inclusive), the string representation of the integer `n` in base `b` is palindromic.

Given an integer `n`, return `true` if `n` is strictly palindromic and `false` otherwise.

A string is palindromic if it reads the same forward and backward.

**Example 1:**

Input: `n = 9`  
Output: `false`

Explanation:  
In base 2: 9 = 1001 (base 2), which is palindromic.  
In base 3: 9 = 100 (base 3), which is not palindromic.  
Therefore, 9 is not strictly palindromic so we return false.  
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

**Example 2:**

Input: `n = 4`  
Output: `false`

Explanation:  
We only consider base 2: 4 = 100 (base 2), which is not palindromic.  
Therefore, we return false.

**Constraints:**

- `4 <= n <= 10^5`

## Solutions

### Intuition

To determine if a number `n` is strictly palindromic, we need to check its representation in all bases from 2 to `n - 2`. If any representation is not palindromic, then `n` is not strictly palindromic.

### Approach

1. **Check Base Representation:**
   - Convert the number `n` to each base from 2 to `n - 2`.
   - Check if the representation in each base is palindromic.

2. **Early Termination:**
   - If any base representation is not palindromic, return `false`.

### Java 

```java
class Solution {
    public boolean isStrictlyPalindromic(int n) {
        return false;
    }
}
```
### Python 

```Python

class Solution:
    def isStrictlyPalindromic(self, n: int) -> bool:
        return False

```

### Conclusion
For the given problem constraints, the function always returns false. This is because it's mathematically impossible for any number greater than 4 to be strictly palindromic according to the given definition.

---
id: three-divisors
title:  Three-divisors
sidebar_label: 1952-Three-Divisors
tags:
  - Math
  - Enumeration
  - Number Theory
---

## Problem Description
Given an integer `n`, return `true` if `n` has exactly three positive divisors. Otherwise, return `false`.

An integer `m` is a divisor of `n` if there exists an integer `k` such that `n = k * m`.


### Example

**Example 1:**

```
Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.
```

**Example 2:**
```
Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
```
### Constraints

- `1 <= n <= 104`

## Solution Approach

### Intuition:

To efficiently determine the number that is divisible by 3 integers.


## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    bool isThree(int n) {
        int cnt = 0;
        for(int i=1; i<=n; i++){
            if(n%i==0) cnt++;
        }
        if(cnt==3) return true;
        return false;
    }
};
```
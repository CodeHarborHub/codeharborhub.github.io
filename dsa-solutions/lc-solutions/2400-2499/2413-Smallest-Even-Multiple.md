---
id: smalllest-even-multiple
title:  Smallest Even Multiple
sidebar_label: 2413-Smallest-Even-Multiple
tags:
  - Math
  - Number Theory
---

## Problem Description
Given a positive integer `n`, return the smallest positive integer that is a multiple of both `2` and `n`.


### Example

**Example 1:**


```
Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
```
**Example 2:**
```
Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

```
### Constraints

- `1 <= n <= 150`

## Solution Approach

### Intuition:

To efficiently determine the smallest even multiple
## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    int smallestEvenMultiple(int n) {
        for(int i=1; i<=2*n; i++){
            int multiply = n*i;
            if(multiply%2==0) {
                return multiply;
                break;

            }
        }
        return -1;
    }
};
```
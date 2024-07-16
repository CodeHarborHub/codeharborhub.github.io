---
id: rightmost-different-bit
title: Rightmost Different Bit
sidebar_label: 0106-Rightmost Different Bit
tags:
  - Bit Magic
  - Data Structures
description: "A solution to the problem of finding the rightmost position of the bit which is different in both numbers"
---

In this page, we will solve the problem of finding the rightmost position of the bit which is different in both numbers.

## Problem Description

Given two numbers M and N. The task is to find the position of the rightmost different bit in the binary representation of numbers. If both M and N are the same then return -1 in this case.

### Examples

**Example 1:**

```plaintext
Input: 
M = 11, N = 9
Output: 
2
Explanation: 
Binary representation of the given numbers are: 1011 and 1001, 2nd bit from right is different.
```

**Example 2:**

```plaintext
Input: 
M = 52, N = 4
Output: 
5
Explanation: 
Binary representation of the given numbers are: 110100 and 0100, 5th-bit from right is different.
```

### Constraints

- $1 \leq$ M,N $\leq10^9$

## Solution

### Intuition and Approach

This problem can be solved by using bitwise operations

### Approach: 

1. We will first XOR operation (^) between two integers, it will produce a result where each bit is set to 1 if the corresponding bits of m and n are different, and 0 if they are the same and then the result is stored in res variable
2. If res is 0, it means that m and n are identical and therefore we return -1 to indicate that there is no differing bit.
3. Now, To identify the position of the rightmost bit that is set to 1, the expression res & -res is used. This operation isolates the rightmost 1 bit in res. This works because -res is the two’s complement of res, which flips all bits of res and adds 1.
4. Then we use math.log2(res & -res) which computes the base-2 logarithm of the isolated rightmost 1 bit and gives the zero-based index of the rightmost differing bit.
5. Next we will add 1 converts this index to a one-based position and returned position.
#### Code in Python
```python

class Solution:
  def posOfRightMostDiffBit(self,m,n):
    res = m^n
    if res==0: return -1
    return math.log2(res & -res) + 1
 ```

#### Complexity Analysis

- **Time Complexity:** $O(1)$
- **Space Complexity:** $O(1)$

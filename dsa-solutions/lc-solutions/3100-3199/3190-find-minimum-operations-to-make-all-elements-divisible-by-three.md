---
id: minimum-operations-to-make-all-elements-divisible-by-three
title: Find Minimum Operations to Make All Elements Divisible by Three
level: medium
sidebar_label: Minimum Operations to Make All Elements Divisible by Three
tags:
  - Array
  - Math
  - Java
  - Python
description: "This document provides solutions for the Find Minimum Operations to Make All Elements Divisible by Three problem."
---

## Problem Statement

You are given an integer array `nums`. In one operation, you can add or subtract 1 from any element of `nums`.

Return the minimum number of operations to make all elements of `nums` divisible by 3.

**Example 1:**

Input: `nums = [1, 2, 3, 4]`
Output: `3`

Explanation:
All array elements can be made divisible by 3 using 3 operations:
- Subtract 1 from 1.
- Add 1 to 2.
- Subtract 1 from 4.

**Example 2:**

Input: `nums = [3, 6, 9]`
Output: `0`

**Constraints:**

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Solutions

### Intuition

To make all elements divisible by 3, we need to adjust each element by either adding or subtracting 1 until its remainder when divided by 3 is zero. Each adjustment operation (either adding or subtracting 1) counts as one operation.

### Approach

1. Iterate through each element in the array.
2. For each element, check its remainder when divided by 3.
3. If the remainder is 1 or 2, it means we need one operation to make it divisible by 3 (subtract 1 if the remainder is 1, or add 1 if the remainder is 2).
4. Sum up the number of operations required for each element.

### Implementation

The provided code effectively implements the above approach. Here's the breakdown:

1. **Iteration and Remainder Check:**
   - Iterate through each element in the `nums` array.
   - Check the remainder of each element when divided by 3.
   - Increment the operations counter based on the remainder.

### Java 

```java
class Solution {
    public int minimumOperations(int[] nums) {
        int operations = 0;
        for (int n : nums) {
            if (n % 3 == 1 || n % 3 == 2) {
                operations++;
            }
        }
        return operations;
    }
}
```
### Python

```Python
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        operations = 0
        for n in nums:
            if n % 3 == 1 or n % 3 == 2:
                operations += 1
        return operations

```

### Conclusion 
This implementation efficiently computes the minimum operations required to make all elements of nums divisible by 3 by iterating through the array and counting adjustments needed based on remainders.

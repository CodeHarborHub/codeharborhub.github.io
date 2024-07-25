---
id: special-array-with-x-elements-greater-than-or-equal-x
title: Special Array with X Elements Greater Than or Equal X
level: medium
sidebar_label: Special Array with X Elements Greater Than or Equal X
tags:
  - Array
  - Sorting
  - Counting
  - Java
description: "This document provides solutions for the Special Array with X Elements Greater Than or Equal X problem."
---

## Problem Statement

You are given an array `nums` of non-negative integers. `nums` is considered special if there exists a number `x` such that there are exactly `x` numbers in `nums` that are greater than or equal to `x`.

Notice that `x` does not have to be an element in `nums`.

Return `x` if the array is special, otherwise, return `-1`. It can be proven that if `nums` is special, the value for `x` is unique.

**Example 1:**

Input: `nums = [3,5]`

Output: `2`

Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

**Example 2:**

Input: `nums = [0,0]`

Output: `-1`

Explanation: No numbers fit the criteria for `x`.
- If `x = 0`, there should be 0 numbers >= `x`, but there are 2.
- If `x = 1`, there should be 1 number >= `x`, but there are 0.
- If `x = 2`, there should be 2 numbers >= `x`, but there are 0.
- `x` cannot be greater since there are only 2 numbers in `nums`.

**Example 3:**

Input: `nums = [0,4,3,0,4]`

Output: `3`

Explanation: There are 3 values that are greater than or equal to 3.

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

## Solutions

### Intuition

To solve this problem, we need to determine if there exists a number `x` such that there are exactly `x` elements in the array that are greater than or equal to `x`. We can achieve this by counting the number of elements for each possible value and checking if the condition holds.

### Approach

1. **Counting Frequencies:**
   - Create an array `intArr` to count the occurrences of each element in `nums`.

2. **Cumulative Sum:**
   - Calculate the cumulative sum from the highest value to the lowest to determine how many elements are greater than or equal to each possible value.

3. **Check Condition:**
   - Iterate through the possible values and check if there exists a value `x` where the number of elements greater than or equal to `x` is exactly `x`.

### Java 

```java
class Solution {
    public int specialArray(int[] nums) {
        int val = 0;
        int len = nums.length;
        int[] intArr = new int[1001];
        
        for(int i = 0; i < len; i++) {
            intArr[nums[i]]++;
        }
        
        for(int i = 1000; i >= 0; i--) {
            intArr[i] += val;
            val = intArr[i];
        }
        
        val = -1;
        for(int i = 0; i < 1000; i++) {
            if(intArr[i] == i) {
                val = i;
            }
        }
        
        return val;
    }
    
}
```

### Python

```Python
class Solution:
    def specialArray(self, nums: List[int]) -> int:
        n = len(nums)
        intArr = [0] * 1001
        
        for num in nums:
            if num <= 1000:
                intArr[num] += 1
        
        val = 0
        for i in range(1000, -1, -1):
            intArr[i] += val
            val = intArr[i]
        
        val = -1
        for i in range(1001):
            if intArr[i] == i:
                val = i
                break
        
        return val
```

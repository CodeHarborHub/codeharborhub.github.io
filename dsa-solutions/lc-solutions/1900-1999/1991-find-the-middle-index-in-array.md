---
id: find-the-middle-index-in-array
title: Find The Middle Index In Array
sidebar_label: 1991-find-the-middle-index-in-array
tags:
- Array
- Prefix Sum
description: "This document provides solutions for find the middle index in array."
---

## Problem

Given a `0-indexed` integer array nums, find the **leftmost** middleIndex `(i.e., the smallest amongst all the possible ones)`.

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If `middleIndex == 0`, the left side sum is considered to be `0`. Similarly, if `middleIndex == nums.length - 1`, the right side sum is considered to be `0`.

Return the **leftmost** middleIndex that satisfies the condition, or -1 if there is no such index.

### Examples

**Example 1:**

**Input:** nums = [2,3,-1,8,4]

**Output:** 3

**Explanation**:  The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4

**Example 2:**

**Input:** nums = [1,-1,4]

**Output:** 2

**Explanation**: The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0

**Example 3:**

**Input:** nums = [2,5]

**Output:** -1

**Explanation**: There is no valid middleIndex.

### Constraints

- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## Approach

1. Initialize prefix to 0 and suffix to the sum of all elements in nums.
  
2. Iterate through the elements of nums:

 - For each element, subtract it from suffix.
 - Check if prefix is equal to suffix. If true, return the current
   index i.
 - Add the current element to prefix.

3.  If no such index is found, return -1.

## Solution for Remove Linked List Elements

### Java Solution

```java
class Solution {
  public int findMiddleIndex(int[] nums) {
    int prefix = 0;
    int suffix = Arrays.stream(nums).sum();

    for (int i = 0; i < nums.length; ++i) {
      suffix -= nums[i];
      if (prefix == suffix)
        return i;
      prefix += nums[i];
    }

    return -1;
  }
}
```
### C++ solution

```cpp
class Solution {
 public:
  int findMiddleIndex(vector<int>& nums) {
    int prefix = 0;
    int suffix = accumulate(nums.begin(), nums.end(), 0);

    for (int i = 0; i < nums.size(); ++i) {
      suffix -= nums[i];
      if (prefix == suffix)
        return i;
      prefix += nums[i];
    }

    return -1;
  }
};
```
### Python Solution

```python
class Solution:
  def findMiddleIndex(self, nums: List[int]) -> int:
    prefix = 0
    suffix = sum(nums)

    for i, num in enumerate(nums):
      suffix -= num
      if prefix == suffix:
        return i
      prefix += num

    return -1
```
### Complexity Analysis
**Time Complexity:** O(n)

**Space Complexity:** O(1)

### References
**LeetCode Problem:** find-the-middle-index-in-array



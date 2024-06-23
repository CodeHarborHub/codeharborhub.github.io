---
id: minimum-operations-to-make-binary-array-elements-equal-to-one-ii
title: Minimum Operations to Make Binary Array Elements Equal to One II
sidebar_label: Minimum Operations II
tags:
  - Array
  - Two Pointers
  - Greedy
  - C++
  - Java
  - Python
description: "This document provides solutions for the Minimum Operations to Make Binary Array Elements Equal to One II problem on LeetCode."
---

## Problem Statement

You are given a binary array `nums`.

You can perform the following operation any number of times: choose two indices `L` and `R` such that `0 <= L, R < nums.length` and flip every `0` to `1` and every `1` to `0` in the subarray `nums[L...R]` (inclusive).

Return the minimum number of operations needed to make `nums` contain only `1`s.

**Example 1:**

Input: `nums = [1,1,0,1]`
Output: `1`

Explanation: Flip the element at index 2 (0-indexed) to get `[1,1,1,1]`.

**Example 2:**

Input: `nums = [0,1,1,0]`
Output: `2`

Explanation: Flip the elements at index 0 and 3 (0-indexed) to get `[1,1,1,1]`.

Constraints:
- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.

## Solutions

### Approach

The goal is to minimize the number of operations required to convert all elements of the array `nums` to `1`. The operations allowed involve flipping subarrays of `nums`.

#### Intuition

To achieve this efficiently:
1. **Prefix Sum Calculation**: Compute the prefix sums of `nums` such that `prefix[i]` represents the number of `0`s in `nums[0...i-1]`.
   
2. **Two Pointers Technique**: Use two pointers (`left` and `right`) to determine the range `[L, R]` where flipping would be most effective. This involves:
   - Calculating the total number of `0`s in `nums` initially.
   - Iteratively adjusting the range `[L, R]` to minimize the number of `0`s.

#### Steps

1. **Initialization**: Initialize `left` and `right` pointers at the start of the array. Compute the initial count of `0`s in `nums`.

2. **Iterative Adjustment**: Iterate through possible ranges `[L, R]`:
   - Update the count of `0`s by including `nums[right]` and excluding `nums[left]`.
   - Update the minimum operations required based on the count of `0`s.

3. **Edge Cases**: Handle arrays where all elements are initially `1`.

#### Complexity

- **Time Complexity**: `O(n)` where `n` is the length of `nums`. This is because we iterate through the array with two pointers.
- **Space Complexity**: `O(1)` extra space for variables.

### Implementation (Java)

```java
class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int left = 0, right = 0;
        int countZeros = 0;
        int minOps = Integer.MAX_VALUE;
        
        for (int num : nums) {
            if (num == 0) {
                countZeros++;
            }
        }
        
        int currentOps = countZeros;
        
        while (right < n) {
            if (nums[right] == 0) {
                countZeros--;
            }
            right++;
            
            while (countZeros * 2 <= right - left) {
                if (nums[left] == 0) {
                    countZeros++;
                }
                left++;
            }
            
            minOps = Math.min(minOps, currentOps);
        }
        
        return minOps == Integer.MAX_VALUE ? 0 : minOps;
    }
}
```

### Implementation (Python)

```python
class Solution:
    def minOperations(self, nums):
        n = len(nums)
        left = 0
        right = 0
        countZeros = sum(1 for num in nums if num == 0)
        minOps = float('inf')
        currentOps = countZeros
        
        while right < n:
            if nums[right] == 0:
                countZeros -= 1
            right += 1
            
            while countZeros * 2 <= right - left:
                if nums[left] == 0:
                    countZeros += 1
                left += 1
            
            minOps = min(minOps, currentOps)
        
        return minOps if minOps != float('inf') else 0
```

## Conclusion
This implementation efficiently calculates the minimum operations required to convert the binary array nums into an array containing only 1s using a two-pointer technique. Adjustments can be made according to specific platform requirements or further customization needs.

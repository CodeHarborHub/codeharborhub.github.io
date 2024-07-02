---
id: minimum-number-of-k-consecutive-bit-flips
title: Minimum Number of K Consecutive Bit Flips
sidebar_label: Minimum Number of K Consecutive Bit Flips
tags:
  - Array
  - Greedy
  - Sliding Window
description: "This document provides a solution for the Minimum Number of K Consecutive Bit Flips problem."
---

## Problem Statement

You are given a binary array `nums` and an integer `k`.

A k-bit flip is choosing a subarray of length `k` from `nums` and simultaneously changing every `0` in the subarray to `1`, and every `1` in the subarray to `0`.

Return the minimum number of k-bit flips required so that there is no `0` in the array. If it is not possible, return `-1`.

A subarray is a contiguous part of an array.

**Example 1:**

Input: `nums = [0,1,0]`, `k = 1`

Output: `2`

Explanation: Flip `nums[0]`, then flip `nums[2]`.

**Example 2:**

Input: `nums = [1,1,0]`, `k = 2`

Output: `-1`

Explanation: No matter how we flip subarrays of size 2, we cannot make the array become `[1,1,1]`.

**Example 3:**

Input: `nums = [0,0,0,1,0,1,1,0]`, `k = 3`

Output: `3`

Explanation: 
- Flip `nums[0],nums[1],nums[2]`: `nums` becomes `[1,1,1,1,0,1,1,0]`
- Flip `nums[4],nums[5],nums[6]`: `nums` becomes `[1,1,1,1,1,0,0,0]`
- Flip `nums[5],nums[6],nums[7]`: `nums` becomes `[1,1,1,1,1,1,1,1]`

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= k <= nums.length`

## Solutions

### Approach

To solve this problem, we can use a greedy approach with a sliding window to keep track of the flips. The main idea is to flip the bits only when necessary and use an auxiliary array to record the effect of flips at each position. 

1. **Initialize Variables**:
   - `flipped` to track the cumulative effect of flips.
   - `res` to count the number of flips.
   - `isFlipped` array to record the flips at each index.

2. **Iterate through the Array**:
   - For each element, check if the current position is affected by a previous flip by using the `isFlipped` array.
   - If the current bit needs to be flipped (`flipped` == `nums[i]`), check if flipping is possible.
   - Record the flip and update the counters.

3. **Edge Cases**:
   - If it's not possible to flip because the subarray exceeds the array bounds, return `-1`.

### Java 

```java
class Solution {
    public int minKBitFlips(int[] nums, int k) {
        int n = nums.length, flipped = 0, res = 0;
        int[] isFlipped = new int[n];
        
        for (int i = 0; i < nums.length; ++i) {
            if (i >= k)
                flipped ^= isFlipped[i - k];
            if (flipped == nums[i]) {
                if (i + k > nums.length)
                    return -1;
                isFlipped[i] = 1;
                flipped ^= 1;
                res++;
            }
        }
        return res;
    }
}
```

### Python 
```python
class Solution:
    def minKBitFlips(self, nums: List[int], k: int) -> int:
        n = len(nums)
        flipped = 0
        res = 0
        is_flipped = [0] * n
        
        for i in range(n):
            if i >= k:
                flipped ^= is_flipped[i - k]
            if flipped == nums[i]:
                if i + k > n:
                    return -1
                is_flipped[i] = 1
                flipped ^= 1
                res += 1
        
        return res
```

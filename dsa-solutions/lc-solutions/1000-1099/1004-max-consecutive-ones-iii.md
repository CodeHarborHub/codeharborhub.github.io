---
id: max-consecutive-ones-iii
title: Max Consecutive Ones III
sidebar_label: Max Consecutive Ones III
tags:
  - Array
  - Sliding Window
  - Java
  - Python
  - C++
description: "This document provides solutions for the Max Consecutive Ones III problem on LeetCode."
---

## Problem Statement

Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`s in the array if you can flip at most `k` `0`s.

**Example 1:**

Input: `nums = [1,1,1,0,0,0,1,1,1,1,0]`, `k = 2`

Output: `6`

**Explanation**: [1,1,1,0,0,1,1,1,1,1,1] (flipping 0 and 0)

**Example 2:**

Input: `nums = [0,0,1,1,1,0,0]`, `k = 0`

Output: `3`

**Constraints:**

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.
- `0 <= k <= nums.length`

## Solutions

### Approach

To solve this problem, we can use the sliding window technique to maintain a window of the array that contains at most `k` zeros. Here's how to implement this:

1. **Initialize pointers and counters**:
   - Use two pointers (`left` and `right`) to define the current window.
   - Use a counter to keep track of the number of zeros in the current window.

2. **Expand the window**:
   - Increment the `right` pointer to expand the window.
   - If a zero is encountered, increment the zero counter.

3. **Shrink the window if necessary**:
   - If the zero counter exceeds `k`, increment the `left` pointer until the zero counter is `k` or less.

4. **Track the maximum window size**:
   - Update the maximum window size during each expansion.

### Java

```java
class Solution {
    public int longestOnes(int[] nums, int k) {
        int left = 0, right = 0;
        int maxOnes = 0;
        int zerosCount = 0;

        while (right < nums.length) {
            if (nums[right] == 0) {
                zerosCount++;
            }

            while (zerosCount > k) {
                if (nums[left] == 0) {
                    zerosCount--;
                }
                left++;
            }

            maxOnes = Math.max(maxOnes, right - left + 1);
            right++;
        }

        return maxOnes;
    }
}
```

### Python

```python
from typing import List

class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zeros_count = 0
        max_ones = 0

        for right in range(len(nums)):
            if nums[right] == 0:
                zeros_count += 1

            while zeros_count > k:
                if nums[left] == 0:
                    zeros_count -= 1
                left += 1

            max_ones = max(max_ones, right - left + 1)

        return max_ones
```

### C++

```cpp
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int left = 0, right = 0;
        int maxOnes = 0;
        int zerosCount = 0;

        while (right < nums.size()) {
            if (nums[right] == 0) {
                zerosCount++;
            }

            while (zerosCount > k) {
                if (nums[left] == 0) {
                    zerosCount--;
                }
                left++;
            }

            maxOnes = max(maxOnes, right - left + 1);
            right++;
        }

        return maxOnes;
    }
};
```

### Explanation

- **Initialize Pointers and Counters**:
  - We use `left` and `right` to define our sliding window. `zerosCount` keeps track of the number of zeros within the window.
- **Expand the Window**:
  - We expand the window by moving the `right` pointer to the right.
  - If we encounter a zero, we increment `zerosCount`.
- **Shrink the Window if Necessary**:
  - If `zerosCount` exceeds `k`, we move the `left` pointer to the right until `zerosCount` is less than or equal to `k`.
- **Track the Maximum Window Size**:
  - We update `maxOnes` to the maximum window size found during the process.

This approach efficiently finds the maximum number of consecutive ones by maintaining a sliding window of valid subarrays, ensuring optimal performance for large input sizes.

---
id: longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit
title: Longest Continuous Subarray with Absolute Diff Less Than or Equal to Limit
level: hard
sidebar_label: Longest Continuous Subarray with Absolute Diff Less Than or Equal to Limit
tags:
  - Array
  - Sliding Window
  - Deque
  - Java
description: "This document provides solutions for the Longest Continuous Subarray with Absolute Diff Less Than or Equal to Limit problem."
---

## Problem Statement

Given an array of integers `nums` and an integer `limit`, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to `limit`.

**Example 1:**

Input: `nums = [8,2,4,7]`, `limit = 4`

Output: `2`

Explanation: All subarrays are:
- `[8]` with maximum absolute diff `|8-8| = 0 <= 4`.
- `[8,2]` with maximum absolute diff `|8-2| = 6 > 4`.
- `[8,2,4]` with maximum absolute diff `|8-2| = 6 > 4`.
- `[8,2,4,7]` with maximum absolute diff `|8-2| = 6 > 4`.
- `[2]` with maximum absolute diff `|2-2| = 0 <= 4`.
- `[2,4]` with maximum absolute diff `|2-4| = 2 <= 4`.
- `[2,4,7]` with maximum absolute diff `|2-7| = 5 > 4`.
- `[4]` with maximum absolute diff `|4-4| = 0 <= 4`.
- `[4,7]` with maximum absolute diff `|4-7| = 3 <= 4`.
- `[7]` with maximum absolute diff `|7-7| = 0 <= 4`.

Therefore, the size of the longest subarray is 2.

**Example 2:**

Input: `nums = [10,1,2,4,7,2]`, `limit = 5`

Output: `4`

Explanation: The subarray `[2,4,7,2]` is the longest since the maximum absolute diff is `|2-7| = 5 <= 5`.

**Example 3:**

Input: `nums = [4,2,2,2,4,4,2,2]`, `limit = 0`

Output: `3`

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= limit <= 10^9`

## Solutions

### Approach

To determine the length of the longest subarray where the absolute difference between any two elements is less than or equal to `limit`, follow these steps:

1. **Sliding Window with Deque:**
   - Use two deques to maintain the maximum and minimum values in the current window.
   - Slide the window across the array and adjust the window size to ensure the absolute difference condition is met.

### Java 

```java


class Solution {
    public int longestSubarray(int[] nums, int limit) {
        LinkedList<Integer> increase = new LinkedList<>();
        LinkedList<Integer> decrease = new LinkedList<>();

        int max = 0;
        int left = 0;

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];

            while (!increase.isEmpty() && n < increase.getLast()) {
                increase.removeLast();
            }
            increase.add(n);

            while (!decrease.isEmpty() && n > decrease.getLast()) {
                decrease.removeLast();
            }
            decrease.add(n);

            while (decrease.getFirst() - increase.getFirst() > limit) {
                if (nums[left] == decrease.getFirst()) {
                    decrease.removeFirst();
                }
                if (nums[left] == increase.getFirst()) {
                    increase.removeFirst();
                }
                left++;
            }

            int size = i - left + 1;
            max = Math.max(max, size);
        }

        return max;
    }
}
```
### Python 
```Python 
class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        increase = deque()
        decrease = deque()
        max_length = 0
        left = 0

        for i in range(len(nums)):
            n = nums[i]

            while increase and n < increase[-1]:
                increase.pop()
            increase.append(n)

            while decrease and n > decrease[-1]:
                decrease.pop()
            decrease.append(n)

            while decrease[0] - increase[0] > limit:
                if nums[left] == decrease[0]:
                    decrease.popleft()
                if nums[left] == increase[0]:
                    increase.popleft()
                left += 1

            max_length = max(max_length, i - left + 1)

        return max_length
```

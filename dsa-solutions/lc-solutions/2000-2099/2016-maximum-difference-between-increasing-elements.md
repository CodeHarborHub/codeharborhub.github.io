---
id: maximum-difference-between-increasing-elements
title: Maximum Difference Between Increasing Elements
sidebar_label: 2016 Maximum Difference Between Increasing Elements
tags:
  - Array
  - Greedy
  - LeetCode
description: "This is a solution to the Maximum Difference Between Increasing Elements problem on LeetCode."
sidebar_position: 2016
---

## Problem Description

Given a 0-indexed integer array `nums` of size `n`, find the maximum difference between `nums[i]` and `nums[j]` (i.e., `nums[j] - nums[i]`), such that `0 <= i < j < n` and `nums[i] < nums[j]`.

Return the maximum difference. If no such `i` and `j` exists, return `-1`.

### Examples

**Example 1:**

```
Input: nums = [7,1,5,4]
Output: 4
Explanation:
The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
```

**Example 2:**
```
Input: nums = [9,4,3,2]
Output: -1
Explanation:
There is no i and j such that i < j and nums[i] < nums[j].
```

**Example 3:**
```
Input: nums = [1,5,2,10]
Output: 9
Explanation:
The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 1000`
- `1 <= nums[i] <= 10^9`

### Approach

To solve this problem efficiently, we can use a greedy approach. We keep track of the minimum value encountered so far as we iterate through the array. For each element, we calculate the difference between the current element and the minimum value encountered so far. If this difference is greater than the current maximum difference, we update the maximum difference.

#### C++

```cpp
class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int min_val = nums[0];
        int max_diff = -1;
        
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > min_val) {
                max_diff = max(max_diff, nums[i] - min_val);
            }
            min_val = min(min_val, nums[i]);
        }
        
        return max_diff;
    }
};
```
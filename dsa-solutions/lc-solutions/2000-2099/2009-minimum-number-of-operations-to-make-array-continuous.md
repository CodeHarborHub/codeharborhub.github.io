---
id: minimum-number-of-operations-to-make-array-continuous
title: Minimum Number of Operations to Make Array Continuous
sidebar_label: 2009 Minimum Number of Operations to Make Array Continuous
tags:
  - Array
  - Sorting
  - Sliding Window
  - LeetCode
description: "This is a solution to the Minimum Number of Operations to Make Array Continuous problem on LeetCode."
sidebar_position: 2009
---

## Problem Description

You are given an integer array `nums`. In one operation, you can replace any element in `nums` with any integer.

`nums` is considered continuous if both of the following conditions are fulfilled:

1. All elements in `nums` are unique.
2. The difference between the maximum element and the minimum element in `nums` equals `nums.length - 1`.

For example, `nums = [4, 2, 5, 3]` is continuous, but `nums = [1, 2, 3, 5, 6]` is not continuous.

Return the minimum number of operations to make `nums` continuous.

### Examples

**Example 1:**

```
Input: nums = [4,2,5,3]
Output: 0
Explanation: nums is already continuous.
```

**Example 2:**

```
Input: nums = [1,2,3,5,6]
Output: 1
Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.
```

**Example 3:**

```
Input: nums = [1,10,100,1000]
Output: 3
Explanation: One possible solution is to:

Change the second element to 2.
Change the third element to 3.
Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.
```


### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

### Approach

To solve this problem:
1. Sort the array `nums` to facilitate finding the longest continuous subsequence.
2. Use a sliding window to find the longest subsequence that satisfies the conditions of being continuous.
3. Calculate the minimum number of operations as the difference between the length of `nums` and the length of the longest continuous subsequence found.

#### C++ Solution

```cpp
class Solution {
public:
    int minOperations(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        nums.erase(unique(nums.begin(), nums.end()), nums.end());
        
        int n = nums.size();
        int ans = n;
        for (int i = 0, j = 0; i < n; ++i) {
            while (j < n && nums[j] <= nums[i] + n - 1) {
                ++j;
            }
            ans = min(ans, n - (j - i));
        }
        
        return ans;
    }
};
```
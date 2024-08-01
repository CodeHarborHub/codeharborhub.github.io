---
id: sum-of-beauty-in-the-array
title: Sum of Beauty in the Array
sidebar_label: 2012 Sum of Beauty in the Array
tags:
  - Array
  - Prefix Sum
  - LeetCode
description: "This is a solution to the Sum of Beauty in the Array problem on LeetCode."
sidebar_position: 2012
---

## Problem Description

You are given a 0-indexed integer array `nums`. For each index `i` (`1 <= i <= nums.length - 2`) the beauty of `nums[i]` equals:
- 2, if `nums[j] < nums[i] < nums[k]`, for all `0 <= j < i` and for all `i < k <= nums.length - 1`.
- 1, if `nums[i - 1] < nums[i] < nums[i + 1]`, and the previous condition is not satisfied.
- 0, if none of the previous conditions holds.

Return the sum of beauty of all `nums[i]` where `1 <= i <= nums.length - 2`.

### Examples

**Example 1:**

```
Input: nums = [1,2,3]
Output: 2
Explanation: For each index i in the range 1 <= i <= 1:

The beauty of nums[1] equals 2.
```

**Example 2:**

```
Input: nums = [2,4,6,4]
Output: 1
Explanation: For each index i in the range 1 <= i <= 2:

The beauty of nums[1] equals 1.
The beauty of nums[2] equals 0.
```

**Example 3:**

```
Input: nums = [3,2,1]
Output: 0
Explanation: For each index i in the range 1 <= i <= 1:

The beauty of nums[1] equals 0.
```

### Constraints

- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Approach

To solve this problem efficiently, we need to use the concept of prefix and suffix arrays to keep track of the maximum and minimum values to the left and right of each index, respectively.

Steps

1. **Initialize Prefix and Suffix Arrays:**
   - `leftMax[i]`: Maximum value from the start of the array to index `i-1`.
   - `rightMin[i]`: Minimum value from index `i+1` to the end of the array.

2. **Fill Prefix and Suffix Arrays:**
   - Traverse from left to right to fill `leftMax`.
   - Traverse from right to left to fill `rightMin`.

3. **Calculate Beauty:**
   - For each index `i` from 1 to `n-2`, check the conditions using `leftMax` and `rightMin` to determine the beauty and accumulate the total sum.

#### C++ Solution

```cpp
class Solution {
public:
    int sumOfBeauties(vector<int>& nums) {
        int n = nums.size();
        vector<int> leftMax(n, 0), rightMin(n, 0);
        
        leftMax[0] = nums[0];
        for (int i = 1; i < n; ++i) {
            leftMax[i] = max(leftMax[i-1], nums[i]);
        }
        
        rightMin[n-1] = nums[n-1];
        for (int i = n-2; i >= 0; --i) {
            rightMin[i] = min(rightMin[i+1], nums[i]);
        }
        
        int beautySum = 0;
        for (int i = 1; i <= n-2; ++i) {
            if (leftMax[i-1] < nums[i] && nums[i] < rightMin[i+1]) {
                beautySum += 2;
            } else if (nums[i-1] < nums[i] && nums[i] < nums[i+1]) {
                beautySum += 1;
            }
        }
        
        return beautySum;
    }
};
```

---
id: maximum-number-of-ways-to-partition-an-array
title: Maximum Number of Ways to Partition an Array
sidebar_label: 2025. Maximum Number of Ways to Partition an Array
tags:
  - Array
  - Partition
  - Prefix Sum
  - LeetCode
description: "This is a solution to the Maximum Number of Ways to Partition an Array problem on LeetCode."
sidebar_position: 2025
---

## Problem Description

You are given a 0-indexed integer array `nums` of length `n`. The number of ways to partition `nums` is the number of pivot indices that satisfy both conditions:

1. `1 <= pivot < n`
2. `nums[0] + nums[1] + ... + nums[pivot - 1] == nums[pivot] + nums[pivot + 1] + ... + nums[n - 1]`

You are also given an integer `k`. You can choose to change the value of one element of `nums` to `k`, or to leave the array unchanged.

Return the maximum possible number of ways to partition `nums` to satisfy both conditions after changing at most one element.

### Examples

**Example 1:**

```
Input: nums = [2,-1,2], k = 3
Output: 1
Explanation: One optimal approach is to change nums[0] to k. The array becomes [3,-1,2].
There is one way to partition the array:
- For pivot = 2, we have the partition [3,-1 | 2]: 3 + -1 == 2.
```
**Example 2:**

```
Input: nums = [0,0,0], k = 1
Output: 2
Explanation: The optimal approach is to leave the array unchanged.
There are two ways to partition the array:
- For pivot = 1, we have the partition [0 | 0,0]: 0 == 0 + 0.
- For pivot = 2, we have the partition [0,0 | 0]: 0 + 0 == 0.
```
**Example 3:**
```
Input: nums = [22,4,-25,-20,-15,15,-16,7,19,-10,0,-13,-14], k = -33
Output: 4
Explanation: One optimal approach is to change nums[2] to k. The array becomes [22,4,-33,-20,-15,15,-16,7,19,-10,0,-13,-14].
There are four ways to partition the array.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 105`
- `-105 <= k, nums[i] <= 105`

### Approach 

First, compute prefix sums to determine all valid pivot indices where the sum of the left partition equals the sum of the right partition. Then, consider the effect of changing each element to `k` and how it affects the partitioning. Keep track of all potential pivot points in both the original and modified arrays to find the maximum number of valid partitions.

#### C++

``` cpp
class Solution {
public:
    int waysToPartition(vector<int>& nums, int k) {
        int n = nums.size();
        vector<long long> prefixSum(n + 1, 0);
        unordered_map<long long, int> leftCount, rightCount;

        for (int i = 0; i < n; ++i) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        long long totalSum = prefixSum[n];
        int result = 0;

        for (int i = 1; i < n; ++i) {
            long long leftSum = prefixSum[i];
            long long rightSum = totalSum - leftSum;
            if (leftSum == rightSum) {
                result++;
            }
            rightCount[leftSum]++;
        }

        int maxResult = result;

        for (int i = 0; i < n; ++i) {
            long long newLeftSum = prefixSum[i] + k;
            long long newRightSum = totalSum - prefixSum[i] - nums[i] + k;

            int tempResult = result;

            if (leftCount.count(newRightSum)) {
                tempResult += leftCount[newRightSum];
            }
            if (rightCount.count(newLeftSum)) {
                tempResult += rightCount[newLeftSum];
            }

            maxResult = max(maxResult, tempResult);

            if (i < n - 1) {
                rightCount[prefixSum[i + 1]]--;
                leftCount[prefixSum[i + 1]]++;
            }
        }

        return maxResult;
    }
};
```
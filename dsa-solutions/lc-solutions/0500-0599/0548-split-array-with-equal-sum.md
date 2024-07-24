---
id: split-array-with-equal-sum
title: Split Array with Equal Sum
sidebar_label: 0548 - Split Array with Equal Sum
tags:
 - Array
 - Prefix Sum
 - Divide and Conquer
description: "This is a solution to the Split Array with Equal Sum problem on LeetCode."
---

## Problem Description

Given an array `nums` of length `n`, return `true` if there are four indices `i`, `j`, `k`, `l` (1 &lt;= i &lt; j &lt; k &lt; l &lt; n-1) such that the sum of the subarrays `nums[0..i-1]`, `nums[i+1..j-1]`, `nums[j+1..k-1]`, and `nums[k+1..l-1]` are all equal.

### Examples

**Example 1:**

```
Input: nums = [1,2,1,2,1,2,1]
Output: true
Explanation: i = 1, j = 3, k = 5, l = 6 satisfy the conditions.
```

**Example 2:**

```
Input: nums = [1,2,1,2,1,2,1,2]
Output: false
```

### Constraints

- The array's length is `[7, 2000]`.
- `-10^6 <= nums[i] <= 10^6`

## Solution for Split Array with Equal Sum

### Approach:

1. Use a prefix sum array to store the sum of elements from the start of the array to each index.
2. Iterate through possible positions of `j` and `k` to find valid indices.
3. Check if an index `i` before `j` and an index `l` after `k` exists so that the sums of the corresponding subarrays are equal.

## Code in Different Languages

### C++

```cpp
class Solution {
public:
    bool splitArray(vector<int>& nums) {
        int n = nums.size();
        vector<int> prefixSum(n, 0);
        prefixSum[0] = nums[0];
        for (int i = 1; i < n; ++i) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }
        
        for (int j = 3; j < n - 3; ++j) {
            unordered_set<int> sums;
            for (int i = 1; i < j - 1; ++i) {
                if (prefixSum[i - 1] == prefixSum[j - 1] - prefixSum[i]) {
                    sums.insert(prefixSum[i - 1]);
                }
            }
            for (int k = j + 2; k < n - 1; ++k) {
                if (prefixSum[n - 1] - prefixSum[k] == prefixSum[k - 1] - prefixSum[j] && sums.count(prefixSum[k - 1] - prefixSum[j])) {
                    return true;
                }
            }
        }
        return false;
    }
};
```

### Java

```java
class Solution {
    public boolean splitArray(int[] nums) {
        int n = nums.length;
        int[] prefixSum = new int[n];
        prefixSum[0] = nums[0];
        for (int i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }

        for (int j = 3; j < n - 3; j++) {
            Set<Integer> sums = new HashSet<>();
            for (int i = 1; i < j - 1; i++) {
                if (prefixSum[i - 1] == prefixSum[j - 1] - prefixSum[i]) {
                    sums.add(prefixSum[i - 1]);
                }
            }
            for (int k = j + 2; k < n - 1; k++) {
                if (prefixSum[n - 1] - prefixSum[k] == prefixSum[k - 1] - prefixSum[j] && sums.contains(prefixSum[k - 1] - prefixSum[j])) {
                    return true;
                }
            }
        }
        return false;
    }
}
```

### Python

```python
class Solution:
    def splitArray(self, nums: List[int]) -> bool:
        n = len(nums)
        prefix_sum = [0] * n
        prefix_sum[0] = nums[0]
        for i in range(1, n):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i]

        for j in range(3, n - 3):
            sums = set()
            for i in range(1, j - 1):
                if prefix_sum[i - 1] == prefix_sum[j - 1] - prefix_sum[i]:
                    sums.add(prefix_sum[i - 1])
            for k in range(j + 2, n - 1):
                if prefix_sum[n - 1] - prefix_sum[k] == prefix_sum[k - 1] - prefix_sum[j] and (prefix_sum[k - 1] - prefix_sum[j]) in sums:
                    return True
        return False
```

## Complexity Analysis

### Time Complexity: $O(n^2)$
**Reason**: The algorithm iterates through all possible positions of `j` and `k`, and within these loops, it iterates through all possible positions of `i` and `l`.

### Space Complexity: $O(n)$
**Reason**: It uses a prefix sum array to store the sum of elements from the start of the array to each index, and a set to store the unique sums.

## References

- **LeetCode Problem**: [Split Array with Equal Sum](https://leetcode.com/problems/split-array-with-equal-sum/)

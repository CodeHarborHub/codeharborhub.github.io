---
id: minimum-sum-of-mountain-triplets-ii
title: Minimum Sum of Mountain Triplets II
sidebar_label: 2902 Minimum Sum of Mountain Triplets II
tags:
  - Array
  - Dynamic Programming
  - LeetCode
  - C++
description: "This is a solution to the Minimum Sum of Mountain Triplets II problem on LeetCode."
sidebar_position: 2902
---

## Problem Description

You are given a 0-indexed array `nums` of integers.

A triplet of indices `(i, j, k)` is a mountain if:

1. `i < j < k`
2. `nums[i] < nums[j]` and `nums[k] < nums[j]`

Return the minimum possible sum of a mountain triplet of `nums`. If no such triplet exists, return `-1`.

### Examples

**Example 1:**

``` 
Input: nums = [8,6,1,5,3]
Output: 9

Explanation: Triplet (2, 3, 4) is a mountain triplet of sum 9 since:

2 < 3 < 4
nums[2] < nums[3] and nums[4] < nums[3]
And the sum of this triplet is nums[2] + nums[3] + nums[4] = 9. It can be shown that there are no mountain triplets with a sum of less than 9.

```


**Example 2:**

```
Input: nums = [5,4,8,7,10,2]
Output: 13

Explanation: Triplet (1, 3, 5) is a mountain triplet of sum 13 since:

1 < 3 < 5
nums[1] < nums[3] and nums[5] < nums[3]
And the sum of this triplet is nums[1] + nums[3] + nums[5] = 13. It can be shown that there are no mountain triplets with a sum of less than 13.
```

**Example 3:**
```
Input: nums = [6,5,4,3,4,5]
Output: -1

Explanation: It can be shown that there are no mountain triplets in nums.

```


### Constraints
- `3 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^8`

### Approach

To solve this problem, we can use a dynamic programming approach. We will maintain two arrays, `left` and `right`, where `left[i]` contains the minimum value of `nums[l]` for `l < i` such that `nums[l] < nums[i]`, and `right[i]` contains the minimum value of `nums[r]` for `r > i` such that `nums[r] < nums[i]`.

We will iterate through the array `nums` and calculate the possible minimum sum for each valid triplet `(i, j, k)`, updating the minimum sum as we go.

### Complexity

- **Time complexity**: $O(n)$, where `n` is the length of the `nums` array. This is because we are iterating through the array a constant number of times.
- **Space complexity**: $O(n)$, for storing the `left` and `right` arrays.

#### C++

```cpp
class Solution {
public:
    int minimumSumOfMountainTriplets(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return -1;
        
        vector<int> leftMin(n, INT_MAX);
        vector<int> rightMin(n, INT_MAX);

        // Calculate leftMin array
        int minLeft = INT_MAX;
        for (int i = 1; i < n; ++i) {
            if (nums[i - 1] < nums[i]) {
                minLeft = min(minLeft, nums[i - 1]);
            }
            leftMin[i] = minLeft;
        }

        // Calculate rightMin array
        int minRight = INT_MAX;
        for (int i = n - 2; i >= 0; --i) {
            if (nums[i + 1] < nums[i]) {
                minRight = min(minRight, nums[i + 1]);
            }
            rightMin[i] = minRight;
        }

        int minSum = INT_MAX;

        // Find the minimum sum of a valid mountain triplet
        for (int j = 1; j < n - 1; ++j) {
            if (leftMin[j] != INT_MAX && rightMin[j] != INT_MAX && nums[j] > leftMin[j] && nums[j] > rightMin[j]) {
                minSum = min(minSum, leftMin[j] + nums[j] + rightMin[j]);
            }
        }

        return minSum == INT_MAX ? -1 : minSum;
    }
};
```
#### Java

```java
class Solution {
    public int minimumSumOfMountainTriplets(int[] nums) {
        int n = nums.length;
        if (n < 3) return -1;
        
        int[] leftMin = new int[n];
        int[] rightMin = new int[n];
        Arrays.fill(leftMin, Integer.MAX_VALUE);
        Arrays.fill(rightMin, Integer.MAX_VALUE);
        
        // Calculate leftMin array
        int minLeft = Integer.MAX_VALUE;
        for (int i = 1; i < n; i++) {
            if (nums[i - 1] < nums[i]) {
                minLeft = Math.min(minLeft, nums[i - 1]);
            }
            leftMin[i] = minLeft;
        }
        
        // Calculate rightMin array
        int minRight = Integer.MAX_VALUE;
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i + 1] < nums[i]) {
                minRight = Math.min(minRight, nums[i + 1]);
            }
            rightMin[i] = minRight;
        }
        
        int minSum = Integer.MAX_VALUE;
        
        // Find the minimum sum of a valid mountain triplet
        for (int j = 1; j < n - 1; j++) {
            if (leftMin[j] != Integer.MAX_VALUE && rightMin[j] != Integer.MAX_VALUE && nums[j] > leftMin[j] && nums[j] > rightMin[j]) {
                minSum = Math.min(minSum, leftMin[j] + nums[j] + rightMin[j]);
            }
        }
        
        return minSum == Integer.MAX_VALUE ? -1 : minSum;
    }
}
```

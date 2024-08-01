---
id: split-array-with-same-average
title: Split Array With Same Average
sidebar_label: 0805 Split Array With Same Average
tags:
  - Java
  - Math
  - Array
  - Binary Search
  - Dynamic Programming
  - Bitmask
description: "This document provides a solution where we split an array into two non-empty subsets such that both subsets have the same average."
---

## Problem

You are given an integer array $nums$.

You should move each element of $nums$ into one of the two arrays $A$ and $B$ such that $A$ and $B$ are non-empty, and $average(A) == average(B)$.

Return $true$ if it is possible to achieve that and $false$ otherwise.

**Note** that for an array $arr$, $average(arr)$ is the sum of all the elements of $arr$ over the length of $arr$.

### Examples

**Example 1:**

```
Input: nums = [1,2,3,4,5,6,7,8]

Output: true

Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have an average of 4.5 .

```

**Example 2:**

```
Input: nums = [3,1]

Output: false

```

### Constraints

- $1 <= nums.length <= 30$
- $0 <= nums[i] <= 10^4$

---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Calculate Total Sum**:

   - First, calculate the total sum of the array.

2. **Sort the Array**:

   - Sorting helps in pruning the search space.

3. **Iterate Over Possible Sizes**:

   - Iterate over possible subset sizes from 1 to n/2. For each size, check if the corresponding subset sum can be an integer.

4. **Check for Possible Partition**:

   - Use a recursive function with memoization to check if it’s possible to partition the array into subsets with the required sum and size.

## Solution for Split Array With Same Average

- The problem requires us to split an array into two non-empty subsets such that both subsets have the same average.

- For two subsets to have the same average, the sum of elements in each subset divided by their respective lengths must be equal.

#### Code in Java

```java
import java.util.Arrays;

class Solution {
    public boolean splitArraySameAverage(int[] nums) {
        int n = nums.length;
        int totalSum = Arrays.stream(nums).sum();

        Arrays.sort(nums);

        for (int size = 1; size <= n / 2; size++) {
            if (totalSum * size % n == 0) {
                int target = totalSum * size / n;
                if (canPartition(nums, size, target, 0)) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean canPartition(int[] nums, int size, int target, int start) {
        if (size == 0) {
            return target == 0;
        }

        for (int i = start; i <= nums.length - size; i++) {
            if (i > start && nums[i] == nums[i - 1]) {
                continue;
            }

            if (nums[i] > target) {
                break;
            }

            if (canPartition(nums, size - 1, target - nums[i], i + 1)) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        // Test cases
        int[] nums1 = {1, 2, 3, 4, 5, 6, 7, 8};
        System.out.println(sol.splitArraySameAverage(nums1));  // Output: true

        int[] nums2 = {3, 1};
        System.out.println(sol.splitArraySameAverage(nums2));  // Output: false
    }
}
```

### Complexity Analysis

#### Time Complexity: $O(2^ n/2)$

> **Reason**: Time Complexity is $O(2^ n/2)$. Because Each half of the array can generate $O(2^ n/2)$ subsets.

#### Space Complexity: $O(2^ n/2)$

> **Reason**: The space complexity is $O(2^ n/2)$, Because it helps in Storing subset sums and sizes.

# References

- **LeetCode Problem:** [Split Array With Same Average](https://leetcode.com/problems/split-array-with-same-average/description/)
- **Solution Link:** [Split Array With Same Average Solution on LeetCode](https://leetcode.com/problems/split-array-with-same-average/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)

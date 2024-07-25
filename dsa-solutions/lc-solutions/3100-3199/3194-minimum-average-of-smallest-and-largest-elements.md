---
id: minimum-average-of-smallest-and-largest-elements
title: Minimum Average of Smallest and Largest Elements
sidebar_label: Minimum Average of Smallest and Largest Elements
tags:
  - Array
  - Sorting
  - Two Pointers
  - Java
  - Python
description: "This document provides solutions for the Minimum Average of Smallest and Largest Elements problem."
---

## Problem Statement

Given an integer array `nums`, find the minimum possible average of any sublist of `nums` after sorting the array in non-decreasing order.

**Example:**

Input: `nums = [3, 1, 2, 4, 3]`
Output: `3.0`

Explanation:
Sort the array to get `[1, 2, 3, 3, 4]`.
Sublists with minimum average:

```
- [1, 2, 3] -> Average = (1 + 2 + 3) / 3 = 2.0
- [2, 3, 3] -> Average = (2 + 3 + 3) / 3 = 2.67
- [3, 3, 4] -> Average = (3 + 3 + 4) / 3 = 3.33
```

The minimum average is `2.0`.

**Constraints:**

- `1 <= nums.length <= 100`
- `-10^5 <= nums[i] <= 10^5`

## Solutions

### Intuition

To find the minimum average of any sublist after sorting, we can leverage the property that the sublist with the minimum average will consist of the smallest and largest elements from the sorted array.

### Approach

1. **Sort the Array:**
   - Sort the given array `nums` in non-decreasing order.

2. **Two Pointers Technique:**
   - Use two pointers `left` starting at the beginning (`0`) and `right` at the end (`nums.length - 1`) of the sorted array.
   - Calculate the average of `nums[left]` and `nums[right]`.
   - Update the minimum average if the current average is smaller.
   - Move `left` pointer to the right and `right` pointer to the left to consider the next pair of smallest and largest elements.

3. **Compute Minimum Average:**
   - Iterate until `left` is less than `right`.
   - The minimum average found during iterations is the desired result.

### Java 

```java
import java.util.Arrays;

class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);
        int left = 0, right = nums.length - 1;
        double minAvg = Double.MAX_VALUE;
        
        while (left < right) {
            double avg = (double) (nums[left] + nums[right]) / 2;
            minAvg = Math.min(minAvg, avg);
            left++;
            right--;
        }
        
        return minAvg;
    }
}
```

### Python

```Python
class Solution:
    def minimumAverage(self, nums: List[int]) -> float:
        nums.sort()
        left, right = 0, len(nums) - 1
        min_avg = float('inf')
        
        while left < right:
            avg = (nums[left] + nums[right]) / 2.0
            min_avg = min(min_avg, avg)
            left += 1
            right -= 1
        
        return min_avg
```

## Conclusion 
The above implementations in Java and Python effectively find the minimum possible average of any sublist of nums after sorting using the two pointers technique, ensuring efficient computation.

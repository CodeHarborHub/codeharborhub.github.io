---
id:  Minimum-Average-Difference
title:  Minimum Average Difference
sidebar_label: 2256-Minimum Average Difference
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 0-indexed integer array nums of length n.

The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

### Examples

**Example 1:**

Input: nums = [2,5,3,9,5,3]
Output: 3
Explanation:
- The average difference of index 0 is: |2 / 1 - (5 + 3 + 9 + 5 + 3) / 5| = |2 / 1 - 25 / 5| = |2 - 5| = 3.
- The average difference of index 1 is: |(2 + 5) / 2 - (3 + 9 + 5 + 3) / 4| = |7 / 2 - 20 / 4| = |3 - 5| = 2.
- The average difference of index 2 is: |(2 + 5 + 3) / 3 - (9 + 5 + 3) / 3| = |10 / 3 - 17 / 3| = |3 - 5| = 2.
- The average difference of index 3 is: |(2 + 5 + 3 + 9) / 4 - (5 + 3) / 2| = |19 / 4 - 8 / 2| = |4 - 4| = 0.
- The average difference of index 4 is: |(2 + 5 + 3 + 9 + 5) / 5 - 3 / 1| = |24 / 5 - 3 / 1| = |4 - 3| = 1.
- The average difference of index 5 is: |(2 + 5 + 3 + 9 + 5 + 3) / 6 - 0| = |27 / 6 - 0| = |4 - 0| = 4.
The average difference of index 3 is the minimum average difference so return 3.

**Example 2:**

Input: nums = [0]
Output: 0
Explanation:
The only index is 0 so return 0.
The average difference of index 0 is: |0 / 1 - 0| = |0 - 0| = 0.


### Constraints

-` 1 <= nums.length <= 105`
- `0 <= nums[i] <= 105`

### Approach

Prefix Sum Calculation: Compute prefix sums to efficiently calculate sums of subarrays.
Total Sum Calculation: Compute the total sum of the array to derive suffix sums.
Iteration and Calculation: Iterate through each index, compute left and right sums, calculate rounded averages, and track the index with the minimum average difference.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
int minAvgDifferenceIndex(vector<int>& nums) {
    int n = nums.size();
    vector<int> prefixSum(n);
    prefixSum[0] = nums[0];
    for (int i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
    int totalSum = prefixSum[n - 1];
    int minDiff = INT_MAX, minIndex = 0;
    for (int i = 0; i < n; i++) {
        int leftSum = (i == 0) ? 0 : prefixSum[i - 1];
        int rightSum = totalSum - prefixSum[i];
        int leftAvg = leftSum / (i + 1);
        int rightAvg = rightSum / (n - i - 1);
        int avgDiff = abs(leftAvg - rightAvg);
        if (avgDiff < minDiff || (avgDiff == minDiff && i < minIndex)) {
            minDiff = avgDiff;
            minIndex = i;
        }
    }
    return minIndex;
}



```

### Java Solution

```java
public int minAvgDifferenceIndex(int[] nums) {
    int n = nums.length;
    int[] prefixSum = new int[n];
    prefixSum[0] = nums[0];
    for (int i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }
    int totalSum = prefixSum[n - 1];
    int minDiff = Integer.MAX_VALUE, minIndex = 0;
    for (int i = 0; i < n; i++) {
        int leftSum = (i == 0) ? 0 : prefixSum[i - 1];
        int rightSum = totalSum - prefixSum[i];
        int leftAvg = leftSum / (i + 1);
        int rightAvg = rightSum / (n - i - 1);
        int avgDiff = Math.abs(leftAvg - rightAvg);
        if (avgDiff < minDiff || (avgDiff == minDiff && i < minIndex)) {
            minDiff = avgDiff;
            minIndex = i;
        }
    }
    return minIndex;
}


```

### Python Solution

```python
def min_avg_difference_index(nums):
    n = len(nums)
    
    # Compute prefix sums
    prefix_sum = [0] * n
    prefix_sum[0] = nums[0]
    for i in range(1, n):
        prefix_sum[i] = prefix_sum[i - 1] + nums[i]
    
    total_sum = prefix_sum[-1]  # sum of all elements in nums
    min_diff = float('inf')
    min_index = 0
    
    # Compute average differences
    for i in range(n):
        if i == 0:
            left_sum = 0
        else:
            left_sum = prefix_sum[i - 1]
        right_sum = total_sum - prefix_sum[i]
        
        # Calculate average differences rounded down
        left_avg = left_sum // (i + 1)
        right_avg = right_sum // (n - i - 1)
        
        avg_diff = abs(left_avg - right_avg)
        
        # Update minimum average difference and index
        if avg_diff < min_diff:
            min_diff = avg_diff
            min_index = i
        elif avg_diff == min_diff:
            min_index = min(min_index, i)
    
    return min_index

# Example usage:
nums1 = [2, 5, 3, 9, 5, 3]
nums2 = [0]

print(min_avg_difference_index(nums1))  # Output: 3
print(min_avg_difference_index(nums2))  # Output: 0



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**: because they involve linear scans to compute prefix sums, total sum, and iterate through each index

### Space Complexity: $O(n)$

> **Reason**:  due to the storage of prefix sums array, which is proportional to the input size n.


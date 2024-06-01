---
id: Median of Two Sorted Arrays
title: Median of Two Sorted Arrays(Leetcode)
sidebar_label: 0004 - Median of Two Sorted Arrays
tags: 
    - Array
    - Binary Search
    - Divide and Conquer
description: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be $O(log (m+n))$.
---


## Problem Description

| Problem Statement                                                                          | Solution Link                                                                                                                                      | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| [Median of Two Sorted Arrays on LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) | [Median of Two Sorted Arrays Solution on LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/editorial/) | [gabaniyash846](https://leetcode.com/u/gabaniyash846/) |

### Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be $O(log (m+n))$.

**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

### Solution

#### Approach 1: Merge Sort $(O(m + n))$

**Algorithm:**
1. Merge `nums1` and `nums2` into a single sorted array.
2. Find the median of the merged array:
   - If the total number of elements is odd, return the middle element.
   - If the total number of elements is even, return the average of the two middle elements.

**Python Implementation:**
```python
def findMedianSortedArrays(nums1, nums2):
    merged = []
    i = j = 0
    while i < len(nums1) and j < len(nums2):
        if nums1[i] < nums2[j]:
            merged.append(nums1[i])
            i += 1
        else:
            merged.append(nums2[j])
            j += 1
    merged.extend(nums1[i:])
    merged.extend(nums2[j:])
    
    n = len(merged)
    if n % 2 == 1:
        return merged[n // 2]
    else:
        return (merged[n // 2 - 1] + merged[n // 2]) / 2.0
```

#### Approach 2: Binary Search (O(log(min(m, n))))

**Intuition:**
To achieve $O(log(min(m, n)))$ complexity, use binary search on the smaller array. The goal is to find a partition where the left half of both arrays combined is less than or equal to the right half.

**Algorithm:**
1. Ensure `nums1` is the smaller array.
2. Define `imin` and `imax` for binary search on `nums1`.
3. Calculate `partitionX` and `partitionY` such that:
   - `partitionX + partitionY = (m + n + 1) // 2`
4. Check conditions to find the correct partition:
   - If `maxLeftX <= minRightY` and `maxLeftY <= minRightX`, you've found the correct partition.
   - If `maxLeftX > minRightY`, move `imax` to the left.
   - If `maxLeftY > minRightX`, move `imin` to the right.
5. Calculate the median based on the combined lengths of the arrays.

**Python Implementation:**
```python
def findMedianSortedArrays(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    imin, imax, half_len = 0, m, (m + n + 1) // 2
    
    while imin <= imax:
        partitionX = (imin + imax) // 2
        partitionY = half_len - partitionX
        
        maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
        minRightX = float('inf') if partitionX == m else nums1[partitionX]
        
        maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
        minRightY = float('inf') if partitionY == n else nums2[partitionY]
        
        if maxLeftX <= minRightY and maxLeftY <= minRightX:
            if (m + n) % 2 == 1:
                return max(maxLeftX, maxLeftY)
            else:
                return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0
        elif maxLeftX > minRightY:
            imax = partitionX - 1
        else:
            imin = partitionX + 1
```

### Complexity Analysis

- **Time Complexity:**
  - Approach 1:$O(m + n)$ because it involves merging both arrays into one sorted array.
  - Approach 2: $O(log(min(m, n)))$ because it performs binary search on the smaller array.

- **Space Complexity:**
  - Approach 1: $O(m + n)$ due to the additional space needed for the merged array.
  - Approach 2: $O(1)$ because it uses only a constant amount of additional space.

### Summary

Approach 1 is straightforward but not optimal in terms of time complexity for large input sizes. Approach 2 leverages binary search to efficiently find the median with logarithmic time complexity, making it suitable for large arrays.

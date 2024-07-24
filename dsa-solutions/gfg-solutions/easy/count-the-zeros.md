---
id: count-the-zeros
title: Count The Zeros
sidebar_label: 0108-Count The Zeros
tags:
  - Arrays
  - Searching
  - Data Structures
  - Algorithms
description: "A solution to the problem of counting the number of zeros in the array"
---

In this page, we will solve the problem of  counting the number of zeros in the array.

## Problem Description

Given an array arr of only 0's and 1's. The array is sorted in such a manner that all the 1's are placed first and then they are followed by all the 0's. Find the count of all the 0's.
### Examples

**Example 1:**

```plaintext
Input: arr[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
Output: 3
Explanation: There are 3 0's in the given array.
```

**Example 2:**

```plaintext
Input: arr[] = [0, 0, 0, 0, 0]
Output: 5
Explanation: There are 5 0's in the array.
```

### Constraints

- $1 \leq$ arr.size $\leq10^5$
- $0 \leq$ arr[i] $\leq1$

## Solution

### Intuition and Approach

This problem can be solved by using binary search and find the first index of zero and then return total length - index of first zero 

### Approach: 

1. Frist we will initialize variable:
   - n which is the length of the array arr.
   - high is initialized to n-1, which is the index of the last element in the array.
   - low is initialized to 0, which is the index of the first element in the array.
2. Next we will runa a while loop runs as long as high is greater than or equal to low.
3. Then mid is calculated as the average of low and high to find the middle index of the current search range.
4. The first if statement checks if the element at mid is 0 and either mid is 0 (the start of the array) or the previous element (arr[mid-1]) is 1. If this condition is true, it means that mid is the first occurrence of 0 in the array then number of zeroes will be the difference between n (total number of elements) and mid (index of the first zero).
5. If the element at mid is 1, it means that if zeroes are present they will be right of mid. Thus, we update low to mid + 1 to search in the right half of the array.
6. If the element at mid is 0 but the condition in step 4 is not met, it means that there might be a zero to the left of mid. Thus, we update high to mid - 1 to search in the left half of the array.
7. If the loop completes without finding a 0, it means there are no zeroes in the array. The function returns 0.


#### Code in Python
```python

class Solution:
  def countZeroes(self, arr):
    n = len(arr)
    high = n-1
    low = 0
    while(high >= low):
        mid = low + int((high - low) / 2)
        if (( mid == 0 or arr[mid-1] == 1) and arr[mid] == 0):
            return (n-mid) 
        if (arr[mid] == 1): 
            low = (mid + 1)
        else: 
            high = mid-1
    return 0
 ```

#### Complexity Analysis

- **Time Complexity:** $O(logn)$
- **Space Complexity:** $O(1)$

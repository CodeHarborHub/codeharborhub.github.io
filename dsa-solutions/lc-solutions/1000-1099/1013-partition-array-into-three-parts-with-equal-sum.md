---
id: partition-array-into-three-parts-with-equal-sum
title: Partition Array Into Three Parts With Equal Sum
sidebar_label: Partition Array Equal Sum
tags:
  - Array
  - Two Pointers
  - Java
  - Python
  - C++
description: "This document provides solutions for the Partition Array Into Three Parts With Equal Sum problem."
---

## Problem Statement

Given an array of integers `arr`, return `true` if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes `i+1 < j` with `(arr[0] + arr[1] + ... + arr[i] == arr[i+1] + arr[i+2] + ... + arr[j-1] == arr[j] + arr[j+1] + ... + arr[arr.length-1])`.

**Example 1:**

Input: `arr = [0,2,1,-6,6,-7,9,1,2,0,1]`

Output: `true`

Explanation: The array can be partitioned as `[0,2,1]`, `[ -6,6,-7,9,1,2]`, `[0,1]` with equal sums of `[3,3,1]`.

**Example 2:**

Input: `arr = [0,2,1,-6,6,7,9,-1,2,0,1]`

Output: `false`

**Example 3:**

Input: `arr = [3,3,6,5,-2,2,5,1,-9,4]`

Output: `true`

**Constraints:**

- `3 <= arr.length <= 5 * 10^4`
- `-10^4 <= arr[i] <= 10^4`

## Solutions

### Approach

To determine if we can partition the array into three parts with equal sums, we can use the following approach:

1. **Calculate Total Sum**:
   - Compute the total sum of the array elements.

2. **Check Divisibility**:
   - If the total sum is not divisible by 3, return `false` immediately since equal partitioning is not possible.

3. **Partitioning**:
   - Iterate through the array to find partitions where the cumulative sum equals `sum/3`.
   - Count partitions until two partitions are found where the cumulative sum equals `sum/3`.

### Java

```java
class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        if (sum % 3 != 0) {
            return false;
        }
        
        int target = sum / 3;
        int currentSum = 0, partitions = 0;
        
        for (int num : arr) {
            currentSum += num;
            if (currentSum == target) {
                partitions++;
                currentSum = 0;
            }
        }
        
        return partitions >= 3;
    }
}
```

### Python

```python
class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        total_sum = sum(arr)
        if total_sum % 3 != 0:
            return False
        
        target = total_sum // 3
        current_sum, partitions = 0, 0
        
        for num in arr:
            current_sum += num
            if current_sum == target:
                partitions += 1
                current_sum = 0
        
        return partitions >= 3
```

### C++

```cpp
class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        int sum = accumulate(arr.begin(), arr.end(), 0);
        if (sum % 3 != 0) {
            return false;
        }
        
        int target = sum / 3;
        int currentSum = 0, partitions = 0;
        
        for (int num : arr) {
            currentSum += num;
            if (currentSum == target) {
                partitions++;
                currentSum = 0;
            }
        }
        
        return partitions >= 3;
    }
};
```
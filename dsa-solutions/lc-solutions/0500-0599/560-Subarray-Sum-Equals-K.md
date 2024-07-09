---
id: subarray-sum-equals-k
title: Subarray Sum Equals K
sidebar_label: 560-Subarray-Sum-Equals-K
tags:
  - Array
  - Hash Table
  - Prefi Sum

---

## Problem Description

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous non-empty sequence of elements within an array.


### Example

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**
```
Input: nums = [1,2,3], k = 3
Output: 2
 
```

### Constraints

- `1 <= nums.length <= 2 * 104`

## Solution Approach

### Intuition:

To efficiently determine the subarrays and count the no. of subarrays for which the sum of the elments of the subarray is equal to `k`.


## Solution Implementation

### Code (C++):

```cpp
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int cnt = 0;
        int sum = 0;
        for(int i=0; i<nums.size(); i++){
            for(int j=i; j<nums.size(); j++){
                sum+=nums[j];
                if(sum==k) cnt++;
            }
            sum = 0;
        }
        return cnt;
    }
};

```
---
id: missing-number
title: Missing Number
sidebar_label: 268-Missing-Number
tags:
  - Array
  - Hash Table
  - Math
  - Binary search
  - Bit Manupulation
  - Sorting

---

## Problem Description

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.


### Example

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**
```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

### Constraints

- `1 <= n <= 104`

## Solution Approach

### Intuition:

To efficiently determine the missing number in the array


## Solution Implementation

### Code (C++):

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int sum = (n*(n+1))/2;
        int s1=0;
        for(int i=0; i<n; i++){
             s1+=nums[i];
        }
        int ans = sum-s1;
        return ans;
    }
};

```
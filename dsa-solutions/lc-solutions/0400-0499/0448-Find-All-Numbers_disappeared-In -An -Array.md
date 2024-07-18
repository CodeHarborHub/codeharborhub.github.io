---
id: find-all-numbers-disapperared-in-an-array
title: Find All Numbers Disappeared In An Array
sidebar_label: 448-Find-All-Numbers-Disappeared-In-An-Array
tags:
  - Array
  - Hash Table

---

## Problem Description

Given an array nums of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.


### Example

**Example 1:**

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

**Example 2:**
```
Input: nums = [1,1]
Output: [2]
```

### Constraints

- `1 <= n <= 105`

## Solution Approach

### Intuition:

To efficiently determine the disappeared numbers in the array


## Solution Implementation

### Code (C++):

```cpp
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int n = nums.size();
        // Mark the presence
        for (int i = 0; i < n; i++) {
            int index = abs(nums[i]) - 1; // Get index from value
            if (nums[index] > 0) {
                nums[index] = -nums[index]; // Mark as visited
            }
        }
        
        // Collect the missing numbers
        vector<int> ans;
        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                ans.push_back(i + 1); // The missing number
            }
        }
        
        return ans;
    }
};

```
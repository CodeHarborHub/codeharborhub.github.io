---
id: n-repeated-element-in-size-2n-array
title:  N-Repeated Element In Size 2N Array
sidebar_label: 961- N-Repeated-Element-In-Size-2N-Array
tags:
  - Araay
  - Hash Table
---

## Problem Description
You are given an integer array `nums` with the following properties:

`nums.length == 2 * n`.
`nums` contains `n + 1` unique elements.
Exactly one element of `nums` is repeated `n` times.
Return the element that is repeated `n` times.


### Example

**Example 1:**

```
Input: nums = [1,2,3,3]
Output: 3
```

**Example 2:**
```
Input: nums = [2,1,2,5,3,2]
Output: 2
```
### Constraints

- `2 <= n <= 5000`

## Solution Approach

### Intuition:

To efficiently determine the element from the 2n size array


## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    int repeatedNTimes(vector<int>& nums) {
        unordered_map<int, int> countMap;
        for(int num : nums) {
            countMap[num]++;
            if(countMap[num] > 1) {
                return num;
            }
        }
        return -1; // This line should theoretically never be reached
    }
};
```

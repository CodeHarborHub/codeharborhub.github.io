---
id: check-if-n-and-it's-double-exist
title:  Check If N And Its Double Exist
sidebar_label: 1346-Check-If-N-And-Its-Double-Exist
tags:
  - Araay
  - Hash Table
  - Two Pointer
  - Binary Search
  - Sorting
---

## Problem Description
Given an array `arr` of integers, check if there exist two indices `i` and `j` such that :

`i != j`
`0 <= i, j < arr.length`
`arr[i] == 2 * arr[j]`


### Example

**Example 1:**


```
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, 
arr[i] == 10 == 2 * 5 == 2 * arr[j]
```
**Example 2:**
```
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

```
### Constraints

- `-103 <= arr[i] <= 103`

## Solution Approach

### Intuition:

To efficiently determine the n and if it's double exists or not.


## Solution Implementation

### Code (C++):
```cpp
class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        for(int i=0; i<arr.size(); i++){
            for(int j=0; j<arr.size(); j++){
               if(arr[i]==2*arr[j] && i!=j) return true;

            }
        }
        return false;
    }
};
```
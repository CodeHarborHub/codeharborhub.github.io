---
id: third-maximum-number
title: Third Maximum Number
sidebar_label: 0414 Third Maximum Number
tags:
  - Math
  - Vector
  - Set
  - LeetCode
  - C++
description: "This is a solution to the Third Maximum Number problem on LeetCode."
---

## Problem Description

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

### Examples

**Example 1:**

```

Input:  nums = [1,2]
Output: 2
```

**Example 2:**

```
Input: nums = [2,2,3,1]
Output: 1
```

**Example 2:**

```
Input: root = [0]
Output: [0]
```

### Constraints

- $1 \leq \text{nums.length} \leq 10^4$.
- $-2^(31) \leq \text{Node.val} \leq 2^(31)-1$.

### Approach 

To solve this problem(third maximum element) first we will store the number from the array/vector in set to get all the unique number from the given array then if size of the set is less than 3 we will just return maximum element from the array otherwise we will return the third element from the set.

#### Code in C++

```cpp
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int>b;
        for(int i=0;i<nums.size();i++){
            b.insert(nums.at(i));
        }
        int n=b.size();
        if(n<3){
            return *max_element(nums.begin() ,nums.end());
        }
        vector<int>p;
      for(auto x :b){
          p.push_back(x);
      }

      return p.at(n-3);
    }
};
```



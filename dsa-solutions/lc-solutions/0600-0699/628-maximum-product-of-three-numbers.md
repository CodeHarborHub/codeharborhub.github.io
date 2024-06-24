---
id: maximum-product-of-three-numbers
title: Maximum Product of Three Numbers
sidebar_label: 628 Maximum Product of Three Numbers
tags:
  - Math
  - Vector
  - LeetCode
  - C++
description: "This is a solution to the Maximum Product of Three Numbers problem on LeetCode."
---

## Problem Description

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

### Examples

**Example 1:**

```

Input: nums = [1,2,3]
Output: 6
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 24
```

**Example 2:**

```
Input: nums = [-1,-2,-3]
Output: -6
```

### Constraints

- $3 \leq \text{nums.length} \leq 10^4$.
- $-1000 \leq \text{Node.val} \leq 1000$.

### Approach 

To solve this problem(third maximum element) we will sort the given array and then return the product of last three numbers but there are chances that product of two smallest negative number(starting first two numbers generally) with largest positive number will be greater than last three numbers product so we will check that also.

#### Code in C++

```cpp
class Solution {
public:
    int maximumProduct(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        int n=nums.size();
        int l=nums[n-3]*nums[n-2]*nums[n-1]; // prouduct of maximum numbers
        int p=nums[0]*nums[1]*nums[n-1];// here we are checking if (num[0] and num[1] is negative so may this product will be greater than the product(l) which is product of last three maximum numbers)
        if(p>l){
            return p;
        }
        return l;
    }
};
```

#### code in Python

```python
class Solution(object):
    def maximumProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        p=nums[0]*nums[1]*nums[-1] #Calculate the product of the two smallest numbers (negative numbers) and the largest number in the sorted list.
        l=nums[-1]*nums[-2]*nums[-3] #Calculate the product of the three largest numbers in the sorted list.
        return max(l,p)
        
```


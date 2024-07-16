---
id: convert-an-array-into-a-2d-array-with-conditions
title: Convert an Array Into a 2D Array With Conditions
sidebar_label: 2610 Convert an Array Into a 2D Array With Conditions
tags:
  - Array
  - Hash Table
  - LeetCode
  - C++
description: "This is a solution to the Convert an Array Into a 2D Array With Conditions problem on LeetCode."
---

## Problem Description

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

- The 2D array should contain only the elements of the array nums.
- Each row in the 2D array contains distinct integers.
- The number of rows in the 2D array should be minimal.
  Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

### Examples

**Example 1:**

```

Input:  nums = [1,2]
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
```

### Constraints

- $1 \leq \text{nums.length} \leq 200$.
- $1 \leq \text{nums[i]} \leq \text{nums.length}$.

### Approach

To solve this problem(convert an array into a 2d array with conditions)we simply have to use an unordered map which will keep track if we can insert a particular number in the row. we will process the elements in the array one by one in any order and only create a new row in the matrix when we cannot put it into the existing rows.

#### Code in C++

```cpp
class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& nums) {
        vector<vector<int>>a;
       unordered_map<int,int>b;
       int r=0;
       for(int i=0;i<nums.size();i++){
        b[nums[i]]++;
        if(b[nums[i]]>r){
            r++;
            a.push_back({nums[i]});
        }
        else{
            a[b[nums[i]]-1].push_back(nums[i]);
        }
       }
        return a;
    }
};
```

#### Code in Java

```java
class Solution {

    public List<List<Integer>> findMatrix(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap();
        for (int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        List<List<Integer>> ll = new ArrayList();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int val = entry.getValue();
            for (int i = ll.size(); i < val; i++) ll.add(new ArrayList());
            int i = 0;
            while (val-- > 0) {
                ll.get(i++).add(key);
            }
        }

        return ll;
    }
}

```

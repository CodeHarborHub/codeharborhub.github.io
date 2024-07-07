---
id: single-number-II
title: Single Number II
sidebar_label: 0137 Single Number II
tags:
  - Java
  - Python
  - C++
  
description: "This is a solution to the Single Number ii problem on LeetCode."
---

## Problem Description

Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

### Examples

**Example 1:**

```
Input: nums = [2,2,3,2]
Output: 3

```

**Example 2:**

Input: nums = [0,1,0,1,0,1,99]
Output: 99



### Constraints

- $1 \leq nums.length \leq 3 * 10^4$
- $-3 \times 10^4 \leq nums[i] \leq 3 \times 10^4$
- Each element in the array appears three times except for one element which appears only once.

---

## Solution for Single Number ii Problem

### Intuition

The problem states that every element in the array appears exactly three times, except for one element that appears exactly once. To identify this unique element efficiently, we can leverage a hash map to count the occurrences of each element. The key observation here is that the unique element will have a count of one in the hash map, while all other elements will have a count of three.
### Approach

First declare an empty hashmap then we store the each element and it's frequencies in hashmap after that we iterate to the keys of map if the value of particular key is 1 then we return the key.

#### Code in Different Languages

<Tabs>
  
    
<TabItem value="Python" label="Python" default>

  <SolutionAuthor name="@ImmidiSivani"/>
  
    ```Python
    class Solution:
        def singleNumber(self, nums: List[int]) -> int:
        mp = {}
        for num in nums:
            if num in mp:
                mp[num] += 1
            else:
                mp[num] = 1
        
        for num, c in mp.items():
            if c == 1:
                return num
```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>
   
    ```Java
   class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer,Integer> mp=new HashMap<>();
        //int[] a=new int[2];
        int a=0;
        for(int i:nums){
            mp.put(i,1+mp.getOrDefault(i,0));
        }
        for(int i:mp.keySet()){
            if(mp.get(i)==1){
                a=i;
                break;
            }
        }
        return a;
        
        }
    }
```
  </TabItem>
</Tabs>

#### Complexity Analysis

- Time complexity: $O(n)$, as we're iterating over the array only once.
- Space complexity: $O(n)$, because here we are using Hashmap to count occurences of elements.

## References

- **LeetCode Problem:** [Single Number ii](https://leetcode.com/problems/single-number-ii/description/)
- **Solution Link:** [Single Number ii on LeetCode](https://leetcode.com/problems/single-number-ii/post-solution/?submissionId=1273177780)
- **Authors Leetcode Profile:** [SivaniImmidi](https://leetcode.com/u/SivaniImmidi/)


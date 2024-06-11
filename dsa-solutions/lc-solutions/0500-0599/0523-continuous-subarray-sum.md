---
id: continuous-subarray-sum
title: continuous-subarray-sum
sidebar_label: 0523 continuous subarray sum
tags:
  - prefix sum + hashmap
  - LeetCode
  - Java
  - Python
  - C++
description: This is a solution to the Continuous Subarray Sum problem on LeetCode
---

## Problem Description

Given an integer array `nums` and an integer `k` return `true` if `nums` has a good subarray or `false` otherwise A good subarray is a subarray where

- Its length is at least two and
- The sum of the elements of the subarray is a multiple of `k`

Note that:
- A subarray is a contiguous part of the array
- An integer `x` is a multiple of `k` if there exists an integer `n` such that `$x = n * k$` 0 is always a multiple of `k`

### Examples

**Example 1:**



## Problem Description

Given an integer array nums and an integer k return true if nums has a good subarray or false otherwise
A good subarray is a subarray where:

 - its length is at least two and
 - the sum of the elements of the subarray is a multiple of k
Note that:
 - A subarray is a contiguous part of the array
 - An integer x is a multiple of k if there exists an integer n such that $x = n * k$ 0 is always a multiple of k

### Examples

**Example 1:**

```

Input: nums : [23,2,4,6,7], k : 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6

```

**Example 2:**


```
Input: root : nums : [23,2,6,4,7], k : 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer
```

**Example 3:**


```
Input: nums : [23,2,6,4,7], k : 13
Output: false
```


### Constraints

-  $1 \leq \text{nums.length} \leq  105$


---

## Solution for  Continuous Subarray Sum Problem

### Intuition
This is a prefix sum's problem Due to LC

    A good subarray is a subarray where:
    its length is at least two and
    the sum of the elements of the subarray is a multiple of k

modulo k there are 0,1,...k-1 totally k possible for prefix sum (mod k)
For this constraint $1 \leq \text{nums.length} \leq  105$ an $O(n^2)$ solution may lead to TLE


A hash map with care on prefix sum mod k to use is however a tip  The array version is used when `k<n` combining the hash map version that will be the faster than other solutions

Thanks to the comments of @Sergei proposing to use unordered_set a combination of bitset with unordered_set is implemented which outperforms all other solutions with the elapsed time 86ms


### Approach


   - First try uses array version for` mod_k(k)`
   - 2nd approach uses `unordered_map<int, vector<int>>` instead of an array which is accepted by LC
   - Since the computation uses `mod_k[prefix].front()`, a simple hash table `unordered_map<int, int> mod_k`is sufficient for this need
   - An acceptable version using array version when $k<n$ otherwise hash map which is a combination of both different data structures
   - Let prefix denote the current prefix sum modulo k The very crucial part is the following:




#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

   class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        n=len(nums)
        if n<2: return False
        mod_k={}
        prefix=0
        mod_k[0]=-1
        for i, x in enumerate(nums):
            prefix+=x
            prefix%=k
            if prefix in mod_k:
                if i>mod_k[prefix]+1:
                    return True
            else:
                mod_k[prefix]=i
        return False
```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java

   class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        int n = nums.length, prefSum = 0;
        Map<Integer, Integer> firstOcc = new HashMap<>();
        firstOcc.put(0, 0);

        for (int i = 0; i < n; i++) {
            prefSum = (prefSum + nums[i]) % k;
            if (firstOcc.containsKey(prefSum)) {
                if (i + 1 - firstOcc.get(prefSum) >= 2) {
                    return true;
                }
            } else {
                firstOcc.put(prefSum, i + 1);
            }
        }

        return false;
    }
}

```
</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@parikhitkurmi"/>

   ```cpp
//cpp

   class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        map<int , int> mp ; 
        mp[0] = 0 ;
        int sum = 0 ; 
        for(int i = 0 ; i< nums.size() ; i++ ) {
            sum += nums[i] ;
            int rem = sum%k ;

            if(mp.find(rem)==mp.end()){
                mp[rem] = i+1 ; 
                
            }else if (mp[rem]  <  i ) {
                return true ;

            }


        } 
         return false ;
        
    }
};

```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
- **Solution Link:** [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/submissions/1281964300/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)
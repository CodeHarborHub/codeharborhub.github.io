---
id: count-equal-and-divisible-pairs-in-an-array
title: Count Equal and Divisible Pairs in an Array
sidebar_label: 2176-Count-Equal-And-Divisible-Pairs-In-An-Array
tags:
  - Array

description: The problem no. is 2176. The Problem is to Count Equal and Divisible Pairs in an Array.
---

## Problem Description
Given a 0-indexed integer array `nums` of length n and an integer `k`, return the number of pairs `(i, j)` where `0 <= i < j < n`, such that `nums[i] == nums[j]` and `(i * j)` is divisible by `k`.


### Example

**Example 1:**
```
Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
```


**Example 2:**
```
Input: nums = [1,2,3,4], k = 1
Output: 0
Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.
```
### Constraints

- `1 <= nums[i], k <= 100`

## Solution Approach

### Intuition:

To efficiently Count Equal and Divisible Pairs in an Array



## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  countPairs(nums, k) {
    const n = nums.length;
    let cnt = 0;
    for(let i = 0; i < n - 1; i++){
      for(let j = i + 1; j < n; j++){
        if(nums[i] === nums[j]){
          if((i * j) % k === 0) cnt++;
        }
      }
    }
    return cnt;
  }
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    
class Solution {
  countPairs(nums: number[], k: number): number {
    const n = nums.length;
    let cnt = 0;
    for(let i = 0; i < n - 1; i++){
      for(let j = i + 1; j < n; j++){
        if(nums[i] === nums[j]){
          if((i * j) % k === 0) cnt++;
        }
      }
    }
    return cnt;
  }
}


    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
    def countPairs(self, nums, k):
        n = len(nums)
        cnt = 0
        for i in range(n - 1):
            for j in range(i + 1, n):
                if nums[i] == nums[j]:
                    if (i * j) % k == 0:
                        cnt += 1
        return cnt
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int countPairs(int[] nums, int k) {
        int n = nums.length;
        int cnt = 0;
        for(int i = 0; i < n - 1; i++){
            for(int j = i + 1; j < n; j++){
                if(nums[i] == nums[j]){
                    if((i * j) % k == 0) cnt++;
                }
            }
        }
        return cnt;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp


```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n^2)$$, where n is the length of the input array nums. This is because the algorithm uses nested loops to iterate over all pairs of elements in the array.
- The space complexity is $$O(1)$$ because we are not using any extra space.
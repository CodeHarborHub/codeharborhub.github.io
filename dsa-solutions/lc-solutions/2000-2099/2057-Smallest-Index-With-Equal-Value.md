---
id: smallest-index-with-equal-value
title: Smallest Index With Equal Value
sidebar_label: 2057-Smallest-Index-With-Equal-Value
tags:
  - Array

description: The problem no. is 2057. The Problem is to find Smallest Index With Equal Value.
---

## Problem Description
Given a 0-indexed integer array `nums`, return the smallest index `i` of `nums` such that `i mod 10 == nums[i]`, or `-1` if such index does not exist.

`x mod y` denotes the remainder when `x` is divided by `y`.


### Example

**Example 1:**


```
Input: nums = [0,1,2]
Output: 0
Explanation: 
i=0: 0 mod 10 = 0 == nums[0].
i=1: 1 mod 10 = 1 == nums[1].
i=2: 2 mod 10 = 2 == nums[2].
All indices have i mod 10 == nums[i], so we return the smallest index 0.
```
**Example 2:**
```
Input: nums = [4,3,2,1]
Output: 2
Explanation: 
i=0: 0 mod 10 = 0 != nums[0].
i=1: 1 mod 10 = 1 != nums[1].
i=2: 2 mod 10 = 2 == nums[2].
i=3: 3 mod 10 = 3 != nums[3].
2 is the only index which has i mod 10 == nums[i].
```
### Constraints

- `1 <= nums.length <= 100`

## Solution Approach

### Intuition:

To efficiently determine the Smallest Index With Equal Value 
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  smallestEqual(nums) {
    const n = nums.length;
    let mini = Infinity;
    for(let i = 0; i < n; i++){
      if(i % 10 === nums[i]) mini = Math.min(mini, i);
    }
    if(mini === Infinity) return -1;
    return mini;
  }
}



    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  smallestEqual(nums: number[]): number {
    const n = nums.length;
    let mini = Infinity;
    for(let i = 0; i < n; i++){
      if(i % 10 === nums[i]) mini = Math.min(mini, i);
    }
    if(mini === Infinity) return -1;
    return mini;
  }
}




    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
   class Solution:
    def smallestEqual(self, nums):
        n = len(nums)
        mini = float('inf')
        for i in range(n):
            if i % 10 == nums[i]:
                mini = min(mini, i)
        if mini == float('inf'):
            return -1
        return mini



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int smallestEqual(int[] nums) {
        int n = nums.length;
        int mini = Integer.MAX_VALUE;
        for(int i = 0; i < n; i++){
            if(i % 10 == nums[i]) mini = Math.min(mini, i);
        }
        if(mini == Integer.MAX_VALUE) return -1;
        return mini;
    }
}




    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        int n = nums.size();
        int mini = INT_MAX;
        for(int i=0; i<n; i++){
            if(i%10==nums[i]) mini = min(mini, i);
        }
        if(mini==INT_MAX) return -1;
        return mini;
    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n)$$ where n is the length of the input array nums. This is because the algorithm iterates through the array once, performing a constant amount of work for each element.
- The space complexity is $$O(1)$$ because we are not using any extra space.
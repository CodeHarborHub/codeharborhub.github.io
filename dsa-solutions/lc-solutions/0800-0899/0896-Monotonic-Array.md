---
id: monotonic-array
title:  Monotonic Array
sidebar_label: 896-Monotonic-Array
tags:
  - Array

description: The problem no. is 1351. The Problem is to find monotonic array.
---

## Problem Description
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` if the given array is monotonic, or `false` otherwise.


### Example

**Example 1:**


```
Input: nums = [1,2,2,3]
Output: true
```
**Example 2:**
```
Input: nums = [6,5,4,4]
Output: true
```
### Constraints

- `-10^5 <= nums[i] <= 10^5`

## Solution Approach

### Intuition:

To efficiently determine the monotonic array
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  isMonotonic(nums) {
    const n = nums.length;
    let increasing = true;
    let decreasing = true;
    for(let i = 0; i < n - 1; i++){
      if(nums[i] > nums[i+1]) increasing = false;
      if(nums[i] < nums[i+1]) decreasing = false;
    }
    return increasing || decreasing;
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  isMonotonic(nums: number[]): boolean {
    const n = nums.length;
    let increasing = true;
    let decreasing = true;
    for(let i = 0; i < n - 1; i++){
      if(nums[i] > nums[i+1]) increasing = false;
      if(nums[i] < nums[i+1]) decreasing = false;
    }
    return increasing || decreasing;
  }
}




    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def isMonotonic(self, nums):
        n = len(nums)
        increasing = True
        decreasing = True
        for i in range(n - 1):
            if nums[i] > nums[i+1]:
                increasing = False
            if nums[i] < nums[i+1]:
                decreasing = False
        return increasing or decreasing



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public boolean isMonotonic(int[] nums) {
        int n = nums.length;
        boolean increasing = true;
        boolean decreasing = true;
        for(int i = 0; i < n - 1; i++){
            if(nums[i] > nums[i+1]) increasing = false;
            if(nums[i] < nums[i+1]) decreasing = false;
        }
        return increasing || decreasing;
    }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        int n = nums.size();
        bool increasing = true;
        bool decreasing = true;
        
        for(int i=0; i<n-1; i++){
            if(nums[i] > nums[i+1]) increasing = false;
            if(nums[i] < nums[i+1]) decreasing = false;
        }
        
        return increasing || decreasing;
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
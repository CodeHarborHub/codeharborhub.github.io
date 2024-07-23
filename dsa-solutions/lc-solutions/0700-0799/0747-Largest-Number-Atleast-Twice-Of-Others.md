---
id: largest-number-atleast-twice-of-others
title:  Largest Number At Least Twice of Others
sidebar_label: 747-Largest-Number-Atleast-Twice-Of-Other
tags:
  - Array
  - Sorting
---

## Problem Description
You are given an integer array `nums` where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return `-1` otherwise.

### Example

**Example 1:**


```
Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
```
**Example 2:**
```
Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
```
### Constraints

- `0 <= nums[i] <= 100`

## Solution Approach

### Intuition:

To efficiently determine Largest Number At Least Twice of Others
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  dominantIndex(nums) {
    let cnt = 0, index = -1;
    let maxi = -Infinity, smax = -Infinity;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] >= maxi){
        smax = maxi;
        maxi = nums[i];
        index = i;
      } else if(nums[i] < maxi && nums[i] >= smax){
        smax = nums[i];
      }
    }
    if(maxi >= 2 * smax) return index;
    return -1;
  }
}





    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  dominantIndex(nums: number[]): number {
    let cnt = 0, index = -1;
    let maxi = -Infinity, smax = -Infinity;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] >= maxi){
        smax = maxi;
        maxi = nums[i];
        index = i;
      } else if(nums[i] < maxi && nums[i] >= smax){
        smax = nums[i];
      }
    }
    if(maxi >= 2 * smax) return index;
    return -1;
  }
}




    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
  class Solution:
    def dominantIndex(self, nums):
        cnt = 0
        index = -1
        maxi = float('-inf')
        smax = float('-inf')
        for i in range(len(nums)):
            if nums[i] >= maxi:
                smax = maxi
                maxi = nums[i]
                index = i
            elif nums[i] < maxi and nums[i] >= smax:
                smax = nums[i]
        if maxi >= 2 * smax:
            return index
        return -1





    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int dominantIndex(int[] nums) {
        int cnt = 0, index = -1;
        int maxi = Integer.MIN_VALUE, smax = Integer.MIN_VALUE;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] >= maxi){
                smax = maxi;
                maxi = nums[i];
                index = i;
            } else if(nums[i] < maxi && nums[i] >= smax){
                smax = nums[i];
            }
        }
        if(maxi >= 2 * smax) return index;
        return -1;
    }
}




    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int cnt=0, index = -1;
        int maxi = INT_MIN;
        int smax = INT_MIN;
        for(int i=0; i<nums.size(); i++){
            if(nums[i]>=maxi){
                smax = maxi;
                maxi = nums[i];
                index = i;
            }
            else if(nums[i]<maxi && nums[i]>=smax){
                smax = nums[i];
            }
        }
        if(maxi>=2*smax) return index;
        return -1;
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
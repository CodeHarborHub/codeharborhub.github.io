---
id: keep-multiplying-found-values-by-two
title:  Keep Multiplying Found Values by Two
sidebar_label: 2154-Keep-Multiplying-Found-Values-By-Two
tags:
  - Array
  - Hash Table
  - Sorting
  - Simulation

description: The problem no. is 1351. The Problem is Count Negative Numbers in a Sorted Matrix.
---

## Problem Description
You are given an array of integers `nums`. You are also given an integer `original` which is the first number that needs to be searched for in `nums`.

You then do the following steps:

If `original` is found in `nums`, multiply it by two (i.e., set `original = 2 * original)`.
Otherwise, stop the process.
Repeat this process with the new number as long as you keep finding the number.
Return the final value of `original`.


### Example

**Example 1:**


```
Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.
```
**Example 2:**
```
Input: nums = [2,7,9], original = 4
Output: 4
Explanation:
- 4 is not found in nums. Thus, 4 is returned.
```
### Constraints

- `1 <= nums[i], original <= 1000`

## Solution Approach

### Intuition:

To efficiently Keep Multiplying Found Values by Two
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  findFinalValue(nums, original) {
    let n = nums.length;
    let i = 0;
    while(i < n){
      if(nums[i] === original){
        original *= 2;
        i = 0;
      } else {
        i++;
      }
    }
    return original;
  }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    
class Solution {
  findFinalValue(nums: number[], original: number): number {
    let n = nums.length;
    let i = 0;
    while(i < n){
      if(nums[i] === original){
        original *= 2;
        i = 0;
      } else {
        i++;
      }
    }
    return original;
  }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def findFinalValue(self, nums, original):
        n = len(nums)
        i = 0
        while i < n:
            if nums[i] == original:
                original *= 2
                i = 0
            else:
                i += 1
        return original


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int findFinalValue(int[] nums, int original) {
        int n = nums.length;
        int i = 0;
        while(i < n){
            if(nums[i] == original){
                original *= 2;
                i = 0;
            } else {
                i++;
            }
        }
        return original;
    }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        int n = nums.size();
        int i = 0;
        while(i<n){
        if(nums[i]==original){
            original*=2;
            i=0;
        }
        else i++;

        }
        return original;
    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m*n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(log(n))$$ where n is the length of the input array nums. This is because in the worst case, the algorithm may need to iterate through the entire array for each doubling of original, resulting in a linear time complexity.
- The space complexity is $$O(1)$$ because we are not using any extra space.
---
id: find-greatest-common-divisor-of-array
title:  Find Greatest Common Divisor of Array
sidebar_label: 1979-Find-Greatest-Common-Divisor-Of-Array
tags:
  - Math
  - Array
  - Number Theory
---

## Problem Description
Given an integer array `nums`, return the greatest common divisor of the smallest number and largest number in `nums`.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.


### Example

**Example 1:**


```
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
```
**Example 2:**
```
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.
```
### Constraints

- `1 <= nums[i] <= 1000`

## Solution Approach

### Intuition:

To efficiently determine Find Greatest Common Divisor of Array.
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  findGCD(nums) {
    let n = nums.length;
    let mini = Math.max(...nums);
    let maxi = Math.min(...nums);
    let divisor = 1;
    for(let i=1; i<=mini; i++){
      if(mini%i==0 && maxi%i==0) divisor = i;
    }
    return divisor;
  }
}



    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  findGCD(nums: number[]): number {
    let n = nums.length;
    let mini = Math.max(...nums);
    let maxi = Math.min(...nums);
    let divisor = 1;
    for(let i=1; i<=mini; i++){
      if(mini%i==0 && maxi%i==0) divisor = i;
    }
    return divisor;
  }
}


    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
  def findGCD(self, nums: List[int]) -> int:
    n = len(nums)
    mini = max(nums)
    maxi = min(nums)
    divisor = 1
    for i in range(1, mini+1):
      if mini%i==0 and maxi%i==0:
        divisor = i
    return divisor



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
  public int findGCD(int[] nums) {
    int n = nums.length;
    int mini = Arrays.stream(nums).max().getAsInt();
    int maxi = Arrays.stream(nums).min().getAsInt();
    int divisor = 1;
    for(int i=1; i<=mini; i++){
      if(mini%i==0 && maxi%i==0) divisor = i;
    }
    return divisor;
  }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int findGCD(vector<int>& nums) {
        int n = nums.size();
        int mini = INT_MAX;
        int maxi = INT_MIN;
        int divisor = 1;

        for(int i=0; i<n; i++){
            if(nums[i]>maxi) maxi = nums[i];
             if(nums[i]<mini) mini = nums[i];
        }
        for(int i=1; i<=mini; i++){
            if(mini%i==0 && maxi%i==0) divisor = i;
        }
        return divisor;
    }
};
```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n+mini)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n + mini)$$ where n is the length of the input array nums and mini is the smallest element in the array. This is because the function iterates over the array once to find the minimum and maximum values, and then iterates up to the minimum value to find the GCD.
- The space complexity is $$O(1)$$ because we are not using any extra space.
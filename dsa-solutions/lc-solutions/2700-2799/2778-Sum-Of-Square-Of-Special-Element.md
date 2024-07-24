---
id: sum-of-square-of-special-element
title:  Sum of Squares of Special Elements 
sidebar_label: 2778-Sum-Of-Square-Of-Special-Element
tags:
  - Array
  - Enumeration

description: "This is a solution to the  2778. Find Sum of Squares of Special Elements."
---

## Problem Description
You are given a 1-indexed integer array `nums` of length `n`.

An element `nums[i]` of `nums` is called special if `i` divides `n`, i.e. `n % i == 0`.

Return the sum of the squares of all special elements of `nums`.


### Example

**Example 1:**


```
Input: nums = [1,2,3,4]
Output: 21
Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4. 
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21. 
```
**Example 2:**
```
Input: nums = [2,7,1,19,18,3]
Output: 63
Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6. 
Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63.
```
### Constraints

- `1 <= nums.length == n <= 50`

## Solution Approach

### Intuition:

To efficiently determine the sym of square of the special elements.
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
   class Solution {
  sumOfSquares(nums) {
    let n = nums.length;
    let sqr = 0;
    for (let i = 0; i < n; i++) {
      if (n % (i + 1) === 0) {
        sqr += nums[i] * nums[i];
      }
    }
    return sqr;
  }
}



    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  sumOfSquares(nums: number[]): number {
    let n: number = nums.length;
    let sqr: number = 0;
    for (let i: number = 0; i < n; i++) {
      if (n % (i + 1) === 0) {
        sqr += nums[i] * nums[i];
      }
    }
    return sqr;
  }
}

    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    
class Solution:
  def sumOfSquares(self, nums: List[int]) -> int:
    n = len(nums)
    sqr = 0
    for i in range(n):
      if n % (i + 1) == 0:
        sqr += nums[i] * nums[i]
    return sqr



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
  public int sumOfSquares(int[] nums) {
    int n = nums.length;
    int sqr = 0;
    for (int i = 0; i < n; i++) {
      if (n % (i + 1) == 0) {
        sqr += nums[i] * nums[i];
      }
    }
    return sqr;
  }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp

class Solution {
public:
    int sumOfSquares(vector<int>& nums) {
        int n = nums.size();
        int sqr = 0;
        for(int i=0; i<n; i++){
            if(n%(i+1)==0){
                sqr+=nums[i]*nums[i];
            }
        }
        return sqr;
    }
};
   ```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n)$$ where n is the length of the input array nums. This is because the function iterates through the array once, performing a constant amount of work for each element.
- The space complexity is $$O(1)$$ because we are not using any extra space.
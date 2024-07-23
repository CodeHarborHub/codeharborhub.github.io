---
id: find-numbers-with-even-number-of-digits
title:  Find Numbers with Even Number of Digits
sidebar_label: 1295-Find-Numbers-With-Even-Number-Of-Digits
tags:
  - Array
---

## Problem Description
Given an array `nums` of integers, return how many of them contain an even number of digits.


### Example

**Example 1:**


```
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
```
**Example 2:**
```
Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
```
### Constraints

- `1 <= nums[i] <= 10^5`

## Solution Approach

### Intuition:

To efficiently determine Find Numbers with Even Number of Digits
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
  findNumbers(nums) {
    let rem = 0, cnt1 = 0, cnt2 = 0;
    const n = nums.length;
    for(let i=0; i<n; i++){
      cnt1 = 0;
      let num = nums[i];
      while(num>0){
        rem = num%10;
        cnt1++;
        num=Math.floor(num/10);
      }
      if(cnt1%2==0) cnt2++;
    }
    return cnt2;
  }
}




    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
  findNumbers(nums: number[]): number {
    let rem = 0, cnt1 = 0, cnt2 = 0;
    const n = nums.length;
    for(let i=0; i<n; i++){
      cnt1 = 0;
      let num = nums[i];
      while(num>0){
        rem = num%10;
        cnt1++;
        num=Math.floor(num/10);
      }
      if(cnt1%2==0) cnt2++;
    }
    return cnt2;
  }
}



    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
  def findNumbers(self, nums: List[int]) -> int:
    rem = 0
    cnt1 = 0
    cnt2 = 0
    n = len(nums)
    for i in range(n):
      cnt1 = 0
      num = nums[i]
      while num>0:
        rem = num%10
        cnt1+=1
        num=num//10
      if cnt1%2==0:
        cnt2+=1
    return cnt2




    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
  public int findNumbers(int[] nums) {
    int rem = 0, cnt1 = 0, cnt2 = 0;
    int n = nums.length;
    for(int i=0; i<n; i++){
      cnt1 = 0;
      int num = nums[i];
      while(num>0){
        rem = num%10;
        cnt1++;
        num=num/10;
      }
      if(cnt1%2==0) cnt2++;
    }
    return cnt2;
  }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int rem = 0, cnt1 = 0, cnt2 = 0;
        int n = nums.size();
        for(int i=0; i<n; i++){
            cnt1 = 0;
            while(nums[i]>0){
            rem = nums[i]%10;
            cnt1++;
            nums[i]/=10;

            }
        if(cnt1%2==0) cnt2++;
        }
        
        return cnt2;
    }
};
```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n*m)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(n*m)$$ where n is the length of the input array nums and m is the maximum number of digits in an element of the array. This is because the function iterates over each element in the array (O(n*m)) and for each element, it performs a while loop that iterates up to the number of digits in the element (O(m)).
- The space complexity is $$O(1)$$ because we are not using any extra space.
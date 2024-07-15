---
id: how-many-numbers-are-smaller-than-the-current-number
title:  How Many Numbers Are Smaller Than the Current Number
sidebar_label: 1365-How-Many-Numbers-Are-Smaller-Than-The-Current-Number
tags:
  - Array
  - Hash Table
  - Sorting
  - Counting

description: The problem no. is 1365. The Problem is How Many Numbers Are Smaller Than the Current Number
---

## Problem Description
Given the array `nums`, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid `j's` such that `j != i` and `nums[j] < nums[i]`.

Return the answer in an array.


### Example

**Example 1:**


```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
```
**Example 2:**
```
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
```
### Constraints

- `2 <= nums.length <= 500`

## Solution Approach

### Intuition:

To efficiently determine the Numbers Are Smaller Than the Current Number
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
    smallerNumbersThanCurrent(nums) {
        let n = nums.length;
        let ans = new Array(n);
        for (let i = 0; i < n; i++) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                if (nums[i] > nums[j]) {
                    cnt++;
                }
            }
            ans[i] = cnt;
        }
        return ans;
    }
}


    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
    smallerNumbersThanCurrent(nums: number[]): number[] {
        let n = nums.length;
        let ans: number[] = new Array(n);
        for (let i = 0; i < n; i++) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                if (nums[i] > nums[j]) {
                    cnt++;
                }
            }
            ans[i] = cnt;
        }
        return ans;
    }
}




    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0] * n
        for i in range(n):
            cnt = 0
            for j in range(n):
                if nums[i] > nums[j]:
                    cnt += 1
            ans[i] = cnt
        return ans




    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];
        for (int i = 0; i < n; i++) {
            int cnt = 0;
            for (int j = 0; j < n; j++) {
                if (nums[i] > nums[j]) {
                    cnt++;
                }
            }
            ans[i] = cnt;
        }
        return ans;
    }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n);
        for(int i=0; i<n; i++){
            int cnt = 0;
            for(int j=0; j<n; j++){
                if(nums[i]>nums[j]){
                    cnt++;
                }
            }
            ans[i]=cnt;
        }
        return ans;
    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n^2)$$
- Space Complexity: $$O(n)$$
- The time complexity is $$O(log(n))$$ where n is the length of the input array nums. This is because the algorithm uses a nested loop structure, where each element in the array is compared to every other element.
- The space complexity is $$O(n)$$ where n is the length of the input array nums. This is because the algorithm creates a new array ans of the same length as the input array to store the results.

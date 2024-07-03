---
id: maximum-ascending-subarray-sum
title:  Maximum Ascending Subarray Sum
sidebar_label: 1800 - Maximum Ascending Subarray Sum
tags:
- Array


description: "This is a solution to the  Maximum Ascending Subarray Sum problem on LeetCode."
---

## Problem Description
Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where `l <= i < r, numsi  < numsi+1`. Note that a subarray of size 1 is ascending.
### Examples

**Example 1:**

```
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
```

**Example 2:**
```
Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
```

### Constraints

- `1 <= arr.length <= 10^5`

## Solution for Maximum Ascending Subarray Sum Problem
### Approach 


1. **Initialization**:
   - Initialize a variable `sum` to keep track of the maximum ascending subarray sum found.
   
2. **Iterate Through the Array**:
   - Use an outer loop to iterate through each element of the array.
   - For each element, initialize `prev` to the current element and `curr` to the same value. `prev` keeps track of the previous element in the current ascending subarray, and `curr` keeps the sum of the current ascending subarray.
   
3. **Find Ascending Subarrays**:
   - Use an inner loop to continue from the next element of the outer loop index.
   - If the current element in the inner loop is greater than `prev`, add it to `curr` and update `prev`.
   - If the current element is not greater than `prev`, break out of the inner loop as the subarray is no longer strictly increasing.

4. **Update Maximum Sum**:
   - After exiting the inner loop, update `sum` with the maximum value between `sum` and `curr`.

5. **Return the Result**:
   - After iterating through all elements, return the value of `sum` as the result.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      function maxAscendingSum(nums) {
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            let prev = nums[i];
            let curr = prev;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > prev) {
                    curr += nums[j];
                    prev = nums[j];
                } else {
                    break;
                }
            }
            sum = Math.max(sum, curr);
        }
        return sum;
    }
      const input = [10,20,30,5,10,50]
      const output =maxAscendingSum(input) ;
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(n^2) $ because of sorting, where n is the size of array
    - Space Complexity: $ O(1) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
 class Solution {
    maxAscendingSum(nums) {
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            let prev = nums[i];
            let curr = prev;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > prev) {
                    curr += nums[j];
                    prev = nums[j];
                } else {
                    break;
                }
            }
            sum = Math.max(sum, curr);
        }
        return sum;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    maxAscendingSum(nums: number[]): number {
        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            let prev = nums[i];
            let curr = prev;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > prev) {
                    curr += nums[j];
                    prev = nums[j];
                } else {
                    break;
                }
            }
            sum = Math.max(sum, curr);
        }
        return sum;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
 class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        sum = 0

        for i in range(len(nums)):
            prev = nums[i]
            curr = prev
            for j in range(i + 1, len(nums)):
                if nums[j] > prev:
                    curr += nums[j]
                    prev = nums[j]
                else:
                    break
            sum = max(sum, curr)
        
        return sum

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
 public class Solution {
    public int maxAscendingSum(int[] nums) {
        int sum = 0;

        for (int i = 0; i < nums.length; i++) {
            int prev = nums[i];
            int curr = prev;
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] > prev) {
                    curr += nums[j];
                    prev = nums[j];
                } else {
                    break;
                }
            }
            sum = Math.max(sum, curr);
        }
        return sum;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int sum=0;

        for(int i=0;i<nums.size();i++)
        {
            int prev=nums[i];
            int curr = prev;
            for(int j=i+1;j<nums.size();j++)
            {
                if(nums[j]>prev)
                {
                    curr+=nums[j];
                    prev= nums[j];
                }
                else{
                    break;
                }
            }
            sum=max(sum , curr);
        }
        return sum;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-ascending-subarray-sum/description/)


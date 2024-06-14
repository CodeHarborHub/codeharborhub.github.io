---
id: rotate-array
title: Rotate Array
sidebar_label: 0189 Rotate Array
tags:
  - Array
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Rotate Array problem on LeetCode."
---

## Problem Description

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

### Examples

**Example 1:**

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

```

**Example 2:**

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

### Constraints

- $1 <= nums.length <= 105$
- $-231 <= nums[i] <= 231 - 1$
- $0 <= k <= 105$


## Solution for Candy Distribution Problem

### Intuition And Approach

To rotate an array to the right by k steps, we need to move the last k elements to the front and shift the rest of the elements to the right. A straightforward way to achieve this in-place (without using extra space for another array) is to use the reversal method.

Here is the step-by-step approach:

## Adjust k:

If k is greater than the length of the array, rotating by k steps is the same as rotating by k % n steps (where n is the length of the array). This is because rotating by the length of the array brings it back to the original position.
Calculate k = k % n.

## Reverse the entire array:

By reversing the entire array, the last k elements (which we want to move to the front) will be at the beginning, but in reverse order.
For example, reversing [1, 2, 3, 4, 5, 6, 7] gives [7, 6, 5, 4, 3, 2, 1].

## Reverse the first k elements:

The first k elements are now the elements that were originally at the end of the array. Reverse these to restore their original order.
Continuing the example, reversing the first 3 elements of [7, 6, 5, 4, 3, 2, 1] gives [5, 6, 7, 4, 3, 2, 1].

## Reverse the remaining n - k elements:

Finally, reverse the rest of the array (from the k-th element to the end) to restore their order.
In the example, reversing the elements from index 3 to 6 of [5, 6, 7, 4, 3, 2, 1] gives [5, 6, 7, 1, 2, 3, 4].



#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    class Solution {
    public void rotate(int[] nums, int k) {
        // Ensure k is within the bounds of the array length
        k = k % nums.length;
        
        // Reverse the entire array
        reverse(nums, 0, nums.length - 1);
        
        // Reverse the first k elements
        reverse(nums, 0, k - 1);
        
        // Reverse the remaining elements
        reverse(nums, k, nums.length - 1);
    }
    
    // Helper function to reverse elements in the array from start to end
    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class Solution(object):
    def rotate(self, nums, k):
        k = k % len(nums)
        self.reverse(nums, 0, len(nums) - 1)
        self.reverse(nums, 0, k - 1)
        self.reverse(nums, k, len(nums) - 1)
    def reverse(self, nums, start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    ```
  </TabItem>

 <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
  ```cpp
   
    #include <vector>
    using namespace std;

    class Solution {
    public:
    void rotate(vector<int>& nums, int k) {
        // Ensure k is within the bounds of the array length
        k = k % nums.size();
        
        // Reverse the entire array
        reverse(nums, 0, nums.size() - 1);
        
        // Reverse the first k elements
        reverse(nums, 0, k - 1);
        
        // Reverse the remaining elements
        reverse(nums, k, nums.size() - 1);
    }
    
    private:
    void reverse(vector<int>& nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
};
    ```
  </TabItem>
</Tabs>



## References

- **LeetCode Problem:** [House robber Problem](https://leetcode.com/problems/house-robber/)
- **Solution Link:** [House Robber Solution on LeetCode](https://leetcode.com/problems/house-robber/solutions/5273312/house-robber-solution)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

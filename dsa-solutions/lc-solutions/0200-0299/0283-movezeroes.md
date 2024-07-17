---
id: movezeroes
title: Move Zeroes
sidebar_label: 0283-Move Zeroes
tags:
  - Array
  - Two Pointers
  
description: "This is a solution to the move zeroes in leetcode"
---

## Problem Description

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

 
### Examples

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

```
**Example 2:**
```
Input: nums = [0]
Output: [0]
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= nums.length <= 104`
- `-231 <= nums[i] <= 231 - 1`



### Solution
## Approach
The approach to solving the "Move Zeroes" problem involves iterating through the list while maintaining a pointer to track the position for non-zero elements. Initialize a pointer l to zero, which represents the index where the next non-zero element should be placed. As you traverse the list with another pointer r, check each element. If an element is non-zero, swap it with the element at index l and then increment l. This effectively moves non-zero elements to the front while shifting zeros towards the end. The result is that all non-zero elements are moved to the beginning of the list in their original order, followed by all zeros. This method ensures in-place modification of the list with a linear time complexity of O(n) and constant space complexity O(1).
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int l = 0;  
        for (int r = 0; r < nums.size(); ++r) {
            if (nums[r] != 0) {
                swap(nums[l], nums[r]);  
                l++;  
            }
        }
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public void moveZeroes(List<Integer> nums) {
        int l = 0;  
        for (int r = 0; r < nums.size(); r++) {
            if (nums.get(r) != 0) {
                
                int temp = nums.get(l);
                nums.set(l, nums.get(r));
                nums.set(r, temp);
                l++;  
        }
    }
}
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        
        l=0
        for r in range(len(nums)):
            if nums[r]!=0:
                nums[l],nums[r]=nums[r],nums[l]
                l=l+1
        return nums   

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

- **Solution Link**: [Move Zeroes](https://leetcode.com/problems/move-zeroes/post-solution/?submissionId=1193763087)

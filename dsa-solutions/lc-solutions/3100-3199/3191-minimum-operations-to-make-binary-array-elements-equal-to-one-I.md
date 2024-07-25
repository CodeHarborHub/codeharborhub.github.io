---
id: minimum-operations-to-make-binary-array-elements-equal-to-one-I
title:  Minimum Operations to Make Binary Array Elements Equal to One I
sidebar_label: 3191-Minimum Operations to Make Binary Array Elements Equal to One I
tags:
  - Array
  - Sliding Window
  - Prefix Sum
  
description: "This is a solution to the Minimum Operations to Make Binary Array Elements Equal to One I in leetcode"
---

## Problem Description

You are given a binary array nums.

You can do the following operation on the array any number of times (possibly zero):

-  Choose any 3 consecutive elements from the array and flip all of them.
Flipping an element means changing its value from 0 to 1, and from 1 to 0.

Return the minimum number of operations required to make all elements in nums equal to 1. If it is impossible, return -1.

 

### Examples

**Example 1:**

```
Input: nums = [0,1,1,1,0,0]
Output: 3
Explanation:
We can do the following operations:
Choose the elements at indices 0, 1 and 2. The resulting array is nums = [1,0,0,1,0,0].
Choose the elements at indices 1, 2 and 3. The resulting array is nums = [1,1,1,0,0,0].
Choose the elements at indices 3, 4 and 5. The resulting array is nums = [1,1,1,1,1,1].

```
**Example 2:**
```
Input: nums = [0,1,1,1]

Output: -1

Explanation:
It is impossible to make all elements equal to 1.

 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(1)$

### Constraints

- `3 <= nums.length <= 105`
- `3 <= nums.length <= 105`



### Solution
## Approach
The approach involves iterating through the array and flipping segments of three consecutive elements whenever a 0 is encountered, starting from the beginning. For each 0 at index "i", the elements at "i", "i+1", and "i+2" are flipped (0 to 1, and 1 to 0), and an operation counter is incremented. After processing up to the third last element, the array is checked from the third last to the last element to ensure no 0s remain. If any 0s are found, return -1, indicating it is impossible to make all elements 1; otherwise, return the counter representing the number of operations performed.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int minOperations(std::vector<int>& nums) {
        int c = 0;
        for (int i = 0; i <= nums.size() - 3; ++i) {
            if (nums[i] == 0) {
                nums[i] = 1 - nums[i];
                nums[i + 1] = 1 - nums[i + 1];
                nums[i + 2] = 1 - nums[i + 2];
                c++;
            }
        }
        for (int i = nums.size() - 3; i < nums.size(); ++i) {
            if (nums[i] == 0)
                return -1;
        }
        return c;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int minOperations(int[] nums) {
        int c=0;
        for(int i=0;i<=nums.length-3;++i){
            if(nums[i]==0){
                nums[i]=1-nums[i];
                nums[i+1]=1-nums[i+1];
                nums[i+2]=1-nums[i+2];
                c++;
            }
        }
        for(int i=nums.length-3;i<nums.length;++i){
            if(nums[i]==0)
                return -1;
        }
        return c;
    }
}
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def minOperations(self, nums: list[int]) -> int:
        c = 0
        for i in range(len(nums) - 2):
            if nums[i] == 0:
                nums[i] = 1 - nums[i]
                nums[i + 1] = 1 - nums[i + 1]
                nums[i + 2] = 1 - nums[i + 2]
                c += 1
        
        for i in range(len(nums) - 3, len(nums)):
            if nums[i] == 0:
                return -1
        
        return c


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Minimum Operations to Make Binary Array Elements Equal to One I](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/description/)

- **Solution Link**: [Minimum Operations to Make Binary Array Elements Equal to One I](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/post-solution/?submissionId=1296819334)

---
id: running-sum-of-1d-array
title: Running Sum of 1d Array
sidebar_label: 1480-Running Sum of 1d Array
tags:
  - Array
  - Prefix sum
  
description: "This is a solution to the Running Sum of 1d Array in leetcode"
---

## Problem Description

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

 
### Examples

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```
**Example 2:**
```
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- ` 1<= nums.length <= 1000`
- `10^6 <= nums[i] <= 10^6`



### Solution
## Approach
The approach involves creating a result array of the same length as the input array, initialized to 1. We maintain a cumulative sum variable (sum1) that starts at 0. As we iterate through the input array, we update each element of the result array to be the current element plus the cumulative sum, then update the cumulative sum by adding the current element. This process ensures that each element in the result array represents the running sum of the input array up to that point.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    std::vector<int> runningSum(std::vector<int>& nums) {
        std::vector<int> res(nums.size(), 1);
        int sum1 = 0;
        for (int i = 0; i < nums.size(); ++i) {
            res[i] = nums[i] + sum1;
            sum1 += nums[i];
        }
        return res;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int[] runningSum(int[] nums) {
        int[] res = new int[nums.length];
        int sum1 = 0;
        for (int i = 0; i < nums.length; i++) {
            res[i] = nums[i] + sum1;
            sum1 += nums[i];
        }
        return res;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        res=[1]*(len(nums))
        sum1=0
        for i in range(len(nums)):
            res[i]=nums[i]+sum1
            sum1+=nums[i]
        return res

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/description/)

- **Solution Link**: [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/post-solution/?submissionId=1192409834)

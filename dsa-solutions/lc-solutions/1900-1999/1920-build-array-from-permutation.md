---
id: build-array-from-permutation
title: Build Array From Permutation
sidebar_label: 1920-Build Array From Permutation
tags:
  - Array
  - Simulation
 
description: "This is a solution to the build array from permutation in a string in leetcode"
---

## Problem Description

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where `ans[i] = nums[nums[i]]` for each `0 <= i < nums.length` and return it.

A zero-based permutation nums is an array of distinct integers from `0` to `nums.length - 1` (inclusive).
 

### Examples

**Example 1:**

```
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]

```
**Example 2:**
```
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] < nums.length`



### Solution
## Approach
The given approach involves constructing a new array ans based on the input array nums, where each element in ans is determined by the value at the index specified by the corresponding element in nums. Specifically, for each index i in nums, the value at ans[i] is set to nums[nums[i]]. To implement this, an empty list ans is initialized, and then a loop iterates over each index i in nums. During each iteration, nums[nums[i]] is appended to ans. This process continues until all elements of nums have been processed, and the resulting list ans is returned. This approach ensures that the new array is built efficiently in a single pass through the input array.
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    std::vector<int> buildArray(std::vector<int>& nums) {
        std::vector<int> ans;
        for (int i = 0; i < nums.size(); i++) {
            ans.push_back(nums[nums[i]]);
        }
        return ans;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<Integer> buildArray(List<Integer> nums) {
        List<Integer> ans = new ArrayList<>();
        for (int i = 0; i < nums.size(); i++) {
            ans.add(nums.get(nums.get(i)));
        }
        return ans;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans=[]
        for i in range(0,len(nums)):
            ans.append(nums[nums[i]])
        return ans

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Build Array From Permutation](https://leetcode.com/problems/build-array-from-permutation/description/)

- **Solution Link**: [Build Array From Permutation](https://leetcode.com/problems/build-array-from-permutation/post-solution/?submissionId=1169753613)

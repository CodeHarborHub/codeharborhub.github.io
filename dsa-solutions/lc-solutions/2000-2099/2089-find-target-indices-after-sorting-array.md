---
id: find-target-indices-after-sorting-array
title: Find Target Indices After Sorting Array
sidebar_label: 2089-Find Target Indices After Sorting Array
tags:
  - Array
  - Sorting
  
description: "This is a solution to find target indices after sorting array in leetcode"
---

## Problem Description

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that `nums[i] == target`.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
 

### Examples

**Example 1:**

```
Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

```
**Example 2:**
```
Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

 ```

**Example 3:**
```
Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i], target <= 100`


### Solution
## Approach

The first step in solving this problem is to sort the input array, 'nums', in non-decreasing order. Sorting the array helps in locating the target values efficiently because, once sorted, any occurrences of the target value will be contiguous. After sorting the array, we then initialize an empty list , which will store the indices of the target value. We iterate through the sorted array and for each element, we check if it equals the target value. If it does, we add the index of this element to our result list. By the end of the iteration, the result list will contain all the indices where the target value appears in the sorted array. This approach ensures that we correctly identify and record all occurrences of the target value in an orderly manner.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    std::vector<int> targetIndices(std::vector<int>& nums, int target) {
        std::sort(nums.begin(), nums.end());
        std::vector<int> result;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] == target) {
                result.push_back(i);
            }
        }
        return result;
    }
};





```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
       Arrays.sort(nums);
       ArrayList<Integer> a=new ArrayList<>();
       for(int i=0;i<nums.length;i++){
        if(nums[i]==target){
            a.add(i);
        }
       }
       return a;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python


class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        result = []
        for i in range(len(nums)):
            if nums[i] == target:
                result.append(i)
        return result

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find Target Indices After Sorting Array](https://leetcode.com/problems/find-target-indices-after-sorting-array/description/)

- **Solution Link**: [Find Target Indices After Sorting Array](https://leetcode.com/problems/find-target-indices-after-sorting-array/post-solution/?submissionId=1314681123)

---
id: minimum-common-value
title: Minimum Common Value
sidebar_label: 2540-Minimum Common Value
tags:
  - Array
  - HashTable
  - Two Pointers
  - Binary Search
description: "This is a solution to minimum common value in leetcode "
---

## Problem Description

Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
 


### Examples

**Example 1:**

```
Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.

```
**Example 2:**
```
Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

 ```
## Complexity Analysis

*** Time Complexity:** $O(m+n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= nums1.length, nums2.length <= 105`
- `1 <= nums1[i], nums2[j] <= 109`


### Solution
## Approach
Given two sorted arrays, the most efficient approach to find the minimum common element is using the two-pointer technique. Initialize two pointers, one for each array, both starting at the beginning. Compare the elements at these pointers: if they are equal, return the element as it is the smallest common element due to the sorted order. If the element in the first array is smaller, increment the pointer in the first array; if the element in the second array is smaller, increment the pointer in the second array. Continue this process until a common element is found or one of the arrays is fully traversed. If no common element is found, return -1. This approach leverages the sorted property to efficiently find the smallest common element with a time complexity of O(n + m), where n and m are the lengths of the arrays.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    int getCommon(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::unordered_set<int> nums1Set(nums1.begin(), nums1.end());
        for (int num : nums2) {
            if (nums1Set.find(num) != nums1Set.end()) {
                return num;
            }
        }
        return -1;
    }
};



```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
public class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        Set<Integer> nums1Set = new HashSet<>();
        for (int num : nums1) {
            nums1Set.add(num);
        }
        for (int num : nums2) {
            if (nums1Set.contains(num)) {
                return num;
            }
        }
        return -1;
    }

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution(object):
    def getCommon(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: int
        """
        nums1=set(nums1)
        for i in nums2:
            if i in nums1:
                return i
        return -1
```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Minimum Common Value](https://leetcode.com/problems/minimum-common-value/description/)

- **Solution Link**: [Minimum Common Value](https://leetcode.com/problems/minimum-common-value/post-solution/?submissionId=1198589019)

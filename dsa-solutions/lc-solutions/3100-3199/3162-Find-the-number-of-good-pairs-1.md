---
id: Find-the-number-of-good-pairs-1
title: Find the Number of Good Pairs 1
sidebar_label: 3162-Find the Number of Good Pairs 1
tags:
  - Array
  - HashTable
description: "This is a solution to the Find the number of good pairs 1 in leetcode"
---

## Problem Description

You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.
A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (`0 <= i <= n - 1, 0 <= j <= m - 1`).

Return the total number of good pairs.

 

### Examples

**Example 1:**

```
Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1
Output: 5
Explanation:
The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
```
**Example 2:**
```
Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3

Output: 2

Explanation:

The 2 good pairs are (3, 0) and (3, 1).

 ```
## Complexity Analysis

*** Time Complexity:** $O(n*m)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= n, m <= 50`
- `1 <= nums1[i], nums2[j] <= 50`
- `1 <= k <= 50`


### Solution
## Approach
To solve the problem of finding the number of good pairs ((i, j)) where nums1[i] is divisible by nums2[j] * k, we can use a brute-force approach. We start by initializing a counter to zero. Then, we iterate through each element in 'nums1' using an outer loop and each element in 'nums2' using an inner loop, resulting in all possible pairs of indices (i, j). For each pair, we check if nums1[i] is divisible by nums2[j] * k. If the condition is satisfied, we increment the counter. After iterating through all pairs, we return the counter, which represents the total number of good pairs. This approach ensures that we examine every possible combination of elements from both arrays. The time complexity of this method is O(n * m), where n and m are the lengths of 'nums1' and 'nums2', respectively. Gi this approach is efficient and feasible.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <vector>
class Solution {
public:
    int numberOfPairs(std::vector<int>& nums1, std::vector<int>& nums2, int k) {
        int c = 0;
        for(int i = 0; i < nums1.size(); i++) {
            for(int j = 0; j < nums2.size(); j++) {
                if(nums1[i] % (nums2[j] * k) == 0) {
                    c++;
                }
            }
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
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int c=0;
        for(int i=0;i<nums1.length;i++){
            for(int j=0;j<nums2.length;j++){
                if(nums1[i]%(nums2[j]*k)==0){
                    c++;
                }
            }
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
    def numberOfPairs(self, nums1, nums2, k):
        c = 0
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                if nums1[i] % (nums2[j] * k) == 0:
                    c += 1
        return c


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find the Number of Good Pairs 1](https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/)

- **Solution Link**: [Find the Number of Good Pairs 1](https://leetcode.com/problems/find-the-number-of-good-pairs-i/post-solution/?submissionId=1268097249)

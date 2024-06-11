---
id: maximum-size-of-a-set-after-removals
title: Maximum Size of a Set After Removals
sidebar_label: 3002 -Maximum Size of a Set After Removals
tags:
  - Array
  - Hash Table
  - Greedy
description: "This is a solution to the Maximum Size of a Set After Removals problem on LeetCode."
---

## Problem Description

You are given two 0-indexed integer arrays nums1 and nums2 of even length n.

You must remove n / 2 elements from nums1 and n / 2 elements from nums2. After the removals, you insert the remaining elements of nums1 and nums2 into a set s.

Return the maximum possible size of the set s.

### Examples

**Example 1:**

```
Input: nums1 = [1,2,1,2], nums2 = [1,1,1,1]
Output: 2
Explanation: We remove two occurences of 1 from nums1 and nums2. After the removals, the arrays become equal to nums1 = [2,2] and nums2 = [1,1]. Therefore, s = {1,2}.
It can be shown that 2 is the maximum possible size of the set s after the removals.

```

**Example 2:**

```
Input: nums1 = [1,2,3,4,5,6], nums2 = [2,3,2,3,2,3]
Output: 5
Explanation: We remove 2, 3, and 6 from nums1, as well as 2 and two occurrences of 3 from nums2. After the removals, the arrays become equal to nums1 = [1,4,5] and nums2 = [2,3,2]. Therefore, s = {1,2,3,4,5}.
It can be shown that 5 is the maximum possible size of the set s after the removals.

```

**Example 3:**

```
Input: nums1 = [1,1,2,2,3,3], nums2 = [4,4,5,5,6,6]
Output: 6
Explanation: We remove 1, 2, and 3 from nums1, as well as 4, 5, and 6 from nums2. After the removals, the arrays become equal to nums1 = [1,2,3] and nums2 = [4,5,6]. Therefore, s = {1,2,3,4,5,6}.
It can be shown that 6 is the maximum possible size of the set s after the removals.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 2 * 104`
- `n is even`
- `1 <= nums1[i], nums2[i] <= 109`

## Solution for Minimum Moves to Capture The Queen Problem

### Intuition

To solve this problem, we can use a greedy approach. We aim to maximize the size of the set s after removing elements from nums1 and nums2. We can achieve this by removing elements that appear the most in both arrays. Additionally, we may need to remove elements from one array to balance the removals between the two arrays.

### Approach

Initialize variables length, n1, and n2. length represents half the length of the input arrays, while n1 and n2 are sets of unique elements from nums1 and nums2, respectively.

Calculate the number of elements common to both n1 and n2 and store it in inter_num.

Calculate the difference between the lengths of n1 and n2 and length, representing the excess elements in each array.

Determine the maximum possible difference between the lengths of n1 and n2 and length, or the number of elements common to both arrays. Store this maximum difference in max_diff.

Return the sum of the lengths of n1 and n2 minus max_diff, which represents the maximum possible size of the set s.

### Solution Code

#### Python

```py
class Solution:
    def maximumSetSize(self, nums1: list[int], nums2: list[int]) -> int:
        length, n1, n2 = len(nums1) // 2, set(nums1), set(nums2)
        inter_num = len(n1.intersection(n2))
        diff = 0

        diff += len(n1) - length if len(n1) >= length else 0
        diff += len(n2) - length if len(n2) >= length else 0

        max_diff=max(diff,inter_num)

        return (len(n1)+len(n2))-max_diff

```

#### Java

```java
class Solution {
    public int maximumSetSize(int[] nums1, int[] nums2) {
        int i,j,n=nums1.length;
        Set<Integer> set1=new HashSet<>();
        Set<Integer> set2=new HashSet<>();
        Set<Integer> set3=new HashSet<>();
        for(int x:nums1)
        {
            set1.add(x);
            set3.add(x);
        }
        for(int x:nums2)
        {
            set2.add(x);
            set3.add(x);
        }
        int common=set1.size()+set2.size()-set3.size();
        int n1=set1.size(),n2=set2.size();
        int ans=Math.min(n/2,n1-common);
        ans+=Math.min(n/2,n2-common);
        ans+=common;
        ans=Math.min(n,ans);
        return ans;
    }
}

```

#### C++

```cpp
class Solution {
public:
    int maximumSetSize(vector<int>& nums1, vector<int>& nums2) {
        set<int> s1, s2, s;
        int n = nums1.size();
        for (int x : nums1) {
            s1.insert(x);
            s.insert(x);
        }
        for (int x : nums2) {
            s2.insert(x);
            s.insert(x);
        }
        int ans = min(min(n/2, (int)s1.size()) + min(n/2, (int)s2.size()),(int) s.size());

        return ans;
    }
};
```

#### Complexity Analysis

- Time complexity: $O(n)$, where n is the total number of elements in both nums1 and nums2. Calculating the set intersection and differences takes linear time.
- Space complexity: $O(n)$ , where n is the total number of elements in both nums1 and nums2. The space complexity is dominated by the sets n1 and n2, which store unique elements from the input arrays.

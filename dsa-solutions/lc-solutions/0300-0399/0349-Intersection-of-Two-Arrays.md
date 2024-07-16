---
id: intersection-of-two-arrays
title: Intersection of Two Arrays
sidebar_label: 0349 Intersection of Two Arrays
tags:
- Array
- Hash Table
- Two Pointers
- Binary Search
- Sorting
description: "Solution to Leetcode 349. Intersection of Two Arrays "
---

## Problem Description

Given two integer arrays nums1 and nums2, return an array of their 
intersection. Each element in the result must be unique and you may return the result in any order.

 

### Examples

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

```



### Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

### Approach 
1. If nums1 and nums2 are sorted, we can use a two pointers approach to find elements that appear in both arrays. Initialize one pointer for each array that starts at the smallest element.

2. If the numbers at both pointers are the same, add the number to a set that stores integers that appear in both arrays. Then, increase both pointers by 1, since this element is already processed.

3. Otherwise, if the numbers at both pointers are not equal, the smaller of the two values cannot appear in the other array because both arrays are sorted. Therefore, we can increase the pointer of the smaller value.

### Complexity

Time complexity: $O(nlogn+mlogm)$, where n and m are the arrays lengths. This dominating term comes from the need to sort both input arrays at the beginning of the solution.

Space complexity: $O(m+n)$ in the worst case when all elements in the arrays are different. This space is necessary to store and create the set intersection. The space used to store the result is not counted in the space complexity.


### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    std::vector<int> intersection(std::vector<int>& nums1, std::vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());

        int N = nums1.size();
        int M = nums2.size();
        int p1 = 0;
        int p2 = 0;  
        unordered_set<int> intersection;
        while (p1 < N && p2 < M) {
            if (nums1[p1] == nums2[p2]) {
                intersection.insert(nums1[p1]);
                p1++;
                p2++;
            }
            else if (nums1[p1] < nums2[p2]) {
                p1++;
            }
            else {
                p2++;
            }
        }
        vector<int> result(intersection.begin(), intersection.end());
        return result;
    }
};

 ```

#### JAVA

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);

        int N = nums1.length;
        int M = nums2.length;
        int p1 = 0;
        int p2 = 0;
        
        Set<Integer> intersection = new HashSet<>();

        while (p1 < N && p2 < M) {
            if (nums1[p1] == nums2[p2]) {
                intersection.add(nums1[p1]);
                p1++;
                p2++;
            }
            else if (nums1[p1] < nums2[p2]) {
                p1++;
            }
            else {
                p2++;
            }
        }

        int K = intersection.size();
        int[] result = new int[K];
        int curr = 0;
        for (int x: intersection) {
            result[curr++] = x;
        }
        return result;
    }
}
```

#### PYTHON

```python
class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        nums1.sort()
        nums2.sort()

        N = len(nums1)
        M = len(nums2)
        p1 = 0
        p2 = 0

        intersection = set()

        while p1 < N and p2 < M:
            if nums1[p1] == nums2[p2]:
                intersection.add(nums1[p1])
                p1 += 1
                p2 += 1
            elif nums1[p1] < nums2[p2]:
                p1 += 1
            else:
                p2 += 1
        result = []
        for x in intersection:
            result.append(x)
        return result

        
```



### Complexity Analysis

- Time Complexity: $O(nlogn+mlogm)$

- Space Complexity: $O(n+m)$ 

### References

- **LeetCode Problem**: Intersection of Two Arrays
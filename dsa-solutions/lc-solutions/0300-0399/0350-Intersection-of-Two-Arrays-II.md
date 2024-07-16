---
id: intersection-of-two-arrays-II
title: Intersection of Two Arrays II
sidebar_label: 0350 Intersection of Two Arrays II
tags:
- Array
- Hash Table
- Two Pointers
- Binary Search
- Sorting
description: "Solution to Leetcode 350. Intersection of Two Arrays II "
---

## Problem Description

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

### Examples

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

```



### Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

### Approach 
1. Sort Both Arrays: Sorting helps in comparing elements of both arrays efficiently. By sorting both arrays, we can then use a two-pointer approach to find common elements.

2. Initialize Pointers: Use two pointers i and j to traverse through nums1 and nums2 respectively. Also, use a pointer k to keep track of the position in nums1 where we store the result.

3. Traverse Both Arrays:

- Compare the elements at the current positions of both pointers.
- If the element in nums1 is less than the element in nums2, increment pointer i.
- If the element in nums1 is greater than the element in nums2, increment pointer j.
- If the elements are equal, it means we have found a common element. Store this element in nums1[k], increment i, j, and k.
- Return the Result: The result is stored in the first k positions of nums1. Use Arrays.copyOfRange to return this part of the array.

### Complexity

Time Complexity: Sorting both arrays takes $O(n log n + m log m)$, where $n$ is the length of nums1 and $m$ is the length of nums2. The two-pointer traversal takes $O(n + m)$. Thus, the overall time complexity is $O(n log n + m log m + n + m) = O(n log n + m log m)$.

Space Complexity: The space complexity is $O(1)$ if we ignore the space used for sorting, as we are not using any extra space apart from the input arrays.


### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        
        int i = 0, j = 0;
        vector<int> result;
        
        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else if (nums1[i] > nums2[j]) {
                j++;
            } else {
                result.push_back(nums1[i]);
                i++;
                j++;
            }
        }
        
        return result;
    }
};
 ```

#### JAVA

```java
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int l1 = nums1.length;
        int l2 = nums2.length;
        int i = 0, j = 0, k = 0;
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        while( i < l1 && j < l2)
        {
            if(nums1[i] < nums2[j])
            {
                i++;
            }
            else if(nums1[i] > nums2[j])
            {
                j++;
            }
            else
            {
                nums1[k++] = nums1[i++];
                j++;
            }
        }
        return Arrays.copyOfRange(nums1,0,k);
    }
}
```

#### PYTHON

```python
class Solution(object):
    def intersect(self, nums1, nums2):
        nums1.sort()
        nums2.sort()
        
        i, j = 0, 0
        result = []
        
        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                i += 1
            elif nums1[i] > nums2[j]:
                j += 1
            else:
                result.append(nums1[i])
                i += 1
                j += 1
                
        return result
        
```



### Complexity Analysis

- Time Complexity: $O(n log n + m log m)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Intersection of Two Arrays II
---
id: merge-sorted-array
title: Merge Sorted Array (LeetCode)
sidebar_label: 0088-MergeSortedArray
---

## Problem Description


| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/merge-sorted-array/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/merge-sorted-array/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |


## Problem Description

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

### Examples

#### Example 1

- **Input:** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
- **Output:** [1,2,2,3,5,6]
- **Explanation:** The arrays being merged are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6].

#### Example 2

- **Input:** nums1 = [1], m = 1, nums2 = [], n = 0
- **Output:** [1]
- **Explanation:** The arrays being merged are [1] and []. The result of the merge is [1].

#### Example 3

- **Input:** nums1 = [0], m = 0, nums2 = [1], n = 1
- **Output:** [1]
- **Explanation:** The arrays being merged are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

### Constraints

- $nums1.length == m + n$
- $nums2.length == n$
- $0 <= m, n <= 200$
- $1 <= m + n <= 200$
- $-10^9 <= nums1[i], nums2[j] <= 10^9$

### Approach

To merge the two arrays efficiently in-place, we can use a two-pointer approach starting from the end of both arrays. By comparing elements from the end of both arrays and placing the larger element at the end of nums1, we can achieve the desired result in $O(m + n)$ time.

1. **Initialize Pointers:**
   - Initialize two pointers, p1 and p2, to the end of nums1 and nums2 respectively.

2. **Merge Arrays:**
   - Compare elements at nums1[p1] and nums2[p2], and place the larger element at the end of nums1.
   - Decrement the pointer of the array from which the larger element was taken.
   - Repeat this process until all elements from nums2 are merged into nums1.

### Solution Code

#### Python

```py
class Solution(object):
    def merge(self, nums1, m, nums2, n):
        p1, p2, p = m - 1, n - 1, m + n - 1
        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1
        nums1[:p2 + 1] = nums2[:p2 + 1]
```

#### Java

```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;
        
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
        
        System.arraycopy(nums2, 0, nums1, 0, p2 + 1);
    }
}
```

#### C++

```cpp
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p = m + n - 1;
        
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }
        
        while (p2 >= 0) {
            nums1[p--] = nums2[p2--];
        }
    }
};
```

### Conclusion

The above solution efficiently merges two sorted integer arrays nums1 and nums2 into a single array nums1 in non-decreasing order. It utilizes a two-pointer approach to achieve a time complexity of $O(m + n)$, where m and n are the lengths of nums1 and nums2 respectively. This approach allows for an in-place merge of the arrays, meeting the requirements of the problem.


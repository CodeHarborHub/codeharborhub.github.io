---
id: kth-largest-element-in-an-array
title: Kth Largest Element in an Array (LeetCode)
sidebar_label: 0215-KthLargestElementInAnArray
description: Find the kth largest element in an unsorted array. Note that it is the kth largest element in sorted order, not the kth distinct element.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | [Kth Largest Element in an Array Solution on LeetCode](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.

Note that it is the `k`th largest element in sorted order, not the `k`th distinct element.

### Examples

#### Example 1

- **Input:** `nums = [3,2,1,5,6,4]`, `k = 2`
- **Output:** `5`
- **Explanation:** The second largest element is 5.

#### Example 2

- **Input:** `nums = [3,2,3,1,2,4,5,5,6]`, `k = 4`
- **Output:** `4`
- **Explanation:** The fourth largest element is 4.

### Constraints

- `1 <= k <= nums.length <= 10^4`
- $-10^4 <= nums[i] <= 10^4$

### Approach

To find the `k`th largest element in an unsorted array, we can use various methods such as sorting, using a min-heap, or using Quickselect algorithm. Here are the approaches:

1. **Sorting**:
   - Sort the array and return the element at index `len(nums) - k`.
   
2. **Min-Heap**:
   - Maintain a min-heap of size `k`.
   - Iterate through the array and maintain the heap with the largest `k` elements.
   - The root of the heap will be the `k`th largest element.

3. **Quickselect**:
   - Use a partition-based method to find the `k`th largest element in `O(n)` average time complexity.

### Solution Code

#### Python

```python
import heapq

class Solution:
    def findKthLargest(self, nums, k):
        return heapq.nlargest(k, nums)[-1]
```

#### Java

```java
import java.util.PriorityQueue;

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }
}
```

#### C++

```c++
#include <queue>
#include <vector>

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        priority_queue<int, vector<int>, greater<int>> minHeap;
        for (int num : nums) {
            minHeap.push(num);
            if (minHeap.size() > k) {
                minHeap.pop();
            }
        }
        return minHeap.top();
    }
};
```

### Conclusion
The above solutions effectively find the kth largest element in an array using different methods. 
The min-heap approach provides an efficient solution with a time complexity of O(n log k), making it 
suitable for larger inputs while ensuring the correct element is found. Each implementation handles 
edge cases and constraints effectively, providing robust solutions across various programming 
languages.
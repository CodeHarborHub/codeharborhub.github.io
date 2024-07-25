---
id: degree-of-an-array
title: Degree of an Array
sidebar_label: 0697 - Degree of an Array
tags:
  - Hash Table
  - Array
  - Sliding Window
description: "This is a solution to the Degree of an Array problem on LeetCode."
---

## Problem Description

Given a non-empty array of non-negative integers `nums`, the **degree** of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of `nums`, that has the same degree as `nums`.

### Examples

**Example 1:**

```
Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
```

**Example 2:**

```
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
```

### Constraints

- `nums.length` will be between 1 and 50,000.
- `nums[i]` will be an integer between 0 and 49,999.

## Solution for Degree of an Array

### Approach: Left and Right Index
#### Intuition and Algorithm

An array that has degree `d`, must have some element `x` occur `d` times. If some subarray has the same degree, then some element `x` (that occurred d times), still occurs `d` times. The shortest such subarray would be from the first occurrence of `x` until the last occurrence.

For each element in the given array, let's know `left`, the index of its first occurrence; and `right`, the index of its last occurrence. For example, with `nums = [1,2,3,2,5]` we have `left[2] = 1` and `right[2] = 3`.

Then, for each element `x` that occurs the maximum number of times, `right[x] - left[x] + 1` will be our candidate answer, and we'll take the minimum of those candidates.

## Code in Different Languages

<Tabs>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int findShortestSubArray(int[] nums) {
        Map<Integer, Integer> left = new HashMap(),
            right = new HashMap(), count = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            int x = nums[i];
            if (left.get(x) == null) {
                left.put(x, I);
            }
            right.put(x, i);
            count.put(x, count.getOrDefault(x, 0) + 1);
        }

        int ans = nums.length;
        int degree = Collections.max(count.values());
        for (int x: count.keySet()) {
            if (count.get(x) == degree) {
                ans = Math.min(ans, right.get(x) - left.get(x) + 1);
            }
        }
        return ans;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def findShortestSubArray(self, nums):
        left, right, count = {}, {}, {}
        for i, x in enumerate(nums):
            if x not in left:
                left[x] = i
            right[x] = i
            count[x] = count.get(x, 0) + 1

        ans = len(nums)
        degree = max(count.values())
        for x in count:
            if count[x] == degree:
                ans = min(ans, right[x] - left[x] + 1)

        return ans
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**:  where N is the length of `nums`. Every loop is through $O(N)$ items with $O(1)$ work inside the for-block.

### Space Complexity: $O(N)$

> **Reason**: the space used by `left`, `right`, and `count`.


## References

- **LeetCode Problem**: [Degree of an Array](https://leetcode.com/problems/degree-of-an-array/description/)

- **Solution Link**: [Degree of an Array](https://leetcode.com/problems/degree-of-an-array/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>
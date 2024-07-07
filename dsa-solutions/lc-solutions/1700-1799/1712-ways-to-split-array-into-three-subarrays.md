---
id: ways-to-split-array-into-three-subarrays
title: Ways to Split Array Into Three Subarrays
sidebar_label: 1711. Ways to Split Array Into Three Subarrays
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Ways to Split Array Into Three Subarrays problem on LeetCode."
---

## Problem Description

A split of an integer array is good if:

- The array is split into three non-empty contiguous subarrays - named `left`, `mid`, `right` respectively from `left` to `right`.
- The sum of the elements in `left` is less than or equal to the sum of the elements in `mid`, and the sum of the elements in mid is less than or equal to the sum of the elements in `right`.
Given `nums`, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo `10^9 + 7`.

### Examples

**Example 1:**

```
Input: nums = [1,1,1]
Output: 1
Explanation: The only good way to split nums is [1] [1] [1].

```

**Example 2:**

```
Input: nums = [1,2,2,2,5,0]
Output: 3
Explanation: There are three good ways of splitting nums:
[1] [2] [2,2,5,0]
[1] [2,2] [2,5,0]
[1,2] [2,2] [5,0]

```

### Constraints

- `3 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^4`

## Solution for 1712. Ways to Split Array Into Three Subarrays


### Approach

The approach is not too hard, but the implementation was tricky for me to get right.

First, we prepare the prefix sum array, so that we can compute subarray sums in $O(1)$. Then, we move the boundary of the first subarray `left` to `right`. This is the first pointer - i.

For each point i, we find the minimum `(j)` and maximum `(k)` boundaries of the second subarray:

`nums[j] >= 2 * nums[i]`
`nums[sz - 1] - nums[k] >= nums[k] - nums[i]`
Note that in the code and examples below, k points to the element after the second array. In other words, it marks the start of the (shortest) third subarray. This makes the logic a bit simpler.

With these conditions, `sum(0, i) <= sum(i + 1, j)`, and `sum(i + 1, k - 1) < sum(k, n)`. Therefore, for a point `i`, we can build `k - j` subarrays satisfying the problem requirements.

Final thing is to realize that `j` and `k` will only move forward, which result in a linear-time solution.

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
          class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        sz, res, j, k = len(nums), 0, 0, 0
        nums = list(accumulate(nums))
        for i in range(sz - 2):
            while j <= i or (j < sz - 1 and nums[j] < nums[i] * 2):
                j += 1
            while k < j or (k < sz - 1 and nums[k] - nums[i] <= nums[-1] - nums[k]):
                k += 1
            res = (res + k - j) % 1000000007
        return res
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
        public int waysToSplit(int[] nums) {
    int sz = nums.length, res = 0;
    for (int i = 1; i < sz; ++i)
        nums[i] += nums[i - 1];
    for (int i = 0, j = 0, k = 0; i < sz - 2; ++i) {
        while (j <= i || (j < sz - 1 && nums[j] < nums[i] * 2))
            ++j;
        while (k < j || ( k < sz - 1 && nums[k] - nums[i] <= nums[sz - 1] - nums[k]))
            ++k;
        res = (res + k - j) % 1000000007;
    }    
    return res;
}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
int waysToSplit(vector<int>& nums) {
    int res = 0, sz = nums.size();
    partial_sum(begin(nums), end(nums), begin(nums));
    for (int i = 0, j = 0, k = 0; i < sz - 2; ++i) {
        j = max(i + 1, j);
        while (j < sz - 1 && nums[j] < nums[i] * 2)
            ++j;
        k = max(j, k);
        while (k < sz - 1 && nums[k] - nums[i] <= nums[sz - 1] - nums[k])
            ++k;
        res = (res + k - j) % 1000000007;
    }
    return res;
} 
```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(N) $
- Space Complexity: $ O(1)$

## References

- **LeetCode Problem**: [Ways to Split Array Into Three Subarrays](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/)

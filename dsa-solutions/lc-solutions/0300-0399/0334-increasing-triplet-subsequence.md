---
id: increasing-triplet-subsequence
title: Increasing Triplet Subsequence
sidebar_label: 334-Increasing Triplet Subsequence
tags:
  - Arrays
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Increasing Triplet Subsequence problem on LeetCode."
sidebar_position: 4
---

## Problem Description

Given an integer array `nums`, return `true` if there exists a triple of indices (i, j, k) such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exist, return `false`.

### Examples

**Example 1:**

```
Input: nums = [1, 2, 3, 4, 5]
Output: true
Explanation: Any triplet where i < j < k is valid.
```

**Example 2:**

```
Input: nums = [5, 4, 3, 2, 1]
Output: false
Explanation: No triplet exists.
```

**Example 3:**

```
Input: nums = [2, 1, 5, 0, 4, 6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
```

### Constraints

- `1 <= nums.length <= 5 * 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

### Follow-up

Could you implement a solution that runs in `O(n)` time complexity and `O(1)` space complexity?

---

## Solution for Increasing Triplet Subsequence Problem

### Approach

To solve this problem, we can maintain two variables first and second to represent the smallest and second smallest numbers encountered so far. The algorithm iterates through the array and updates these two variables. If we find a number that is larger than second, we have found an increasing triplet.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int first = INT_MAX, second = INT_MAX;
        for (int num : nums) {
            if (num <= first) {
                first = num;
            } else if (num <= second) {
                second = num;
            } else {
                return true;
            }
        }
        return false;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE, second = Integer.MAX_VALUE;
        for (int num : nums) {
            if (num <= first) {
                first = num;
            } else if (num <= second) {
                second = num;
            } else {
                return true;
            }
        }
        return false;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = second = float('inf')
        for num in nums:
            if num <= first:
                first = num
            elif num <= second:
                second = num
            else:
                return True
        return False
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where $n$ is the length of the array. We iterate through the array once.
- **Space Complexity**: $O(1)$. We use a constant amount of extra space for the variables `first` and `second`.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
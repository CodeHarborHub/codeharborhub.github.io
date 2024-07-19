---

id: concatenation-of-array
title: Concatenation of Array
sidebar_label: 1929-Concatenation of Array
tags:
  - Concatenation
  - Arrays
  - Brute Force
  - Optimized
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Concatenate Array problem on LeetCode."
sidebar_position: 2

---

In this tutorial, we will solve the Concatenate Array problem using a simple approach and an optimized approach. We will provide the implementation of the solution in C++, Java, and Python.

## Problem Description

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n` (0-indexed).

Specifically, `ans` is the concatenation of two `nums` arrays.

Return the array `ans`.

### Examples

**Example 1:**

```
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
```

**Example 2:**

```
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
```

### Constraints

- `n == nums.length`
- ` 1 <= n <= 1000`



---

## Solution for Concatenate Array Problem

### Approach 1: Simple Concatenation

The approach is straightforward: iterate through the array `nums` and copy each element twice, once to the first half and once to the second half of the result array `ans`.

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(2 * n);
        for (int i = 0; i < n; ++i) {
            ans[i] = nums[i];
            ans[i + n] = nums[i];
        }
        return ans;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[2 * n];
        for (int i = 0; i < n; i++) {
            ans[i] = nums[i];
            ans[i + n] = nums[i];
        }
        return ans;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [0] * (2 * n)
        for i in range(n):
            ans[i] = nums[i]
            ans[i + n] = nums[i]
        return ans
```

</TabItem>
</Tabs>

### Approach 2: Optimized Concatenation

An optimized approach for concatenation in some languages can take advantage of built-in functions to concatenate the array directly.

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> ans = nums;
        ans.insert(ans.end(), nums.begin(), nums.end());
        return ans;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
import java.util.*;

class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = Arrays.copyOf(nums, 2 * n);
        System.arraycopy(nums, 0, ans, n, n);
        return ans;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(n)$, where `n` is the length of the input array `nums`. We iterate through the array once.
- **Space Complexity:** $O(n)$, since we are using a new array `ans` of size `2n`.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
---
id: get-maximum-in-generated-array
title: Get Maximum in Generated Array
sidebar_label: 1646-Get Maximum in Generated Array
tags:
  - Brute Force
  - Dynamic Programming
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Get Maximum in Generated Array problem on LeetCode."
sidebar_position: 2
---

## Problem Description

You are given an integer `n`. A 0-indexed integer array `nums` of length `n + 1` is generated in the following way:

- `nums[0] = 0`
- `nums[1] = 1`
- `nums[2 * i] = nums[i]` when `2 <= 2 * i <= n`
- `nums[2 * i + 1] = nums[i] + nums[i + 1]` when `2 <= 2 * i + 1 <= n`

Return the maximum integer in the array `nums`.

### Examples

**Example 1:**

```
Input: n = 7
Output: 3
Explanation: According to the given rules:
  nums[0] = 0
  nums[1] = 1
  nums[(1 * 2) = 2] = nums[1] = 1
  nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
  nums[(2 * 2) = 4] = nums[2] = 1
  nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
  nums[(3 * 2) = 6] = nums[3] = 2
  nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) = 3.
```

**Example 2:**

```
Input: n = 2
Output: 1
Explanation: According to the given rules, nums = [0,1,1]. The maximum is max(0,1,1) = 1.
```

**Example 3:**

```
Input: n = 3
Output: 2
Explanation: According to the given rules, nums = [0,1,1,2]. The maximum is max(0,1,1,2) = 2.
```

### Constraints

- `0 <= n <= 100`

---

## Solution for Get Maximum in Generated Array Problem

### Approach: Dynamic Programming

The problem can be solved efficiently using a dynamic programming approach. We generate the array according to the given rules and keep track of the maximum value.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int getMaximumGenerated(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        vector<int> nums(n + 1);
        nums[0] = 0;
        nums[1] = 1;
        int maxVal = 1;
        
        for (int i = 2; i <= n; ++i) {
            if (i % 2 == 0) {
                nums[i] = nums[i / 2];
            } else {
                nums[i] = nums[i / 2] + nums[i / 2 + 1];
            }
            maxVal = max(maxVal, nums[i]);
        }
        
        return maxVal;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int getMaximumGenerated(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        int[] nums = new int[n + 1];
        nums[0] = 0;
        nums[1] = 1;
        int maxVal = 1;

        for (int i = 2; i <= n; ++i) {
            if (i % 2 == 0) {
                nums[i] = nums[i / 2];
            } else {
                nums[i] = nums[i / 2] + nums[i / 2 + 1];
            }
            maxVal = Math.max(maxVal, nums[i]);
        }

        return maxVal;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1
        
        nums = [0] * (n + 1)
        nums[0] = 0
        nums[1] = 1
        max_val = 1
        
        for i in range(2, n + 1):
            if i % 2 == 0:
                nums[i] = nums[i // 2]
            else:
                nums[i] = nums[i // 2] + nums[i // 2 + 1]
            max_val = max(max_val, nums[i])
        
        return max_val
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$
  - We iterate through the array once to fill in the values.
- **Space Complexity**: $O(n)$
  - We use additional space to store the array `nums` of length `n + 1`.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>

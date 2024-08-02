---
id: binary-prefix-divisible-by-5
title: Binary Prefix Divisible By 5
sidebar_label: Binary Prefix Divisible By 5
tags:
  - Array
  - Bit Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Binary Prefix Divisible By 5 problem on LeetCode."
sidebar_position: 25
---

## Problem Description

You are given a binary array `nums` (0-indexed).

We define `xi` as the number whose binary representation is the subarray `nums[0..i]` (from most-significant-bit to least-significant-bit).

For example, if `nums = [1,0,1]`, then `x0 = 1`, `x1 = 2`, and `x2 = 5`.

Return an array of booleans `answer` where `answer[i]` is true if `xi` is divisible by 5.

### Examples

**Example 1:**

```
Input: nums = [0,1,1]
Output: [true,false,false]
Explanation: The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.
Only the first number is divisible by 5, so answer[0] is true.
```

**Example 2:**

```
Input: nums = [1,1,1]
Output: [false,false,false]
```

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either 0 or 1.

---

## Solution for Binary Prefix Divisible By 5 Problem

To solve this problem, we can take advantage of the fact that we only need to check divisibility by 5. As we iterate through the array, we can keep track of the current number modulo 5. This allows us to avoid handling potentially large integers.

### Approach

1. Initialize current to 0, which will store the current number modulo 5.
2. Iterate through each element in nums:
   - Update current by shifting it left and adding the current element.
   - Take current modulo 5 to keep it within manageable range.
   - Append True to the result if current is 0, otherwise append False.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int>& nums) {
        vector<bool> result;
        int current = 0;
        for (int num : nums) {
            current = (current * 2 + num) % 5;
            result.push_back(current == 0);
        }
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        List<Boolean> result = new ArrayList<>();
        int current = 0;
        for (int num : nums) {
            current = (current * 2 + num) % 5;
            result.add(current == 0);
        }
        return result;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:
        result = []
        current = 0
        for num in nums:
            current = (current * 2 + num) % 5
            result.append(current == 0)
        return result
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where `n` is the length of the array. We iterate through the array once.
- **Space Complexity**: $O(1)$, not including the space needed for the output array. We only use a constant amount of additional space.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```
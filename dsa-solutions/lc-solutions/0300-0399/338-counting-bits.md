---
id: counting-bits
title: Counting Bits
sidebar_label: 338-Counting Bits
tags:
  - Arrays
  - Bit Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Counting Bits problem on LeetCode."
sidebar_position: 5
---

## Problem Description

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (0 &lt;= `i` &lt;= `n`), `ans[i]` is the number of `1`s in the binary representation of `i`.

### Examples

**Example 1:**

```
Input: n = 2
Output: [0, 1, 1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

**Example 2:**

```
Input: n = 5
Output: [0, 1, 1, 2, 1, 2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

### Constraints

- `0 <= n <= 10^5`

### Follow-up

- Can you solve it in linear time `O(n)` and possibly in a single pass?
- Can you solve it without using any built-in function (i.e., like `__builtin_popcount` in C++)?

---

## Solution for Counting Bits Problem

### Approach 1: Brute Force (Naive)

The brute force approach involves iterating through each number from `0` to `n`, converting each number to its binary form, and counting the number of `1`s in that binary representation.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans(n + 1);
        for (int i = 0; i <= n; ++i) {
            ans[i] = __builtin_popcount(i);
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
    public int[] countBits(int n) {
        int[] ans = new int[n + 1];
        for (int i = 0; i <= n; ++i) {
            ans[i] = Integer.bitCount(i);
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
    def countBits(self, n: int) -> List[int]:
        return [bin(i).count('1') for i in range(n + 1)]
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(nlogn)$, as converting a number to binary and counting bits takes $O(\log n)$ time, and we do this for each number from `0` to `n`.
- **Space Complexity**: $O(n)$, for storing the result array.

### Approach 2: Optimized Dynamic Programming

To achieve a linear time solution, we can use a dynamic programming approach. We use the property that the number of `1`s in `i` can be derived from the number of `1`s in `i >> 1` (i.e., `i` divided by `2`) plus `1` if the last bit of `i` is `1`.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> ans(n + 1);
        for (int i = 1; i <= n; ++i) {
            ans[i] = ans[i >> 1] + (i & 1);
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
    public int[] countBits(int n) {
        int[] ans = new int[n + 1];
        for (int i = 1; i <= n; ++i) {
            ans[i] = ans[i >> 1] + (i & 1);
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
    def countBits(self, n: int) -> List[int]:
        ans = [0] * (n + 1)
        for i in range(1, n + 1):
            ans[i] = ans[i >> 1] + (i & 1)
        return ans
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, as we calculate the number of bits for each number from `0` to `n` in constant time.
- **Space Complexity**: $O(n)$, for storing the result array.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>

---
id: minimum-suffix-flips
title: Minimum Suffix Flips 
sidebar_label: 1529-Minimum Suffix Flips 
tags:
  - Greedy
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Minimum Suffix Flips  problem on LeetCode."
sidebar_position: 2
---

## Problem Description

You are given a 0-indexed binary string `target` of length `n`. You have another binary string `s` of length `n` that is initially set to all zeros. You want to make `s` equal to `target`.

In one operation, you can pick an index `i` where `0 <= i < n` and flip all bits in the inclusive range `[i, n - 1]`. Flip means changing '0' to '1' and '1' to '0'.

Return the minimum number of operations needed to make `s` equal to `target`.

### Examples

**Example 1:**

```
Input: target = "10111"
Output: 3
Explanation: Initially, s = "00000".
Choose index i = 2: "00000" -> "00111"
Choose index i = 0: "00111" -> "11000"
Choose index i = 1: "11000" -> "10111"
We need at least 3 flip operations to form target.
```

**Example 2:**

```
Input: target = "101"
Output: 3
Explanation: Initially, s = "000".
Choose index i = 0: "000" -> "111"
Choose index i = 1: "111" -> "100"
Choose index i = 2: "100" -> "101"
We need at least 3 flip operations to form target.
```

**Example 3:**

```
Input: target = "00000"
Output: 0
Explanation: We do not need any operations since the initial s already equals target.
```

### Constraints

- `n == target.length`
- `1 <= n <= 10^5`
- `target[i]` is either '0' or '1'.

---

## Solution for Minimum Number of Flips to Make Binary String Equal Problem

### Approach: Greedy

To solve the problem, we can use a greedy approach. We need to count how many times the value changes from '0' to '1' or from '1' to '0' in the target string. This count will give us the minimum number of flips required.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int minFlips(string target) {
        int flips = 0;
        char current = '0'; 
        for (char c : target) {
            if (c != current) {
                flips++;
                current = c;
            }
        }
        return flips;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int minFlips(String target) {
        int flips = 0;
        char current = '0'; 
        for (char c : target.toCharArray()) {
            if (c != current) {
                flips++;
                current = c;
            }
        }
        return flips;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def minFlips(self, target: str) -> int:
        flips = 0
        current = '0'  
        for c in target:
            if c != current:
                flips += 1
                current = c
        return flips
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(n)$, where $n$ is the length of the target string. We traverse the target string once.
- **Space Complexity**: $O(1)$. We use a constant amount of extra space for variables.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>

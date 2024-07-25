---
id: reverse-string-ii
title: Reverse String II
sidebar_label: 0541 - Reverse String II
tags:
  - String
  - Two Pointers
  - Recursion
description: "This is a solution to the Reverse String II problem on LeetCode."
---

## Problem Description

Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.

If there are fewer than `k` characters left, reverse all of them. If there are less than `2k` but greater than or equal to `k` characters, then reverse the first `k` characters and leave the other as original.

### Examples

**Example 1:**

```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

**Example 2:**

```
Input: s = "abcd", k = 2
Output: "bacd"
```

### Constraints

- $1 \leq s.length \leq 10^4$
- `s` consists of only lowercase English letters.
- $1 \leq k \leq 10^4$

## Solution for Reverse String II

### Approach 
#### Intuition and Algorithm

We will reverse each block of 2k characters directly.

Each block starts at a multiple of 2k: for example, 0, 2k, 4k, 6k, .... One thing to be careful about is we may not reverse each block if there aren't enough characters.

To reverse a block of characters from i to j, we can swap characters in positions i++ and j--.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
#include <iostream>
#include <string>
#include <algorithm>

class Solution {
public:
    std::string reverseStr(std::string s, int k) {
        for (int start = 0; start < s.length(); start += 2 * k) {
            int i = start;
            int j = std::min(start + k - 1, static_cast<int>(s.length()) - 1);
            while (i < j) {
                std::swap(s[i++], s[j--]);
            }
        }
        return s;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String reverseStr(String s, int k) {
        char[] a = s.toCharArray();
        for (int start = 0; start < a.length; start += 2 * k) {
            int i = start, j = Math.min(start + k - 1, a.length - 1);
            while (i < j) {
                char tmp = a[i];
                a[i++] = a[j];
                a[j--] = tmp;
            }
        }
        return new String(a);
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def reverseStr(self, s, k):
        a = list(s)
        for i in xrange(0, len(a), 2*k):
            a[i:i+k] = reversed(a[i:i+k])
        return "".join(a)
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**:  where N is the size of `s`. We build a helper array, plus reverse about half the characters in `s`.

### Space Complexity: $O(N)$

> **Reason**: the size of `a`.

## References

- **LeetCode Problem**: [Reverse String II](https://leetcode.com/problems/reverse-string-ii/description/)

- **Solution Link**: [Reverse String II](https://leetcode.com/problems/reverse-string-ii/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>
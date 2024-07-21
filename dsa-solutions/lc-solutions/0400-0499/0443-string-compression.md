---
id: string-compression
title: String Compression
sidebar_label: 0443 - String Compression
tags:
  - Two Pointers
  - Array
  - Sliding Window
description: "This is a solution to the String Compression problem on LeetCode."
---

## Problem Description

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

If the group's length is `1`, append the character to `s`.
Otherwise, append the character followed by the group's length.
The compressed string s **should not be returned separately**, but instead, be stored **in the input character array** `chars`. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array**, return the new length of the array.

You must write an algorithm that uses only constant extra space.

### Examples

**Example 1:**

```
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
```

**Example 2:**

```
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
```

### Constraints

- `1 <= chars.length <= 2000`
- `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.

## Solution for String Compression 

### Approach 

#### Intuition

First, we make the following observation. Consider a group `t` of consecutive repeating characters. The length of compressed `t` is less than or equal to the length of `t`. For example, `d` tranforms into `d`, `cc` into `c2`, `aaaa` into `a4`, `bbbbbbbbbbbb` into `b12`.

This observation allows processing groups in the array `chars` from left to right.

#### Algorithm

1. Declare the variables i – the first index of the current group, and res – the length of the answer (of the compressed string). Initialize i = 0, res = 0.

2. While i is less than the length of chars:
    - Find the length of the current group of consecutive repeating characters groupLength.
    - Add chars[i] to the answer (chars[res++] = chars[i]).
    - If groupLength > 1, add the string representation of groupLength to the answer and increase res accordingly.
    - Increase i by groupLength and proceed to the next group.

3. Return res.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    int compress(vector<char>& chars) {
        int i = 0, res = 0;
        while (i < chars.size()) {
            int groupLength = 1;
            while (i + groupLength < chars.size() && chars[i + groupLength] == chars[i]) {
                groupLength++;
            }
            chars[res++] = chars[i];
            if (groupLength > 1) {
                for (char c : to_string(groupLength)) {
                    chars[res++] = c;
                }
            }
            i += groupLength;
        }
        return res;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public int compress(char[] chars) {
        int i = 0, res = 0;
        while (i < chars.length) {
            int groupLength = 1;
            while (i + groupLength < chars.length && chars[i + groupLength] == chars[i]) {
                groupLength++;
            }
            chars[res++] = chars[i];
            if (groupLength > 1) {
                for (char c : Integer.toString(groupLength).toCharArray()) {
                    chars[res++] = c;
                }
            }
            i += groupLength;
        }
        return res;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def compress(self, chars: List[str]) -> int:
        i = 0
        res = 0
        while i < len(chars):
            group_length = 1
            while (i + group_length < len(chars)
                   and chars[i + group_length] == chars[i]):
                group_length += 1
            chars[res] = chars[i]
            res += 1
            if group_length > 1:
                str_repr = str(group_length)
                chars[res:res+len(str_repr)] = list(str_repr)
                res += len(str_repr)
            i += group_length
        return res     
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: All cells are initially white. We will repaint each white cell blue, and we may repaint some blue cells green. Thus each cell will be repainted at most twice. Since there are n cells, the total number of repaintings is O(n).

### Space Complexity: $O(1)$

> **Reason**: We store only a few integer variables and the string representation of groupLength which takes up O(1) space.

## References

- **LeetCode Problem**: [String Compression](https://leetcode.com/problems/string-compression/description/)

- **Solution Link**: [String Compression](https://leetcode.com/problems/string-compression/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>
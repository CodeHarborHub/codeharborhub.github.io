---
id: positions-of-large-groups
title: Positions of Large Groups
sidebar_label: 0830-positions-of-large-groups
tags:
  - String
description: "This is a solution to positions-of-large-groups problem on LeetCode."
---

## Problem Description
In a string `s` of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like `s = "abbxxxxzyy"` has the groups `"a"`, `"bb"`, `"xxxx"`, `"z"`, and `"yy"`.

A group is identified by an interval `[start, end]`, where `start` and `end` denote the start and end indices (inclusive) of the group. In the above example, `"xxxx"` has the interval `[3,6]`.
`
A group is considered **large** if it has `3` or more characters.

Return the intervals of every **large** group sorted in **increasing order** by start index.

### Examples

**Example 1:**

```
Input: s = "abbxxxxzzy"
Output: [[3,6]]
**Explanation**: "xxxx" is the only large group with start index 3 and end index 6.
```

**Example 2:**

```
Input: s = "abc"
Output: []
**Explanation:** We have groups "a", "b", and "c", none of which are large groups.
```

**Example 3:**

```
Input: s = "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
**Explanation:** The large groups are "ddd", "eeee", and "bbb".

```

### Constraints

- `1 <= s.length <= 1000`
- `s contains lowercase English letters only.`


## Solution for Assign Cookies

### Approach:

1- For every groups, find its start index `i` and end index `j - 1`.

2- Group length is `j - i`, if it's no less than 3, add `(i, j)` to result.


## Code in Different Languages

### C++

```cpp
class Solution {
    public:
        vector<vector<int>> largeGroupPositions(string S) {
            vector<vector<int>> res;
            for (int i = 0, j = 0; i < S.size(); i = j) {
                while (j < S.size() && S[j] == S[i]) ++j;
                if (j - i >= 3)
                res.push_back({i, j - 1});
            }
            return res;
            }
};
```
### Java

```java
class Solution {
        public List<List<Integer>> largeGroupPositions(String S) {
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0, j = 0; i < S.length(); i = j) {
            while (j < S.length() && S.charAt(j) == S.charAt(i)) ++j;
            if (j - i >= 3)
                res.add(Arrays.asList(i, j - 1));
        }
        return res;
    }
}


```

### Python

```python
class Solution(object):
        def largeGroupPositions(self, S):
        i, j, N = 0, 0, len(S)
        res = []
        while i < N:
            while j < N and S[j] == S[i]: j += 1
            if j - i >= 3: res.append([i, j - 1])
            i = j
        return res
```

## Complexity Analysis

### Time Complexity: O(N)

### Space Complexity: O(N)

## References

- **LeetCode Problem**: [Positions of Large Groups](https://leetcode.com/problems/positions-of-large-groups/description/)


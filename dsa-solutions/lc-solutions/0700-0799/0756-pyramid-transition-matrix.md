---
id: pyramid-transition-matrix
title: Pyramid Transition Matrix
sidebar_label: 0756-pyramid-transition-matrix
tags:
  - Bit Manipulation
  - Depth-First Search
  - Breadth-First Search

description: "This is a solution to pyramid-transition-matrix problem on LeetCode."
---

## Problem Description

You are stacking blocks to form a pyramid. Each block has a color, which is represented by a single letter. Each row of blocks contains **one less block** than the row beneath it and is centered on top.

To make the pyramid aesthetically pleasing, there are only specific **triangular patterns** that are allowed. A triangular pattern consists of a **single block** stacked on top of **two blocks**. The patterns are given as a list of three-letter strings allowed, where the first two characters of a pattern represent the left and right bottom blocks respectively, and the third character is the top block.

 •  For example, `"ABC"` represents a triangular pattern with a `'C'`
    blockstacked on top of an `'A' (left)` and `'B' (right)` block. Note that this is different from `"BAC"` where `'B'` is on the `left` bottom and `'A'` is on the `right` bottom.

You start with a bottom row of blocks bottom, given as a single string, that you **must** use as the base of the pyramid.

Given `bottom` and `allowed`, return `true` if you can build the pyramid all the way to the top such that **every triangular** pattern in the pyramid is in `allowed`, or `false` otherwise.

### Examples

**Example 1:**

```
Input: bottom = "BCD", allowed = ["BCC","CDE","CEA","FFF"]
Output: true
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 3), we can build "CE" on level 2 and then build "A" on level 1.
There are three triangular patterns in the pyramid, which are "BCC", "CDE", and "CEA". All are allowed.
```

**Example 2:**

```
Input: bottom = "AAAA", allowed = ["AAB","AAC","BCD","BBE","DEF"]
Output: false
Explanation: The allowed triangular patterns are shown on the right.
Starting from the bottom (level 4), there are multiple ways to build level 3, but trying all the possibilites, you will get always stuck before building level 1.
```


### Constraints

- `2 <= bottom.length <= 6`
- `0 <= allowed.length <= 216`
- `allowed[i].length == 3`
-  The letters in all input strings are from the set `{'A', 'B', 'C', 'D', 'E', 'F'}`.
 -  All the values of allowed are **unique**.


## Solution for Assign Cookies

### Approach:

1- Create a matrix to store possible transitions and initialize a stack for traversal.
2- Build a mapping dictionary from the allowed list for quick lookup of transitions.
3- Use a stack-based approach to iterate through possible transitions from the bottom row upwards.
4- For each position, find parent characters and check possible transitions, updating the matrix and stack as necessary.
5- If all positions are successfully filled, return True; otherwise, backtrack and return False if no valid transition exists.


## Code in Different Languages

### C++

```cpp
class Solution {
    unordered_set<string> invalid;
    bool solve(string bottom, int i, unordered_map<string,string> mp, string z)
    {
        int n=bottom.size();
        int m=z.size();
        if(n<2)
        return true;
        if(invalid.count(bottom))
        return false;
        if(m==n-1)
        return solve(z, 0, mp, "");
        if(m>1 && mp.find(z.substr(m-2,2))==mp.end())
        return false;
        for(char ch:mp[bottom.substr(i,2)]){
            z.push_back(ch);
            if(solve(bottom, i+1, mp, z))
            return true;
            z.pop_back();
        }
        invalid.insert(bottom);
        return false;
    }
public:
    bool pyramidTransition(string bottom, vector<string>& allowed) {
        unordered_map<string,string> mp;
        for(int i=0;i<allowed.size();i++)
        {
            mp[allowed[i].substr(0,2)].push_back(allowed[i][2]);
        }
        return solve(bottom, 0, mp, "");
    }
};
```
### Java

```java
class Solution {
  public boolean pyramidTransition(String bottom, List<String> allowed) {
    Map<String, Set<Character>> map = new HashMap<>();
    for (String s : allowed) {
      String k = s.substring(0, 2);
      Set<Character> set = map.getOrDefault(k, new HashSet<>());
      set.add(s.charAt(2));
      map.put(k, set);
    }
    Map<String, Integer> dp = new HashMap<>();
    boolean res = search2(bottom + "#", map, dp);
    return res;
  }
  private boolean search2(String s, Map<String, Set<Character>> map, Map<String, Integer> dp) {
    if (s.length() == 1) return true;
    if (dp.containsKey(s)) return dp.get(s) == 1;
    String key = s.substring(0, 2);
    if (key.charAt(1) == '#') return search2(s.substring(2) + "#", map, dp);
    for (Character c : map.getOrDefault(key, new HashSet<>())) {
      boolean r = search2(s.substring(1) + c, map, dp);
      if (r) {
        dp.put(s, 1);
        return true;
      }
    }
    dp.put(s, 0);
    return false;
  }
  private boolean search(String s, Map<String, Set<Character>> map, Map<String, Integer> dp) {
    if (s.length() == 2) {
      return map.containsKey(s);
    }
    if (s.length() < 2) return false;
    List<String> nextLevel = new ArrayList<>();
    nextLevel.add("");
    for (int i = 0; i < s.length() - 1; i++) {
      List<String> list = new ArrayList<>();
      String k = s.substring(i, i + 2);
      if (!map.containsKey(k)) return false;
      for (Character e : map.get(k)) {
        for (String ps : nextLevel) {
          list.add(ps + e);
        }
      }
      nextLevel = list;
    }
    boolean res = false;
    for (String e : nextLevel) {
      res = search(e, map, dp);
      if (res) return true;
    }
    return false;
  } 
}
```

### Python

```python
class Solution:
    def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
        n = len(bottom)
        mat = [[('X', -1) for _ in range(n-1-i)] for i in range(n-1)]
        stack = [(row, l-row) for l in range(n-1) for row in range(l+1)]
        mapping = {}
        for a in allowed:
            if a[:2] not in mapping:
                mapping[a[:2]] = [a[2]]
            else:
                mapping[a[:2]].append(a[2])
        pos = 0
        def find_parents(row, col):
            if row == 0:
                return bottom[col:col+2]
            return mat[row-1][col][0] + mat[row-1][col+1][0]

        while pos >= 0 and pos < len(stack):
            row, col = stack[pos]
            me, idx = mat[row][col]
            parents = find_parents(row, col)
            options = mapping.get(parents, [])
            if idx+1 < len(options):
                idx += 1
                me = options[idx]
                mat[row][col] = (me, idx)
                pos += 1
            else:
                pos -= 1
        return pos >= len(stack)
```

## Complexity Analysis

### Time Complexity: O(K × n^2)

### Space Complexity: O(n^2)

## References

- **LeetCode Problem**: [Pyramid Transition Matrix](https://leetcode.com/problems/pyramid-transition-matrix/)


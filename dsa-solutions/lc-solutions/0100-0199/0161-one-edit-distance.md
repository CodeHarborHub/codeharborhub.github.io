---
id: one-edit-distance
title: One Edit Distance
sidebar_label: 0161-One Edit Distance
tags:
  - Leet code
description: "Solution to leetocde 161"
---

### Problem Description
Given two strings s and t, determine if they are both one edit distance apart.

#### Note: 

- There are 3 possiblities to satisify one edit distance apart:

- Insert a character into s to get t
- Delete a character from s to get t
- Replace a character of s to get t


***Example 1:***
```

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
```

***Example 2:***
```
Input: s = "cab", t = "ad"
Output: false
Explanation: We cannot get t from s by only one step.
```
***Example 3:***
```
Input: s = "1203", t = "1213"
Output: true
Explanation: We can replace '0' with '1' to get t.
```

### Approach

The `isOneEditDistance` function checks if two strings `s` and `t` are at most one edit distance apart. An edit distance is defined as a single operation of insertion, deletion, or replacement.

### Steps

1. **Ensure |s| ≤ |t|**:
   - If the length of `s` is greater than the length of `t`, swap them. This simplifies the problem to always handling the case where `|s| ≤ |t|`.

2. **Compare Characters**:
   - Iterate through both strings until the first differing character is found.

3. **Check Edit Operations**:
   - If the lengths of `s` and `t` are the same:
     - Check if replacing the differing character makes the remaining substrings identical.
   - If the lengths differ by one:
     - Check if deleting the differing character from `t` makes the substrings identical.

4. **Final Check**:
   - After the loop, if no differing character is found, verify if the length of `t` is exactly one more than `s` (to account for the insertion case).

### Summary

The function compares the two strings to determine if they can be made identical with exactly one edit operation. It handles the three possible edits—replacement, insertion, or deletion—by examining the strings based on their lengths and differences.





### Code Implementation

### C++

```cpp
class Solution {
 public:
  bool isOneEditDistance(string s, string t) {
    const int m = s.length();
    const int n = t.length();
    if (m > n)  // Make sure that |s| <= |t|.
      return isOneEditDistance(t, s);

    for (int i = 0; i < m; ++i)
      if (s[i] != t[i]) {
        if (m == n)
          return s.substr(i + 1) == t.substr(i + 1);  // Replace s[i] with t[i].
        return s.substr(i) == t.substr(i + 1);        // Delete t[i].
      }

    return m + 1 == n;  // Delete t[-1].
  }
};
```

### Python

```python
class Solution:
  def isOneEditDistance(self, s: str, t: str) -> bool:
    m = len(s)
    n = len(t)
    if m > n:  # Make sure that |s| <= |t|.
      return self.isOneEditDistance(t, s)

    for i in range(m):
      if s[i] != t[i]:
        if m == n:
          return s[i + 1:] == t[i + 1:]  # Replace s[i] with t[i].
        return s[i:] == t[i + 1:]  # Delete t[i].

    return m + 1 == n  # Delete t[-1].
```



### Java

```java
class Solution {
  public boolean isOneEditDistance(String s, String t) {
    final int m = s.length();
    final int n = t.length();
    if (m > n) // Make sure that |s| <= |t|.
      return isOneEditDistance(t, s);

    for (int i = 0; i < m; ++i)
      if (s.charAt(i) != t.charAt(i)) {
        if (m == n)
          return s.substring(i + 1).equals(t.substring(i + 1)); // Replace s[i] with t[i].
        return s.substring(i).equals(t.substring(i + 1));       // Delete t[i].
      }

    return m + 1 == n; // Delete t[-1].
  }
}
```

### Complexity 
- time complexity : $O(min(∣s∣,∣t∣))$
- Space complexity : $O(1)$
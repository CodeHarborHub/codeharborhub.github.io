---
id: is-subsequence
title: Is Subsequence
sidebar_label: 0392-Is Subsequence
tags:
  - Two Pointers
  - String
  - Dynamic Programming
description: "This is a solution to Is Subsequence in leetcode "
---

## Problem Description

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

### Examples

**Example 1:**

```
Input: s = "abc", t = "ahbgdc"
Output: true

```
**Example 2:**
```
Input: s = "axc", t = "ahbgdc"
Output: false
 

 ```
## Complexity Analysis

*** Time Complexity:** $O(m+k*nlogm)$

*** Space Complexity:** $O(m)$

### Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 104`
-  `s` and `t` consist only of lowercase English letters.


### Solution
## Approach
To check if 's' is a subsequence of 't', use a two-pointer approach where one pointer traverses 's' and the other traverses 't'. If all characters of 's' are found in order within 't', return 'true'; otherwise, return 'false'. For handling many such checks efficiently, preprocess 't' into a mapping of character positions to quickly locate characters and verify subsequences, which speeds up the process for large numbers of queries.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>

class Solution {
public:
    bool isSubsequence(std::string s, std::string t) {
        int i = 0; 
       int j = 0; 
    
        while (i < s.length() && j < t.length()) {
            if (s[i] == t[j]) {
                i++; 
            }
            j++; }

        return i == s.length();
    }
};



```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0; 
        int j = 0; 
      
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) {
                i++; 
            }
            j++; 
        }

        return i == s.length();
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i=0
        j=0

        while i<len(s) and j<len(t):
            if s[i]==t[j]:
                i+=1
            j+=1
        return i==len(s)


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Is Subsequence](https://leetcode.com/problems/is-subsequence/solutions/)

- **Solution Link**: [Is Subsequence](https://leetcode.com/problems/is-subsequence/post-solution/?submissionId=1203193848)

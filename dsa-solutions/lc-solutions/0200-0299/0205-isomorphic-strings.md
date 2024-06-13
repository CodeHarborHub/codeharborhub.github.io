---
id: isomorphic-strings
title: Isomorphic Strings
sidebar_label: 205-Isomorphic-Strings
tags:
- Hash Table
- String
- Java
- C++
- Python
description: "This document provides solutions for determining if two strings are isomorphic."
---

## Problem

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Examples

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

**Example 2:**

**Input:** s = "foo", t = "bar"

**Output:** false

**Example 3:**

**Input:** s = "paper", t = "title"

**Output:** true

### Constraints

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ASCII characters.

---

## Approach

The problem can be solved by using two hash maps to track the mappings from characters in `s` to `t` and vice versa. If the mappings are consistent throughout the strings, then the strings are isomorphic.

### Steps:

1. **Initialization:**
   - Create two hash maps to store the character mappings from `s` to `t` and from `t` to `s`.

2. **Iterate and Map:**
   - Iterate through the characters of both strings simultaneously.
   - For each character pair, check if the current mapping exists and is consistent with the previous mappings.
   - If any inconsistency is found, return false.

3. **Return Result:**
   - If the iteration completes without finding any inconsistency, return true.

## Solution for Isomorphic Strings

### Java Solution

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) return false;
        
        Map<Character, Character> mapS = new HashMap<>();
        Map<Character, Character> mapT = new HashMap<>();
        
        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);
            
            if (mapS.containsKey(c1)) {
                if (mapS.get(c1) != c2) return false;
            } else {
                mapS.put(c1, c2);
            }
            
            if (mapT.containsKey(c2)) {
                if (mapT.get(c2) != c1) return false;
            } else {
                mapT.put(c2, c1);
            }
        }
        
        return true;
    }
}
```
### C++ Solution

```cpp
#include <unordered_map>
#include <string>

class Solution {
public:
    bool isIsomorphic(std::string s, std::string t) {
        if (s.length() != t.length()) return false;
        
        std::unordered_map<char, char> mapS;
        std::unordered_map<char, char> mapT;
        
        for (int i = 0; i < s.length(); i++) {
            char c1 = s[i];
            char c2 = t[i];
            
            if (mapS.count(c1)) {
                if (mapS[c1] != c2) return false;
            } else {
                mapS[c1] = c2;
            }
            
            if (mapT.count(c2)) {
                if (mapT[c2] != c1) return false;
            } else {
                mapT[c2] = c1;
            }
        }
        
        return true;
    }
};
```
### Python Solution

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        mapS = {}
        mapT = {}
        
        for c1, c2 in zip(s, t):
            if c1 in mapS:
                if mapS[c1] != c2:
                    return False
            else:
                mapS[c1] = c2
                
            if c2 in mapT:
                if mapT[c2] != c1:
                    return False
            else:
                mapT[c2] = c1
        
        return True
```
### Complexity Analysis
**Time Complexity:** O(n)
> Reason: The algorithm involves a single pass through both strings, resulting in a time complexity of $O(n)$, where $n$ is the length of the strings.

**Space Complexity:** O(n)
>Reason: The space complexity is $O(n)$ due to the additional hash maps used to store the character mappings.

### References
**LeetCode Problem:** Isomorphic Strings

**Solution Link:** Isomorphic Strings Solution on LeetCode
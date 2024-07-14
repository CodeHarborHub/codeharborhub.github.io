---
id: split-concatenated-strings
title: Split Concatenated Strings
sidebar_label: 0555-split-concatenated-strings
tags:
  - Greedy
  - String
  - Array
description: "This is a solution to split-concatenated-strings problem on LeetCode."
---

## Problem Description

You are given an array of strings `strs`. You could concatenate these strings together into a loop, where for each string, you could choose to reverse it or not. Among all the possible loops

Return the lexicographically largest string after cutting the loop, which will make the looped string into a regular one.

Specifically, to find the lexicographically largest string, you need to experience two phases:

1- Concatenate all the strings into a loop, where you can reverse some
   strings or not and connect them in the same order as given.
2- Cut and make one breakpoint in any place of the loop, which will
   make the looped string into a regular one starting from the character at the cutpoint.

And your job is to find the lexicographically largest one among all the possible regular strings.

### Examples

**Example 1:**

```
Input: strs = ["abc","xyz"]
Output: "zyxcba"
Explanation: You can get the looped string "-abcxyz-", "-abczyx-", "-cbaxyz-", "-cbazyx-", where '-' represents the looped status. 
The answer string came from the fourth looped one, where you could cut from the middle character 'a' and get "zyxcba".
```

**Example 2:**

```
Input: strs = ["abc"]
Output: "cba"

```


### Constraints

- `1 <= strs.length <= 1000`
- `1 <= strs[i].length <= 1000`
- `1 <= sum(strs[i].length) <= 1000`
- `strs[i]` consists of lowercase English letters.



## Solution for Assign Cookies

### Approach:

1- For each string in the input list, store the lexicographically
   larger string between the original and its reverse.
2- Initialize an empty string to store the result.
3- For each string, concatenate the parts from the list excluding the
   current string.
4- For each rotation of the current string, form possible concatenated
   results by appending the rotated string before and after the concatenated parts.
5- Compare and update the result with the lexicographically largest
   string formed.


## Code in Different Languages

### C++

```cpp
class Solution {
public:
    string splitLoopedString(vector<string>& strs) {
        for (auto& s : strs) {
            string t{s.rbegin(), s.rend()};
            s = max(s, t);
        }
        int n = strs.size();
        string ans = "";
        for (int i = 0; i < strs.size(); ++i) {
            auto& s = strs[i];
            string t;
            for (int j = i + 1; j < n; ++j) {
                t += strs[j];
            }
            for (int j = 0; j < i; ++j) {
                t += strs[j];
            }
            for (int j = 0; j < s.size(); ++j) {
                auto a = s.substr(j);
                auto b = s.substr(0, j);
                auto cur = a + t + b;
                if (ans < cur) {
                    ans = cur;
                }
                reverse(a.begin(), a.end());
                reverse(b.begin(), b.end());
                cur = b + t + a;
                if (ans < cur) {
                    ans = cur;
                }
            }
        }
        return ans;
    }
};
```
### Java

```java
class Solution {
    public String splitLoopedString(String[] strs) {
        int n = strs.length;
        for (int i = 0; i < n; ++i) {
            String s = strs[i];
            String t = new StringBuilder(s).reverse().toString();
            if (s.compareTo(t) < 0) {
                strs[i] = t;
            }
        }
        String ans = "";
        for (int i = 0; i < n; ++i) {
            String s = strs[i];
            StringBuilder sb = new StringBuilder();
            for (int j = i + 1; j < n; ++j) {
                sb.append(strs[j]);
            }
            for (int j = 0; j < i; ++j) {
                sb.append(strs[j]);
            }
            String t = sb.toString();
            for (int j = 0; j < s.length(); ++j) {
                String a = s.substring(j);
                String b = s.substring(0, j);
                String cur = a + t + b;
                if (ans.compareTo(cur) < 0) {
                    ans = cur;
                }
                cur = new StringBuilder(b)
                          .reverse()
                          .append(t)
                          .append(new StringBuilder(a).reverse().toString())
                          .toString();
                if (ans.compareTo(cur) < 0) {
                    ans = cur;
                }
            }
        }
        return ans;
    }
}

```

### Python

```python
class Solution:
    def splitLoopedString(self, strs: List[str]) -> str:
        strs = [s[::-1] if s[::-1] > s else s for s in strs]
        ans = ''.join(strs)
        for i, s in enumerate(strs):
            t = ''.join(strs[i + 1 :]) + ''.join(strs[:i])
            for j in range(len(s)):
                a = s[j:]
                b = s[:j]
                ans = max(ans, a + t + b)
                ans = max(ans, b[::-1] + t + a[::-1])
        return ans

```

## Complexity Analysis

### Time Complexity: O(n × l^2)
 **Reason**: where n is the number of strings in the vector and l is the average length of the strings.

### Space Complexity: O(n × l )
**Reason**: Due to the space required for storing the modified strings and temporary concatenations.

## References

- **LeetCode Problem**: [Split Concatenated Strings](https://leetcode.com/problems/split-concatenated-strings/)


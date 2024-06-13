---
id: Longest Comman Prefix
title: Longest Comman Prefix (LeetCode)
sidebar_label: 0014-Longest Comman Prefix
tags:
    - Hash Table
    - Math
    - String
description: finds logest comman prefix for a given string.
sidebar_position: 14
---

## Problem Statement

Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

#### Example 1:

- Input: `strs = ["flower","flow","flight"]`
- Output: `"fl"`

#### Example 2:

- Input: `strs = ["dog","racecar","car"]`
- Output: `""`
- Explanation: There is no common prefix among the input strings.

### Constraints:

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

## Approaches and Solutions

### Approach 1: Horizontal Scanning

**Intuition:**
Iteratively find the longest common prefix (LCP) of the first two strings, then find the LCP of the result with the next string, and so on. 

**Algorithm:**
1. Initialize the prefix as the first string in the list.
2. Iterate through the rest of the strings.
3. Update the prefix by comparing it with the current string.
4. If at any point the prefix becomes an empty string, return `""`.

**Time Complexity:** $O(S)$, where S is the sum of all characters in all strings.

**Space Complexity:** $O(1)$, since we use only constant extra space.

**C++ Implementation:**
```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0];
        for (int i = 1; i < strs.size(); i++) {
            while (strs[i].find(prefix) != 0) {
                prefix = prefix.substr(0, prefix.length() - 1);
                if (prefix.empty()) return "";
            }
        }
        return prefix;
    }
};
```

**Java Implementation:**
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }
}
```

**Python Implementation:**
```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        prefix = strs[0]
        for i in range(1, len(strs)):
            while strs[i].find(prefix) != 0:
                prefix = prefix[0 : len(prefix) - 1]
                if prefix == "":
                    return ""
        return prefix
```

### Approach 2: Vertical Scanning

**Intuition:**
Compare characters from top to bottom on the same column (i.e., same character index across all strings) before moving on to the next column.

**Algorithm:**
1. Iterate through the characters of the first string.
2. Compare the current character with the corresponding character of the other strings.
3. If they all match, continue; otherwise, return the common prefix up to the current column.

**Time Complexity:** $O(S)$, where S is the sum of all characters in all strings.

**Space Complexity:** $O(1)$, since we use only constant extra space.

**C++ Implementation:**
```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        for (int i = 0; i < strs[0].size(); i++) {
            char c = strs[0][i];
            for (int j = 1; j < strs.size(); j++) {
                if (i == strs[j].size() || strs[j][i] != c)
                    return strs[0].substr(0, i);
            }
        }
        return strs[0];
    }
};
```

**Java Implementation:**
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) 
                    return strs[0].substring(0, i);
            }
        }
        return strs[0];
    }
}
```

**Python Implementation:**
```python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if strs == None or len(strs) == 0:
            return ""
        for i in range(len(strs[0])):
            c = strs[0][i]
            for j in range(1, len(strs)):
                if i == len(strs[j]) or strs[j][i] != c:
                    return strs[0][0:i]
        return strs[0]
```

### Approach 3: Divide and Conquer

**Intuition:**
Use the divide and conquer technique, where the problem is divided into two subproblems, find their LCP, and then combine their results.

**Algorithm:**
1. Divide the list of strings into two halves.
2. Recursively find the LCP of each half.
3. Merge the results by finding the LCP of the two halves.

**Time Complexity:** $O(S)$, where S is the sum of all characters in all strings.

**Space Complexity:** $O(m log n)$, where m is the length of the shortest string and n is the number of strings.

**C++ Implementation:**
```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        return longestCommonPrefix(strs, 0, strs.size() - 1);
    }

private:
    string longestCommonPrefix(vector<string>& strs, int l, int r) {
        if (l == r) {
            return strs[l];
        } else {
            int mid = (l + r) / 2;
            string lcpLeft = longestCommonPrefix(strs, l, mid);
            string lcpRight = longestCommonPrefix(strs, mid + 1, r);
            return commonPrefix(lcpLeft, lcpRight);
        }
    }

    string commonPrefix(string left, string right) {
        int min = std::min(left.length(), right.length());
        for (int i = 0; i < min; i++) {
            if (left[i] != right[i]) return left.substr(0, i);
        }
        return left.substr(0, min);
    }
};
```

**Java Implementation:**
```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        return longestCommonPrefix(strs, 0, strs.length - 1);
    }

    private String longestCommonPrefix(String[] strs, int l, int r) {
        if (l == r) {
            return strs[l];
        } else {
            int mid = (l + r) / 2;
            String lcpLeft = longestCommonPrefix(strs, l, mid);
            String lcpRight = longestCommonPrefix(strs, mid + 1, r);
            return commonPrefix(lcpLeft, lcpRight);
        }
    }

    private String commonPrefix(String left, String right) {
        int min = Math.min(left.length(), right.length());
        for (int i = 0; i < min; i++) {
            if (left.charAt(i) != right.charAt(i)) return left.substring(0, i);
        }
        return left.substring(0, min);
    }
}
```

**Python Implementation:**
```python
class Solution:
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""

        def LCP(left, right):
            min_len = min(len(left), len(right))
            for i in range(min_len):
                if left[i] != right[i]:
                    return left[:i]
            return left[:min_len]

        def divide_and_conquer(strs, l, r):
            if l == r:
                return strs[l]
            else:
                mid = (l + r) // 2
                lcpLeft = divide_and_conquer(strs, l, mid)
                lcpRight = divide_and_conquer(strs, mid + 1, r)
                return LCP(lcpLeft, lcpRight)

        return divide_and_conquer(strs, 0, len(strs) - 1)
```

## Conclusion

We've discussed three different approaches to solving the problem of finding the longest common prefix among an array of strings. Each approach has its own merits, and the choice of which to use depends on the specific requirements and constraints of the problem. The provided implementations in C++, Java, and Python cover horizontal scanning, vertical scanning, and divide and conquer methods.
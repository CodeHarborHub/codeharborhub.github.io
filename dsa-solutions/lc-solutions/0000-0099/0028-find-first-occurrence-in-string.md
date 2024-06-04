---
id: find-first-occurrence-in-string
title: Find the Index of the First Occurrence in a String
difficulty: Easy
sidebar_label: 0028-FindFirstOccurrenceInString
tags:
  - String
---

## Problem Description

| Problem Statement                                                                                           | Solution Link                                                                                                                               | LeetCode Profile                                   |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- |
| [Remove Duplicates from Sorted Array](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)                                         | [Remove Duplicates from Sorted Array Solution on LeetCode](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/) | [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.

### Examples

#### Example 1:

- **Input:** 
  - `haystack = "sadbutsad"`
  - `needle = "sad"`
- **Output:** `0`
- **Explanation:** 
  - "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.

#### Example 2:

- **Input:** 
  - `haystack = "leetcode"`
  - `needle = "leeto"`
- **Output:** `-1`
- **Explanation:** 
  - "leeto" did not occur in "leetcode", so we return -1.

### Constraints

- `1 <= haystack.length , needle.length <= 10^4 `
- haystack and needle consist of only lowercase English characters.

### Approach

To solve the problem, we can use the following approach:

1. **Sliding Window Technique:**
   - We iterate through the `haystack` string with a window of size equal to the length of the `needle`.
   - At each step, we check if the substring of the `haystack` starting at the current index and having the same length as the `needle` matches the `needle`.
   - If a match is found, we return the current index.
   - If no match is found after iterating through the entire `haystack`, we return -1.

### Solution Code

#### Python

```
class Solution(object):
    def strStr(self, haystack, needle):     
        if not needle:
            return 0
        if len(needle) > len(haystack):
            return -1
        
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i:i + len(needle)] == needle:
                return i
        return -1
```

#### Java

```
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        
        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i;
            }
        }
        
        return -1;
    }
}
```

#### C++

```
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;
        
        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            if (haystack.substr(i, needle.length()) == needle) {
                return i;
            }
        }
        
        return -1;
    }
};
```

### Conclusion

The above solution efficiently finds the index of the first occurrence of a substring `needle` in the string `haystack`. It employs a sliding window technique to traverse the `haystack` string and compare substrings with the `needle`, providing a simple yet effective approach to solving the problem.

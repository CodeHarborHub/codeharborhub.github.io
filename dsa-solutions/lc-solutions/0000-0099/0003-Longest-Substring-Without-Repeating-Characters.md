---
id: longest-substrings-without-repeating-characters
title: Longest Substring Without Repeating Characters (LeetCode)
sidebar_label: 0003 - Longest Substring Without Repeating Characters
tags:
  - Hash table
  - String
  - Sliding Window
description: "This is a solution to the Longest Substring Without Repeating Characters problem on LeetCode."
---

## Problem Description

| Problem Statement                                             | Solution Link                                                                                                                                                             | LeetCode Profile                                    |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------- |
| [Longest Substring Without Repeating Characters on LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | [Longest Substring Without Repeating Characters Solution on LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/5234730/solution/) | [Amruta Jayanti](https://leetcode.com/u/user7669cY/)|


## Problem Description

Given a string `s`, find the length of the  **longest substring**  without repeating characters.

 

**Example 1:**

```plaintext
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```plaintext
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```plaintext
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
``` 

### Constraints:


- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.


## Solution to the problem

### Intuition and Approach
This is a simple problem.Here try to maintain the unique characters and erase the repeating character.
#### Implementation
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLength = 0
        charSet = set()
        left = 0
        
        for right in range(n):
            if s[right] not in charSet:
                charSet.add(s[right])
                maxLength = max(maxLength, right - left + 1)
            else:
                while s[right] in charSet:
                    charSet.remove(s[left])
                    left += 1
                charSet.add(s[right])
        
        return maxLength
```
Above is the implementation in Python.

#### Complexity Analysis:
- Time Complexity : $$O(n)$$ Here, n is the length of the substring
- Space Complexity : $$O(min(n,m))$$ Here, m is the size of character set

#### Codes in different languages:
`CPP`:
```cpp
#include <vector>
#include <string>
#include <algorithm>

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        if (s.empty()) return 0;

        int maxLength = 0;
        std::vector<char> seen;

        for (char c : s) {
            auto it = std::find(seen.begin(), seen.end(), c);
            if (it == seen.end()) {
                seen.push_back(c);
                maxLength = std::max(maxLength, static_cast<int>(seen.size()));
            } else {
                seen.erase(seen.begin(), it + 1); // Remove characters before the repeated character
                seen.push_back(c);
            }
        }

        return maxLength;
    }
};
```

`Java`:
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();
        int maxLength = 0;
        Set<Character> charSet = new HashSet<>();
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            if (!charSet.contains(s.charAt(right))) {
                charSet.add(s.charAt(right));
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                while (charSet.contains(s.charAt(right))) {
                    charSet.remove(s.charAt(left));
                    left++;
                }
                charSet.add(s.charAt(right));
            }
        }
        
        return maxLength;
    }
}
```

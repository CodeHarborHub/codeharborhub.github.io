---
id: minimum-window-substring
title: Minimum Window Substring(LeetCode)
sidebar_label: 0076-Minimum Window Substring
tags:
  - String
  - Hash Table
  - Sliding Window
description: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
---

## Problem Statement

Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is unique.

### Examples

**Example 1:**

```plaintext
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**

```plaintext
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**

```plaintext
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

### Constraints

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 105`
- `s` and `t` consist of uppercase and lowercase English letters.

## Solution

### Approach 1: C++

#### Algorithm

1. Initialization:
* Create a `map` to count characters in `t`.
* Initialize `counter` to the length of `t`, begin and end pointers to 0, `d` (length of the minimum window) to `INT_MAX`, and `head` to 0.
2. Expand the Window:
* Move the `end` pointer to expand the window.
* Decrease the count in `map` for the current character in `s`.
* If the count in `map` is greater than 0, decrement `counter`.
3. Shrink the Window:
* When `counter` is 0, try to shrink the window by moving the `begin` pointer.
* If the new window size is smaller, update `head` and `d`.
* Increase the count in `map` for the character at `begin`.
* If the count in `map` becomes positive, increment `counter`.
4. Return Result:
* If `d` is still `INT_MAX`, return an empty string.
* Otherwise, return the substring starting from `head` with length `d`.

#### Implementation

```C++
class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> map(128, 0);
        for (char c : t) {
            map[c]++;
        }

        int counter = t.size(), begin = 0, end = 0, d = INT_MAX, head = 0;
        while (end < s.size()) {
            if (map[s[end++]]-- > 0) {
                counter--;
            }
            while (counter == 0) {
                if (end - begin < d) {
                    head = begin;
                    d = end - head;
                }
                if (map[s[begin++]]++ == 0) {
                    counter++;
                }
            }
        }
        return d == INT_MAX ? "" : s.substr(head, d);
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(M+N)$
- **Space complexity**: $O(1)$

### Approach 2: Python

#### Algorithm

1. Initialization:
* Create a `needstr` dictionary to count characters in `t`.
* Initialize `needcnt` to the length of `t`, `res` to store the result window, and `start` to 0.
2. Expand the Window:
* Move the `end` pointer to expand the window.
* Decrease the count in `needstr` for the current character in `s`.
* If the count in `needstr` is greater than 0, decrement `needcnt`.
3. Shrink the Window:
* When `needcnt` is 0, try to shrink the window by moving the `start` pointer.
* Adjust the count in `needstr` for the character at `start`.
* If the count in `needstr` becomes positive, increment `needcnt`.
4. Return Result:
* If the result window is valid, return the substring.
* Otherwise, return an empty string.
  
#### Implementation 

```Python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""
        needstr = collections.defaultdict(int)
        for ch in t:
            needstr[ch] += 1
        needcnt = len(t)
        res = (0, float('inf'))
        start = 0
        for end, ch in enumerate(s):
            if needstr[ch] > 0:
                needcnt -= 1
            needstr[ch] -= 1
            if needcnt == 0:
                while True:
                    tmp = s[start]
                    if needstr[tmp] == 0:
                        break
                    needstr[tmp] += 1
                    start += 1
                if end - start < res[1] - res[0]:
                    res = (start, end)
                needstr[s[start]] += 1
                needcnt += 1
                start += 1
        return '' if res[1] > len(s) else s[res[0]:res[1]+1]
```

### Complexity Analysis

- **Time complexity**: $O(M+N)$
- **Space complexity**: $O(N)$

### Conclusion

The C++ and Python approaches for finding the minimum window substring are quite similar in their methodology. Both utilize the two-pointer technique, also known as the sliding window approach, to efficiently traverse the string s and dynamically adjust the window to find the smallest valid substring containing all characters of the string t. They maintain a character count map to keep track of the required characters from t and adjust the counts as the window expands and contracts. Additionally, both solutions use a counter variable to monitor the number of characters still needed to form a valid window.

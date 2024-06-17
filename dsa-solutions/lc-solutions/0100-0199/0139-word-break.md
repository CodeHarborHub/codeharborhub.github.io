---
id: word-break
title: Word Break(LeetCode)
sidebar_label: 0139-Word Break
tags:
  - Array
  - Hash Table
  - String
  - Dynamic Programming
  - Trie
  - Memoization
description: Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
---

## Problem Statement

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

### Examples

**Example 1:**

```plaintext
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**

```plaintext
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```plaintext
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

### Constraints

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are unique.

## Solution

The word break problem can be efficiently solved using dynamic programming. This approach uses a boolean vector `dp[]` where `dp[i]` is set to true if a valid word (or sequence of words) ends at the `i-th` position of the string. The key optimization here is to look backwards from the current position `i` and only consider substrings if a valid word ends at the preceding position `j` where `dp[j] == true`.

### Approach 

#### Algorithm

1. Initialize:
* If the dictionary is empty, return `false` as no word can be formed.
* Create a boolean vector `dp` of size `s.size() + 1` and initialize all values to `false`.
* Set `dp[0] = true` because an empty string can always be segmented (base case).
2. Iterate through the string:
* For each position `i` from 1 to `s.size()`:
  * Iterate backwards from `i-1` to 0 for each position `j`:
    * If `dp[j]` is `true`, it means a valid word sequence ends at `j`.
    * Extract the substring `s[j:i]`.
    * If this substring is found in the dictionary, set `dp[i]` to `true` and break out of the inner loop as we found a valid word ending at `i`.
3. Return Result:
* The value `dp[s.size()]` will be `true` if the string `s` can be segmented into valid words from the dictionary.

#### Implementation

```C++
#include <vector>
#include <string>
#include <unordered_set>

bool wordBreak(std::string s, std::unordered_set<std::string> &dict) {
    if(dict.size() == 0) return false;

    std::vector<bool> dp(s.size() + 1, false);
    dp[0] = true;

    for(int i = 1; i <= s.size(); i++) {
        for(int j = i - 1; j >= 0; j--) {
            if(dp[j]) {
                std::string word = s.substr(j, i - j);
                if(dict.find(word) != dict.end()) {
                    dp[i] = true;
                    break; // Move to the next i
                }
            }
        }
    }

    return dp[s.size()];
}
```

### Complexity Analysis

- **Time complexity**: O(N^2 * M), where `N` is the length of the string `s` and `M` is the average length of the words in the dictionary.
- **Space complexity**: O(N), where `N` is the length of the string `s`.

### Conclusion

The dynamic programming approach to solving the word break problem is efficient and straightforward. By using a boolean vector to keep track of valid word endings, the algorithm ensures that each position in the string is only considered once for each potential word break. This reduces redundant computations and optimizes performance, making it feasible to solve even for relatively large strings and dictionaries.

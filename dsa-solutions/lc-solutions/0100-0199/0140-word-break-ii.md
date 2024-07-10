---
id: word-break-ii
title: Word Break II
level: hard
sidebar_label: 0140 - Word Break II
tags:
  - Dynamic Programming
  - Backtracking
description: "This document provides solutions for the Word Break II problem."
---

## Problem Statement

Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

**Examples:**

Example 1:

Input: `s = "catsanddog"`, `wordDict = ["cat","cats","and","sand","dog"]`

Output: `["cats and dog","cat sand dog"]`

Example 2:

Input: `s = "pineapplepenapple"`, `wordDict = ["apple","pen","applepen","pine","pineapple"]`

Output: `["pine apple pen apple","pineapple pen apple","pine applepen apple"]`

Explanation: Note that you are allowed to reuse a dictionary word.

Example 3:

Input: `s = "catsandog"`, `wordDict = ["cats","dog","sand","and","cat"]`

Output: `[]`

**Constraints:**

- `1 <= s.length <= 20`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 10`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are unique.
- Input is generated in a way that the length of the answer doesn't exceed `105`.

## Solutions

### Approach

To solve the problem of generating all possible sentences from `s` using words from `wordDict`, we can utilize a recursive backtracking approach combined with memoization for efficiency.

1. **Recursive Backtracking with Memoization:**
   - Use a recursive function `wordBreakHelper` to explore all possible segmentations of `s`.
   - Use a `Set` for `wordDict` to achieve O(1) time complexity for word lookups.
   - Maintain a `Map` (`memo`) to store results of already computed segmentations to avoid redundant computations.
   
2. **Base Case and Recursive Case:**
   - Base Case: When `index == s.length()`, if the current segmentation (`temp`) is empty (`"".equals(temp)`), add the segmented string from `sb` to the result list (`list`).
   - Recursive Case: For each character in `s` starting from `index`, form a substring (`temp`) and check if it exists in `wordDict`. If it does, add it to `sb` and recursively call `wordBreakHelper` with updated `index` and `temp`. After recursion, backtrack by removing `temp` from `sb`.

3. **Memoization:**
   - Before making a recursive call, check if the current `index` and `sb.toString()` combination already exists in `memo`. If it does, directly retrieve the result from `memo` to avoid recomputation.
  
### Code(C++):

```cpp

#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <sstream>
using namespace std;

class Solution {
public:
    vector<string> wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        unordered_map<int, vector<string>> memo;
        return wordBreakHelper(s, wordSet, 0, memo);
    }

private:
    vector<string> wordBreakHelper(const string& s, const unordered_set<string>& wordDict, int start, unordered_map<int, vector<string>>& memo) {
        if (memo.find(start) != memo.end()) {
            return memo[start];
        }

        vector<string> result;
        if (start == s.length()) {
            result.push_back("");
            return result;
        }

        for (int end = start + 1; end <= s.length(); ++end) {
            string word = s.substr(start, end - start);
            if (wordDict.find(word) != wordDict.end()) {
                vector<string> sublist = wordBreakHelper(s, wordDict, end, memo);
                for (const string& sub : sublist) {
                    result.push_back(word + (sub.empty() ? "" : " ") + sub);
                }
            }
        }

        memo[start] = result;
        return result;
    }
};

```
  

### Code (Java): 

```java

class Solution {
    List<String> list = new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    Map<String, List<String>> memo = new HashMap<>();

    public List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> wordSet = Set.copyOf(wordDict);
        wordBreakHelper(s, wordSet, 0);
        return list;
    }

    private List<String> wordBreakHelper(String s, Set<String> wordDict, int index) {
        if (index == s.length()) {
            List<String> temp = new ArrayList<>();
            if ("".equals(sb.toString())) {
                temp.add(sb.substring(0, sb.length() - 1).toString());
            }
            return temp;
        }
        
        String current = s.substring(index);
        if (memo.containsKey(current)) {
            return memo.get(current);
        }
        
        List<String> sentences = new ArrayList<>();
        StringBuilder temp = new StringBuilder();
        
        for (int i = index; i < s.length(); i++) {
            temp.append(s.charAt(i));
            if (wordDict.contains(temp.toString())) {
                int len = sb.length();
                sb.append(temp).append(' ');
                List<String> nextSentences = wordBreakHelper(s, wordDict, i + 1);
                for (String sentence : nextSentences) {
                    sentences.add(sb.toString() + sentence);
                }
                sb.setLength(len);  // Backtrack
            }
        }
        
        memo.put(current, sentences);
        return sentences;
    }
```

### Code (Python): 

```python

   class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        self.result = []
        self.sb = []

        def wordBreakHelper(index):
            if index == len(s):
                self.result.append(' '.join(self.sb))
                return

            temp = []
            for i in range(index, len(s)):
                temp.append(s[i])
                if ''.join(temp) in wordDict:
                    self.sb.append(''.join(temp))
                    wordBreakHelper(i + 1)
                    self.sb.pop()
        
        wordBreakHelper(0)
        return self.result
``` 

### Complexity Analysis

- **Time Complexity**:  $O(n⋅2^n)$, in the worst case, where `n` is the length of the string `s`.
- **Space Complexity**:  $O(n⋅2^n)$, in the worst case, where `n` is the length of the string `s`.

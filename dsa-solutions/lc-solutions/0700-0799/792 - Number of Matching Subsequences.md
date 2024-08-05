---
id: number-of-matching-subsequences
title: Number of Matching Subsequences
sidebar_label: 792 - Number of Matching Subsequences
tags: [Trie, Two Pointers, Hash Table, C++, Java, Python]
description: Solve the problem of counting the number of words that are subsequences of a given string using various efficient methods.
---

## Problem Statement

### Problem Description

You are given a string `s` and an array of strings `words`. The task is to return the number of `words[i]` that are subsequences of `s`.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

### Example

**Example 1:**
```
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
```

**Explanation:** There are three strings in `words` that are subsequences of `s`: "a", "acd", "ace".

**Example 2:**
```
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
```

### Constraints

- $1 \leq \text{s.length} \leq 5 \times 10^4$
- $1 \leq \text{words.length} \leq 5000$
- $1 \leq \text{words[i].length} \leq 50$
- `s` and `words[i]` consist of only lowercase English letters.

## Solution

### Intuition

To efficiently count the number of subsequences, we can use different methods, including Trie, Two Pointers, and Hash Table. The goal is to check for each word in `words` whether it can be formed as a subsequence of `s`.

### Methods

#### Method 1: Two Pointers

For each word in `words`, we can use two pointers to check if it is a subsequence of `s`. One pointer iterates through `s`, and the other iterates through the current word. We match characters and advance both pointers accordingly.

**Time Complexity:**  
The time complexity is $O(n \cdot m)$, where `n` is the length of `s` and `m` is the total number of characters in `words`.

#### Method 2: Hash Table and Bucketing

We can use a hash table where each key is a character from `a` to `z` and each value is a list of iterators. For each character in `s`, we update the hash table to see if there are any words that can progress to the next character.

**Time Complexity:**  
The time complexity is $O(n + m)$, where `n` is the length of `s` and `m` is the total length of all words in `words`.

### Code

#### C++

```cpp
class Solution {
public:
    int numMatchingSubseq(string s, vector<string>& words) {
        vector<vector<int>> waiting(128);
        for (int i = 0; i < words.size(); ++i) {
            waiting[words[i][0]].push_back(i);
        }

        int res = 0;
        for (char c : s) {
            vector<int> advance = move(waiting[c]);
            waiting[c].clear();
            for (int idx : advance) {
                if (++words[idx].length() == words[idx].size()) {
                    ++res;
                } else {
                    waiting[words[idx][words[idx].length()]].push_back(idx);
                }
            }
        }
        return res;
    }
};
```
#### Java
```java
class Solution {
    public int numMatchingSubseq(String s, String[] words) {
        List<int[]>[] waiting = new ArrayList[128];
        for (int c = 0; c <= 127; ++c) {
            waiting[c] = new ArrayList<>();
        }
        for (int i = 0; i < words.length; ++i) {
            waiting[words[i].charAt(0)].add(new int[]{i, 1});
        }

        int res = 0;
        for (char c : s.toCharArray()) {
            List<int[]> advance = waiting[c];
            waiting[c] = new ArrayList<>();
            for (int[] arr : advance) {
                if (arr[1] == words[arr[0]].length()) {
                    ++res;
                } else {
                    waiting[words[arr[0]].charAt(arr[1]++)].add(arr);
                }
            }
        }
        return res;
    }
}
```
#### Python
```python
class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        from collections import defaultdict
        waiting = defaultdict(list)
        for i, word in enumerate(words):
            waiting[word[0]].append((i, 1))

        res = 0
        for c in s:
            advance = waiting[c]
            waiting[c] = []
            for i, j in advance:
                if j == len(words[i]):
                    res += 1
                else:
                    waiting[words[i][j]].append((i, j + 1))
        return res
```

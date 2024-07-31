---
id: minimum-time-to-revert-word-to-initial-state-ii
title: Minimum Time to Revert Word to Initial State II
sidebar_label: Minimum Time to Revert Word to Initial State II
tags: [String, Simulation, C++, Python, Java]
description: Solve the problem of finding the minimum time required for a word to revert to its initial state after performing specific operations.
---

## Problem Statement

### Problem Description

You are given a 0-indexed string `word` and an integer `k`.

At every second, you must perform the following operations:

1. Remove the first `k` characters of `word`.
2. Add any `k` characters to the end of `word`.

Note that you do not necessarily need to add the same characters that you removed. However, you must perform both operations at every second.

Return the minimum time greater than zero required for `word` to revert to its initial state.

### Examples

**Example 1:**
```
Input: word = "abacaba", k = 3
Output: 2
```
**Explanation:** 
- At the 1st second, we remove characters "aba" from the prefix of `word`, and add characters "bac" to the end of `word`. Thus, `word` becomes "cababac".
- At the 2nd second, we remove characters "cab" from the prefix of `word`, and add "aba" to the end of `word`. Thus, `word` becomes "abacaba" and reverts to its initial state.
- It can be shown that 2 seconds is the minimum time greater than zero required for `word` to revert to its initial state.

**Example 2:**
```
Input: word = "abacaba", k = 4
Output: 1
```
**Explanation:** 
- At the 1st second, we remove characters "abac" from the prefix of `word`, and add characters "caba" to the end of `word`. Thus, `word` becomes "abacaba" and reverts to its initial state.
- It can be shown that 1 second is the minimum time greater than zero required for `word` to revert to its initial state.

### Constraints

- $1 \leq \text{word.length} \leq 10^6$
- $1 \leq k \leq \text{word.length}$
- `word` consists only of lowercase English letters.

## Solution

### Intuition

To find the minimum time required for the word to revert to its initial state, we can simulate the process of removing and adding characters. We aim to identify when the word returns to its original configuration after `k` characters have been shifted `n` times.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: The solution requires simulating the shifting process, which has a worst-case complexity of $O(n^2)$. This is because, in the worst-case scenario, we might need to simulate `n` shifts, each of which could involve comparing `n` characters.
- **Space Complexity**: The space complexity is $O(n)$, where `n` is the length of the string `word`.

### Code

#### C++

```cpp
class Solution {
public:
    int minimumTimeToRevert(string word, int k) {
        string original = word;
        int n = word.size();
        for (int i = 1; i <= n; ++i) {
            string prefix = word.substr(0, k);
            word = word.substr(k) + prefix;
            if (word == original) {
                return i;
            }
        }
        return n; // Default case, should never hit due to problem constraints
    }
};
```

#### Python
```python
class Solution:
    def minimumTimeToRevert(self, word: str, k: int) -> int:
        original = word
        n = len(word)
        for i in range(1, n + 1):
            prefix = word[:k]
            word = word[k:] + prefix
            if word == original:
                return i
        return n  # Default case, should never hit due to problem constraints
```
#### Java
```java
class Solution {
    public int minimumTimeToRevert(String word, int k) {
        String original = word;
        int n = word.length();
        for (int i = 1; i <= n; ++i) {
            String prefix = word.substring(0, k);
            word = word.substring(k) + prefix;
            if (word.equals(original)) {
                return i;
            }
        }
        return n; // Default case, should never hit due to problem constraints
    }
}
```

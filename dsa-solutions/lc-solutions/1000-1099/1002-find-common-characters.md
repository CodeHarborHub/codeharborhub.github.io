---
id: find-common-characters
title: Find Common Characters
sidebar_label: Find Common Characters
tags:
  - Hash Table
  - String
  - Java
  - Python
  - C++
description: "This document provides solutions for the Find Common Characters problem on LeetCode."

---

## Problem Statement

Given a string array `words`, return an array of all characters that show up in all strings within the `words` (including duplicates). You may return the answer in any order.

**Example 1:**

Input: `words = ["bella","label","roller"]`

Output: `["e","l","l"]`

**Example 2:**

Input: `words = ["cool","lock","cook"]`

Output: `["c","o"]`

**Constraints:**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of lowercase English letters.

## Solutions

### Approach

To solve this problem, we need to find characters that appear in all strings within the `words` array. We can use a hash table to keep track of the minimum frequency of each character across all words.

1. **Initialize the frequency map**:
   - Use an array of size 26 to store the frequency of each character ('a' to 'z').

2. **Count the frequency of characters in each word**:
   - For each word, count the frequency of each character and update the global minimum frequency.

3. **Build the result list**:
   - Collect characters that have a non-zero frequency in the global minimum frequency map.

### Java

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> commonChars(String[] words) {
        int[] minFreq = new int[26];
        for (int i = 0; i < 26; i++) {
            minFreq[i] = Integer.MAX_VALUE;
        }

        for (String word : words) {
            int[] charCount = new int[26];
            for (char c : word.toCharArray()) {
                charCount[c - 'a']++;
            }
            for (int i = 0; i < 26; i++) {
                minFreq[i] = Math.min(minFreq[i], charCount[i]);
            }
        }

        List<String> result = new ArrayList<>();
        for (int i = 0; i < 26; i++) {
            while (minFreq[i] > 0) {
                result.add("" + (char) (i + 'a'));
                minFreq[i]--;
            }
        }
        return result;
    }
}
```

### Python

```python
from typing import List

class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
        min_freq = [float('inf')] * 26
        
        for word in words:
            char_count = [0] * 26
            for char in word:
                char_count[ord(char) - ord('a')] += 1
            for i in range(26):
                min_freq[i] = min(min_freq[i], char_count[i])
        
        result = []
        for i in range(26):
            result.extend([chr(i + ord('a'))] * min_freq[i])
        
        return result
```

### C++

```cpp
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        vector<int> minFreq(26, INT_MAX);
        
        for (const string& word : words) {
            vector<int> charCount(26, 0);
            for (char c : word) {
                charCount[c - 'a']++;
            }
            for (int i = 0; i < 26; i++) {
                minFreq[i] = min(minFreq[i], charCount[i]);
            }
        }
        
        vector<string> result;
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < minFreq[i]; j++) {
                result.push_back(string(1, i + 'a'));
            }
        }
        
        return result;
    }
};
```

### Explanation

- **Initialize Frequency Map**:
  - We initialize an array `minFreq` of size 26 to `Integer.MAX_VALUE` or `float('inf')` to keep track of the minimum frequency of each character.
- **Count Frequency**:
  - For each word, count the frequency of each character and update the `minFreq` array with the minimum frequency.
- **Build Result**:
  - Iterate through the `minFreq` array and collect characters that have a non-zero frequency.

This approach ensures that we find the common characters that appear in all words within the `words` array, considering the constraints and requirements of the problem.

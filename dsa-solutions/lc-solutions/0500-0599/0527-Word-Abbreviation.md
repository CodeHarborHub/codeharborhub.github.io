---
id: word-abbreviation
title: Word Abbreviation
sidebar_label: 0527-Word-Abbreviation
tags:
- Array
- String
- Prefix
description: solution to the leetcode problem Word Abbreviation.
---

## Problem

Given an array of n distinct non-empty strings, you need to generate the minimal possible abbreviations for every word following the rules below:

Begin with the first character and then the number of characters abbreviated, followed by the last character.
If there are any conflicts (i.e., more than one word shares the same abbreviation), a longer prefix is used instead of only the first character until the mapping from word to abbreviation becomes unique. In other words, a final abbreviation cannot map to more than one original word.
If the abbreviation doesn't make the word shorter, then keep it as the original word.

### Examples

**Example 1:**

**Input:**

```plaintext
words = ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
```

**Output:**

```plaintext
["l2e", "god", "internal", "me", "i6t", "interval", "inte4n", "f2e", "intr4n"]
```

**Example 2:**

**Input:**

```plaintext
words = ["aa", "aaa"]
```

**Output:**

```plaintext
["aa", "aaa"]
```

### Constraints

- $1 <= words.length <= 400$
- $2 <= words[i].length <= 400$
- words[i] consists of lowercase English letters.
- All strings in `words` are unique. 

## Solution

### Cpp

```cpp
class Solution {
public:
    vector<string> wordsAbbreviation(vector<string>& words) {
        int n = words.size();
        vector<string> result(n);
        vector<int> prefix(n, 1);
        
        for (int i = 0; i < n; ++i) {
            result[i] = abbreviate(words[i], 1);
        }
        
        for (int i = 0; i < n; ++i) {
            while (true) {
                unordered_set<int> duplicates;
                for (int j = i + 1; j < n; ++j) {
                    if (result[i] == result[j]) {
                        duplicates.insert(j);
                    }
                }
                if (duplicates.empty()) break;
                
                duplicates.insert(i);
                for (int idx : duplicates) {
                    result[idx] = abbreviate(words[idx], ++prefix[idx]);
                }
            }
        }
        
        return result;
    }
    
private:
    string abbreviate(const string& word, int k) {
        if (k >= word.length() - 2) {
            return word;
        }
        return word.substr(0, k) + to_string(word.length() - 1 - k) + word.back();
    }
};
```

### Java

```java
import java.util.*;

class Solution {
    public List<String> wordsAbbreviation(List<String> words) {
        int n = words.size();
        String[] result = new String[n];
        int[] prefix = new int[n];
        
        for (int i = 0; i < n; ++i) {
            result[i] = abbreviate(words.get(i), 1);
        }
        
        for (int i = 0; i < n; ++i) {
            while (true) {
                Set<Integer> duplicates = new HashSet<>();
                for (int j = i + 1; j < n; ++j) {
                    if (result[i].equals(result[j])) {
                        duplicates.add(j);
                    }
                }
                if (duplicates.isEmpty()) break;
                
                duplicates.add(i);
                for (int idx : duplicates) {
                    result[idx] = abbreviate(words.get(idx), ++prefix[idx]);
                }
            }
        }
        
        return Arrays.asList(result);
    }
    
    private String abbreviate(String word, int k) {
        if (k >= word.length() - 2) {
            return word;
        }
        return word.substring(0, k) + (word.length() - 1 - k) + word.charAt(word.length() - 1);
    }
}
```
### Python 

```python
class Solution:
    def wordsAbbreviation(self, words: List[str]) -> List[str]:
        n = len(words)
        result = ["" for _ in range(n)]
        prefix = [1] * n
        
        for i in range(n):
            result[i] = self.abbreviate(words[i], 1)
        
        for i in range(n):
            while True:
                duplicates = set()
                for j in range(i + 1, n):
                    if result[i] == result[j]:
                        duplicates.add(j)
                if not duplicates:
                    break
                
                duplicates.add(i)
                for idx in duplicates:
                    prefix[idx] += 1
                    result[idx] = self.abbreviate(words[idx], prefix[idx])
        
        return result
    
    def abbreviate(self, word: str, k: int) -> str:
        if k >= len(word) - 2:
            return word
        return word[:k] + str(len(word) - 1 - k) + word[-1]
```

### Complexity Analysis

- **Time Complexity:** $O(N!)$
  - $N$ is the number of distinct integers or elements in the problem context.
  - **Explanation:** The time complexity is factorial because it involves generating permutations of $N$ elements, which is $N!$.

- **Space Complexity:** $O(N)$
  - $N$ represents the space required for variables or data structures that scale linearly with $N$.
  - **Explanation:** The space complexity is linear because it typically involves storing variables or data structures proportional to $N$ in size.

---
id: ransome-note
title: Ransom Note
sidebar_label: 0383-Ransom Note
tags:
  - Leet code
description: "Solution to leetocde 383"
---

### Problem Description

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

### Examples

Example 1:

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

Example 2:

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

Example 3:

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

### Constraints:

- $1 <= ransomNote.length, magazine.length <= 10^5$
- ransomNote and magazine consist of lowercase English letters.
  Alright, here's the breakdown of the code you provided, along with implementations in various languages:

### Algorithm:

1. **Initialize a frequency table:** The code creates an array `alpha` of size 26. This array will store the frequency of each letter in the magazine (`a` maps to index 0, `b` to index 1, and so on).
2. **Iterate through ransom note:** For each character `c` in the ransom note:
   - Calculate the index `idx` using `ord(c) - ord('a')`. This converts the character `c` to its corresponding numerical position (e.g., 'a' becomes 0, 'b' becomes 1).
   - Use `magazine.find(c, alpha[idx])` to find the first occurrence of `c` in the magazine starting from index `alpha[idx]`. This improves efficiency by avoiding redundant searches in the magazine.
     - If `i` (the result of `find`) is -1, it means the character `c` is not found in the magazine. In this case, the function returns `False` as the ransom note cannot be formed.
   - Update `alpha[idx]` with `i + 1` to track the last position where `c` was found in the magazine. This helps avoid revisiting the same characters in the magazine unnecessarily.
3. **Return True:** After iterating through the entire ransom note, if no characters were missing, the function returns `True`, indicating that the ransom note can be constructed from the magazine.

**Code Implementations:**

**Python:**

```python
from collections import Counter

class Solution:
  def canConstruct(self, ransomNote: str, magazine: str) -> bool:
    magazine_counter = Counter(magazine)
    ransom_counter = Counter(ransomNote)
    for char, count in ransom_counter.items():
      if char not in magazine_counter or magazine_counter[char] < count:
        return False
    return True
```

**C++:**

```c++
#include <unordered_map>

class Solution {
public:
  bool canConstruct(std::string ransomNote, std::string magazine) {
    std::unordered_map<char, int> magazine_counter;
    for (char c : magazine) {
      magazine_counter[c]++;
    }
    for (char c : ransomNote) {
      if (magazine_counter.find(c) == magazine_counter.end() || magazine_counter[c] == 0) {
        return false;
      }
      magazine_counter[c]--;
    }
    return true;
  }
};
```

**Java:**

```java
import java.util.HashMap;

class Solution {
  public boolean canConstruct(String ransomNote, String magazine) {
    HashMap<Character, Integer> magazine_counter = new HashMap<>();
    for (char c : magazine.toCharArray()) {
      magazine_counter.put(c, magazine_counter.getOrDefault(c, 0) + 1);
    }
    for (char c : ransomNote.toCharArray()) {
      if (!magazine_counter.containsKey(c) || magazine_counter.get(c) == 0) {
        return false;
      }
      magazine_counter.put(c, magazine_counter.get(c) - 1);
    }
    return true;
  }
}
```

**JavaScript:**

```javascript
function canConstruct(ransomNote, magazine) {
  const magazine_counter = {};
  for (const char of magazine) {
    magazine_counter[char] = (magazine_counter[char] || 0) + 1;
  }
  for (const char of ransomNote) {
    if (!(char in magazine_counter) || magazine_counter[char] === 0) {
      return false;
    }
    magazine_counter[char]--;
  }
  return true;
}
```

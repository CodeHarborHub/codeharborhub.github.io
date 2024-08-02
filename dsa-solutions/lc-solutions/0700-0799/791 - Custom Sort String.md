---
id: custom-sort-string
title: Custom Sort String
sidebar_label: 791 - Custom Sort String
tags: [String, Sorting]
description: Given two strings, sort the second string based on the custom order defined by the first string.
---

## Problem Statement

### Problem Description

You are given two strings `order` and `s`. All the characters in `order` are unique and were sorted in some custom order previously.

Permute the characters of `s` so that they match the order in which characters appear in `order`. More specifically, if a character `x` occurs before a character `y` in `order`, then `x` should occur before `y` in the permuted string.

Return any permutation of `s` that satisfies this property.

### Example

**Example 1:**
```
Input: order = "cba", s = "abcd"
Output: "cbad"
```
**Explanation:** "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".


**Example 2:**
```
Input: order = "bcafg", s = "abcd"
Output: "bcad"
```
**Explanation:** The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.


### Constraints

- 1 <= `order.length` <= 26
- 1 <= `s.length` <= 200
- `order` and `s` consist of lowercase English letters.
- All the characters in `order` are unique.

## Solution

### Intuition

To solve this problem, we need to rearrange the characters of string `s` according to the custom order defined by the string `order`. The key steps involve:

1. **Counting Characters in `s`:** Use a frequency map (or dictionary) to count the occurrences of each character in `s`.
2. **Arranging Characters According to `order`:** Iterate over `order` and construct the result string by adding characters from `s` in the sequence specified by `order`.
3. **Adding Remaining Characters:** After processing `order`, append the remaining characters in `s` that are not present in `order`.

### Time and Space Complexity

- **Time Complexity:** The time complexity is $O(n + m)$, where $n$ is the length of `s` and $m$ is the length of `order`. This includes counting the frequency of characters in `s` and constructing the output string.

- **Space Complexity:** The space complexity is $O(n + m)$ due to storing the frequency map and the output string.

### Code

#### C++

```cpp
class Solution {
public:
    string customSortString(string order, string s) {
        unordered_map<char, int> count;
        for (char c : s) {
            count[c]++;
        }

        string result;
        for (char c : order) {
            if (count.count(c)) {
                result.append(count[c], c);
                count.erase(c);
            }
        }

        for (const auto& [c, freq] : count) {
            result.append(freq, c);
        }

        return result;
    }
};
```
#### Python
```python
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        count = {}
        for char in s:
            count[char] = count.get(char, 0) + 1
        
        result = []
        for char in order:
            if char in count:
                result.append(char * count[char])
                del count[char]
        
        for char, freq in count.items():
            result.append(char * freq)
        
        return ''.join(result)
```
#### Java
```java
class Solution {
    public String customSortString(String order, String s) {
        Map<Character, Integer> count = new HashMap<>();
        for (char c : s.toCharArray()) {
            count.put(c, count.getOrDefault(c, 0) + 1);
        }

        StringBuilder result = new StringBuilder();
        for (char c : order.toCharArray()) {
            if (count.containsKey(c)) {
                int freq = count.get(c);
                for (int i = 0; i < freq; i++) {
                    result.append(c);
                }
                count.remove(c);
            }
        }

        for (Map.Entry<Character, Integer> entry : count.entrySet()) {
            char c = entry.getKey();
            int freq = entry.getValue();
            for (int i = 0; i < freq; i++) {
                result.append(c);
            }
        }

        return result.toString();
    }
}
```
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.

---
id: sort-characters-by-frequency
title: Sort Characters By Frequency
sidebar_label: 0451-Sort-Characters-By-Frequency
tags:
- Hash Table
- String
- Sorting
- Heap (Priority Queue)
description: "Given a string `s`, sort it in decreasing order based on the frequency of characters, and return the sorted string."
---

## Problem

Given a string `s`, sort it in decreasing order based on the frequency of characters, and return the sorted string.

### Examples

**Example 1:**

**Input:** `s = "tree"`  
**Output:** `"eert"`  
**Explanation:** 'e' appears twice while 'r' and 't' both appear once. So 'e' must appear before 'r' and 't'. Therefore "eetr" is also a valid answer.

**Example 2:**

**Input:** `s = "cccaaa"`  
**Output:** `"cccaaa"`  
**Explanation:** Both 'c' and 'a' appear three times. So "aaaccc" is also a valid answer. Note that "cacaca" is incorrect, as same characters must be together.

**Example 3:**

**Input:** `s = "Aabb"`  
**Output:** `"bbAa"`  
**Explanation:** 'b' appears twice, 'A' and 'a' both appear once. Note that 'A' and 'a' are treated as two different characters.

### Constraints

- `1 <= s.length <= 5 * 10^5`
- `s` consists of uppercase and lowercase English letters and digits.

---

## Approach

To solve this problem, we can follow these steps:

1. **Count Frequencies:** Use a hash table (dictionary) to count the frequency of each character in the string.
2. **Sort Characters:** Create a list of characters sorted by their frequency in descending order.
3. **Build Result String:** Construct the result string by repeating characters based on their frequencies.

### Steps:

1. Create a hash table to store the frequency of each character.
2. Sort the characters based on their frequency in descending order.
3. Build the final string by appending each character multiplied by its frequency.

### Solution

#### Java Solution

```java
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> frequencyMap = new HashMap<>();
        for (char c : s.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }
        
        PriorityQueue<Character> maxHeap = new PriorityQueue<>((a, b) -> frequencyMap.get(b) - frequencyMap.get(a));
        maxHeap.addAll(frequencyMap.keySet());
        
        StringBuilder result = new StringBuilder();
        while (!maxHeap.isEmpty()) {
            char c = maxHeap.poll();
            int count = frequencyMap.get(c);
            for (int i = 0; i < count; i++) {
                result.append(c);
            }
        }
        
        return result.toString();
    }
}
```
### C++ Solution

```cpp 
#include <unordered_map>
#include <queue>
#include <string>

class Solution {
public:
    string frequencySort(string s) {
        unordered_map<char, int> frequencyMap;
        for (char c : s) {
            frequencyMap[c]++;
        }
        
        priority_queue<pair<int, char>> maxHeap;
        for (auto& [c, freq] : frequencyMap) {
            maxHeap.push({freq, c});
        }
        
        string result;
        while (!maxHeap.empty()) {
            auto [freq, c] = maxHeap.top();
            maxHeap.pop();
            result.append(freq, c);
        }
        
        return result;
    }
};
```

### Python Solution

```python
from collections import Counter
import heapq

class Solution:
    def frequencySort(self, s: str) -> str:
        frequency_map = Counter(s)
        max_heap = [(-freq, char) for char, freq in frequency_map.items()]
        heapq.heapify(max_heap)
        
        result = []
        while max_heap:
            freq, char = heapq.heappop(max_heap)
            result.append(char * -freq)
        
        return ''.join(result)
```
### Complexity Analysis
**Time Complexity:** O(n log n)
>Reason: Counting the frequency of each character takes O(n), and sorting the characters based on frequency takes O(n log n).

**Space Complexity:** O(n)
>Reason: The space needed for the frequency map, heap, and result string is proportional to the length of the input string.

### References
LeetCode Problem: Sort Characters By Frequency

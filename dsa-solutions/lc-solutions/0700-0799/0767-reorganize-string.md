---
id: reorganize-string
title: Reorganize String
sidebar_label: 0767-Reorganize String
tags:
  - Leet code
  - heapq
description: "Solution to leetocde 767"
---

## Problem Statement

Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same.

Return any possible rearrangement of `s` or return `""` if not possible.

### Example 1

```
**Input**: `s = "aab"`

**Output**: `"aba"`
```

### Example 2

```
**Input**: `s = "aaab"`

**Output**: `""`
```

### Constraints

- $(1 \leq \text{s.length} \leq 500)$
- `s` consists of lowercase English letters.

## Algorithm

1. **Counting Frequencies**: We count the frequency of each character using `Counter`.

2. **Max-Heap**: We store the frequency as a negative value because `heapq` in Python is a min-heap. By storing negative values, the character with the highest positive frequency will be at the root of the heap.

3. **Heap Operations**: We pop from the heap and append the character to the result. If the previous character still has a remaining count, we push it back into the heap.

4. **Final Check**: After constructing the result, we check if its length matches the input string. If not, it's impossible to rearrange the string as required.

### Code Implementation

### Solution in Python

```python
import heapq
from collections import Counter

class Solution:
    def reorganizeString(self, s: str) -> str:
        freq_map = Counter(s)

        # Max heap to store characters by frequency
        max_heap = [(-freq, char) for char, freq in freq_map.items()]
        heapq.heapify(max_heap)

        result = []
        prev_freq, prev_char = 0, ''

        while max_heap:
            freq, char = heapq.heappop(max_heap)
            result.append(char)

            # If the previous character frequency is > 0, push it back into the heap
            if prev_freq < 0:
                heapq.heappush(max_heap, (prev_freq, prev_char))

            # Decrease frequency and set the previous character to current
            prev_freq, prev_char = freq + 1, char

        result_str = ''.join(result)

        # If the reorganized string is of the same length as the input string, return it
        return result_str if len(result_str) == len(s) else ""
```

### C++ Solution

```cpp
#include <queue>
#include <unordered_map>
#include <string>

class Solution {
public:
    std::string reorganizeString(std::string s) {
        std::unordered_map<char, int> freqMap;
        for (char c : s) {
            freqMap[c]++;
        }

        std::priority_queue<std::pair<int, char>> maxHeap;
        for (auto& pair : freqMap) {
            maxHeap.push({pair.second, pair.first});
        }

        std::string result = "";
        std::pair<int, char> prev = {-1, '#'}; // To store the previous character

        while (!maxHeap.empty()) {
            auto current = maxHeap.top();
            maxHeap.pop();

            result += current.second;

            if (prev.first > 0) {
                maxHeap.push(prev);
            }

            current.first--;
            prev = current;
        }

        return result.size() == s.size() ? result : "";
    }
};
```

### Java Solution

```java
import java.util.PriorityQueue;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public String reorganizeString(String s) {
        Map<Character, Integer> freqMap = new HashMap<>();
        for (char c : s.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        }

        PriorityQueue<Map.Entry<Character, Integer>> maxHeap = new PriorityQueue<>(
                (a, b) -> b.getValue() - a.getValue());

        maxHeap.addAll(freqMap.entrySet());

        StringBuilder result = new StringBuilder();
        Map.Entry<Character, Integer> prev = null;

        while (!maxHeap.isEmpty()) {
            Map.Entry<Character, Integer> current = maxHeap.poll();
            result.append(current.getKey());

            if (prev != null && prev.getValue() > 0) {
                maxHeap.offer(prev);
            }

            current.setValue(current.getValue() - 1);
            prev = current;
        }

        return result.length() == s.length() ? result.toString() : "";
    }
}
```

### JavaScript Solution

```javascript
function reorganizeString(s) {
  const freqMap = {};
  for (const char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  const maxHeap = Object.entries(freqMap).map(([char, freq]) => [-freq, char]);
  maxHeap.sort((a, b) => a[0] - b[0]);

  let result = "";
  let prev = null;

  while (maxHeap.length > 0) {
    const [freq, char] = maxHeap.shift();
    result += char;

    if (prev && prev[0] < 0) {
      maxHeap.push(prev);
      maxHeap.sort((a, b) => a[0] - b[0]);
    }

    prev = [freq + 1, char];
  }

  return result.length === s.length ? result : "";
}
```

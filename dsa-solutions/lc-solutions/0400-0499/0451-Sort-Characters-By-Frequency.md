---
id: sort-characters-by-frequency
title: Sort Characters By Frequency (LeetCode)
sidebar_label: 0451-Sort Characters By Frequency
tags:
  - Hash Table
  - String
  - Sorting
  - Heap(Priority Queue)
  - Bucket Sort
  - Counting
description: Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
sidebar_position: 0451
---

## Problem Description

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Example 1

- **Input:** ` s = "tree" `
- **Output:** `"eert"`
- **Explanation:** 'e' appears twice while 'r' and 't' both appear once.So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

### Example 2

- **Input:** ` s = "cccaaa" `
- **Output:** `"aaaccc"`
- **Explanation:** Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.Note that "cacaca" is incorrect, as the same characters must be together.

### Example 3

- **Input:** ` s = "Aabb" `
- **Output:** `"bbAa"`
- **Explanation:** "bbaA" is also a valid answer, but "Aabb" is incorrect.Note that 'A' and 'a' are treated as two different characters.



### Constraints

- `1 <= s.length <= 5 * 105`
- `s consists of uppercase and lowercase English letters and digits.`

## Approach

  - 1. Count the occurrences: We need to go through the string and count the occurrences of each character. This can be done efficiently by using a hash table or a counter data structure where each character is a key, and its count is the value.
      
  - 2. Sort based on counts: Once we have the counts, the next step is to sort the characters by these counts in descending order. We want the characters with higher counts to come first.
      
  - 3. With these counts, we can construct a new string.



### Solution Code

#### C++

```c++
class Solution {
public:
    string frequencySort(string s) {
        unordered_map<char, int> frequencyMap;
        for (char ch : s) {
            ++frequencyMap[ch];
        }
        vector<char> uniqueChars;
        for (auto& keyValue : frequencyMap) {
            uniqueChars.push_back(keyValue.first);
        }
        sort(uniqueChars.begin(), uniqueChars.end(), [&](char a, char b) {
            return frequencyMap[a] > frequencyMap[b];
        });
        string result;
        for (char ch : uniqueChars) {
            result += string(frequencyMap[ch], ch);
        }
        return result;
    }
};

```

#### java
```java
class Solution {
    public String frequencySort(String s) {
        Map<Character, Integer> frequencyMap = new HashMap<>(52);
        for (int i = 0; i < s.length(); ++i) {
            frequencyMap.merge(s.charAt(i), 1, Integer::sum);
        }
        List<Character> characters = new ArrayList<>(frequencyMap.keySet());
        characters.sort((a, b) -> frequencyMap.get(b) - frequencyMap.get(a));
        StringBuilder sortedString = new StringBuilder();
        for (char c : characters) {
            for (int frequency = frequencyMap.get(c); frequency > 0; --frequency) {
                sortedString.append(c);
            }
        }
        return sortedString.toString();
    }
}

```

#### Python
```python
class Solution:
    def frequencySort(self, s: str) -> str:
        char_frequency = Counter(s)
        sorted_characters = sorted(char_frequency.items(), key=lambda item: -item[1])
        frequency_sorted_string = ''.join(character * frequency for character, frequency in sorted_characters)
        return frequency_sorted_string
```

#### Conclusion
The above solutions use two-pointers approach to reverse the string.
  - 1. Time complexity: O(n logn)
  - 2. Space complexity: O(n)

---
id: substring-with-concatenation-of-all-words
title: Substring with Concatenation of All Words (LeetCode)
sidebar_label: 0030-SubstringWithConcatenationOfAllWords
description: Find the starting indices of all substrings in the given string that are the concatenation of each word in a given list exactly once and without any intervening characters.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Substring with Concatenation of All Words](https://leetcode.com/problems/subtitle-with-concatenation-of-all-words/) | [Substring with Concatenation of All Words Solution on LeetCode](https://leetcode.com/problems/subtitle-with-concatenation-of-all-words/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a string `s` and an array of strings `words`. All the strings of `words` are of the same length.

Return all starting indices of substring(s) in `s` that are the concatenation of each word in `words` exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

**Example:**

#### Example 1

- **Input:** `s = "barfoothefoobarman"`, `words = ["foo","bar"]`
- **Output:** `[0, 9]`
- **Explanation:** Substrings starting at indices 0 and 9 are "barfoo" and "foobar" respectively. The output order does not matter, returning `[9, 0]` is fine too.

#### Example 2

- **Input:** `s = "wordgoodgoodgoodbestword"`, `words = ["word","good","best","word"]`
- **Output:** `[]`

#### Example 3

- **Input:** `s = "barfoofoobarthefoobarman"`, `words = ["bar","foo","the"]`
- **Output:** `[6,9,12]`

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists of lower-case English letters.
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `words[i]` consists of lower-case English letters.

### Approach

To solve this problem, we need to find all starting indices of substrings in `s` that are the concatenation of all words in `words`. Here’s a step-by-step approach:

1. **Initialization**:
   - Calculate the length of each word (`word_len`), the number of words (`num_words`), and the total length of the concatenated substring (`substring_len`).

2. **Sliding Window**:
   - Use a sliding window to check every possible starting index in `s`.
   - For each starting index, check if the substring from that index can be formed by concatenating all words exactly once.

3. **Hash Map**:
   - Use a hash map to store the frequency of each word in `words`.
   - For each window, use another hash map to count the frequency of words found in the current window.

4. **Validation**:
   - Validate if the frequency of words in the current window matches the frequency of words in the given list.

### Solution Code

#### Python

```python
class Solution:
    def findSubstring(self, s, words):
        if not s or not words:
            return []
        
        word_len = len(words[0])
        num_words = len(words)
        substring_len = word_len * num_words
        word_count = collections.Counter(words)
        
        result = []
        
        for i in range(word_len):
            left = i
            right = i
            current_count = collections.Counter()
            while right + word_len <= len(s):
                word = s[right:right + word_len]
                right += word_len
                if word in word_count:
                    current_count[word] += 1
                    while current_count[word] > word_count[word]:
                        current_count[s[left:left + word_len]] -= 1
                        left += word_len
                    if right - left == substring_len:
                        result.append(left)
                else:
                    current_count.clear()
                    left = right
        return result
```
#### Java
```java
import java.util.*;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.length() == 0 || words == null || words.length == 0)
            return result;
        
        int wordLen = words[0].length();
        int numWords = words.length;
        int substringLen = wordLen * numWords;
        
        Map<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        for (int i = 0; i < wordLen; i++) {
            int left = i, right = i;
            Map<String, Integer> currentCount = new HashMap<>();
            while (right + wordLen <= s.length()) {
                String word = s.substring(right, right + wordLen);
                right += wordLen;
                if (wordCount.containsKey(word)) {
                    currentCount.put(word, currentCount.getOrDefault(word, 0) + 1);
                    while (currentCount.get(word) > wordCount.get(word)) {
                        String leftWord = s.substring(left, left + wordLen);
                        currentCount.put(leftWord, currentCount.get(leftWord) - 1);
                        left += wordLen;
                    }
                    if (right - left == substringLen) {
                        result.add(left);
                    }
                } else {
                    currentCount.clear();
                    left = right;
                }
            }
        }
        
        return result;
    }
}
```

#### c++

```c++
#include <vector>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> result;
        if (s.empty() || words.empty())
            return result;
        
        int wordLen = words[0].size();
        int numWords = words.size();
        int substringLen = wordLen * numWords;
        
        unordered_map<string, int> wordCount;
        for (const string& word : words) {
            wordCount[word]++;
        }
        
        for (int i = 0; i < wordLen; ++i) {
            int left = i, right = i;
            unordered_map<string, int> currentCount;
            while (right + wordLen <= s.size()) {
                string word = s.substr(right, wordLen);
                right += wordLen;
                if (wordCount.find(word) != wordCount.end()) {
                    currentCount[word]++;
                    while (currentCount[word] > wordCount[word]) {
                        string leftWord = s.substr(left, wordLen);
                        currentCount[leftWord]--;
                        left += wordLen;
                    }
                    if (right - left == substringLen) {
                        result.push_back(left);
                    }
                } else {
                    currentCount.clear();
                    left = right;
                }
            }
        }
        
        return result;
    }
};
```

### Conclusion
The solution efficiently finds all starting indices of substrings in s that are the concatenation of all words in words using a sliding window approach and hash maps. This approach ensures that the integer division truncates toward zero as required, and handles edge cases and constraints effectively.
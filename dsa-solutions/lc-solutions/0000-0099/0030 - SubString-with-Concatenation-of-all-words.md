---
id: substring-with-concatenation-of-all-words
title: Substring with Concatenation of All Words
sidebar_label: 0030-Substring-with-Concatenation-of-All-Words
tags:
    - Hard
    - String
    - Hash Table
    - Two Pointers
description: A concatenated string is a string that exactly contains all the strings of any permutation of `words` concatenated.
---

## Problem Description
You are given a string `s` and an array of strings `words`. All the strings in `words` are of the same length.

### Examples

**Example 1:**

- **Input:** `s = "barfoothefoobarman"`, `words = ["foo","bar"]`
- **Output:** `[0,9]`

- **Explanation:**
- The substring starting at 0 is "barfoo". It is the concatenation of `["bar","foo"]` which is a permutation of `words`.
- The substring starting at 9 is "foobar". It is the concatenation of `["foo","bar"]` which is a permutation of `words`.

**Example 2:**

- **Input:** `s = "wordgoodgoodgoodbestword"`, `words = ["word","good","best","word"]`
- **Output:** `[]`

- **Explanation:**
- There is no concatenated substring.

**Example 3:**

- **Input:** `s = "barfoofoobarthefoobarman"`, `words = ["bar","foo","the"]`
- **Output:** `[6,9,12]`

- **Explanation:**
- The substring starting at 6 is "foobarthe". It is the concatenation of `["foo","bar","the"]`.
- The substring starting at 9 is "barthefoo". It is the concatenation of `["bar","the","foo"]`.
- The substring starting at 12 is "thefoobar". It is the concatenation of `["the","foo","bar"]`.

### Constraints
- $1 \leq \text{s.length} \leq 10^4$
- $1 \leq \text{words.length} \leq 5000$
- $1  \leq \text{words[i].length} \leq 30$
- s and words[i] consist of lowercase English letters.

## Approach
We will use a sliding window approach to solve this problem.
1. First, we calculate the length of each word in the `words` array and the total length of the concatenated substring.
2. We create a hashmap to store the count of each word in `words`.
3. We iterate over each possible starting index in the string `s` using a sliding window of size equal to the total length of the concatenated substring.
4. For each substring, we check if it can be formed by concatenating all the words in `words`.
5. To check the validity of each window, we use another hashmap to count occurrences of words in the current window and compare it to the word count map.
6. If the current window is valid, we add its starting index to the result list.

## Solution in Java
```java
import java.util.*;

public class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.length() == 0 || words == null || words.length == 0) {
            return result;
        }

        int wordLength = words[0].length();
        int wordCount = words.length;
        int totalLength = wordLength * wordCount;

        // Create a map to count the words
        Map<String, Integer> wordMap = new HashMap<>();
        for (String word : words) {
            wordMap.put(word, wordMap.getOrDefault(word, 0) + 1);
        }

        // Slide the window over the string `s`
        for (int i = 0; i <= s.length() - totalLength; i++) {
            String currentSubstring = s.substring(i, i + totalLength);
            if (isValid(currentSubstring, wordMap, wordLength, wordCount)) {
                result.add(i);
            }
        }

        return result;
    }

    private boolean isValid(String substring, Map<String, Integer> wordMap, int wordLength, int wordCount) {
        Map<String, Integer> seen = new HashMap<>();
        for (int j = 0; j < wordCount; j++) {
            int wordStartIndex = j * wordLength;
            String word = substring.substring(wordStartIndex, wordStartIndex + wordLength);
            if (!wordMap.containsKey(word)) {
                return false;
            }
            seen.put(word, seen.getOrDefault(word, 0) + 1);
            if (seen.get(word) > wordMap.get(word)) {
                return false;
            }
        }
        return true;
    }
}
```

### Solution in Python
```python
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        result = []
        if not s or not words:
            return result

        word_length = len(words[0])
        word_count = len(words)
        total_length = word_length * word_count

        word_map = {}
        for word in words:
            word_map[word] = word_map.get(word, 0) + 1

        for i in range(len(s) - total_length + 1):
            current_substring = s[i:i + total_length]
            if self.is_valid(current_substring, word_map, word_length, word_count):
                result.append(i)

        return result

    def is_valid(self, substring, word_map, word_length, word_count):
        seen = {}
        for j in range(word_count):
            word_start_index = j * word_length
            word = substring[word_start_index:word_start_index + word_length]
            if word not in word_map:
                return False
            seen[word] = seen.get(word, 0) + 1
            if seen[word] > word_map[word]:
                return False
        return True
```

### Solution in CPP
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> result;
        if (s.empty() || words.empty()) {
            return result;
        }

        int wordLength = words[0].length();
        int wordCount = words.size();
        int totalLength = wordLength * wordCount;

        unordered_map<string, int> wordMap;
        for (const string& word : words) {
            wordMap[word]++;
        }

        for (int i = 0; i <= s.length() - totalLength; i++) {
            string currentSubstring = s.substr(i, totalLength);
            if (isValid(currentSubstring, wordMap, wordLength, wordCount)) {
                result.push_back(i);
            }
        }

        return result;
    }

    bool isValid(string substring, unordered_map<string, int>& wordMap, int wordLength, int wordCount) {
        unordered_map<string, int> seen;
        for (int j = 0; j < wordCount; j++) {
            string word = substring.substr(j * wordLength, wordLength);
            if (wordMap.find(word) == wordMap.end()) {
                return false;
            }
            seen[word]++;
            if (seen[word] > wordMap[word]) {
                return false;
            }
        }
        return true;
    }
};

int main() {
    Solution solution;
    string s = "barfoothefoobarman";
    vector<string> words = {"foo", "bar"};
    vector<int> result = solution.findSubstring(s, words);
    for (int idx : result) {
        cout << idx << " ";
    }
    cout << endl;
    return 0;
}
```

### Solution in C
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORD_LENGTH 30

int isValid(char* substring, char** words, int* wordMap, int wordLength, int wordCount) {
    int seen[5000] = {0};
    for (int j = 0; j < wordCount; j++) {
        char* word = substring + j * wordLength;
        int index = -1;
        for (int k = 0; k < wordCount; k++) {
            if (strcmp(word, words[k]) == 0) {
                index = k;
                break;
            }
        }
        if (index == -1 || wordMap[index] == 0) {
            return 0;
        }
        seen[index]++;
        if (seen[index] > wordMap[index]) {
            return 0;
        }
    }
    return 1;
}

int* findSubstring(char* s, char** words, int wordsSize, int* returnSize) {
    *returnSize = 0;
    if (!s || !words || wordsSize == 0) {
        return NULL;
    }

    int wordLength = strlen(words[0]);
    int wordCount = wordsSize;
    int totalLength = wordLength * wordCount;

    int* result = (int*)malloc(sizeof(int) * 5000);
    if (!result) {
        return NULL;
    }

    int wordMap[5000] = {0};
    for (int i = 0; i < wordCount; i++) {
        int found = 0;
        for (int j = 0; j < i; j++) {
            if (strcmp(words[i], words[j]) == 0) {
                found = 1;
                wordMap[j]++;
                break;
            }
        }
        if (!found) {
            wordMap[i]++;
        }
    }

    for (int i = 0; i <= strlen(s) - totalLength; i++) {
        char currentSubstring[totalLength + 1];
        strncpy(currentSubstring, s + i, totalLength);
        currentSubstring[totalLength] = '\0';
        if (isValid(currentSubstring, words, wordMap, wordLength, wordCount)) {
            result[(*returnSize)++] = i;
        }
    }

    return result;
}

int main() {
    char* s = "barfoothefoobarman";
    char* words[2] = {"foo", "bar"};
    int wordsSize = 2;
    int returnSize;
    int* result = findSubstring(s, words, wordsSize, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");
    free(result);
    return 0;
}
```

### Solution in JavaScript
```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    if (!s || !words || words.length === 0) {
        return result;
    }

    const wordLength = words[0].length;
    const wordCount = words.length;
    const totalLength = wordLength * wordCount;

    const wordMap = {};
    words.forEach(word => {
        if (wordMap[word]) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    });

    for (let i = 0; i <= s.length - totalLength; i++) {
        const currentSubstring = s.substring(i, i + totalLength);
        if (isValid(currentSubstring, wordMap, wordLength, wordCount)) {
            result.push(i);
        }
    }

    return result;
};

function isValid(substring, wordMap, wordLength, wordCount) {
    const seen = {};
    for (let j = 0; j < wordCount; j++) {
        const word = substring.substr(j * wordLength, wordLength);
        if (!wordMap[word]) {
            return false;
        }
        if (!seen[word]) {
            seen[word] = 1;
        } else {
            seen[word]++;
        }
        if (seen[word] > wordMap[word]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const s = "barfoothefoobarman";
const words = ["foo", "bar"];
console.log(findSubstring(s, words)); // Output: [0, 9]
```

### Step by Step Algorithm
1. Initialize an empty list `result` to store the starting indices of all the concatenated substrings.
2. Check for base cases: if `s` or `words` is empty, return the empty list `result`.
3. Calculate the length of each word in the `words` array and the total length of the concatenated substring.
4. Create a hashmap `word_map` to store the count of each word in `words`.
5. Iterate over each possible starting index in the string `s` using a sliding window of size equal to the total length of the concatenated substring.
6. For each substring, check if it can be formed by concatenating all the words in `words`.
7. To check the validity of each window, use another hashmap `seen` to count occurrences of words in the current window and compare it to the `word_map`.
8. If the current window is valid, add its starting index to the `result` list.
9. Return the `result` list.

### Conclusion
This problem can be efficiently solved using a sliding window approach. By using a hashmap to store the count of words and iterating over each possible starting index in the string `s`, we can find all the concatenated substrings in `s` that are formed by concatenating all the strings of any permutation of `words`. The time complexity of this solution is O(NML), where N is the length of the string `s`, M is the number of words, and L is the length of each word.
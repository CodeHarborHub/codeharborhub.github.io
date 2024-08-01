---
id: most-common-word
title: Most Common Word
sidebar_label: 0819-Most-Common-Word
tags:
  - Strings
  - Hashing
  - C++
  - Java
  - Python
description: "This document provides a solution to the Most Common Word problem, where we need to find the most frequent word in a paragraph that is not in a list of banned words."
---

## Problem

Given a string `paragraph` and a string array of the `banned` words, return the most frequent word that is not banned. It is guaranteed there is at least one word that isn't banned, and the answer is unique.

### Examples

**Example 1:**

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.

**Example 2:**

Input: paragraph = "a.", banned = []
Output: "a"

### Constraints

- `1 <= paragraph.length <= 1000`
- The `paragraph` consists of English letters, space, or the punctuation symbols: "!?',;.".
- There are no two consecutive punctuation characters in `paragraph`.
- `1 <= banned.length <= 100`
- `1 <= banned[i].length <= 10`
- The `banned[i]` consists of only lowercase English letters.

### Approach

To solve this problem, we need to:

1. Clean and split the paragraph into words.
2. Store the banned words in a set for quick lookup.
3. Use a dictionary to count the occurrences of each non-banned word.
4. Identify the word with the highest count.

Detailed steps:

1. Convert all letters in the paragraph to lowercase.
2. Replace punctuation with spaces to facilitate splitting into words.
3. Split the cleaned paragraph into words.
4. Count the occurrences of each word that is not in the banned list.
5. Return the word with the highest frequency.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <sstream>
#include <unordered_set>
#include <unordered_map>
#include <vector>
#include <cctype>

using namespace std;

string mostCommonWord(string paragraph, vector<string>& banned) {
    unordered_set<string> banned_set(banned.begin(), banned.end());
    unordered_map<string, int> word_count;
    string word;
    int max_count = 0;
    string result;

    for (char& c : paragraph) {
        c = isalnum(c) ? tolower(c) : ' ';
    }

    istringstream iss(paragraph);
    while (iss >> word) {
        if (banned_set.find(word) == banned_set.end()) {
            word_count[word]++;
            if (word_count[word] > max_count) {
                max_count = word_count[word];
                result = word;
            }
        }
    }

    return result;
}

int main() {
    string paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
    vector<string> banned = {"hit"};
    cout << mostCommonWord(paragraph, banned) << endl;  // Output: "ball"
}
```

### Java Solution

```java
import java.util.*;

public class MostCommonWord {
    public String mostCommonWord(String paragraph, String[] banned) {
        Set<String> bannedSet = new HashSet<>(Arrays.asList(banned));
        Map<String, Integer> wordCount = new HashMap<>();
        String[] words = paragraph.toLowerCase().split("\\W+");
        int maxCount = 0;
        String result = "";

        for (String word : words) {
            if (!bannedSet.contains(word)) {
                wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                if (wordCount.get(word) > maxCount) {
                    maxCount = wordCount.get(word);
                    result = word;
                }
            }
        }

        return result;
    }

    public static void main(String[] args) {
        MostCommonWord solution = new MostCommonWord();
        String paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
        String[] banned = {"hit"};
        System.out.println(solution.mostCommonWord(paragraph, banned));  // Output: "ball"
    }
}
```

### Python Solution

```python
import re
from collections import defaultdict

def mostCommonWord(paragraph, banned):
    banned_set = set(banned)
    word_count = defaultdict(int)

    # Normalize the paragraph
    normalized_str = re.sub(r'[^\w\s]', ' ', paragraph).lower()

    # Split the paragraph into words
    words = normalized_str.split()

    # Count the occurrences of each word
    max_count = 0
    result = ""
    for word in words:
        if word not in banned_set:
            word_count[word] += 1
            if word_count[word] > max_count:
                max_count = word_count[word]
                result = word

    return result

# Test
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
print(mostCommonWord(paragraph, banned))  # Output: "ball"
```

### Complexity Analysis

**Time Complexity:** O(n)

> Reason: We traverse the paragraph and words array, each operation inside the loop takes constant time.

**Space Complexity:** O(n)

> Reason: We use extra space for the set of banned words and the dictionary to count word occurrences.

This solution efficiently finds the most common word in a paragraph that is not banned by using a set for quick lookup and a dictionary for counting occurrences. The time complexity is linear, and the space complexity is linear as well, making it suitable for large input sizes.

### References

**LeetCode Problem:** Most Common Word

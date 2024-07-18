---
id:  Find Resultant Array After Removing Anagrams
title:  Find Resultant Array After Removing Anagrams
sidebar_label: 2273-Find Resultant Array After Removing Anagrams
tags:
  - Strings
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that `0 < i < words.length` and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

 

### Examples

**Example 1:**

Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","baba","cd","cd"].
- Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
  Now words = ["abba","cd","cd"].
- Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
  Now words = ["abba","cd"].
We can no longer perform any operations, so ["abba","cd"] is the final answer.

**Example 2:**

Input: words = ["a","b","c","d","e"]
Output: ["a","b","c","d","e"]
Explanation:
No two adjacent strings in words are anagrams of each other, so no operations are performed.
 


### Constraints

- `1 <= words.length <= 100`
-` 1 <= words[i].length <= 10`
- `words[i] consists of lowercase English letters.`

### Approach

A concise approach involves:

- Iterating through the list.
- Using a helper function to check if two words are anagrams.
- Removing the word if it is an anagram of the previous word.
- Repeating the process until no more deletions can be made.
### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

bool isAnagram(const std::string &word1, const std::string &word2) {
    std::string sorted1 = word1;
    std::string sorted2 = word2;
    std::sort(sorted1.begin(), sorted1.end());
    std::sort(sorted2.begin(), sorted2.end());
    return sorted1 == sorted2;
}

std::vector<std::string> removeAnagrams(std::vector<std::string> words) {
    int i = 1;
    while (i < words.size()) {
        if (isAnagram(words[i], words[i - 1])) {
            words.erase(words.begin() + i);
        } else {
            i++;
        }
    }
    return words;
}

int main() {
    std::vector<std::string> words1 = {"abba", "baba", "bbaa", "cd", "cd"};
    std::vector<std::string> words2 = {"a", "b", "c", "d", "e"};

    auto result1 = removeAnagrams(words1);
    auto result2 = removeAnagrams(words2);

    for (const auto &word : result1) {
        std::cout << word << " ";
    }
    std::cout << std::endl;

    for (const auto &word : result2) {
        std::cout << word << " ";
    }
    std::cout << std::endl;

    return 0;
}



```

### Java Solution

```java
import java.util.*;

public class RemoveAnagrams {
    public static List<String> removeAnagrams(List<String> words) {
        int i = 1;
        while (i < words.size()) {
            if (isAnagram(words.get(i), words.get(i - 1))) {
                words.remove(i);
            } else {
                i++;
            }
        }
        return words;
    }

    private static boolean isAnagram(String word1, String word2) {
        char[] arr1 = word1.toCharArray();
        char[] arr2 = word2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        return Arrays.equals(arr1, arr2);
    }

    public static void main(String[] args) {
        List<String> words1 = new ArrayList<>(Arrays.asList("abba", "baba", "bbaa", "cd", "cd"));
        List<String> words2 = new ArrayList<>(Arrays.asList("a", "b", "c", "d", "e"));

        System.out.println(removeAnagrams(words1));  // Output: [abba, cd]
        System.out.println(removeAnagrams(words2));  // Output: [a, b, c, d, e]
    }
}

```

### Python Solution

```python
def removeAnagrams(words):
    def is_anagram(word1, word2):
        return sorted(word1) == sorted(word2)
    
    i = 1
    while i < len(words):
        if is_anagram(words[i], words[i - 1]):
            words.pop(i)
        else:
            i += 1
    return words

# Example usage
words1 = ["abba", "baba", "bbaa", "cd", "cd"]
words2 = ["a", "b", "c", "d", "e"]

print(removeAnagrams(words1))  # Output: ["abba", "cd"]
print(removeAnagrams(words2))  # Output: ["a", "b", "c", "d", "e"]



```

### Complexity Analysis

### Time Complexity: $O(n*(l*logl))$

> **Reason**:for checking for anagramsand iterating through the list of words.Here,n is the number of words in the list, and l is the average length of the words.

### Space Complexity: $O(n*l)$

> **Reason**: This accounts for storing the list of words and the temporary space used during sorting.


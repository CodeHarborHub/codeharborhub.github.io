---
id: palindrome-pairs
title: Palindrome Pairs Solution
sidebar_label: 0102 Palindrome Pairs
tags:
  - String
  - Trie
  - Hash Table
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Palindrome Pairs problem on LeetCode."
---

## Problem Description

Given a list of unique words, find all pairs of distinct indices (i, j) in the list such that the concatenation of `words[i] + words[j]` forms a palindrome.

### Examples

**Example 1:**

```
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
```

**Example 2:**

```
Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]
```

### Constraints

- $1 <= words.length <= 5000$
- $0 <= words[i].length <= 300$
- words[i] consists of lowercase English letters.

---

## Solution for Palindrome Pairs Problem

### Intuition And Approach

To efficiently find all palindrome pairs in the list of words, we can leverage a HashMap (or Trie for optimization) to store the reverse of each word along with its index. Then, for each word, we check its substrings to find potential pairs that form palindromes.

#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    import java.util.*;

    class Solution {
    public List<List<Integer>> palindromePairs(String[] words) {
        Map<String, Integer> wordMap = new HashMap<>();
        List<List<Integer>> result = new ArrayList<>();
        
        // Build the word map
        for (int i = 0; i < words.length; i++) {
            wordMap.put(words[i], i);
        }
        
        // Iterate through each word
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            int n = word.length();
            
            // Check each possible split of the word into left and right parts
            for (int j = 0; j <= n; j++) {
                String left = word.substring(0, j);
                String right = word.substring(j);
                String revLeft = new StringBuilder(left).reverse().toString();
                String revRight = new StringBuilder(right).reverse().toString();
                
                // Check if left + right forms a palindrome
                if (isPalindrome(left) && wordMap.containsKey(revRight) && wordMap.get(revRight) != i) {
                    result.add(Arrays.asList(wordMap.get(revRight), i));
                }
                
                // Check if right + left forms a palindrome (to avoid duplicates)
                if (j < n && isPalindrome(right) && wordMap.containsKey(revLeft) && wordMap.get(revLeft) != i) {
                    result.add(Arrays.asList(i, wordMap.get(revLeft)));
                }
            }
        }
        
        return result;
    }
    
    private boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    }

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python
    
    from collections import defaultdict

    class Solution:
    def palindromePairs(self, words):
        def is_palindrome(word):
            return word == word[::-1]
        
        word_map = {word: i for i, word in enumerate(words)}
        result = []
        
        for i, word in enumerate(words):
            n = len(word)
            for j in range(n + 1):
                left, right = word[:j], word[j:]
                rev_left, rev_right = left[::-1], right[::-1]
                
                if is_palindrome(left) and rev_right in word_map and word_map[rev_right] != i:
                    result.append([word_map[rev_right], i])
                
                if j < n and is_palindrome(right) and rev_left in word_map and word_map[rev_left] != i:
                    result.append([i, word_map[rev_left]])
        
        return result

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
    
     #include <vector>
    #include <unordered_map>
    #include <string>
     #include <algorithm>

    using namespace std;

    class Solution {
    public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        unordered_map<string, int> wordMap;
        vector<vector<int>> result;
        
        // Build the word map
        for (int i = 0; i < words.size(); ++i) {
            wordMap[words[i]] = i;
        }
        
        // Iterate through each word
        for (int i = 0; i < words.size(); ++i) {
            const string& word = words[i];
            int n = word.size();
            
            // Check each possible split of the word into left and right parts
            for (int j = 0; j <= n; ++j) {
                string left = word.substr(0, j);
                string right = word.substr(j);
                string revLeft = left;
                string revRight = right;
                reverse(revLeft.begin(), revLeft.end());
                reverse(revRight.begin(), revRight.end());
                
                // Check if left + right forms a palindrome
                if (isPalindrome(left) && wordMap.find(revRight) != wordMap.end() && wordMap[revRight] != i) {
                    result.push_back({wordMap[revRight], i});
                }
                
                // Check if right + left forms a palindrome (to avoid duplicates)
                if (j < n && isPalindrome(right) && wordMap.find(revLeft) != wordMap.end() && wordMap[revLeft] != i) {
                    result.push_back({i, wordMap[revLeft]});
                }
            }
        }
        
        return result;
    }
    
    bool isPalindrome(const string& s) {
        int left = 0, right = s.size() - 1;
        while (left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }
    };

    ```

  </TabItem>
</Tabs>


## References

- **LeetCode Problem:** [Palindrome Pairs Problem](https://leetcode.com/problems/palindrome-pairs/)
- **Solution Link:** [Palindrome Pairs Solution on LeetCode](https://leetcode.com/problems/palindrome-pairs/solutions/5016750/palindrome-pairs/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

---

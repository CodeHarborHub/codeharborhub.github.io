---
id: shortest-word-distance
title: Shortest Word Distance Solution
sidebar_label: 0243 Shortest Word Distance
tags:
  - Array
  - Two Pointers
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Shortest Word Distance problem on LeetCode."
---

## Problem Description

Given a list of words `words` and two words `word1` and `word2`, return the shortest distance between these two words in the list.

### Examples

**Example 1:**
```
Input: words = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
```

### Constraints

- You may assume that `words` contains at least two words.
- All the words in `words` are guaranteed to be unique.
- `word1` and `word2` are two distinct words in the list.

## Solution for Shortest Word Distance Problem

### Approach

To find the shortest distance between two words `word1` and `word2` in a list of words `words`, we can use the following approach:

1. **Two Pointers**: Use two pointers to track the most recent indices of `word1` and `word2` as we iterate through the list.
2. **Update Distance**: For each occurrence of `word1` or `word2`, update the minimum distance found so far if possible.

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class Solution:
        def shortestDistance(self, words: List[str], word1: str, word2: str) -> int:
            index1 = -1
            index2 = -1
            min_distance = float('inf')

            for i in range(len(words)):
                if words[i] == word1:
                    index1 = i
                elif words[i] == word2:
                    index2 = i

                if index1 != -1 and index2 != -1:
                    min_distance = min(min_distance, abs(index1 - index2))

            return min_distance
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    import java.util.*;

    class Solution {
        public int shortestDistance(String[] words, String word1, String word2) {
            int index1 = -1;
            int index2 = -1;
            int minDistance = Integer.MAX_VALUE;

            for (int i = 0; i < words.length; i++) {
                if (words[i].equals(word1)) {
                    index1 = i;
                } else if (words[i].equals(word2)) {
                    index2 = i;
                }

                if (index1 != -1 && index2 != -1) {
                    minDistance = Math.min(minDistance, Math.abs(index1 - index2));
                }
            }

            return minDistance;
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   
    #include <vector>
    #include <string>
    #include <algorithm>
    #include <climits>
    using namespace std;

    class Solution {
    public:
        int shortestDistance(vector<string>& words, string word1, string word2) {
            int index1 = -1;
            int index2 = -1;
            int minDistance = INT_MAX;

            for (int i = 0; i < words.size(); i++) {
                if (words[i] == word1) {
                    index1 = i;
                } else if (words[i] == word2) {
                    index2 = i;
                }

                if (index1 != -1 && index2 != -1) {
                    minDistance = min(minDistance, abs(index1 - index2));
                }
            }

            return minDistance;
        }
    };
    ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time complexity**: O(n), where n is the number of elements in the `words` array. We iterate through the array once.
- **Space complexity**: O(1) in additional space, as we use only a few extra variables regardless of the input size.

## References

- **LeetCode Problem:** [Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance/)
- **Solution Link:** [Shortest Word Distance Solution on LeetCode](https://leetcode.com/problems/shortest-word-distance/solution/)
- **Author's GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)



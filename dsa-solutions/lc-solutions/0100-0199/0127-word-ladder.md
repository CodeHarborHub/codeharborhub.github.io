---
id: word-ladder
title: Word ladder solution
sidebar_label: 0127 Word ladder
tags:
  - String
  - BFS (Breadth-First Search)
  - Backtracking
  - Graph
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the word ladder problem on LeetCode."
---

## Problem Description

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord $-> s1 -> s2 -> ... ->$ such that:

Every adjacent pair of words differs by a single letter.
Every si for $1 <= i <= k$ is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

### Examples

**Example 1:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

**Example 2:**

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```


### Constraints

- $1 <= beginWord.length <= 10$
- $endWord.length == beginWord.length$
- $1 <= wordList.length <= 5000$
- $wordList[i].length == beginWord.length$
- beginWord, endWord, and $wordList[i]$ consist of lowercase English letters.
- $beginWord != endWord$
- All the words in wordList are unique.

## Solution for Word Ladder II Problem

<Tabs>
  <TabItem value="Python" label="Python">
  
### Approach :

#### Intuition

We can think of this problem as a graph problem, where each word in the wordList is a node, and there is an edge between two words if they differ by only one character. Our goal is to find the shortest transformation sequence from the beginWord to the endWord.

To solve this problem, we can use a breadth-first search (BFS) approach. We start from the beginWord and explore all its neighboring words (words that differ by only one character). We then explore the neighbors of these neighbors, and so on, until we find the endWord.

During the BFS traversal, we maintain a queue to keep track of the words we need to visit next, and a set to keep track of the words we have already visited. We also keep track of the level of the BFS traversal, which represents the length of the transformation sequence.

Whenever we encounter the endWord during the BFS traversal, we return its level, which represents the length of the shortest transformation sequence. If we are unable to reach the endWord, we return 0.

Overall, the BFS approach allows us to efficiently explore all possible transformation sequences and find the shortest one.


#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python3
    from collections import deque

class Solution:
    def ladderLength(self, beginWord, endWord, wordList):
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        
        queue = deque([(beginWord, 1)])
        
        while queue:
            word, level = queue.popleft()
            if word == endWord:
                return level
            
            for i in range(len(word)):
                for char in 'abcdefghijklmnopqrstuvwxyz':
                    next_word = word[:i] + char + word[i+1:]
                    if next_word in wordSet:
                        queue.append((next_word, level + 1))
                        wordSet.remove(next_word)
        
        return 0


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    import java.util.*;

class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> words = new HashSet<>(wordList);
        if (!words.contains(endWord)) return 0;

        Queue<String> queue = new LinkedList<>();
        queue.add(beginWord);
        int level = 1;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] arr = word.toCharArray();
                for (int j = 0; j < arr.length; j++) {
                    char original = arr[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        arr[j] = c;
                        String newWord = new String(arr);
                        if (newWord.equals(endWord)) return level + 1;
                        if (words.contains(newWord)) {
                            queue.add(newWord);
                            words.remove(newWord);
                        }
                    }
                    arr[j] = original;
                }
            }
            level++;
        }

        return 0;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
    #include <vector>
#include <string>
#include <unordered_set>
#include <queue>
#include <utility>

using namespace std;

class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> words(wordList.begin(), wordList.end());
        if (words.find(endWord) == words.end()) return 0;

        queue<pair<string, int>> q;
        q.push({beginWord, 1});

        while (!q.empty()) {
            auto [word, level] = q.front();
            q.pop();

            if (word == endWord) return level;

            for (int i = 0; i < word.size(); ++i) {
                char original = word[i];
                for (char c = 'a'; c <= 'z'; ++c) {
                    if (c == original) continue;
                    word[i] = c;
                    if (words.find(word) != words.end()) {
                        q.push({word, level + 1});
                        words.erase(word);
                    }
                }
                word[i] = original;
            }
        }

        return 0;
    }
};

    ```

  </TabItem>
</Tabs>


</TabItem>

</Tabs>

## References

- **LeetCode Problem**: [Word Ladder II](https://leetcode.com/problems/word-ladder/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/word-ladder/solution/)

- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

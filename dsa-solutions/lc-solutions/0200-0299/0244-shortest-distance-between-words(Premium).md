---
id: shortest-distance-between-words
title: Shortest Distance Between Words
sidebar_label: Shortest Distance Between Words
tags: [Hash Map, Two Pointers]
description: Solution to finding the shortest distance between two words in an array of strings.
sidebar_position: 1
---

## Problem Statement 

### Problem Description

Design a data structure that can compute the shortest distance between any two distinct strings within an array of strings. Initialize the data structure with an array of strings, `wordsDict`. Once initialized, it should return the smallest possible index difference between two different strings in `wordsDict` when queried.

### Examples

**Example 1:**

```
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
Query: word1 = "coding", word2 = "practice"
Output: 3
```

**Example 2:**

```
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
Query: word1 = "makes", word2 = "coding"
Output: 1
```

### Constraints

- The number of words in `wordsDict` is in the range [1, 10^5].
- `wordsDict[i]` consists of lowercase English letters.
- `word1` and `word2` are distinct and will always be in `wordsDict`.

## Solution of Given Problem

### Intuition and Approach

To efficiently find the shortest distance between two words in the dictionary, a preprocessing step is required during initialization. We traverse the `wordsDict` array once and create a hash map where keys are the distinct words from the array, and values are lists of indices where each key word is located in the original array. This preprocessing step allows for a quick lookup of the positions of any word, facilitating the computation of the distances between any two words.

Once the positions are mapped, to find the shortest distance between `word1` and `word2`, we get their list of indices from our hash map. We need to find the minimum difference between any two indices from these lists. The lists are already sorted because the indices were appended in the order they were encountered during initialization.

A two-pointer approach efficiently solves the problem of finding the minimum difference. Start with the first index of each list, and at each step, move the pointer that points to the smaller index to the next index in its list. This approach will traverse the two lists simultaneously and will always give the smallest possible difference in indices (thus the shortest distance) between `word1` and `word2`. The process repeats until we have fully traversed one of the lists, ensuring that no potential shorter distance is missed.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@pallasivasai"/>
   ```javascript
    class WordDistance {
        constructor(wordsDict) {
            this.word_positions = {};
            for (let index = 0; index < wordsDict.length; index++) {
                const word = wordsDict[index];
                if (!this.word_positions[word]) {
                    this.word_positions[word] = [];
                }
                this.word_positions[word].push(index);
            }
        }

        shortest(word1, word2) {
            const positions1 = this.word_positions[word1];
            const positions2 = this.word_positions[word2];
            let i = 0, j = 0, min_distance = Infinity;
            
            while (i < positions1.length && j < positions2.length) {
                const index1 = positions1[i], index2 = positions2[j];
                min_distance = Math.min(min_distance, Math.abs(index1 - index2));
                if (index1 < index2) {
                    i++;
                } else {
                    j++;
                }
            }
            
            return min_distance;
        }
    }

    // Example Usage
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const wordDistance = new WordDistance(wordsDict);
    console.log(wordDistance.shortest("coding", "practice")); // Output: 3
    console.log(wordDistance.shortest("makes", "coding")); // Output: 1
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@pallasivasai"/> 
   ```typescript
    class WordDistance {
        private word_positions: { [key: string]: number[] } = {};

        constructor(wordsDict: string[]) {
            for (let index = 0; index < wordsDict.length; index++) {
                const word = wordsDict[index];
                if (!this.word_positions[word]) {
                    this.word_positions[word] = [];
                }
                this.word_positions[word].push(index);
            }
        }

        shortest(word1: string, word2: string): number {
            const positions1 = this.word_positions[word1];
            const positions2 = this.word_positions[word2];
            let i = 0, j = 0, min_distance = Infinity;
            
            while (i < positions1.length && j < positions2.length) {
                const index1 = positions1[i], index2 = positions2[j];
                min_distance = Math.min(min_distance, Math.abs(index1 - index2));
                if (index1 < index2) {
                    i++;
                } else {
                    j++;
                }
            }
            
            return min_distance;
        }
    }

    // Example Usage
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const wordDistance = new WordDistance(wordsDict);
    console.log(wordDistance.shortest("coding", "practice")); // Output: 3
    console.log(wordDistance.shortest("makes", "coding")); // Output: 1
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@pallasivasai"/>
   ```python
    class WordDistance:
        def __init__(self, wordsDict: list[str]):
            self.word_positions = {}
            for index, word in enumerate(wordsDict):
                if word not in self.word_positions:
                    self.word_positions[word] = []
                self.word_positions[word].append(index)

        def shortest(self, word1: str, word2: str) -> int:
            positions1 = self.word_positions[word1]
            positions2 = self.word_positions[word2]
            i, j = 0, 0
            min_distance = float('inf')
            
            while i < len(positions1) and j < len(positions2):
                index1, index2 = positions1[i], positions2[j]
                min_distance = min(min_distance, abs(index1 - index2))
                if index1 < index2:
                    i += 1
                else:
                    j += 1
            
            return min_distance

    # Example Usage
    wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
    word_distance = WordDistance(wordsDict)
    print(word_distance.shortest("coding", "practice"))  # Output: 3
    print(word_distance.shortest("makes", "coding"))  # Output: 1
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@pallasivasai"/>
   ```java
    import java.util.*;

    class WordDistance {
        private Map<String, List<Integer>> wordPositions;

        public WordDistance(String[] wordsDict) {
            wordPositions = new HashMap<>();
            for (int index = 0; index < wordsDict.length; index++) {
                String word = wordsDict[index];
                if (!wordPositions.containsKey(word)) {
                    wordPositions.put(word, new ArrayList<>());
                }
                wordPositions.get(word).add(index);
            }
        }

        public int shortest(String word1, String word2) {
            List<Integer> positions1 = wordPositions.get(word1);
            List<Integer> positions2 = wordPositions.get(word2);
            int i = 0, j = 0, minDistance = Integer.MAX_VALUE;
            
            while (i < positions1.size() && j < positions2.size()) {
                int index1 = positions1.get(i), index2 = positions2.get(j);
                minDistance = Math.min(minDistance, Math.abs(index1 - index2));
                if (index1 < index2) {
                    i++;
                } else {
                    j++;
                }
            }
            
            return minDistance;
        }

        public static void main(String[] args) {
            String[] wordsDict = {"practice", "makes", "perfect", "coding", "makes"};
            WordDistance wordDistance = new WordDistance(wordsDict);
            System.out.println(wordDistance.shortest("coding", "practice")); // Output: 3
            System.out.println(wordDistance.shortest("makes", "coding")); // Output: 1
        }
    }
    ```
  </TabItem>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@pallasivasai"/>
   ```cpp
    #include <iostream>
    #include <vector>
    #include <unordered_map>
    #include <algorithm>
    #include <cmath>
    using namespace std;

    class WordDistance {
        unordered_map<string, vector<int>> wordPositions;
        
    public:
        WordDistance(vector<string>& wordsDict) {
            for (int index = 0; index < wordsDict.size(); ++index) {
                wordPositions[wordsDict[index]].push_back(index);
            }
        }

        int shortest(string word1, string word2) {
            vector<int>& positions1 = wordPositions[word1];
            vector<int>& positions2 = wordPositions[word2];
            int i = 0, j = 
---
id: shortest-distance-between-words-II
title: Shortest Distance Between Words
sidebar_label: 0244-Shortest Distance Between Words - II
tags: [Hash Map, Two Pointers]
description: Solution to finding the shortest distance between two words in an array of strings.
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
  <SolutionAuthor name="@sivaprasath2004"/>
   ```cpp
    #include <iostream>
    #include <vector>
    #include <unordered_map>
    #include <string>
    #include <climits>
    #include <algorithm>

    class WordDistance {
    public:
        WordDistance(std::vector<std::string>& wordsDict) {
            for (int i = 0; i < wordsDict.size(); ++i) {
                word_positions[wordsDict[i]].push_back(i);
            }
        }

        int shortest(const std::string& word1, const std::string& word2) {
            const std::vector<int>& positions1 = word_positions[word1];
            const std::vector<int>& positions2 = word_positions[word2];
            int i = 0, j = 0;
            int min_distance = INT_MAX;

            while (i < positions1.size() && j < positions2.size()) {
                min_distance = std::min(min_distance, std::abs(positions1[i] - positions2[j]));
                if (positions1[i] < positions2[j]) {
                    ++i;
                } else {
                    ++j;
                }
            }

            return min_distance;
        }

    private:
        std::unordered_map<std::string, std::vector<int>> word_positions;
    };

    int main() {
        std::vector<std::string> wordsDict = {"practice", "makes", "perfect", "coding", "makes"};
        WordDistance wordDistance(wordsDict);
        
        std::cout << wordDistance.shortest("coding", "practice") << std::endl;  // Output: 3
        std::cout << wordDistance.shortest("makes", "coding") << std::endl;     // Output: 1

        return 0;
    }
    ```
  </TabItem>
</Tabs>
 

### Explanation

<Tabs>  
<TabItem value="JavaScript" label="javascript">

1. **Initialization (Constructor)**:
   - We iterate through the `wordsDict` array and populate the `wordPositions` map with arrays of indices for each word. This allows for quick lookups of the positions of any word in the list.

2. **Shortest Distance (`shortest` method)**:
   - Retrieve the arrays of indices for `word1` and `word2` from the map.
   - Use two pointers (`i` and `j`) to traverse the arrays and compute the minimum distance. This two-pointer technique efficiently finds the minimum index difference by advancing the pointer that points to the smaller index.

</TabItem>
<TabItem value="TypeScript" label="typescript">

1. **Initialization (Constructor)**:
   - We iterate through the `wordsDict` array and populate the `wordPositions` map with arrays of indices for each word. This allows for quick lookups of the positions of any word in the list.

2. **Shortest Distance (`shortest` method)**:
   - Retrieve the arrays of indices for `word1` and `word2` from the map.
   - Use two pointers (`i` and `j`) to traverse the arrays and compute the minimum distance. This two-pointer technique efficiently finds the minimum index difference by advancing the pointer that points to the smaller index.


</TabItem>
<TabItem value="Python" label="python">

1. **Initialization (`__init__` method)**:
   - We iterate through `wordsDict` and populate the `word_positions` dictionary with lists of indices for each word.

2. **Shortest Distance (`shortest` method)**:
   - Retrieve the lists of indices for `word1` and `word2`.
   - Use two pointers (`i` and `j`) to traverse the lists and compute the minimum distance. This two-pointer technique ensures that we efficiently find the minimum index difference by advancing the pointer that points to the smaller index.


</TabItem>
<TabItem value="Java" label="java">

- **Initialization**:
  - `wordIndices` is a `Map` where each key is a word and each value is a list of indices where the word occurs in `wordsDict`.
  
- **shortest Method**:
  - Uses two lists of indices for the given words and applies a two-pointer approach to find the smallest index difference.
  - The pointers traverse through the lists, adjusting to find the minimum distance efficiently.

</TabItem>
<TabItem value="cpp" label="C++">

1. **Initialization (Constructor)**:
   - We iterate through the `wordsDict` and populate the `word_positions` unordered map with vectors of indices for each word.

2. **Shortest Distance (`shortest` method)**:
   - Retrieve the vectors of indices for `word1` and `word2` from the map.
   - Use two pointers (`i` and `j`) to traverse the vectors and compute the minimum distance. This two-pointer technique efficiently finds the minimum index difference by advancing the pointer that points to the smaller index.
</TabItem>
 </Tabs>

### Complexity
<Tabs>
<TabItem value="JavaScript" label="javascript">

- **Initialization**: O(n), where `n` is the number of words in `wordsDict`.
- **Querying**: O(m + k), where `m` and `k` are the lengths of the arrays of indices for `word1` and `word2` respectively. This ensures that the queries are processed efficiently after the initial setup.

</TabItem>
<TabItem value="TypeScript" label="typescript">

- **Initialization**: O(n), where `n` is the number of words in `wordsDict`.
- **Querying**: O(m + k), where `m` and `k` are the lengths of the arrays of indices for `word1` and `word2` respectively. This ensures that the queries are processed efficiently after the initial setup.

</TabItem>
<TabItem value="Python" label="python">

- **Initialization**: O(n), where `n` is the number of words in `wordsDict`.
- **Querying**: O(m + k), where `m` and `k` are the lengths of the lists of indices for `word1` and `word2` respectively. This is efficient for typical use cases and allows quick queries after the initial setup.

</TabItem>
<TabItem value="Java" label="java">

- **Data Structure Design**: Use a Map `<String, List<Integer>>` to store the indices of each word in the `wordsDict`. This allows us to quickly access the positions of any word in the array.

- **Initialization**: Traverse the `wordsDict` and populate the map with the indices of each word.

- **Query Processing**: For each query, use the map to get the list of indices for the two words.Use a two-pointer technique to find the minimum distance between the indices of the two words.

</TabItem>
<TabItem value="cpp" label="C++">

- **Initialization**: O(n), where `n` is the number of words in `wordsDict`.
- **Querying**: O(m + k), where `m` and `k` are the lengths of the vectors of indices for `word1` and `word2` respectively. This ensures that the queries are processed efficiently after the initial setup.
</TabItem>
</Tabs>

## References

- **LeetCode Problem:** [Shortest Word Distance-II](https://leetcode.com/problems/shortest-word-distance-ii/)

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sivaprasath2004','pallasivasai'].map(username => (
 <Author key={username} username={username} />
))}
</div>




  
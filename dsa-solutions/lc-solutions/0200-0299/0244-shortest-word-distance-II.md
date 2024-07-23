---
id: shortest-word-distance-ii
title: Shortest Word Distance II Solution
sidebar_label: 0244 - Shortest Word Distance II
tags:
  - Shortest Word Distance II
  - Array
  - Hash Table
  - Design
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Shortest Word Distance II problem on LeetCode."
sidebar_position: 244
---

In this tutorial, we will solve the Shortest Word Distance II problem using a design approach with a hash table. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Design a class which receives a list of words in the constructor, and implements a method that takes two words `word1` and `word2` and return the shortest distance between these two words in the list.

### Examples

**Example 1:**

```plaintext
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
```

**Example 2:**

```plaintext
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1
```

### Constraints

- <code>$1 \leq \text{wordsDict.length} \leq 3 \times 10^4$</code>
- <code>$1 \leq \text{wordsDict[i].length} \leq 10$</code>
- `wordsDict[i]` consists of lowercase English letters.
- `word1` and `word2` are both in `wordsDict`.
- `word1` != `word2`.

---

## Solution for Shortest Word Distance II

### Intuition and Approach

We can solve this problem efficiently by pre-processing the words dictionary and storing the indices of each word in a hash table. This allows us to quickly find the shortest distance between any two given words by comparing their indices.

<Tabs>
 <tabItem value="Hash Table" label="Hash Table">
  
### Approach: Using Hash Table

The hash table approach involves pre-processing the `wordsDict` to store the indices of each word. When we need to find the shortest distance between two words, we retrieve their indices from the hash table and calculate the minimum distance.

#### Implementation

```jsx live
function shortestWordDistanceII() {
  class WordDistance {
    constructor(wordsDict) {
      this.wordMap = new Map();
      for (let i = 0; i < wordsDict.length; i++) {
        if (!this.wordMap.has(wordsDict[i])) {
          this.wordMap.set(wordsDict[i], []);
        }
        this.wordMap.get(wordsDict[i]).push(i);
      }
    }

    shortest(word1, word2) {
      const indices1 = this.wordMap.get(word1);
      const indices2 = this.wordMap.get(word2);
      let i = 0;
      let j = 0;
      let minDistance = Infinity;

      while (i < indices1.length && j < indices2.length) {
        minDistance = Math.min(minDistance, Math.abs(indices1[i] - indices2[j]));
        if (indices1[i] < indices2[j]) {
          i++;
        } else {
          j++;
        }
      }

      return minDistance;
    }
  }

  const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
  const wordDistance = new WordDistance(wordsDict);
  const result = wordDistance.shortest("coding", "practice");

  return (
    <div>
      <p>
        <b>Input:</b> wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryansh-patel"/>
   ```javascript
    class WordDistance {
      constructor(wordsDict) {
        this.wordMap = new Map();
        for (let i = 0; i < wordsDict.length; i++) {
          if (!this.wordMap.has(wordsDict[i])) {
            this.wordMap.set(wordsDict[i], []);
          }
          this.wordMap.get(wordsDict[i]).push(i);
        }
      }

      shortest(word1, word2) {
        const indices1 = this.wordMap.get(word1);
        const indices2 = this.wordMap.get(word2);
        let i = 0;
        let j = 0;
        let minDistance = Infinity;

        while (i < indices1.length && j < indices2.length) {
          minDistance = Math.min(minDistance, Math.abs(indices1[i] - indices2[j]));
          if (indices1[i] < indices2[j]) {
            i++;
          } else {
            j++;
          }
        }

        return minDistance;
      }
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryansh-patel"/>
   ```typescript
    class WordDistance {
      private wordMap: Map<string, number[]>;

      constructor(wordsDict: string[]) {
        this.wordMap = new Map();
        for (let i = 0; i < wordsDict.length; i++) {
          if (!this.wordMap.has(wordsDict[i])) {
            this.wordMap.set(wordsDict[i], []);
          }
          this.wordMap.get(wordsDict[i])!.push(i);
        }
      }

      shortest(word1: string, word2: string): number {
        const indices1 = this.wordMap.get(word1)!;
        const indices2 = this.wordMap.get(word2)!;
        let i = 0;
        let j = 0;
        let minDistance = Infinity;

        while (i < indices1.length && j < indices2.length) {
          minDistance = Math.min(minDistance, Math.abs(indices1[i] - indices2[j]));
          if (indices1[i] < indices2[j]) {
            i++;
          } else {
            j++;
          }
        }

        return minDistance;
      }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryansh-patel"/>
   ```python
    class WordDistance:
      def __init__(self, wordsDict: List[str]):
        self.word_map = {}
        for i, word in enumerate(wordsDict):
          if word not in self.word_map:
            self.word_map[word] = []
          self.word_map[word].append(i)

      def shortest(self, word1: str, word2: str) -> int:
        indices1 = self.word_map[word1]
        indices2 = self.word_map[word2]
        i, j = 0, 0
        min_distance = float('inf')

        while i < len(indices1) and j < len(indices2):
          min_distance = min(min_distance, abs(indices1[i] - indices2[j]))
          if indices1[i] < indices2[j]:
            i += 1
          else:
            j += 1

        return min_distance
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryansh-patel"/>
   ```java
    class WordDistance {
        private Map<String, List<Integer>> wordMap;

        public WordDistance(String[] wordsDict) {
            wordMap = new HashMap<>();
            for (int i = 0; i < wordsDict.length; i++) {
                wordMap.putIfAbsent(wordsDict[i], new ArrayList<>());
                wordMap.get(wordsDict[i]).add(i);
            }
        }

        public int shortest(String word1, String word2) {
            List<Integer> indices1 = wordMap.get(word1);
            List<Integer> indices2 = wordMap.get(word2);
            int i = 0, j = 0, minDistance = Integer.MAX_VALUE;

            while (i < indices1.size() && j < indices2.size()) {
                minDistance = Math.min(minDistance, Math.abs(indices1.get(i) - indices2.get(j)));
                if (indices1.get(i) < indices2.get(j)) {
                    i++;
                } else {
                    j++;
                }
            }

            return minDistance;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryansh-patel"/>
   ```cpp
    class WordDistance {
    public:
        unordered_map<string, vector<int>> wordMap;

        WordDistance(vector<string>& wordsDict) {
            for (int i = 0; i < wordsDict.size(); ++i) {
                wordMap[wordsDict[i]].push_back(i);
            }
        }

        int shortest(string word1, string word2) {
            const vector<int>& indices1 = wordMap[word1];
            const vector<int>& indices2 = wordMap[word2];
            int i = 0, j = 0, minDistance = INT_MAX;

            while (i < indices1.size() && j < indices2.size()) {
                minDistance = min(minDistance, abs(indices1[i] - indices2[j]));
                if (indices1[i] < indices2[j]) {
                    ++i;
               

 } else {
                    ++j;
                }
            }

            return minDistance;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(n + k)$, where `n` is the number of words in `wordsDict` and `k` is the number of queries.
- **Space Complexity:** $O(n)$, where `n` is the number of words in `wordsDict`.
- The time complexity for preprocessing is $O(n)$ because we iterate through all the words once.
- The space complexity is $O(n)$ because we store the indices of each word in a hash table.
- The time complexity for each query is $O(k)$, where `k` is the length of the indices list for the words.

</tabItem>
</Tabs>

:::tip Note
The hash table approach is efficient and recommended for this problem due to its linear preprocessing time complexity and efficient query handling.
:::

---

## Video Explanation of Shortest Word Distance II

<Tabs>

  <TabItem value="en" label="English">

  ---
  
    <Tabs>
      <TabItem value="javascript" label="JavaScript">
        <LiteYouTubeEmbed
          id="a4nvrySfjfs"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Shortest Word Distance II Problem Explanation | Shortest Word Distance II Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>

      <TabItem value="python" label="Python">
        <LiteYouTubeEmbed
          id="DF-ZQ3_pccI"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Shortest Word Distance II Problem Explanation | Shortest Word Distance II Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
      <TabItem value="java" label="Java">
        <LiteYouTubeEmbed
          id="5chO6WywYyk"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Shortest Word Distance II Problem Explanation | Shortest Word Distance II Solution"
          poster="maxresdefault"
          webp 
        />
      </TabItem>
    </Tabs>

  </TabItem>

  <TabItem value="hi" label="Hindi">
        <LiteYouTubeEmbed
          id="lEmAaSgU6CU"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Shortest Word Distance II Problem Explanation | Shortest Word Distance II Solution"
          poster="maxresdefault"
          webp 
        />
  </TabItem>

</Tabs>

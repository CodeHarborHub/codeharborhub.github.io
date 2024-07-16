---

id: shortest-word-distance-II
title: Shortest Word Distance II
difficulty: Medium
sidebar_label: 0244-Shortest-Word-Distance-II
tags:
  - Array
  - Hash Table
  - Design
  - LeetCode Medium
---

## Problem Description
Design a class `WordDistance` that supports one function, `WordDistance(String[] wordsDict)`, which initializes the class with a list of words in `wordsDict`. This class should provide the `shortest(word1, word2)` method that returns the shortest distance between these two words in the list.

### Example
Assume that wordsDict = ["practice", "makes", "perfect", "coding", "makes"].
```plaintext
Input: shortest("coding", "practice")
Output: 3
Input: shortest("makes", "coding")
Output: 1
```

### Constraints
- `1 <= wordsDict.length <= 3 * 10^4`
- `1 <= wordsDict[i].length <= 10^4`
- `wordsDict[i]` consists of lowercase English letters only.
- `word1` and `word2` are both in `wordsDict`.

## Solution Approach

### Approach Overview
To efficiently compute the shortest distance between two words multiple times, we can preprocess the positions of each word in the list using a hash map. This allows us to quickly look up the positions of any word and compute the shortest distance in constant time.

### Detailed Steps

1. **Initialization**:
   - Store the positions of each word in a hash map where the key is the word, and the value is a list of its positions in `wordsDict`.

2. **Shortest Distance Calculation**:
   - For the `shortest(word1, word2)` method, retrieve the lists of positions for `word1` and `word2` from the hash map.
   - Use two pointers to iterate through the positions of both words and compute the minimum distance between them.

3. **Efficiency**:
   - Preprocessing the positions takes `O(n)` time where `n` is the number of words.
   - Each query (`shortest(word1, word2)`) is handled in `O(m + n)` time, where `m` and `n` are the number of occurrences of `word1` and `word2` respectively.

## Code Examples

### Python
```python
from collections import defaultdict

class WordDistance:

    def __init__(self, wordsDict: List[str]):
        self.word_positions = defaultdict(list)
        for i, word in enumerate(wordsDict):
            self.word_positions[word].append(i)

    def shortest(self, word1: str, word2: str) -> int:
        positions1 = self.word_positions[word1]
        positions2 = self.word_positions[word2]
        
        i, j = 0, 0
        min_distance = float('inf')
        
        while i < len(positions1) and j < len(positions2):
            min_distance = min(min_distance, abs(positions1[i] - positions2[j]))
            if positions1[i] < positions2[j]:
                i += 1
            else:
                j += 1
        
        return min_distance
```

### C++
```cpp
class WordDistance {
private:
    unordered_map<string, vector<int>> word_positions;
    
public:
    WordDistance(vector<string>& wordsDict) {
        for (int i = 0; i < wordsDict.size(); ++i) {
            word_positions[wordsDict[i]].push_back(i);
        }
    }
    
    int shortest(string word1, string word2) {
        vector<int>& positions1 = word_positions[word1];
        vector<int>& positions2 = word_positions[word2];
        
        int i = 0, j = 0;
        int min_distance = INT_MAX;
        
        while (i < positions1.size() && j < positions2.size()) {
            min_distance = min(min_distance, abs(positions1[i] - positions2[j]));
            if (positions1[i] < positions2[j]) {
                ++i;
            } else {
                ++j;
            }
        }
        
        return min_distance;
    }
};
```

### Java
```java
class WordDistance {
    private Map<String, List<Integer>> wordPositions;
    
    public WordDistance(String[] wordsDict) {
        wordPositions = new HashMap<>();
        for (int i = 0; i < wordsDict.length; i++) {
            if (!wordPositions.containsKey(wordsDict[i])) {
                wordPositions.put(wordsDict[i], new ArrayList<>());
            }
            wordPositions.get(wordsDict[i]).add(i);
        }
    }
    
    public int shortest(String word1, String word2) {
        List<Integer> positions1 = wordPositions.get(word1);
        List<Integer> positions2 = wordPositions.get(word2);
        
        int i = 0, j = 0;
        int minDistance = Integer.MAX_VALUE;
        
        while (i < positions1.size() && j < positions2.size()) {
            int pos1 = positions1.get(i);
            int pos2 = positions2.get(j);
            
            minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
            
            if (pos1 < pos2) {
                i++;
            } else {
                j++;
            }
        }
        
        return minDistance;
    }
}
```

### C
```c
typedef struct {
    int* positions;
    int count;
} WordInfo;

typedef struct {
    WordInfo* wordMap;
    int size;
} WordDistance;

WordDistance* wordDistanceCreate(char ** wordsDict, int wordsDictSize) {
    WordDistance* obj = (WordDistance*)malloc(sizeof(WordDistance));
    obj->wordMap = (WordInfo*)calloc(wordsDictSize, sizeof(WordInfo));
    obj->size = wordsDictSize;
    
    for (int i = 0; i < wordsDictSize; i++) {
        char* word = wordsDict[i];
        WordInfo* wordInfo = &obj->wordMap[i];
        wordInfo->count = 0;
        wordInfo->positions = (int*)malloc(wordsDictSize * sizeof(int));
        for (int j = 0; j < wordsDictSize; j++) {
            if (strcmp(word, wordsDict[j]) == 0) {
                wordInfo->positions[wordInfo->count++] = j;
            }
        }
    }
    
    return obj;
}

int wordDistanceShortest(WordDistance* obj, char * word1, char * word2) {
    WordInfo* word1Info = NULL;
    WordInfo* word2Info = NULL;
    
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(word1, word2) == 0 && strcmp(word1, word2) == 0) {
            word1Info = &obj->wordMap[i];
            word2Info = word1Info;
            break;
        }
        if (strcmp(word1, obj->wordMap[i].name) == 0) {
             Returns Solution  I O also have no   even ActionController know
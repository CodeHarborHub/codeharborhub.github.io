---
id: shortest-distance-between-words-III
title: Shortest Distance Between Words -III
sidebar_label: 0245-Shortest Distance Between Words - III
tags: [Hash Map, Two Pointers]
description: Solution to finding the shortest distance between two words in an array of strings.
---

## Problem Statement
 
- Given an array of strings wordsDict and two strings that already exist in the array word1 and word2, return the shortest distance between the occurrence of these two words in the list.

- Note: that `word1` and `word2` may be the same. It is guaranteed that they represent two individual words in the list.

#### Example 1:
```bash
  Input: wordsDict = [“practice”, “makes”, “perfect”, “coding”, “makes”], word1 = “makes”, word2 = “coding”
 Output: 1
```

#### Example 2:

```bash
 Input: wordsDict = [“practice”, “makes”, “perfect”, “coding”, “makes”], word1 = “makes”, word2 = “makes”
Output: 3
```
 
 ### Solution

#### Approach

1. **Initialization**: 
   - Initialize two variables to store the most recent positions of `word1` and `word2`.
   - Initialize a variable to store the minimum distance, set it to a large value initially.

2. **Single Pass through the List**:
   - Iterate through the list, and for each word:
     - If the word is `word1`, update the most recent position of `word1`.
     - If the word is `word2`, update the most recent position of `word2`.
     - If both words are the same, ensure you handle the same word case properly.
   - Calculate the distance between the most recent positions of `word1` and `word2` and update the minimum distance if the calculated distance is smaller.

3. **Output**: 
   - After iterating through the list, the minimum distance variable will hold the shortest distance between the two words.


#### Codes in Different Languages

<Tabs>
<TabItem value="javascript" label="JavaScript" default>
<SolutionAuthor name="@sivaprasath"/>
```javascript
function shortestDistance(wordsDict, word1, word2) {
    let pos1 = -1;
    let pos2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            pos1 = i;
            if (word1 === word2) {
                pos2 = pos1;
            }
            if (pos2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
            }
        } else if (wordsDict[i] === word2) {
            pos2 = i;
            if (pos1 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
            }
        }
    }

    return minDistance;
}

// Example usage:
const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
const word1 = "makes";
const word2 = "coding";
console.log(shortestDistance(wordsDict1, word1, word2));  // Output: 1

const wordsDict2 = ["practice", "makes", "perfect", "coding", "makes"];
const word1Same = "makes";
const word2Same = "makes";
console.log(shortestDistance(wordsDict2, word1Same, word2Same));  // Output: 3
```
</TabItem>
<TabItem value="typescript" label="TypeScript">


```typescript
function shortestDistance(wordsDict: string[], word1: string, word2: string): number {
    let pos1: number = -1;
    let pos2: number = -1;
    let minDistance: number = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            pos1 = i;
            if (word1 === word2) {
                pos2 = pos1;
            }
            if (pos2 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
            }
        } else if (wordsDict[i] === word2) {
            pos2 = i;
            if (pos1 !== -1) {
                minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
            }
        }
    }

    return minDistance;
}

// Example usage:
const wordsDict1: string[] = ["practice", "makes", "perfect", "coding", "makes"];
const word1: string = "makes";
const word2: string = "coding";
console.log(shortestDistance(wordsDict1, word1, word2));  // Output: 1

const wordsDict2: string[] = ["practice", "makes", "perfect", "coding", "makes"];
const word1Same: string = "makes";
const word2Same: string = "makes";
console.log(shortestDistance(wordsDict2, word1Same, word2Same));  // Output: 3
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@sivaprasath"/>
```java
public class ShortestWordDistance {
    public int shortestDistance(String[] wordsDict, String word1, String word2) {
        int pos1 = -1;
        int pos2 = -1;
        int minDistance = Integer.MAX_VALUE;

        for (int i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i].equals(word1)) {
                pos1 = i;
                if (word1.equals(word2)) {
                    pos2 = pos1;
                }
                if (pos2 != -1) {
                    minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
                }
            } else if (wordsDict[i].equals(word2)) {
                pos2 = i;
                if (pos1 != -1) {
                    minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
                }
            }
        }

        return minDistance;
    }

    public static void main(String[] args) {
        ShortestWordDistance solution = new ShortestWordDistance();
        
        String[] wordsDict1 = {"practice", "makes", "perfect", "coding", "makes"};
        String word1 = "makes";
        String word2 = "coding";
        System.out.println(solution.shortestDistance(wordsDict1, word1, word2));  // Output: 1

        String[] wordsDict2 = {"practice", "makes", "perfect", "coding", "makes"};
        String word1Same = "makes";
        String word2Same = "makes";
        System.out.println(solution.shortestDistance(wordsDict2, word1Same, word2Same));  // Output: 3
    }
}
```
</TabItem>
  <TabItem value="python" label="Python" >
  <SolutionAuthor name="@sivaprasath"/>
  ```python
        def shortestDistance(wordsDict, word1, word2):
            pos1, pos2 = -1, -1
            min_distance = float('inf')
            
            for i, word in enumerate(wordsDict):
                if word == word1:
                    pos1 = i
                    if word1 == word2:
                        pos2 = pos1
                    if pos2 != -1:
                        min_distance = min(min_distance, abs(pos1 - pos2))
                        
                elif word == word2:
                    pos2 = i
                    if pos1 != -1:
                        min_distance = min(min_distance, abs(pos1 - pos2))
            
            return min_distance 
        wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
        word1 = "makes"
        word2 = "coding"
        print(shortestDistance(wordsDict, word1, word2))  # Output: 1

        wordsDict = ["practice", "makes", "perfect", "coding", "makes"]
        word1 = "makes"
        word2 = "makes"
        print(shortestDistance(wordsDict, word1, word2))  # Output: 3
```
   </TabItem>
   <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@sivaprasath"/>
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <climits>
#include <algorithm>

using namespace std;

class Solution {
public:
    int shortestDistance(vector<string>& wordsDict, string word1, string word2) {
        int pos1 = -1;
        int pos2 = -1;
        int minDistance = INT_MAX;

        for (int i = 0; i < wordsDict.size(); ++i) {
            if (wordsDict[i] == word1) {
                pos1 = i;
                if (word1 == word2) {
                    pos2 = pos1;
                }
                if (pos2 != -1) {
                    minDistance = min(minDistance, abs(pos1 - pos2));
                }
            } else if (wordsDict[i] == word2) {
                pos2 = i;
                if (pos1 != -1) {
                    minDistance = min(minDistance, abs(pos1 - pos2));
                }
            }
        }

        return minDistance;
    }
};

int main() {
    Solution solution;

    vector<string> wordsDict1 = {"practice", "makes", "perfect", "coding", "makes"};
    string word1 = "makes";
    string word2 = "coding";
    cout << solution.shortestDistance(wordsDict1, word1, word2) << endl;  // Output: 1

    vector<string> wordsDict2 = {"practice", "makes", "perfect", "coding", "makes"};
    string word1Same = "makes";
    string word2Same = "makes";
    cout << solution.shortestDistance(wordsDict2, word1Same, word2Same) << endl;  // Output: 3

    return 0;
}
```
   </TabItem>
</Tabs>

### Explanation:
<Tabs>
<TabItem value="javascript" label="JavaScript" default>

- **Initialization**: `pos1` and `pos2` are initialized to `-1` to indicate that the positions of `word1` and `word2` have not been found yet. `minDistance` is set to `Infinity` to ensure any found distance will be smaller.
- **Single Pass**: We iterate through the list, and for each occurrence of `word1` or `word2`, we update the respective positions.
- **Distance Calculation**: If both positions have been updated at least once, we calculate the distance and update `minDistance` if the new distance is smaller.
- **Handling Same Words**: If `word1` is the same as `word2`, we set `pos2` to `pos1` whenever `word1` is found to ensure we calculate the distance correctly between different occurrences of the same word.

</TabItem>
<TabItem value="typescript" labe="TypeScript">

- **Initialization**: `pos1` and `pos2` are initialized to `-1` to indicate that the positions of `word1` and `word2` have not been found yet. `minDistance` is set to `Infinity` to ensure any found distance will be smaller.
- **Single Pass**: We iterate through the list, and for each occurrence of `word1` or `word2`, we update the respective positions.
- **Distance Calculation**: If both positions have been updated at least once, we calculate the distance and update `minDistance` if the new distance is smaller.
- **Handling Same Words**: If `word1` is the same as `word2`, we set `pos2` to `pos1` whenever `word1` is found to ensure we calculate the distance correctly between different occurrences of the same word.
</TabItem>
<TabItem value="java" label="Java">
- **Initialization**: `pos1` and `pos2` are initialized to `-1` to indicate that the positions of `word1` and `word2` have not been found yet. `minDistance` is set to `Integer.MAX_VALUE` to ensure any found distance will be smaller.
- **Single Pass**: We iterate through the list, and for each occurrence of `word1` or `word2`, we update the respective positions.
- **Distance Calculation**: If both positions have been updated at least once, we calculate the distance and update `minDistance` if the new distance is smaller.
- **Handling Same Words**: If `word1` is the same as `word2`, we set `pos2` to `pos1` whenever `word1` is found to ensure we calculate the distance correctly between different occurrences of the same word.

</TabItem>
<TabItem value="python" label="Python">
- **Initialization**: `pos1` and `pos2` are initialized to `-1` to indicate that the positions of `word1` and `word2` have not been found yet. `min_distance` is set to infinity to ensure any found distance will be smaller.
- **Single Pass**: We iterate through the list, and for each occurrence of `word1` or `word2`, we update the respective positions.
- **Distance Calculation**: If both positions have been updated at least once, we calculate the distance and update `min_distance` if the new distance is smaller.
- **Handling Same Words**: If `word1` is the same as `word2`, we set `pos2` to `pos1` whenever `word1` is found to ensure we calculate the distance correctly between different occurrences of the same word.
</TabItem>
<TabItem value="cpp" label="C++">

- **Initialization**: `pos1` and `pos2` are initialized to `-1` to indicate that the positions of `word1` and `word2` have not been found yet. `minDistance` is set to `INT_MAX` to ensure any found distance will be smaller.
- **Single Pass**: We iterate through the list, and for each occurrence of `word1` or `word2`, we update the respective positions.
- **Distance Calculation**: If both positions have been updated at least once, we calculate the distance and update `minDistance` if the new distance is smaller.
- **Handling Same Words**: If `word1` is the same as `word2`, we set `pos2` to `pos1` whenever `word1` is found to ensure we calculate the distance correctly between different occurrences of the same word.
</TabItem>
</Tabs>



### Complexity
<Tabs>
<TabItem value="javascript" labe="JavaScript"> 

- **O(n)**: The solution involves a single pass through the list `wordsDict`, where `n` is the length of the list. During this pass, each element is checked and possibly used to update positions and compute distances, which are all O(1) operations.

- **O(1)**: The solution uses a constant amount of extra space, regardless of the input size. It only maintains a few integer variables (`pos1`, `pos2`, `minDistance`) to store indices and distances. There are no data structures whose size grows with the input.

</TabItem>
<TabItem value="typescript" label="TypeScript">

- **Time Complexity**: `O(n)`
  - We iterate through the array `wordsDict` once, where `n` is the length of the array. Each element is processed in constant time.

- **Space Complexity**: `O(1)`
  - We use a constant amount of extra space for variables `pos1`, `pos2`, and `minDistance`. No additional data structures are used that grow with the size of the input.
</TabItem>
<TabItem value="java" label="Java">

- **Time Complexity**: `O(n)`
  - We iterate through the array `wordsDict` once, where `n` is the length of the array. Each element is processed in constant time.

- **Space Complexity**: `O(1)`
  - We use a constant amount of extra space for variables `pos1`, `pos2`, and `minDistance`. No additional data structures are used that grow with the size of the input.
</TabItem>
<TabItem value="python" label="Python">
- **O(n)**: The solution involves a single pass through the list `wordsDict`, where `n` is the length of the list. In this pass, each element is checked and possibly used to update positions and compute distances, which are all O(1) operations.
 
- **O(1)**: The solution uses a constant amount of extra space, regardless of the input size. It only maintains a few integer variables (`pos1`, `pos2`, `min_distance`) to store indices and distances. There are no data structures whose size grows with the input. 
</TabItem>
<TabItem value="cpp" label="c++">

- **Time Complexity**: `O(n)`
  - We iterate through the array `wordsDict` once, where `n` is the length of the array. Each element is processed in constant time.

- **Space Complexity**: `O(1)`
  - We use a constant amount of extra space for variables `pos1`, `pos2`, and `minDistance`. No additional data structures are used that grow with the size of the input.
</TabItem>
</Tabs>


## References

- **LeetCode Problem:** [Shortest Word Distance-III](https://leetcode.com/problems/shortest-word-distance-iii/)

<h2>Author:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sivaprasath2004'].map(username => (
 <Author key={username} username={username} />
))}
</div>
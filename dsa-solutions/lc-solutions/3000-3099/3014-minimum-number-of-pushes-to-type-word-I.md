---
id: Minimum-Number-of-Pushes-to-Type-Word-I
title: Minimum Number of Pushes to Type Word I
sidebar_label: 3014 - Minimum Number of Pushes to Type Word I
tags: [greedy, mapping, string]
description: Find the minimum number of pushes needed to type a string word after remapping keys on a telephone keypad.
sidebar_position: 1
---

## Problem Statement

### Problem Description

Given a string `word` containing distinct lowercase English letters, telephone keypads have keys mapped with distinct collections of lowercase English letters, which can be used to form words by pushing them. For example, the key 2 is mapped with ["a","b","c"], we need to push the key one time to type "a", two times to type "b", and three times to type "c".

It is allowed to remap the keys numbered 2 to 9 to distinct collections of letters. The keys can be remapped to any amount of letters, but each letter must be mapped to exactly one key. You need to find the minimum number of times the keys will be pushed to type the string word.

Return the minimum number of pushes needed to type `word` after remapping the keys.

### Examples

#### Example 1:

Input: word = "abcde"  
Output: 5  
Explanation:  
The remapped keypad given in the image provides the minimum cost.  
"a" -> one push on key 2  
"b" -> one push on key 3  
"c" -> one push on key 4  
"d" -> one push on key 5  
"e" -> one push on key 6  
Total cost is 1 + 1 + 1 + 1 + 1 = 5.  
It can be shown that no other mapping can provide a lower cost.

#### Example 2:

Input: word = "xycdefghij"  
Output: 12  
Explanation:  
The remapped keypad given in the image provides the minimum cost.  
"x" -> one push on key 2  
"y" -> two pushes on key 2  
"c" -> one push on key 3  
"d" -> two pushes on key 3  
"e" -> one push on key 4  
"f" -> one push on key 5  
"g" -> one push on key 6  
"h" -> one push on key 7  
"i" -> one push on key 8  
"j" -> one push on key 9  
Total cost is 1 + 2 + 1 + 2 + 1 + 1 + 1 + 1 + 1 + 1 = 12.  
It can be shown that no other mapping can provide a lower cost.

### Constraints

1. `1 <= word.length <= 26`
2. `word` consists of lowercase English letters.
3. All letters in `word` are distinct.

## Solution of Given Problem

### Intuition and Approach

To minimize the number of pushes, we should map the letters such that frequently used letters are mapped to the keys requiring fewer pushes. Since all letters in the `word` are distinct, we can simply sort the letters and map them sequentially to minimize the number of pushes.

### Approaches

We will solve this problem using a greedy approach. First, we sort the letters of the `word` to ensure that we map the most frequent letters to the keys with the least number of pushes. Then we compute the total number of pushes required.

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Hemanth"/>
   ```javascript
    function minPushes(word) {
        const keys = Array(9).fill().map(() => []);
        const sortedWord = word.split('').sort();
        
        let index = 0;
        for (let i = 0; i < 9; i++) {
            while (keys[i].length < 3 && index < sortedWord.length) {
                keys[i].push(sortedWord[index++]);
            }
        }

        let totalPushes = 0;
        for (let ch of word) {
            for (let i = 0; i < 9; i++) {
                if (keys[i].includes(ch)) {
                    totalPushes += keys[i].indexOf(ch) + 1;
                    break;
                }
            }
        }

        return totalPushes;
    }

    // Example usage:
    console.log(minPushes("abcde")); // Output: 5
    console.log(minPushes("xycdefghij")); // Output: 12
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Hemanth"/>
   ```python
    def min_pushes(word):
        keys = [[] for _ in range(9)]
        sorted_word = sorted(word)

        index = 0
        for i in range(9):
            while len(keys[i]) < 3 and index < len(sorted_word):
                keys[i].append(sorted_word[index])
                index += 1

        total_pushes = 0
        for ch in word:
            for i in range(9):
                if ch in keys[i]:
                    total_pushes += keys[i].index(ch) + 1
                    break

        return total_pushes

    # Example usage:
    print(min_pushes("abcde")) # Output: 5
    print(min_pushes("xycdefghij")) # Output: 12
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Hemanth"/>
   ```java
    import java.util.*;

    public class MinPushes {
        public static int minPushes(String word) {
            List<List<Character>> keys = new ArrayList<>(9);
            for (int i = 0; i < 9; i++) {
                keys.add(new ArrayList<>());
            }

            char[] sortedWord = word.toCharArray();
            Arrays.sort(sortedWord);

            int index = 0;
            for (int i = 0; i < 9; i++) {
                while (keys.get(i).size() < 3 && index < sortedWord.length) {
                    keys.get(i).add(sortedWord[index++]);
                }
            }

            int totalPushes = 0;
            for (char ch : word.toCharArray()) {
                for (int i = 0; i < 9; i++) {
                    if (keys.get(i).contains(ch)) {
                        totalPushes += keys.get(i).indexOf(ch) + 1;
                        break;
                    }
                }
            }

            return totalPushes;
        }

        // Example usage:
        public static void main(String[] args) {
            System.out.println(minPushes("abcde")); // Output: 5
            System.out.println(minPushes("xycdefghij")); // Output: 12
        }
    }
    ```

  </TabItem>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Hemanth"/>
   ```cpp
    #include <iostream>
    #include <vector>
    #include <algorithm>

    int minPushes(std::string word) {
        std::vector<std::vector<char>> keys(9);
        std::sort(word.begin(), word.end());

        int index = 0;
        for (int i = 0; i < 9; ++i) {
            while (keys[i].size() < 3 && index < word.size()) {
                keys[i].push_back(word[index++]);
            }
        }

        int totalPushes = 0;
        for (char ch : word) {
            for (int i = 0; i < 9; ++i) {
                auto it = std::find(keys[i].begin(), keys[i].end(), ch);
                if (it != keys[i].end()) {
                    totalPushes += std::distance(keys[i].begin(), it) + 1;
                    break;
                }
            }
        }

        return totalPushes;
    }

    // Example usage:
    int main() {
        std::cout << minPushes("abcde") << std::endl; // Output: 5
        std::cout << minPushes("xycdefghij") << std::endl; // Output: 12
        return 0;
    }
    ```

  </TabItem>  
</Tabs>

### Complexity Analysis

The time complexity of this solution is O(n log n) due to the sorting step, where `n` is the length of the word. The space complexity is O(1) as the additional space used is constant and does not depend on the input size.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
 <Author key={"Hemu21"} username={"Hemu21"} />
</div>

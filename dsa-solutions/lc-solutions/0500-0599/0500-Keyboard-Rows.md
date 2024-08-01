---
id: Keyboard-Rows
title: Keyboard-Rows
sidebar_label: Keyboard-Rows
tags: 
    - String
    - Array
    - LeetCode
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Keyboard-Rows](https://leetcode.com/problems/Keyboard-Rows/description/) | [Keyboard-Rows Solution on LeetCode](https://leetcode.com/problems/Keyboard-Rows/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |


## Problem Description

Given an array of strings `words`, return the words that can be typed using letters of the alphabet on only one row of the American keyboard.

American keyboard rows:
1. "qwertyuiop"
2. "asdfghjkl"
3. "zxcvbnm"

### Example 1

**Input:** `words = ["Hello","Alaska","Dad","Peace"]`
**Output:** `["Alaska","Dad"]`

### Example 2

**Input:** `words = ["omk"]`
**Output:** `[]`

### Example 3

**Input:** `words = ["adsdf","sfd"]`
**Output:** `["adsdf","sfd"]`

### Constraints

- `1 <= words.length <= 20`
- `1 <= words[i].length <= 100`
- `words[i]` consists of English letters (both lowercase and uppercase).

## Approach

We can solve this problem efficiently by checking each word to see if all its characters belong to the same row on the keyboard. We can utilize sets for the characters of each row for quick lookup.

## Solution in Python

```python
def findWords(words):
    row1 = set("qwertyuiop")
    row2 = set("asdfghjkl")
    row3 = set("zxcvbnm")
    
    def check_word(word):
        if word[0].lower() in row1:
            row = row1
        elif word[0].lower() in row2:
            row = row2
        else:
            row = row3
        
        for char in word:
            if char.lower() not in row:
                return False
        return True
    
    result = []
    for word in words:
        if check_word(word):
            result.append(word)
    
    return result

# Example usage:
words = ["Hello","Alaska","Dad","Peace"]
print(findWords(words))  # Output: ["Alaska","Dad"]
```

## Solution in Java

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    public String[] findWords(String[] words) {
        Set<Character> row1 = new HashSet<>();
        Set<Character> row2 = new HashSet<>();
        Set<Character> row3 = new HashSet<>();
        
        for (char c : "qwertyuiop".toCharArray()) row1.add(c);
        for (char c : "asdfghjkl".toCharArray()) row2.add(c);
        for (char c : "zxcvbnm".toCharArray()) row3.add(c);
        
        List<String> result = new ArrayList<>();
        
        for (String word : words) {
            if (isSingleRow(word, row1, row2, row3)) {
                result.add(word);
            }
        }
        
        return result.toArray(new String[0]);
    }
    
    private boolean isSingleRow(String word, Set<Character> row1, Set<Character> row2, Set<Character> row3) {
        Set<Character> currentRow = determineRow(word.charAt(0), row1, row2, row3);
        
        for (int i = 1; i < word.length(); i++) {
            if (!currentRow.contains(Character.toLowerCase(word.charAt(i)))) {
                return false;
            }
        }
        
        return true;
    }
    
    private Set<Character> determineRow(char c, Set<Character> row1, Set<Character> row2, Set<Character> row3) {
        char lowerC = Character.toLowerCase(c);
        
        if (row1.contains(lowerC)) {
            return row1;
        } else if (row2.contains(lowerC)) {
            return row2;
        } else {
            return row3;
        }
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        String[] words = {"Hello","Alaska","Dad","Peace"};
        String[] result = sol.findWords(words);
        for (String word : result) {
            System.out.println(word);
        }
    }
}
```

## Solution in C++

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

class Solution {
public:
    vector<string> findWords(vector<string>& words) {
        unordered_set<char> row1 {'q','w','e','r','t','y','u','i','o','p'};
        unordered_set<char> row2 {'a','s','d','f','g','h','j','k','l'};
        unordered_set<char> row3 {'z','x','c','v','b','n','m'};
        
        vector<string> result;
        
        for (const string& word : words) {
            if (isSingleRow(word, row1, row2, row3)) {
                result.push_back(word);
            }
        }
        
        return result;
    }
    
    bool isSingleRow(const string& word, unordered_set<char>& row1, unordered_set<char>& row2, unordered_set<char>& row3) {
        unordered_set<char>* currentRow = determineRow(word[0], row1, row2, row3);
        
        for (int i = 1; i < word.size(); i++) {
            if (currentRow->find(tolower(word[i])) == currentRow->end()) {
                return false;
            }
        }
        
        return true;
    }
    
    unordered_set<char>* determineRow(char c, unordered_set<char>& row1, unordered_set<char>& row2, unordered_set<char>& row3) {
        char lowerC = tolower(c);
        
        if (row1.find(lowerC) != row1.end()) {
            return &row1;
        } else if (row2.find(lowerC) != row2.end()) {
            return &row2;
        } else {
            return &row3;
        }
    }
};

int main() {
    Solution sol;
    vector<string> words = {"Hello","Alaska","Dad","Peace"};
    vector<string> result = sol.findWords(words);
    for (const string& word : result) {
        cout << word << endl;
    }
    return 0;
}
```

## Solution in C

```c
#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool isSingleRow(char* word, char* row1, char* row2, char* row3) {
    char* currentRow;
    if (strchr(row1, tolower(word[0]))) {
        currentRow = row1;
    } else if (strchr(row2, tolower(word[0]))) {
        currentRow = row2;
    } else {
        currentRow = row3;
    }
    
    for (int i = 1; i < strlen(word); i++) {
        if (!strchr(currentRow, tolower(word[i]))) {
            return false;
        }
    }
    
    return true;
}

void findWords(char** words, int wordsSize, char** result, int* returnSize) {
    char* row1 = "qwertyuiop";
    char* row2 = "asdfghjkl";
    char* row3 = "zxcvbnm";
    
    *returnSize = 0;
    for (int i = 0; i < wordsSize; i++) {
        if (isSingleRow(words[i], row1, row2, row3)) {
            result[*returnSize] = words[i];
            (*returnSize)++;
        }
    }
}

int main() {
    char* words[] = {"Hello","Alaska","Dad","Peace"};
    int wordsSize = 4;
    char* result[wordsSize];
    int returnSize;
    
    findWords(words, wordsSize, result, &returnSize);
    
    for (int i = 0; i < returnSize; i++) {
        printf("%s\n", result[i]);
    }
    
    return 0;
}
```

## Solution in JavaScript

```javascript
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    
    const isSingleRow = (word) => {
        let firstChar = word[0].toLowerCase();
        if (row1.has(firstChar)) {
            row = row1;
        } else if (row2.has(firstChar)) {
            row = row2;
        } else {
            row = row3;
        }
        
        for (let i = 1; i < word.length; i++) {
            if (!row.has(word[i].toLowerCase())) {
                return false;
            }
        }
        return true;
    }
    
    let result = [];
    for (let word of words) {
        if (isSingleRow(word)) {
            result.push(word);
        }
    }
    
    return result;
};

// Example usage:
let words = ["Hello","Alaska","Dad","Peace"];
console.log(findWords(words));  // Output: ["Alaska","Dad"]
```

## Step-by-Step Algorithm

1. **Input Parsing**: Read the input array of words.
2. **Keyboard Rows Initialization**: Define three sets representing characters in each row of the keyboard.
3. **Function Definition**: Implement a function to determine if a word can be typed using characters from a single keyboard row.
4. **Iteration and Filtering**: Iterate through each word in the input array and
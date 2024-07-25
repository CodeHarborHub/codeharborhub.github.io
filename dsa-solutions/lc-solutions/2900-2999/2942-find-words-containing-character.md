---
id: find-words-containing-character
title: Find Words Containing Character
sidebar_label: 2942-Find Words Containing Character
tags: 
    - Array
    - String
description: Write a function that returns the count of arguments passed to it.
sidebar_position: 2942
---

## Problem Statement
You are given a **0-indexed** array of strings words and a character `x`.

Return an **array of indices** representing the words that contain the character `x`.

**Note** that the returned array may be in **any** order.

### Examples

**Example 1:**

```
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explination: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
```

**Example 2:**

```
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explination: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
```

**Example 3:**

```
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explination: "z" does not occur in any of the words. Hence, we return an empty array.
```



### Constraints

- `1 <= words.length <= 50`
- `1 <= words[i].length <= 50`
- `x` is a lowercase English letter.
- `words[i]` consists only of lowercase English letters.

## Solution

### Approach: 

- **Initialize a Result List:** Create an empty list to store the indices of the words containing the character `x`.
- **Iterate Through the Array:** Loop through each word in the words array.
- **Check for Character:** Use the indexOf method to check if the character `x` is present in the word. If found, add the current index to the result list.
- **Return the Result:** Return the list of indices.

#### Java Implementation

```java
class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
                List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < words.length; i++) {
            if (words[i].indexOf(x) != -1) {
                result.add(i);
            }
        }
        
        return result;
    }
}
```

#### C++ Implementation

```cpp
 class Solution {
public:
    vector<int> findWordsContaining(vector<string>& words, char x) {
                std::vector<int> result;

        for (int i = 0; i < words.size(); ++i) {
            if (words[i].find(x) != std::string::npos) {
                result.push_back(i);
            }
        }

        return result;
    }
};
```
#### Python Implementation
```python
class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        result = []
        
        for i in range(len(words)):
            if x in words[i]:
                result.append(i)
                
        return result
```

#### JavaScript Implementation

```javascript
class Solution {
    findWordsContaining(words, x) {
        const result = [];
        
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(x)) {
                result.push(i);
            }
        }
        
        return result;
    }
}

```

#### TypeScript Implementation

```typescript
class Solution {
    findWordsContaining(words: string[], x: string): number[] {
        const result: number[] = [];
        
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(x)) {
                result.push(i);
            }
        }
        
        return result;
    }
}

```

### Complexity Analysis

- **Time Complexity**: O(n * m), where n is the number of words and m is the average length of the words. This is because each word is checked for the character `x`.
- **Space Complexity**: O(n), for storing the indices in the result list.

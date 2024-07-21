---
id: number-of-valid-words-in-a-sentence
title: Number of Valid Words in a Sentence
sidebar_label: 2047-Number of Valid Words in a Sentence
tags:
  - Valid Words
  - Brute Force
  - Optimized
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Number of Valid Words problem on LeetCode."
sidebar_position: 2
---

In this tutorial, we will solve the Number of Valid Words problem using two different approaches: brute force and optimized. We will provide the implementation of the solution in C++, Java, and Python.

## Problem Description

Given a sentence, count the number of valid words. A valid word is defined by the following rules:
1. It only contains lowercase letters, hyphens, and/or punctuation (no digits).
2. There is at most one hyphen ('-'). If present, it must be surrounded by lowercase characters ("a-b" is valid, but "-ab" and "ab-" are not valid).
3. There is at most one punctuation mark ('!', '.', ','). If present, it must be at the end of the token ("ab,", "cd!", and "." are valid, but "a!b" and "c.," are not valid).

### Examples

**Example 1:**

```
Input: sentence = "cat and  dog"
Output: 3
Explanation: The valid words in the sentence are "cat", "and", and "dog".
```

**Example 2:**

```
Input: sentence = "!this  1-s b8d!"
Output: 0
Explanation: There are no valid words in the sentence. "!this" is invalid because it starts with a punctuation mark. "1-s" and "b8d" are invalid because they contain digits.

```

**Example 3:**

```
Input: sentence = "alice and  bob are playing stone-game10"
Output: 5
Explanation: The valid words in the sentence are "alice", "and", "bob", "are", and "playing". "stone-game10" is invalid because it contains digits.
```

### Constraints

- `1 <= sentence.length <= 1000`
- `sentence` only contains lowercase English letters, digits, ' ', '-', '!', '.', and ','.
- There will be at least 1 token.

---

## Solution for Number of Valid Words Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized approach. The brute force approach directly iterates through the string and checks each token for validity, while the optimized approach streamlines the validation process.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force

The brute force approach iterates through each token of the sentence, validates it according to the given rules, and counts the number of valid tokens.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>
#include <vector>
#include <sstream>

class Solution {
public:
    int countValidWords(std::string sentence) {
        std::istringstream iss(sentence);
        std::string word;
        int validWordCount = 0;
        
        while (iss >> word) {
            if (isValid(word)) {
                validWordCount++;
            }
        }
        
        return validWordCount;
    }
    
private:
    bool isValid(const std::string& word) {
        int hyphenCount = 0;
        int punctuationCount = 0;
        
        for (int i = 0; i < word.length(); i++) {
            if (isdigit(word[i])) {
                return false;
            }
            if (word[i] == '-') {
                hyphenCount++;
                if (hyphenCount > 1 || i == 0 || i == word.length() - 1 || !islower(word[i-1]) || !islower(word[i+1])) {
                    return false;
                }
            }
            if (word[i] == '!' || word[i] == '.' || word[i] == ',') {
                punctuationCount++;
                if (punctuationCount > 1 || i != word.length() - 1) {
                    return false;
                }
            }
        }
        
        return true;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int countValidWords(String sentence) {
        String[] tokens = sentence.split("\\s+");
        int validWordCount = 0;
        
        for (String token : tokens) {
            if (isValid(token)) {
                validWordCount++;
            }
        }
        
        return validWordCount;
    }
    
    private boolean isValid(String word) {
        int hyphenCount = 0;
        int punctuationCount = 0;
        
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            
            if (Character.isDigit(c)) {
                return false;
            }
            if (c == '-') {
                hyphenCount++;
                if (hyphenCount > 1 || i == 0 || i == word.length() - 1 || !Character.isLowerCase(word.charAt(i - 1)) || !Character.isLowerCase(word.charAt(i + 1))) {
                    return false;
                }
            }
            if (c == '!' || c == '.' || c == ',') {
                punctuationCount++;
                if (punctuationCount > 1 || i != word.length() - 1) {
                    return false;
                }
            }
        }
        
        return true;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def countValidWords(self, sentence: str) -> int:
        tokens = sentence.split()
        valid_word_count = 0
        
        for token in tokens:
            if self.is_valid(token):
                valid_word_count += 1
                
        return valid_word_count
    
    def is_valid(self, word: str) -> bool:
        hyphen_count = 0
        punctuation_count = 0
        
        for i, c in enumerate(word):
            if c.isdigit():
                return False
            if c == '-':
                hyphen_count += 1
                if hyphen_count > 1 or i == 0 or i == len(word) - 1 or not (word[i - 1].islower() and word[i + 1].islower()):
                    return False
            if c in "!.,": 
                punctuation_count += 1
                if punctuation_count > 1 or i != len(word) - 1:
                    return False
        
        return True
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of the sentence.
- The time complexity is $O(n)$ because we iterate through each character in the sentence once.
- The space complexity is $O(n)$ because we store the result in a new string or list of strings.

</tabItem>
<tabItem value="Optimized" label="Optimized">

### Approach 2: Optimized Approach

The optimized approach uses similar logic but may include improvements such as pre-checking token conditions or using efficient string methods.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>
#include <vector>
#include <sstream>

class Solution {
public:
    int countValidWords(std::string sentence) {
        std::istringstream iss(sentence);
        std::string word;
        int validWordCount = 0;
        
        while (iss >> word) {
            if (isValid(word)) {
                validWordCount++;
            }
        }
        
        return validWordCount;
    }
    
private:
    bool isValid(const std::string& word) {
        int hyphenCount = 0;
        int punctuationCount = 0;
        int n = word.length();
        
        for (int i = 0; i < n; i++) {
            char c = word[i];
            
            if (isdigit(c)) {
                return false;
            }
            if (c == '-') {
                hyphenCount++;
                if (hyphenCount > 1 || i == 0 || i == n - 1 || !islower(word[i-1]) || !islower(word[i+1])) {
                    return false;
                }
            }
            if (c == '!' || c == '.' || c == ',') {
                punctuationCount++;
                if (punctuationCount > 1 || i != n - 1) {
                    return false;
                }
            }
        }
        
        return true;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int countValidWords(String sentence) {
        String[] tokens = sentence.split("\\s+");
        int validWordCount = 0;
        
        for (String token : tokens) {
            if (isValid(token)) {
                validWordCount++;
            }
        }
        
        return validWordCount;
    }
    
    private boolean isValid(String word) {
        int hyphenCount = 0;
        int punctuation

        Count = 0;
        int n = word.length();
        
        for (int i = 0; i < n; i++) {
            char c = word.charAt(i);
            
            if (Character.isDigit(c)) {
                return false;
            }
            if (c == '-') {
                hyphenCount++;
                if (hyphenCount > 1 || i == 0 || i == n - 1 || !Character.isLowerCase(word.charAt(i - 1)) || !Character.isLowerCase(word.charAt(i + 1))) {
                    return false;
                }
            }
            if (c == '!' || c == '.' || c == ',') {
                punctuationCount++;
                if (punctuationCount > 1 || i != n - 1) {
                    return false;
                }
            }
        }
        
        return true;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def countValidWords(self, sentence: str) -> int:
        tokens = sentence.split()
        valid_word_count = 0
        
        for token in tokens:
            if self.is_valid(token):
                valid_word_count += 1
                
        return valid_word_count
    
    def is_valid(self, word: str) -> bool:
        hyphen_count = 0
        punctuation_count = 0
        n = len(word)
        
        for i, c in enumerate(word):
            if c.isdigit():
                return False
            if c == '-':
                hyphen_count += 1
                if hyphen_count > 1 or i == 0 or i == n - 1 or not (word[i - 1].islower() and word[i + 1].islower()):
                    return False
            if c in "!.,": 
                punctuation_count += 1
                if punctuation_count > 1 or i != n - 1:
                    return False
        
        return True
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
- Where `n` is the length of the sentence.
- The time complexity is $O(n)$ because we iterate through each character in the sentence once.
- The space complexity is $O(n)$ because we store the result in a new string or list of strings.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
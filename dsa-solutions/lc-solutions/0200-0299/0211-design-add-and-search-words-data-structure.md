---
id: design-add-and-search-words-data-structure
title: Design Add and Search Words Data Structure
sidebar_label: 0211 - Design Add and Search Words Data Structure
tags:
- Depth-First Search
- String
description: "This document provides a solution to the leetcode 211"
---

## Problem
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the `WordDictionary` class:

`WordDictionary()` Initializes the object.
`void addWord(word)` Adds `word` to the data structure, it can be matched later.
`bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.


### Example 1:

```
Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"] [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output: [null,null,null,null,false,true,true,true]

Explanation: WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
```

### Constraints:
- `1 <= word.length <= 25`
- `word` in `addWord` consists of lowercase English letters
- word in search consist of '.' or lowercase English letters.
- There will be at most 2 dots in word for search queries.
- At most 104 calls will be made to addWord and search.


## Solution

### Data Structure:

- Trie (Prefix Tree): A tree-like data structure where each node represents a single character of a word. The root node is an entry point for all words. Each node has up to 26 children (one for each letter 'a' to 'z').

### Adding a Word:

- Start at the root node.
- For each character in the word:
- Calculate the index of the character (character - 'a').
- If the corresponding child node is NULL, create a new TrieNode.
Move to the child node.
- After processing all characters, mark the current node as a leaf node to indicate the end of a word.

### Searching for a Word:
- Start at the root node.
- Use a recursive helper function searchHelper to handle the search:
- If you reach the end of the word, check if the current node is a leaf node.
- If the current character is '.', check all possible children nodes.
- If the current character is a regular letter, move to the corresponding child node.
- Return true if a matching word is found, otherwise false.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class TrieNode{
    public:
    TrieNode *children[26];
    bool isLeaf = false;

    TrieNode(){
        for(int i=0;i<26;i++) children[i] = NULL;
        isLeaf = false;
    }
};

TrieNode *root;

class WordDictionary {
public:
    WordDictionary() {
       root = new TrieNode() ;
    }
    
    void addWord(string word) {
        TrieNode *curr = root;
        for(int i=0;i<word.size();i++){
            if (word[i] < 'a' || word[i] > 'z') return;
            int index = word[i] - 'a';
            if(!curr->children[index]) curr->children[index] = new TrieNode();
            curr = curr->children[index];
        }
        curr->isLeaf = true;
    }
    
    // bool search(string word) {
    //     TrieNode *curr = root;
    //     for(int i=0;i<word.size();i++){
    //         if (word[i] < 'a' || word[i] > 'z') return false;
    //         int index = word[i] - 'a';
    //         if(!curr->children[index]) return false;
    //         curr = curr->children[index];
    //     }
    //     return curr->isLeaf;
    // }

    bool searchHelper(TrieNode* curr, string word, int index) {
    if (index == word.size()) return curr->isLeaf;
    if (word[index] == '.') {
        for (int i = 0; i < 26; i++) {
            if (curr->children[i] && searchHelper(curr->children[i], word, index + 1)) return true;
        }
        return false;
    } else {
        int idx = word[index] - 'a';
        if (!curr->children[idx]) return false;
        return searchHelper(curr->children[idx], word, index + 1);
    }
}

    bool search(string word) {
    return searchHelper(root, word, 0);
}

};

```
</TabItem>
<TabItem value="java" label="Java">


```java
import java.util.*;

class WordDictionary {
    Map<Integer, List<String>> map;

    public WordDictionary() {
        map = new HashMap<>();
    }

    public void addWord(String word) {
        int index = word.length();
        if (!map.containsKey(index)) {
            List<String> list = new ArrayList<>();
            list.add(word);
            map.put(index, list);
        } else {
            map.get(index).add(word);
        }
    }

    public boolean search(String word) {
        int index = word.length();
        if (!map.containsKey(index)) {
            return false;
        }

        List<String> list = map.get(index);
        for (String s : list) {
            if (isSame(s, word)) {
                return true;
            }
        }
        return false;
    }

    private boolean isSame(String s, String word) {
        for (int i = 0; i < s.length(); i++) {
            if (word.charAt(i) != '.' && s.charAt(i) != word.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */

```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity:
- Adding a Word: O(m), where m is the length of the word. Each character is processed once.
-  Searching for a Word:
- Worst Case: O(m * 26^m), where m is the length of the word and all characters are '.' (wildcards). This is due to the recursive search through all possible children nodes at each level.


### Space Complexity:
- TrieNode: O(1) per node.
- WordDictionary: O(n * m), where n is the number of words and m is the average length of the words.


## References

- **LeetCode Problem**: [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/description/)

- **Leetcode Solutions:** [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/3313923/java-akash2023/)

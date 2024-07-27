---
id: replace-words
title: Replace Words
sidebar_label: 648-Replace Words
tags:
  - Trie
  - Hash Table
  - String Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Replace Words problem on LeetCode."
sidebar_position: 3
---

## Problem Description

In English, we have a concept called a root, which can be followed by some other word to form another longer word - let's call this word a derivative. For example, when the root "help" is followed by the word "ful," we can form a derivative "helpful."

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

### Examples

**Example 1:**

```
Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
```

**Example 2:**

```
Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
```

### Constraints

- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 100`
- `dictionary[i]` consists of only lowercase letters.
- `1 <= sentence.length <= 10^6`
- `sentence` consists of only lowercase letters and spaces.
- The number of words in `sentence` is in the range [1, 1000].
- The length of each word in `sentence` is in the range [1, 1000].
- Every two consecutive words in `sentence` will be separated by exactly one space.
- `sentence` does not have leading or trailing spaces.

---

## Solution for Replace Words Problem

To solve this problem, we need to efficiently replace the derivatives in the sentence with their respective roots from the dictionary. We can approach this problem using a Trie data structure for efficient prefix matching.

### Approach: Trie Data Structure

1. **Build the Trie:**
   - Insert all the roots from the dictionary into a Trie.
   - Each node in the Trie represents a character, and the path from the root to any node represents a prefix of one or more roots.

2. **Replace Derivatives:**
   - For each word in the sentence, traverse the Trie to find the shortest prefix (root).
   - If found, replace the word with the root; otherwise, keep the word as is.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    string word = "";
};

class Trie {
public:
    TrieNode* root;
    
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->word = word;
    }
    
    string searchRoot(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                return word;
            }
            node = node->children[c];
            if (!node->word.empty()) {
                return node->word;
            }
        }
        return word;
    }
};

class Solution {
public:
    string replaceWords(vector<string>& dictionary, string sentence) {
        Trie trie;
        for (string root : dictionary) {
            trie.insert(root);
        }
        
        stringstream ss(sentence);
        string word;
        string result;
        
        while (ss >> word) {
            if (!result.empty()) result += " ";
            result += trie.searchRoot(word);
        }
        
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    String word = "";
}

class Trie {
    TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieNode());
            node = node.children.get(c);
        }
        node.word = word;
    }
    
    public String searchRoot(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return word;
            }
            node = node.children.get(c);
            if (!node.word.isEmpty()) {
                return node.word;
            }
        }
        return word;
    }
}

class Solution {
    public String replaceWords(List<String> dictionary, String sentence) {
        Trie trie = new Trie();
        for (String root : dictionary) {
            trie.insert(root);
        }
        
        String[] words = sentence.split(" ");
        StringBuilder result = new StringBuilder();
        
        for (String word : words) {
            if (result.length() > 0) {
                result.append(" ");
            }
            result.append(trie.searchRoot(word));
        }
        
        return result.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = ""

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.word = word
    
    def searchRoot(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return word
            node = node.children[char]
            if node.word:
                return node.word
        return word

class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        trie = Trie()
        for root in dictionary:
            trie.insert(root)
        
        words = sentence.split()
        for i in range(len(words)):
            words[i] = trie.searchRoot(words[i])
        
        return ' '.join(words)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(N + L)$, where `N` is the total number of characters in the dictionary and `L` is the length of the sentence.
- **Space Complexity**: $O(N)$, where `N` is the total number of characters in the dictionary.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
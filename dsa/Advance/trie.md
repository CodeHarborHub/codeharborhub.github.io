---
id: 02-Trie
title: Introduction to Trie
sidebar_label: Trie
tags:
  - dsa
  - data-structures
  - binary-tree
  - intermediate
  - javascript
  - python
  - c++
  - java
  - programming
  - tutorial
sidebar_position: 2
---

# Trie Data Structure and Algorithms

## Introduction

A Trie, also known as a prefix tree, is a type of search tree that is used to store a dynamic set of strings. The name "Trie" comes from the word "retrieval" as they are used to retrieve a key in a dataset of strings. Tries are particularly useful for tasks involving a large set of strings, such as dictionary words or contact lists.

## Basic Structure

A Trie is a tree-like data structure where each node represents a single character of a string. The root node is associated with an empty string. Each subsequent node represents the next character of the inserted string. Nodes that share a common prefix share the same path from the root.

### Example

```
          root
         /  |  \
        t   b   c
       /|    \   \
      h o     a   a
     /   \     \   \
    e     r     t   r

/ \ \
 r k t
```

In the example above, the Trie stores the words "the", "their", "there", "bat", "cat", and "cart".

## Operations

### Insertion

To insert a word into a Trie, we start at the root node and follow the path corresponding to the characters in the word. If a node for a character does not exist, we create a new node. After inserting all characters, we mark the last node as the end of a word.

### Search

To search for a word in a Trie, we follow the path corresponding to the characters in the word starting from the root. If we can follow the path for all characters and reach a node marked as the end of a word, the word exists in the Trie.

### Deletion

To delete a word from a Trie, we first ensure the word exists. If it does, we remove the nodes corresponding to the word's characters, starting from the last character and moving towards the root. If removing a node would break the path for another word, we stop the deletion process for that node.

### Prefix Search

A Trie can efficiently find all words with a given prefix. By following the path corresponding to the prefix characters, we can reach a node where all the sub-nodes form words with the given prefix.

## Applications

- **Autocomplete**: Tries are used to provide suggestions in search engines and text editors.
- **Spell Checker**: Tries store a large dictionary of words for quick lookup and suggestions.
- **IP Routing**: In networking, Tries can be used to store routing tables.
- **Genome Analysis**: Tries can store and search DNA sequences efficiently.

## Advantages and Disadvantages

### Advantages

- **Fast Lookups**: O(n) complexity for search, insertion, and deletion where n is the length of the word.
- **Prefix Search**: Efficiently find all words with a given prefix.
- **Memory Efficiency**: Space optimization for storing keys with common prefixes.

### Disadvantages

- **Space Complexity**: Requires more memory compared to some other data structures, especially for a sparse dataset.
- **Implementation Complexity**: More complex to implement than basic data structures like arrays or linked lists.

## Complexity Analysis

- **Insertion**: O(n), where n is the length of the word.
- **Search**: O(n), where n is the length of the word.
- **Deletion**: O(n), where n is the length of the word.
- **Space Complexity**: O(ALPHABET*SIZE * n \_ m), where n is the number of keys and m is the average key length.

## Example Implementation in Python

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end_of_word = True

    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end_of_word

    def delete(self, word):
        def _delete(node, word, depth):
            if not node:
                return False
            if depth == len(word):
                if node.is_end_of_word:
                    node.is_end_of_word = False
                return len(node.children) == 0
            char = word[depth]
            if char in node.children:
                should_delete = _delete(node.children[char], word, depth + 1)
                if should_delete:
                    del node.children[char]
                    return len(node.children) == 0
            return False
        _delete(self.root, word, 0)

    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
```

## References

1.  GeeksforGeeks - Trie
2.  Wikipedia - Trie
3.  TutorialsPoint - Trie

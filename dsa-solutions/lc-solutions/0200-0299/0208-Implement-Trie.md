---
id: Implement-Trie
title: Implement Trie
sidebar_label: 0208 Implement-Trie
tags:
  - Trie
  - java
  - python
  - c++
  - Recursion
description: "This document provides a solution to the Implementation of Trie."
---

## Problem Statement

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

1.  Trie() Initializes the trie object.

2.  void insert(String word) Inserts the string word into the trie.

3.  boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.

4.  boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

### Example 1:

Input:
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation

```
    Trie trie = new Trie();

    trie.insert("apple");
    trie.search("apple");   // return True
    trie.search("app");     // return False
    trie.startsWith("app"); // return True
    trie.insert("app");
    trie.search("app");     // return True
```

## Solutions

    A Trie prefix tree is a tree data structure which is used to store the strings. Each node in the Trie represents a character of the string and stores the boolean value to indicate whether it is the end of a word. The Trie tree is used to find all the possible words by traversing all the nodes of the tree. Insertion in the Trie tree is performed by iterating each character of the string and checking if the character is already present in the Trie tree. If it is present, then move to the corresponding node of that character, otherwise create a new node and connect it with the Trie tree.

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <iostream>
      #include <string>

      class TrieNode {
      public:
          TrieNode *child[26];
          bool isWord;
          TrieNode() {
              isWord = false;
              for (auto &a : child) a = nullptr;
          }
      };

      class Trie {
          TrieNode* root;
      public:
          Trie() {
              root = new TrieNode();
          }
          void insert(std::string s) {
              TrieNode *p = root;
              for (auto &a : s) {
                  int i = a - 'a';
                  if (!p->child[i]) p->child[i] = new TrieNode();
                  p = p->child[i];
              }
              p->isWord = true;
          }
          bool search(std::string key, bool prefix=false) {
              TrieNode *p = root;
              for (auto &a : key) {
                  int i = a - 'a';
                  if (!p->child[i]) return false;
                  p = p->child[i];
              }
              if (prefix == false) return p->isWord;
              return true;
          }
          bool startsWith(std::string prefix) {
              return search(prefix, true);
          }
      };

      // Driver code
      int main() {
          Trie trie;
          trie.insert("apple");
          std::cout << trie.search("apple") << "\n";   // returns true
          std::cout << trie.search("app") << "\n";     // returns false
          std::cout << trie.startsWith("app") << "\n"; // returns true
          trie.insert("app");
          std::cout << trie.search("app") << "\n";     // returns true
          return 0;
      }
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      class TrieNode {
          TrieNode[] child;
          boolean isWord;

          public TrieNode() {
              child = new TrieNode[26];
              isWord = false;
              for (int i = 0; i < 26; i++) {
                  child[i] = null;
              }
          }
      }

      class Trie {
          TrieNode root;

          public Trie() {
              root = new TrieNode();
          }

          public void insert(String s) {
              TrieNode p = root;
              for (char c : s.toCharArray()) {
                  int i = c - 'a';
                  if (p.child[i] == null) p.child[i] = new TrieNode();
                  p = p.child[i];
              }
              p.isWord = true;
          }

          public boolean search(String key, boolean prefix) {
              TrieNode p = root;
              for (char c : key.toCharArray()) {
                  int i = c - 'a';
                  if (p.child[i] == null) return false;
                  p = p.child[i];
              }
              if (!prefix) return p.isWord;
              return true;
          }

          public boolean startsWith(String prefix) {
              return search(prefix, true);
          }

          public static void main(String[] args) {
              Trie trie = new Trie();
              trie.insert("apple");
              System.out.println(trie.search("apple"));   // returns true
              System.out.println(trie.search("app"));     // returns false
              System.out.println(trie.startsWith("app")); // returns true
              trie.insert("app");
              System.out.println(trie.search("app"));     // returns true
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class TrieNode:
          def __init__(self):
              self.child = [None] * 26
              self.isWord = False

      class Trie:
          def __init__(self):
              self.root = TrieNode()

          def insert(self, s: str) -> None:
              p = self.root
              for a in s:
                  i = ord(a) - ord('a')
                  if not p.child[i]:
                      p.child[i] = TrieNode()
                  p = p.child[i]
              p.isWord = True

          def search(self, key: str, prefix: bool = False) -> bool:
              p = self.root
              for a in key:
                  i = ord(a) - ord('a')
                  if not p.child[i]:
                      return False
                  p = p.child[i]
              if not prefix:
                  return p.isWord
              return True

          def startsWith(self, prefix: str) -> bool:
              return self.search(prefix, True)

      # Driver code
      if __name__ == "__main__":
          trie = Trie()
          trie.insert("apple")
          print(trie.search("apple"))   # returns True
          print(trie.search("app"))     # returns False
          print(trie.startsWith("app")) # returns True
          trie.insert("app")
          print(trie.search("app"))     # returns True
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <stdbool.h>

      // Definition for TrieNode
      typedef struct TrieNode {
          struct TrieNode* child[26];
          bool isWord;
      } TrieNode;

      // Function to create a new TrieNode
      TrieNode* createTrieNode() {
          TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
          node->isWord = false;
          for (int i = 0; i < 26; i++) {
              node->child[i] = NULL;
          }
          return node;
      }

      typedef struct Trie {
          TrieNode* root;
      } Trie;

      // Function to create a new Trie
      Trie* createTrie() {
          Trie* trie = (Trie*)malloc(sizeof(Trie));
          trie->root = createTrieNode();
          return trie;
      }

      // Function to insert a word into the Trie
      void insert(Trie* trie, char* s) {
          TrieNode* p = trie->root;
          while (*s) {
              int i = *s - 'a';
              if (!p->child[i]) p->child[i] = createTrieNode();
              p = p->child[i];
              s++;
          }
          p->isWord = true;
      }

      // Function to search for a word or prefix in the Trie
      bool search(Trie* trie, char* key, bool prefix) {
          TrieNode* p = trie->root;
          while (*key) {
              int i = *key - 'a';
              if (!p->child[i]) return false;
              p = p->child[i];
              key++;
          }
          if (!prefix) return p->isWord;
          return true;
      }

      // Function to check if a prefix exists in the Trie
      bool startsWith(Trie* trie, char* prefix) {
          return search(trie, prefix, true);
      }

      // Driver code
      int main() {
          Trie* trie = createTrie();
          insert(trie, "apple");
          printf("%d\n", search(trie, "apple", false));   // returns 1 (true)
          printf("%d\n", search(trie, "app", false));     // returns 0 (false)
          printf("%d\n", startsWith(trie, "app"));        // returns 1 (true)
          insert(trie, "app");
          printf("%d\n", search(trie, "app", false));     // returns 1 (true)
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Video Lecture:

<LiteYouTubeEmbed
    id="YXefcFMpemo"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub Implement Trie Video"
    poster="maxresdefault"
    webp />

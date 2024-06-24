---
id: word-search-II
title: Word Search II
sidebar_label: 0212-word-search-ii
tags:
 - Array
 - String
 - Backtracking
 - Trie
 - Matrix
 - C++
 - Java
 - Python
description: "This document provides a solution to the Word Search II problem, where we need to return all words on the board, given an mXn board of characters and a list of strings words."
---

## Problem

Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

### Examples

**Example 1:**

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

**Example 2:**

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 12`
- `board[i][j]` is a lowercase English letter.
- `1 <= words.length <= 3 * 104`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters.
- All the strings of `words` are unique.

### Approach

The approach is very straightforward. After getting familiarized with trie data structure after you watch the above playlist, you will find implementing a trie, a very easy task. Hence let’s discuss the extra logic that comes into the picture here. 

After you insert all the words into the trie, start doing a DFS at each position in the grid, standing at the root of the trie. At each step, check whether there exists a node attached to the alphabet corresponding to the one present in the grid. If yes, proceed to that particular node and in the grid, go to that particular alphabet cell. At each step, check whether the flag of that node is set to true or not. If it is true, then you know that you have reached the end of that particular word of the ‘words’ array. String ‘s’ will keep track of this string and it will be inserted into your ‘ans’ array. Array simply refers to vector, the dynamic array in C++. 

This solution also employs a backtracking technique because you make a cell ‘*’ once you go to that so that the same character doesn’t repeat in the same word again and this change has to be reverted back once we have checked for that word so that you are not missing out on finding other words that are possibly associated with these changed characters. Also, it is not a good practice to modify the given input array when it’s passed by address.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
struct TrieNode {
  vector<shared_ptr<TrieNode>> children;
  const string* word = nullptr;
  TrieNode() : children(26) {}
};

class Solution {
 public:
  vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    vector<string> ans;

    for (const string& word : words)
      insert(word);

    for (int i = 0; i < board.size(); ++i)
      for (int j = 0; j < board[0].size(); ++j)
        dfs(board, i, j, root, ans);

    return ans;
  }

 private:
  shared_ptr<TrieNode> root = make_shared<TrieNode>();

  void insert(const string& word) {
    shared_ptr<TrieNode> node = root;
    for (const char c : word) {
      const int i = c - 'a';
      if (node->children[i] == nullptr)
        node->children[i] = make_shared<TrieNode>();
      node = node->children[i];
    }
    node->word = &word;
  }

  void dfs(vector<vector<char>>& board, int i, int j, shared_ptr<TrieNode> node,
           vector<string>& ans) {
    if (i < 0 || i == board.size() || j < 0 || j == board[0].size())
      return;
    if (board[i][j] == '*')
      return;

    const char c = board[i][j];
    shared_ptr<TrieNode> child = node->children[c - 'a'];
    if (child == nullptr)
      return;
    if (child->word != nullptr) {
      ans.push_back(*child->word);
      child->word = nullptr;
    }

    board[i][j] = '*';
    dfs(board, i + 1, j, child, ans);
    dfs(board, i - 1, j, child, ans);
    dfs(board, i, j + 1, child, ans);
    dfs(board, i, j - 1, child, ans);
    board[i][j] = c;
  }
};
```
### Java Solution
```java
class TrieNode {
  public TrieNode[] children = new TrieNode[26];
  public String word;
}

class Solution {
  public List<String> findWords(char[][] board, String[] words) {
    for (final String word : words)
      insert(word);

    List<String> ans = new ArrayList<>();

    for (int i = 0; i < board.length; ++i)
      for (int j = 0; j < board[0].length; ++j)
        dfs(board, i, j, root, ans);

    return ans;
  }

  private TrieNode root = new TrieNode();

  private void insert(final String word) {
    TrieNode node = root;
    for (final char c : word.toCharArray()) {
      final int i = c - 'a';
      if (node.children[i] == null)
        node.children[i] = new TrieNode();
      node = node.children[i];
    }
    node.word = word;
  }

  private void dfs(char[][] board, int i, int j, TrieNode node, List<String> ans) {
    if (i < 0 || i == board.length || j < 0 || j == board[0].length)
      return;
    if (board[i][j] == '*')
      return;

    final char c = board[i][j];
    TrieNode child = node.children[c - 'a'];
    if (child == null)
      return;
    if (child.word != null) {
      ans.add(child.word);
      child.word = null;
    }

    board[i][j] = '*';
    dfs(board, i + 1, j, child, ans);
    dfs(board, i - 1, j, child, ans);
    dfs(board, i, j + 1, child, ans);
    dfs(board, i, j - 1, child, ans);
    board[i][j] = c;
  }
}
```
### Python Solution

```python
class TrieNode:
  def __init__(self):
    self.children: Dict[str, TrieNode] = {}
    self.word: Optional[str] = None


class Solution:
  def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
    m = len(board)
    n = len(board[0])
    ans = []
    root = TrieNode()

    def insert(word: str) -> None:
      node = root
      for c in word:
        node = node.children.setdefault(c, TrieNode())
      node.word = word

    for word in words:
      insert(word)

    def dfs(i: int, j: int, node: TrieNode) -> None:
      if i < 0 or i == m or j < 0 or j == n:
        return
      if board[i][j] == '*':
        return

      c = board[i][j]
      if c not in node.children:
        return

      child = node.children[c]
      if child.word:
        ans.append(child.word)
        child.word = None

      board[i][j] = '*'
      dfs(i + 1, j, child)
      dfs(i - 1, j, child)
      dfs(i, j + 1, child)
      dfs(i, j - 1, child)
      board[i][j] = c

    for i in range(m):
      for j in range(n):
        dfs(i, j, root)

    return ans
```
### Complexity Analysis
**Time Complexity:** O(W * L)

>Reason: For each word in words, we insert each character into the Trie. If we assume the average length of a word is L and there are W words, this operation is O(W * L).

**Space Complexity:** O(M * N * M * N)

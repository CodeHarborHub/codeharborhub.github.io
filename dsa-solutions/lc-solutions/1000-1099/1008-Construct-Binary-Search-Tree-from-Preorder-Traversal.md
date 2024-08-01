---
id: construct-binary-search-tree-from-preorder-traversal
title: Construct Binary Search Tree from Preorder Traversal
level: medium
sidebar_label: Construct BST from Preorder
tags:
  - Tree
  - Depth-First Search (DFS)
  - Binary Search Tree (BST)
  - Java
  - Python
  - C++
description: "This document provides solutions for the Construct Binary Search Tree from Preorder Traversal problem."
---

## Problem Statement

Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of `node.left` has a value `< node.val`, and any descendant of `node.right` has a value `> node.val`. Also recall that a preorder traversal displays the value of the `node` first, then traverses `node.left`, then traverses `node.right`.)

**Example 1:**

Input: `preorder = [8,5,1,7,10,12]`

Output: `TreeNode{val: 8, left: TreeNode{val: 5, left: TreeNode{val: 1, left: None, right: None}, right: TreeNode{val: 7, left: None, right: None}}, right: TreeNode{val: 10, left: None, right: TreeNode{val: 12, left: None, right: None}}}`



**Constraints:**

- `1 <= preorder.length <= 100`
- `1 <= preorder[i] <= 10^8`
- The values of `preorder` are distinct.

## Solutions

### Approach

To construct the binary search tree from the given preorder traversal, we can use a recursive approach. Here's how we can achieve this:

1. **Recursive Construction**:
   - Use a recursive function to construct the binary search tree.
   - Keep track of the current index in the `preorder` list.
   - For each node, create a `TreeNode` with the current value.
   - Recursively build the left subtree with values less than the current node's value.
   - Recursively build the right subtree with values greater than the current node's value.

### Java

```java
class Solution {
    int index = 0;
    
    public TreeNode bstFromPreorder(int[] preorder) {
        return buildTree(preorder, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    
    private TreeNode buildTree(int[] preorder, int min, int max) {
        if (index == preorder.length)
            return null;
        
        int val = preorder[index];
        if (val < min || val > max)
            return null;
        
        TreeNode node = new TreeNode(val);
        index++;
        
        node.left = buildTree(preorder, min, val);
        node.right = buildTree(preorder, val, max);
        
        return node;
    }
}
```

### Python

```python
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:
        self.index = 0
        return self.buildTree(preorder, float('-inf'), float('inf'))
    
    def buildTree(self, preorder: List[int], min_val: int, max_val: int) -> Optional[TreeNode]:
        if self.index == len(preorder):
            return None
        
        val = preorder[self.index]
        if val < min_val or val > max_val:
            return None
        
        node = TreeNode(val)
        self.index += 1
        
        node.left = self.buildTree(preorder, min_val, val)
        node.right = self.buildTree(preorder, val, max_val)
        
        return node
```

### C++

```cpp
class Solution {
public:
    TreeNode* bstFromPreorder(vector<int>& preorder) {
        int index = 0;
        return buildTree(preorder, index, INT_MIN, INT_MAX);
    }
    
    TreeNode* buildTree(vector<int>& preorder, int& index, int min_val, int max_val) {
        if (index == preorder.size())
            return nullptr;
        
        int val = preorder[index];
        if (val < min_val || val > max_val)
            return nullptr;
        
        TreeNode* node = new TreeNode(val);
        index++;
        
        node->left = buildTree(preorder, index, min_val, val);
        node->right = buildTree(preorder, index, val, max_val);
        
        return node;
    }
};

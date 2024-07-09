---
id: maximum-difference-between-node-and-ancestor
title: Maximum Difference Between Node and Ancestor
sidebar_label: Maximum Difference Ancestor
tags:
  - Tree
  - Depth-First Search (DFS)
  - Recursion
  - Java
  - Python
  - C++
description: "This document provides solutions for the Maximum Difference Between Node and Ancestor problem."
---

## Problem Statement

Given the root of a binary tree, find the maximum value `V` for which there exist different nodes `A` and `B` where `V = |A.val - B.val|` and `A` is an ancestor of `B`.

A node A is an ancestor of B if either: A is an ancestor of B or if the given B is an ancestor of A.

**Example  TreeNode root =
     
  # Example


Here's an example solution for LeetCode problem 1026, "Maximum Difference Between Node and Ancestor":

### Problem Statement

Given the root of a binary tree, find the maximum value `V` for which there exist different nodes `A` and `B` where `V = |A.val - B.val|` and `A` is an ancestor of `B`.

A node A is an ancestor of B if there exists a path from A to B (including A and B themselves).

### Example

For example, consider the following binary tree:

```
    8
   / \
  3   10
 / \    \
1   6    14
   / \   /
  4   7 13
```

The maximum difference between a node and its ancestor in this tree is `7`, which occurs between node `1` and node `8` (or node `10`).

### Solutions

#### Approach: Depth-First Search (DFS)

To solve this problem, we can use a depth-first search (DFS) approach to track the minimum and maximum values encountered on the path from the root to each node. Here's how the solution can be implemented in Java, Python, and C++:

### Java

```java
class Solution {
    int maxDifference = 0;
    
    public int maxAncestorDiff(TreeNode root) {
        dfs(root, root.val, root.val);
        return maxDifference;
    }
    
    private void dfs(TreeNode node, int minAncestor, int maxAncestor) {
        if (node == null) return;
        
        int currentDiff = Math.max(Math.abs(node.val - minAncestor), Math.abs(node.val - maxAncestor));
        maxDifference = Math.max(maxDifference, currentDiff);
        
        minAncestor = Math.min(minAncestor, node.val);
        maxAncestor = Math.max(maxAncestor, node.val);
        
        dfs(node.left, minAncestor, maxAncestor);
        dfs(node.right, minAncestor, maxAncestor);
    }
}
```

### Python

```python
class Solution:
    def maxAncestorDiff(self, root: TreeNode) -> int:
        self.max_diff = 0
        
        def dfs(node, min_ancestor, max_ancestor):
            if not node:
                return
            
            current_diff = max(abs(node.val - min_ancestor), abs(node.val - max_ancestor))
            self.max_diff = max(self.max_diff, current_diff)
            
            min_ancestor = min(min_ancestor, node.val)
            max_ancestor = max(max_ancestor, node.val)
            
            dfs(node.left, min_ancestor, max_ancestor)
            dfs(node.right, min_ancestor, max_ancestor)
        
        dfs(root, root.val, root.val)
        return self.max_diff
```

### C++

```cpp
class Solution {
public:
    int maxDifference = 0;
    
    int maxAncestorDiff(TreeNode* root) {
        dfs(root, root->val, root->val);
        return maxDifference;
    }
    
    void dfs(TreeNode* node, int minAncestor, int maxAncestor) {
        if (!node) return;
        
        int currentDiff = max(abs(node->val - minAncestor), abs(node->val - maxAncestor));
        maxDifference = max(maxDifference, currentDiff);
        
        minAncestor = min(minAncestor, node->val);
        maxAncestor = max(maxAncestor, node->val);
        
        dfs(node->left, minAncestor, maxAncestor);
        dfs(node->right, minAncestor, maxAncestor);
    }
};
```
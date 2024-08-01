---
id:  Root-Equals-Sum-of-Children
title:  Root Equals Sum of Children
sidebar_label: 2236- Root Equals Sum of Children
tags:
  - Trees
  - C++
  - Java
  - Python
description: "This document provides a solution for the given problem in c++ , java and python languages"
---

## Problem

You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

 
### Examples

**Example 1:**

Input: root = [10,4,6]
Output: true
Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
10 is equal to 4 + 6, so we return true. 

**Example 2:**

Input: root = [5,3,1]
Output: false
Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
5 is not equal to 3 + 1, so we return false.

### Constraints

- The tree consists only of the root, its left child, and its right child.
- -100 &lt= Node.val &lt= 100


### Approach

1.Traversal: Since the tree structure is fixed with exactly three nodes, we can directly access the root and its children.
2.Comparison: Check if the value of the root node equals the sum of its left and right children.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    bool isSumEqual(TreeNode* root) {
        if (!root) return false;
        int leftVal = (root->left) ? root->left->val : 0;
        int rightVal = (root->right) ? root->right->val : 0;
        return root->val == leftVal + rightVal;
    }
};


```

### Java Solution

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
    }
}

public class Solution {
    public boolean isSumEqual(TreeNode root) {
        if (root == null) return false;
        int leftVal = (root.left != null) ? root.left.val : 0;
        int rightVal = (root.right != null) ? root.right.val : 0;
        return root.val == leftVal + rightVal;
    }
}

```

### Python Solution

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSumEqual(self, root: TreeNode) -> bool:
        if not root:
            return False
        left_val = root.left.val if root.left else 0
        right_val = root.right.val if root.right else 0
        return root.val == left_val + right_val

```

### Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**: for accessing the value of root node and its children , performing comparisons
### Space Complexity: $O(1)$

> **Reason**: we are not using any additional data structures.




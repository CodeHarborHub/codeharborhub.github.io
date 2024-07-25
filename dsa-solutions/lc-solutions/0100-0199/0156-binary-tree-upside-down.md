---
id: binary-tree-upside-down
title: Binary Tree Upside Down
sidebar_label: 0156-Binary Tree Upside Down
tags:
  - Binary Tree
  - Leet code
description: "Solution to leetocde 156"
---

## Problem Description

Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.

### Example:

```
Input: [1,2,3,4,5]

    1
   / \
  2   3
 / \
4   5

Output: return the root of the binary tree [4,5,2,#,#,3,1]

   4
  / \
 5   2
    / \
   3   1
```

### Algorithm

1. **Base Case**: If the root is `None` or the root has no left child, return the root.
2. **Recursive Case**: Recursively process the left child of the root.
3. **Reassign Pointers**: Once you reach the new root, start reassigning the pointers:
   - The left child's left pointer should point to the original root's right child.
   - The left child's right pointer should point to the original root.
4. **Clear Original Pointers**: Set the original root's left and right pointers to `None`.
5. **Return the New Root**: Return the new root of the upside-down tree.

### Python

```python
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def upsideDownBinaryTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None or root.left is None:
            return root
        new_root = self.upsideDownBinaryTree(root.left)
        root.left.right = root
        root.left.left = root.right
        root.left = None
        root.right = None
        return new_root
```

### C++

```cpp
#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    TreeNode* upsideDownBinaryTree(TreeNode* root) {
        if (root == nullptr || root->left == nullptr)
            return root;
        TreeNode* new_root = upsideDownBinaryTree(root->left);
        root->left->right = root;
        root->left->left = root->right;
        root->left = nullptr;
        root->right = nullptr;
        return new_root;
    }
};
```

### Java

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class Solution {
    public TreeNode upsideDownBinaryTree(TreeNode root) {
        if (root == null || root.left == null) return root;
        TreeNode newRoot = upsideDownBinaryTree(root.left);
        root.left.left = root.right;
        root.left.right = root;
        root.left = null;
        root.right = null;
        return newRoot;
    }
}
```

### JavaScript

```javascript
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var upsideDownBinaryTree = function (root) {
  if (root === null || root.left === null) return root;
  let newRoot = upsideDownBinaryTree(root.left);
  root.left.left = root.right;
  root.left.right = root;
  root.left = null;
  root.right = null;
  return newRoot;
};
```

---
id: invert-binary-search-tree
title: Invert Binary Search Tree
sidebar_label: 0226 Invert Binary Search Tree
tags:
  - tree
  - recursion
  - LeetCode
  - C++
description: "This is a solution to the Invert Binary Search Tree problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, invert the tree, and return its root.

### Examples

**Example 1:**

```

Input: root = [4,2,7,1,3,6,9]
Output:  [4,7,2,9,6,3,1]
```

**Example 2:**

```
Input: root = [2,1,3]
Output: [2,3,1]
```

```
Input: root =  []
Output:  []
```

### Constraints

- The number of nodes in the tree is in the range $[0, 100]$.
- $-100 \leq \text{Node.val} \leq 100$

### Approach 

To solve this problem(invert BST) we will use recursion(call function repeatedly) and  temporary tree node(t) for swapping.

#### Code in C++

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
   void invert(TreeNode* root){
        if(root==NULL){
            return;
        }
        TreeNode* t;
        t=root->right;
        root->right=root->left;
        root->left=t;
        invert(root->left);
        invert(root->right);
    }
    TreeNode* invertTree(TreeNode* root) {
        invert(root);
        return root;

    }
};
```



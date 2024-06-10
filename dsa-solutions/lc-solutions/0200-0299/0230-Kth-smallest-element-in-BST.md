---
id: kth-smallest-element-in-binary-search-tree
title: Kth Smallest Element in Binary Search Tree
sidebar_label: 0230 Kth Smallest Element in Binary Search Tree
tags:
  - tree
  - tree traversal
  - LeetCode
  - C++
description: "This is a solution to theKth Smallest Element in Binary Search Tree problem on LeetCode."
---

## Problem Description

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

### Examples

**Example 1:**

```

Input: root = [3,1,4,null,2], k = 1
Output:  1
```

**Example 2:**

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

### Constraints

- The number of nodes in the tree is n.
- $1 \leq \text{k} \leq \text{n} \leq 10^4$
- $1 \leq k \leq n \leq 10^4$

### Approach 

To solve this problem(Kth smallest element in BST) we will do the inorder traversal of the tree as we know in a binary search tree the array of elements which we get after inorder traversal they will be in sorted order so the kth smallest element in the given BST  will be  the kth index(1-indexed) element  in inorder traversal of the BST.

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
    // Function for inorder traversal
    void inorder(TreeNode* root,vector<int>&a){
        if(root==NULL){
            return;
        }
        inorder(root->left,a);
        a.push_back(root->val);
        inorder(root->right,a);
    }
    // Function to get the kth smallest element
    int kthSmallest(TreeNode* root, int k) {
        vector<int>a;
        inorder(root,a);
        return a[k-1]; // as 0-indexed 
    }
};
```



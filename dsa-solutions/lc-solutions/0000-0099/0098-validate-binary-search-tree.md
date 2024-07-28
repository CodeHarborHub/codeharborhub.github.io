---
id: validate-binary-search-tree
title: Validate Binary Search Tree
sidebar_label: 0098 Validate Binary Search Tree
tags:
  - tree
  - tree traversal
  - LeetCode
  - C++
description: "This is a solution to the Validate Binary Search Tree problem on LeetCode."

---

## Problem Description

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

### Examples

**Example 1:**

```

Input: root = [2,1,3]
Output:  true
```

**Example 2:**

```
Input: root = [5,1,4,null,null,3,6]
Output: false
```

### Constraints

- The number of nodes in the tree is in the range $[1, 10^4]$.
- $-2^(31) \leq \text{Node.val} \leq 2^(31) - 1$.

### Approach 

To solve this problem(valid BST) we will do the inorder traversal of the tree as we know in a binary search tree the array of elements which we get after inorder traversal they will be in sorted order so after the inorder traversal we will just have check if the inorder traversal of the given binary search is in sorted order or not.

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
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    // Function for inorder traversal 
    void inorder(TreeNode* root , vector<int>&a){
        if(root==NULL){
            return;
        }
        inorder(root->left,a);
        a.push_back(root->val);
        inorder(root->right,a);
    }
    bool isValidBST(TreeNode* root) {
        vector<int>a,b; 
        inorder(root,a);
        b=a;
        for(int i=1;i<a.size();i++){
            if(a[i]==a[i-1]){ // it helps us to check that elements in given tree is not equal for valid BST
                return false;
            }
        }
        sort(b.begin(),b.end());
        for(int i=0;i<b.size();i++){
            if(b[i]!=a[i]){
                return false;
            }
        }
        return true;
    }
};
```



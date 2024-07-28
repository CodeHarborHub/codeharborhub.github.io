---
id: recover-binary-search-tree
title: Recover Binary Search Tree
sidebar_label: 0099 Recover Binary Search Tree
tags:
  - tree
  - recursion
  - LeetCode
  - C++
description: "This is a solution to the Recover Binary Search Tree problem on LeetCode."

---

## Problem Description

You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

### Examples

**Example 1:**

```

Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
```

**Example 2:**

```
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
```



### Constraints

- The number of nodes in the tree is in the range $[2, 1000]$.
- $-2^(31) \leq \text{Node.val} \leq 2^(31) - 1$.
- Solve in O(1)space.
### Approach 

To solve this problem(recover BST) as we know that the inorder traversal of binary search tree give us sorted array so when we traverse the array from left to right we will get to know that at some node the previous value will be greater than current value and that will be our first point were order is disturbed store current and its previous node so that we can counter if its an adjacent swap and if the order is disturbed for the second time, just store that node.After all this just swap the first and last value as you can in the below given code.

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
    void recover(TreeNode* root, TreeNode*& prev, TreeNode*& first,
                 TreeNode*& last) {
        if (root == NULL) {
            return;
        }
        recover(root->left, prev, first, last);
        if (prev != NULL) {
            if (prev->val > root->val) {
                if (first == NULL) {  // storing where the order is disturbed
                    first = prev;
                }

                last = root;
            }
        }
        prev = root;
        recover(root->right, prev, first, last);
    }
    void recoverTree(TreeNode* root) {
        TreeNode *prev = NULL, *first = NULL, *last = NULL;
        recover(root, prev, first, last);
        swap(first->val, last->val); //swapping after we get final values where order is distrubed
        return;
    }
};
```



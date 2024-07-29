---
id: binary-tree-inorder-traversal
title: Binary Tree Inorder Traversal
difficulty: Easy
sidebar_label: 0094-Binary Tree Inorder Traversal
tags:
  - Binary Tree
  - Inorder
  - Traversal
  - LeetCode Easy
---

## Problem

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Binary Tree Inorder Traversal ](https://leetcode.com/problems/binary-tree-inorder-traversal/) | [Binary Tree Inorder Traversal Solution on LeetCode](https://leetcode.com/problems/solutions/) |  [Khushi Kalra](https://leetcode.com/u/abckhush/) |

## Problem Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.
### Example
**Example 1:**
```plaintext
Input: root = [1,null,2,3]
Output: [1,3,2]
```
**Example 2:**
```plaintext
Input: root = []
Output: []
```
**Example 3:**
```plaintext
Input: root = [1]
Output: [1]
```

### Constraints
1. The number of nodes in the tree is in the range `[0, 100]`.
2. `-100 <= Node.val <= 100`
 
## Approach: Recursion
The problem is to perform an inorder traversal of a binary tree and return the values in a list. An inorder traversal visits the nodes of the binary tree in the following order: left subtree, root node, right subtree.

We use a helper function traversal to perform the inorder traversal recursively. The main function inorderTraversal initializes the result list and calls the helper function.

1. Initialization:
- Create an empty vector inOrder to store the result of the inorder traversal.

2. Recursive Traversal:
- Define a helper function traversal that takes a TreeNode* and a reference to the inOrder vector.
- If the current node (root) is NULL, return immediately (base case).
- Recursively call traversal on the left subtree (root->left).
- Push the value of the current node (root->val) to the inOrder vector.
- Recursively call traversal on the right subtree (root->right).

3. Main Function:
- In the inorderTraversal function, create an empty vector inOrder.
- Call the traversal function with the root of the binary tree and the inOrder vector.
- Return the inOrder vector containing the inorder traversal result.

## Complexity
1. Time Complexity : $$O(h)$$
2. Space Complexity : $$O(n)$$

## Code

### C++
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
    void traversal(TreeNode* root, vector<int>&inOrder){
        if(root==NULL) return;
        traversal(root->left, inOrder);
        inOrder.push_back(root->val);
        traversal(root->right, inOrder);
    }
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int>inOrder;
        traversal(root, inOrder);
        return inOrder;
    }
};
```

### Python
```python
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def traversal(self, root, inOrder):
        if root is None:
            return
        self.traversal(root.left, inOrder)
        inOrder.append(root.val)
        self.traversal(root.right, inOrder)
    
    def inorderTraversal(self, root):
        inOrder = []
        self.traversal(root, inOrder)
        return inOrder
```



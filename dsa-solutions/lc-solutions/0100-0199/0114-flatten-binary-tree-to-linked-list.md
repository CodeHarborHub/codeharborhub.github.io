---
id: flatten-binary-tree-to-linked-list
title: Flatten Binary Tree To Linked List
sidebar_label: 0114 Flatten Binary Tree To Linked List
tags:
  - tree
  - tree traversal
  - Linked List
  - LeetCode
  - C++
description: "This is a solution to the Flatten Binary Tree To Linked List problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
- The "linked list" should be in the same order as a pre-order traversal of the binary tree.

### Examples

**Example 1:**

```

Input: root  = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
```

**Example 2:**

```
Input: root  = []
Output: []
```

**Example 2:**

```
Input: root = [0]
Output: [0]
```

### Constraints

- The number of nodes in the tree is in the range $[0, 2000]$.
- $-100 \leq \text{Node.val} \leq 100$.

### Approach 

To solve this problem(flatten binary tree to linked list) first we will store binary tree nodes value in a vector using preorder traversal then we will convert this vector into another tree (simply linked list) which has no left child only right child as given in question description or we can also use recursion as used in java solution given below.

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
    
    //Funtion to store tree node value in vector using preorder traversal
    void preorder(TreeNode* root, vector<int>& a) {
        if (root == NULL) {
            return;
        }
        a.push_back(root->val);
        preorder(root->left, a);
        preorder(root->right, a);
    }

    void flatten(TreeNode* root) { // to flatten binary tree to linked list
        if (root == NULL) {
            return;
        }
        vector<int> a;
        preorder(root, a);
        TreeNode* temp = root;
        root->left = NULL;
        int i = 1;
        while (i < a.size()) {
            temp->right = new TreeNode(a[i++]);
            temp = temp->right;
        }
    }
};
```


#### Code in Java

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public void flatten(TreeNode root) {
        if(root==null ||root.left==null && root.right==null)
            return;
        else{
            if(root.left!=null){
                TreeNode temp=root.right;
                root.right=root.left;
                root.left=null;
                TreeNode temp1=root.right;
                while(temp1.right!=null)
                    temp1=temp1.right;
                temp1.right=temp;
            }
            flatten(root.right);
        }
    }
}

```


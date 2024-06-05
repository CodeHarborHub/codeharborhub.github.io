---
id: Check-for-balanced-tree
title: Check for Balanced Tree (Geeks for Geeks)
sidebar_label: Check for Balanced Tree 
tags:
  - Intermediate
  - Tree
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Check for Balanced Tree problem on Geeks for Geeks."
---

## Problem Description

Given a binary tree, determine if it is height-balanced. A binary tree is height-balanced if the left and right subtrees of every node differ in height by no more than 1.

## Examples

**Example 1:**
```
Input:
      1
     / \
    2   3
   / \
  4   5
Output: Yes
```

**Example 2:**
```
Input:
        10
       /  \
      20   30
     / \
    40  60
         \
         70
Output: No
```

## Your Task

Your task is to complete the function `isBalanced()`, which takes the root of the binary tree as its argument and returns a boolean value indicating whether the tree is balanced or not.

Expected Time Complexity: $O(N)$.
Expected Auxiliary Space: $O(h)$, where h is the height of the tree.

## Constraints

- $1 <= number of nodes <= 10^5$
- $1 <= data of node <= 10^5$

## Problem Explanation

Here's the step-by-step breakdown of the checking process:

1. **Recursive depth calculation**: Create a helper function to calculate the depth of each subtree.
2. **Height difference check**: Check the difference in height between the left and right subtrees.
3. **Recursive balance check**: Recursively check if each subtree is balanced.
4. **Return result**: Return True if the tree is balanced, otherwise False.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```py
  class TreeNode:
      def __init__(self, val=0, left=None, right=None):
          self.val = val
          self.left = left
          self.right = right

  def isBalanced(root):
      def check(root):
          if not root:
              return 0, True
          left_height, left_balanced = check(root.left)
          right_height, right_balanced = check(root.right)
          balanced = left_balanced and right_balanced and abs(left_height - right_height) <= 1
          return max(left_height, right_height) + 1, balanced
      
      return check(root)[1]
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  struct TreeNode {
      int val;
      TreeNode *left;
      TreeNode *right;
      TreeNode(int x) : val(x), left(NULL), right(NULL) {}
  };

  class Solution {
  public:
      bool isBalanced(TreeNode* root) {
          return checkHeight(root) != -1;
      }
      
      int checkHeight(TreeNode* root) {
          if (root == NULL) return 0;
          
          int leftHeight = checkHeight(root->left);
          if (leftHeight == -1) return -1;
          
          int rightHeight = checkHeight(root->right);
          if (rightHeight == -1) return -1;
          
          if (abs(leftHeight - rightHeight) > 1) return -1;
          
          return max(leftHeight, rightHeight) + 1;
      }
  };
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Recursive depth calculation**: A helper function calculates the height of the subtree rooted at each node.
2. **Height difference check**: For each node, the function checks if the height difference between the left and right subtrees is more than 1.
3. **Recursive balance check**: The function is recursively called on each subtree to ensure both are balanced.
4. **Return result**: The function returns True if all nodes are balanced, otherwise False.

## Time Complexity

$O(N)$, where N is the number of nodes in the tree. The function visits each node once.

## Space Complexity

$O(h)$, where h is the height of the tree. This is due to the recursive stack space used during the depth-first traversal.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/balanced-binary-tree/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
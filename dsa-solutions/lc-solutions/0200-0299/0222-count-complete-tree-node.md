---
id: count-complete-tree-nodes
title: Count Complete tree nodes
sidebar_label: 0222 Count complete tree nodes
tags:
  - tree
  - Binary search
description: "This is a solution to the Count Complete tree nodes"
---

## Problem Description

Given the `root` of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than `O(n)` time complexity.


### Examples
**Example 1:**

```

Input:root = [1,2,3,4,5,6]
Output: 6
```

**Example 2:**

```
Input: root = []
Output: 0
```

**Example 3**
```
Input: root =  [1]
Output: 1
```

### Constraints

- The number of nodes in the tree is in the range` [0, 5 * 104]`.
- `0 <= Node.val <= 5 * 104`
- The tree is guaranteed to be complete.

### Approach 

- Get the 'left depth' of both left and right subtrees
- If they are the same, then count the left subtree with simple math, and recursively call it on the right subtree
- Otherwise, count the right subtree with simple math, and recursively call it on the left subtree.


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
    int findDepthLeft(TreeNode* root){
        if (root == NULL) return 0;
        return 1 + findDepthLeft(root->left);
    }


    int countNodes(TreeNode* root) {
        if (root == NULL) return 0;
        int depth_L = findDepthLeft(root->left);
        int depth_R = findDepthLeft(root->right);

        // Either left tree is full (largest in row continues to left)
        // Or right tree is full (full row, largest ended in next row on left)
        // Counting each level gives us: 1 + 2 + 4 ... + 2^(depth_R - 1)
        // = 2^depth_R - 1. Since we also need to include this node, it is 2^depth_R
        int counted = pow(2, depth_R);

        if (depth_L == depth_R){
            // 1 + count(depth_L == depth_R) + rest
            return counted + countNodes(root->right);
    
        } else{
            // 1 + count(depth_R) + rest
            return counted + countNodes(root->left);
        }
        
    }
};
```
#### Code in java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
    class Solution {
        public int countNodes(TreeNode root) {
            if (root == null)
                return 0;
            return countNodes(root.left) + countNodes(root.right) + 1;
        }
    }

```

#### Code in python
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        if root.left is None and root.right is None:
            return 1
        elif root.right is None:
            return 2
        left_level = self.level(root.left)
        right_level = self.level(root.right)
        if left_level == right_level:
            return 2 ** left_level + self.countNodes(root.right)
        else:
            return self.countNodes(root.left) + 2 ** right_level

    def level(self, root):
        i = 0
        while root:
            i += 1
            root = root.left
        return i
```



### Complexity analysis
#### Time complexity:
- `O(logn)`. At every step, you are disregarding half the tree. Think about it like this: You never wasted time visiting the nodes in the tree you found to be full, except on the left-most path (negligible). Since you shrink the input by half every time, it is logn.
- Technically, the (negligible) portion would make this algorithm (logn)^2, but practically it makes little difference as it operates similarly to log. You can also optimize this by skipping the branch you already computed and adding the depth, but it would make the solution less readable.

#### Space complexity:
- `O(logn)`, as that is the maximum recursion depth, which is our space usage.

---
id: evaluate-boolean-binary-tree
title: Evaluate Boolean Binary Tree
sidebar_label: 2331-evaluate-boolean-binary-tree
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "Given the root of a full binary tree, evaluate the boolean result based on the given rules."
---

## Problem Description

You are given the root of a full binary tree with the following properties:

- Leaf nodes have either the value `0` or `1`, where `0` represents `False` and `1` represents `True`.
- Non-leaf nodes have either the value `2` or `3`, where `2` represents the boolean `OR` and `3` represents the boolean `AND`.

The evaluation of a node is as follows:

- If the node is a leaf node, the evaluation is the value of the node, i.e., `True` or `False`.
- Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.

Return the boolean result of evaluating the root node.

A full binary tree is a binary tree where each node has either `0` or `2` children. A leaf node is a node that has zero children.

### Examples

**Example 1:**

```
Input: root = [2,1,3,null,null,0,1]  
Output: true  
Explanation: The AND node evaluates to `False AND True = False`. The OR node evaluates to `True OR False = True`. The root node evaluates to `True`, so we return `true`.
```
**Example 2:**
```
Input: root = [0]  
Output: false  
Explanation: The root node is a leaf node and it evaluates to `false`, so we return `false`.
```
### Constraints

- The number of nodes in the tree is in the range `[1, 1000]`.
- `0 <= Node.val <= 3`
- Every node has either `0` or `2` children.
- Leaf nodes have a value of `0` or `1`.
- Non-leaf nodes have a value of `2` or `3`.


## Approach

To evaluate the boolean binary tree, we use a depth-first search (DFS) approach. We recursively evaluate the left and right children of each node and apply the boolean operation represented by the node's value.

### Steps:

1. **Base Case:** If the node is a leaf node (i.e., it has no children), return its boolean value.
2. **Recursive Case:** If the node is not a leaf node:
   - If the node's value is `2`, apply the `OR` operation to the evaluations of its children.
   - If the node's value is `3`, apply the `AND` operation to the evaluations of its children.

### Solution

#### Java Solution

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean evaluateTree(TreeNode root) {
        if (root.left == null && root.right == null) {
            return root.val == 1;
        } else {
            if (root.val == 2) {
                return evaluateTree(root.left) || evaluateTree(root.right);
            } else {
                return evaluateTree(root.left) && evaluateTree(root.right);
            }
        }
    }
}
```

#### C++ Solution

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
    bool evaluateTree(TreeNode* root) {
        if (!root->left && !root->right) {
            return root->val == 1;
        } else {
            if (root->val == 2) {
                return evaluateTree(root->left) || evaluateTree(root->right);
            } else {
                return evaluateTree(root->left) && evaluateTree(root->right);
            }
        }
    }
};
```

#### Python Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def evaluateTree(self, root: TreeNode) -> bool:
        if not root.left and not root.right:
            return root.val == 1
        else:
            if root.val == 2:
                return self.evaluateTree(root.left) or self.evaluateTree(root.right)
            else:
                return self.evaluateTree(root.left) and self.evaluateTree(root.right)
```

### Complexity Analysis

**Time Complexity:** O(n)
> We visit each node exactly once.

**Space Complexity:** O(h)
> The space complexity is determined by the height of the tree, due to the recursion stack.

### References
**LeetCode Problem:** Evaluate Boolean Binary Tree

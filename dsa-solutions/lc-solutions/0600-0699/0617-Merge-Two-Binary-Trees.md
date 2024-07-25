---
id: merge-two-binary-trees
title: Merge Two Binary Trees
sidebar_label: 0617-Merge-Two-Binary-Trees
tags:
- Tree
- Depth-First Search
- Breadth-First Search
description: "Given two binary trees, merge them into a new binary tree by adding the values of overlapping nodes."
---

## Problem

You are given two binary trees `root1` and `root2`. Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

### Examples

**Example 1:**

**Input:** `root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]`  
**Output:** `[3,4,5,5,4,null,7]`

**Example 2:**

**Input:** `root1 = [1], root2 = [1,2]`  
**Output:** `[2,2]`

### Constraints

- The number of nodes in both trees is in the range `[0, 2000]`.
- `-10^4 <= Node.val <= 10^4`

---

## Approach

To solve this problem, we can use a recursive depth-first search (DFS) approach. The idea is to traverse both trees simultaneously and sum the values of overlapping nodes.

### Steps:

1. **Base Case:** If both nodes are `null`, return `null`.
2. If one of the nodes is `null`, return the other node.
3. Create a new tree node with the sum of the values of the overlapping nodes.
4. Recursively merge the left children.
5. Recursively merge the right children.
6. Return the merged tree.

### Solution

#### Java

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
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) {
            return root2;
        }
        if (root2 == null) {
            return root1;
        }
        TreeNode merged = new TreeNode(root1.val + root2.val);
        merged.left = mergeTrees(root1.left, root2.left);
        merged.right = mergeTrees(root1.right, root2.right);
        return merged;
    }
}
```
#### C++

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {
        if (root1 == nullptr) {
            return root2;
        }
        if (root2 == nullptr) {
            return root1;
        }
        TreeNode* merged = new TreeNode(root1->val + root2->val);
        merged->left = mergeTrees(root1->left, root2->left);
        merged->right = mergeTrees(root1->right, root2->right);
        return merged;
    }
};
```

#### Python

```python
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
        if not root1:
            return root2
        if not root2:
            return root1
        merged = TreeNode(root1.val + root2.val)
        merged.left = self.mergeTrees(root1.left, root2.left)
        merged.right = self.mergeTrees(root1.right, root2.right)
        return merged
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: The algorithm visits each node in the tree once, where n is the total number of nodes in both trees combined.

**Space Complexity:** O(h)
>Reason: The space complexity is determined by the height h of the tree due to the recursion stack. In the worst case, the height of the tree is O(n) for a skewed tree, but O(log n) for a balanced tree.

### References
**LeetCode Problem:** Merge Two Binary Trees
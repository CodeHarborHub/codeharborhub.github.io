---
id: lowest-common-ancestor-of-a-binary-tree
title: Lowest Common Ancestor of a Binary Tree
sidebar_label: 0236-Lowest-Common-Ancestor-of-a-Binary-Tree
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree."
---

## Problem

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

### Examples

**Example 1:**

**Input:** `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`  
**Output:** `3`  
**Explanation:** The LCA of nodes 5 and 1 is 3.

**Example 2:**

**Input:** `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4`  
**Output:** `5`  
**Explanation:** The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

**Example 3:**

**Input:** `root = [1,2], p = 1, q = 2`  
**Output:** `1`

### Constraints

- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique.
- `p != q`
- `p` and `q` will exist in the tree.

---

## Approach

To find the lowest common ancestor in a binary tree, we can use a recursive depth-first search (DFS) approach. The idea is to traverse the tree starting from the root. If we find either of the nodes `p` or `q`, we return that node. If both nodes are found in different subtrees of a node, then that node is their lowest common ancestor.

### Steps:

1. **Base Case:** If the current node is `null` or matches `p` or `q`, return the current node.
2. **Recursive Search:**
   - Recursively search the left subtree for `p` and `q`.
   - Recursively search the right subtree for `p` and `q`.
3. **Determine LCA:**
   - If both left and right recursive calls return non-null, the current node is the LCA.
   - If only one of the recursive calls returns non-null, that means both nodes are located in the same subtree, so return the non-null result.

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
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) {
            return root;
        }
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) {
            return root;
        }
        return left != null ? left : right;
    }
}
```
### C++
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
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr || root == p || root == q) {
            return root;
        }
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        if (left != nullptr && right != nullptr) {
            return root;
        }
        return left != nullptr ? left : right;
    }
};
```
### Python
```
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right:
            return root
        return left if left else right
```
### Complexity Analysis
#### Time Complexity: O(n)

**Reason:** The algorithm visits each node in the tree once, where n is the number of nodes in the tree.
Space Complexity: O(h)

**Reason:** The space complexity is determined by the height h of the tree due to the recursion stack. In the worst case, the height of the tree is O(n) for a skewed tree, but O(log n) for a balanced tree.

### References
**LeetCode Problem:** Lowest Common Ancestor of a Binary Tree

**Solution Link:** LCA Solution on LeetCode
**Wikipedia Definition:** Lowest Common Ancestor

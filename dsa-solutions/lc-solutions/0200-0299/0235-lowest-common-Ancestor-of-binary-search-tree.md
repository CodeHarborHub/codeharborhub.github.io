---
id: lowest-common-ancestor-of-a-binary-search-tree.
title: Lowest Common Ancestor of a Binary Search Tree.
sidebar_label: 235-Lowest-Common-Ancestor-of-a-Binary-Search-Tree
tags:
- Binary Search Tree
- Tree
- Depth-First Search
- Binary Tree
description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST."
---

## Problem

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

### Examples

**Example 1:**

![image](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

**Input:** `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8`  
**Output:** `6`  
**Explanation:** The LCA of nodes 2 and 8 is 6.

**Example 2:**

![image](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

**Input:** `root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4`  
**Output:** `2`  
**Explanation:** The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

**Example 3:**

**Input:** `root = [2,1], p = 2, q = 1`  
**Output:** `2`

### Constraints

- The number of nodes in the tree is in the range `[2, 10^5]`.
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique.
- `p != q`
- `p` and `q` will exist in the BST.

---

## Approach

To find the lowest common ancestor in a Binary Search Tree (BST), we can utilize the properties of the BST. The left subtree of a node contains only nodes with values less than the node's value, and the right subtree contains only nodes with values greater than the node's value.

### Steps:

1. **Start from the Root:** Begin the search from the root node of the BST.
2. **Value Comparison:**
   - If both `p` and `q` are smaller than the current node's value, move to the left child.
   - If both `p` and `q` are greater than the current node's value, move to the right child.
   - If `p` and `q` lie on either side of the current node, or one of them is the current node, then the current node is their LCA.

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
        while (root != null) {
            // If both p and q are lesser than root, LCA must be in the left subtree
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            }
            // If both p and q are greater than root, LCA must be in the right subtree
            else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            }
            // If p and q lie on either side of root, or one of them is the root, then root is the LCA
            else {
                return root;
            }
        }
        return null;
    }
}
```
#### CPP
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
        while (root != nullptr) {
            // If both p and q are lesser than root, LCA must be in the left subtree
            if (p->val < root->val && q->val < root->val) {
                root = root->left;
            }
            // If both p and q are greater than root, LCA must be in the right subtree
            else if (p->val > root->val && q->val > root->val) {
                root = root->right;
            }
            // If p and q lie on either side of root, or one of them is the root, then root is the LCA
            else {
                return root;
            }
        }
        return nullptr;
    }
};
```
### Python
```python
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        while root:
            # If both p and q are lesser than root, LCA must be in the left subtree
            if p.val < root.val and q.val < root.val:
                root = root.left
            # If both p and q are greater than root, LCA must be in the right subtree
            elif p.val > root.val and q.val > root.val:
                root = root.right
            # If p and q lie on either side of root, or one of them is the root, then root is the LCA
            else:
                return root
        return None
```    

### Complexity Analysis
#### Time Complexity: O(h)

**Reason**: The algorithm may traverse the height h of the tree. In the worst case, this is O(log n) for a balanced BST and O(n) for a skewed BST.
Space Complexity: O(1)

**Reason**: The algorithm uses constant space.
#### References
**LeetCode Problem** : Lowest Common Ancestor of a Binary Search Tree
**Solution Link**: LCA Solution on LeetCode

**Wikipedia Definition**: Lowest Common Ancestor

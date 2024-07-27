---
id: binary-tree-longest-consecutive-sequence-ii
title: Binary Tree Longest Consecutive Sequence-ii
sidebar_label: 0549-binary-tree-longest-consecutive-sequence-iiQ549-lc
tags:
- Depth-First Search
- Tree
- Binary Tree
description: "This is a solution to binary-tree-longest-consecutive-sequence-ii problem on LeetCode."
---

## Problem Description

Given the `root` of a binary tree, return the length of the `longest consecutive path` in the tree.

A consecutive path is a path where the values of the consecutive nodes in the path differ by one. This path can be either `increasing` or `decreasing`.

  ~ For example, `[1,2,3,4]` and `[4,3,2,1]` are both considered valid, but the path `[1,2,4,3]` is not valid.

On the other hand, the path can be in the` child-Parent-child` order, where not necessarily be `parent-child` order.

### Examples

**Example 1:**

```
Input: root = [1,2,3]
Output: 2
Explanation: The longest consecutive path is [1, 2] or [2, 1].

```

**Example 2:**

```
Input: root = [2,1,3]
Output: 3
Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].

```


### Constraints

- The number of nodes in the tree is in the range `[1, 3 * 104]`.
- `-3 * 10^4 <= Node.val <= 3 * 10^4`

## Solution for Assign Cookies

### Approach:

1- Define a helper function dfs to perform a `depth-first search` on the tree.
2- Handle the base case where the current node is None, returning `[0, 0]`.
3- Initialize incr and decr to `1`, then perform `DFS` on the left and right children.
4- Update `incr` and `decr` based on the values of the left and right children relative to the current node.
5- Update the global ans variable to the maximum of ans and incr `+` `decr - 1`, then return `[incr, decr]`.

## Code in Different Languages

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
    int ans;

    int longestConsecutive(TreeNode* root) {
        ans = 0;
        dfs(root);
        return ans;
    }

    vector<int> dfs(TreeNode* root) {
        if (!root) return {0, 0};
        int incr = 1, decr = 1;
        auto left = dfs(root->left);
        auto right = dfs(root->right);
        if (root->left) {
            if (root->left->val + 1 == root->val) incr = left[0] + 1;
            if (root->left->val - 1 == root->val) decr = left[1] + 1;
        }
        if (root->right) {
            if (root->right->val + 1 == root->val) incr = max(incr, right[0] + 1);
            if (root->right->val - 1 == root->val) decr = max(decr, right[1] + 1);
        }
        ans = max(ans, incr + decr - 1);
        return {incr, decr};
    }
};

```
### Java

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
    private int ans;

    public int longestConsecutive(TreeNode root) {
        ans = 0;
        dfs(root);
        return ans;
    }

    private int[] dfs(TreeNode root) {
        if (root == null) {
            return new int[] {0, 0};
        }
        int incr = 1, decr = 1;
        int[] left = dfs(root.left);
        int[] right = dfs(root.right);
        if (root.left != null) {
            if (root.left.val + 1 == root.val) {
                incr = left[0] + 1;
            }
            if (root.left.val - 1 == root.val) {
                decr = left[1] + 1;
            }
        }
        if (root.right != null) {
            if (root.right.val + 1 == root.val) {
                incr = Math.max(incr, right[0] + 1);
            }
            if (root.right.val - 1 == root.val) {
                decr = Math.max(decr, right[1] + 1);
            }
        }
        ans = Math.max(ans, incr + decr - 1);
        return new int[] {incr, decr};
    }
}

```

### Python

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestConsecutive(self, root: TreeNode) -> int:
        def dfs(root):
            if root is None:
                return [0, 0]
            nonlocal ans
            incr = decr = 1
            i1, d1 = dfs(root.left)
            i2, d2 = dfs(root.right)
            if root.left:
                if root.left.val + 1 == root.val:
                    incr = i1 + 1
                if root.left.val - 1 == root.val:
                    decr = d1 + 1
            if root.right:
                if root.right.val + 1 == root.val:
                    incr = max(incr, i2 + 1)
                if root.right.val - 1 == root.val:
                    decr = max(decr, d2 + 1)
            ans = max(ans, incr + decr - 1)
            return [incr, decr]

        ans = 0
        dfs(root)
        return ans
```

## Complexity Analysis

### Time Complexity: O(n)
**Reason**: The algorithm performs a depth-first search (DFS) on the binary tree. In a DFS, each node in the tree is visited exactly once.

### Space Complexity: O(h)
**Reason**: It is determined by the maximum depth of the recursion stack. In the case of a binary tree, this is equal to the height of the tree, h.

## References

- **LeetCode Problem**: [Binary Tree Longest Consecutive Sequence-ii](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/)


---
id: counting-visible-nodes-in-binary-tree
title: Counting Visible Nodes in Binary Tree
sidebar_label: 2000-Counting-Visible-Nodes-in-Binary-Tree
tags:
- Tree
- Depth-First Search
- Breadth-First Search
description: "Given a binary tree, count the number of visible nodes. A node is considered visible if, in the path from the root to that node, there are no nodes with a greater value."
---

## Problem

Given a binary tree `root`, count the number of visible nodes. A node is considered visible if, in the path from the root to that node, there are no nodes with a greater value.

### Examples

**Example 1:**

**Input:** `root = [5,3,10,20,21,1,null,null,2]`  
**Output:** `4`  
**Explanation:** There are 4 visible nodes: 5, 10, 21, and 2.

**Example 2:**

**Input:** `root = [8,2,9,1,3,null,4]`  
**Output:** `5`  
**Explanation:** There are 5 visible nodes: 8, 9, 3, 4, and 1.

### Constraints

- The number of nodes in the tree is in the range `[0, 10^4]`.
- `-10^9 <= Node.val <= 10^9`

---

## Approach

To solve this problem, we can use a recursive depth-first search (DFS) approach. The idea is to traverse the tree while keeping track of the maximum value encountered along the path from the root to the current node. If the current node's value is greater than or equal to this maximum value, it is considered visible, and we recursively count visible nodes in its left and right subtrees.

### Steps:

1. Implement a recursive function that takes the current node and the maximum value encountered so far.
2. Initialize a count variable to keep track of the number of visible nodes.
3. If the current node is `null`, return 0.
4. If the current node's value is greater than or equal to the maximum value encountered so far, increment the count and recursively count visible nodes in both left and right subtrees, updating the maximum value accordingly.
5. Return the total count of visible nodes.

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
    public int countVisibleNodes(TreeNode root) {
        return countVisibleNodes(root, Integer.MIN_VALUE);
    }
    
    private int countVisibleNodes(TreeNode node, int maxSoFar) {
        if (node == null) {
            return 0;
        }
        
        int count = 0;
        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val;
        }
        
        count += countVisibleNodes(node.left, maxSoFar);
        count += countVisibleNodes(node.right, maxSoFar);
        
        return count;
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
    int countVisibleNodes(TreeNode* root) {
        return countVisibleNodes(root, INT_MIN);
    }
    
private:
    int countVisibleNodes(TreeNode* node, int maxSoFar) {
        if (node == nullptr) {
            return 0;
        }
        
        int count = 0;
        if (node->val >= maxSoFar) {
            count++;
            maxSoFar = node->val;
        }
        
        count += countVisibleNodes(node->left, maxSoFar);
        count += countVisibleNodes(node->right, maxSoFar);
        
        return count;
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
    def countVisibleNodes(self, root: TreeNode) -> int:
        return self.countVisibleNodesRecursive(root, float('-inf'))
    
    def countVisibleNodesRecursive(self, node: TreeNode, maxSoFar: int) -> int:
        if not node:
            return 0
        
        count = 0
        if node.val >= maxSoFar:
            count += 1
            maxSoFar = node.val
        
        count += self.countVisibleNodesRecursive(node.left, maxSoFar)
        count += self.countVisibleNodesRecursive(node.right, maxSoFar)
        
        return count
```

### Complexity Analysis

**Time Complexity:** O(n)
- The algorithm visits each node in the tree once, where n is the total number of nodes in the tree.

**Space Complexity:** O(h)
- The space complexity is determined by the recursion stack, which can go up to the height h of the tree. In the worst case, the tree is skewed, so the space complexity is O(n).

### References

- **LeetCode Problem:** [Count Visible Nodes in Binary Tree](https://leetcode.com/problems/count-visible-nodes-in-binary-tree/)

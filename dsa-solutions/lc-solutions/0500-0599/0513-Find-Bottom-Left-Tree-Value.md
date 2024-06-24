---
id: find-bottom-left-tree-value
title: Find Bottom Left Tree Value
sidebar_label: 0513-Find-Bottom-Left-Tree-Value
tags:
- Tree
- Depth-First Search
- Breadth-First Search
- Binary Tree
description: "Given the root of a binary tree, return the leftmost value in the last row of the tree."
---

## Problem

Given the root of a binary tree, return the leftmost value in the last row of the tree.

### Examples

**Example 1:**

**Input:** `root = [2,1,3]`  
**Output:** `1`

**Example 2:**

**Input:** `root = [1,2,3,4,null,5,6,null,null,7]`  
**Output:** `7`

### Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-2^31 <= Node.val <= 2^31 - 1`

---

## Approach

To find the leftmost value in the last row of the binary tree, we can use either Breadth-First Search (BFS) or Depth-First Search (DFS). The BFS approach involves traversing the tree level by level from left to right, ensuring that the first node encountered at the last level is the leftmost node. The DFS approach involves keeping track of the depth and updating the leftmost value when a deeper node is found.

### Steps for BFS:

1. Initialize a queue and enqueue the root node.
2. While the queue is not empty, process each level:
   - Keep track of the first node at each level.
   - Enqueue all child nodes of the current level nodes.
3. The leftmost value of the last processed level is the desired result.

### Steps for DFS:

1. Initialize variables to keep track of the maximum depth and the leftmost value.
2. Perform a DFS traversal, updating the leftmost value whenever a deeper node is found.

### Solution

#### Java Solution

```java
import java.util.LinkedList;
import java.util.Queue;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int bottomLeftValue = root.val;
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node.right != null) queue.add(node.right);
            if (node.left != null) queue.add(node.left);
            bottomLeftValue = node.val;
        }
        
        return bottomLeftValue;
    }
}
```
### C++ Solution

```cpp
#include <queue>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    int findBottomLeftValue(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int bottomLeftValue = root->val;
        
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            if (node->right) q.push(node->right);
            if (node->left) q.push(node->left);
            bottomLeftValue = node->val;
        }
        
        return bottomLeftValue;
    }
};
```
### Python

```python
from collections import deque
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        queue = deque([root])
        bottom_left_value = root.val
        
        while queue:
            node = queue.popleft()
            if node.right:
                queue.append(node.right)
            if node.left:
                queue.append(node.left)
            bottom_left_value = node.val
        
        return bottom_left_value
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: Each node is visited once during the traversal.

**Space Complexity:** O(n)
>Reason: In the worst case, the space required for the queue or recursion stack is proportional to the number of nodes.

### References
LeetCode Problem: Find Bottom Left Tree Value


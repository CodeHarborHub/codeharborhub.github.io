---
id: binary-tree-zigzag-level-order-traversal
title: Binary Tree Zigzag Level Order Traversal 
sidebar_label: 0103-Zigzag Level Order 
tags:
  - Tree
  - Breadth-First-Search
  - C++
description: "Given a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between)."
---

## Problem Description

Given a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).


### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```


### Constraints

- The number of nodes in the tree is in the range $[0, 2000]$.
- $-100 \leq \text{Node.val} \leq 100$

---

## Solution for Binary Tree Problem

### Intuition And Approach

To perform a zigzag level order traversal, we can use a breadth-first search (BFS) with a queue. We'll use a boolean flag to determine the direction of traversal at each level. 

1. **Breadth-First Search (BFS):** Traverse the tree level by level.
2. **Direction Toggle:** Use a flag to toggle the direction of traversal for each level (left-to-right or right-to-left).

<Tabs>
 <tabItem value="Iterative Simulation" label="Iterative Simulation">


#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
   class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int depth = 1;
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                if (node.left == null && node.right == null) return depth;
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            depth++;
        }
        return depth;
    }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    class Solution:
    def minDepth(self, root):
        if not root:
            return 0
        queue = collections.deque([(root, 1)])
        while queue:
            node, depth = queue.popleft()
            if not node.left and not node.right:
                return depth
            if node.left:
                queue.append((node.left, depth + 1))
            if node.right:
                queue.append((node.right, depth + 1))
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    class Solution {
public:
    int minDepth(TreeNode* root) {
        if (!root) return 0;
        queue<TreeNode*> q;
        q.push(root);
        int depth = 1;
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; ++i) {
                TreeNode* node = q.front();
                q.pop();
                if (!node->left && !node->right) return depth; // Leaf node found
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            ++depth;
        }
        return depth;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ where n is the number of nodes in the binary tree.
- Space Complexity: $O(h)$ where h is the height of the binary tree.

</tabItem>
</Tabs>


---

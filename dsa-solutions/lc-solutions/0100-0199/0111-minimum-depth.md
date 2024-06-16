---
id:  minimum-depth-of-binary-tree
title:  Minimum Depth of Binary Tree
sidebar_label: 0111-Minimum Depth Of Binary tree
tags:
  - Java
  - Python
  - C++
description: "Find the minimum depth of a binary tree, which is the number of nodes along the shortest path from the root node down to the nearest leaf node."
---

## Problem Description

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```


### Constraints

- The number of nodes in the tree is in the range [0, 105].
- $-100 <= Node.val <= 100$

---

## Solution for Binary Tree Problem

### Intuition And Approach

To find the minimum depth of a binary tree, we can perform a depth-first search (DFS) or a breadth-first search (BFS). Here, we will use BFS for simplicity.

Breadth-First Search (BFS): Traverse the tree level by level, stopping as soon as we encounter a leaf node. The depth of the first leaf node encountered will be the minimum depth of the tree.

<Tabs>
 <tabItem value="Recursive" label="Recursive">


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

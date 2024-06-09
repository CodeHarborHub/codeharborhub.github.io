---
id: binary-tree-right-side-view
title: Binary Tree Right Side View Solution
sidebar_label: 0199 Binary Tree Right Side View
tags:
  - Binary Tree
  - Depth-First Search
  - Breadth-First Search
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Binary Tree Right Side View problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

### Examples

**Example 1:**

```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
```

**Example 2:**

```
Input: root = [1,null,3]
Output: [1,3]
```

**Example 3:**

```
Input: root = []
Output: []
```


### Constraints

- The number of nodes in the tree is in the range `[0, 100]`.
- $-100 <=$ Node.val $<= 100$

## Solution for Binary Tree Right Side View Problem

### Intuition

The intuition behind the solution is to perform a level-order traversal (BFS) of the binary tree and record the value of the last node at each level, which represents the view from the right side.

### Approach

1. Initialize an empty result list to store the right side view of the tree.
2. Perform a level-order traversal (BFS) of the tree.
3. At each level, record the value of the last node in the result list.
4. Return the result list.

#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@mahek0620"/>
   ```python

    from collections import deque
    class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    class Solution(object):
    def rightSideView(self, root):
        result = []
        if not root:
            return result

        queue = deque([root])

        while queue:
            level_length = len(queue)
            for i in range(level_length):
                node = queue.popleft()
                if i == level_length - 1:
                    result.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

        return result
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    import java.util.*;

    class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    }

    class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (i == size - 1) result.add(node.val);
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }

        return result;
    
    }}
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   
    #include <iostream>
    #include <vector>
    #include <queue>

    using namespace std;

    class Solution {
    public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> result;
        if (!root) return result;

        queue<TreeNode*> q;
        q.push(root);

        while (!q.empty()) {
            int size = q.size();
            for (int i = 0; i < size; ++i) {
                TreeNode* node = q.front();
                q.pop();
                if (i == size - 1) result.push_back(node->val);
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
        }

        return result;
    }
    };
    ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time complexity**: The time complexity of the solution is $O(N)$, where N is the number of nodes in the binary tree. This is because we visit each node exactly once during the level-order traversal.
- **Space complexity**: The space complexity of the solution is $O(N)$, where N is the number of nodes in the binary tree. This is because the space used by the queue for level-order traversal can be at most N in the worst case.

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/binary-tree-right-side-view/)
- **Solution Link:** [Binary Tree Right Side View Solution on LeetCode](https://leetcode.com/problems/binary-tree-right-side-view/solutions/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

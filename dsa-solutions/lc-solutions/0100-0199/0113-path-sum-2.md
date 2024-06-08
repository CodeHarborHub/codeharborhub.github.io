---
id: 113-path-sum-2
title: Path Sum 2
sidebar_label: 0113-Path Sum 2
tags:
  - Java
  - Python
  - C++
description: "Find all root-to-leaf paths in a binary tree where the sum of the node values equals a given number."
---

## Problem Description

Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of node values, and paths are represented as lists of node values.

### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
```

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
```
Input: root = [1,2,3], targetSum = 5
Output: []
```

### Constraints

- The number of nodes in the tree is in the range [0, 105].
- $-1000 <= Node.val <= 1000$
- $-1000 <= targetSum <= 1000$
---

## Solution for Binary Tree Problem

### Intuition And Approach

To find all root-to-leaf paths where the sum equals targetSum, we can use Depth-First Search (DFS). We'll traverse the tree and keep track of the current path and its sum. When a leaf node is reached, we check if the current path's sum equals targetSum. If it does, we add the path to our result list.

<Tabs>
 <tabItem value="Recursive" label="Recursive">


#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
  private void dfs(TreeNode node, int sum, List<Integer> path, List<List<Integer>> result) {
    if (node == null) return;
    path.add(node.val);
    if (node.left == null && node.right == null && node.val == sum) {
        result.add(new ArrayList<>(path));
    } else {
        dfs(node.left, sum - node.val, path, result);
        dfs(node.right, sum - node.val, path, result);
    }
    path.remove(path.size() - 1);
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    class Solution:
 def pathSum(self, root: TreeNode, targetSum: int) -> List[List[int]]:
     def dfs(node, current_path, current_sum):
         if not node:
             return
         current_path.append(node.val)
         current_sum += node.val
         if not node.left and not node.right and current_sum == targetSum:
             result.append(list(current_path))
         else:
             dfs(node.left, current_path, current_sum)
             dfs(node.right, current_path, current_sum)
         current_path.pop()
     
     result = []
     dfs(root, [], 0)
     return result
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    void dfs(TreeNode* node, int sum, vector<int>& path, vector<vector<int>>& result) {
    if (!node) return;
    path.push_back(node->val);
    if (!node->left && !node->right && node->val == sum) {
        result.push_back(path);
    } else {
        dfs(node->left, sum - node->val, path, result);
        dfs(node->right, sum - node->val, path, result);
    }
    path.pop_back();
}
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ where n is the number of nodes in the binary tree.
- Space Complexity: $O(h)$ where h is the height of the binary tree.

</tabItem>
</Tabs>


---
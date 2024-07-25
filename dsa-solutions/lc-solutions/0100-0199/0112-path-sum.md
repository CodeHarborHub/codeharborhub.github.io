---
id: path-sum
title: Path Sum 
sidebar_label:  0112-Path Sum 
tags:
  - Tree
  - Depth-First Search

description: "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum."
---

## Problem Description

Given the root of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.



### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```
**Example 2:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
```
Input: root = [1,2,3] targetSum = 5
Output: false
```

### Constraints

- The number of nodes in the tree is in the range $[0, 5000]$.
  
- $-1000 \leq \text{Node.val} \leq 1000$

---

## Solution for Binary Tree Problem

### Intuition And Approach

To solve this problem, we can use a depth-first search (DFS) to traverse the tree from the root to the leaves, while keeping track of the sum of the values along the current path.

1. **DFS Traversal:** Traverse the tree from the root to the leaves.
2. **Sum Tracking:** Keep track of the sum of the values along the current path.
3. **Leaf Check:** When a leaf node is reached, check if the path sum equals `targetSum`.

<Tabs>
 <tabItem value="Recursive" label="Recursive">


#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
   class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        if (root.left == null && root.right == null) return targetSum == root.val;
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
   class Solution:
    def hasPathSum(self, root, targetSum):
        if not root:
            return False
        if not root.left and not root.right:
            return targetSum == root.val
        return self.hasPathSum(root.left, targetSum - root.val) or self.hasPathSum(root.right, targetSum - root.val)

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    targetSum = 3

Output: true

### Constraints

- The number of nodes in the tree is in the range $[0, 5000]$.
- $-1000 \leq \text{Node.val} \leq 1000$.
- $-1000 \leq \text{targetSum} \leq 1000$.

### Approach

To solve this problem, we can use a depth-first search (DFS) to traverse the tree from the root to the leaves, while keeping track of the sum of the values along the current path.

1. **DFS Traversal:** Traverse the tree from the root to the leaves.
2. **Sum Tracking:** Keep track of the sum of the values along the current path.
3. **Leaf Check:** When a leaf node is reached, check if the path sum equals `targetSum`.

### Solution Codes

#### Codes in Different Languages

<Tabs>
  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ayushchaware08"/>

```cpp
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) return false;
        if (root->left == nullptr && root->right == nullptr) return targetSum == root->val;
        return hasPathSum(root->left, targetSum - root->val) || hasPathSum(root->right, targetSum - root->val);
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ where n is the number of nodes in the binary tree.
- Space Complexity: $O(h)$ where h is the height of the  tree.

</tabItem>
</Tabs>


---

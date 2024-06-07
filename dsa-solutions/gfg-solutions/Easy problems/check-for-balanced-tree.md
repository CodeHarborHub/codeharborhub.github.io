---
id: check-for-balanced-tree
title: Check for balanced Tree
sidebar_label: 4 Check for balanced tree
tags:
  - Binary Tree
  - Depth-First Search
  - Recursion
  - LeetCode
  - C++
  - Java
  - Python
description: "This is a solution to the Balanced Binary Tree problem on LeetCode."
---

## Problem Description

Given a binary tree, determine if it is height-balanced.

A height-balanced binary tree is defined as:

- A binary tree in which the left and right subtrees of every node differ in height by no more than 1.

### Examples

**Example 1:**

![input Tree](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: true
```

**Example 2:**

![input Tree](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)
```
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```

**Example 3:**

```
Input: root = []
Output: true
```

### Constraints

- The number of nodes in the tree is in the range `[0, 5000]`.
- $-10^4 <=$ Node.val $<= 10^4$

---

## Solution for Balanced Binary Tree Problem

<Tabs>
 <tabItem value="Recursive" label="Recursive">

### Approach 1: Top-Down

#### Intuition

This method checks whether the tree is balanced strictly according to the definition of a balanced binary tree: the difference between the heights of the two subtrees is not greater than 1, and both the left and right subtrees are also balanced. With the helper function depth(), we can easily write the code.

#### Implementation

Implement a helper function `depth(root)` that returns the depth of the tree rooted at root.
Check if the absolute difference between the depths of the left and right subtrees is not greater than 1.
Recursively check if both the left and right subtrees are balanced.
Return true if the tree is balanced, otherwise return false.

#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
    class Solution {
        public int depth(TreeNode root) {
            if (root == null) return 0;
            return Math.max(depth(root.left), depth(root.right)) + 1;
        }

        public boolean isBalanced(TreeNode root) {
            if (root == null) return true;

            int left = depth(root.left);
            int right = depth(root.right);

            return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    class Solution:
        def depth(self, root: TreeNode) -> int:
            if root is None:
                return 0
            return max(self.depth(root.left), self.depth(root.right)) + 1

        def isBalanced(self, root: TreeNode) -> bool:
            if root is None:
                return True

            left = self.depth(root.left)
            right = self.depth(root.right)

            return abs(left - right) <= 1 and self.isBalanced(root.left) and self.isBalanced(root.right)
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    class Solution {
    public:
        int depth(TreeNode* root) {
            if (root == nullptr) return 0;
            return max(depth(root->left), depth(root->right)) + 1;
        }

        bool isBalanced(TreeNode* root) {
            if (root == nullptr) return true;

            int left = depth(root->left);
            int right = depth(root->right);

            return abs(left - right) <= 1 && isBalanced(root->left) && isBalanced(root->right);
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: O(n log n) in the worst case where n is the number of nodes in the tree. We visit each node once, and for each node, we calculate its depth. Since the depth calculation involves traversing the subtree, the overall time complexity is O(n log n).
- **Space Complexity**: O(n) for the recursive call stack.

</tabItem>
<tabItem value="bottomup" label="Bottom-Up">

### Approach 2: Bottom-Up

#### Intuition

The second method is based on DFS. Instead of calling depth() explicitly for each child node, we return the height of the current node in DFS recursion. When the subtree of the current node (inclusive) is balanced, the function dfsHeight() returns a non-negative value as the height. Otherwise, -1 is returned. According to the left height and right height of the two children, the parent node could check if the subtree is balanced and decide its return value.

#### Implementation

Implement a helper function dfsHeight(root) that returns the height of the tree rooted at root.
If the subtree rooted at root is balanced, return its height. Otherwise, return -1.
Check if the returned height is -1 to determine if the tree is balanced.

#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
    ```java
    class Solution {
        public int dfsHeight(TreeNode root) {
            if (root == null) return 0;

            int leftHeight = dfsHeight(root.left);
            if (leftHeight == -1) return -1;
            int rightHeight = dfsHeight(root.right);
            if (rightHeight == -1) return -1;

            if (Math.abs(leftHeight - rightHeight) > 1)  return -1;
            return Math.max(leftHeight, rightHeight) + 1;
        }

        public boolean isBalanced(TreeNode root) {
            return dfsHeight(root) != -1;
        }
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
    ```python
    class Solution:
        def dfsHeight(self, root: TreeNode) -> int:
            if root is None:
                return 0

            leftHeight = self.dfsHeight(root.left)
            if leftHeight == -1:
                return -1
            right

    Height = self.dfsHeight(root.right)
            if rightHeight == -1:
                return -1

            if abs(leftHeight - rightHeight) > 1:
                return -1
            return max(leftHeight, rightHeight) + 1

        def isBalanced(self, root: TreeNode) -> bool:
            return self.dfsHeight(root) != -1
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
    ```cpp
    class Solution {
    public:
        int dfsHeight(TreeNode* root) {
            if (root == nullptr) return 0;

            int leftHeight = dfsHeight(root->left);
            if (leftHeight == -1) return -1;
            int rightHeight = dfsHeight(root->right);
            if (rightHeight == -1) return -1;

            if (abs(leftHeight - rightHeight) > 1)  return -1;
            return max(leftHeight, rightHeight) + 1;
        }

        bool isBalanced(TreeNode* root) {
            return dfsHeight(root) != -1;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: O(n) in the worst case where n is the number of nodes in the tree. Each node is visited once.
- **Space Complexity**: O(n) for the recursive call stack.

</tabItem>
</Tabs>

---

## References

- **GFG Problem**: [Check for Balanced Tree](https://www.geeksforgeeks.org/problems/check-for-balanced-tree/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)


---
id: binary tree preorder traversal
title: Binary Tree Preorder Traversal
sidebar_label: 0144 Binary Tree Preorder Traversal
tags:
  - tree
  - DFS
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Binary Tree Preorder Traversal problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, return the preorder traversal of its nodes' values.

### Examples

**Example 1:**

```

Input: root = [1,null,2,3]
Output: [1,2,3]
```

**Example 2:**

```
Input: root = []
Output: []
```
**Example 3:**

```
Input: root = [1]
Output: [1]
```

### Constraints

- The number of nodes in the tree is in the range $[0, 100]$.
- $-100 <= Node.val <= 100$


#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python
    # Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root):
        if not root:
            return []
        result = []
        stack = [root]
        while stack:
            node = stack.pop()
            result.append(node.val)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return result

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null)
            return result;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            result.add(node.val);
            if (node.right != null)
                stack.push(node.right);
            if (node.left != null)
                stack.push(node.left);
        }
        return result;
    }
}



    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
#include <vector>
#include <stack>
using namespace std;

// Definition for a binary tree node provided by the precompiled header.
struct TreeNode;

class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        if (!root)
            return {};
        vector<int> result;
        stack<TreeNode*> s;
        s.push(root);
        while (!s.empty()) {
            TreeNode* node = s.top();
            s.pop();
            result.push_back(node->val);
            if (node->right)
                s.push(node->right);
            if (node->left)
                s.push(node->left);
        }
        return result;
    }
};



    ```

  </TabItem>
</Tabs>



## References

- **LeetCode Problem**: [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/binary-tree-preorder-traversal/solution/)

- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

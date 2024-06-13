---
id: binary-tree-postorder-traversal
title: Binary-Tree-Postorder-Traversal
sidebar_label: 0145 Binary-Tree-Postorder-Traversal
tags:
  - DFS
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Binary-Tree-Postorder-Traversal problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, return the postorder traversal of its nodes' values.

### Examples

**Example 1:**

```


Input: root = [1,null,2,3]
Output: [3,2,1]

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

- The number of the nodes in the tree is in the range [0, 100] 
- $-100 <= Node.val <= 100$


---

## Solution for Binary-Tree-Postorder-Traversal Problem

### Intuition

Imagine walking through the tree in a clockwise direction, starting from the left subtree, then moving to the right subtree, and finally reaching the root node. At each step, you collect the values of the nodes you visit, following the order: left, right, root.


### Approach

### Recursive Approach (DFS - Depth First Search):

- Perform postorder traversal recursively by visiting the left subtree, then the right subtree, and finally the root node.
- Base case: If the current node is null, return.
- Recursively call the function on the left subtree.
- Recursively call the function on the right subtree.
- Append the value of the current node to the result list.
- Return the result list.

### Iterative Approach (Using Stack):

- Start from the root node and initialize an empty stack.
- While the stack is not empty or the current node is not null:
- Traverse down the left subtree until you reach a leaf node, pushing each node onto the stack.
- Once you reach a leaf node, pop the top node from the stack.
- If the popped node has a right child and it is equal to the top of the stack, it means the right subtree has not been visited yet. In this case, pop the top node again and push the popped node back onto the stack, then move to its right child.
- If the popped node does not have a right child or its right child has already been visited, append its value to the result list.
- Return the result list.



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
    def postorderTraversal(self, root):
        if not root:
            return []
        result = []
        stack = [root]
        while stack:
            node = stack.pop()
            result.append(node.val)
            if node.left:
                stack.append(node.left)
            if node.right:
                stack.append(node.right)
        return result[::-1]



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
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null)
            return result;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();
            result.add(0, node.val);  // Insert node.val at the beginning of the result list
            if (node.left != null)
                stack.push(node.left);
            if (node.right != null)
                stack.push(node.right);
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
    vector<int> postorderTraversal(TreeNode* root) {
        if (!root)
            return {};
        vector<int> result;
        stack<TreeNode*> s;
        s.push(root);
        while (!s.empty()) {
            TreeNode* node = s.top();
            s.pop();
            result.push_back(node->val);
            if (node->left)
                s.push(node->left);
            if (node->right)
                s.push(node->right);
        }
        reverse(result.begin(), result.end());
        return result;
    }
};


    ```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Binary-Tree-Postorder-Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- **Solution Link:** [Binary-Tree-Postorder-Traversal Solution on LeetCode](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/5273312/binary-tree-postorder-traversal-solution)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)

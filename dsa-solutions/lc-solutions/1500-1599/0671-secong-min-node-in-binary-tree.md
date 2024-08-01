---
id: secong-min-node-in-binary-tree
title: Second Minimum Node in Binary Tree
sidebar_label: 671-Second Minimum Node in Binary Tree
tags: [Leet code]
description: "Solution to leetocde 671"
---

## Problem Statement

Given a non-empty special binary tree consisting of nodes with non-negative values, where each node in this tree has exactly two or zero sub-nodes. If a node has two sub-nodes, then the node's value is the smaller value among its two sub-nodes. More formally, the property `root.val = min(root.left.val, root.right.val)` always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the node values in the whole tree.

If no such second minimum value exists, output -1 instead.

## Examples

### Example 1

**Input:** `root = [2,2,5,null,null,5,7]`  
**Output:** `5`  
**Explanation:** The smallest value is 2, the second smallest value is 5.

### Example 2

**Input:** `root = [2,2,2]`  
**Output:** `-1`  
**Explanation:** The smallest value is 2, but there isn't any second smallest value.

## Constraints

- $The number of nodes in the tree is in the range [1, 25].$
- $1<= Node.val <= 231 - 1$
- $root.val == min(root.left.val, root.right.val) for each internal node of the tree.$

## Python Code

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

import sys

class Solution:
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        if not root:
            return -1

        smallest = root.val
        secondSmallest = sys.maxsize
        stack = [root]

        while stack:
            node = stack.pop()
            if node.left:
                if node.left.val != smallest:
                    secondSmallest = min(secondSmallest, node.left.val)
                stack.append(node.left)

            if node.right:
                if node.right.val != smallest:
                    secondSmallest = min(secondSmallest, node.right.val)
                stack.append(node.right)

        return secondSmallest if secondSmallest != sys.maxsize else -1
```

## C++ Code

```cpp
#include <limits.h>
#include <stack>
#include <algorithm>

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    int findSecondMinimumValue(TreeNode* root) {
        if (!root) return -1;

        int smallest = root->val;
        long secondSmallest = LONG_MAX;
        std::stack<TreeNode*> stack;
        stack.push(root);

        while (!stack.empty()) {
            TreeNode* node = stack.top();
            stack.pop();

            if (node->left) {
                if (node->left->val != smallest) {
                    secondSmallest = std::min(secondSmallest, (long)node->left->val);
                }
                stack.push(node->left);
            }

            if (node->right) {
                if (node->right->val != smallest) {
                    secondSmallest = std::min(secondSmallest, (long)node->right->val);
                }
                stack.push(node->right);
            }
        }

        return secondSmallest == LONG_MAX ? -1 : (int)secondSmallest;
    }
};
```

## Java Code

```java
import java.util.Stack;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public int findSecondMinimumValue(TreeNode root) {
        if (root == null) return -1;

        int smallest = root.val;
        long secondSmallest = Long.MAX_VALUE;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode node = stack.pop();

            if (node.left != null) {
                if (node.left.val != smallest) {
                    secondSmallest = Math.min(secondSmallest, node.left.val);
                }
                stack.push(node.left);
            }

            if (node.right != null) {
                if (node.right.val != smallest) {
                    secondSmallest = Math.min(secondSmallest, node.right.val);
                }
                stack.push(node.right);
            }
        }

        return secondSmallest == Long.MAX_VALUE ? -1 : (int) secondSmallest;
    }
}
```

## JavaScript Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root) return -1;

  let smallest = root.val;
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (node.left) {
      if (node.left.val !== smallest) {
        secondSmallest = Math.min(secondSmallest, node.left.val);
      }
      stack.push(node.left);
    }

    if (node.right) {
      if (node.right.val !== smallest) {
        secondSmallest = Math.min(secondSmallest, node.right.val);
      }
      stack.push(node.right);
    }
  }

  return secondSmallest === Number.MAX_SAFE_INTEGER ? -1 : secondSmallest;
};
```

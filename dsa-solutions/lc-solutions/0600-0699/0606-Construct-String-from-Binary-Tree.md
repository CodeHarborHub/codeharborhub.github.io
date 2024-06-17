---
id: construct-string-from-binary-tree
title: Construct String from Binary Tree
sidebar_label: 0606-Construct-String-from-Binary-Tree
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way."
---

## Problem

Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way.

### Examples
**Example 1:**

![Screenshot of the application](.././../../assets/606%20ex1.png)

**Input:** `root = [1,2,3,4]`  
**Output:** `"1(2(4))(3)"`  
**Explanation:** Originally, it needs to be `"1(2(4)())(3()())"`, but you need to omit all the unnecessary empty parenthesis pairs. And it will be `"1(2(4))(3)"`

**Example 2:**

![Screenshot of the application](.././../../assets/606%20ex2.png)

**Input:** `root = [1,2,3,null,4]`  
**Output:** `"1(2()(4))(3)"`  
**Explanation:** Originally, it needs to be `"1(2()(4)())(3()())"`, but you need to omit all the unnecessary empty parenthesis pairs. And it will be `"1(2()(4))(3)"`

### Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-5000 <= Node.val <= 5000`

---

## Approach

To construct the string from the binary tree with the preorder traversal, we need to follow these steps:

1. If the current node is `null`, return an empty string.
2. Add the value of the current node to the result string.
3. If the left child is `null` but the right child is not `null`, add `()` to represent the left child.
4. Recursively add the left child string.
5. Recursively add the right child string if it exists.

### Solution

#### Java Solution

```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public String tree2str(TreeNode root) {
        if (root == null) return "";
        String result = Integer.toString(root.val);
        if (root.left != null || root.right != null) {
            result += "(" + tree2str(root.left) + ")";
            if (root.right != null) {
                result += "(" + tree2str(root.right) + ")";
            }
        }
        return result;
    }
}
```
#### C++ Solution

```cpp
#include <string>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    string tree2str(TreeNode* root) {
        if (!root) return "";
        string result = to_string(root->val);
        if (root->left || root->right) {
            result += "(" + tree2str(root->left) + ")";
            if (root->right) {
                result += "(" + tree2str(root->right) + ")";
            }
        }
        return result;
    }
};
```
#### Python Solution

```python
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def tree2str(self, root: TreeNode) -> str:
        if not root:
            return ""
        result = str(root.val)
        if root.left or root.right:
            result += f"({self.tree2str(root.left)})"
            if root.right:
                result += f"({self.tree2str(root.right)})"
        return result
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: Each node is visited once during the traversal.

**Space Complexity:** O(h)
>Reason: The space complexity is determined by the recursion stack, which in the worst case (unbalanced tree) is O(n), but on average (balanced tree) is O(log n).

### References
**LeetCode Problem:** Construct String from Binary Tree

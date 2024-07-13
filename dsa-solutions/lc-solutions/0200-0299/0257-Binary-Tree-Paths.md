---
id: binary-tree-paths
title: Binary Tree Paths
sidebar_label: 0257. Binary Tree Paths
tags:
- Tree
- Depth-First Search
description: "Solution to Leetcode 257. Binary Tree Paths"
---

## Problem Description

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

### Examples

**Example 1:**

```
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
```

**Example 2:**

```
Input: root = [1]
Output: ["1"]
```

### Constraints
- The number of nodes in the tree is in the range [1, 100].
- $-100 \leq \text{Node.val} \leq 100$

### Approach 
1. Define a `TreeNode` class to represent the nodes in the binary tree.
2. Create a `Solution` class with a method `binaryTreePaths` to find all root-to-leaf paths.
3. Use a helper function `construct_paths` to perform depth-first search (DFS) to construct paths from the root to leaf nodes.
4. If a node is a leaf, add the path to the result list. Otherwise, extend the current path and recursively call the helper function for the left and right children.
5. Return the list of paths.

### Complexity

Time complexity: $O(n)$, where n is the number of nodes in the tree, since we need to visit each node.

Space complexity: $O(n)$, since the maximum depth of the recursion tree can go up to n.

### Solution

#### Code in Different Languages

#### Python

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def binaryTreePaths(self, root: TreeNode) -> list[str]:
        def construct_paths(node, path):
            if node:
                path += str(node.val)
                if not node.left and not node.right:  # if reach a leaf
                    paths.append(path)  # update paths
                else:
                    path += '->'  # extend the current path
                    construct_paths(node.left, path)
                    construct_paths(node.right, path)

        paths = []
        construct_paths(root, '')
        return paths

# Example Usage
# Constructing the tree [1, 2, 3, null, 5]
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.right = TreeNode(5)

solution = Solution()
print(solution.binaryTreePaths(root))  # Output: ["1->2->5", "1->3"]
```

#### C++

```cpp
#include <vector>
#include <string>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    vector<string> binaryTreePaths(TreeNode* root) {
        vector<string> paths;
        construct_paths(root, "", paths);
        return paths;
    }
    
    void construct_paths(TreeNode* node, string path, vector<string>& paths) {
        if (node) {
            path += to_string(node->val);
            if (!node->left && !node->right) {  // if reach a leaf
                paths.push_back(path);  // update paths
            } else {
                path += "->";  // extend the current path
                construct_paths(node->left, path, paths);
                construct_paths(node->right, path, paths);
            }
        }
    }
};

// Example Usage
// Constructing the tree [1, 2, 3, null, 5]
TreeNode* root = new TreeNode(1);
root->left = new TreeNode(2);
root->right = new TreeNode(3);
root->left->right = new TreeNode(5);

Solution solution;
vector<string> result = solution.binaryTreePaths(root);  // Output: ["1->2->5", "1->3"]
```

#### Java

```java
import java.util.ArrayList;
import java.util.List;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> paths = new ArrayList<>();
        construct_paths(root, "", paths);
        return paths;
    }
    
    private void construct_paths(TreeNode node, String path, List<String> paths) {
        if (node != null) {
            path += Integer.toString(node.val);
            if (node.left == null && node.right == null) {  // if reach a leaf
                paths.add(path);  // update paths
            } else {
                path += "->";  // extend the current path
                construct_paths(node.left, path, paths);
                construct_paths(node.right, path, paths);
            }
        }
    }

    public static void main(String[] args) {
        // Example Usage
        // Constructing the tree [1, 2, 3, null, 5]
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);

        Solution solution = new Solution();
        List<String> result = solution.binaryTreePaths(root);  // Output: ["1->2->5", "1->3"]
        System.out.println(result);
    }
}
```

### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

### References

- **LeetCode Problem**: Binary Tree Paths

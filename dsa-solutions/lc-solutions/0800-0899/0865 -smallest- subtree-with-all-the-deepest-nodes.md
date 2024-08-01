---
id:  smallest-subtree-with-all-the-deepest-nodes
title:  Smallest Subtree with all the Deepest Nodes
sidebar_label: 865 -  Smallest Subtree with all the Deepest Nodes
tags:
  - Leet code
description: "Solution to leetocde 865"
---
    
## Problem Statement
Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

### Example 1

**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4]`

**Output**: `[2,7,4]`

**Explanation**:
The middle node of the list is node 3.

### Example 2

**Input**: `root = [1]`

**Output**: `[1]`

**Explanation**:
The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.

### Constraints

- `The number of nodes in the tree will be in the range [1, 500]`
- `0 <= Node.val <= 500`
- `The values of the nodes in the tree are unique.`


### Approach

Write a sub function deep(TreeNode root).
Return a pair(int depth, TreeNode subtreeWithAllDeepest)

In sub function deep(TreeNode root):

if root == null,
return pair(0, null)

if left depth == right depth,
deepest nodes both in the left and right subtree,
return pair (left.depth + 1, root)

if left depth > right depth,
deepest nodes only in the left subtree,
return pair (left.depth + 1, left subtree)

if left depth < right depth,
deepest nodes only in the right subtree,
return pair (right.depth + 1, right subtree)

**Time complexity:** O(N)


**Space complexity:** O(height)



### Code implementation

### Python Solution

```python
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        found = False
        ans = TreeNode(-1)
        
        def dfs(node,p,q):
            nonlocal found, ans
            if not node: return []
            
            left = dfs(node.left,left_node,right_node)
            right = dfs(node.right,left_node,right_node)
            
            total = [*left,*right]
            total.append(node.val)
            
            if p.val in total and q.val in total and not found: 
                ans = (node)
                found = True
            
            return total

        def find_depth(root):
            q = deque()
            q.append(root)

            while q:
                l,r = None,None
                no_nodes = len(q)
                for i in range(len(q)):
                    a = q.popleft()
                    if i == 0: l = a
                    if i == no_nodes-1: r = a

                    if a.left: q.append(a.left)
                    if a.right: q.append(a.right)
            
            return l,r
        
        left_node,right_node = find_depth(root)
        dfs(root,left_node,right_node)
        
        return ans        

```

### C++ Solution

```cpp
class Solution {
public:
    int height(TreeNode* root) {
        if (!root) return 0;
        return max(height(root->left) + 1, height(root->right) + 1); 
    }
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        if (!root) return NULL;

        int left = height(root->left);    
        int right = height(root->right);

        if (left == right) return root;
        if (left > right) return subtreeWithAllDeepest(root->left);
        return subtreeWithAllDeepest(root->right);
    }
};
```

### Java Solution

```java
class Solution {
    int maxDepth = Integer.MIN_VALUE;
    TreeNode result = null;
    public TreeNode subtreeWithAllDeepest(TreeNode root) {
        postOrder(root, 0);
        return result;
    }
    public int postOrder(TreeNode node, int deep) {
        if (node == null) {
            return deep;
        }
        int left = postOrder(node.left, deep + 1);
        int right = postOrder(node.right, deep + 1);
        int curDepth = Math.max(left, right);
        maxDepth = Math.max(maxDepth, curDepth);
        if (left == maxDepth && right == maxDepth) {
            result = node;
        }
        return curDepth;
    }
}
```

### JavaScript Solution

```javascript

const subtreeWithAllDeepest = function(root) {
    const node = dfs(root)
    return node[0]
};

const dfs = (node) => {
    // If the node is undefined, we have reached the bottom. Return the count as a starting point.
    if ((node?.val === undefined)) {
        return [null, 0]  
    }
    const left = dfs(node?.left, node)
    const right = dfs(node?.right, node)

    // As we bubble up the tree, increment the count to compare depths.
    left[1] += 1
    right[1] += 1

    // Bubble up the left or the right sides existing values depending on the depth.
    if (left[1] > right[1]) {
        return left
    } else if (right[1] > left[1]) {
        return right
    } else if (right[1] === left[1]) {
        // If both sides are the same depth, this is a subtree. Replace the value with the current parent node.
        // If there are no other subtrees, this one will always 'win' and bubble up.
        return [node, right[1]]
    }
}
```
---
id: Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal
title: Construct Binary Tree from Preorder and Inorder Traversal
sidebar_label: 0105-Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal
tags:
  - Array
  - Hash Tabel
  - Divide and Conquer
  - Tree
  - Binary Tree
description: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree."
---


### Problem Description

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

### Examples

#### Example 1

- **Input:** `preorder = [3,9,20,15,7], inorder=[9,3,15,20,7]`
- **Output:** `[3,9,30,null,null,15,7]`

#### Example 2

- **Input:** `preorder = [-1], inorder=[-1]`
- **Output:** `[-1]`

### Constraints

- $1 \leq \text{preorder.length} \leq 3000$
- $\text{inorder.length} == \text{preorder.length}$
- $-3000 \leq \text{preorder}[i], \text{inorder}[i] \leq 3000$
- preorder and inorder consist of unique values.
- Each value of inorder also appears in preorder.
- preorder is guaranteed to be the preorder traversal of the tree.
- inorder is guaranteed to be the inorder traversal of the tree.

### Solution Code

#### Python

```python
class Solution:
    def buildTree(self, P: List[int], I: List[int]) -> TreeNode:
        M = {I[i]: i for i in range(len(I))}
        return self.splitTree(P, M, 0, 0, len(P)-1)
    
    def splitTree(self, P: List[int], M: dict, pix: int, ileft: int, iright: int) -> TreeNode:
        rval = P[pix]
        root, imid = TreeNode(rval), M[rval]
        if imid > ileft:
            root.left = self.splitTree(P, M, pix+1, ileft, imid-1)
        if imid < iright:
            root.right = self.splitTree(P, M, pix+imid-ileft+1, imid+1, iright)
        return root
```

#### Java

```java
class Solution {
    public TreeNode buildTree(int[] P, int[] I) {
        Map<Integer, Integer> M = new HashMap<>();
        for (int i = 0; i < I.length; i++)
            M.put(I[i], i);
        return splitTree(P, M, 0, 0, I.length-1);
    }
    
    private TreeNode splitTree(int[] P, Map<Integer, Integer> M, int pix, int ileft, int iright) {
        int rval = P[pix], imid = M.get(rval);
        TreeNode root = new TreeNode(rval);            
        if (imid > ileft)
            root.left = splitTree(P, M, pix+1, ileft, imid-1);
        if (imid < iright)
            root.right = splitTree(P, M, pix+imid-ileft+1, imid+1, iright);
        return root;
    }
}
```

#### C++

```cpp
class Solution {
public:
    TreeNode* buildTree(vector<int>& P, vector<int>& I) {
        unordered_map<int, int> M;
        for (int i = 0; i < I.size(); i++)
            M[I[i]] = i;
        return splitTree(P, M, 0, 0, I.size()-1);
    }
    
private:
    TreeNode* splitTree(vector<int>& P, unordered_map<int, int>& M, int pix, int ileft, int iright) {
        int rval = P[pix], imid = M[rval];
        TreeNode* root = new TreeNode(rval);            
        if (imid > ileft)
            root->left = splitTree(P, M, pix+1, ileft, imid-1);
        if (imid < iright)
            root->right = splitTree(P, M, pix+imid-ileft+1, imid+1, iright);
        return root;
    }
};
```
#### Javascript

```javascript
var buildTree = function(P, I) {
    let M = new Map()
    for (let i = 0; i < I.length; i++)
        M.set(I[i], i)
    return splitTree(P, M, 0, 0, I.length-1)
};

var splitTree = function(P, M, pix, ileft, iright) {
    let rval = P[pix],
        root = new TreeNode(rval),
        imid = M.get(rval)
    if (imid > ileft)
        root.left = splitTree(P, M, pix+1, ileft, imid-1)
    if (imid < iright)
        root.right = splitTree(P, M, pix+imid-ileft+1, imid+1, iright)
    return root
}
```
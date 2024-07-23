---
id: Construct-Binary-Tree-from-Inorder-and-postorder-Traversal
title: Construct Binary Tree from Inorder and Postorder Traversal
sidebar_label: 0106-Construct-Binary-Tree-from-Inorder-and-postorder-Traversal
tags:
  - Array
  - Hash Tabel
  - Divide and Conquer
  - Tree
  - Binary Tree
description: "Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 "
---



### Problem Description

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 
### Examples

#### Example 1

- **Input:** `inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]`
- **Output:** `[3,9,20,null,null,15,7]`

#### Example 2

- **Input:** `inorder = [-1], postorder=[-1]`
- **Output:** `[-1]`

### Constraints

- $1 \leq \text{inorder.length} \leq 3000$
- $\text{postorder.length} == \text{inorder.length}$
- $-3000 \leq \text{inorder}[i], \text{postorder}[i] \leq 3000$
- postorder and inorder consist of unique values.
- Each value of postorder also appears in inorder.
- postorder is guaranteed to be the postorder traversal of the tree.
- inorder is guaranteed to be the inorder traversal of the tree.

### Solution Code

#### Python

```python
class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        n=len(inorder)
        poststart=instart=0
        postend=inend=n-1
        d={}
        for i in range(n):
            d[inorder[i]]=i
        return self.constructTree(postorder,poststart,postend,inorder,instart,inend,d)
    
    def constructTree(self,postorder,poststart,postend,inorder,instart,inend,d):
        if poststart>postend or instart>inend:
            return None
        root=TreeNode(postorder[postend])
        elem=d[root.val]
        nelem=elem-instart
        root.left=self.constructTree(postorder,poststart,poststart+nelem-1,inorder,instart,elem-1,d)
        root.right=self.constructTree(postorder,poststart+nelem,postend-1,inorder,elem+1,inend,d)
        return root
```

#### Java

```java
class Solution 
{
    public TreeNode buildTree(int[] inorder, int[] postorder) {
    // If either of the input arrays are empty, the tree is empty, so return null
    if (inorder.length == 0 || postorder.length == 0) return null;
    
    // Initialize indices to the last elements of the inorder and postorder traversals
    int ip = inorder.length - 1;
    int pp = postorder.length - 1;

    // Create an empty stack to help us build the binary tree
    Stack<TreeNode> stack = new Stack<TreeNode>();
    // Initialize prev to null since we haven't processed any nodes yet
    TreeNode prev = null;
    // Create the root node using the last element in the postorder traversal
    TreeNode root = new TreeNode(postorder[pp]);
    // Push the root onto the stack and move to the next element in the postorder traversal
    stack.push(root);
    pp--;

    // Process the rest of the nodes in the postorder traversal
    while (pp >= 0) {
        // While the stack is not empty and the top of the stack is the current inorder element
        while (!stack.isEmpty() && stack.peek().val == inorder[ip]) {
            // The top of the stack is the parent of the current node, so pop it off the stack and update prev
            prev = stack.pop();
            ip--;
        }
        // Create a new node for the current postorder element
        TreeNode newNode = new TreeNode(postorder[pp]);
        // If prev is not null, the parent of the current node is prev, so attach the node as the left child of prev
        if (prev != null) {
            prev.left = newNode;
        // If prev is null, the parent of the current node is the current top of the stack, so attach the node as the right child of the current top of the stack
        } else if (!stack.isEmpty()) {
            TreeNode currTop = stack.peek();
            currTop.right = newNode;
        }
        // Push the new node onto the stack, reset prev to null, and move to the next element in the postorder traversal
        stack.push(newNode);
        prev = null;
        pp--;
    }

    // Return the root of the binary tree
    return root;
    }
}
```

#### C++

```cpp
class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
    // If either of the input vectors are empty, the tree is empty, so return null
    if (inorder.size() == 0 || postorder.size() == 0) return nullptr;

    // Initialize indices to the last elements of the inorder and postorder traversals
    int ip = inorder.size() - 1;
    int pp = postorder.size() - 1;

    // Create an empty stack to help us build the binary tree
    stack<TreeNode*> st;
    // Initialize prev to null since we haven't processed any nodes yet
    TreeNode* prev = nullptr;
    // Create the root node using the last element in the postorder traversal
    TreeNode* root = new TreeNode(postorder[pp]);
    // Push the root onto the stack and move to the next element in the postorder traversal
    st.push(root);
    pp--;

    // Process the rest of the nodes in the postorder traversal
    while (pp >= 0) {
        // While the stack is not empty and the top of the stack is the current inorder element
        while (!st.empty() && st.top()->val == inorder[ip]) {
            // The top of the stack is the parent of the current node, so pop it off the stack and update prev
            prev = st.top();
            st.pop();
            ip--;
        }
        // Create a new node for the current postorder element
        TreeNode* newNode = new TreeNode(postorder[pp]);
        // If prev is not null, the parent of the current node is prev, so attach the node as the left child of prev
        if (prev != nullptr) {
            prev->left = newNode;
        // If prev is null, the parent of the current node is the current top of the stack, so attach the node as the right child of the current top of the stack
        } else if (!st.empty()) {
            TreeNode* currTop = st.top();
            currTop->right = newNode;
        }
        // Push the new node onto the stack, reset prev to null, and move to the next element in the postorder traversal
        st.push(newNode);
        prev = nullptr;
        pp--;
    }

    // Return the root of the binary tree
    return root;
    }
};
```
#### Javascript

```javascript
var buildTree = function(inorder, postorder) {
    if (inorder.length == 0 || postorder.length == 0) {
        return null;
    }
    var rootVal = postorder[postorder.length - 1];
    var root = new TreeNode(rootVal);
    var rootIndex = inorder.indexOf(rootVal);
    var leftInorder = inorder.slice(0, rootIndex);
    var rightInorder = inorder.slice(rootIndex + 1);
    var leftPostorder = postorder.slice(0, leftInorder.length);
    var rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
    root.left = buildTree(leftInorder, leftPostorder);
    root.right = buildTree(rightInorder, rightPostorder);
    return root;
};
```
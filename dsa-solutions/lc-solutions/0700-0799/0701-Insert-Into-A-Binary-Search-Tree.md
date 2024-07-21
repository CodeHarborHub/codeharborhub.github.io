---
id: insert-into-a-binary-search-tree
title:   Insert into a Binary Search Tree
sidebar_label: 701. Insert into a Binary Search Tree

tags:
- Binary Tree
- BST
- Tree

description: "This is a solution to the Insert into a Binary Search Tree problem on LeetCode."
---

## Problem Description
You are given the `root` node of a binary search tree (BST) and a `value` to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

### Examples

**Example 1:** 

![Example1](https://github.com/user-attachments/assets/c7df9581-e34c-4cde-a8a3-5b19d37d60c7)

```
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
```
![Sol1](https://github.com/user-attachments/assets/a454cca0-8878-44e3-8c22-1be2c870cce1)


**Example 2:**

```
Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

```

**Example 3:**

```
Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]

```


### Constraints

Certainly! Here is the Markdown for the given constraints without changing any word or statement:

### Constraints

- The number of nodes in the tree will be in the range `[0, 10^4]`.
- `-10^8 <= Node.val <= 10^8`
- All the values `Node.val` are unique.
- `-10^8 <= val <= 10^8`
- It's guaranteed that val does not exist in the original BST.




## Solutions

```cpp
    TreeNode* insertIntoBST(TreeNode* a, int x) {
        
        if(!a) return new TreeNode(x);

        if(x<a->val)
            a->left=insertIntoBST(a->left,x);
        else 
            a->right=insertIntoBST(a->right,x);

        return a;
    }
```

```java
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null){
            return new TreeNode(val);
        }

        if(val < root.val){
            root.left = insertIntoBST(root.left, val);
        }
        else{
            root.right = insertIntoBST(root.right, val);
        }

        return root;
    }
}
```

```python
class Solution:
    def insertIntoBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if root is None: return TreeNode(val) 
        if root.val > val:  root.left = self.insertIntoBST(root.left, val)
        else: root.right = self.insertIntoBST(root.right, val)
        return root
```
### Complexity Analysis

- **Time Complexity:** $O(H)$, where $H$ is the height of the BST. In the worst case, the height $H$ can be $N$ for skewed trees.
- **Space Complexity:** $O(H)$, due to the recursive calls on the call stack. In the worst case, $H$ can be $N$ for skewed trees.

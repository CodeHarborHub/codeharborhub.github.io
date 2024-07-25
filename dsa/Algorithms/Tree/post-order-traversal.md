---
id: post-order-traversal
title: post-order-traversal
sidebar_label: Post Order Traversal
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "This is a solution to the Binary Tree Post Order Traversal problem on LeetCode."
---

## Problem Description
Given the root of a binary tree, return the postorder traversal of its nodes' values.

### Examples

**Example 1:**
![alt text](inorder_1-1.jpg)
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
- The number of nodes in the tree is in the range [0, 100].
- `-1000 <= Node.val <= 1000`

## Solution for Binary Tree Post Order Traversal
  
### Intuition
- Recursive is very easy try with iterative way

### Code in Different Languages


<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        stack=[]
        def dfs(root):
            if root:
                dfs(root.left)
                dfs(root.right)
                stack.append(root.val)
        dfs(root)
        return stack   
        

```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@parikhitkurmi"/>

   ```java
//java

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    ArrayList<Integer> res = new ArrayList<>();
    public List<Integer> postorderTraversal(TreeNode root) {
        postOrder(root);
        return res;
    }

    private void postOrder(TreeNode root){
        if(root == null){
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        res.add(root.val);
    }
}




```
</TabItem>
<TabItem value="C++" label="C++">
<SolutionAuthor name="@parikhitkurmi"/>

   ```cpp
//cpp

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

     vector<int> ans ;
     void postorder(TreeNode* root) 
     {
        if(!root) 
        return ;

        postorder(root->left) ;
        postorder(root->right) ;

        ans.push_back(root->val) ;
        

     } 
    vector<int> postorderTraversal(TreeNode* root) {

        postorder(root) ;
        return ans ;
        
    }
};

```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- **Solution Link:** [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)


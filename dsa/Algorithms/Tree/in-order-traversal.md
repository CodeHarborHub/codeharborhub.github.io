---
id: in-order-traversal
title: in-order-traversal
sidebar_label: In Order Traversal
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "This is a solution to the Binary Tree In Order Traversal problem on LeetCode."
---

## Problem Description
Given the root of a binary tree, return the inorder traversal of its nodes' values.

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

## Solution for Binary Tree Pre Order Traversal
  
### Intuition
- Recursive is very easy try with iterative way

### Code in Different Languages


<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@parikhitkurmi"/>
    
   ```python
//python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:

        def InOrder(root,arr):
            
            if root is None:
                return

            else:
                InOrder(root.left,arr)
                arr.append(root.val)
                InOrder(root.right,arr)

            return arr

        return InOrder(root,[])            
        

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
    public List<Integer> inorderTraversal(TreeNode root) {
        
        List<Integer> ans = new ArrayList<>();
        ArrayDeque<TreeNode> stack = new ArrayDeque<>();

        TreeNode cur = root;

        while(cur != null || !stack.isEmpty()) {

            while(cur != null) {

                stack.push(cur);
                cur = cur.left;
            }

            TreeNode pop = stack.pop();
            ans.add(pop.val);

            cur = pop.right;
        }
        return ans;
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
      void inorder (TreeNode* root) {

    // inorder(LNR)
 
    if(!root) 
    return ;


   
    inorder(root->left) ;


    ans.push_back(root->val);

    
    inorder(root->right) ;


} 
    vector<int> inorderTraversal(TreeNode* root) {

        inorder(root) ;

         return ans ; 
        
    }
};

```

  </TabItem>
</Tabs>





## References

- **LeetCode Problem:** [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- **Solution Link:** [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/)
- **Authors GeeksforGeeks Profile:** [parikhit kurmi](https://www.geeksforgeeks.org/user/sololeveler673/)
- **Authors Leetcode:** [parikhit kurmi](https://leetcode.com/u/parikhitkurmi14/)


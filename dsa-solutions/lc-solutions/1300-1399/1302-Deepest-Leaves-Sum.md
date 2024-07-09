---
id: Deepest-Leaves-Sum.
title: Deepest Leaves Sum.
sidebar_label: 1302-Deepest-Leaves-Sum
tags:
  - Tree
  - DFS
  - BFS
description: "This is a solution to the Deepest Leaves Sum problem on LeetCode."
---

## Problem Description

Given the root of a binary tree, return the sum of values of its deepest leaves.

### Examples

**Example 1:**

```
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
```
**Example 2:**

```
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
```

### Constraints

- The number of nodes in the tree is in the range `[1, 104]`.
- `1 <= Node.val <= 100`


## Deepest Leaves Sum


### Code in Different Languages


```cpp
class Solution {
public:
    int deepestLeavesSum(TreeNode* root) {

        queue<TreeNode*>que;
         int ans=0;
        que.push(root);
        //we push root of every level in queue and while pushing we calculate the sum and store that sum in ans varible when we at last we return ans varibale
        que.push(NULL);
        int sum =root->val;
        ans=sum;
        sum=0;
    while(!que.empty()){
        if(que.front()==NULL && que.size()==1){
            break;
            //condition for break the loop
         }
        TreeNode* temp =que.front();
          if(temp==NULL){
               ans=sum;
               sum=0;
               que.push(NULL);
               //if we see null means one level is completed we store the sum in ans and empty the sum
          }
          else{
            if(temp->left!=NULL){
             que.push(temp->left);
             //pushing next level in queue
        
             sum+=temp->left->val;
             // adding the value in the sum
           }
           if(temp->right!=NULL){
              que.push(temp->right);
             sum+=temp->right->val;
           }

          }
          
         que.pop();
    }

     return ans;   
    }
};

```


```java
class Solution {
    public int deepestLeavesSum(TreeNode root) {
        int level=getHeight(root);
        return helper(root,level);        
    }
    public  int getHeight(TreeNode root) {
        if (root == null)
            return 0;
        else {
            int leftHeight = getHeight(root.left);
            int rightHeight = getHeight(root.right);
            
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
    public int helper(TreeNode root,int level){
        if(root==null){
            return 0;
        }
        if(level==1){
            return root.val;
        }
        return helper(root.left,level-1)+helper(root.right,level-1);
    }
}
```



```python
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        deepestLevel = 0
        currSum = 0
        def dfs(root,level):
            nonlocal deepestLevel,currSum
            if not root:
                return 
            if level==deepestLevel:
                currSum+=root.val
            elif level>deepestLevel:
                deepestLevel = level
                currSum = root.val 
            dfs(root.left,level+1)
            dfs(root.right,level+1)
        dfs(root,0)
        return currSum
```


### Complexity Analysis

#### Time complexity: O(n)

#### Space complexity: O(n)


## References

- **LeetCode Problem**: [Deepest Leaves Sum](https://leetcode.com/problems/smallest-range-ii/description/](https://leetcode.com/problems/deepest-leaves-sum/description/)

- **Solution Link**: [Deepest Leaves Sum](https://leetcode.com/problems/smallest-range-ii/solutions/](https://leetcode.com/problems/deepest-leaves-sum/solutions/5397378/dfs-solution-python/)

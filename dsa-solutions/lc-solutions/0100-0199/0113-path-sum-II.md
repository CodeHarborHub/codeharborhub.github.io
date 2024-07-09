---
id: path-sum-II
title: Path Sum-II
sidebar_label:  0113-Path Sum-II
tags:
  - Tree
  - Depth-First Search

description: "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references."
---

## Problem Description

Given the `root` of a binary tree and an integer `targetSum`, return all `root-to-leaf `paths where the sum of the node values in the path equals `targetSum`. Each path should be returned as a list of the node values, not node references.

A` root-to-leaf` path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.



### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
```
**Example 2:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
```
Input: root = [1,2,3], targetSum = 5
Output: []
```

**Example 3:**
```
Input: root = [1,2], targetSum = 0
Output: []
```

### Constraints

- The number of nodes in the tree is in the range `[0, 5000]`.
- `1000 <= Node.val <= 1000`
- `1000 <= targetSum <= 1000`

#### Code in Different Languages

### C++
```c++
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
    vector<vector<int>> ans;
    void helper(TreeNode* root,int targetsum,int currentsum,vector<int>&v){
        if(root==nullptr){
            return;
        }
        v.push_back(root->val);
        currentsum+=root->val;
        if(targetsum==currentsum&&root->left==nullptr&&root->right==nullptr){
            ans.push_back(v);
        }
        helper(root->left,targetsum,currentsum,v);
        helper(root->right,targetsum,currentsum,v);
        v.pop_back();
    }
    vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
        if(root==nullptr){
            return ans;
        }
        ans.clear();
        vector<int> v;
        helper(root,targetSum,0,v);
        return ans;
    }
};
```

### Java
```java

class Solution {
    public void backtrack(TreeNode root,int target, List<List<Integer>> ans, List<Integer> list){
        if(root==null){
            return;
        }
        list.add(root.val);
        if(root.left ==null && root.right==null && root.val==target){
            ans.add(new ArrayList<>(list));
        }else{
            backtrack(root.left,target-root.val,ans,list);
            backtrack(root.right,target-root.val,ans,list);
        }
        list.remove(list.size()-1);        
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> ans = new ArrayList<>();
        backtrack(root,targetSum,ans, new ArrayList<>());
        return ans;
    }
}
```

### Python
```Python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root:
            return []
        # dfs function to find path from root to leaf
        def dfs(root,path):
            # to check if node is leaf
            if not root.left and not root.right:
                # if leaf then check if path sum matches target sum
                if targetSum==sum(path+[root.val]):
                    # if yes then add path to result array
                    return res.append(path+[root.val])
            # recursively cal for left and right nodes till leaf node
            if root.left:
                dfs(root.left,path+[root.val])
            if root.right:
                dfs(root.right,path+[root.val])
        # create a result array
        res=[]
        # call the function for root
        dfs(root,[])
      return res
```

#### Complexity Analysis

- Time complexity:
`O(n)`
Each node is visited once, so the time complexity is linear with respect to the number of nodes.

- Space complexity:
`O(n)`
The space complexity is due to the recursion stack and the path list, both of which can go up to the depth of the tree (in the worst case, the depth is n for a skewed tree)

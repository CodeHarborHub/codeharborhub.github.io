---
id: Binary-Tree-Level-Order-Traversal-II
title: Binary Tree Level Order Traversal II
sidebar_label: 0107-Binary-Tree-Level-Order-Traversal-II
tags:
  - Tree
  - Breadth-First-Search
  - Binary Tree
description: "Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 "
---


### Problem Description

Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 
### Examples

#### Example 1

- **Input:** `root = [3,9,20,null,null,15,7]`
- **Output:** `[[15,7],[9,20],[3]]`

#### Example 2

- **Input:** `root = [1]`
- **Output:** `[[1]]`

#### Example 3

- **Input:** `root = []`
- **Output:** `[]`

### Constraints

- The number of nodes in the tree is in the range [0, 2000].
- $-1000 \leq \text{Node.val} \leq 1000$

### Solution Code

#### Python

```python
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        result = []
    
        if not root:
            return result
    
        queue = [root]
    
        while queue:
            level_size = len(queue)
            current_level = []
        
            for _ in range(level_size):
                node = queue.pop(0)
                current_level.append(node.val)
            
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        
            result.insert(0, current_level)
    
        return result
```

#### Java

```java
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> lists = new ArrayList<>();
        levelOrderTraversal(root, lists);
        Collections.reverse(lists);
        return lists;
    }
    
    void levelOrderTraversal(TreeNode root, List<List<Integer>> lists) {
        if (root == null) {
            return;
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> level = new ArrayList<>();
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }
            
            lists.add(level);
        }
    }
}
```

#### C++

```cpp

class Solution {
public:
    vector<vector<int>> levelOrderBottom(TreeNode* root) {
        if (!root)  return {};
        vector<vector<int>> ans;
        queue<TreeNode*> q;
        q.push(root);
        q.push(NULL);
        vector<int> temp;

        while(!q.empty()){
            auto it=q.front();
            q.pop();
            if (it)
                temp.push_back(it->val);
            if (!it){
                ans.push_back(temp);
                temp.clear();
                if (!q.empty())
                    q.push(NULL);
            }
            else{
                if (it->left)
                    q.push(it->left);
                if (it->right)
                    q.push(it->right);
            }

        }
        reverse(ans.begin(),ans.end());
        return ans;
    }//Hope you would have got it!
};
```
#### Javascript

```javascript
var levelOrderBottom = function (root) {
    if(!root) return [];
    
    const results = [];
    const queue = [root];
    
    while(queue.length){
        const current_level_length = queue.length;
        const current_level_values = [];
        
        for(let i=0; i < current_level_length; i++){
            const node = queue.shift();
            current_level_values.push(node.val)    
            if(node.left)  queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        results.unshift(current_level_values)
    }

    return results; // we could have use .reverse() here, but using shift is o(n) & faster, whereas sort is n logn
}
```

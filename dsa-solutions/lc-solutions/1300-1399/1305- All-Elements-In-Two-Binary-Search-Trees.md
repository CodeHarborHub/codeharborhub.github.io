---
id: all-elements-in-two-binary-search-trees
title: All Elements in Two Binary Search Trees
sidebar_label: 1305- All Elements in Two Binary Search Trees
tags:
  - Tree
  - DFS
  - BFS
  - Sorting
  - Binary Tree
description: "This is a solution to the All Elements in Two Binary Search Trees."
---

## Problem Description

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

### Examples

**Example 1:**

```
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
```
**Example 2:**

```
Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
```

### Constraints

- The number of nodes in each tree is in the range `[0, 5000]`.
- `-105 <= Node.val <= 105`


## All Elements in Two Binary Search Trees


### Code in Different Languages


```cpp

class Solution {

public:
    vector<int> getAllElements(TreeNode* a, TreeNode* b) {
        vector<int> A,B;
        Inorder(a,A);
        Inorder(b,B);

        return Merge(A,B);
    }   

private:

    vector<int> Merge(vector<int>A,vector<int>B)
    {
        int a=A.size(), b=B.size();
        vector<int> V (a+b);

        int i=0,j=0,k=0;
        while(i<a && j<b)
            if (A[i] < B[j]) V[k++]=A[i++];
            else  V[k++]=B[j++];
        
        while(i<a) V[k++]=A[i++];
        while(j<b) V[k++]=B[j++];

        return V;
    }

    void Inorder(TreeNode* a,vector<int>& v)
    {
        if(!a) return ;

        Inorder(a->left,v);
        v.push_back(a->val);
        Inorder(a->right,v);
    }
};

```


```java
class Solution {
    private List<Integer> l = new ArrayList<>();
    private void inorder_r1(TreeNode root1){
        if (root1==null) {
            return;
        }

        l.add(root1.val);
        inorder_r1(root1.left);
        inorder_r1(root1.right);
    }
    private void inorder_r2(TreeNode root2){
        if (root2==null) {
            return;
        }

        l.add(root2.val);
        inorder_r2(root2.left);
        inorder_r2(root2.right);
    }
    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        if (root1 != null) {
            inorder_r1(root1);
        }
        if (root2!=null) {
            inorder_r1(root2);
        }

        Collections.sort(l);
        return l;
    }
}
```



```python
class Solution(object):
    def inorder(self,root,res):
            if not root:
                return
            self.inorder(root.left,res)
            res.append(root.val)
            self.inorder(root.right,res)

    def getAllElements(self, root1, root2):
        res1 = []
        res2 = []
        
        self.inorder(root1,res1)
        self.inorder(root2,res2)
        
        ans = []
        while len(res1) > 0 and len(res2) > 0:
            if res1[0] >= res2[0]:
                ans.append(res2.pop(0))
            else:
                ans.append(res1.pop(0))
        ans += res1 if len(res1) > 0 else res2
        return ans
```


### Complexity Analysis

#### Time complexity: O(n)

#### Space complexity: O(n)


## References

- **LeetCode Problem**: [All Elements in Two Binary Search Trees]([https://leetcode.com/problems/smallest-range-ii/description/](https://leetcode.com/problems/deepest-leaves-sum/description/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/))

- **Solution Link**: [All Elements in Two Binary Search Trees]([https://leetcode.com/problems/smallest-range-ii/solutions/](https://leetcode.com/problems/deepest-leaves-sum/solutions/5397378/dfs-solution-python/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/5136840/one-pass-extremely-detailed-explanation/))

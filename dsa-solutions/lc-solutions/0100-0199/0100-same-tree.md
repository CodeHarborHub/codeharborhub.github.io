---
id: same-tree
title: Same Tree Solution
sidebar_label: 0100 Same Tree
tags:
  - Binary Tree
  - Recursion
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Same Tree problem on LeetCode."
---

## Problem Description

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

### Examples

**Example 1:**

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

**Example 2:**

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

**Example 3:**

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

### Constraints

- The number of nodes in both trees is in the range `[0, 100]`.
- $-10^4 <=$ Node.val $<= 10^4$

## Solution for Same Tree Problem

### Intuition

The intuition behind the solution is to recursively check if two binary trees are identical. If both trees are empty (null), they are considered identical. If only one tree is empty or the values of the current nodes are different, the trees are not identical. Otherwise, we recursively check if the left and right subtrees of both trees are identical.

### Approach

1. Check the base case: if both trees are null, return true.
2. Check if only one tree is null or the values of the current nodes are different, return false.
3. Recursively check if the left subtrees of both trees are identical.
4. Recursively check if the right subtrees of both trees are identical.
5. Return the logical AND of the results from steps 3 and 4.

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" >
  <SolutionAuthor name="@Vipullakum007"/>
   ```javascript
    function isSameTree(p, q) {
        if (p === null && q === null) {
            return true;
        }
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python" default>

  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    class Solution:
        def isSameTree(self, p, q):
            if p is None and q is None:
                return True
            if p is None or q is None or p.val != q.val:
                return False
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
    class Solution {
        public boolean isSameTree(TreeNode p, TreeNode q) {
            if (p == null && q == null) {
                return true;
            }
            if (p == null || q == null || p.val != q.val) {
                return false;
            }
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    class Solution {
    public:
        bool isSameTree(TreeNode* p, TreeNode* q) {
            if (p == nullptr && q == nullptr) {
                return true;
            }
            if (p == nullptr || q == nullptr || p->val != q->val) {
                return false;
            }
            return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
    };
    ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time complexity**: The time complexity of the solution is $O(min(N,M))$, where N and M are the number of nodes in the two trees, respectively. This is because we need to visit each node once in order to compare their values.
- **Space complexity**: The space complexity of the solution is $O(min(H1,H2))$, where H1 and H2 are the heights of the two trees, respectively. This is because the space used by the recursive stack is determined by the height of the smaller tree.

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/generate-parentheses/)
- **Solution Link:** [Generate Parantheses Solution on LeetCode](https://leetcode.com/problems/generate-parentheses/solutions/5016750/easy-recursion-solution-in-c-100-beats-full-expanation-with-example/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://leetcode.com/u/vipul_lakum_02/)


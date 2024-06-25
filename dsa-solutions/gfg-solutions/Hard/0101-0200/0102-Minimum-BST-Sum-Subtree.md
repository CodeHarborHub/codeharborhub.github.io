---
id: minimum-bst-sum-subtree
title: Minimum-BST-Sum-Subtree (Geeks for Geeks)
sidebar_label: Minimum BST Sum Subtree
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Minimum BST Sum Subtree problem on Geeks for Geeks."
---
## Problem Description
Every house in the colony has at most one pipe going into it and at most one pipe going out of it. Tanks and taps are to be installed in a manner such that every house with one outgoing pipe but no incoming pipe gets a tank installed on its roof and every house with only an incoming pipe and no outgoing pipe gets a tap.
Given two integers n and p denoting the number of houses and the number of pipes. The connections of pipe among the houses contain three input values: a_i, b_i, d_i denoting the pipe of diameter d_i from house a_i to house b_i, find out the efficient solution for the network. 
The output will contain the number of pairs of tanks and taps t installed in first line and the next t lines contain three integers: house number of tank, house number of tap and the minimum diameter of pipe between them.

## Examples
**Example 1:**
**Input:** 
```
             5
         /    \
        4      6
       /        \
      3          7
     /
    1
```
**Output:** 1
**Example 2:**
**Input:** 
```
         9
              \
               10
                \
                 11
```
**Output:** 9
## Your Task
The task is to complete the function minValue() which takes root as the argument and returns the minimum element of BST. If the tree is empty, there is no minimum element, so return -1 in that case.
Expected Time Complexity: $O(Height of the BST)$
Expected Auxiliary Space: $O(1)$.
## Constraints
- `0 <= n <= 10^4`


## Your Task
The task is to complete the function minValue() which takes root as the argument and returns the minimum element of BST. If the tree is empty, there is no minimum element, so return -1 in that case.

Expected Time Complexity: $O(Height of the BST)$
Expected Auxiliary Space: $O(1)$.

## Constraints

- `0 <= n <= 10^4`

## Problem Explanation

The "Smallest Subtree with all the Deepest Nodes" is a problem where given a binary tree, you need to find the smallest subtree that contains all the deepest nodes. Let's break down the problem step-by-step:

**Problem Statement**
You are given a binary tree.
Your task is to find the smallest subtree that contains all the deepest nodes in the original tree.
**Key Points**
Deepest Nodes: Nodes that are at the maximum depth from the root of the tree.
Smallest Subtree: Among all subtrees containing these deepest nodes, the one with the smallest number of nodes.

### Code Implementation
<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def lca(self, root, p, q):
        if root in (None, p, q): return root
        l = self.lca(root.left, p, q)
        r = self.lca(root.right, p, q)
        return root if l and r else l or r
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        a = []
        def dfs(node, h):
            if not node:
                return
            if len(a) == h:
                a.append([])
            a[h].append(node)
            dfs(node.left, h+1)
            dfs(node.right, h+1)
        dfs(root, 0)
        p, q = a[-1][0], a[-1][-1]
        return self.lca(root, p, q)
  ```
  </TabItem>
  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    TreeNode* subtreeWithAllDeepest(TreeNode* root) {
        vector<TreeNode*> temp;
        vector<vector<TreeNode*>> level;
        unordered_map<TreeNode*,TreeNode*> hash;
        queue<pair<TreeNode*,TreeNode*>> q;
        q.push({root,NULL});
        q.push({NULL,NULL});
        hash[root] = NULL;
        while (!q.empty())
        {
            auto [node,parent] = q.front();q.pop();
            if (node == NULL)
            {
                level.push_back(temp);
                temp.clear();
                if (q.size()>0)
                {
                    q.push({NULL,NULL});
                }
            }
            else
            {
                temp.push_back(node);
                hash[node] = parent;
                if (node->left)
                {
                    q.push({node->left,node});
                }
                if (node->right)
                {
                    q.push({node->right,node});
                }
            }
        }
        temp = level.back();
        queue<TreeNode*> qe;
        unordered_map<TreeNode*,int> vis;
        for (auto leaves : temp)
        {
            vis[leaves] = 1;
            qe.push(leaves);
        }
        while (!qe.empty())
        {
            int sz = qe.size();
            if (sz == 1)
            {
                return qe.front();
            }
            while (sz--)
            {
                auto node = qe.front();qe.pop();

            while (sz--)
            {
                auto node = qe.front();qe.pop();
                auto parent = hash[node];
                if (vis.find(parent) == vis.end())
                {
                    vis[parent] = 1;
                    qe.push(parent);
                }
            }
        }
        return NULL;
    }
};
  ```
  </TabItem>
</Tabs>


## Solution Logic
**DFS to Collect Nodes by Depth:**
- You initialize an empty list a to store nodes at each depth.
- The dfs function is called with the root node and depth 0.
- For each node, if the current depth h matches the length of a, it means you have reached a new depth level, so you append an empty list to a.
- The node is then added to the appropriate sublist corresponding to its depth.
- The function is recursively called for left and right children, incrementing the depth by 1 for each recursive call.
**Finding the LCA:**
- After collecting all nodes, p and q are set to the first and last nodes in the deepest level sublist (a[-1]).
- The lca function is a recursive function that finds the lowest common ancestor of p and q.
- If the current node root is None, p, or q, it returns root.
- Otherwise, it recursively calls lca on the left and right children.
- If both recursive calls return non-None values, it means p and q are found in different subtrees, and thus the current node root is their LCA.
- If only one side returns a non-None value, it means both p and q are in the same subtree, so the LCA is in that subtree.
## Time Complexity
$O(Height of the BST)$
## Space Complexity
Expected Auxiliary Space: $O(1)$.
## Resources
- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/find-the-minimum-element-in-a-binary-search-tree/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |
This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.

## Time Complexity
$O(Height of the BST)$

## Space Complexity

Expected Auxiliary Space: $O(1)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/find-the-minimum-element-in-a-binary-search-tree/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.


---
id: k-distance-from-root
title: K Distance From Root
sidebar_label: 0111-K Distance From Root
tags:
  - Tree
  - Data Structures
description: "A solution to the problem of finding all the nodes which are at a distance k from the root"
---

In this page, we will solve the problem of finding all the nodes which are at a distance k from the root.

## Problem Description

Given a binary tree having n nodes and an integer k. Print all nodes that are at distance k from the root (root is considered at distance 0 from itself). Nodes should be printed from left to right.
### Examples

**Example 1:**

```plaintext
Input:
k = 0
      1
    /   \
   3     2
Output: 
1
Explanation: 
1 is the only node which is 0 distance from the root 1.
```

**Example 2:**

```plaintext
Input:
k = 3
        1
       /
      2
       \
        1
      /  \
     5    3
Output: 
5 3
Explanation:  
5 and 3 are the nodes which are at distance 3 from the root 3.
Here, returning 3 5 will be incorrect.
```


### Constraints

- $1 \leq$ n $\leq10^4$
- $0 \leq$ k $\leq30$
  
## Solution

### Intuition and Approach

The problem can be solved by using BFS traversal.This approach combines setting parent references to enable upward traversal and performing a breadth-first search to find nodes at the specified distance.
Adding parent references to each node, we can easily move from a node to its parent, facilitating traversal in all directions (up, left, right).
Starting from the target node, we explore all nodes at increasing distances.
By keeping track of visited nodes, we ensure that each node is processed only once, preventing cycles and redundant work.
When the distance from the target node matches k, we add the node's value to the result list.

### Approach: BFS
1. We will first create a helper function make_parent that recursively traverses the tree, setting a parent attribute for each node. This allows upward traversal.Then we call make_parent with the root node and None as the parent.
2. We then initialize data structures
   - ans: A list to store the values of nodes at distance k from the target node.
   - seen: A set to track visited nodes and prevent reprocessing.
3. We will create a recursive traversal function trav. This function takes the current node and the distance from the target node as arguments.
   - If the current node is None, already visited, or the distance exceeds k, the function returns.
   - Add the current node to the seen set to mark it as visited.
   - If the current distance matches k, add the node's value to the ans list.
   - Then recursively call trav for the parent, left child, and right child, increasing the distance by 1 for each call.
4. Start the traversal from the root node with an initial distance of 0.
5. Return the ans list containing the values of nodes at distance k from the root.

### Code in Python
```python
class Solution:
    def KDistance(self,root,k):
        '''
        :param root: root of given tree.
        :param k: distance k from root
        :return: list of all nodes that are at distance k from root.
        '''
        # code here
        def make_parent(node,parent):
            if not node:
                return 
            node.parent=parent
            make_parent(node.left,node)
            make_parent(node.right,node)
        
        make_parent(root,None)
        ans=[]
        seen=set()

        def trav(node,dist):
            if not node or node in seen or dist>k:
                return 
            seen.add(node)
            if dist==k:
                ans.append(node.data)
                return
            trav(node.parent,dist+1)
            trav(node.left,dist+1)
            trav(node.right,dist+1)
        trav(root,0)
        return ans
```

### Complexity Analysis

- **Time Complexity:** $O(N)$
- **Space Complexity:** $O(N)$


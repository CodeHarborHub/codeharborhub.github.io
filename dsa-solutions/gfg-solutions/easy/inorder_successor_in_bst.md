---
id: inorder_successor_in_bst
title: Inorder Successor In BST
sidebar_label: 0102-Inorder Successor In BST
tags:
  - binary search tree
  - data-structures
description: "A solution to the problem of determining the inorder successor of given element in BST"
---

In this page, we will solve the problem of determining the inorder successor of given element in BST.

## Problem Description

Given a BST, and a reference to a Node x in the BST. Find the Inorder Successor of the given node in the BST.

### Examples

**Example 1:**

```plaintext
Input:
      2
    /   \
   1     3
K(data of x) = 2

Output: 3 

Explanation: 
Inorder traversal : 1 2 3 
Hence, inorder successor of 2 is 3.
```

**Example 2:**

```plaintext
Input:
             20
            /   \
           8     22
          / \
         4   12
            /  \
           10   14
K(data of x) = 8

Output: 10

Explanation:
Inorder traversal: 4 8 10 12 14 20 22
Hence, successor of 8 is 10.
```

### Constraints

- $1 \leq N \leq10^5$, where $N$ is number of nodes

## Solution

### Intuition and Approach

This problem can be solved by a simple approach of Inorder Traversal 
<Tabs>
 <tabItem value="Inorder Traversal" label="Inorder Traversal">

### Approach: Inorder Traversal

1. Initialize an empty list 'traversal' to store the nodes of the tree in inorder traversal.
2. Then we define a helper function inorder_traversal to perform an inorder traversal of the tree and populate the traversal list. This function takes root as an argument. If root is None, it simply returns, indicating the base case of the recursion.
3. Within the helper function inorder_traversal, we first recursively call inorder_traversal on the left child of the current node.
4. We then append the current node to the traversal list.
5. Next, we recursively call inorder_traversal function on the right child of the current node.
6. After populating the traversal list, we iterate through the list to find the node whose value matches x.data. We do this using a for loop that iterate through the traversal list and find the successor of the element x by checking if the data of the current node (traversal[i].data) is equal to the data of the node x (x.data).
7. If the condition is met, it means we have found the node x. The inorder successor of x is the next node in the ans list (traversal[i + 1]). We return this node as the result.

#### Code in Python
```python
class Solution:
    # returns the inorder successor of the Node x in BST (rooted at 'root')
    def inorderSuccessor(self, root, x):
        # Code here
        traversal_list=[]
        def inorder_traversal(root):
            if root is None:return 
            inorder_traversal(root.left)
            traversal_list.append(root)
            inorder_traversal(root.right)
        inorder_traversal(root)
        for i in range(len(traversal_list)-1):
            if traversal_list[i].data==x.data:
                return traversal_list[i+1]
        return None
```

#### Complexity Analysis

- **Time Complexity:** $O(N)$
- **Space Complexity:** $O(N)$

</tabItem>
</Tabs>

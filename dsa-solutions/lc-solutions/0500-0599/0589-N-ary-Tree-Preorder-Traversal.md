---
id: n-ary-tree-preorder-traversal
title: N-ary Tree Preorder Traversal(LeetCode)
sidebar_label: 0589-N-ary Tree Preorder Traversal
tags:
  - Stack
  - Tree
  - Depth-first search
description: Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
---

## Problem Statement

Given the `root` of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/10ac19a3-6628-46b8-99fe-1da89fa67210)

```plaintext
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/b40bd1b8-ad90-47fc-b034-7aa97b4ca6a6)

```plaintext
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

### Constraints

- The number of nodes in the tree is in the range `[0, 104]`.
- `0 <= Node.val <= 104`
- The height of the n-ary tree is less than or equal to `1000`.

## Solution

Preorder traversal is a common tree traversal method where the nodes are visited in the order: root, then the children from left to right. We will explore two approaches to perform preorder traversal on an N-ary tree: a recursive solution and an iterative solution.

### Approach 1: Recursive Solution

#### Algorithm

1. Define a recursive function `dfs` that takes a node and an output list as arguments.
2. If the node is `None`, return immediately.
3. Append the value of the node to the output list.
4. Recursively call the `dfs` function on each child of the node.
5. The main function `preorder` initializes the output list and calls the `dfs` function with the root node.

#### Implementation

```Python
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children

class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        
        output = []
        
        # Perform DFS on the root and get the output stack
        self.dfs(root, output)
        
        # Return the output of all the nodes.
        return output
    
    def dfs(self, root, output):
        # If root is none, return 
        if root is None:
            return
        
        # For preorder, we first add the root value
        output.append(root.val)
        
        # Then add all the children to the output
        for child in root.children:
            self.dfs(child, output)
```

### Complexity Analysis

- **Time complexity**: $O(N)$ - where N is the number of nodes in the tree. Each node is visited exactly once.
- **Space complexity**: $O(H)$ - where H is the height of the tree. This is due to the recursion stack.

### Approach 2: Iterative Solution

#### Algorithm

1. Initialize a stack with the root node.
2. Initialize an empty output list.
3. While the stack is not empty:
* Pop the last element from the stack and append its value to the output list.
* Extend the stack with the children of the popped node in reverse order.
4. Return the output list.
  
#### Implementation 

```Python
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children

class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if root is None:
            return []
        
        stack = [root]
        output = []
        
        # Till there is an element in the stack, the loop runs.
        while stack:
            # Pop the last element from the stack and store it into temp.
            temp = stack.pop()
            
            # Append the value of temp to output
            output.append(temp.val)
            
            # Add the children of the temp into the stack in reverse order.
            # Children of 1 = [3, 2, 4], if not reversed then 4 will be popped out first from the stack.
            # If reversed then stack = [4, 2, 3]. Here 3 will pop out first.
            # This continues till the stack is empty.
            stack.extend(temp.children[::-1])
        
        # Return the output
        return output
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)
  
### Conclusion

Both the recursive and iterative solutions for preorder traversal of an N-ary tree have similar time complexities of O(N), making them efficient for large trees. The recursive solution has a space complexity of O(H), making it potentially less efficient for deep trees due to the recursion stack. The iterative solution has a space complexity of O(N), which can handle all nodes without the risk of a stack overflow. The choice between the two approaches depends on the specific constraints and requirements of the problem at hand.

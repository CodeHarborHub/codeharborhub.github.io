---
id: n-ary-tree-postorder-traversal
title: N-ary Tree Postorder Traversal(LeetCode)
sidebar_label: 0590-N-ary Tree Postorder Traversal
tags:
  - Stack
  - Tree 
  - Depth-first Search
description: Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
---

## Problem Statement

Given the `root` of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/e09ffccb-f2c1-4e3f-9a4b-e554cc82ff86)

```plaintext
Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/d38f03bc-d137-45ba-980c-763da4a0901c)

```plaintext
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
```

### Constraints

- The number of nodes in the tree is in the range `[0, 104]`.
- `0 <= Node.val <= 104`
- The height of the n-ary tree is less than or equal to `1000`.

## Solution

Postorder traversal is another common tree traversal method where the nodes are visited in the order: all children from left to right, then the root. We will explore two approaches to perform postorder traversal on an N-ary tree: an iterative solution and a recursive solution.

### Approach 1: Iterative Solution

#### Algorithm

1. Initialize an empty `list` list to store the result.
2. If the root is `null`, return the empty list.
3. Initialize a stack and push the root node onto the stack.
4. While the stack is not empty:
* Pop the last element from the stack.
* Append the value of the popped node to the list.
* Push all children of the popped node onto the stack.
5. Reverse the list to get the correct postorder traversal.
6. Return the list.

#### Implementation

```Java
class Solution {
    public List<Integer> postorder(Node root) {
        List<Integer> list = new ArrayList<>();
        if (root == null) return list;
        
        Stack<Node> stack = new Stack<>();
        stack.add(root);
        
        while (!stack.isEmpty()) {
            root = stack.pop();
            list.add(root.val);
            for (Node node: root.children)
                stack.add(node);
        }
        Collections.reverse(list);
        return list;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Approach 2: Recursive Solution

#### Algorithm

1. Initialize an empty list `list` to store the result.
2. Define a recursive function `postorder` that takes a node as an argument.
3. If the node is `null`, return the list.
4. Recursively call the `postorder` function on each child of the node.
5. Append the value of the node to the list after visiting all children.
6. Return the list.
  
#### Implementation 

```Java
class Solution {
    List<Integer> list = new ArrayList<>();
    public List<Integer> postorder(Node root) {
        if (root == null)
            return list;
        
        for (Node node: root.children)
            postorder(node);
        
        list.add(root.val);
        
        return list;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(H)$

### Conclusion

Both the iterative and recursive solutions for postorder traversal of an N-ary tree have similar time complexities of O(N), making them efficient for large trees. The recursive solution has a space complexity of O(H), making it potentially less efficient for deep trees due to the recursion stack. The iterative solution has a space complexity of O(N), which can handle all nodes without the risk of a stack overflow. The choice between the two approaches depends on the specific constraints and requirements of the problem at hand.

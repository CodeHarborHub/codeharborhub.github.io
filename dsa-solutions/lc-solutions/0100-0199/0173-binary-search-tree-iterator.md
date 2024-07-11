---
id: binary-search-tree-iterator
title: Binary Search Tree Iterator
sidebar_label: 0173-Binary Search Tree Iterator
tags: [Tree, Stack, Design]
description: Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
---

## Problem Statement

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling `next()` will return the next smallest number in the BST.

### Examples

**Example 1:**

```plaintext
Input:
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]

Output:
[null, 3, 7, true, 9, true, 15, true, 20, false]

Explanation:
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False
```


### Constraints

- The number of nodes in the tree is in the range $[1, 10^5]$.
- $0 \leq Node.val \leq 10^6$
- At most $10^5$ calls will be made to `hasNext` and `next`.


## Solution

### Approach 

To implement the BST iterator, we will use an explicit stack to simulate the in-order traversal of the BST. The stack will store the nodes, and we will push all the left children of the current node onto the stack. The `next()` method will pop the top node from the stack, process it, and then push all the left children of its right child onto the stack. The `hasNext()` method will simply check if the stack is non-empty.



#### Algorithm

1. Initialization:  
- Initialize an empty stack.
- Push all the left children of the root node onto the stack.

2. `next()` Method:
- Pop the top node from the stack.
- If the node has a right child, push all the left children of the right child onto the stack.
- Return the value of the popped node.
3. `hasNext()` Method:
- Return true if the stack is non-empty, otherwise return false.




#### Implementation

```Java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class BSTIterator {
    private Stack<TreeNode> stack;

    public BSTIterator(TreeNode root) {
        stack = new Stack<>();
        pushAllLeft(root);
    }

    /** @return the next smallest number */
    public int next() {
        TreeNode node = stack.pop();
        pushAllLeft(node.right);
        return node.val;
    }

    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return !stack.isEmpty();
    }

    private void pushAllLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }
}

```

### Complexity Analysis

- **Time complexity**: $O(1)$ on average for `next()` and `hasNext()`.
    * Each node is pushed and popped from the stack exactly once, so the amortized time for each operation is constant.

- **Space complexity**: $O(h)$, where `h` is the height of the tree.
    * In the worst case, the stack will contain all the nodes along the path from the root to the leftmost leaf.

### Conclusion

The BST iterator efficiently simulates the in-order traversal of a BST using an explicit stack. This approach ensures that the `next()` and `hasNext()` methods operate in constant time on average, making the iterator suitable for handling large BSTs.

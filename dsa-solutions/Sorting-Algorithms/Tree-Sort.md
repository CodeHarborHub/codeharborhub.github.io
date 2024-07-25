--
id: Tree-Sort
title: Tree Sort (Geeks for Geeks)
sidebar_label: Tree Sort
tags:
  - Intermediate
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Tree Sort problem on Geeks for Geeks."
---

## 1. What is Tree Sort?

Tree Sort is a sorting algorithm that uses a Binary Search Tree (BST) to sort elements. The elements are inserted into a BST and then an in-order traversal is performed to retrieve them in sorted order.

## 2. Algorithm for Tree Sort

1. Create an empty Binary Search Tree (BST).
2. Insert all elements from the array into the BST.
3. Perform an in-order traversal of the BST to retrieve the elements in sorted order.

## 3. How does Tree Sort work?

- Each element from the array is inserted into a BST.
- During the in-order traversal of the BST, elements are retrieved in ascending order because the left subtree is visited first, followed by the root, and then the right subtree.

## 4. Problem Description

Given an array of integers, implement the Tree Sort algorithm to sort the array.

## 5. Examples

**Example 1:**

```
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]
```

**Example 2:**
```
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]

```

## 6. Constraints

- The array should contain at least one element.

## 7. Implementation

**Python**
```python
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return TreeNode(key)
    else:
        if key < root.val:
            root.left = insert(root.left, key)
        else:
            root.right = insert(root.right, key)
    return root

def inorder_traversal(root, res):
    if root:
        inorder_traversal(root.left, res)
        res.append(root.val)
        inorder_traversal(root.right, res)

def tree_sort(arr):
    if not arr:
        return []
    root = TreeNode(arr[0])
    for key in arr[1:]:
        insert(root, key)
    sorted_array = []
    inorder_traversal(root, sorted_array)
    return sorted_array

```
```java
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int item) {
        val = item;
        left = right = null;
    }
}

public class TreeSort {
    TreeNode root;

    void insert(int key) {
        root = insertRec(root, key);
    }

    TreeNode insertRec(TreeNode root, int key) {
        if (root == null) {
            root = new TreeNode(key);
            return root;
        }
        if (key < root.val) {
            root.left = insertRec(root.left, key);
        } else if (key > root.val) {
            root.right = insertRec(root.right, key);
        }
        return root;
    }

    void inorderRec(TreeNode root, List<Integer> res) {
        if (root != null) {
            inorderRec(root.left, res);
            res.add(root.val);
            inorderRec(root.right, res);
        }
    }

    public static List<Integer> treeSort(int[] arr) {
        TreeSort tree = new TreeSort();
        for (int num : arr) {
            tree.insert(num);
        }
        List<Integer> sortedArray = new ArrayList<>();
        tree.inorderRec(tree.root, sortedArray);
        return sortedArray;
    }

    public static void main(String[] args) {
        int[] arr = {5, 1, 4, 2, 8, 0, 2};
        List<Integer> sortedArr = treeSort(arr);
        for (int num : sortedArr) {
            System.out.print(num + " ");
        }
    }
}

```

## 8. Complexity Analysis

- **Time Complexity**:
  -Best case: $O(n \log n)$ (balanced BST)
Average case: $O(n \log n)$ (balanced BST)
Worst case: $O(n^2)$ (unbalanced BST)

- **Space Complexity**: $O(n)$ (for the BST and recursion stack)

## 9. Advantages and Disadvantages

**Advantages:**
- Can achieve $O(n \log n)$ time complexity if the BST remains balanced.
- Simple to understand and implement.

**Disadvantages:**
- In the worst case (unbalanced BST), the time complexity degrades to $O(n^2)$.
- Requires additional memory for the tree structure, which is $O(n)$.
- The bidirectional approach does not significantly improve performance for most input cases.

## 10. References

- **GFG Article on Tree Sort:** [Geeks for Geeks Counting Sort](https://www.geeksforgeeks.org/cartesian-tree-sorting/)
- **Wikipedia Article on Tree Sort:** [Counting Sort - Wikipedia](https://en.wikipedia.org/wiki/Tree_sort)

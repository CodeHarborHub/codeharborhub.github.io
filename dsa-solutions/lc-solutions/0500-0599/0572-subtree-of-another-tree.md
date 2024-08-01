---
id: subtree-of-another-tree
title: Subtree of Another Tree(LeetCode)
sidebar_label: 0572-Subtree of Another Tree
tags:
  - Tree
  - Depth-first search
  - String matching
  - Binary Tree
  - Hash Function
description: Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
---

## Problem Statement

Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.

A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/ba7a84cb-159d-42f1-8f1f-7f38228290cf)

```plaintext
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/e55e6532-0895-4552-b27d-c877b7498e26)

```plaintext
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```

### Constraints

- The number of nodes in the root `tree` is in the range `[1, 2000]`.
- The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.
- `-104 <= root.val <= 104`
- `-104 <= subRoot.val <= 104`

## Solution

The problem is to determine whether one binary tree (subRoot) is a subtree of another binary tree (root). We will discuss two solutions: a naive approach and an optimized approach using serialization and the KMP algorithm.

### Approach 1: Naive Solution

#### Algorithm

1. Traverse each node in the main tree (root).
2. For each node, check if the subtree rooted at this node matches `subRoot` using a helper function.
3. The helper function recursively checks if two trees are identical by comparing the current nodes and their left and right subtrees.
4. Return `true` if any subtree matches `subRoot`, otherwise return `false`.

#### Implementation

```Java
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) return false;
        if (isSameTree(root, subRoot)) return true;
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }

    private boolean isSameTree(TreeNode s, TreeNode t) {
        if (s == null && t == null) return true;
        if (s == null || t == null) return false;
        if (s.val != t.val) return false;
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(M * N)$ - where M is the number of nodes in root, and N is the number of nodes in subRoot.
- **Space complexity**: $O(H)$ - where H is the height of root due to the recursion stack.

### Approach 2: Serialize in Preorder then KMP

#### Algorithm

1. Serialize both `root` and `subRoot` using preorder traversal, including markers for null nodes to ensure uniqueness of the serialization.
2. Use the KMP (Knuth-Morris-Pratt) algorithm to check if the serialized string of `subRoot` is a substring of the serialized string of `root`.
  
#### Implementation 

```Java
class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        String tree1 = serialize(root);
        String tree2 = serialize(subRoot);
        return kmp(tree1, tree2);
    }

    private String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    private void serializeHelper(TreeNode root, StringBuilder sb) {
        if (root == null) {
            sb.append("#,");
            return;
        }
        sb.append(root.val).append(",");
        serializeHelper(root.left, sb);
        serializeHelper(root.right, sb);
    }

    private boolean kmp(String s, String p) {
        int[] lps = buildLPS(p);
        int i = 0, j = 0;
        while (i < s.length()) {
            if (s.charAt(i) == p.charAt(j)) {
                i++;
                j++;
            }
            if (j == p.length()) {
                return true;
            } else if (i < s.length() && s.charAt(i) != p.charAt(j)) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return false;
    }

    private int[] buildLPS(String p) {
        int[] lps = new int[p.length()];
        int len = 0, i = 1;
        while (i < p.length()) {
            if (p.charAt(i) == p.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(M + N)$
- **Space complexity**: $O(M + N)$

### Conclusion

* The Naive Solution is straightforward but less efficient for large trees due to its O(M * N) time complexity.
* The Optimized Solution using serialization and KMP is more efficient with a time complexity of O(M + N), making it suitable for larger trees.
* Both solutions have linear space complexity relative to the size of the trees they handle.

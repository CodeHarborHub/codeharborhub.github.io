---
id: delete-nodes-and-return-forest
title: Delete Nodes And Return Forest
sidebar_label: Delete Nodes And Return Forest
tags: [Binary Tree, Depth-First Search, C++, Python, Java]
description: Solve the problem of deleting nodes from a binary tree and returning the forest of remaining trees using depth-first search.
---

## Problem Statement

### Problem Description

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in `to_delete`, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

### Example

**Example 1:**
```
Input: root = [1, 2, 3, 4, 5, 6, 7], to_delete = [3, 5]
Output: [[1, 2, null, 4], [6], [7]]
```

### Constraints

- The number of nodes in the given tree is at most 1000.
- Each node has a distinct value between 1 and 1000.
- `to_delete` contains distinct values between 1 and 1000.

## Solution

### Intuition

The problem can be solved using a depth-first search (DFS) approach. The idea is to traverse the tree and, whenever a node needs to be deleted (i.e., its value is in the `to_delete` list), we handle its children by potentially adding them to the forest if they are not to be deleted. We maintain a set of nodes to be deleted for quick lookup and use a helper function to perform the DFS and manage the forest creation.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**:
  - The solution involves a single traversal of the tree, making the time complexity $O(n)$, where `n` is the number of nodes in the tree.

- **Space Complexity**:
  - The space complexity is $O(n)$ due to the recursive call stack and storage for the result list.

### Code

#### C++

```cpp
class Solution {
public:
    vector<TreeNode*> delNodes(TreeNode* root, vector<int>& to_delete) {
        unordered_set<int> to_delete_set(to_delete.begin(), to_delete.end());
        vector<TreeNode*> forest;
        if (!to_delete_set.count(root->val)) {
            forest.push_back(root);
        }
        dfs(root, to_delete_set, forest);
        return forest;
    }
    
private:
    TreeNode* dfs(TreeNode* node, unordered_set<int>& to_delete_set, vector<TreeNode*>& forest) {
        if (!node) return nullptr;
        node->left = dfs(node->left, to_delete_set, forest);
        node->right = dfs(node->right, to_delete_set, forest);
        if (to_delete_set.count(node->val)) {
            if (node->left) forest.push_back(node->left);
            if (node->right) forest.push_back(node->right);
            return nullptr;
        }
        return node;
    }
};
```
#### Python
```python
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        seats = [0] * (n + 1)
        for booking in bookings:
            first, last, seats_count = booking
            seats[first - 1] += seats_count
            if last < n:
                seats[last] -= seats_count
        for i in range(1, n):
            seats[i] += seats[i - 1]
        return seats[:-1]

```
#### Java
```java
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] seats = new int[n + 1];
        for (int[] booking : bookings) {
            int first = booking[0];
            int last = booking[1];
            int seatsCount = booking[2];
            seats[first - 1] += seatsCount;
            if (last < n) {
                seats[last] -= seatsCount;
            }
        }
        for (int i = 1; i < n; i++) {
            seats[i] += seats[i - 1];
        }
        return Arrays.copyOf(seats, n);
    }
}
```

---
id: height-of-binary-tree
title: Height of Binary Tree Problem (gfg)
sidebar_label: 0011 - Height of Binary Tree
tags:
  - Easy
  - Tree
  - Binary Tree
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Height of Binary Tree problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---
## Problem Description

Given a binary tree, find its height. The height of a binary tree is the number of edges in the longest path from the root to a leaf node.

## Examples

**Example 1:**

```
Input: 
       1
      / \
     2   3
Output: 2
```

**Example 2:**

```
Input: 
        1
       / 
      2
     / 
    3 
Output: 3
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `height()` which takes the root of the tree as input and returns the height of the tree.

Expected Time Complexity: $O(N)$, where N is the number of nodes in the tree.

Expected Auxiliary Space: $O(N)$

## Constraints

* `1 ≤ Number of nodes ≤ 10^5`
* `1 ≤ Data of a node ≤ 10^5`

## Problem Explanation

The height of a binary tree is defined as the number of edges in the longest path from the root node to a leaf node. For a tree with a single node, the height is 0.

## Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@arunimad6yuq"/>

  ```py
  # Definition for a binary tree node.
  class TreeNode:
      def __init__(self, val=0, left=None, right=None):
          self.val = val
          self.left = left
          self.right = right

  class Solution:
      def height(self, root: TreeNode) -> int:
          if root is None:
              return 0
          else:
              # Compute the height of each subtree
              left_height = self.height(root.left)
              right_height = self.height(root.right)
              # Return the larger one plus one for the root
              return max(left_height, right_height) + 1

  # Example usage
  if __name__ == "__main__":
      root = TreeNode(1)
      root.left = TreeNode(2)
      root.right = TreeNode(3)
      solution = Solution()
      print(solution.height(root))  # Expected output: 2
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@arunimad6yuq"/>

  ```cpp
  //{ Driver Code Starts
  #include <bits/stdc++.h>
  using namespace std;

  struct Node {
      int data;
      Node* left;
      Node* right;

      Node(int val) {
          data = val;
          left = right = NULL;
      }
  };

  // } Driver Code Ends
  class Solution {
  public:
      // Function to find the height of a binary tree.
      int height(Node* node) {
          if (node == NULL) return 0;
          
          // Compute the height of each subtree
          int left_height = height(node->left);
          int right_height = height(node->right);
          
          // Return the larger one plus one for the root
          return max(left_height, right_height) + 1;
      }
  };

  //{ Driver Code Starts.
  int main() {
      int t;
      cin >> t;
      while (t--) {
          int n;
          cin >> n;

          Node* root = new Node(1);  // Example root node

          // Constructing the tree
          queue<Node*> q;
          q.push(root);
          for (int i = 0; i < n; i++) {
              int a, b;
              char lr;
              cin >> a >> b >> lr;
              Node* temp = q.front();
              q.pop();

              if (lr == 'L') {
                  temp->left = new Node(b);
                  q.push(temp->left);
              } else {
                  temp->right = new Node(b);
                  q.push(temp->right);
              }
          }
          Solution obj;
          cout << obj.height(root) << endl;
      }
      return 0;
  }
  // } Driver Code Ends
  ```

  </TabItem>
</Tabs>

## Example Walkthrough

For the tree:

```
       1
      / \
     2   3
```

1. The height of the left subtree (node 2) is 1.
2. The height of the right subtree (node 3) is 1.
3. The height of the tree is the maximum of the two heights plus 1, which is 2.

For the tree:

```
        1
       / 
      2
     / 
    3 
```

1. The height of the left subtree (node 2) is 2.
2. The right subtree is empty, so its height is 0.
3. The height of the tree is the maximum of the two heights plus 1, which is 3.

## Solution Logic:

1. Recursively compute the height of the left and right subtrees.
2. Return the maximum height of the two subtrees plus 1 for the root.

## Time Complexity

* The function visits each node once, so the time complexity is $O(N)$.

## Space Complexity

* The auxiliary space complexity is $O(N)$ due to the recursion stack.

## References

- **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/height-of-binary-tree/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)

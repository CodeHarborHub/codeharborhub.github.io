---
id: balanced-tree-check
title: Balanced Tree Check
sidebar_label: Balanced Tree Check
tags:
  - Easy
  - Binary Tree
  - Tree
  - Recursion
  - C++
description: "This is a solution to the Balanced Tree Check problem."
---

This tutorial contains a complete walk-through of the Balanced Tree Check problem. It features the implementation of the solution code in C++.

## Problem Description

Given a binary tree, find if it is height balanced or not. A tree is height balanced if the difference between the heights of left and right subtrees is not more than one for all nodes of the tree.

## Examples

**Example 1:**

```
Input:
        1
      /   \
     2     3
    / 
   4   
Output: 1 (true)
Explanation: The given tree is balanced as the height difference between the left and right subtrees is not more than one.
```

**Example 2:**

```
Input:
           10
         /    \
        20    30
       /  \
      40  60
           \
           70
Output: 0 (false)
Explanation: The given tree is not balanced as the height difference between the left and right subtrees is more than one.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `isBalanced()` which takes the root node of the tree as input and returns `true` if the tree is balanced, otherwise `false`.

Expected Time Complexity: O(N)

Expected Auxiliary Space: O(h) where h is the height of the tree.

## Constraints

* 1 ≤ Number of nodes ≤ 10^5
* 1 ≤ Data of a node ≤ 10^5

## Problem Explanation

The problem is to check if a given binary tree is height balanced. A tree is height balanced if, for every node, the difference between the heights of the left and right subtrees is not more than one.

## Code Implementation

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

struct Node {
    int data;
    Node* left;
    Node* right;
    
    Node(int val) {
        data = val;
        left = right = NULL;
    }
};

class Solution {
  public:
    // Helper function to check if tree is balanced and to return its height
    pair<bool, int> isBalancedHelper(Node* root) {
        // Base case: An empty tree is balanced and its height is 0
        if (root == NULL) {
            return {true, 0};
        }
        
        // Recursively check the left and right subtrees
        auto left = isBalancedHelper(root->left);
        auto right = isBalancedHelper(root->right);
        
        // The tree is balanced if the left and right subtrees are balanced and
        // the height difference between the left and right subtrees is not more than 1
        bool balanced = left.first && right.first && abs(left.second - right.second <= 1);
        
        // Height of the current tree is 1 plus the maximum of the heights of the left and right subtrees
        int height = max(left.second, right.second) + 1;
        
        return {balanced, height};
    }
    
    // Function to check whether a binary tree is balanced or not.
    bool isBalanced(Node* root) {
        return isBalancedHelper(root).first;
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        
        unordered_map<int, Node*> m;
        Node* root = NULL;
        
        while (n--) {
            int n1, n2;
            char lr;
            cin >> n1 >> n2 >> lr;
            
            Node* parent;
            if (m.find(n1) == m.end()) {
                parent = new Node(n1);
                m[n1] = parent;
                if (root == NULL) root = parent;
            } else {
                parent = m[n1];
            }
            
            Node* child = new Node(n2);
            if (lr == 'L') parent->left = child;
            else parent->right = child;
            
            m[n2] = child;
        }
        
        Solution obj;
        cout << obj.isBalanced(root) << endl;
    }
    return 0;
}
// } Driver Code Ends
```

## Example Walkthrough

For the given example:

Input:
```
        1
      /   \
     2     3
    / 
   4   
```
The function should return `true` because the given tree is balanced as the height difference between the left and right subtrees is not more than one.

## Solution Logic

1. Define a helper function `isBalancedHelper` that returns a pair consisting of a boolean (whether the tree is balanced) and an integer (the height of the tree).
2. In the helper function, recursively check the left and right subtrees.
3. Determine if the current tree is balanced by checking if the left and right subtrees are balanced and if their height difference is not more than 1.
4. Return the balanced status and height of the current tree.
5. The main function `isBalanced` calls the helper function and returns the balanced status.

## Time Complexity

* The time complexity is O(N) where N is the number of nodes in the tree.

## Space Complexity

* The auxiliary space complexity is O(h) where h is the height of the tree, due to the recursive call stack.
  **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/check-for-balanced-tree/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)

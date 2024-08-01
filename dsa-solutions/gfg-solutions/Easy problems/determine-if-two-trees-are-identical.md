---
id: determine-if-two-trees-are-identical
title: Determine if Two Trees are Identical (gfg)
sidebar_label: 0012 - Determine if Two Trees are Identical
tags:
  - Easy
  - Tree
  - Binary Tree
  - GeeksforGeeks
  - CPP
  - Python
  - DSA
description: "This tutorial covers the solution to the Determine if Two Trees are Identical problem from the GeeksforGeeks website, featuring implementations in Python and C++."
---

## Problem Description

Given two binary trees, the task is to find if both of them are identical or not. Note: You need to return true or false, the printing is done by the driver code.

## Examples

**Example 1:**

```
Input:
    Tree 1:
       1
      / \
     2   3

    Tree 2:
       1
      / \
     2   3
Output: Yes
```

**Example 2:**

```
Input:
    Tree 1:
       1
      / \
     2   3

    Tree 2:
       1
      / \
     3   2
Output: No
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `isIdentical()` which takes the roots of both trees as input and returns true if the trees are identical, otherwise false.

Expected Time Complexity: $O(N)$, where N is the number of nodes in the trees.

Expected Auxiliary Space: $O(H)$, where H is the height of the trees.

## Constraints

- `1 ≤ Number of nodes ≤ 10^5`
- `1 ≤ Data of a node ≤ 10^5`

## Problem Explanation

Two trees are considered identical if they have the same structure and their corresponding nodes have the same value.

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
    def isIdentical(self, r1: TreeNode, r2: TreeNode) -> bool:
        if not r1 and not r2:
            return True
        if not r1 or not r2:
            return False
        return (r1.val == r2.val) and self.isIdentical(r1.left, r2.left) and self.isIdentical(r1.right, r2.right)

# Example usage
if __name__ == "__main__":
    root1 = TreeNode(1)
    root1.left = TreeNode(2)
    root1.right = TreeNode(3)

    root2 = TreeNode(1)
    root2.left = TreeNode(2)
    root2.right = TreeNode(3)

    solution = Solution()
    print(solution.isIdentical(root1, root2))  # Expected output: True
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
    // Function to check if two trees are identical.
    bool isIdentical(Node* r1, Node* r2) {
        if (!r1 && !r2) return true;
        if (!r1 || !r2) return false;
        return (r1->data == r2->data) && isIdentical(r1->left, r2->left) && isIdentical(r1->right, r2->right);
    }
};

//{ Driver Code Starts.
// Function to Build Tree
Node* buildTree(string str) {
    if (str.length() == 0 || str[0] == 'N') return NULL;

    vector<string> ip;
    istringstream iss(str);
    for (string str; iss >> str;) ip.push_back(str);

    Node* root = new Node(stoi(ip[0]));
    queue<Node*> queue;
    queue.push(root);

    int i = 1;
    while (!queue.empty() && i < ip.size()) {
        Node* currNode = queue.front();
        queue.pop();

        string currVal = ip[i];
        if (currVal != "N") {
            currNode->left = new Node(stoi(currVal));
            queue.push(currNode->left);
        }

        i++;
        if (i >= ip.size()) break;
        currVal = ip[i];

        if (currVal != "N") {
            currNode->right = new Node(stoi(currVal));
            queue.push(currNode->right);
        }
        i++;
    }

    return root;
}

int main() {
    int tc;
    scanf("%d ", &tc);
    while (tc--) {
        string str, str1;
        getline(cin, str);
        Node* rootA = buildTree(str);
        getline(cin, str1);
        Node* rootB = buildTree(str1);
        Solution ob;
        if (ob.isIdentical(rootA, rootB)) {
            cout << "Yes\n";
        } else {
            cout << "No\n";
        }
    }
    return 0;
}
// } Driver Code Ends
```

  </TabItem>
</Tabs>

## Example Walkthrough

For the trees:

```
    Tree 1:
       1
      / \
     2   3

    Tree 2:
       1
      / \
     2   3
```

1. The root nodes are both 1.
2. The left children are both 2.
3. The right children are both 3.
4. Since all corresponding nodes match, the trees are identical.

For the trees:

```
    Tree 1:
       1
      / \
     2   3

    Tree 2:
       1
      / \
     3   2
```

1. The root nodes are both 1.
2. The left child of Tree 1 is 2 and of Tree 2 is 3.
3. The right child of Tree 1 is 3 and of Tree 2 is 2.
4. Since corresponding nodes do not match, the trees are not identical.

## Solution Logic:

1. Recursively compare the current nodes of both trees.
2. Check if the values of the nodes are the same.
3. Check if the left children of both nodes are identical.
4. Check if the right children of both nodes are identical.

## Time Complexity

- The function visits each node once, so the time complexity is $O(N)$.

## Space Complexity

- The auxiliary space complexity is $O(H)$ due to the recursion stack, where H is the height of the tree.

## References

- **gfg Problem:** [gfg Problem](https://www.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)

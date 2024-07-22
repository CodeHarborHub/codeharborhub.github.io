---
id: binary-tree-mirror-rotate
title: Binary Tree Mirror and Rotation Solution
sidebar_label: 0005 - Binary Tree Mirror and Rotation
tags: [Binary Tree, Mirror Image, Tree Rotation, Algorithm, C++, Problem Solving]
description: This is a solution to create the mirror image and perform rotations (left and right) on a binary tree.
---

## Problem Statement 

### Problem Description

Implement a feature to create the mirror image and perform rotations (left and right) on a binary tree. This functionality will allow users to easily transform binary trees for various algorithmic and visualization purposes.

### Examples

**Example 1:**

```plaintext
Input: Binary Tree = [4, 2, 7, 1, 3, 6, 9]

        4
       / \
      2   7
     / \ / \
    1  3 6  9

Mirror Image Output:

        4
       / \
      7   2
     / \ / \
    9  6 3  1

```
**Example 2:**

```plaintext
Input: Binary Tree = [4, 2, 7, 1, 3, 6, 9]
Rotation (Left) Output:

        2
       / \
      1   4
           \
            7
           / \
          6   9

Rotation (Right) Output:

        7
       / \
      4   9
     / \
    2   6
   / \
  1   3


```
### Constraints

- The input is a binary tree.
- The tree can have up to 10^5 nodes.

## Solution of Given Problem

### Intuition and Approach

To solve the problem, we can break it down into three parts:

1. Mirror Image:
- Swap the left and right children of each node recursively.

2. Left Rotation:
- Rotate the tree around a specific node such that the node's right child becomes its parent.

3. Right Rotation:
- Rotate the tree around a specific node such that the node's left child becomes its parent.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void mirror(TreeNode* node) {
    if (node == NULL)
        return;

    swap(node->left, node->right);
    mirror(node->left);
    mirror(node->right);
}

TreeNode* leftRotate(TreeNode* root) {
    if (root == NULL || root->right == NULL)
        return root;

    TreeNode* newRoot = root->right;
    root->right = newRoot->left;
    newRoot->left = root;

    return newRoot;
}

TreeNode* rightRotate(TreeNode* root) {
    if (root == NULL || root->left == NULL)
        return root;

    TreeNode* newRoot = root->left;
    root->left = newRoot->right;
    newRoot->right = root;

    return newRoot;
}

void inorder(TreeNode* root) {
    if (root == NULL)
        return;
    inorder(root->left);
    cout << root->val << " ";
    inorder(root->right);
}

int main() {
    int n, val;
    cout << "Enter the number of nodes in the tree: ";
    cin >> n;

    if (n == 0) {
        cout << "The tree is empty." << endl;
        return 0;
    }

    cout << "Enter the values of the nodes: ";
    vector<TreeNode*> nodes(n);
    for (int i = 0; i < n; ++i) {
        cin >> val;
        nodes[i] = new TreeNode(val);
    }

    for (int i = 0; i < n; ++i) {
        int leftIndex, rightIndex;
        cout << "Enter the left and right child indices for node with value " << nodes[i]->val << " (use -1 for no child): ";
        cin >> leftIndex >> rightIndex;
        if (leftIndex != -1) nodes[i]->left = nodes[leftIndex];
        if (rightIndex != -1) nodes[i]->right = nodes[rightIndex];
    }

    TreeNode* root = nodes[0];

    cout << "Original Tree: ";
    inorder(root);
    cout << "\n";

    mirror(root);
    cout << "Mirror Image: ";
    inorder(root);
    cout << "\n";

    root = leftRotate(root);
    cout << "Left Rotation: ";
    inorder(root);
    cout << "\n";

    root = rightRotate(root);
    cout << "Right Rotation: ";
    inorder(root);
    cout << "\n";

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(h)$, where `h` is the height of the tree (due to the recursion stack).

The time complexity is linear because each node is visited once. The space complexity is determined by the depth of the recursion stack.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="obWXjtg0L64"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />
---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sjain1909'].map(username => (
 <Author key={username} username={username} />
))}
</div>

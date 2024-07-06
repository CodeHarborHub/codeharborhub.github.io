---
id: binary-search-tree-to-greater-sum-tree
title:  Binary Search Tree to Greater Sum Tree
sidebar_label: 1038. Binary Search Tree to Greater Sum Tree
tags:
- Tree
- Depth-First Search
- Binary Tree
description: "This is a solution to the Binary Search Tree to Greater Sum Tree problem on LeetCode."
---

## Problem Description
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 
### Examples

**Example 1:**
![image](https://assets.leetcode.com/uploads/2019/05/02/tree.png)
```
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

**Example 2:**
```
Input: root = [0,null,1]
Output: [1,null,1]
```

### Constraints
- `The number of nodes in the tree is in the range [1, 100].`
- `0 <= Node.val <= 100`
- `All the values in the tree are unique.`

## Solution for Binary Search Tree to Greater Sum Tree

1. **Reverse In-Order Traversal**: 
    - Perform a reverse in-order traversal (right-root-left) of the BST. This traversal order allows us to visit nodes in descending order of their values.
    
2. **Accumulating Sum**:
    - Maintain a running sum of all nodes visited so far. As we visit each node, we add its value to this running sum and update the node's value with this running sum.

3. **Recursion**:
    - Use recursion to traverse the tree and update the node values.
<Tabs>
  <TabItem value="Solution" label="Solution">

#### Implementation

```jsx live
function Solution() {
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

    var sum = 0;

    var solve = function(root) {
        if (root === null) {
            return null;
        }
        
        solve(root.right);
        
        sum += root.val;
        root.val = sum;
        
        solve(root.left);
        
        return root;
    };

    var bstToGst = function(root) {
        sum = 0; // Reset sum for each call
        return solve(root);
    };
function constructTreeFromArray(array) {
    if (!array.length) return null;
    
    let root = new TreeNode(array[0]);
    let queue = [root];
    let i = 1;

    while (i < array.length) {
        let currentNode = queue.shift();
        
        if (array[i] !== null) {
            currentNode.left = new TreeNode(array[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < array.length && array[i] !== null) {
            currentNode.right = new TreeNode(array[i]);
            queue.push(currentNode.right);
        }
        i++;
    }
    return root;
}
const array  = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
const root = constructTreeFromArray(array)
const input = root
const output = bstToGst(root)
  return (
    <div>
      <p>
        <b>Input: </b>{JSON.stringify(array)}
      </p>
      <p>
        <b>Output:</b> {output.toString()}
      </p>
    </div>
  );
}
```

### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var sum = 0;

var solve = function(root) {
    if (root === null) {
        return null;
    }
    
    solve(root.right);
    
    sum += root.val;
    root.val = sum;
    
    solve(root.left);
    
    return root;
};

var bstToGst = function(root) {
    sum = 0; // Reset sum for each call
    return solve(root);
};

```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   /**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let sum = 0;

const solve = (root: TreeNode | null): TreeNode | null => {
    if (root === null) {
        return null;
    }
    
    solve(root.right);
    
    sum += root.val;
    root.val = sum;
    
    solve(root.left);
    
    return root;
};

const bstToGst = (root: TreeNode | null): TreeNode | null => {
    sum = 0; // Reset sum for each call
    return solve(root);
};

 ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   # Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.sum = 0

    def solve(self, root):
        if not root:
            return None
        
        self.solve(root.right)
        
        self.sum += root.val
        root.val = self.sum
        
        self.solve(root.left)
        
        return root

    def bstToGst(self, root: TreeNode) -> TreeNode:
        self.sum = 0  # Reset sum for each call
        return self.solve(root)

    ```

  </TabItem>
 <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
```java
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
class Solution {
    private int sum = 0;
    
    private TreeNode solve(TreeNode root) {
        if (root == null) {
            return null;
        }
        
        solve(root.right);
        
        sum += root.val;
        root.val = sum;
        
        solve(root.left);
        
        return root;
    }
    
    public TreeNode bstToGst(TreeNode root) {
        return solve(root);
    }
}

```
</TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
```cpp  
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int sum = 0;

    TreeNode* solve(TreeNode*& root) {
        if (root == NULL) {
            return 0;
        }

        solve(root->right);

        sum += root->val;
        root->val = sum;
        solve(root->left);

        return root;
    }

    TreeNode* bstToGst(TreeNode* root) {
        return solve(root);
    }
};

```
  </TabItem>
  </Tabs>

#### Complexity Analysis
 ##### Time Complexity: $O(N)$ , because of tree traversal

 ##### Space Complexity: $O(1)$
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/)


---
id: bst-min-absolute-difference
title: Minimum Absolute Difference in BST
sidebar_label: BST Minimum Absolute Difference
tags:
  - Binary Search Tree
  - Algorithms
  - Trees
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Minimum Absolute Difference in BST](https://leetcode.com/problems/Minimum Absolute Difference in BST/description/) | [Minimum Absolute Difference in BST Solution on LeetCode](https://leetcode.com/problems/Minimum Absolute Difference in BST/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

### Example 1:

**Input:** `root = [4,2,6,1,3]`
**Output:** `1`

### Example 2:

**Input:** `root = [1,0,48,null,null,12,49]`
**Output:** `1`

### Constraints:

- `The number of nodes in the tree is in the range [2, 10^4].`
- `0 <= Node.val <= 10^5`

## Approach

1. Perform an in-order traversal of the BST. This traversal method will give us the node values in a sorted order.
2. Iterate through the sorted node values and find the minimum absolute difference between any two consecutive nodes.

## Step-by-Step Algorithm

1. Initialize a variable to store the previous node value (prev) and set it to None.
2. Initialize a variable to store the minimum difference (min_diff) and set it to infinity.
3. Define a helper function for in-order traversal:
   - If the current node is None, return.
   - Recursively call the helper function on the left subtree.
   - If prev is not None, update min_diff with the minimum value between min_diff and the difference between the current node's value and prev.
   - Update prev to the current node's value.
   - Recursively call the helper function on the right subtree.
4. Call the helper function starting from the root.
5. Return the value of min_diff.

## Solution

### Python

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        self.prev = None
        self.min_diff = float('inf')
        
        def in_order_traversal(node):
            if not node:
                return
            
            in_order_traversal(node.left)
            
            if self.prev is not None:
                self.min_diff = min(self.min_diff, node.val - self.prev)
            
            self.prev = node.val
            
            in_order_traversal(node.right)
        
        in_order_traversal(root)
        return self.min_diff
```

### Java

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    Integer prev = null;
    int minDiff = Integer.MAX_VALUE;
    
    public int getMinimumDifference(TreeNode root) {
        inOrderTraversal(root);
        return minDiff;
    }
    
    private void inOrderTraversal(TreeNode node) {
        if (node == null) {
            return;
        }
        
        inOrderTraversal(node.left);
        
        if (prev != null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        
        inOrderTraversal(node.right);
    }
}
```

### C++

```cpp
struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
public:
    int getMinimumDifference(TreeNode* root) {
        int min_diff = INT_MAX;
        TreeNode* prev = nullptr;
        inOrderTraversal(root, prev, min_diff);
        return min_diff;
    }
    
private:
    void inOrderTraversal(TreeNode* node, TreeNode*& prev, int& min_diff) {
        if (node == nullptr) {
            return;
        }
        
        inOrderTraversal(node->left, prev, min_diff);
        
        if (prev != nullptr) {
            min_diff = std::min(min_diff, node->val - prev->val);
        }
        prev = node;
        
        inOrderTraversal(node->right, prev, min_diff);
    }
};
```

### C

```c
#include <limits.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

void inOrderTraversal(struct TreeNode* node, struct TreeNode** prev, int* min_diff) {
    if (node == NULL) {
        return;
    }
    
    inOrderTraversal(node->left, prev, min_diff);
    
    if (*prev != NULL) {
        *min_diff = (*min_diff < (node->val - (*prev)->val)) ? *min_diff : (node->val - (*prev)->val);
    }
    *prev = node;
    
    inOrderTraversal(node->right, prev, min_diff);
}

int getMinimumDifference(struct TreeNode* root) {
    int min_diff = INT_MAX;
    struct TreeNode* prev = NULL;
    inOrderTraversal(root, &prev, &min_diff);
    return min_diff;
}
```

### JavaScript

```javascript
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;
    
    const inOrderTraversal = (node) => {
        if (node === null) {
            return;
        }
        
        inOrderTraversal(node.left);
        
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        
        inOrderTraversal(node.right);
    };
    
    inOrderTraversal(root);
    return minDiff;
};
```

## Conclusion

The in-order traversal approach efficiently finds the minimum absolute difference between any two different nodes in a BST. The traversal ensures that node values are processed in a sorted order, allowing us to easily compute differences between consecutive nodes.
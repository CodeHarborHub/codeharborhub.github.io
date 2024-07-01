---
id: even-odd-tree
title: Even Odd Tree (LeetCode)
sidebar_label: 1609-EvenOddTree
tags:
  - Tree
  - Breadth-First Search
  - Level Order Traversal
description: Determine if a binary tree is an "even-odd" tree, where the level of nodes alternates between odd and even values.
sidebar_position: 1609
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Even Odd Tree](https://leetcode.com/problems/even-odd-tree/) | [Even Odd Tree Solution on LeetCode](https://leetcode.com/problems/even-odd-tree/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

A binary tree is named "even-odd" if it satisfies the following conditions:

1. The root has an odd value.
2. Each level has nodes with values that alternate between odd and even.
3. For each level, nodes with odd values come first, followed by nodes with even values.

Given the root of a binary tree, return `true` if the binary tree is "even-odd", otherwise return `false`.

### Example 1

- **Input:** `root = [1,10,4,3,null,7,9,12,8,6,null,null,2]`
- **Output:** `true`
- **Explanation:** The values of each level are:
  - Level 0: [1]
  - Level 1: [10, 4]
  - Level 2: [3, 7, 9, 12]
  - Level 3: [8, 6, 2]
  The tree satisfies all the conditions for an "even-odd" tree.

### Example 2

- **Input:** `root = [5,4,2,3,3,7]`
- **Output:** `false`
- **Explanation:** The values of the levels are:
  - Level 0: [5]
  - Level 1: [4, 2]
  - Level 2: [3, 3, 7]
  Node values in the second level are not in strictly increasing order.

### Constraints

- The number of nodes in the tree is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^6`

## Approach

To determine if a binary tree is an "even-odd" tree, we can use a breadth-first search (BFS) approach to traverse the tree level by level. Here's the approach:

1. **Breadth-First Search (BFS)**:
   - Use a queue to perform level-order traversal.
   - For each level, check if the values alternate between odd and even, maintaining strict ordering.

2. **Validation**:
   - For each node at an even level (`level % 2 == 0`), values should be strictly increasing and odd.
   - For each node at an odd level (`level % 2 != 0`), values should be strictly decreasing and even.

3. **Edge Cases**:
   - Handle single node trees appropriately.

### Solution Code

#### Python

```python
from collections import deque
import math

class Solution:
    def isEvenOddTree(self, root: TreeNode) -> bool:
        if not root:
            return False
        
        queue = deque([root])
        level = 0
        
        while queue:
            size = len(queue)
            prev_val = -math.inf if level % 2 == 0 else math.inf
            
            for _ in range(size):
                node = queue.popleft()
                
                if level % 2 == 0:
                    if node.val % 2 == 0 or node.val <= prev_val:
                        return False
                else:
                    if node.val % 2 != 0 or node.val >= prev_val:
                        return False
                
                prev_val = node.val
                
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            level += 1
        
        return True
```

#### java
```java
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public boolean isEvenOddTree(TreeNode root) {
        if (root == null) return false;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int level = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            int prevVal = (level % 2 == 0) ? Integer.MIN_VALUE : Integer.MAX_VALUE;
            
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                
                if (level % 2 == 0) {
                    if (node.val % 2 == 0 || node.val <= prevVal) {
                        return false;
                    }
                } else {
                    if (node.val % 2 != 0 || node.val >= prevVal) {
                        return false;
                    }
                }
                
                prevVal = node.val;
                
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }
            
            level++;
        }
        
        return true;
    }
}
```

#### C++
```c++
#include <queue>
#include <limits>
using namespace std;

class Solution {
public:
    bool isEvenOddTree(TreeNode* root) {
        if (!root) return false;
        
        queue<TreeNode*> q;
        q.push(root);
        int level = 0;
        
        while (!q.empty()) {
            int size = q.size();
            int prevVal = (level % 2 == 0) ? numeric_limits<int>::min() : numeric_limits<int>::max();
            
            for (int i = 0; i < size; ++i) {
                TreeNode* node = q.front();
                q.pop();
                
                if (level % 2 == 0) {
                    if (node->val % 2 == 0 || node->val <= prevVal) {
                        return false;
                    }
                } else {
                    if (node->val % 2 != 0 || node->val >= prevVal) {
                        return false;
                    }
                }
                
                prevVal = node->val;
                
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            
            ++level;
        }
        
        return true;
    }
};
```

#### Conclusion
The above solutions use BFS to validate if a given binary tree is an "even-odd" tree based on the 
defined rules. Each solution ensures that nodes at even and odd levels have values that strictly 
alternate in the required manner. Adjustments for different languages and edge cases are handled to 
ensure robustness across different inputs.
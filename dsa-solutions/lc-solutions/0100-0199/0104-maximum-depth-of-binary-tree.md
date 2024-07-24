---
id: max-depth-binary-tree
title: Maximum Depth of Binary Tree Solution
sidebar_label: 0104 Maximum Depth of Binary Tree
tags:
  - Binary Tree
  - Depth-First Search
  - Breadth-First Search
  - Recursion
  - LeetCode
  - C++
  - Java
  - Python
description: "This is a solution to the Maximum Depth of Binary Tree problem on LeetCode."
---


## Problem Description

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Examples

**Example 1:**

![Input Tree](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2:**

```
Input: root = [1,null,2]
Output: 2
```

### Constraints

- The number of nodes in the tree is in the range `[0, 104]`.
- `-100 <= Node.val <= 100`

## Solution for Maximum Depth of Binary Tree Problem

<Tabs>
  <TabItem value="Recursive" label="Recursive">

### Recursive (DFS) Approach

#### Intuition

To find the maximum depth of a binary tree, we can use a depth-first search (DFS) approach. We recursively find the maximum depth of the left and right subtrees and return the maximum of the two depths plus one (to account for the current level).

#### Approach

1. Implement a recursive function `maxDepth(root)` that returns the maximum depth of the binary tree rooted at `root`.
2. If the root is `null`, return 0.
3. Recursively find the maximum depth of the left and right subtrees.
4. Return the maximum of the left and right subtree depths plus one.

#### Implementation

```jsx live
function MaxDepthOfBinaryTree() {
  class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  const maxDepth = function (root) {
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  };

  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  const result = maxDepth(root);
  return (
    <div>
      <p>
        <b>Input:</b> root = [3,9,20,null,null,15,7]
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```javascript
    function maxDepth(root) {
        if (!root) return 0;
        const maxLeft = maxDepth(root.left);
        const maxRight = maxDepth(root.right);
        return Math.max(maxLeft, maxRight) + 1;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Vipullakum007"/> 
   ```typescript
    class TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(val: number) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    function maxDepth(root: TreeNode | null): number {
        if (!root) return 0;
        const maxLeft: number = maxDepth(root.left);
        const maxRight: number = maxDepth(root.right);
        return Math.max(maxLeft, maxRight) + 1;
    }
    ```

  </TabItem>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
    public int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int maxLeft = maxDepth(root.left);
        int maxRight = maxDepth(root.right);
        return Math.max(maxLeft, maxRight) + 1;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        maxLeft = self.maxDepth(root.left)
        maxRight = self.maxDepth(root.right)
        return max(maxLeft, maxRight) + 1
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    int maxDepth(TreeNode* root) {
        if (!root)
            return 0;
        int maxLeft = maxDepth(root->left);
        int maxRight = maxDepth(root->right);
        return max(maxLeft, maxRight) + 1;
    }
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time complexity**: O(n), where n is the number of nodes in the tree. We visit each node once.
- **Space complexity**: O(h), where h is the height of the tree. The space used by the recursive call stack is proportional to the height of the tree.

</TabItem>
<TabItem value="BFS" label="BFS" default>

### Breadth-First Search (BFS) Approach

#### Intuition

Another approach to find the maximum depth of a binary tree is to use breadth-first search (BFS). We start from the root node and traverse the tree level by level, incrementing the depth at each level until we reach the deepest leaf node.

#### Approach

1. Initialize a queue and push the root node into it.
2. Initialize a variable `depth` to store the maximum depth, initially set to 0.
3. Perform BFS traversal:
   - Increment `depth` for each level visited.
   - Push all the children of the current level into the queue.
4. Return `depth` after traversing all levels.

#### Implementation

```jsx live
function MaxDepthOfBinaryTree() {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  // Creating the binary tree
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);

  const maxDepth = function (root) {
    if (!root) return 0;

    let depth = 0;
    const queue = [root];

    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      depth++;
    }

    return depth;
  };

  const result = maxDepth(root);
  return (
    <div>
      <p>
        <b>Binary Tree:</b> {JSON.stringify(root)}
      </p>
      <p>
        <b>Maximum Depth:</b> {result}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
    <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```javascript
    function maxDepth(root) {
    if (!root) return 0;

    let depth = 0;
    const queue = [root];

    while (queue.length) {
        depth++;
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; ++i) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        }
    }

    return depth;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Vipullakum007"/>
   ```typescript
    class TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(val: number) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    function maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        let depth = 0;
        const queue: TreeNode[] = [root];

        while (queue.length) {
            depth++;
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; ++i) {
            const node = queue.shift()!;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            }
        }

        return depth;
    }
    ```

  </TabItem>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
    public int maxDepth(TreeNode root) {
        if (root == null)
            return 0;

        int depth = 0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            ++depth;
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; ++i) {
                TreeNode node = queue.poll();
                if (node.left != null)
                    queue.offer(node.left);
                if (node.right != null)
                    queue.offer(node.right);
            }
        }
        return depth;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        depth = 0
        queue = [root]
        while queue:
            depth += 1
            for _ in range(len(queue)):
                node = queue.pop(0)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return depth
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    int maxDepth(TreeNode *root) {
        if (root == NULL)
            return 0;

        int depth = 0;
        queue<TreeNode *> q;
        q.push(root);
        while (!q.empty()) {
            ++depth;
            int levelSize = q.size();
            for (int i = 0; i < levelSize; ++i) {
                TreeNode *node = q.front();
                q.pop();
                if (node->left)
                    q.push(node->left);
                if (node->right)
                    q.push(node->right);
            }
        }
        return depth;
    }
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time complexity**: O(n), where n is the number of nodes in the tree. We visit each node once.
- **Space complexity**: O(w), where w is the maximum width of the tree (i.e., the number of nodes at the maximum level). In the worst case, the maximum width could be n/2 in a complete binary tree, so the space complexity is O(n).

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-depth-of-binary-tree/solution/)
- **Authors GeeksforGeeks Profile:** [Vipul lakum](https://leetcode.com/u/vipul_lakum_02/)

---

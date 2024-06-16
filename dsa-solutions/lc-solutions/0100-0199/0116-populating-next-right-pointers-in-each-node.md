---
id: 116-populating-next-right-pointers-in-each-node
title: Populating Next Right Pointers in Each Node
sidebar_label: 0116-Populating Next Right Pointers in Each Node
tags:
  - Java
  - Python
  - C++
description: "Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL."
---

## Problem Description

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

### Examples

**Example 1:**

![LeetCode Problem - Binary Tree](https://assets.leetcode.com/uploads/2019/02/14/116_sample.png)
```
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
```

**Example 2:**

```
Input: root = []
Output: []
```

### Constraints

- The number of nodes in the tree is in the range [0, 212 - 1].
- $-1000 <= Node.val <= 1000$

---

## Solution for Binary Tree Problem

### Intuition And Approach

To populate each next pointer to point to its next right node in a perfect binary tree, we can perform a level order traversal and connect nodes at the same level.

<Tabs>
 <tabItem value="Linear" label="Linear">


#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@Vipullakum007"/>
   ```java
 class Solution {
    public Node connect(Node root) {
        if (root == null) return null;
        Queue<Node> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            Node prev = null;
            for (int i = 0; i < levelSize; i++) {
                Node curr = queue.poll();
                if (prev != null) {
                    prev.next = curr;
                }
                if (curr.left != null) queue.offer(curr.left);
                if (curr.right != null) queue.offer(curr.right);
                prev = curr;
            }
        }
        return root;
    }
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@Vipullakum007"/>
   ```python
  class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return None
        queue = collections.deque([root])
        while queue:
            level_size = len(queue)
            prev = None
            for _ in range(level_size):
                node = queue.popleft()
                if prev:
                    prev.next = node
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
                prev = node
        return root
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Vipullakum007"/>
   ```cpp
    class Solution {
public:
    Node* connect(Node* root) {
        if (!root) return nullptr;
        queue<Node*> q;
        q.push(root);
        while (!q.empty()) {
            int levelSize = q.size();
            Node* prev = nullptr;
            for (int i = 0; i < levelSize; ++i) {
                Node* node = q.front();
                q.pop();
                if (prev) {
                    prev->next = node;
                }
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
                prev = node;
            }
        }
        return root;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$ where n is the number of nodes in the binary tree.
- Space Complexity: $O(m)$ where m is the maximum number of nodes at any level in the binary tree. In the worst case, the queue can contain all nodes at the last level, which is at most $2^{h-1}$ where h is the height of the tree.

</tabItem>
</Tabs>


---

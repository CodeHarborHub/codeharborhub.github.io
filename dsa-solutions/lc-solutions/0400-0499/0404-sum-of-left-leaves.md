---

id: sum-of-left-leaves
title: Sum of Left Leaves
sidebar_label: 0404-Sum-of-Last-Leaves
tags:
  - Simulation
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Sum of Last Leaves problem on LeetCode."

---
In this page, we will solve the Sum of Left Leaves problem using Depth-First Search (DFS). We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

Given the `root` of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

### Examples

**Example 1:**

```plaintext
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
```

**Example 2:**

```plaintext
Input: root = [1]
Output: 0
Explanation: There are no left leaves in the binary tree. The tree only has one node, which is the root node itself. Therefore, the sum of left leaves is 0.
```


### Constraints

- The number of nodes in the tree is in the range `[1, 1000]`.
- `1000 <= Node.val <= 1000`

---

## Solution for Sum of Left Leaves

### Intuition and Approach

## Recursive DFS Traversal:

- Traverse the tree starting from the root.
- For each node, check if it has a left child that is a leaf. If so, add the value of that leaf to the sum.
- Recursively traverse the left and right subtrees.

## Base Case:

- If the current node is `null`, return 0.

## Leaf Check:

- A node is a leaf if it has no left or right children.

<Tabs>
 <tabItem value="Maximum Calculation" label="Maximum Calculation">


#### Implementation

- Here's the implementation in multiple languages:

```jsx live
function sumOfLeftLeaves(root) {
  let sum = 0;

  function dfs(node) {
    if (!node) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return sum;
}

```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function sumOfLeftLeaves(root) {
  let sum = 0;

  function dfs(node) {
    if (!node) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return sum;
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
      function dfs(node: TreeNode | null): void {
    if (!node) return;

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return sum;
}
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        self.sum = 0

        def dfs(node):
            if not node:
                return
            
            if node.left and not node.left.left and not node.left.right:
                self.sum += node.left.val
            
            dfs(node.left)
            dfs(node.right)
        
        dfs(root)
        return self.sum
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        return dfs(root);
    }

    private int dfs(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int sum = 0;
        if (node.left != null && node.left.left == null && node.left.right == null) {
            sum += node.left.val;
        }

        sum += dfs(node.left);
        sum += dfs(node.right);

        return sum;
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        if (!root) return 0;
        int sum = 0;
        dfs(root, sum);
        return sum;
    }

    void dfs(TreeNode* node, int& sum) {
        if (!node) return;

        if (node->left && !node->left->left && !node->left->right) {
            sum += node->left->val;
        }

        dfs(node->left, sum);
        dfs(node->right, sum);
    }
};

    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(L + R)$$, where `L` is the length of the `left` array and `R` is the length of the `right` array.
- Space Complexity: $$O(1)$$, as we are only using a few extra variables.

</tabItem>

<tabItem value="Simulation" label="Simulation">

### Approach 2: Simulation

We can simulate the movement of ants on the plank to observe their behavior and determine the last moment before all ants fall off.

#### Implementation

```jsx live
function lastMomentBeforeAllAntsFallOut() {
  const n = 4;
  const left = [4, 3];
  const right = [0, 1];

  const getLastMoment = function(n, left, right) {
    const positions = Array(n + 1).fill(0);
    for (let pos of left) positions[pos] = 1;
    for (let pos of right) positions[pos] = 2;

    let lastMoment = 0;
    for (let i = 0; i <= n; i++) {
      if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
      if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
    }
    return lastMoment;
  };

  const result = getLastMoment(n, left, right);
  return (
    <div>
      <p>
        <b>Input:</b> n = {n}, left = {JSON.stringify(left)}, right = {JSON.stringify(right)}
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
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function get

LastMoment(n, left, right) {
      const positions = Array(n + 1).fill(0);
      for (let pos of left) positions[pos] = 1;
      for (let pos of right) positions[pos] = 2;

      let lastMoment = 0;
      for (let i = 0; i <= n; i++) {
        if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
        if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
      }
      return lastMoment;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/>
   ```typescript
    function getLastMoment(n: number, left: number[], right: number[]): number {
      const positions = Array(n + 1).fill(0);
      for (let pos of left) positions[pos] = 1;
      for (let pos of right) positions[pos] = 2;

      let lastMoment = 0;
      for (let i = 0; i <= n; i++) {
        if (positions[i] === 1) lastMoment = Math.max(lastMoment, i);
        if (positions[i] === 2) lastMoment = Math.max(lastMoment, n - i);
      }
      return lastMoment;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
            positions = [0] * (n + 1)
            for pos in left:
                positions[pos] = 1
            for pos in right:
                positions[pos] = 2

            last_moment = 0
            for i in range(n + 1):
                if positions[i] == 1:
                    last_moment = max(last_moment, i)
                if positions[i] == 2:
                    last_moment = max(last_moment, n - i)
            return last_moment
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int getLastMoment(int n, int[] left, int[] right) {
            int[] positions = new int[n + 1];
            for (int pos : left) positions[pos] = 1;
            for (int pos : right) positions[pos] = 2;

            int lastMoment = 0;
            for (int i = 0; i <= n; i++) {
                if (positions[i] == 1) lastMoment = Math.max(lastMoment, i);
                if (positions[i] == 2) lastMoment = Math.max(lastMoment, n - i);
            }
            return lastMoment;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int getLastMoment(int n, vector<int>& left, vector<int>& right) {
            vector<int> positions(n + 1, 0);
            for (int pos : left) positions[pos] = 1;
            for (int pos : right) positions[pos] = 2;

            int lastMoment = 0;
            for (int i = 0; i <= n; i++) {
                if (positions[i] == 1) lastMoment = max(lastMoment, i);
                if (positions[i] == 2) lastMoment = max(lastMoment, n - i);
            }
            return lastMoment;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(L + R)$$, where `L` is the length of the `left` array and `R` is the length of the `right` array.
- Space Complexity: $$O(N)$$, where `N` is the length of the plank.

</tabItem>
</Tabs>

:::tip

By using a simple maximum calculation approach or a simulation approach, we can efficiently solve the Last Moment Before All Ants Fall Out of a Plank problem. The choice of implementation language depends on the specific requirements and constraints of the problem.

:::

## References

- **LeetCode Problem:** [Last Moment Before All Ants Fall Out of a Plank](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/)
- **Solution Link:** [Last Moment Before All Ants Fall Out of a Plank Solution on LeetCode](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solution/)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)


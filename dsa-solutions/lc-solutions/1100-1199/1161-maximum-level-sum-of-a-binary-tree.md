---
id: maximum-level-sum-of-a-binary-tree
title:  Maximum Level Sum of a Binary Tree
sidebar_label: 1161. Maximum Level Sum of a Binary Tree
tags:
- Tree
- Breadth-First Search
- Binary Tree
description: "This is a solution to the Maximum Level Sum of a Binary Tree problem on LeetCode."
---

## Problem Description
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
### Examples

**Example 1:**
![image](https://assets.leetcode.com/uploads/2019/05/03/capture.JPG)
```
Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation: 
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.
```

**Example 2:**
```
Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2
```

### Constraints
- `The number of nodes in the tree is in the range [1, 10^4]`
- `-10^5 <= Node.val <= 10^5`

## Solution for Maximum Level Sum of a Binary
  
### Approach
The problem is to find the level in a binary tree that has the maximum sum of node values. To solve this, we use a breadth-first search (BFS) approach, which is well-suited for level-order traversal of a tree. BFS allows us to process nodes level by level, making it easy to calculate the sum of values at each level.

#### Initial Checks and Setup:

- If the root is null, return -1 as there are no levels in the tree.
- Initialize a queue and add the root node to it. This queue will help us traverse the tree level by level.
- Initialize variables to keep track of the maximum sum (maxSum), the level with the maximum sum (ans), and the current level (level). Set maxSum to a very small value to ensure any level sum will be larger initially.
#### Level-Order Traversal Using BFS:

- Use a while loop to process nodes until the queue is empty.
- Increment the level variable at the start of each iteration of the while loop to represent the current level.
- Determine the number of nodes at the current level (size), which is the current length of the queue.
- Initialize a temporary sum variable (tempSum) to zero for storing the sum of values at the current level.
#### Processing Each Level:

- Use a for loop to iterate over all nodes at the current level. The loop runs size times.
- For each node, dequeue it from the queue, add its value to tempSum, and enqueue its left and right children (if they exist).
#### Update Maximum Sum and Level:

- After processing all nodes at the current level, compare tempSum with maxSum.
- If tempSum is greater than maxSum, update maxSum to tempSum and set ans to the current level.
#### Return the Result:

- Once all levels have been processed and the queue is empty, return ans, which holds the level number with the maximum sum.
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

var maxLevelSum = function(root) {
    if (!root) return -1;

    let ans = -1;
    let level = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    const queue = [root];

    while (queue.length > 0) {
        level++;
        const size = queue.length;
        let tempSum = 0;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            tempSum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (tempSum > maxSum) {
            ans = level;
            maxSum = tempSum;
        }
    }

    return ans;
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
const array  = [1,7,0,7,-8,null,null]
const root = constructTreeFromArray(array)
const input = root
const output = maxLevelSum(root)
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
   var maxLevelSum = function(root) {
    if (!root) return -1;

    let ans = -1;
    let level = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    const queue = [root];

    while (queue.length > 0) {
        level++;
        const size = queue.length;
        let tempSum = 0;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            tempSum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (tempSum > maxSum) {
            ans = level;
            maxSum = tempSum;
        }
    }

    return ans;
};
```
  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return -1;

    let ans = -1;
    let level = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        level++;
        const size = queue.length;
        let tempSum = 0;
        for (let i = 0; i < size; i++) {
            const curr = queue.shift()!;
            tempSum += curr.val;
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        if (tempSum > maxSum) {
            ans = level;
            maxSum = tempSum;
        }
    }

    return ans;
}

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
    def maxLevelSum(self, root: TreeNode) -> int:
        if not root:
            return -1
        
        from collections import deque
        
        ans = -1
        level = 0
        max_sum = float('-inf')
        queue = deque([root])
        
        while queue:
            level += 1
            size = len(queue)
            temp_sum = 0
            for _ in range(size):
                curr = queue.popleft()
                temp_sum += curr.val
                if curr.left:
                    queue.append(curr.left)
                if curr.right:
                    queue.append(curr.right)
            if temp_sum > max_sum:
                ans = level
                max_sum = temp_sum
        
        return ans

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
import java.util.*;

class Solution {
    public int maxLevelSum(TreeNode root) {
        if (root == null) return -1;

        int ans = -1;
        int level = 0;
        int maxSum = Integer.MIN_VALUE;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            level++;
            int size = queue.size();
            int tempSum = 0;
            for (int i = 0; i < size; i++) {
                TreeNode curr = queue.poll();
                tempSum += curr.val;
                if (curr.left != null) queue.add(curr.left);
                if (curr.right != null) queue.add(curr.right);
            }
            if (tempSum > maxSum) {
                ans = level;
                maxSum = tempSum;
            }
        }

        return ans;
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
    int maxLevelSum(TreeNode* root) {
        int ans=-1;
        int level=0;
        int sum=INT_MIN;
       queue<TreeNode *> q;
        if(!root) return ans;
 
        q.push(root);
        
        while(!q.empty()){
          
            level++;
            int size = q.size();
            int temp=0;
            while(size--){
                TreeNode *curr = q.front();
                q.pop();
                temp+=curr->val;
                
                if(curr->left) q.push(curr->left);
                if(curr->right) q.push(curr->right);

            }
               if(temp>sum)
               {
                   ans=level;
                   sum=temp;
               }                
        }
        
        return ans;
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

- **LeetCode Problem**: [Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/)


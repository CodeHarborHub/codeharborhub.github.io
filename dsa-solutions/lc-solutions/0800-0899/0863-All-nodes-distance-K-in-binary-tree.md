---
id: All-Nodes-Distance-K-in-Binary-Tree
title: All Nodes Distance K in Binary Tree
sidebar_label: 863 - All Nodes Distance K in Binary Tree
tags:
  - Leet code
description: "Solution to leetocde 863"
---
    
## Problem Statement
Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

### Example 1

**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2`

**Output**: `[7,4,1]`

**Explanation**:
The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

### Example 2

**Input**: `root = [1], target = 1, k = 3`

**Output**: `[]`


### Constraints

- `The number of nodes in the tree is in the range [1, 500]`
- `0 <= Node.val <= 500`
- `All the values Node.val are unique`
- `target is the value of one of the nodes in the tree`
- `0 <= k <= 1000`

### Approach

Start a BFS from the root node of the binary tree. We will use a queue to perform the BFS traversal. Initialize an empty queue and push the root node into it.

While the queue is not empty, perform the following steps:

Get the current size of the queue (number of nodes at the current level).
Iterate through all the nodes at the current level.
For each node, check if it has a left child. If it does, store the parent-child relationship by mapping the left child's value to its parent node in an unordered_map called "parent".
Similarly, if the current node has a right child, store the parent-child relationship for the right child.
After processing the children of the current node, remove it from the queue.
After the BFS traversal, we will have the parent-child relationship stored in the "parent" unordered_map.

Now, we need to perform another BFS traversal to find all the nodes at a distance of k from the target node. Initialize another empty queue and push the target node into it.

While the value of k is greater than 0 and the queue is not empty, perform the following steps:

Get the current size of the queue (number of nodes at the current level).
Iterate through all the nodes at the current level.
Mark the current node as visited by adding its value to the "visited" unordered_map.
If the current node has a left child and it has not been visited yet, push it into the queue.
If the current node has a right child and it has not been visited yet, push it into the queue.
If the current node has a parent and the parent node has not been visited yet, push the parent node into the queue.
After processing the current node and its children/parent, remove it from the queue.
After the BFS traversal, we will have all the nodes at a distance of k from the target node stored in the queue.

Finally, we can extract the values of the nodes from the queue and store them in a vector called "ans". Return the "ans" vector as the result.



**Time complexity:** O(n)



**Space complexity:** O(n)



### Code implementation

### Python Solution

```python
class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        ans = []
        parent = {}
        queue = deque()
        queue.append(root)

        while queue:
            size = len(queue)
            for _ in range(size):
                top = queue.popleft()

                if top.left:
                    parent[top.left.val] = top
                    queue.append(top.left)

                if top.right:
                    parent[top.right.val] = top
                    queue.append(top.right)

        visited = {}
        queue.append(target)
        while k > 0 and queue:
            size = len(queue)

            for _ in range(size):
                top = queue.popleft()

                visited[top.val] = 1

                if top.left and top.left.val not in visited:
                    queue.append(top.left)

                if top.right and top.right.val not in visited:
                    queue.append(top.right)

                if top.val in parent and parent[top.val].val not in visited:
                    queue.append(parent[top.val])

            k -= 1

        while queue:
            ans.append(queue.popleft().val)

        return ans        

```

### C++ Solution

```cpp
class Solution {
public:
    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        vector<int> ans;
        unordered_map<int, TreeNode*> parent;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()){
            int si = q.size();
            for(int i = 0; i < si; i++){
                auto top = q.front();
                q.pop();
                
                if(top -> left){
                    parent[top->left->val] = top;
                    q.push(top->left); 
                }

                if(top -> right){
                    parent[top->right->val] = top;
                    q.push(top->right); 
                }
            }
        }

        unordered_map<int, int> visited;
        q.push(target);
        while(k-- && !q.empty()){
            int size = q.size();

            for(int i = 0; i < size; i++){
                auto top = q.front();
                q.pop();

                visited[top -> val] = 1;

                if(top -> left && !visited[top->left->val]){
                    q.push(top -> left);
                }

                if(top -> right && !visited[top->right->val]){
                    q.push(top -> right);
                }

                if(parent[top->val] && !visited[parent[top->val] -> val]){
                    q.push(parent[top->val]);
                }

            }
        }

        while(!q.empty()){
            ans.push_back(q.front()->val);
            q.pop();
        }
        return ans;
    }
};
```

### Java Solution

```java
class Solution {
    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        List<Integer> ans = new ArrayList<>();
        Map<Integer, TreeNode> parent = new HashMap<>();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode top = queue.poll();

                if (top.left != null) {
                    parent.put(top.left.val, top);
                    queue.offer(top.left);
                }

                if (top.right != null) {
                    parent.put(top.right.val, top);
                    queue.offer(top.right);
                }
            }
        }

        Map<Integer, Integer> visited = new HashMap<>();
        queue.offer(target);
        while (k > 0 && !queue.isEmpty()) {
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode top = queue.poll();

                visited.put(top.val, 1);

                if (top.left != null && !visited.containsKey(top.left.val)) {
                    queue.offer(top.left);
                }

                if (top.right != null && !visited.containsKey(top.right.val)) {
                    queue.offer(top.right);
                }

                if (parent.containsKey(top.val) && !visited.containsKey(parent.get(top.val).val)) {
                    queue.offer(parent.get(top.val));
                }
            }

            k--;
        }

        while (!queue.isEmpty()) {
            ans.add(queue.poll().val);
        }
        return ans;
    }
}
```

### JavaScript Solution

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let adjList = {}, visited = {}, result = [];

    const buildAdjList = function(node) {
        if(!node) return null;

        if(!adjList[node.val]) adjList[node.val] = [];
        
        if(node.left) {
            if(!adjList[node.left.val]) adjList[node.left.val] = [];

            adjList[node.val].push(node.left.val);
            adjList[node.left.val].push(node.val);
        }
        if(node.right) {
            if(!adjList[node.right.val]) adjList[node.right.val] = [];

            adjList[node.val].push(node.right.val);
            adjList[node.right.val].push(node.val);
        }

        buildAdjList(node.left);
        buildAdjList(node.right);
    }

    buildAdjList(root);
    

    const dfs = function(source, dist = 0) {
        visited[source] = true;
        if(k == dist) result.push(source);

        for(const dest of adjList[source] || []) {
            if(!visited[dest]) {
                dfs(dest, dist + 1);
            }            
        }
    }

    dfs(target.val)

    return result;
};
```
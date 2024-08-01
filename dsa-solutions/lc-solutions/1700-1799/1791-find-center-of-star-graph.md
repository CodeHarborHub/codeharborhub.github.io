---
id: find-center-of-star-graph
title: Find Center of Star Graph
sidebar_label: 1791. Find Center of Star Graph

tags:
- Graph

description: "This is a solution to the Find Center of Star Graph problem on LeetCode."
---

## Problem Description
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

### Examples

**Example 1:**
![image](https://assets.leetcode.com/uploads/2021/02/24/star_graph.png)
```
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.

```

**Example 2:**

```
Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
```


### Constraints
- `3 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `1 <= ui, vi <= n`
- `ui != vi`

## Solution for Path With Minimum Effort Problem
### Approach 

1. **Adjacency List Creation**: First, we create an adjacency list to store the connections between nodes.
2. **Counting Connections**: Traverse the `edges` list to fill the adjacency list.
3. **Finding the Center**: The node that has exactly `n` connections (where `n` is the number of edges) is the center of the star graph because it is connected to all other nodes.

### Intuition:
In a star graph with `n` edges:
- The center node will have exactly `n` connections.
- All other nodes will have exactly one connection (to the center).

Thus, by counting the number of connections each node has, we can identify the center of the star graph.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
       function findCenter(edges) {
        let n = edges.length;
        let adj = new Array(n + 2).fill(0).map(() => []);

        for (let i = 0; i < edges.length; i++) {
            adj[edges[i][0]].push(edges[i][1]);
            adj[edges[i][1]].push(edges[i][0]);
        }

        for (let i = 1; i <= n + 1; i++) {
            if (adj[i].length === edges.length) {
                return i;
            }
        }
        return 0;
    }
      const input = [[1,2],[2,3],[4,2]]
      const output = findCenter(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $ O(N) $ 
    - Space Complexity: $ O(N)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    function findCenter(edges) {
        let n = edges.length;
        let adj = new Array(n + 2).fill(0).map(() => []);

        for (let i = 0; i < edges.length; i++) {
            adj[edges[i][0]].push(edges[i][1]);
            adj[edges[i][1]].push(edges[i][0]);
        }

        for (let i = 1; i <= n + 1; i++) {
            if (adj[i].length === edges.length) {
                return i;
            }
        }
        return 0;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    findCenter(edges: number[][]): number {
        let n = edges.length;
        let adj: number[][] = new Array(n + 2).fill(0).map(() => []);

        for (let i = 0; i < edges.length; i++) {
            adj[edges[i][0]].push(edges[i][1]);
            adj[edges[i][1]].push(edges[i][0]);
        }

        for (let i = 1; i <= n + 1; i++) {
            if (adj[i].length === edges.length) {
                return i;
            }
        }
        return 0;
    }
}

// Usage example:
let solution = new Solution();
let edges = [[1, 2], [2, 3], [4, 2]];
console.log(solution.findCenter(edges)); // Output: 2

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   class Solution:
    def findCenter(self, edges):
        n = len(edges)
        adj = [[] for _ in range(n + 2)]

        for edge in edges:
            adj[edge[0]].append(edge[1])
            adj[edge[1]].append(edge[0])

        for i in range(1, n + 2):
            if len(adj[i]) == n:
                return i
        return 0

# Usage example:
solution = Solution()
edges = [[1, 2], [2, 3], [4, 2]]
print(solution.findCenter(edges))  # Output: 2

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.ArrayList;
import java.util.List;

class Solution {
    public int findCenter(int[][] edges) {
        int n = edges.length;
        List<Integer>[] adj = new ArrayList[n + 2];
        for (int i = 0; i < n + 2; i++) {
            adj[i] = new ArrayList<>();
        }

        for (int i = 0; i < edges.length; i++) {
            adj[edges[i][0]].add(edges[i][1]);
            adj[edges[i][1]].add(edges[i][0]);
        }

        for (int i = 1; i <= n + 1; i++) {
            if (adj[i].size() == n) {
                return i;
            }
        }
        return 0;
    }

    // Usage example:
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] edges = {{1, 2}, {2, 3}, {4, 2}};
        System.out.println(solution.findCenter(edges));  // Output: 2
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        int n = edges.size();
        vector<int> adj[n + 2];

        for (int i = 0; i < edges.size(); i++) {
            adj[edges[i][0]].push_back(edges[i][1]);
            adj[edges[i][1]].push_back(edges[i][0]);
        }

        for (int i = 1; i <= n+1; i++) {
            if (adj[i].size() == edges.size())
                return i;
        }
        return 0;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find Center of Star Graph](https://leetcode.com/problems/find-center-of-star-graph/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/find-center-of-star-graph/description/)


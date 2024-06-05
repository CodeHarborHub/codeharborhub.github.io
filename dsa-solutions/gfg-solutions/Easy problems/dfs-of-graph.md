---
id: dfs-of-graph
title: DFS of Graph
sidebar_label: 7 DFS of Graph
tags:
- Graph
- DFS
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of performing a Depth First Search (DFS) traversal of a connected undirected graph in various programming languages."
---

## Problem

You are given a connected undirected graph. Perform a Depth First Traversal of the graph. Use the recursive approach to find the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph.

### Examples

**Example 1:**

```
Input: V = 5, adj = [[2,3,1], [0], [0,4], [0], [2]]
Output: 0 2 4 3 1
Explanation: 
0 is connected to 2, 3, 1.
1 is connected to 0.
2 is connected to 0 and 4.
3 is connected to 0.
4 is connected to 2.
Starting from 0, it will go to 2 then 4, and then 3 and 1.
Thus DFS will be 0 2 4 3 1.
```

**Example 2:**

```
Input: V = 4, adj = [[1,3], [2,0], [1], [0]]
Output: 0 1 2 3
Explanation:
0 is connected to 1, 3.
1 is connected to 0, 2. 
2 is connected to 1.
3 is connected to 0. 
Starting from 0, it will go to 1 then 2, then back to 0 then 0 to 3.
Thus DFS will be 0 1 2 3.
```

### Your Task

You don't need to read input or print anything. Your task is to complete the function `dfsOfGraph()` which takes the integer `V` denoting the number of vertices and adjacency list as input parameters and returns a list containing the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph.

- **Expected Time Complexity:** $ O(V + E)  $
- **Expected Auxiliary Space:** $ O(V)$

**Constraints**
- $ 1 ≤ V, E ≤ 10^4 $

## Solution

### Intuition & Approach

To perform a Depth First Search (DFS) traversal of a graph, we can use a recursive approach. Starting from the 0th vertex, we visit each vertex and recursively explore its adjacent vertices that have not been visited yet. By keeping track of visited vertices, we ensure that each vertex is visited only once.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
class Solution:
    
    def dfsOfGraph(self, V, adj):
        visited = [False] * V
        result = []
        self.dfs(0, adj, visited, result)
        return result
        
    def dfs(self, node, adj, visited, result):
        visited[node] = True
        result.append(node)
        for neighbor in adj[node]:
            if not visited[neighbor]:
                self.dfs(neighbor, adj, visited, result)
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> dfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];
        List<Integer> result = new ArrayList<>();
        dfs(0, adj, visited, result);
        return result;
    }
    
    private void dfs(int node, ArrayList<ArrayList<Integer>> adj, boolean[] visited, List<Integer> result) {
        visited[node] = true;
        result.add(node);
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor, adj, visited, result);
            }
        }
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <vector>

class Solution {
public:
    void dfsOfGraph(int V, std::vector<int> adj[], std::vector<int>& result) {
        std::vector<bool> visited(V, false);
        dfs(0, adj, visited, result);
    }
    
private:
    void dfs(int node, std::vector<int> adj[], std::vector<bool>& visited, std::vector<int>& result) {
        visited[node] = true;
        result.push_back(node);
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor, adj, visited, result);
            }
        }
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class Solution {
    dfsOfGraph(V, adj) {
        let visited = new Array(V).fill(false);
        let result = [];
        this.dfs(0, adj, visited, result);
        return result;
    }
    
    dfs(node, adj, visited, result) {
        visited[node] = true;
        result.push(node);
        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, adj, visited, result);
            }
        }
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class Solution {
    dfsOfGraph(V: number, adj: number[][]): number[] {
        let visited = new Array(V).fill(false);
        let result: number[] = [];
        this.dfs(0, adj, visited, result);
        return result;
    }
    
    private dfs(node: number, adj: number[][], visited: boolean[], result: number[]): void {
        visited[node] = true;
        result.push(node);
        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, adj, visited, result);
            }
        }
    }
}
```

  </TabItem>
</Tabs>


### Complexity Analysis

- **Time Complexity:** $ O(V + E)  $
- **Auxiliary Space:** $ O(V)$

---

## References

- **GeeksforGeeks Problem:** [DFS of graph](https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)

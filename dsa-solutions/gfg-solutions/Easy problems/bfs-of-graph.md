---
id: bfs-of-graph
title: BFS of Graph
sidebar_label: 8 BFS of Graph
tags:
- Graph
- BFS
- Python
- Java
- C++
- JavaScript
- TypeScript
description: "This document provides solutions to the problem of performing a Breadth First Search (BFS) traversal of a directed graph in various programming languages."
---

## Problem

Given a directed graph, perform a Breadth First Traversal starting from the 0th vertex. One can move from node `u` to node `v` only if there's an edge from `u` to `v`. Find the BFS traversal of the graph starting from the 0th vertex, from left to right according to the input graph. Only consider nodes that are directly or indirectly connected to node `0`.

### Examples

**Example 1:**

```
Input: V = 5, E = 4, adj = {{1,2,3},{},{4},{},{}}
Output: 0 1 2 3 4
Explanation: 
0 is connected to 1, 2, 3.
2 is connected to 4.
Starting from 0, it will go to 1 then 2 then 3. After this, 2 to 4, thus BFS will be 0 1 2 3 4.
```

**Example 2:**

```
Input: V = 3, E = 2, adj = {{1,2},{},{}}
Output: 0 1 2
Explanation:
0 is connected to 1, 2.
Starting from 0, it will go to 1 then 2, thus BFS will be 0 1 2.
```

### Your Task

You don't need to read input or print anything. Your task is to complete the function `bfsOfGraph()` which takes the integer `V` denoting the number of vertices and adjacency list as input parameters and returns a list containing the BFS traversal of the graph starting from the 0th vertex from left to right.

**Expected Time Complexity:** $O(V + E)$ 
**Expected Auxiliary Space:** $O(V)$

**Constraints**
- $1 ≤ V, E ≤ 10^4$

## Solution

### Intuition & Approach

Breadth First Search (BFS) is a method to traverse a graph level by level, starting from a given node. We use a queue data structure to facilitate this traversal. The main steps are:

1. Create a boolean list `visited` to mark all vertices as not visited.
2. Initialize the traversal from the starting vertex (0th vertex).
3. Use a queue to explore nodes level by level, marking each node as visited once it is processed.
4. For each node, explore its adjacent vertices that have not been visited yet, marking them as visited and adding them to the queue.
5. Continue this process until the queue is empty.

### Implementation

<Tabs>
  <TabItem value="python" label="Python">

```python
from collections import deque

class Solution:
    
    def bfsOfGraph(self, V, adj):
        visited = [False] * V
        queue = deque([0])
        visited[0] = True
        result = []
        
        while queue:
            node = queue.popleft()
            result.append(node)
            for neighbor in adj[node]:
                if not visited[neighbor]:
                    queue.append(neighbor)
                    visited[neighbor] = True
        return result
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {
        ArrayList<Integer> traversal = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();
        boolean[] visited = new boolean[V];
        queue.add(0);
        visited[0] = true;
        
        while (!queue.isEmpty()) {
            int node = queue.poll();
            traversal.add(node);
            for (int neighbor : adj.get(node)) {
                if (!visited[neighbor]) {
                    queue.add(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        return traversal;
    }
}
```

  </TabItem>
  <TabItem value="cpp" label="C++">

```cpp
#include <vector>
#include <queue>

class Solution {
public:
    std::vector<int> bfsOfGraph(int V, std::vector<int> adj[]) {
        std::vector<int> result;
        std::vector<bool> visited(V, false);
        std::queue<int> q;
        
        q.push(0);
        visited[0] = true;
        
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            result.push_back(node);
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    q.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        return result;
    }
};
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```javascript
class Solution {
    bfsOfGraph(V, adj) {
        let visited = new Array(V).fill(false);
        let queue = [0];
        visited[0] = true;
        let result = [];
        
        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node);
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        return result;
    }
}
```

  </TabItem>
  <TabItem value="typescript" label="TypeScript">

```typescript
class Solution {
    bfsOfGraph(V: number, adj: number[][]): number[] {
        let visited = new Array(V).fill(false);
        let queue: number[] = [0];
        visited[0] = true;
        let result: number[] = [];
        
        while (queue.length > 0) {
            let node = queue.shift() as number;
            result.push(node);
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        return result;
    }
}
```

  </TabItem>
</Tabs>

---

## Complexity analysis

The provided solutions efficiently perform a Breadth First Search (BFS) traversal of a directed graph. By starting from the 0th vertex and using a queue to manage the traversal, the algorithms ensure that all reachable vertices are visited in the correct order. The solutions operate in $O(V + E)$ time and use $O(V)$ space complexity, where V and E are the numbers of vertices and edges in the graph, respectively.

**Time Complexity:** $O(V + E)$
**Auxiliary Space:** $O(V)$

## References

- **GeeksforGeeks Problem:** [BFS of graph](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/0)
- **Author GeeksforGeeks Profile:** [GeeksforGeeks](https://www.geeksforgeeks.org/user/GeeksforGeeks/)
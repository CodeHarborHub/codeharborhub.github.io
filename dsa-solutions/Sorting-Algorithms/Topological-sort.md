---
id: Topological-Sort
title: Topological Sort (Geeks for Geeks)
sidebar_label: Topological Sort
tags:
  - Intermediate
  - Sorting Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Topological Sort problem on Geeks for Geeks."
---

## 1. What is Topological Sort?

Topological Sort is a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge `u -> v`, vertex `u` comes before `v` in the ordering.

## 2. Algorithm for Topological Sort

1. Identify vertices with no incoming edges (indegree 0).
2. Remove these vertices and their outgoing edges from the graph.
3. Repeat steps 1 and 2 until all vertices are removed.
4. If the graph has a cycle, topological sort is not possible.

## 3. How does Topological Sort work?

- It repeatedly removes nodes with no incoming edges, adding them to the sorted list.
- It ensures that each node is processed only after all its dependencies are processed.

## 4. Problem Description

Given a Directed Acyclic Graph (DAG), implement the Topological Sort algorithm to order the vertices.

## 5. Examples

**Example 1:**
```
Input: Graph with edges [(5, 2), (5, 0), (4, 0), (4, 1), (2, 3), (3, 1)]
Output: [5, 4, 2, 3, 1, 0] or [4, 5, 2, 3, 1, 0]
```


**Example 2:**
```
Input: Graph with edges [(1, 2), (2, 3), (3, 4)]
Output: [1, 2, 3, 4]
```


**Explanation of Example 1:**
- The graph can be visualized as:
```
5 → 2 → 3 → 1
5 → 0
4 → 0
4 → 1
```
- One valid topological ordering is [5, 4, 2, 3, 1, 0].

## 6. Constraints

- The graph must be a Directed Acyclic Graph (DAG).

## 7. Implementation

**Python**
```python
from collections import defaultdict, deque

def topological_sort(vertices, edges):
    graph = defaultdict(list)
    indegree = {i: 0 for i in range(vertices)}

    for u, v in edges:
        graph[u].append(v)
        indegree[v] += 1

    queue = deque([v for v in range(vertices) if indegree[v] == 0])
    topo_order = []

    while queue:
        node = queue.popleft()
        topo_order.append(node)
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    if len(topo_order) == vertices:
        return topo_order
    else:
        return []
```
**C++**

  
  ```cpp
    #include <iostream>
    #include <vector>
    #include <queue>

    void topologicalSort(int vertices, const std::vector<std::pair<int, int>>& edges) {
    std::vector<int> indegree(vertices, 0);
    std::vector<std::vector<int>> graph(vertices);

    // Build the graph and compute indegrees of all vertices
    for (const auto& edge : edges) {
        graph[edge.first].push_back(edge.second);
        indegree[edge.second]++;
    }

    std::queue<int> q;
    // Enqueue all vertices with indegree 0
    for (int i = 0; i < vertices; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }

    std::vector<int> topo_order;
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        topo_order.push_back(node);

        // Reduce the indegree of the neighbors
        for (int neighbor : graph[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                q.push(neighbor);
            }
        }
    }

    // Check if there was a cycle
    if (topo_order.size() == vertices) {
        for (int node : topo_order) {
            std::cout << node << " ";
        }
    } else {
        std::cout << "Cycle detected, topological sort not possible.";
    }
}

int main() {
    int vertices = 6;
    std::vector<std::pair<int, int>> edges = {{5, 2}, {5, 0}, {4, 0}, {4, 1}, {2, 3}, {3, 1}};
    topologicalSort(vertices, edges);
    return 0;
}

```

**Java**

```java
import java.util.*;

public class TopologicalSort {
    public static List<Integer> topologicalSort(int vertices, int[][] edges) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] indegree = new int[vertices];
        for (int i = 0; i < vertices; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            indegree[edge[1]]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < vertices; i++) {
            if (indegree[i] == 0) {
                queue.add(i);
            }
        }

        List<Integer> topo_order = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            topo_order.add(node);
            for (int neighbor : graph.get(node)) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) {
                    queue.add(neighbor);
                }
            }
        }

        if (topo_order.size() == vertices) {
            return topo_order;
        } else {
            return Collections.emptyList(); // Cycle detected
        }
    }
```

**JavaScript**

```javascript
 function topologicalSort(vertices, edges) {
      let graph = Array.from({ length: vertices }, () => []);
      let indegree = Array(vertices).fill(0);
  for (let [u, v] of edges) {
      graph[u].push(v);
      indegree[v]++;
  }

  let queue = [];
  for (let i = 0; i < vertices; i++) {
      if (indegree[i] === 0) {
          queue.push(i);
      }
  }

  let topoOrder = [];
  while (queue.length > 0) {
      let node = queue.shift();
      topoOrder.push(node);

      for (let neighbor of graph[node]) {
          indegree[neighbor]--;
          if (indegree[neighbor] === 0) {
              queue.push(neighbor);
          }
      }
  }

  return topoOrder.length === vertices ? topoOrder : []; // Return empty array if cycle detected
}

```

## 8. Complexity Analysis

- **Time Complexity**:
- Best case: $O(V + E)$
- Average case: $O(V + E)$
- Worst case: $O(V + E)$

- **Space Complexity**: $O(V + E)$ (for the graph representation and auxiliary data structures)

## 9. Advantages and Disadvantages

**Advantages:**
- Provides a linear ordering of vertices in a DAG.
- Useful in scenarios such as task scheduling, resolving symbol dependencies in linkers, etc.

**Disadvantages:**
- Not applicable if the graph contains cycles.
- Requires graph to be a DAG.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/topological-sorting/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/torque-and-development/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)




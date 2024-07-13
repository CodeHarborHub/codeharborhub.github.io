---
id: edmonds-karp-algorithm
title: Edmonds-Karp Algorithm
sidebar_label: 13 - Edmonds-Karp Algorithm
tags:
  - Graph Algorithms
  - Maximum Flow
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the Edmonds-Karp Algorithm, an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network."
---

# Edmonds-Karp Algorithm

## 1. What is the Edmonds-Karp Algorithm?

The Edmonds-Karp Algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network. It uses Breadth-First Search (BFS) to find augmenting paths, making it a specific and efficient version of the Ford-Fulkerson method.

## 2. Algorithm for Edmonds-Karp

1. **Initialize Flow**: Start with zero flow.
2. **Find Augmenting Path**: Use BFS to find the shortest augmenting path from the source to the sink in terms of the number of edges.
3. **Augment Flow**: Increase the flow along the path found in step 2 by the minimum residual capacity of the edges along the path.
4. **Update Residual Capacities**: Adjust the residual capacities of the edges and reverse edges along the path.
5. **Repeat**: Repeat steps 2-4 until no more augmenting paths can be found.

## 3. How Does the Edmonds-Karp Algorithm Work?

- **Breadth-First Search (BFS)**: Finds the shortest augmenting path in terms of the number of edges.
- **Residual Capacity**: The capacity left in an edge after considering the current flow.
- **Augmenting Path**: A path from the source to the sink where every edge has residual capacity greater than zero.

## 4. Problem Description

Given a flow network represented by a directed graph with capacities on the edges, find the maximum flow from a source vertex to a sink vertex.

## 5. Examples

Example graph:

```
      10
   A -----> B
  /|        |\
  |         |  \
  |6        |4  \10
  |         |    \
  v         v     v
  C -----> D ----> E
     10       10
```

Maximum Flow: 20

## 6. Constraints

- The graph should be a directed graph with non-negative edge capacities.
- There must be a source and a sink vertex.

## 7. Implementation

### Edmonds-Karp Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  from collections import deque

  def bfs(C, F, source, sink):
      queue = deque([source])
      paths = {source: []}
      if source == sink:
          return paths[source]
      while queue:
          u = queue.popleft()
          for v in range(len(C)):
              if C[u][v] - F[u][v] > 0 and v not in paths:
                  paths[v] = paths[u] + [(u, v)]
                  if v == sink:
                      return paths[v]
                  queue.append(v)
      return None

  def edmonds_karp(C, source, sink):
      n = len(C)
      F = [[0] * n for _ in range(n)]
      path = bfs(C, F, source, sink)
      while path:
          flow = min(C[u][v] - F[u][v] for u, v in path)
          for u, v in path:
              F[u][v] += flow
              F[v][u] -= flow
          path = bfs(C, F, source, sink)
      return sum(F[source][i] for i in range(n))

  capacity = [
      [0, 10, 6, 0, 0],
      [0, 0, 0, 4, 10],
      [0, 0, 0, 10, 0],
      [0, 0, 0, 0, 10],
      [0, 0, 0, 0, 0]
  ]

  source = 0
  sink = 4
  print("Max Flow:", edmonds_karp(capacity, source, sink))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <climits>
  using namespace std;

  bool bfs(vector<vector<int>>& capacity, vector<vector<int>>& flow, int source, int sink, vector<int>& parent) {
      int n = capacity.size();
      vector<bool> visited(n, false);
      queue<int> q;
      q.push(source);
      visited[source] = true;
      parent[source] = -1;

      while (!q.empty()) {
          int u = q.front();
          q.pop();

          for (int v = 0; v < n; ++v) {
              if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                  q.push(v);
                  parent[v] = u;
                  visited[v] = true;
                  if (v == sink) {
                      return true;
                  }
              }
          }
      }
      return false;
  }

  int edmondsKarp(vector<vector<int>>& capacity, int source, int sink) {
      int n = capacity.size();
      vector<vector<int>> flow(n, vector<int>(n, 0));
      vector<int> parent(n);
      int maxFlow = 0;

      while (bfs(capacity, flow, source, sink, parent)) {
          int pathFlow = INT_MAX;
          for (int v = sink; v != source; v = parent[v]) {
              int u = parent[v];
              pathFlow = min(pathFlow, capacity[u][v] - flow[u][v]);
          }

          for (int v = sink; v != source; v = parent[v]) {
              int u = parent[v];
              flow[u][v] += pathFlow;
              flow[v][u] -= pathFlow;
          }

          maxFlow += pathFlow;
      }
      return maxFlow;
  }

  int main() {
      vector<vector<int>> capacity = {
          {0, 10, 6, 0, 0},
          {0, 0, 0, 4, 10},
          {0, 0, 0, 10, 0},
          {0, 0, 0, 0, 10},
          {0, 0, 0, 0, 0}
      };

      int source = 0;
      int sink = 4;
      cout << "Max Flow: " << edmondsKarp(capacity, source, sink) << endl;
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  public class EdmondsKarp {
      private static boolean bfs(int[][] capacity, int[][] flow, int source, int sink, int[] parent) {
          int n = capacity.length;
          boolean[] visited = new boolean[n];
          Queue<Integer> queue = new LinkedList<>();
          queue.add(source);
          visited[source] = true;
          parent[source] = -1;

          while (!queue.isEmpty()) {
              int u = queue.poll();
              for (int v = 0; v < n; v++) {
                  if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                      queue.add(v);
                      parent[v] = u;
                      visited[v] = true;
                      if (v == sink) {
                          return true;
                      }
                  }
              }
          }
          return false;
      }

      public static int edmondsKarp(int[][] capacity, int source, int sink) {
          int n = capacity.length;
          int[][] flow = new int[n][n];
          int[] parent = new int[n];
          int maxFlow = 0;

          while (bfs(capacity, flow, source, sink, parent)) {
              int pathFlow = Integer.MAX_VALUE;
              for (int v = sink; v != source; v = parent[v]) {
                  int u = parent[v];
                  pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
              }

              for (int v = sink; v != source; v = parent[v]) {
                  int u = parent[v];
                  flow[u][v] += pathFlow;
                  flow[v][u] -= pathFlow;
              }

              maxFlow += pathFlow;
          }
          return maxFlow;
      }

      public static void main(String[] args) {
          int[][] capacity = {
              {0, 10, 6, 0, 0},
              {0, 0, 0, 4, 10},
              {0, 0, 0, 10, 0},
              {0, 0, 0, 0, 10},
              {0, 0, 0, 0, 0}
          };

          int source = 0;
          int sink = 4;
          System.out.println("Max Flow: " + edmondsKarp(capacity, source, sink));
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  function bfs(capacity, flow, source, sink, parent) {
      const visited = new Array(capacity.length).fill(false);
      const queue = [source];
      visited[source] = true;
      parent[source] = -1;

      while (queue.length) {
          const u = queue.shift();
          for (let v = 0; v < capacity.length; v++) {
              if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                  queue.push(v);
                  parent[v] = u;
                  visited[v] = true;
                  if (v === sink) {
                      return true;
                  }
              }
          }
      }
      return false;
  }

  function edmondsKarp(capacity, source, sink) {
      const n = capacity.length;
      const flow = Array.from({ length: n }, () => Array(n).fill(0));
      const parent = new Array(n);
      let maxFlow = 0;

      while (bfs(capacity, flow, source, sink, parent)) {
          let pathFlow = Infinity;
          for (let v = sink; v !== source; v = parent[v]) {
              const u = parent[v];
              pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
          }

          for (let v = sink; v !== source; v = parent[v]) {
              const u = parent[v];
              flow[u][v] += pathFlow;
              flow[v][u] -= pathFlow;
          }

          maxFlow += pathFlow;
      }
      return maxFlow;
  }

  const capacity = [
      [0, 10, 6, 0, 0],
      [0, 0, 0, 4, 10],
      [0, 0, 0, 10, 0],
      [0, 0, 0, 0, 10],
      [0, 0, 0, 0, 0]
  ];

  const source = 0;
  const sink = 4;
  console.log("Max Flow:", edmondsKarp(capacity, source, sink));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(VE^2)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V^2)$ due to the storage required for the capacity and flow matrices.

## 9. Advantages and Disadvantages

### Advantages:
- Provides an exact solution to the maximum flow problem.
- Uses BFS, making it simpler and ensuring the shortest augmenting path is found.

### Disadvantages:
- Inefficient for dense graphs with large capacities.
- Higher time complexity compared to some other flow algorithms for large graphs.

## 10. References

- [GeeksforGeeks - Edmonds-Karp Algorithm](https://www.geeksforgeeks.org/edmonds-karp-algorithm-for-maximum-flow-problem/)


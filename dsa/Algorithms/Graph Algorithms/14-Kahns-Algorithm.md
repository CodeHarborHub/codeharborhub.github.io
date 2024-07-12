---
id: kahns-algorithm
title: Kahn's Algorithm
sidebar_label: 14 - Kahn's Algorithm
tags:
  - Graph Algorithms
  - Topological Sorting
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Kahn's Algorithm, an algorithm for topological sorting of a directed acyclic graph (DAG)."
---

# Kahn's Algorithm

## 1. What is Kahn's Algorithm?

Kahn's Algorithm is an algorithm for topological sorting of a directed acyclic graph (DAG). It uses an iterative approach to remove nodes with no incoming edges and forms a topological order of the vertices.

## 2. Algorithm for Kahn's Algorithm

1. **Initialize In-Degree**: Compute the in-degree (number of incoming edges) for each vertex.
2. **Initialize Queue**: Collect all vertices with an in-degree of 0 in a queue.
3. **Process Vertices**:
   - Remove a vertex from the queue and add it to the topological order.
   - Decrease the in-degree of all its neighboring vertices by 1.
   - If any neighboring vertex's in-degree becomes 0, add it to the queue.
4. **Check for Cycles**: If the number of vertices in the topological order is less than the total number of vertices, the graph has a cycle.

## 3. How Does Kahn's Algorithm Work?

- **In-Degree Calculation**: Helps identify vertices with no dependencies (in-degree 0).
- **Queue Processing**: Ensures vertices are processed in the order of their dependencies being resolved.
- **Cycle Detection**: If all vertices are not included in the topological order, the graph contains a cycle.

## 4. Problem Description

Given a directed acyclic graph (DAG), perform a topological sort of its vertices.

## 5. Examples

Example graph:

```
      5 → 0 ← 4
      ↓      ↓
      2 → 3 → 1
```

Topological Sort: 4, 5, 0, 2, 3, 1 or 5, 4, 2, 3, 0, 1 (one of the valid topological orders)

## 6. Constraints

- The graph must be directed and acyclic.

## 7. Implementation

### Kahn's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  from collections import deque, defaultdict

  def kahns_algorithm(graph):
      in_degree = {u: 0 for u in graph}
      for u in graph:
          for v in graph[u]:
              in_degree[v] += 1

      queue = deque([u for u in graph if in_degree[u] == 0])
      topo_order = []

      while queue:
          u = queue.popleft()
          topo_order.append(u)

          for v in graph[u]:
              in_degree[v] -= 1
              if in_degree[v] == 0:
                  queue.append(v)

      if len(topo_order) == len(graph):
          return topo_order
      else:
          return []  # The graph has a cycle

  graph = {
      5: [0, 2],
      4: [0, 1],
      2: [3],
      3: [1],
      1: [],
      0: []
  }

  print(kahns_algorithm(graph))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  using namespace std;

  vector<int> kahnsAlgorithm(vector<vector<int>>& graph) {
      int n = graph.size();
      vector<int> in_degree(n, 0);
      for (int u = 0; u < n; ++u) {
          for (int v : graph[u]) {
              in_degree[v]++;
          }
      }

      queue<int> q;
      for (int i = 0; i < n; ++i) {
          if (in_degree[i] == 0) {
              q.push(i);
          }
      }

      vector<int> topo_order;
      while (!q.empty()) {
          int u = q.front();
          q.pop();
          topo_order.push_back(u);

          for (int v : graph[u]) {
              if (--in_degree[v] == 0) {
                  q.push(v);
              }
          }
      }

      if (topo_order.size() == n) {
          return topo_order;
      } else {
          return {};  // The graph has a cycle
      }
  }

  int main() {
      vector<vector<int>> graph = {
          {},        // 0
          {},        // 1
          {3},       // 2
          {1},       // 3
          {0, 1},    // 4
          {0, 2}     // 5
      };

      vector<int> result = kahnsAlgorithm(graph);
      for (int v : result) {
          cout << v << " ";
      }
      cout << endl;
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  public class KahnsAlgorithm {
      public static List<Integer> kahnsAlgorithm(Map<Integer, List<Integer>> graph) {
          Map<Integer, Integer> inDegree = new HashMap<>();
          for (int u : graph.keySet()) {
              inDegree.put(u, 0);
          }
          for (int u : graph.keySet()) {
              for (int v : graph.get(u)) {
                  inDegree.put(v, inDegree.get(v) + 1);
              }
          }

          Queue<Integer> queue = new LinkedList<>();
          for (int u : inDegree.keySet()) {
              if (inDegree.get(u) == 0) {
                  queue.add(u);
              }
          }

          List<Integer> topoOrder = new ArrayList<>();
          while (!queue.isEmpty()) {
              int u = queue.poll();
              topoOrder.add(u);

              for (int v : graph.get(u)) {
                  inDegree.put(v, inDegree.get(v) - 1);
                  if (inDegree.get(v) == 0) {
                      queue.add(v);
                  }
              }
          }

          if (topoOrder.size() == graph.size()) {
              return topoOrder;
          } else {
              return new ArrayList<>();  // The graph has a cycle
          }
      }

      public static void main(String[] args) {
          Map<Integer, List<Integer>> graph = new HashMap<>();
          graph.put(0, new ArrayList<>());
          graph.put(1, new ArrayList<>());
          graph.put(2, Arrays.asList(3));
          graph.put(3, Arrays.asList(1));
          graph.put(4, Arrays.asList(0, 1));
          graph.put(5, Arrays.asList(0, 2));

          List<Integer> result = kahnsAlgorithm(graph);
          result.forEach(v -> System.out.print(v + " "));
          System.out.println();
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  function kahnsAlgorithm(graph) {
      const inDegree = {};
      for (const u in graph) {
          inDegree[u] = 0;
      }
      for (const u in graph) {
          for (const v of graph[u]) {
              inDegree[v] = (inDegree[v] || 0) + 1;
          }
      }

      const queue = [];
      for (const u in inDegree) {
          if (inDegree[u] === 0) {
              queue.push(u);
          }
      }

      const topoOrder = [];
      while (queue.length > 0) {
          const u = queue.shift();
          topoOrder.push(u);

          for (const v of graph[u]) {
              inDegree[v]--;
              if (inDegree[v] === 0) {
                  queue.push(v);
              }
          }
      }

      if (topoOrder.length === Object.keys(graph).length) {
          return topoOrder;
      } else {
          return [];  // The graph has a cycle
      }
  }

  const graph = {
      0: [],
      1: [],
      2: [3],
      3: [1],
      4: [0, 1],
      5: [0, 2]
  };

  console.log(kahnsAlgorithm(graph));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V)$ due to the storage required for the in-degree array and the queue.

## 9. Advantages and Disadvantages

### Advantages:
- Efficient and straightforward for DAGs.
- Useful for scheduling tasks, resolving symbol dependencies in linkers, etc.

### Disadvantages:
- Only applicable to directed acyclic graphs (DAGs).
- Does not handle graphs with cycles.

## 10. References

- [GeeksforGeeks - Kahn's Algorithm](https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/)


---
id: bellman-ford-algorithm
title: Bellman-Ford Algorithm
sidebar_label: 02 - Bellman-Ford Algorithm
tags:
  - Graph Algorithms
  - Shortest Path
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the Bellman-Ford Algorithm for finding the shortest path in a graph with negative weight edges."
---

# Bellman-Ford Algorithm

## 1. What is the Bellman-Ford Algorithm?

The Bellman-Ford Algorithm is used to find the shortest paths from a single source vertex to all other vertices in a weighted graph, even in the presence of negative weight edges. It can detect negative weight cycles in a graph.

## 2. Algorithm for Bellman-Ford Algorithm

1. Initialize the distances to all vertices as infinity, except the source vertex, which is 0.
2. Relax all edges $|V| - 1$ times, where $|V|$ is the number of vertices.
3. Repeat one more time to detect negative weight cycles. If a shorter path is found, then a negative weight cycle exists.

## 3. How Does Bellman-Ford Algorithm Work?

1. Start with the source vertex and initialize the distances to all other vertices as infinity.
2. Relax all edges $|V| - 1$ times, where $|V|$ is the number of vertices. Relaxation means updating the distance if a shorter path is found.
3. Repeat the process one more time. If a shorter path is found during this additional relaxation step, then a negative weight cycle exists.

## 4. Problem Description

Given a weighted graph and a source vertex, the Bellman-Ford Algorithm aims to find the shortest paths from the source vertex to all other vertices in the graph.

## 5. Examples

Example graph:
```
      0    1    2    3
    --------------------
 0 | 0    4    0    0
 1 | 0    0   -1    0
 2 | 0    0    0    2
 3 | 0    3    0    0
```

Starting from vertex 0, we want to find the shortest paths to all other vertices.

## 6. Constraints

- The graph can have negative weight edges.
- The graph may not contain any negative weight cycles reachable from the source vertex.

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  def bellman_ford(graph, start):
      vertices = list(graph.keys())
      distances = {v: float('inf') for v in vertices}
      distances[start] = 0
  
      for _ in range(len(vertices) - 1):
          for u in vertices:
              for v, weight in graph[u]:
                  if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                      distances[v] = distances[u] + weight
  
      for u in vertices:
          for v, weight in graph[u]:
              if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                  print("Graph contains negative weight cycle")
                  return
  
      return distances
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  #include <vector>
  #include <limits>
  using namespace std;
  
  typedef pair<int, int> pii;
  
  vector<int> bellmanFord(vector<vector<pii>>& graph, int start) {
      int V = graph.size();
      vector<int> dist(V, numeric_limits<int>::max());
      dist[start] = 0;
  
      for (int i = 0; i < V - 1; ++i) {
          for (int u = 0; u < V; ++u) {
              for (auto& [v, weight] : graph[u]) {
                  if (dist[u] != numeric_limits<int>::max() && dist[u] + weight < dist[v]) {
                      dist[v] = dist[u] + weight;
                  }
              }
          }
      }
  
      for (int u = 0; u < V; ++u) {
          for (auto& [v, weight] : graph[u]) {
              if (dist[u] != numeric_limits<int>::max() && dist[u] + weight < dist[v]) {
                  cout << "Graph contains negative weight cycle\n";
                  return {};
              }
          }
      }
  
      return dist;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java
  import java.util.*;
  
  class BellmanFord {
      public static int[] bellmanFord(List<List<int[]>> graph, int start) {
          int V = graph.size();
          int[] dist = new int[V];
          Arrays.fill(dist, Integer.MAX_VALUE);
          dist[start] = 0;
  
          for (int i = 0; i < V - 1; ++i) {
              for (int u = 0; u < V; ++u) {
                  for (int[] edge : graph.get(u)) {
                      int v = edge[0];
                      int weight = edge[1];
                      if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                          dist[v] = dist[u] + weight;
                      }
                  }
              }
          }
  
          for (int u = 0; u < V; ++u) {
              for (int[] edge : graph.get(u)) {
                  int v = edge[0];
                  int weight = edge[1];
                  if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                      System.out.println("Graph contains negative weight cycle");
                      return new int[]{};
                  }
              }
          }
  
          return dist;
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  ```javascript
  function bellmanFord(graph, start) {
      const vertices = Object.keys(graph);
      const distances = {};
      vertices.forEach(vertex => distances[vertex] = Infinity);
      distances[start] = 0;
  
      for (let i = 0; i < vertices.length - 1; i++) {
          for (let u of vertices) {
              for (let [v, weight] of graph[u]) {
                  if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                      distances[v] = distances[u] + weight;
                  }
              }
          }
      }
  
      for (let u of vertices) {
          for (let [v, weight] of graph[u]) {
              if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                  console.log("Graph contains negative weight cycle");
                  return {};
              }
          }
      }
  
      return distances;
  }
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V * E)$, where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V)$, for storing distances.

## 9. Advantages and Disadvantages

### Advantages:
- Can handle graphs with negative weight edges.
- Can detect negative weight cycles.

### Disadvantages:
- Less efficient than Dijkstra's Algorithm for graphs with non-negative weights.
- Slower on large graphs due to the need for multiple relaxation steps.

## 10. Reference

- [GeeksforGeeks - Bellman-Ford Algorithm](https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/)
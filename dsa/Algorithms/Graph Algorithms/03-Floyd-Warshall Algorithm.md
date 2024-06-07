---
id: floyd-warshall-algorithm
title: Floyd-Warshall Algorithm
sidebar_label: 03 - Floyd-Warshall Algorithm
tags:
  - Graph Algorithms
  - Shortest Path
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the Floyd-Warshall Algorithm for finding the shortest paths between all pairs of vertices in a weighted graph."
---

# Floyd-Warshall Algorithm

## 1. What is the Floyd-Warshall Algorithm?

The Floyd-Warshall Algorithm is used to find the shortest paths between all pairs of vertices in a weighted graph. It works for both directed and undirected graphs and can handle graphs with negative weight edges, but not negative weight cycles.

## 2. Algorithm for Floyd-Warshall Algorithm

1. Initialize the distance matrix with the weights of the edges between vertices.
2. For each pair of vertices $(i, j)$, update the distance matrix by considering the possibility of going through a third vertex $(k)$ to get a shorter path from $i$ to $j$.
3. The final distance matrix will contain the shortest distances between all pairs of vertices.

## 3. How Does Floyd-Warshall Algorithm Work?

1. Start with a distance matrix representing the weights of the edges between vertices.
2. Update the matrix by considering all possible intermediate vertices for each pair of vertices.
3. Repeat this process until all pairs of vertices have been considered, and the matrix stabilizes.

## 4. Problem Description

Given a weighted graph, the Floyd-Warshall Algorithm aims to find the shortest paths between all pairs of vertices in the graph.

## 5. Examples

Example graph:
```
      0    1    2    3
    --------------------
 0 | 0    3    ∞    7
 1 | 8    0    2    ∞
 2 | 5    ∞    0    1
 3 | 2    ∞    ∞    0
```

## 6. Constraints

- The graph can have negative weight edges, but not negative weight cycles.

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  def floyd_warshall(graph):
      V = len(graph)
      dist = [[float('inf') for _ in range(V)] for _ in range(V)]
      for i in range(V):
          dist[i][i] = 0
      for u in range(V):
          for v in range(V):
              if graph[u][v] != 0:
                  dist[u][v] = graph[u][v]
      for k in range(V):
          for i in range(V):
              for j in range(V):
                  dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
      return dist
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  #include <vector>
  #include <limits>
  using namespace std;
  
  vector<vector<int>> floydWarshall(vector<vector<int>>& graph) {
      int V = graph.size();
      vector<vector<int>> dist(graph);
  
      for (int k = 0; k < V; ++k) {
          for (int i = 0; i < V; ++i) {
              for (int j = 0; j < V; ++j) {
                  if (dist[i][k] != numeric_limits<int>::max() && dist[k][j] != numeric_limits<int>::max()) {
                      dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                  }
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
  
  class FloydWarshall {
      public static int[][] floydWarshall(int[][] graph) {
          int V = graph.length;
          int[][] dist = new int[V][V];
  
          for (int i = 0; i < V; ++i) {
              for (int j = 0; j < V; ++j) {
                  dist[i][j] = graph[i][j];
              }
          }
  
          for (int k = 0; k < V; ++k) {
              for (int i = 0; i < V; ++i) {
                  for (int j = 0; j < V; ++j) {
                      if (dist[i][k] != Integer.MAX_VALUE && dist[k][j] != Integer.MAX_VALUE) {
                          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                      }
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
  function floydWarshall(graph) {
      const V = graph.length;
      const dist = [...graph];
  
      for (let k = 0; k < V; ++k) {
          for (let i = 0; i < V; ++i) {
              for (let j = 0; j < V; ++j) {
                  if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                  }
              }
          }
      }
  
      return dist;
  }
  ```
  </TabItem>
</Tabs>


## 8. Complexity Analysis

- **Time Complexity:** $O(V^3)$, where $V$ is the number of vertices.
- **Space Complexity:** $O(V^2)$, for storing the distance matrix.

## 9. Advantages and Disadvantages

### Advantages:
- Finds the shortest paths between all pairs of vertices.
- Can handle graphs with negative weight edges.

### Disadvantages:
- Inefficient for large graphs due to its cubic time complexity.
- Requires additional space to store the distance matrix.

## 10. Reference

- [GeeksforGeeks - Floyd-Warshall Algorithm](https://www.geeksforgeeks.org/floyd-warshall-algorithm/)
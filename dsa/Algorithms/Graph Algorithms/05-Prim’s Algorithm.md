---
id: prims-algorithm
title: Prim's Algorithm
sidebar_label: 05 - Prim's Algorithm
tags:
  - Graph Algorithms
  - Minimum Spanning Tree
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Prim's Algorithm for finding the minimum spanning tree in a graph."
---

# Prim's Algorithm

## 1. What is Prim's Algorithm?

Prim's Algorithm is used to find the minimum spanning tree (MST) of a connected, undirected graph. It greedily selects vertices with the lowest distance to the current MST, adding them to the MST one by one.

## 2. Algorithm for Prim's Algorithm

1. Start with an empty set to store the MST and a priority queue (min-heap) to store the vertices.
2. Initialize a distance array to track the minimum weight edge connecting each vertex to the MST.
3. Initialize all distances to infinity and set the distance of the starting vertex to 0.
4. Repeat until all vertices are added to the MST:
   - Extract the vertex with the minimum distance from the priority queue.
   - Add the vertex to the MST.
   - Update the distances of adjacent vertices if they are not already in the MST.
5. The MST is formed by the edges connecting the vertices in the priority queue.

## 3. How Does Prim's Algorithm Work?

- Prim's Algorithm greedily selects vertices with the lowest distance to the current MST, adding them to the MST one by one.

## 4. Problem Description

Given a weighted, connected graph, Prim's Algorithm aims to find the minimum spanning tree (MST) of the graph.

## 5. Examples

Example graph:

```
      0    1    2    3
    --------------------
 0 | 0    2    0    6
 1 | 2    0    3    8
 2 | 0    3    0    0
 3 | 6    8    0    0
```

## 6. Constraints

- The graph must be connected and undirected.
- The weights of the edges can be positive or negative.

## 7. Implementation

### Prim's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  import heapq

  def prim(graph):
      min_heap = []
      visited = set()
      MST = []
      start_vertex = list(graph.keys())[0]
      visited.add(start_vertex)
      for neighbor, weight in graph[start_vertex]:
          heapq.heappush(min_heap, (weight, start_vertex, neighbor))
      while min_heap:
          weight, src, dest = heapq.heappop(min_heap)
          if dest not in visited:
              visited.add(dest)
              MST.append((src, dest, weight))
              for neighbor, weight in graph[dest]:
                  if neighbor not in visited:
                      heapq.heappush(min_heap, (weight, dest, neighbor))
      return MST
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <utility>
  #include <unordered_set>
  using namespace std;

  typedef pair<int, int> pii;

  vector<pii> prim(vector<vector<pii>>& graph) {
      int V = graph.size();
      vector<pii> MST;
      priority_queue<pii, vector<pii>, greater<pii>> min_heap;
      unordered_set<int> visited;
      visited.insert(0); // Starting from vertex 0
      for (auto& edge : graph[0])
          min_heap.push({edge.second, edge.first, 0});
      while (!min_heap.empty()) {
          auto [weight, src, dest] = min_heap.top();
          min_heap.pop();
          if (visited.find(dest) == visited.end()) {
              visited.insert(dest);
              MST.push_back({src, dest});
              for (auto& edge : graph[dest]) {
                  if (visited.find(edge.first) == visited.end())
                      min_heap.push({edge.second, dest, edge.first});
              }
          }
      }
      return MST;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java
  import java.util.*;

  class PrimAlgorithm {
      static class Edge {
          int dest, weight;
          Edge(int dest, int weight) {
              this.dest = dest;
              this.weight = weight;
          }
      }

      static List<Edge> primAlgorithm(List<List<Edge>> graph) {
          int V = graph.size();
          List<Edge> MST = new ArrayList<>();
          PriorityQueue<Edge> minHeap = new PriorityQueue<>((a, b) -> a.weight - b.weight);
          Set<Integer> visited = new HashSet<>();
          visited.add(0); // Starting from vertex 0
          for (Edge edge : graph.get(0))
              minHeap.offer(edge);
          while (!minHeap.isEmpty()) {
              Edge edge = minHeap.poll();
              int src = edge.dest;
              int weight = edge.weight;
              if (!visited.contains(src)) {
                  visited.add(src);
                  MST.add(edge);
                  for (Edge nextEdge : graph.get(src)) {
                      if (!visited.contains(nextEdge.dest))
                          minHeap.offer(nextEdge);
                  }
              }
          }
          return MST;
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  ```javascript
  class PriorityQueue {
      constructor() {
          this.heap = [];
      }

      push(item) {
          this.heap.push(item);
          this.heap.sort((a, b) => a[0] - b[0]);
      }

      pop() {
          return this.heap.shift();
      }

      isEmpty() {
          return this.heap.length === 0;
      }
  }

  function prim(graph) {
      const minHeap = new PriorityQueue();
      const MST = [];
      const visited = new Set();
      const startVertex = Object.keys(graph)[0];
      visited.add(startVertex);
      for (const [neighbor, weight] of graph[startVertex]) {
          minHeap.push([weight, startVertex, neighbor]);
      }
      while (!minHeap.isEmpty()) {
          const [weight, src, dest] = minHeap.pop();
          if (!visited.has(dest)) {
              visited.add(dest);
              MST.push([src, dest, weight]);
              for (const [neighbor, weight] of graph[dest]) {
                  if (!visited.has(neighbor)) {
                      minHeap.push([weight, dest, neighbor]);
                  }
              }
          }
      }
      return MST;
  }
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(E + V log V)$ for a binary heap implementation, where $E$ is the number of edges and $V$ is the number of vertices.
- **Space Complexity:** $O(V + E)$ for storing the graph and priority queue.

## 9. Advantages and Disadvantages

### Advantages:
- Finds the minimum spanning tree of a graph efficiently.
- Works well with dense graphs.

### Disadvantages:
- Requires a priority queue, which can be expensive in terms of space and time.
- Not suitable for graphs with negative edge weights.

## 10. References

- [GeeksforGeeks - Prim's Algorithm](https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/)
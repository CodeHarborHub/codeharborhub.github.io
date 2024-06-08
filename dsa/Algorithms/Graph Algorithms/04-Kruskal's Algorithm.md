---
id: kruskals-algorithm
title: Kruskal's Algorithm
sidebar_label: 04 - Kruskal's Algorithm
tags:
  - Graph Algorithms
  - Minimum Spanning Tree
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Kruskal's Algorithm for finding the minimum spanning tree in a graph."
---

# Kruskal's Algorithm

## 1. What is Kruskal's Algorithm?

Kruskal's Algorithm is used to find the minimum spanning tree (MST) of a connected, undirected graph. It greedily selects edges with the lowest weight that do not form cycles, gradually building the MST.

## 2. Algorithm for Kruskal's Algorithm

1. Sort all the edges of the graph in non-decreasing order of their weight.
2. Initialize an empty set to store the MST.
3. Iterate through the sorted edges, adding each edge to the MST if it doesn't create a cycle.
4. Repeat until all vertices are connected or the MST contains $(V-1)$ edges, where $V$ is the number of vertices.

## 3. How Does Kruskal's Algorithm Work?

- Kruskal's Algorithm greedily selects edges with the lowest weight that do not form cycles, gradually building the MST.

## 4. Problem Description

Given a weighted, connected graph, Kruskal's Algorithm aims to find the minimum spanning tree (MST) of the graph.

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

### Kruskal's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  def find(parent, i):
      if parent[i] == i:
          return i
      return find(parent, parent[i])

  def union(parent, rank, x, y):
      xroot = find(parent, x)
      yroot = find(parent, y)

      if rank[xroot] < rank[yroot]:
          parent[xroot] = yroot
      elif rank[xroot] > rank[yroot]:
          parent[yroot] = xroot
      else:
          parent[yroot] = xroot
          rank[xroot] += 1

  def kruskal(graph):
      V = len(graph)
      result = []
      i = 0
      e = 0
      graph = sorted(graph, key=lambda item: item[2])
      parent = [i for i in range(V)]
      rank = [0] * V

      while e < V - 1:
          u, v, w = graph[i]
          i = i + 1
          x = find(parent, u)
          y = find(parent, v)
          if x != y:
              e = e + 1
              result.append([u, v, w])
              union(parent, rank, x, y)

      return result
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;

  struct Edge {
      int src, dest, weight;
  };

  struct DisjointSet {
      vector<int> parent, rank;
      DisjointSet(int n) {
          parent.resize(n);
          rank.resize(n);
          for (int i = 0; i < n; ++i)
              parent[i] = i;
      }
      int find(int i) {
          if (parent[i] != i)
              parent[i] = find(parent[i]);
          return parent[i];
      }
      void Union(int x, int y) {
          int xRoot = find(x);
          int yRoot = find(y);
          if (xRoot == yRoot) return;
          if (rank[xRoot] < rank[yRoot])
              parent[xRoot] = yRoot;
          else if (rank[yRoot] < rank[xRoot])
              parent[yRoot] = xRoot;
          else {
              parent[yRoot] = xRoot;
              rank[xRoot] += 1;
          }
      }
  };

  bool compare(const Edge& a, const Edge& b) {
      return a.weight < b.weight;
  }

  vector<Edge> kruskal(vector<Edge>& edges, int V) {
      sort(edges.begin(), edges.end(), compare);
      vector<Edge> MST;
      DisjointSet ds(V);
      int i = 0;
      while (MST.size() < V - 1) {
          Edge nextEdge = edges[i++];
          int x = ds.find(nextEdge.src);
          int y = ds.find(nextEdge.dest);
          if (x != y) {
              MST.push_back(nextEdge);
              ds.Union(x, y);
          }
      }
      return MST;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  ```java
  import java.util.*;

  class KruskalAlgorithm {
      static class Edge {
          int src, dest, weight;
          Edge(int src, int dest, int weight) {
              this.src = src;
              this.dest = dest;
              this.weight = weight;
          }
      }

      static class Disjoint
          private int[] parent;
          private int[] rank;

          Disjoint(int n) {
              parent = new int[n];
              rank = new int[n];
              for (int i = 0; i < n; i++) {
                  parent[i] = i;
                  rank[i] = 0;
              }
          }

          int find(int x) {
              if (parent[x] != x) {
                  parent[x] = find(parent[x]);
              }
              return parent[x];
          }

          void union(int x, int y) {
              int xRoot = find(x);
              int yRoot = find(y);
              if (xRoot == yRoot) return;
              if (rank[xRoot] < rank[yRoot]) {
                  parent[xRoot] = yRoot;
              } else if (rank[yRoot] < rank[xRoot]) {
                  parent[yRoot] = xRoot;
              } else {
                  parent[yRoot] = xRoot;
                  rank[xRoot]++;
              }
          }
      }

      static List<Edge> kruskalAlgorithm(List<Edge> edges, int V) {
          Collections.sort(edges, Comparator.comparingInt(e -> e.weight));
          List<Edge> MST = new ArrayList<>();
          Disjoint disjointSet = new Disjoint(V);
          int i = 0;
          while (MST.size() < V - 1) {
              Edge nextEdge = edges.get(i++);
              int x = disjointSet.find(nextEdge.src);
              int y = disjointSet.find(nextEdge.dest);
              if (x != y) {
                  MST.add(nextEdge);
                  disjointSet.union(x, y);
              }
          }
          return MST;
      }
  }
  ```

  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  ```javascript
  class DisjointSet {
      constructor(size) {
          this.parent = [...Array(size).keys()];
          this.rank = Array(size).fill(0);
      }

      find(x) {
          if (this.parent[x] !== x) {
              this.parent[x] = this.find(this.parent[x]);
          }
          return this.parent[x];
      }

      union(x, y) {
          const xRoot = this.find(x);
          const yRoot = this.find(y);
          if (xRoot === yRoot) return;
          if (this.rank[xRoot] < this.rank[yRoot]) {
              this.parent[xRoot] = yRoot;
          } else if (this.rank[yRoot] < this.rank[xRoot]) {
              this.parent[yRoot] = xRoot;
          } else {
              this.parent[yRoot] = xRoot;
              this.rank[xRoot]++;
          }
      }
  }

  function kruskal(edges, V) {
      edges.sort((a, b) => a.weight - b.weight);
      const MST = [];
      const ds = new DisjointSet(V);
      let i = 0;
      while (MST.length < V - 1) {
          const { src, dest } = edges[i++];
          const x = ds.find(src);
          const y = ds.find(dest);
          if (x !== y) {
              MST.push({ src, dest });
              ds.union(x, y);
          }
      }
      return MST;
  }
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(E log E)$ for sorting the edges, where $E$ is the number of edges, and $O(E log V)$ for finding the minimum spanning tree, where $V$ is the number of vertices.
- **Space Complexity:** $O(V + E)$, for storing the edges and disjoint set.

## 9. Advantages and Disadvantages

### Advantages:
- Finds the minimum spanning tree of a graph efficiently.
- Works well with both dense and sparse graphs.

### Disadvantages:
- Requires sorting of edges, which can be computationally expensive.
- Not suitable for graphs with negative edge weights.

## 10. References

- [GeeksforGeeks - Kruskal's Algorithm](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)

---
id: boruvkas-algorithm
title: Borůvka's Algorithm
sidebar_label: 15 - Borůvka's Algorithm
tags:
  - Graph Algorithms
  - Minimum Spanning Tree
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Borůvka's Algorithm, an algorithm for finding the minimum spanning tree (MST) of a graph."
---

# Borůvka's Algorithm

## 1. What is Borůvka's Algorithm?

Borůvka's Algorithm is an algorithm for finding the Minimum Spanning Tree (MST) of a connected, weighted, undirected graph. It is one of the oldest MST algorithms and works by repeatedly adding the shortest edge from each component to another component until all components are connected.

## 2. Algorithm for Borůvka's Algorithm

1. **Initialize Components**: Start with each vertex as a separate component.
2. **Find Minimum Edge**: For each component, find the minimum weight edge that connects it to a vertex in another component.
3. **Add Minimum Edge**: Add all such edges to the MST and merge the corresponding components.
4. **Repeat**: Repeat the process until there is only one component left, which represents the MST.

## 3. How Does Borůvka's Algorithm Work?

- **Component Initialization**: Initially, every vertex is its own component.
- **Minimum Edge Selection**: For each component, select the edge with the smallest weight that connects to a different component.
- **Component Merging**: Add these edges to the MST and merge the components they connect.
- **Iteration**: Repeat the process until all vertices are in a single component.

## 4. Problem Description

Given a connected, weighted, undirected graph, find the Minimum Spanning Tree (MST) using Borůvka's Algorithm.

## 5. Examples

Example graph:

```
    2       3
(0)---(1)---(2)
 |  \  |   / |
 6   8 5  7 4
 |      |/   |
(3)----(4)---(5)
    9       10
```

Minimum Spanning Tree: Edges (0-1, 0-3, 1-2, 1-4, 2-5)

## 6. Constraints

- The graph must be connected and undirected.
- The edges must have non-negative weights.

## 7. Implementation

### Borůvka's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  class Graph:
      def __init__(self, vertices):
          self.V = vertices
          self.graph = []

      def add_edge(self, u, v, w):
          self.graph.append([u, v, w])

      def find(self, parent, i):
          if parent[i] == i:
              return i
          return self.find(parent, parent[i])

      def union(self, parent, rank, x, y):
          xroot = self.find(parent, x)
          yroot = self.find(parent, y)
          if rank[xroot] < rank[yroot]:
              parent[xroot] = yroot
          elif rank[xroot] > rank[yroot]:
              parent[yroot] = xroot
          else:
              parent[yroot] = xroot
              rank[xroot] += 1

      def boruvka_mst(self):
          parent = []
          rank = []
          cheapest = []

          num_trees = self.V
          mst_weight = 0

          for node in range(self.V):
              parent.append(node)
              rank.append(0)
              cheapest = [-1] * self.V

          while num_trees > 1:
              for i in range(len(self.graph)):
                  u, v, w = self.graph[i]
                  set1 = self.find(parent, u)
                  set2 = self.find(parent, v)
                  if set1 != set2:
                      if cheapest[set1] == -1 or cheapest[set1][2] > w:
                          cheapest[set1] = [u, v, w]
                      if cheapest[set2] == -1 or cheapest[set2][2] > w:
                          cheapest[set2] = [u, v, w]

              for node in range(self.V):
                  if cheapest[node] != -1:
                      u, v, w = cheapest[node]
                      set1 = self.find(parent, u)
                      set2 = self.find(parent, v)
                      if set1 != set2:
                          mst_weight += w
                          self.union(parent, rank, set1, set2)
                          num_trees -= 1

              cheapest = [-1] * self.V

          return mst_weight

  g = Graph(6)
  g.add_edge(0, 1, 2)
  g.add_edge(0, 3, 6)
  g.add_edge(1, 2, 3)
  g.add_edge(1, 3, 8)
  g.add_edge(1, 4, 5)
  g.add_edge(2, 4, 7)
  g.add_edge(2, 5, 4)
  g.add_edge(3, 4, 9)
  g.add_edge(4, 5, 10)

  print("Weight of MST is", g.boruvka_mst())
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <algorithm>
  using namespace std;

  class Graph {
      int V, E;
      vector<vector<int>> edges;

  public:
      Graph(int V) : V(V), E(0) {}

      void addEdge(int u, int v, int w) {
          edges.push_back({w, u, v});
          E++;
      }

      int find(vector<int>& parent, int i) {
          if (parent[i] == i)
              return i;
          return find(parent, parent[i]);
      }

      void Union(vector<int>& parent, vector<int>& rank, int x, int y) {
          int xroot = find(parent, x);
          int yroot = find(parent, y);
          if (rank[xroot] < rank[yroot])
              parent[xroot] = yroot;
          else if (rank[xroot] > rank[yroot])
              parent[yroot] = xroot;
          else {
              parent[yroot] = xroot;
              rank[xroot]++;
          }
      }

      int boruvkaMST() {
          vector<int> parent(V), rank(V, 0), cheapest(V, -1);
          iota(parent.begin(), parent.end(), 0);

          int numTrees = V, MSTweight = 0;

          while (numTrees > 1) {
              for (int i = 0; i < E; ++i) {
                  int u = edges[i][1], v = edges[i][2], w = edges[i][0];
                  int set1 = find(parent, u), set2 = find(parent, v);
                  if (set1 != set2) {
                      if (cheapest[set1] == -1 || edges[cheapest[set1]][0] > w)
                          cheapest[set1] = i;
                      if (cheapest[set2] == -1 || edges[cheapest[set2]][0] > w)
                          cheapest[set2] = i;
                  }
              }

              for (int i = 0; i < V; ++i) {
                  if (cheapest[i] != -1) {
                      int u = edges[cheapest[i]][1], v = edges[cheapest[i]][2], w = edges[cheapest[i]][0];
                      int set1 = find(parent, u), set2 = find(parent, v);
                      if (set1 != set2) {
                          MSTweight += w;
                          Union(parent, rank, set1, set2);
                          numTrees--;
                      }
                  }
              }

              fill(cheapest.begin(), cheapest.end(), -1);
          }

          return MSTweight;
      }
  };

  int main() {
      Graph g(6);
      g.addEdge(0, 1, 2);
      g.addEdge(0, 3, 6);
      g.addEdge(1, 2, 3);
      g.addEdge(1, 3, 8);
      g.addEdge(1, 4, 5);
      g.addEdge(2, 4, 7);
      g.addEdge(2, 5, 4);
      g.addEdge(3, 4, 9);
      g.addEdge(4, 5, 10);

      cout << "Weight of MST is " << g.boruvkaMST() << endl;
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  class Graph {
      class Edge {
          int src, dest, weight;
          Edge() { src = dest = weight = 0; }
      }

      int V, E;
      Edge edge[];

      Graph(int v, int e) {
          V = v;
          E = e;
          edge = new Edge[E];
          for (int i = 0; i < e; ++i)
              edge[i] = new Edge();
      }

     

 int find(int parent[], int i) {
          if (parent[i] == i)
              return i;
          return find(parent, parent[i]);
      }

      void union(int parent[], int rank[], int x, int y) {
          int xroot = find(parent, x);
          int yroot = find(parent, y);
          if (rank[xroot] < rank[yroot])
              parent[xroot] = yroot;
          else if (rank[xroot] > rank[yroot])
              parent[yroot] = xroot;
          else {
              parent[yroot] = xroot;
              rank[xroot]++;
          }
      }

      void boruvkaMST() {
          int parent[] = new int[V];
          int rank[] = new int[V];
          int cheapest[] = new int[V];

          for (int v = 0; v < V; ++v) {
              parent[v] = v;
              rank[v] = 0;
              cheapest[v] = -1;
          }

          int numTrees = V;
          int MSTweight = 0;

          while (numTrees > 1) {
              for (int i = 0; i < E; ++i) {
                  int u = edge[i].src, v = edge[i].dest, w = edge[i].weight;
                  int set1 = find(parent, u), set2 = find(parent, v);
                  if (set1 != set2) {
                      if (cheapest[set1] == -1 || edge[cheapest[set1]].weight > w)
                          cheapest[set1] = i;
                      if (cheapest[set2] == -1 || edge[cheapest[set2]].weight > w)
                          cheapest[set2] = i;
                  }
              }

              for (int i = 0; i < V; ++i) {
                  if (cheapest[i] != -1) {
                      int u = edge[cheapest[i]].src, v = edge[cheapest[i]].dest, w = edge[cheapest[i]].weight;
                      int set1 = find(parent, u), set2 = find(parent, v);
                      if (set1 != set2) {
                          MSTweight += w;
                          union(parent, rank, set1, set2);
                          numTrees--;
                      }
                  }
              }

              Arrays.fill(cheapest, -1);
          }

          System.out.println("Weight of MST is " + MSTweight);
      }

      public static void main(String[] args) {
          int V = 6, E = 9;
          Graph graph = new Graph(V, E);

          graph.edge[0].src = 0;
          graph.edge[0].dest = 1;
          graph.edge[0].weight = 2;

          graph.edge[1].src = 0;
          graph.edge[1].dest = 3;
          graph.edge[1].weight = 6;

          graph.edge[2].src = 1;
          graph.edge[2].dest = 2;
          graph.edge[2].weight = 3;

          graph.edge[3].src = 1;
          graph.edge[3].dest = 3;
          graph.edge[3].weight = 8;

          graph.edge[4].src = 1;
          graph.edge[4].dest = 4;
          graph.edge[4].weight = 5;

          graph.edge[5].src = 2;
          graph.edge[5].dest = 4;
          graph.edge[5].weight = 7;

          graph.edge[6].src = 2;
          graph.edge[6].dest = 5;
          graph.edge[6].weight = 4;

          graph.edge[7].src = 3;
          graph.edge[7].dest = 4;
          graph.edge[7].weight = 9;

          graph.edge[8].src = 4;
          graph.edge[8].dest = 5;
          graph.edge[8].weight = 10;

          graph.boruvkaMST();
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  class Graph {
      constructor(vertices) {
          this.V = vertices;
          this.edges = [];
      }

      addEdge(u, v, w) {
          this.edges.push([u, v, w]);
      }

      find(parent, i) {
          if (parent[i] === i)
              return i;
          return this.find(parent, parent[i]);
      }

      union(parent, rank, x, y) {
          let xroot = this.find(parent, x);
          let yroot = this.find(parent, y);
          if (rank[xroot] < rank[yroot])
              parent[xroot] = yroot;
          else if (rank[xroot] > rank[yroot])
              parent[yroot] = xroot;
          else {
              parent[yroot] = xroot;
              rank[xroot]++;
          }
      }

      boruvkaMST() {
          let parent = [];
          let rank = [];
          let cheapest = [];

          let numTrees = this.V;
          let MSTweight = 0;

          for (let node = 0; node < this.V; ++node) {
              parent[node] = node;
              rank[node] = 0;
              cheapest[node] = -1;
          }

          while (numTrees > 1) {
              this.edges.forEach(edge => {
                  let [u, v, w] = edge;
                  let set1 = this.find(parent, u);
                  let set2 = this.find(parent, v);
                  if (set1 !== set2) {
                      if (cheapest[set1] === -1 || this.edges[cheapest[set1]][2] > w)
                          cheapest[set1] = this.edges.indexOf(edge);
                      if (cheapest[set2] === -1 || this.edges[cheapest[set2]][2] > w)
                          cheapest[set2] = this.edges.indexOf(edge);
                  }
              });

              for (let node = 0; node < this.V; ++node) {
                  if (cheapest[node] !== -1) {
                      let [u, v, w] = this.edges[cheapest[node]];
                      let set1 = this.find(parent, u);
                      let set2 = this.find(parent, v);
                      if (set1 !== set2) {
                          MSTweight += w;
                          this.union(parent, rank, set1, set2);
                          numTrees--;
                      }
                  }
              }

              cheapest.fill(-1);
          }

          return MSTweight;
      }
  }

  const g = new Graph(6);
  g.addEdge(0, 1, 2);
  g.addEdge(0, 3, 6);
  g.addEdge(1, 2, 3);
  g.addEdge(1, 3, 8);
  g.addEdge(1, 4, 5);
  g.addEdge(2, 4, 7);
  g.addEdge(2, 5, 4);
  g.addEdge(3, 4, 9);
  g.addEdge(4, 5, 10);

  console.log("Weight of MST is", g.boruvkaMST());
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(E \log V)$, where $E$ is the number of edges and $V$ is the number of vertices.
- **Space Complexity:** $O(V + E)$ due to the storage required for the parent, rank, and cheapest arrays.

## 9. Advantages and Disadvantages

### Advantages:
- Suitable for parallel computation.
- Efficient for dense graphs.

### Disadvantages:
- Not as straightforward to implement as other MST algorithms like Kruskal's or Prim's.

## 10. References

- [GeeksforGeeks - Borůvka’s Algorithm](https://www.geeksforgeeks.org/boruvkas-algorithm-greedy-algo-9/)


---
id: johnsons-algorithm
title: Johnson's Algorithm
sidebar_label: 12 - Johnson's Algorithm
tags:
  - Graph Algorithms
  - Shortest Path
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Johnson's Algorithm, an algorithm for finding shortest paths between all pairs of vertices in a weighted, directed graph."
---

# Johnson's Algorithm

## 1. What is Johnson's Algorithm?

Johnson's Algorithm is used to find the shortest paths between all pairs of vertices in a weighted, directed graph. It combines both Dijkstra's and the Bellman-Ford algorithm to efficiently handle graphs with both positive and negative edge weights, provided there are no negative weight cycles.

## 2. Algorithm for Johnson's Algorithm

1. **Add a New Vertex**: Add a new vertex to the graph and connect it to every other vertex with an edge of weight 0.
2. **Bellman-Ford Algorithm**: Use the Bellman-Ford algorithm to find the shortest path from the new vertex to every other vertex. If a negative weight cycle is detected, the algorithm terminates.
3. **Reweighting**: Reweight all edges in the original graph to ensure all edges have non-negative weights.
4. **Dijkstra's Algorithm**: Use Dijkstra's algorithm to find the shortest paths between all pairs of vertices in the reweighted graph.
5. **Adjust Weights**: Adjust the weights of the paths found by removing the effects of reweighting.

## 3. How Does Johnson's Algorithm Work?

- **Bellman-Ford Algorithm**: Used to find shortest paths from the new vertex, detecting any negative weight cycles.
- **Reweighting**: Transforms the edge weights to non-negative, allowing Dijkstra's algorithm to be used.
- **Dijkstra's Algorithm**: Finds shortest paths between all pairs of vertices in the reweighted graph.
- **Adjusting Weights**: Converts the shortest paths in the reweighted graph back to the original weights.

## 4. Problem Description

Given a weighted, directed graph, find the shortest paths between all pairs of vertices, ensuring the graph has no negative weight cycles.

## 5. Examples

Example graph:

```
      4 → 5
     ↑    ↓
    1 → 3 → 2
     ↓    ↓
      0 ← 1
```

Shortest Path Matrix:
```
  0  1  2  3  4  5
0[0, 1, 2, 1, 3, 3]
1[1, 0, 1, 2, 2, 2]
2[2, 1, 0, 1, 1, 1]
3[1, 2, 1, 0, 2, 2]
4[3, 2, 1, 2, 0, 1]
5[3, 2, 1, 2, 1, 0]
```

## 6. Constraints

- The graph must not contain any negative weight cycles.

## 7. Implementation

### Johnson's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  import heapq

  def bellman_ford(graph, source):
      distance = {v: float('inf') for v in graph}
      distance[source] = 0

      for _ in range(len(graph) - 1):
          for u in graph:
              for v, weight in graph[u]:
                  if distance[u] + weight < distance[v]:
                      distance[v] = distance[u] + weight

      for u in graph:
          for v, weight in graph[u]:
              if distance[u] + weight < distance[v]:
                  return None  # Negative weight cycle detected

      return distance

  def dijkstra(graph, source):
      pq = [(0, source)]
      distance = {v: float('inf') for v in graph}
      distance[source] = 0

      while pq:
          dist, u = heapq.heappop(pq)
          if dist > distance[u]:
              continue
          for v, weight in graph[u]:
              if distance[u] + weight < distance[v]:
                  distance[v] = distance[u] + weight
                  heapq.heappush(pq, (distance[v], v))

      return distance

  def johnson(graph):
      new_vertex = 'q'
      graph[new_vertex] = [(v, 0) for v in graph]

      h = bellman_ford(graph, new_vertex)
      if h is None:
          return None  # Negative weight cycle detected

      del graph[new_vertex]
      reweighted_graph = {}
      for u in graph:
          reweighted_graph[u] = []
          for v, weight in graph[u]:
              reweighted_graph[u].append((v, weight + h[u] - h[v]))

      distance = {}
      for u in graph:
          distance[u] = dijkstra(reweighted_graph, u)
          for v in distance[u]:
              distance[u][v] += h[v] - h[u]

      return distance

  graph = {
      0: [(1, 1), (3, 1)],
      1: [(2, 1)],
      2: [(4, 1)],
      3: [(2, 1)],
      4: [(0, 1), (5, 1)],
      5: [(2, 1)]
  }

  print(johnson(graph))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <climits>
  using namespace std;

  struct Edge {
      int v, weight;
  };

  vector<int> bellmanFord(vector<vector<Edge>>& graph, int source) {
      int V = graph.size();
      vector<int> distance(V, INT_MAX);
      distance[source] = 0;

      for (int i = 1; i < V; ++i) {
          for (int u = 0; u < V; ++u) {
              for (Edge e : graph[u]) {
                  if (distance[u] != INT_MAX && distance[u] + e.weight < distance[e.v]) {
                      distance[e.v] = distance[u] + e.weight;
                  }
              }
          }
      }

      for (int u = 0; u < V; ++u) {
          for (Edge e : graph[u]) {
              if (distance[u] != INT_MAX && distance[u] + e.weight < distance[e.v]) {
                  return {};  // Negative weight cycle detected
              }
          }
      }

      return distance;
  }

  vector<int> dijkstra(vector<vector<Edge>>& graph, int source) {
      int V = graph.size();
      vector<int> distance(V, INT_MAX);
      distance[source] = 0;
      priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
      pq.push({0, source});

      while (!pq.empty()) {
          int u = pq.top().second;
          pq.pop();

          for (Edge e : graph[u]) {
              if (distance[u] != INT_MAX && distance[u] + e.weight < distance[e.v]) {
                  distance[e.v] = distance[u] + e.weight;
                  pq.push({distance[e.v], e.v});
              }
          }
      }

      return distance;
  }

  vector<vector<int>> johnson(vector<vector<Edge>>& graph) {
      int V = graph.size();
      vector<Edge> new_edges(V, {0, 0});
      graph.push_back(new_edges);

      vector<int> h = bellmanFord(graph, V);
      graph.pop_back();

      if (h.empty()) {
          return {};  // Negative weight cycle detected
      }

      vector<vector<Edge>> reweighted_graph(V);
      for (int u = 0; u < V; ++u) {
          for (Edge e : graph[u]) {
              reweighted_graph[u].push_back({e.v, e.weight + h[u] - h[e.v]});
          }
      }

      vector<vector<int>> distance(V, vector<int>(V));
      for (int u = 0; u < V; ++u) {
          vector<int> dist = dijkstra(reweighted_graph, u);
          for (int v = 0; v < V; ++v) {
              distance[u][v] = dist[v] + h[v] - h[u];
          }
      }

      return distance;
  }

  int main() {
      vector<vector<Edge>> graph = {
          {{1, 1}, {3, 1}},  // 0
          {{2, 1}},         // 1
          {{4, 1}},         // 2
          {{2, 1}},         // 3
          {{0, 1}, {5, 1}}, // 4
          {{2, 1}}          // 5
      };

      vector<vector<int>> distance = johnson(graph);
      for (const auto& row : distance) {
          for (int dist : row) {
              cout << dist << " ";
          }
          cout << endl;
      }

      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  class Edge {
      int v, weight;

      Edge(int v, int weight) {
          this.v =

 v;
          this.weight = weight;
      }
  }

  public class JohnsonsAlgorithm {
      private static int[] bellmanFord(Map<Integer, List<Edge>> graph, int source) {
          int V = graph.size();
          int[] distance = new int[V];
          Arrays.fill(distance, Integer.MAX_VALUE);
          distance[source] = 0;

          for (int i = 1; i < V; ++i) {
              for (int u : graph.keySet()) {
                  for (Edge e : graph.get(u)) {
                      if (distance[u] != Integer.MAX_VALUE && distance[u] + e.weight < distance[e.v]) {
                          distance[e.v] = distance[u] + e.weight;
                      }
                  }
              }
          }

          for (int u : graph.keySet()) {
              for (Edge e : graph.get(u)) {
                  if (distance[u] != Integer.MAX_VALUE && distance[u] + e.weight < distance[e.v]) {
                      return null;  // Negative weight cycle detected
                  }
              }
          }

          return distance;
      }

      private static int[] dijkstra(Map<Integer, List<Edge>> graph, int source) {
          int V = graph.size();
          int[] distance = new int[V];
          Arrays.fill(distance, Integer.MAX_VALUE);
          distance[source] = 0;

          PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
          pq.add(new int[]{source, 0});

          while (!pq.isEmpty()) {
              int[] current = pq.poll();
              int u = current[0];

              for (Edge e : graph.get(u)) {
                  if (distance[u] != Integer.MAX_VALUE && distance[u] + e.weight < distance[e.v]) {
                      distance[e.v] = distance[u] + e.weight;
                      pq.add(new int[]{e.v, distance[e.v]});
                  }
              }
          }

          return distance;
      }

      public static int[][] johnson(Map<Integer, List<Edge>> graph) {
          int V = graph.size();
          graph.put(V, new ArrayList<>());
          for (int u = 0; u < V; ++u) {
              graph.get(V).add(new Edge(u, 0));
          }

          int[] h = bellmanFord(graph, V);
          graph.remove(V);

          if (h == null) {
              return null;  // Negative weight cycle detected
          }

          Map<Integer, List<Edge>> reweightedGraph = new HashMap<>();
          for (int u : graph.keySet()) {
              reweightedGraph.put(u, new ArrayList<>());
              for (Edge e : graph.get(u)) {
                  reweightedGraph.get(u).add(new Edge(e.v, e.weight + h[u] - h[e.v]));
              }
          }

          int[][] distance = new int[V][V];
          for (int u = 0; u < V; ++u) {
              int[] dist = dijkstra(reweightedGraph, u);
              for (int v = 0; v < V; ++v) {
                  distance[u][v] = dist[v] + h[v] - h[u];
              }
          }

          return distance;
      }

      public static void main(String[] args) {
          Map<Integer, List<Edge>> graph = new HashMap<>();
          graph.put(0, Arrays.asList(new Edge(1, 1), new Edge(3, 1)));
          graph.put(1, Arrays.asList(new Edge(2, 1)));
          graph.put(2, Arrays.asList(new Edge(4, 1)));
          graph.put(3, Arrays.asList(new Edge(2, 1)));
          graph.put(4, Arrays.asList(new Edge(0, 1), new Edge(5, 1)));
          graph.put(5, Arrays.asList(new Edge(2, 1)));

          int[][] distance = johnson(graph);
          for (int[] row : distance) {
              System.out.println(Arrays.toString(row));
          }
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  function bellmanFord(graph, source) {
      const distance = Array(graph.length).fill(Infinity);
      distance[source] = 0;

      for (let i = 1; i < graph.length; ++i) {
          for (let u = 0; u < graph.length; ++u) {
              for (const [v, weight] of graph[u]) {
                  if (distance[u] + weight < distance[v]) {
                      distance[v] = distance[u] + weight;
                  }
              }
          }
      }

      for (let u = 0; u < graph.length; ++u) {
          for (const [v, weight] of graph[u]) {
              if (distance[u] + weight < distance[v]) {
                  return null; // Negative weight cycle detected
              }
          }
      }

      return distance;
  }

  function dijkstra(graph, source) {
      const distance = Array(graph.length).fill(Infinity);
      distance[source] = 0;
      const pq = new MinPriorityQueue();

      pq.enqueue([source, 0]);

      while (!pq.isEmpty()) {
          const [u, dist] = pq.dequeue();
          if (dist > distance[u]) continue;

          for (const [v, weight] of graph[u]) {
              if (distance[u] + weight < distance[v]) {
                  distance[v] = distance[u] + weight;
                  pq.enqueue([v, distance[v]]);
              }
          }
      }

      return distance;
  }

  function johnson(graph) {
      const newVertex = graph.length;
      graph.push(graph.map((_, i) => [i, 0]));

      const h = bellmanFord(graph, newVertex);
      graph.pop();

      if (!h) return null; // Negative weight cycle detected

      const reweightedGraph = graph.map((edges, u) =>
          edges.map(([v, weight]) => [v, weight + h[u] - h[v]])
      );

      const distance = Array(graph.length)
          .fill(null)
          .map((_, u) => dijkstra(reweightedGraph, u).map((dist, v) => dist + h[v] - h[u]));

      return distance;
  }

  const graph = [
      [[1, 1], [3, 1]],
      [[2, 1]],
      [[4, 1]],
      [[2, 1]],
      [[0, 1], [5, 1]],
      [[2, 1]],
  ];

  console.log(johnson(graph));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V^2 \log V + VE)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V^2)$ due to the distance matrix and reweighted graph.

## 9. Advantages and Disadvantages

### Advantages:
- Handles graphs with negative weights.
- Efficient for sparse graphs.

### Disadvantages:
- Cannot handle graphs with negative weight cycles.
- More complex to implement compared to other shortest path algorithms.

## 10. References

- [GeeksforGeeks - Johnson's Algorithm](https://www.geeksforgeeks.org/johnsons-algorithm/)


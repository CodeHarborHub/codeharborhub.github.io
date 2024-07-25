---
id: breadth-first-search
title: Breadth-First Search
sidebar_label: 09 - Breadth-First Search
tags:
  - Graph Algorithms
  - Traversal
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Breadth-First Search for traversing or searching tree or graph data structures."
---

# Breadth-First Search

## 1. What is Breadth-First Search?

Breadth-First Search (BFS) is a fundamental graph traversal algorithm used to explore nodes and edges of a graph level by level. Starting from a source node, BFS explores all the neighboring nodes at the present depth before moving on to nodes at the next depth level.

## 2. Algorithm for Breadth-First Search

1. Start at the root node (or any arbitrary node).
2. Mark the starting node as visited and enqueue it.
3. While the queue is not empty:
   - Dequeue a node from the front of the queue.
   - If the node has any unvisited adjacent nodes:
     - Mark the adjacent node as visited.
     - Enqueue the adjacent node.
4. Repeat the process until the queue is empty.

## 3. How Does Breadth-First Search Work?

- BFS explores nodes level by level, ensuring that all nodes at the current level are explored before moving on to the next level.

## 4. Problem Description

Given a graph, BFS aims to traverse the graph, visiting all the vertices and edges exactly once in a breadthward motion.

## 5. Examples

Example graph:

```
      0 - 1 - 2
      |   |   |
      3 - 4 - 5
```

## 6. Constraints

- The graph can be directed or undirected.
- The graph may contain cycles.

## 7. Implementation

### Breadth-First Search

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  from collections import deque

  def bfs(graph, start):
      visited = set()
      queue = deque([start])
      visited.add(start)

      while queue:
          vertex = queue.popleft()
          print(vertex, end=" ")

          for neighbor in graph[vertex]:
              if neighbor not in visited:
                  visited.add(neighbor)
                  queue.append(neighbor)

  graph = {
      0: [1, 3],
      1: [0, 2, 4],
      2: [1, 5],
      3: [0, 4],
      4: [1, 3, 5],
      5: [2, 4]
  }

  bfs(graph, 0)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <unordered_set>
  using namespace std;

  void bfs(vector<vector<int>>& graph, int start) {
      unordered_set<int> visited;
      queue<int> q;
      q.push(start);
      visited.insert(start);

      while (!q.empty()) {
          int vertex = q.front();
          q.pop();
          cout << vertex << " ";

          for (auto neighbor : graph[vertex]) {
              if (visited.find(neighbor) == visited.end()) {
                  visited.insert(neighbor);
                  q.push(neighbor);
              }
          }
      }
  }

  int main() {
      vector<vector<int>> graph = {
          {1, 3},
          {0, 2, 4},
          {1, 5},
          {0, 4},
          {1, 3, 5},
          {2, 4}
      };

      bfs(graph, 0);
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  public class BFS {
      public static void bfs(Map<Integer, List<Integer>> graph, int start) {
          Set<Integer> visited = new HashSet<>();
          Queue<Integer> queue = new LinkedList<>();
          queue.add(start);
          visited.add(start);

          while (!queue.isEmpty()) {
              int vertex = queue.poll();
              System.out.print(vertex + " ");

              for (int neighbor : graph.get(vertex)) {
                  if (!visited.contains(neighbor)) {
                      visited.add(neighbor);
                      queue.add(neighbor);
                  }
              }
          }
      }

      public static void main(String[] args) {
          Map<Integer, List<Integer>> graph = new HashMap<>();
          graph.put(0, Arrays.asList(1, 3));
          graph.put(1, Arrays.asList(0, 2, 4));
          graph.put(2, Arrays.asList(1, 5));
          graph.put(3, Arrays.asList(0, 4));
          graph.put(4, Arrays.asList(1, 3, 5));
          graph.put(5, Arrays.asList(2, 4));

          bfs(graph, 0);
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  function bfs(graph, start) {
      const visited = new Set();
      const queue = [start];
      visited.add(start);

      while (queue.length) {
          const vertex = queue.shift();
          console.log(vertex);

          for (const neighbor of graph[vertex]) {
              if (!visited.has(neighbor)) {
                  visited.add(neighbor);
                  queue.push(neighbor);
              }
          }
      }
  }

  const graph = {
      0: [1, 3],
      1: [0, 2, 4],
      2: [1, 5],
      3: [0, 4],
      4: [1, 3, 5],
      5: [2, 4]
  };

  bfs(graph, 0);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V)$ due to the queue and visited set.

## 9. Advantages and Disadvantages

### Advantages:
- Guarantees finding the shortest path in unweighted graphs.
- Simple and easy to implement.

### Disadvantages:
- Requires more memory compared to DFS due to the queue.
- May be slower than DFS for deep and densely connected graphs.

## 10. References

- [GeeksforGeeks - Breadth First Search or BFS for a Graph](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)

---
id: depth-first-search
title: Depth-First Search
sidebar_label: 08 - Depth-First Search
tags:
  - Graph Algorithms
  - Traversal
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Depth-First Search for traversing or searching tree or graph data structures."
---

# Depth-First Search

## 1. What is Depth-First Search?

Depth-First Search (DFS) is a fundamental graph traversal algorithm used to explore nodes and edges of a graph. Starting from a source node, DFS explores as far as possible along each branch before backtracking.

## 2. Algorithm for Depth-First Search

1. Start at the root node (or any arbitrary node).
2. Mark the starting node as visited and push it to a stack.
3. While the stack is not empty:
   - Pop a node from the stack.
   - If the node has any unvisited adjacent nodes:
     - Mark the adjacent node as visited.
     - Push the adjacent node onto the stack.
4. Repeat the process until the stack is empty.

## 3. How Does Depth-First Search Work?

- DFS explores nodes by going as deep as possible down each branch before backtracking to explore other branches.

## 4. Problem Description

Given a graph, DFS aims to traverse the graph, visiting all the vertices and edges exactly once in a depthward motion.

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

### Depth-First Search

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  def dfs(graph, start):
      visited = set()
      stack = [start]

      while stack:
          vertex = stack.pop()
          if vertex not in visited:
              visited.add(vertex)
              stack.extend(set(graph[vertex]) - visited)

      return visited

  graph = {
      0: [1, 3],
      1: [0, 2, 4],
      2: [1, 5],
      3: [0, 4],
      4: [1, 3, 5],
      5: [2, 4]
  }

  print(dfs(graph, 0))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  
    #include <iostream>
    #include <vector>
    #include <stack>
    #include <unordered_set>
    using namespace std;
  
    void dfs(vector<vector<int>>& graph, int start) {
        unordered_set<int> visited;
        stack<int> s;
        s.push(start);

      while (!s.empty()) {
          int vertex = s.top();
          s.pop();
          if (visited.find(vertex) == visited.end()) {
              visited.insert(vertex);
              cout << vertex << " ";
              for (auto neighbor : graph[vertex]) {
                  if (visited.find(neighbor) == visited.end()) {
                      s.push(neighbor);
                  }
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

      dfs(graph, 0);
      return 0;
  }
```
  </TabItem>

  <TabItem value="Java" label="Java">

```java
    
    import java.util.*;
    public class DFS {
        public static void dfs(Map<Integer, List<Integer>> graph, int start) {
            Set<Integer> visited = new HashSet<>();
            Stack<Integer> stack = new Stack<>();
            stack.push(start);

          while (!stack.isEmpty()) {
              int vertex = stack.pop();
              if (!visited.contains(vertex)) {
                  visited.add(vertex);
                  System.out.print(vertex + " ");
                  for (int neighbor : graph.get(vertex)) {
                      if (!visited.contains(neighbor)) {
                          stack.push(neighbor);
                      }
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

          dfs(graph, 0);
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
```javascript
  function dfs(graph, start) {
      const visited = new Set();
      const stack = [start];

      while (stack.length) {
          const vertex = stack.pop();
          if (!visited.has(vertex)) {
              visited.add(vertex);
              console.log(vertex);
              for (const neighbor of graph[vertex]) {
                  if (!visited.has(neighbor)) {
                      stack.push(neighbor);
                  }
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

  dfs(graph, 0);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V)$ due to the stack and visited set.

## 9. Advantages and Disadvantages

### Advantages:
- Simple and easy to implement.
- Can be used to detect cycles in a graph.
- Useful for solving problems like topological sorting, pathfinding, and connectivity.

### Disadvantages:
- May get stuck in an infinite loop if the graph contains cycles and the implementation does not account for visited nodes.
- Not optimal for finding the shortest path in unweighted graphs.

## 10. References

- [GeeksforGeeks - Depth First Search or DFS for a Graph](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

---
id: Breadth-First-Search-BFS
title: Breadth First Search (BFS) (Geeks for Geeks)
sidebar_label: Breadth First Search (BFS)
tags:
  - Beginner
  - Graph Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Breadth First Search (BFS) problem on Geeks for Geeks."
---

## 1. What is Breadth First Search (BFS)?

Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree's root (or an arbitrary node in the graph) and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.

## 2. Algorithm for Breadth First Search (BFS)

1. Initialize a queue and enqueue the starting node.
2. Mark the starting node as visited.
3. While the queue is not empty:
   - Dequeue a node from the queue.
   - Process the dequeued node (e.g., print its value).
   - Enqueue all unvisited adjacent nodes of the dequeued node.
   - Mark the newly enqueued nodes as visited.

## 3. How does Breadth First Search (BFS) work?

- BFS explores all nodes at the present depth level before moving on to nodes at the next depth level.
- It uses a queue data structure to keep track of nodes to be explored.
- Nodes are marked as visited to prevent reprocessing.

## 4. Problem Description

Given a graph represented as an adjacency list, implement the Breadth First Search (BFS) algorithm to traverse the graph starting from a given source node.

## 5. Examples

**Example 1:**
```
Input:
graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}
start_node = 2
Output: 2 0 3 1
```

**Example 2:**
```
Input:
graph = {
  0: [1, 3],
  1: [0, 2],
  2: [1, 3],
  3: [0, 2]
}
start_node = 0
Output: 0 1 3 2
```

## 6. Constraints

- $The graph can have any number of nodes.$
- $The graph can be directed or undirected.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  from collections import deque

  def bfs(graph, start_node):
      visited = set()
      queue = deque([start_node])
      result = []

      while queue:
          node = queue.popleft()
          if node not in visited:
              visited.add(node)
              result.append(node)
              queue.extend(neighbor for neighbor in graph[node] if neighbor not in visited)
      return result

  # Example usage:
  graph = {
      0: [1, 2],
      1: [2],
      2: [0, 3],
      3: [3]
  }
  start_node = 2
  print(bfs(graph, start_node))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <unordered_set>

  std::vector<int> bfs(const std::vector<std::vector<int>>& graph, int start_node) {
      std::vector<int> result;
      std::queue<int> queue;
      std::unordered_set<int> visited;

      queue.push(start_node);
      visited.insert(start_node);

      while (!queue.empty()) {
          int node = queue.front();
          queue.pop();
          result.push_back(node);

          for (int neighbor : graph[node]) {
              if (visited.find(neighbor) == visited.end()) {
                  queue.push(neighbor);
                  visited.insert(neighbor);
              }
          }
      }
      return result;
  }

  int main() {
      std::vector<std::vector<int>> graph = {
          {1, 2},
          {2},
          {0, 3},
          {3}
      };
      int start_node = 2;
      std::vector<int> traversal = bfs(graph, start_node);

      for (int node : traversal) {
          std::cout << node << " ";
      }
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  import java.util.*;

  public class BFS {
      public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int startNode) {
          List<Integer> result = new ArrayList<>();
          Queue<Integer> queue = new LinkedList<>();
          Set<Integer> visited = new HashSet<>();

          queue.add(startNode);
          visited.add(startNode);

          while (!queue.isEmpty()) {
              int node = queue.poll();
              result.add(node);

              for (int neighbor : graph.get(node)) {
                  if (!visited.contains(neighbor)) {
                      queue.add(neighbor);
                      visited.add(neighbor);
                  }
              }
          }
          return result;
      }

      public static void main(String[] args) {
          Map<Integer, List<Integer>> graph = new HashMap<>();
          graph.put(0, Arrays.asList(1, 2));
          graph.put(1, Arrays.asList(2));
          graph.put(2, Arrays.asList(0, 3));
          graph.put(3, Arrays.asList(3));

          int startNode = 2;
          List<Integer> traversal = bfs(graph, startNode);
          System.out.println(traversal);
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function bfs(graph, startNode) {
      const visited = new Set();
      const queue = [startNode];
      const result = [];

      while (queue.length > 0) {
          const node = queue.shift();
          if (!visited.has(node)) {
              visited.add(node);
              result.push(node);
              queue.push(...graph[node].filter(neighbor => !visited.has(neighbor)));
          }
      }
      return result;
  }

  const graph = {
      0: [1, 2],
      1: [2],
      2: [0, 3],
      3: [3]
  };
  const startNode = 2;
  console.log(bfs(graph, startNode));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**: $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges. Each vertex and edge is processed once.
- **Space Complexity**: $O(V)$, where $V$ is the number of vertices. This is for the queue and the visited set.

## 9. Advantages and Disadvantages

**Advantages:**
- Finds the shortest path in unweighted graphs.
- Simple and easy to understand and implement.

**Disadvantages:**
- Can be memory intensive as it stores all vertices in the queue.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/breadth-first-search/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)


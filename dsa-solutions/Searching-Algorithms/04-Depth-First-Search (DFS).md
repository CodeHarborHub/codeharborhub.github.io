---
id: Depth-First-Search-DFS
title: Depth First Search (DFS) (Geeks for Geeks)
sidebar_label: Depth First Search (DFS)
tags:
  - Beginner
  - Graph Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Depth First Search (DFS) problem on Geeks for Geeks."
---

## 1. What is Depth First Search (DFS)?

Depth First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node in the graph) and explores as far as possible along each branch before backtracking.

## 2. Algorithm for Depth First Search (DFS)

1. Start with the root node (or an arbitrary node in the graph).
2. Mark the node as visited.
3. For each adjacent node, recursively apply the DFS algorithm if the node has not been visited.

## 3. How does Depth First Search (DFS) work?

- DFS explores as far as possible along each branch before backtracking.
- It uses a stack data structure, either implicitly through recursion or explicitly through an iterative approach.
- Nodes are marked as visited to prevent reprocessing.

## 4. Problem Description

Given a graph represented as an adjacency list, implement the Depth First Search (DFS) algorithm to traverse the graph starting from a given source node.

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
Output: 2 0 1 3
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
Output: 0 1 2 3
```

## 6. Constraints

- $The graph can have any number of nodes.$
- $The graph can be directed or undirected.$

## 7. Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def dfs(graph, start_node, visited=None):
      if visited is None:
          visited = set()
      visited.add(start_node)
      result = [start_node]
      for neighbor in graph[start_node]:
          if neighbor not in visited:
              result.extend(dfs(graph, neighbor, visited))
      return result

  # Example usage:
  graph = {
      0: [1, 2],
      1: [2],
      2: [0, 3],
      3: [3]
  }
  start_node = 2
  print(dfs(graph, start_node))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>
  #include <unordered_set>

  void dfsUtil(int node, const std::vector<std::vector<int>>& graph, std::unordered_set<int>& visited, std::vector<int>& result) {
      visited.insert(node);
      result.push_back(node);
      for (int neighbor : graph[node]) {
          if (visited.find(neighbor) == visited.end()) {
              dfsUtil(neighbor, graph, visited, result);
          }
      }
  }

  std::vector<int> dfs(const std::vector<std::vector<int>>& graph, int start_node) {
      std::unordered_set<int> visited;
      std::vector<int> result;
      dfsUtil(start_node, graph, visited, result);
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
      std::vector<int> traversal = dfs(graph, start_node);

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

  public class DFS {
      public static List<Integer> dfs(Map<Integer, List<Integer>> graph, int startNode, Set<Integer> visited) {
          List<Integer> result = new ArrayList<>();
          visited.add(startNode);
          result.add(startNode);

          for (int neighbor : graph.get(startNode)) {
              if (!visited.contains(neighbor)) {
                  result.addAll(dfs(graph, neighbor, visited));
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
          Set<Integer> visited = new HashSet<>();
          List<Integer> traversal = dfs(graph, startNode, visited);
          System.out.println(traversal);
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  function dfs(graph, startNode, visited = new Set()) {
      visited.add(startNode);
      const result = [startNode];
      for (const neighbor of graph[startNode]) {
          if (!visited.has(neighbor)) {
              result.push(...dfs(graph, neighbor, visited));
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
  console.log(dfs(graph, startNode));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**: $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges. Each vertex and edge is processed once.
- **Space Complexity**: $O(V)$, where $V$ is the number of vertices. This is for the visited set and the recursive stack space.

## 9. Advantages and Disadvantages

**Advantages:**
- Can be easily implemented with recursion.
- Useful for problems that involve exploring all paths, like puzzles and mazes.

**Disadvantages:**
- Can be memory intensive due to the stack space in recursion.
- Not optimal for finding the shortest path in unweighted graphs.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/depth-first-search/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

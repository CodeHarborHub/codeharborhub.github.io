---
id: topological-sorting
title: Topological Sorting
sidebar_label: 11 - Topological Sorting
tags:
  - Graph Algorithms
  - Sorting
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains Topological Sorting, an algorithm for ordering vertices in a directed acyclic graph (DAG)."
---

# Topological Sorting

## 1. What is Topological Sorting?

Topological Sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u → v, vertex u comes before vertex v. It is used in scenarios where there is a dependency between tasks.

## 2. Algorithm for Topological Sorting

1. Initialize an empty stack to store the result (topologically sorted order).
2. Mark all vertices as not visited.
3. For each vertex, if it is not visited, call the recursive helper function:
   - Mark the current vertex as visited.
   - For each adjacent vertex, if it is not visited, recursively call the helper function.
   - Push the current vertex to the stack.
4. Reverse the stack to get the topological order.

## 3. How Does Topological Sorting Work?

- Topological sorting sorts vertices such that for any directed edge u → v, vertex u appears before vertex v in the ordering.
- It uses depth-first search (DFS) to explore the graph and a stack to store the vertices in the topologically sorted order.

## 4. Problem Description

Given a directed acyclic graph (DAG), find a topological ordering of its vertices.

## 5. Examples

Example graph:

```
      5 → 0 ← 4
      ↓      ↓
      2 → 3 → 1
```

Topological Sort: 4, 5, 0, 2, 3, 1 or 5, 4, 2, 3, 0, 1 (one of the valid topological orders)

## 6. Constraints

- The graph must be directed and acyclic.

## 7. Implementation

### Topological Sorting

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  def topological_sort_util(v, visited, stack, graph):
      visited[v] = True
      for neighbor in graph[v]:
          if not visited[neighbor]:
              topological_sort_util(neighbor, visited, stack, graph)
      stack.append(v)

  def topological_sort(graph):
      visited = {v: False for v in graph}
      stack = []

      for v in graph:
          if not visited[v]:
              topological_sort_util(v, visited, stack, graph)

      stack.reverse()
      return stack

  graph = {
      5: [0, 2],
      4: [0, 1],
      2: [3],
      3: [1],
      1: [],
      0: []
  }

  print(topological_sort(graph))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <stack>
  using namespace std;

  void topologicalSortUtil(int v, vector<bool>& visited, stack<int>& Stack, vector<vector<int>>& graph) {
      visited[v] = true;
      for (int i : graph[v])
          if (!visited[i])
              topologicalSortUtil(i, visited, Stack, graph);
      Stack.push(v);
  }

  vector<int> topologicalSort(vector<vector<int>>& graph) {
      stack<int> Stack;
      vector<bool> visited(graph.size(), false);

      for (int i = 0; i < graph.size(); i++)
          if (visited[i] == false)
              topologicalSortUtil(i, visited, Stack, graph);

      vector<int> result;
      while (!Stack.empty()) {
          result.push_back(Stack.top());
          Stack.pop();
      }
      return result;
  }

  int main() {
      vector<vector<int>> graph = {
          {},        // 0
          {0},       // 1
          {1},       // 2
          {0, 1},    // 3
          {1},       // 4
          {0, 2}     // 5
      };

      vector<int> result = topologicalSort(graph);
      for (int v : result)
          cout << v << " ";
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  public class TopologicalSort {
      private static void topologicalSortUtil(int v, boolean[] visited, Stack<Integer> stack, Map<Integer, List<Integer>> graph) {
          visited[v] = true;
          for (int neighbor : graph.get(v))
              if (!visited[neighbor])
                  topologicalSortUtil(neighbor, visited, stack, graph);
          stack.push(v);
      }

      public static List<Integer> topologicalSort(Map<Integer, List<Integer>> graph) {
          Stack<Integer> stack = new Stack<>();
          boolean[] visited = new boolean[graph.size()];

          for (int v : graph.keySet())
              if (!visited[v])
                  topologicalSortUtil(v, visited, stack, graph);

          List<Integer> result = new ArrayList<>();
          while (!stack.isEmpty())
              result.add(stack.pop());
          return result;
      }

      public static void main(String[] args) {
          Map<Integer, List<Integer>> graph = new HashMap<>();
          graph.put(5, Arrays.asList(0, 2));
          graph.put(4, Arrays.asList(0, 1));
          graph.put(2, Arrays.asList(3));
          graph.put(3, Arrays.asList(1));
          graph.put(1, new ArrayList<>());
          graph.put(0, new ArrayList<>());

          List<Integer> result = topologicalSort(graph);
          result.forEach(v -> System.out.print(v + " "));
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  function topologicalSortUtil(v, visited, stack, graph) {
      visited[v] = true;
      for (const neighbor of graph[v]) {
          if (!visited[neighbor]) {
              topologicalSortUtil(neighbor, visited, stack, graph);
          }
      }
      stack.push(v);
  }

  function topologicalSort(graph) {
      const visited = new Array(Object.keys(graph).length).fill(false);
      const stack = [];

      for (const v in graph) {
          if (!visited[v]) {
              topologicalSortUtil(v, visited, stack, graph);
          }
      }

      stack.reverse();
      return stack;
  }

  const graph = {
      0: [],
      1: [0],
      2: [1],
      3: [0, 1],
      4: [1],
      5: [0, 2]
  };

  console.log(topologicalSort(graph));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity:** $O(V)$ due to the stack and visited array.

## 9. Advantages and Disadvantages

### Advantages:
- Efficient and straightforward for DAGs.
- Useful for scheduling tasks, resolving symbol dependencies in linkers, etc.

### Disadvantages:
- Only applicable to directed acyclic graphs (DAGs).
- Does not handle graphs with cycles.

## 10. References

- [GeeksforGeeks - Topological Sorting](https://www.geeksforgeeks.org/topological-sorting/)

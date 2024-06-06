---
id: DFS-traversal-of-graph
title: DFS Traversal of Graph (Geeks for Geeks)
sidebar_label: DFS Traversal of Graph
tags:
  - Intermediate
  - Graph
  - Depth-First Search
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the DFS Traversal of Graph problem on Geeks for Geeks."
---

## Problem Description

Given a graph, perform Depth-First Search (DFS) traversal starting from a given source vertex.

## Examples

**Example:**

Consider the following graph:

```
      1
     / \
    2   3
   / \
  4   5
```

**Output:** 1 2 4 5 3

## Your Task

Your task is to complete the function `dfs()`, which takes the graph, the number of vertices, and the source vertex as its arguments and prints the DFS traversal of the graph starting from the source vertex.

Expected Time Complexity: $O(V + E)$, where V is the number of vertices and E is the number of edges in the graph.
Expected Auxiliary Space: $O(V)$.

## Constraints

- $1 <= number of vertices <= 10^3$
- $0 <= value of vertices <= 10^3$

## Problem Explanation

Here's the step-by-step breakdown of the DFS traversal process:

1. **Initialize visited array**: Create a visited array to keep track of visited vertices.
2. **Perform DFS**: Start DFS traversal from the source vertex.
3. **Mark visited**: Mark the current vertex as visited and print it.
4. **Visit neighbors**: Recursively visit all the adjacent vertices of the current vertex that are not visited yet.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def dfs(graph, v, visited, source):
      visited[source] = True
      print(source, end=" ")

      for u in graph[source]:
          if not visited[u]:
              dfs(graph, v, visited, u)
  
  def dfsTraversal(graph, V, source):
      visited = [False] * V
      dfs(graph, V, visited, source)
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>
  #include <cstring>
  using namespace std;

  void dfs(vector<int> graph[], int v, bool visited[], int source) {
      visited[source] = true;
      cout << source << " ";

      for (int u : graph[source]) {
          if (!visited[u]) {
              dfs(graph, v, visited, u);
          }
      }
  }

  void dfsTraversal(vector<int> graph[], int V, int source) {
      bool visited[V];
      memset(visited, false, sizeof(visited));
      dfs(graph, V, visited, source);
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Initialize visited array**: Create an array to mark visited vertices initially as False.
2. **Perform DFS**: Start DFS traversal from the source vertex.
3. **Mark visited and print**: Mark the current vertex as visited and print it.
4. **Visit neighbors**: Recursively visit all the adjacent vertices of the current vertex that are not visited yet.

## Time Complexity

$O(V + E)$, where V is the number of vertices and E is the number of edges in the graph. Each vertex and edge are visited only once.

## Space Complexity

$O(V)$, where V is the number of vertices. The space is used to store the visited array.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
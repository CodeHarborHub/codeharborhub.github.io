---
id: BFS-traversal-of-graph
title: BFS Traversal of Graph (Geeks for Geeks)
sidebar_label: BFS Traversal of Graph
tags:
  - Intermediate
  - Graph
  - Breadth-First Search
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the BFS Traversal of Graph problem on Geeks for Geeks."
---

## Problem Description

Given a graph, perform Breadth-First Search (BFS) traversal starting from a given source vertex.

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

**Output:** 1 2 3 4 5

## Your Task

Your task is to complete the function `bfs()`, which takes the graph, the number of vertices, and the source vertex as its arguments and prints the BFS traversal of the graph starting from the source vertex.

Expected Time Complexity: $O(V + E)$, where V is the number of vertices and E is the number of edges in the graph.
Expected Auxiliary Space: $O(V)$.

## Constraints

- $1 <= number of vertices <= 10^3$
- $0 <= value of vertices <= 10^3$

## Problem Explanation

Here's the step-by-step breakdown of the BFS traversal process:

1. **Initialize visited array**: Create a visited array to keep track of visited vertices.
2. **Initialize queue**: Create a queue to store vertices to be visited next.
3. **Perform BFS**: Start BFS traversal from the source vertex.
4. **Enqueue source**: Enqueue the source vertex into the queue and mark it as visited.
5. **Process vertices**: While the queue is not empty, dequeue a vertex, print it, and enqueue its unvisited adjacent vertices.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  from collections import deque

  def bfs(graph, v, source):
      visited = [False] * v
      queue = deque([source])
      visited[source] = True

      while queue:
          u = queue.popleft()
          print(u, end=" ")

          for neighbor in graph[u]:
              if not visited[neighbor]:
                  visited[neighbor] = True
                  queue.append(neighbor)
  
  def bfsTraversal(graph, V, source):
      bfs(graph, V, source)
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <cstring>
  using namespace std;

  void bfs(vector<int> graph[], int v, int source) {
      bool visited[v];
      memset(visited, false, sizeof(visited));
      queue<int> q;

      q.push(source);
      visited[source] = true;

      while (!q.empty()) {
          int u = q.front();
          q.pop();
          cout << u << " ";

          for (int neighbor : graph[u]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  q.push(neighbor);
              }
          }
      }
  }

  void bfsTraversal(vector<int> graph[], int V, int source) {
      bfs(graph, V, source);
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Initialize visited array and queue**: Create an array to mark visited vertices initially as False and a queue to store vertices to be visited.
2. **Perform BFS**: Start BFS traversal from the source vertex.
3. **Enqueue source**: Enqueue the source vertex into the queue and mark it as visited.
4. **Process vertices**: While the queue is not empty, dequeue a vertex, print it, and enqueue its unvisited adjacent vertices.

## Time Complexity

$O(V + E)$, where V is the number of vertices and E is the number of edges in the graph. Each vertex and edge are visited only once.

## Space Complexity

$O(V)$, where V is the number of vertices. The space is used to store the visited array and the queue.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
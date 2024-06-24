---
id: Minimum-cost-walk-in-weighted-graph
title: Minimum-cost-walk-in-weighted-graph
sidebar_label: 3108-Minimum-cost-walk-in-weighted-graph
tags:
  - Java
  - Greedy
  - String
description: "This document provides a solution of Minimum-cost-walk-in-weighted-graph"
---

## Problem Statement:

There is an undirected weighted graph with n vertices labeled from 0 to n - 1.

You are given the integer n and an array edges, where edges[i] = [ui, vi, wi] indicates that there is an edge between vertices ui and vi with a weight of wi.

A walk on a graph is a sequence of vertices and edges. The walk starts and ends with a vertex, and each edge connects the vertex that comes before it and the vertex that comes after it. It's important to note that a walk may visit the same edge or vertex more than once.

The cost of a walk starting at node u and ending at node v is defined as the bitwise AND of the weights of the edges traversed during the walk. In other words, if the sequence of edge weights encountered during the walk is w0, w1, w2, ..., wk, then the cost is calculated as w0 & w1 & w2 & ... & wk, where & denotes the bitwise AND operator.

You are also given a 2D array query, where query[i] = [si, ti]. For each query, you need to find the minimum cost of the walk starting at vertex si and ending at vertex ti. If there exists no such walk, the answer is -1.

Return the array answer, where answer[i] denotes the minimum cost of a walk for query i.

**Example 1:**

Input: n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], query = [[0,3],[3,4]]
Output: [1,-1]

Explanation:

        ![alt text](image-3.png)

To achieve the cost of 1 in the first query, we need to move on the following edges: 0->1 (weight 7), 1->2 (weight 1), 2->1 (weight 1), 1->3 (weight 7).

In the second query, there is no walk between nodes 3 and 4, so the answer is -1.

**Example 2:**

Input: n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], query = [[1,2]]
Output: [0]

Explanation:
![alt text](image-4.png)

To achieve the cost of 0 in the first query, we need to move on the following edges: 1->2 (weight 1), 2->1 (weight 6), 1->2 (weight 1).

**Constraints:**

    `2 <= n <= 105`
    `0 <= edges.length <= 105`
    `edges[i].length == 3`
    `0 <= ui, vi <= n - 1`
    `ui != vi`
    `0 <= wi <= 105`
    `1 <= query.length <= 105`
    `query[i].length == 2`
    `0 <= si, ti <= n - 1`
    `si != ti`

## Solutions:

### Intuition

The problem requires finding the minimum cost of a walk in an undirected weighted graph where the cost is defined as the bitwise AND of the weights of the edges traversed during the walk. We need to handle multiple queries for different starting and ending vertices.

### Approach

    1. Construct the adjacency list representation of the graph and initialize the cost array c.

    2. For each edge, update the cost array c by performing bitwise AND with the edge weight.

    3. Use a breadth-first search (BFS) traversal to find connected components in the graph and update the cost array c for each component.

    4. For each query, check if the starting and ending vertices belong to the same connected component. If they do, return the minimum cost of the connected component; otherwise, return -1.

## code:

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <vector>
      #include <queue>
      #include <limits.h>
      using namespace std;

      class Solution {
      public:
          vector<int> minimumCost(int N, vector<vector<int>>& edges, vector<vector<int>>& queries) {
              vector<vector<int>> adj(N); // Adjacency list
              vector<int> c(N, INT_MAX); // Cost array, initialized with maximum possible value

              // Construct adjacency list and update cost array
              for (vector<int> edge : edges) {
                  int u = edge[0], v = edge[1], k = edge[2];
                  adj[u].push_back(v);
                  adj[v].push_back(u);
                  c[u] = c[u] & k; // Update cost with bitwise AND
                  c[v] = c[v] & k;
              }

              // BFS to find connected components and update cost array for each component
              queue<int> q;
              vector<int> group(N, -1); // Group array to store component group of each vertex
              for (int i = 0; i < N; i++) {
                  if (group[i] == -1) {
                      group[i] = i; // Assign component group ID
                      q.push(i);
                      while (!q.empty()) {
                          int u = q.front(); q.pop();
                          c[i] = c[i] & c[u]; // Update cost with bitwise AND of all vertices in the component
                          for (int v : adj[u]) {
                              if (group[v] == -1) {
                                  group[v] = i;
                                  q.push(v);
                              }
                          }
                      }
                  }
              }

              // Process queries
              vector<int> res;
              for (vector<int> query : queries) {
                  int s = query[0], t = query[1];
                  if (s == t) {
                      res.push_back(0); // Same starting and ending vertex
                  } else {
                      if (group[s] == group[t]) {
                          res.push_back(c[group[s]]); // Same connected component
                      } else {
                          res.push_back(-1); // Different connected components
                      }
                  }
              }
              return res;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      import java.util.*;

      public class Solution {
          public List<Integer> minimumCost(int N, List<List<Integer>> edges, List<List<Integer>> queries) {
              List<List<Integer>> adj = new ArrayList<>(N); // Adjacency list
              for (int i = 0; i < N; i++) adj.add(new ArrayList<>());
              int[] c = new int[N]; // Cost array, initialized with maximum possible value
              Arrays.fill(c, Integer.MAX_VALUE);

              // Construct adjacency list and update cost array
              for (List<Integer> edge : edges) {
                  int u = edge.get(0), v = edge.get(1), k = edge.get(2);
                  adj.get(u).add(v);
                  adj.get(v).add(u);
                  c[u] &= k; // Update cost with bitwise AND
                  c[v] &= k;
              }

              // BFS to find connected components and update cost array for each component
              Queue<Integer> q = new LinkedList<>();
              int[] group = new int[N]; // Group array to store component group of each vertex
              Arrays.fill(group, -1);
              for (int i = 0; i < N; i++) {
                  if (group[i] == -1) {
                      group[i] = i; // Assign component group ID
                      q.offer(i);
                      while (!q.isEmpty()) {
                          int u = q.poll();
                          c[i] &= c[u]; // Update cost with bitwise AND of all vertices in the component
                          for (int v : adj.get(u)) {
                              if (group[v] == -1) {
                                  group[v] = i;
                                  q.offer(v);
                              }
                          }
                      }
                  }
              }

              // Process queries
              List<Integer> res = new ArrayList<>();
              for (List<Integer> query : queries) {
                  int s = query.get(0), t = query.get(1);
                  if (s == t) {
                      res.add(0); // Same starting and ending vertex
                  } else {
                      if (group[s] == group[t]) {
                          res.add(c[group[s]]); // Same connected component
                      } else {
                          res.add(-1); // Different connected components
                      }
                  }
              }
              return res;
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      from typing import List
      from collections import deque

      class Solution:
          def minimumCost(self, N: int, edges: List[List[int]], queries: List[List[int]]) -> List[int]:
              adj = [[] for _ in range(N)] # Adjacency list
              c = [float('inf')] * N # Cost array, initialized with maximum possible value

              # Construct adjacency list and update cost array
              for u, v, k in edges:
                  adj[u].append(v)
                  adj[v].append(u)
                  c[u] &= k # Update cost with bitwise AND
                  c[v] &= k

              # BFS to find connected components and update cost array for each component
              q = deque()
              group = [-1] * N # Group array to store component group of each vertex
              for i in range(N):
                  if group[i] == -1:
                      group[i] = i # Assign component group ID
                      q.append(i)
                      while q:
                          u = q.popleft()
                          c[i] &= c[u] # Update cost with bitwise AND of all vertices in the component
                          for v in adj[u]:
                              if group[v] == -1:
                                  group[v] = i
                                  q.append(v)

              # Process queries
              res = []
              for s, t in queries:
                  if s == t:
                      res.append(0) # Same starting and ending vertex
                  else:
                      if group[s] == group[t]:
                          res.append(c[group[s]]) # Same connected component
                      else:
                          res.append(-1) # Different connected components
              return res
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <limits.h>
      #include <string.h>
      #include <stdbool.h>

      typedef struct {
          int* data;
          int front;
          int rear;
          int size;
          int capacity;
      } Queue;

      Queue* createQueue(int capacity) {
          Queue* queue = (Queue*)malloc(sizeof(Queue));
          queue->capacity = capacity;
          queue->front = queue->size = 0;
          queue->rear = capacity - 1;
          queue->data = (int*)malloc(queue->capacity * sizeof(int));
          return queue;
      }

      bool isFull(Queue* queue) {
          return (queue->size == queue->capacity);
      }

      bool isEmpty(Queue* queue) {
          return (queue->size == 0);
      }

      void enqueue(Queue* queue, int item) {
          if (isFull(queue))
              return;
          queue->rear = (queue->rear + 1) % queue->capacity;
          queue->data[queue->rear] = item;
          queue->size = queue->size + 1;
      }

      int dequeue(Queue* queue) {
          if (isEmpty(queue))
              return INT_MIN;
          int item = queue->data[queue->front];
          queue->front = (queue->front + 1) % queue->capacity;
          queue->size = queue->size - 1;
          return item;
      }

      int* minimumCost(int N, int edges[][3], int edgesSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
          int* adj[N];
          int adjSize[N];
          int* c = (int*)malloc(N * sizeof(int));
          int* group = (int*)malloc(N * sizeof(int));
          int* res = (int*)malloc(queriesSize * sizeof(int));
          *returnSize = queriesSize;

          for (int i = 0; i < N; i++) {
              adj[i] = (int*)malloc(N * sizeof(int));
              adjSize[i] = 0;
              c[i] = INT_MAX;
              group[i] = -1;
          }

          // Construct adjacency list and update cost array
          for (int i = 0; i < edgesSize; i++) {
              int u = edges[i][0], v = edges[i][1], k = edges[i][2];
              adj[u][adjSize[u]++] = v;
              adj[v][adjSize[v]++] = u;
              c[u] &= k;
              c[v] &= k;
          }

          // BFS to find connected components and update cost array for each component
          Queue* q = createQueue(N);
          for (int i = 0; i < N; i++) {
              if (group[i] == -1) {
                  group[i] = i;
                  enqueue(q, i);
                  while (!isEmpty(q)) {
                      int u = dequeue(q);
                      c[i] &= c[u];
                      for (int j = 0; j < adjSize[u]; j++) {
                          int v = adj[u][j];
                          if (group[v] == -1) {
                              group[v] = i;
                              enqueue(q, v);
                          }
                      }
                  }
              }
          }

          // Process queries
          for (int i = 0; i < queriesSize; i++) {
              int s = queries[i][0], t = queries[i][1];
              if (s == t) {
                  res[i] = 0;
              } else {
                  if (group[s] == group[t]) {
                      res[i] = c[group[s]];
                  } else {
                      res[i] = -1;
                  }
              }
          }

          return res;
      }
      ```
    </TabItem>

</Tabs>

## Complexity

**Time complexity:**

        1. Constructing the adjacency list: $O(E)$, where E is the number of edges.
        2. BFS traversal: $O(V + E)$, where V is the number of vertices.
        3. Processing queries: $O(Q)$, where `Q` is the number of queries.
        4. Overall time complexity: $O(V + E + Q)$.

**Space complexity:**

          1. Space for the adjacency list: $O(E)$.
          2. Space for the cost array c: $O(V)$.
          3. Space for the queue and group array during BFS: $O(V)$.
          4. Overall space complexity: $O(V + E)$.



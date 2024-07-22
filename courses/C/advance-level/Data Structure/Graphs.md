---
id: lesson-2
title: "Graphs and Graph Algorithms"
sidebar_label: Graphs and Graph Algorithms
sidebar_position: 2
description: "Graphs and Graph Algorithms"
tags: [courses,Advance-level,Introduction]
--- 
 
 

:::note
- **Graph**
  - **Definition**: A graph is a non-linear data structure consisting of nodes (vertices) and edges connecting pairs of nodes.
  - **Representation**: Adjacency matrix, adjacency list.

- **Graph Algorithms**
  - **Depth-First Search (DFS)**
  - **Breadth-First Search (BFS)**
  :::
  - **Example (BFS)**:
    ```c
    #include <stdio.h>
    #include <stdlib.h>
    #include <stdbool.h>

    #define V 5

    void BFS(int graph[V][V], int start) {
        bool visited[V] = {false};
        int queue[V], front = 0, rear = 0;
        visited[start] = true;
        queue[rear++] = start;

        while (front < rear) {
            int node = queue[front++];
            printf("%d ", node);

            for (int i = 0; i < V; i++) {
                if (graph[node][i] && !visited[i]) {
                    visited[i] = true;
                    queue[rear++] = i;
                }
            }
        }
    }

    int main() {
        int graph[V][V] = {
            {0, 1, 1, 0, 0},
            {1, 0, 1, 1, 0},
            {1, 1, 0, 1, 1},
            {0, 1, 1, 0, 1},
            {0, 0, 1, 1, 0}
        };

        printf("Breadth-First Search starting from node 0: ");
        BFS(graph, 0);
        printf("\n");

        return 0;
    }
    ```

  **Output**:
  ```
  Breadth-First Search starting from node 0: 0 1 2 3 4
  ```

### Summary

- **Linked Lists**: A sequence of nodes where each node points to the next (and possibly previous) node.
- **Stacks and Queues**: Linear data structures for LIFO (stack) and FIFO (queue) operations.
- **Trees**: Hierarchical structures with nodes connected by edges. Includes binary trees and binary search trees.
- **Graphs**: Non-linear structures with nodes connected by edges. Includes algorithms like BFS and DFS.

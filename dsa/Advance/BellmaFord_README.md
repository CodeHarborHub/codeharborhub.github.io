---
id: bellman-ford
title: Bellman-Ford Algorithm Solution
sidebar_label: 0004 - Bellman-Ford Algorithm
tags:
   - Bellman-Ford
   - Shortest Path
   - Algorithm
   - C++
   - Problem Solving
description: "This is a solution to the Bellman-Ford algorithm problem."
sidebar_position: 4
---

In this tutorial, we will solve the Bellman-Ford algorithm problem using C++. The Bellman-Ford algorithm computes the shortest paths from a single source vertex to all other vertices in a weighted graph.

## Problem Description

The Bellman-Ford algorithm is designed to find the shortest paths from a source vertex to all other vertices in a graph, even if the graph contains edges with negative weights. It can also detect negative weight cycles.

### Examples

**Example 1:**

```plaintext
Input: Vertices = 5, Edges = {(0, 1, -1), (0, 2, 4), (1, 2, 3), (1, 3, 2), (1, 4, 2), (3, 1, 1), (3, 4, 5), (4, 3, -3)}
Source: 0
Output: 
0: 0
1: -1
2: 2
3: 1
4: -2
```

### Constraints
- The graph may contain negative weight edges.
- The algorithm should handle up to 10^5 vertices and edges.

### Solution for Bellman-Ford Algorithm
- Intuition and Approach
The Bellman-Ford algorithm follows these steps:

1. Initialize the distance to the source vertex as zero and all other vertices as infinite.
2. 3. Relax all edges |V| - 1 times, where |V| is the number of vertices.
Check for negative weight cycles by iterating over all edges again.
<Tabs>
<tabItem value="C++" label="C++" default>

### Implementation in C++
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int src, dest, weight;
};

void BellmanFord(vector<Edge>& edges, int V, int E, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    for (int i = 1; i <= V - 1; ++i) {
        for (int j = 0; j < E; ++j) {
            if (dist[edges[j].src] != INT_MAX && dist[edges[j].src] + edges[j].weight < dist[edges[j].dest]) {
                dist[edges[j].dest] = dist[edges[j].src] + edges[j].weight;
            }
        }
    }

    for (int j = 0; j < E; ++j) {
        if (dist[edges[j].src] != INT_MAX && dist[edges[j].src] + edges[j].weight < dist[edges[j].dest]) {
            cout << "Graph contains negative weight cycle\n";
            return;
        }
    }

    cout << "Vertex Distance from Source:\n";
    for (int i = 0; i < V; ++i) {
        cout << i << "\t\t" << dist[i] << "\n";
    }
}

int main() {
    int V, E;
    cout << "Enter the number of vertices: ";
    cin >> V;
    cout << "Enter the number of edges: ";
    cin >> E;

    vector<Edge> edges(E);
    for (int i = 0; i < E; ++i) {
        cout << "Enter edge (src dest weight): ";
        cin >> edges[i].src >> edges[i].dest >> edges[i].weight;
    }

    int src;
    cout << "Enter the source vertex: ";
    cin >> src;

    BellmanFord(edges, V, E, src);

    return 0;
}

```

### Complexity Analysis
- Time Complexity: $O(V*E)$
- Space Complexity: $O(V)$
- Where `V` is the number of vertices and `E` is the number of edges.
- The time complexity is determined by the relaxation of edges in the graph.
- The space complexity is linear due to the storage of distances.
</tabItem>
</Tabs>
---
id: bellman-ford-algorithm
title: Bellman-Ford Algorithm
sidebar_label: Bellman-Ford Algorithm
tags: [python, java, c++, programming, algorithms, dynamic programming, graph, tutorial, in-depth]
description: In this tutorial, we will learn about the Bellman-Ford Algorithm and its solution using Dynamic Programming in Python, Java, and C++ with detailed explanations and examples.
---

# Bellman-Ford Algorithm

The Bellman-Ford algorithm is a classic algorithm for finding the shortest paths in a weighted graph with negative weights. It is capable of handling graphs with negative edge weights and can also detect negative weight cycles.

## Problem Statement

Given a graph and a source vertex, find the shortest paths from the source vertex to all other vertices in the graph.

### Intuition

The algorithm iteratively relaxes the edges of the graph. The idea is to improve the estimate of the shortest path step by step. It takes up to `|V| - 1` iterations, where `|V|` is the number of vertices, to ensure that the shortest paths are found. If we perform one more iteration and still find a shorter path, it indicates the presence of a negative weight cycle.

## Dynamic Programming Approach

Using dynamic programming, we maintain an array `dist` where `dist[i]` holds the shortest distance from the source vertex to vertex `i`.

## Pseudocode for Bellman-Ford Algorithm using DP

#### Initialize:

```markdown
dist[source] = 0
for i from 1 to |V| - 1:
    for each edge (u, v) with weight w:
        if dist[u] + w < dist[v]:
            dist[v] = dist[u] + w

for each edge (u, v) with weight w:
    if dist[u] + w < dist[v]:
        print("Graph contains a negative weight cycle")
        return
```

### Example Output:

Given the graph:

- `Vertices: {0, 1, 2, 3}`
- `Edges: {(0, 1, 1), (1, 2, 3), (2, 3, 2), (3, 1, -6)}`

The set can be partitioned into two subsets with equal sum.

### Output Explanation:

The shortest distances from the source vertex 0 to all other vertices are:

- `0 -> 1: 1`
- `0 -> 2: 4`
- `0 -> 3: 6`

By following the Bellman-Ford algorithm, the shortest path distances from the source vertex 0 to vertices 1, 2, and 3 are found to be 1, 4, and 6 respectively.

## Implementing Bellman-Ford Algorithm using DP

### Python Implementation

```python
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = []

    def add_edge(self, u, v, w):
        self.graph.append([u, v, w])

    def bellman_ford(self, src):
        dist = [float("Inf")] * self.V
        dist[src] = 0

        for _ in range(self.V - 1):
            for u, v, w in self.graph:
                if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w

        for u, v, w in self.graph:
            if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                print("Graph contains a negative weight cycle")
                return

        print("Vertex Distance from Source")
        for i in range(self.V):
            print(f"{i}\t\t{dist[i]}")

g = Graph(4)
g.add_edge(0, 1, 1)
g.add_edge(1, 2, 3)
g.add_edge(2, 3, 2)
g.add_edge(3, 1, -6)

g.bellman_ford(0)
```

### Java Implementation

```java
import java.util.*;

class Graph {
    class Edge {
        int src, dest, weight;
        Edge() {
            src = dest = weight = 0;
        }
    };

    int V, E;
    Edge edge[];

    Graph(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[e];
        for (int i = 0; i < e; ++i)
            edge[i] = new Edge();
    }

    void BellmanFord(Graph graph, int src) {
        int V = graph.V, E = graph.E;
        int dist[] = new int[V];

        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        for (int i = 1; i < V; ++i) {
            for (int j = 0; j < E; ++j) {
                int u = graph.edge[j].src;
                int v = graph.edge[j].dest;
                int weight = graph.edge[j].weight;
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v])
                    dist[v] = dist[u] + weight;
            }
        }

        for (int j = 0; j < E; ++j) {
            int u = graph.edge[j].src;
            int v = graph.edge[j].dest;
            int weight = graph.edge[j].weight;
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v])
                System.out.println("Graph contains a negative weight cycle");
        }

        printArr(dist, V);
    }

    void printArr(int dist[], int V) {
        System.out.println("Vertex Distance from Source");
        for (int i = 0; i < V; ++i)
            System.out.println(i + "\t\t" + dist[i]);
    }

    public static void main(String[] args) {
        Graph graph = new Graph(4, 4);

        graph.edge[0].src = 0;
        graph.edge[0].dest = 1;
        graph.edge[0].weight = 1;

        graph.edge[1].src = 1;
        graph.edge[1].dest = 2;
        graph.edge[1].weight = 3;

        graph.edge[2].src = 2;
        graph.edge[2].dest = 3;
        graph.edge[2].weight = 2;

        graph.edge[3].src = 3;
        graph.edge[3].dest = 1;
        graph.edge[3].weight = -6;

        graph.BellmanFord(graph, 0);
    }
}
```
### C++ Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int src, dest, weight;
};

struct Graph {
    int V, E;
    struct Edge* edge;
};

struct Graph* createGraph(int V, int E) {
    struct Graph* graph = (struct Graph*) malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
    graph->edge = (struct Edge*) malloc(graph->E * sizeof(struct Edge));
    return graph;
}

void printArr(int dist[], int n) {
    cout << "Vertex Distance from Source" << endl;
    for (int i = 0; i < n; ++i)
        cout << i << "\t\t" << dist[i] << endl;
}

void BellmanFord(struct Graph* graph, int src) {
    int V = graph->V;
    int E = graph->E;
    int dist[V];

    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX;
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = graph->edge[j].src;
            int v = graph->edge[j].dest;
            int weight = graph->edge[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    for (int i = 0; i < E; i++) {
        int u = graph->edge[i].src;
        int v = graph->edge[i].dest;
        int weight = graph->edge[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            cout << "Graph contains a negative weight cycle" << endl;
            return;
        }
    }

    printArr(dist, V);
}

int main() {
    int V = 4;
    int E = 4;
    struct Graph* graph = createGraph(V, E);

    graph->edge[0].src = 0;
    graph->edge[0].dest = 1;
    graph->edge[0].weight = 1;

    graph->edge[1].src = 1;
    graph->edge[1].dest = 2;
    graph->edge[1].weight = 3;

    graph->edge[2].src = 2;
    graph->edge[2].dest = 3;
    graph->edge[2].weight = 2;

    graph->edge[3].src = 3;
    graph->edge[3].dest = 1;
    graph->edge[3].weight = -6;

    BellmanFord(graph, 0);

    return 0;
}
```

## Complexity Analysis

- Time Complexity: $O(V \times E)$, where V is the number of vertices and E is the number of edges.
- Space Complexity: $O(V)$, for storing the distance array.

## Conclusion

The Bellman-Ford algorithm provides an efficient solution for finding the shortest paths in a graph with negative weights and can also detect negative weight cycles. This technique is useful in various applications, including network routing and financial modeling.
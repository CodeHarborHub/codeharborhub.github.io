---
id: greedy-graph-optimization
title: Greedy Graph Optimization Solution
sidebar_label: 0004 - Greedy Graph Optimization
tags: [Greedy Algorithm, Graph Optimization, Minimum Spanning Tree, Shortest Path, Problem Solving]
description: This is a solution to the Greedy Graph Optimization problem.
---

## Problem Statement 

### Problem Description

The Greedy Graph Optimization algorithm aims to solve common graph-related problems, such as finding a minimum spanning tree (MST) or the shortest path, by applying a greedy approach. This method ensures efficient computation and can be highly effective for large datasets.

### Examples

**Example 1:**

```plaintext
Input: Graph = {
  nodes: [0, 1, 2, 3],
  edges: [
    { source: 0, target: 1, weight: 1 },
    { source: 0, target: 2, weight: 3 },
    { source: 1, target: 2, weight: 1 },
    { source: 1, target: 3, weight: 4 },
    { source: 2, target: 3, weight: 1 }
  ]
}
Output: Edges in MST = [
  { source: 0, target: 1, weight: 1 },
  { source: 1, target: 2, weight: 1 },
  { source: 2, target: 3, weight: 1 }
]
```
**Example 2:**

```plaintext
Input: Graph = {
  nodes: [0, 1, 2, 3],
  edges: [
    { source: 0, target: 1, weight: 1 },
    { source: 0, target: 2, weight: 3 },
    { source: 1, target: 2, weight: 1 },
    { source: 1, target: 3, weight: 4 },
    { source: 2, target: 3, weight: 1 }
  ],
  start: 0,
  end: 3
}
Output: Shortest Path = [0, 1, 2, 3], Total Weight = 3
```

### Constraints
- The graph is represented as an adjacency list.
- The weights of the edges are non-negative integers.
- The graph may contain cycles but no negative weight cycles.

## Solution of Given Problem

### Intuition and Approach

The greedy algorithm provides an efficient approach to solving graph optimization problems. For the minimum spanning tree, we use Kruskal's algorithm. For the shortest path, we employ Dijkstra's algorithm.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++" default>
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;
    class DSU {
    vector<int> parent, rank;

public:
    DSU(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        iota(parent.begin(), parent.end(), 0);
    }

    int find(int u) {
        if (u != parent[u])
            parent[u] = find(parent[u]);
        return parent[u];
    }

    void union_set(int u, int v) {
        u = find(u);
        v = find(v);
        if (u != v) {
            if (rank[u] < rank[v])
                swap(u, v);
            parent[v] = u;
            if (rank[u] == rank[v])
                rank[u]++;
        }
    }
};

struct Edge {
    int source, target, weight;
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

vector<Edge> kruskal(int n, vector<Edge>& edges) {
    sort(edges.begin(), edges.end());
    DSU dsu(n);
    vector<Edge> mst;
    for (auto& edge : edges) {
        if (dsu.find(edge.source) != dsu.find(edge.target)) {
            dsu.union_set(edge.source, edge.target);
            mst.push_back(edge);
        }
    }
    return mst;
}

vector<int> dijkstra(int n, vector<vector<pair<int, int>>>& adj, int src) {
    vector<int> dist(n, INT_MAX);
    dist[src] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, src});
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        if (d != dist[u])
            continue;
        for (auto& [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}
void userInput() {
    int n, m;
    cout << "Enter the number of nodes and edges:\n";
    cin >> n >> m;

    vector<Edge> edges(m);
    cout << "Enter the edges (source target weight):\n";
    for (int i = 0; i < m; ++i) {
        cin >> edges[i].source >> edges[i].target >> edges[i].weight;
    }

    int choice;
    cout << "Enter 1 for MST (Kruskal) or 2 for Shortest Path (Dijkstra):\n";
    cin >> choice;

    if (choice == 1) {
        vector<Edge> mst = kruskal(n, edges);
        cout << "Edges in MST:\n";
        for (auto& edge : mst) {
            cout << edge.source << " - " << edge.target << " : " << edge.weight << "\n";
        }
    } else if (choice == 2) {
        vector<vector<pair<int, int>>> adj(n);
        for (auto& edge : edges) {
            adj[edge.source].emplace_back(edge.target, edge.weight);
            adj[edge.target].emplace_back(edge.source, edge.weight); // For undirected graph
        }
        int src;
        cout << "Enter the source node:\n";
        cin >> src;
        vector<int> dist = dijkstra(n, adj, src);
        cout << "Shortest paths from node " << src << ":\n";
        for (int i = 0; i < n; ++i) {
            cout << "Node " << i << " : " << dist[i] << "\n";
        }
    } else {
        cout << "Invalid choice.\n";
    }
}

int main() {
    userInput();
    return 0;
}
```

  </TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: 
- Kruskal's Algorithm: $O(E \log E)$
- Dijkstra's Algorithm: $O((E + V) \log V)$
- Space Complexity: 
- Kruskal's Algorithm: $O(V)$
- Dijkstra's Algorithm: $O(V + E)$
- Where `V` is the number of vertices and `E` is the number of edges.
- The time complexity is dominated by the operations on the priority queue and sorting of edges.
- The space complexity is linear due to the storage of the graph and auxiliary data structures.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="uDS8AkTAcIU"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sjain1909'].map(username => (
 <Author key={username} username={username} />
))}
</div>

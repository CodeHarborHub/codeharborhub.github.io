---
id: versatile-graph-toolkit
title: Versatile Graph Toolkit
sidebar_label: 0005 - Versatile Graph Toolkit
tags: [Graph Algorithms, Dijkstra, Kruskal, DFS, BFS, C++, Problem Solving]
description: This is a solution for developing a versatile graph theory toolkit designed to address a wide range of DSA problems.
---

## Problem Statement 

### Problem Description

The versatile graph theory toolkit provides implementations for fundamental graph algorithms such as Depth-First Search (DFS), Breadth-First Search (BFS), Dijkstra’s algorithm, and Kruskal’s algorithm. This toolkit offers an easy-to-use interface, enabling users to efficiently solve various DSA problems involving graph theory.

### Examples

**Example 1:**

```plaintext
Input: 
Number of vertices: 5
Edges: 
0 1 4
0 2 2
1 2 1
1 3 5
2 3 8
2 4 10
3 4 2
Output:
DFS Traversal: 0 1 2 3 4
BFS Traversal: 0 1 2 3 4
Shortest Path from 0 to 4 (Dijkstra): 10
Minimum Spanning Tree (Kruskal):
Edge: 1-2 Weight: 1
Edge: 3-4 Weight: 2
Edge: 0-2 Weight: 2
Edge: 0-1 Weight: 4

```

### Constraints
- The toolkit should handle up to 10^5 vertices and edges.
- The graph can be directed or undirected, weighted or unweighted.

## Solution of Given Problem

### Intuition and Approach

The versatile graph theory toolkit is designed with the following algorithms:

1. Depth-First Search (DFS): Traverses the graph in a depthward motion, utilizing a stack or recursion.
2. Breadth-First Search (BFS): Traverses the graph level by level, utilizing a queue.
3. Dijkstra’s Algorithm: Finds the shortest path from a single source to all other vertices in a graph with non-negative weights.
4. Kruskal’s Algorithm: Finds the Minimum Spanning Tree (MST) for a graph by sorting edges and applying the union-find structure.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

void DFS(int v, vector<vector<int>>& adj, vector<bool>& visited) {
    stack<int> stack;
    stack.push(v);
    
    while (!stack.empty()) {
        int u = stack.top();
        stack.pop();
        
        if (!visited[u]) {
            cout << u << " ";
            visited[u] = true;
        }
        
        for (int i = adj[u].size() - 1; i >= 0; --i) {
            if (!visited[adj[u][i]]) {
                stack.push(adj[u][i]);
            }
        }
    }
}

void BFS(int v, vector<vector<int>>& adj, vector<bool>& visited) {
    queue<int> queue;
    queue.push(v);
    visited[v] = true;
    
    while (!queue.empty()) {
        int u = queue.front();
        queue.pop();
        cout << u << " ";
        
        for (int i = 0; i < adj[u].size(); ++i) {
            if (!visited[adj[u][i]]) {
                queue.push(adj[u][i]);
                visited[adj[u][i]] = true;
            }
        }
    }
}

void Dijkstra(int src, vector<vector<pair<int, int>>>& adj, int V) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, src});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    for (int i = 0; i < V; ++i) {
        cout << "Distance from " << src << " to " << i << ": " << dist[i] << "\n";
    }
}

struct Edge {
    int u, v, weight;
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

int find(vector<int>& parent, int i) {
    if (parent[i] == -1)
        return i;
    return parent[i] = find(parent, parent[i]);
}

void unionSets(vector<int>& parent, vector<int>& rank, int x, int y) {
    int xroot = find(parent, x);
    int yroot = find(parent, y);
    
    if (rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    } else if (rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else {
        parent[yroot] = xroot;
        rank[xroot]++;
    }
}

void Kruskal(vector<Edge>& edges, int V) {
    sort(edges.begin(), edges.end());
    vector<int> parent(V, -1);
    vector<int> rank(V, 0);
    vector<Edge> result;

    for (auto& edge : edges) {
        int x = find(parent, edge.u);
        int y = find(parent, edge.v);
        
        if (x != y) {
            result.push_back(edge);
            unionSets(parent, rank, x, y);
        }
    }
    
    cout << "Minimum Spanning Tree:\n";
    for (auto& edge : result) {
        cout << "Edge: " << edge.u << "-" << edge.v << " Weight: " << edge.weight << "\n";
    }
}

int main() {
    int V, E;
    cout << "Enter the number of vertices: ";
    cin >> V;
    cout << "Enter the number of edges: ";
    cin >> E;

    vector<vector<int>> adj(V);
    vector<vector<pair<int, int>>> adjWeighted(V);
    vector<Edge> edges;

    cout << "Enter the edges (u v weight): \n";
    for (int i = 0; i < E; ++i) {
        int u, v, weight;
        cin >> u >> v >> weight;
        adj[u].push_back(v);
        adj[v].push_back(u);
        adjWeighted[u].push_back({v, weight});
        adjWeighted[v].push_back({u, weight});
        edges.push_back({u, v, weight});
    }

    vector<bool> visited(V, false);
    cout << "DFS Traversal: ";
    DFS(0, adj, visited);
    cout << "\n";

    fill(visited.begin(), visited.end(), false);
    cout << "BFS Traversal: ";
    BFS(0, adj, visited);
    cout << "\n";

    cout << "Shortest Path from 0 using Dijkstra's algorithm:\n";
    Dijkstra(0, adjWeighted, V);
    cout << "\n";

    cout << "Minimum Spanning Tree using Kruskal's algorithm:\n";
    Kruskal(edges, V);
    cout << "\n";

    return 0;
}
```

  </TabItem>  
</Tabs>

### Complexity Analysis

1. Time Complexity: Varies depending on the algorithm:
- DFS: $O(V + E)$
- BFS: $O(V + E)$
- Dijkstra’s Algorithm: $O((V + E) \log V)$
- Kruskal’s Algorithm: $O(E \log E)$
2. Space Complexity: $O(V + E)$ for adjacency lists and $O(V)$ for auxiliary structures.

The time complexity is determined by the relaxation of edges in the graph. The space complexity is linear due to the storage of distances.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="obWXjtg0L64"
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

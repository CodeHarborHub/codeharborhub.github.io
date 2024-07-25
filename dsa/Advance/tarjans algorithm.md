---
id: tarjans-algorithm
title: Tarjan’s Algorithm for Strongly Connected Components
sidebar_label: 0009 - Tarjan’s Algorithm
tags: [Tarjan's Algorithm, Strongly Connected Components, Algorithm, C++, Problem Solving]
description: This is a solution for implementing Tarjan’s Algorithm to find strongly connected components in a directed graph.
---

## Problem Statement 

### Problem Description

Tarjan’s Algorithm is used to find strongly connected components (SCCs) in a directed graph. SCCs are subgraphs where every vertex is reachable from every other vertex within the same subgraph. This algorithm is efficient and crucial for various graph-related problems.

### Examples

**Example 1:**

```plaintext
Input: 
Graph: 
0 -> 1
1 -> 2
2 -> 0
1 -> 3
3 -> 4

Output: 
SCCs:
0 2 1
3
4

Explanation: The graph contains three SCCs: {0, 1, 2}, {3}, and {4}.
```

### Constraints

- The graph is a directed graph.
- The algorithm should handle graphs with up to 10^5 vertices and edges.

## Solution of Given Problem

### Intuition and Approach

Tarjan’s Algorithm uses depth-first search (DFS) to traverse the graph and identifies SCCs using a stack and low-link values

- The algorithm follows these steps:

1. Initialize a stack to keep track of visited vertices.
2. Use a DFS traversal to explore the graph.
3. For each vertex, assign discovery and low-link values.
4. If a vertex's low-link value equals its discovery value, it is the root of an SCC.
5. Pop vertices from the stack until the root vertex is reached, forming an SCC.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

    class TarjanSCC {
    int V; 
    list<int> *adj; 
    vector<int> disc, low, stackMember;
    stack<int> st;
    int time;

    void SCCUtil(int u) {
        disc[u] = low[u] = ++time;
        st.push(u);
        stackMember[u] = true;

        for (int v : adj[u]) {
            if (disc[v] == -1) {
                SCCUtil(v);
                low[u] = min(low[u], low[v]);
            }
            else if (stackMember[v] == true) {
                low[u] = min(low[u], disc[v]);
            }
        }

        int w = 0;
        if (low[u] == disc[u]) {
            while (st.top() != u) {
                w = st.top();
                cout << w << " ";
                stackMember[w] = false;
                st.pop();
            }
            w = st.top();
            cout << w << "\n";
            stackMember[w] = false;
            st.pop();
        }
    }

public:
    TarjanSCC(int V) {
        this->V = V;
        adj = new list<int>[V];
        disc = vector<int>(V, -1);
        low = vector<int>(V, -1);
        stackMember = vector<int>(V, false);
        time = 0;
    }

    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }

    void SCC() {
        for (int i = 0; i < V; i++) {
            if (disc[i] == -1) {
                SCCUtil(i);
            }
        }
    }
};

int main() {
    int V, E;
    cout << "Enter the number of vertices: ";
    cin >> V;
    cout << "Enter the number of edges: ";
    cin >> E;

    TarjanSCC g(V);
    for (int i = 0; i < E; ++i) {
        int v, w;
        cout << "Enter edge (v w): ";
        cin >> v >> w;
        g.addEdge(v, w);
    }

    cout << "Strongly Connected Components are:\n";
    g.SCC();

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(V*E)$
- **Space Complexity:** $O(V)$

The time complexity is determined by the relaxation of edges in the graph. The space complexity is linear due to the storage of distances.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="2kREIkF9UAs"
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

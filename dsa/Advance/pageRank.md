---
id: pagerank-algorithm
title: PageRank Algorithm for Web Page Ranking
sidebar_label: 0010 - PageRank Algorithm
tags: [PageRank, Web Page Ranking, Algorithm, C++, Problem Solving]
description: This is a solution for implementing the PageRank Algorithm to rank web pages based on their importance and relevance.
---

## Problem Statement 

### Problem Description

The PageRank Algorithm, developed by Google, ranks web pages in search engine results based on their importance and relevance. It assigns a numerical weighting to each element of a hyperlinked set of documents with the purpose of measuring its relative importance within the set.

### Examples

**Example 1:**

```plaintext
Input: 
Number of pages: 3
Links: 
0 -> 1
1 -> 2
2 -> 0

Output: 
PageRank values:
Page 0: 0.33
Page 1: 0.33
Page 2: 0.33

Explanation: Each page has an equal rank since each links to the next in a circular manner.
```

### Constraints

- The input is a directed graph where nodes represent web pages and edges represent links between them.
- The algorithm should handle graphs with up to 10^5 vertices and edges.

## Solution of Given Problem

### Intuition and Approach

The PageRank Algorithm follows these steps:

1. Initialize the rank of all pages to a uniform value.
2. For a fixed number of iterations or until convergence, update the rank of each page based on the ranks of pages linking to it.
3. Apply a damping factor to simulate the probability of a random web surfer following links.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

    class PageRank {
    int V; 
    vector<vector<int>> adj; 
    vector<double> rank; 
    double damping; 
    int maxIter; 

public:
    PageRank(int V, double damping = 0.85, int maxIter = 100) {
        this->V = V;
        this->damping = damping;
        this->maxIter = maxIter;
        adj.resize(V);
        rank.resize(V, 1.0 / V);
    }

    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }

    void calculatePageRank() {
        vector<double> newRank(V, 0.0);
        for (int iter = 0; iter < maxIter; ++iter) {
            for (int i = 0; i < V; ++i) {
                newRank[i] = (1 - damping) / V;
                for (int j = 0; j < V; ++j) {
                    if (find(adj[j].begin(), adj[j].end(), i) != adj[j].end()) {
                        newRank[i] += damping * rank[j] / adj[j].size();
                    }
                }
            }
            rank = newRank;
        }
    }

    void printPageRank() {
        for (int i = 0; i < V; ++i) {
            cout << "Page " << i << ": " << rank[i] << "\n";
        }
    }
};

int main() {
    int V, E;
    cout << "Enter the number of pages (vertices): ";
    cin >> V;
    cout << "Enter the number of links (edges): ";
    cin >> E;

    PageRank pr(V);
    for (int i = 0; i < E; ++i) {
        int v, w;
        cout << "Enter link (v -> w): ";
        cin >> v >> w;
        pr.addEdge(v, w);
    }

    pr.calculatePageRank();
    cout << "PageRank values:\n";
    pr.printPageRank();

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(V + E)$ per iteration, where `V` is the number of vertices and `E` is the number of edges.
- **Space Complexity:** $O(V + E)$

The time complexity is linear with respect to the number of vertices and edges per iteration. The space complexity is linear due to the storage requirements for the adjacency list and rank vectors.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="zQEsow1Z9OM"
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

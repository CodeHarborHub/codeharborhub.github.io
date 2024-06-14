---
id: prim
title: Prim's Algorithm 
sidebar_label: Prim's Algorithm 
tags: [python, java, c++, javascript, programming, algorithms, dijkstra, graph, shortest-path, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Prim's Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Prim's Algorithm 

Prim's Algorithm is a greedy algorithm that is used to find the minimum spanning tree from a graph. Prim's algorithm finds the subset of edges that includes every vertex of the graph such that the sum of the weights of the edges can be minimized.

## Introduction to Prim's Algorithm

Prim's algorithm starts with the single node and explores all the adjacent nodes with all the connecting edges at every step. The edges with the minimal weights causing no cycles in the graph got selected.

## How Prim's Algorithm Works

Prim's algorithm is a greedy algorithm that starts from one vertex and continue to add the edges with the smallest weight until the goal is reached. The steps to implement the prim's algorithm are given as follows -

First, we have to initialize an MST with the randomly chosen vertex.
Now, we have to find all the edges that connect the tree in the above step with the new vertices. From the edges found, select the minimum edge and add it to the tree.
Repeat step 2 until the minimum spanning tree is formed. 

![image](https://cdn.hashnode.com/res/hashnode/image/upload/v1671745151505/5488136c-81a8-4a65-9d52-fa966d645b3f.png)

## Pseudocode for Prim's Algorithm

Here is the pseudocode for Prim's Algorithm:

```
prim(graph):
    # Initialize an empty set to hold the vertices in the minimum spanning tree
    mst = empty set

    # Select the first vertex to start the tree
    startVertex = first vertex in graph
    mst.add(startVertex)

    # Initialize the set of edges to consider
    edges = edges connected to startVertex

    # Iterate until all vertices are in the minimum spanning tree
    while mst has fewer vertices than graph:
        # Find the minimum edge in the set of edges
        minEdge, minWeight = findMinEdge(edges)

        # Add the vertex to the minimum spanning tree
        mst.add(minEdge)

        # Add the edges connected to the vertex to the set of edges to consider
        for edge in edges connected to minEdge:
            if edge is not in mst:
                edges.add(edge)

        # Remove the minimum edge from the set of edges to consider
        edges.remove(minEdge)

    # Return the minimum spanning tree as an array
    return mst as an array
```

## Implementing Prim's Algorithm

### Python Implementation

```python
import heapq

def prim(graph, start_vertex):
    mst = []
    visited = set()
    min_heap = [(0, start_vertex, None)]  # (weight, vertex, from_vertex)

    while min_heap:
        weight, vertex, from_vertex = heapq.heappop(min_heap)

        if vertex not in visited:
            visited.add(vertex)
            if from_vertex is not None:
                mst.append((from_vertex, vertex, weight))

            for neighbor, edge_weight in graph[vertex]:
                if neighbor not in visited:
                    heapq.heappush(min_heap, (edge_weight, neighbor, vertex))

    return mst

# Example usage
graph = {
    'A': [('B', 2), ('D', 6)],
    'B': [('A', 2), ('C', 3), ('D', 8)],
    'C': [('B', 3), ('D', 5), ('E', 7)],
    'D': [('A', 6), ('B', 8), ('C', 5), ('E', 9)],
    'E': [('C', 7), ('D', 9)]
}

start_vertex = 'A'
mst = prim(graph, start_vertex)

print("Edges in the Minimum Spanning Tree:")
for edge in mst:
    print(edge)

```

### Java Implementation

```java
import java.util.*;

class Edge implements Comparable<Edge> {
    int weight;
    int vertex;

    Edge(int weight, int vertex) {
        this.weight = weight;
        this.vertex = vertex;
    }

    public int compareTo(Edge other) {
        return Integer.compare(this.weight, other.weight);
    }
}

public class PrimAlgorithm {

    public static void prim(List<List<Edge>> graph, int startVertex) {
        int n = graph.size();
        boolean[] visited = new boolean[n];
        PriorityQueue<Edge> minHeap = new PriorityQueue<>();
        List<Edge> mst = new ArrayList<>();

        // Initialize the min-heap with the starting vertex
        minHeap.add(new Edge(0, startVertex));

        while (!minHeap.isEmpty()) {
            Edge edge = minHeap.poll();
            int weight = edge.weight;
            int vertex = edge.vertex;

            if (visited[vertex]) continue;

            visited[vertex] = true;

            if (vertex != startVertex) {
                mst.add(edge);
            }

            for (Edge neighbor : graph.get(vertex)) {
                if (!visited[neighbor.vertex]) {
                    minHeap.add(neighbor);
                }
            }
        }

        // Output the MST edges and their weights
        System.out.println("Edges in the Minimum Spanning Tree:");
        for (Edge e : mst) {
            System.out.println("Vertex: " + e.vertex + ", Weight: " + e.weight);
        }
    }

    public static void main(String[] args) {
        int n = 5;  // Number of vertices
        List<List<Edge>> graph = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        // Add edges to the graph
        graph.get(0).add(new Edge(2, 1));  // A - B
        graph.get(0).add(new Edge(6, 3));  // A - D
        graph.get(1).add(new Edge(2, 0));  // B - A
        graph.get(1).add(new Edge(3, 2));  // B - C
        graph.get(1).add(new Edge(8, 3));  // B - D
        graph.get(2).add(new Edge(3, 1));  // C - B
        graph.get(2).add(new Edge(5, 3));  // C - D
        graph.get(2).add(new Edge(7, 4));  // C - E
        graph.get(3).add(new Edge(6, 0));  // D - A
        graph.get(3).add(new Edge(8, 1));  // D - B
        graph.get(3).add(new Edge(5, 2));  // D - C
        graph.get(3).add(new Edge(9, 4));  // D - E
        graph.get(4).add(new Edge(7, 2));  // E - C
        graph.get(4).add(new Edge(9, 3));  // E - D

        int startVertex = 0;  // Starting from vertex A (0)

        prim(graph, startVertex);
    }
}

```

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <utility>

using namespace std;

typedef pair<int, int> Edge;  // (weight, vertex)

void prim(const vector<vector<Edge>>& graph, int startVertex) {
    int n = graph.size();
    vector<bool> visited(n, false);
    priority_queue<Edge, vector<Edge>, greater<Edge>> minHeap;
    vector<Edge> mst;

    // Initialize the min-heap with the starting vertex
    minHeap.push({0, startVertex});

    while (!minHeap.empty()) {
        int weight = minHeap.top().first;
        int vertex = minHeap.top().second;
        minHeap.pop();

        if (visited[vertex]) continue;

        visited[vertex] = true;

        if (vertex != startVertex) {
            mst.push_back({weight, vertex});
        }

        for (const auto& neighbor : graph[vertex]) {
            if (!visited[neighbor.second]) {
                minHeap.push(neighbor);
            }
        }
    }

    // Output the MST edges and their weights
    cout << "Edges in the Minimum Spanning Tree:" << endl;
    for (const auto& edge : mst) {
        cout << "Vertex: " << edge.second << ", Weight: " << edge.first << endl;
    }
}

int main() {
    int n = 5;  // Number of vertices
    vector<vector<Edge>> graph(n);

    // Add edges to the graph
    graph[0].push_back({2, 1});  // A - B
    graph[0].push_back({6, 3});  // A - D
    graph[1].push_back({2, 0});  // B - A
    graph[1].push_back({3, 2});  // B - C
    graph[1].push_back({8, 3});  // B - D
    graph[2].push_back({3, 1});  // C - B
    graph[2].push_back({5, 3});  // C - D
    graph[2].push_back({7, 4});  // C - E
    graph[3].push_back({6, 0});  // D - A
    graph[3].push_back({8, 1});  // D - B
    graph[3].push_back({5, 2});  // D - C
    graph[3].push_back({9, 4});  // D - E
    graph[4].push_back({7, 2});  // E - C
    graph[4].push_back({9, 3});  // E - D

    int startVertex = 0;  // Starting from vertex A (0)

    prim(graph, startVertex);

    return 0;
}

```

### JavaScript Implementation

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) {
                break;
            }
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function prim(graph, startVertex) {
    const mst = [];
    const visited = new Set();
    const minHeap = new MinHeap();
    minHeap.insert([0, startVertex, null]);

    while (!minHeap.isEmpty()) {
        const [weight, vertex, fromVertex] = minHeap.extractMin();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            if (fromVertex !== null) {
                mst.push([fromVertex, vertex, weight]);
            }

            graph[vertex].forEach(([neighbor, edgeWeight]) => {
                if (!visited.has(neighbor)) {
                    minHeap.insert([edgeWeight, neighbor, vertex]);
                }
            });
        }
    }

    return mst;
}

// Example usage
const graph = {
    'A': [['B', 2], ['D', 6]],
    'B': [['A', 2], ['C', 3], ['D', 8]],
    'C': [['B', 3], ['D', 5], ['E', 7]],
    'D': [['A', 6], ['B', 8], ['C', 5], ['

```

## Applications of Prim's Algorithm

- **Network Design**:  Prim's algorithm helps in designing efficient communication networks by minimizing the cost of laying cables or fiber optics to connect various nodes (e.g., telephone lines, internet connections).
- **Transportation Networks**: Helps in planning the construction of roads, highways, and railways to connect various cities or locations with the minimum total distance or cost.
- **Computer Networks**: Helps in determining the optimal routing paths in networks to ensure data is transmitted efficiently with minimal delay and cost.

- **Cluster Analysis**: In machine learning and data mining, Prim's algorithm can be used to cluster data points by constructing a Minimum Spanning Tree and then cutting the most expensive edges to form clusters.

## Advanced Topics and Optimizations

Parallel and Distributed Implementations:

### Parallel Prim's Algorithm: 
Implementing Prim's algorithm in a parallel computing environment can significantly reduce computation time by distributing the workload across multiple processors. Parallel algorithms often involve dividing the graph into subgraphs, computing local MSTs, and then merging them.

### Distributed Prim's Algorithm:
 In distributed systems, where the graph is too large to fit into a single machine's memory, Prim's algorithm can be adapted to run across multiple machines, each handling a portion of the graph.
External Memory Algorithms:

For very large graphs that cannot fit into the main memory, external memory algorithms are used. These algorithms are designed to efficiently manage the transfer of data between the external storage (e.g., disk) and the main memory, minimizing I/O operations.
Dynamic Graphs:

### Incremental MST: 
If edges are added to the graph dynamically, the MST can be updated without recomputing it from scratch. This involves maintaining the MST and efficiently incorporating the new edges.
Decremental MST: If edges are removed from the graph, the MST can be adjusted accordingly. This requires techniques to efficiently update the MST when edges are deleted.

## Optimizations:

### Fibonacci Heap: 
Using a Fibonacci heap for the priority queue operations in Prim's algorithm reduces the time complexity to 
O(VlogV+E), making it more efficient for dense graphs.

### Pairing Heap: 
Another alternative is the pairing heap, which provides a good balance between theoretical complexity and practical performance.

### Edge Filtering: 
Before running Prim's algorithm, irrelevant edges (e.g., edges that are obviously too heavy) can be filtered out. This preprocessing step reduces the number of edges that the algorithm needs to process.

### Early Termination:

If the graph is already known to be connected and certain properties are met (e.g., the graph is sparse), Prim's algorithm can be optimized to terminate early once the MST is guaranteed to be found.
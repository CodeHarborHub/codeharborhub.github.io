# Tarjan's Algorithm

Tarjan's Algorithm is an efficient method for finding all Strongly Connected Components (SCCs) in a directed graph. An SCC is a maximal subgraph where each vertex is reachable from every other vertex in the subgraph.

## Algorithm Description

Tarjan's Algorithm uses Depth-First Search (DFS) to identify SCCs in a graph. It maintains a stack to keep track of the vertices in the current path and uses two arrays (or dictionaries) to store the discovery times and the lowest points reachable for each vertex.

## Steps

1. Perform a DFS traversal of the graph.
2. For each vertex, track the discovery time and the lowest discovery time reachable from that vertex.
3. Use a stack to keep vertices of the current DFS path.
4. When a vertex completes its DFS, check if it's the root of an SCC. If so, pop vertices from the stack to form the SCC.
5. Continue until all vertices have been processed.

## Time Complexity

The time complexity of Tarjan's Algorithm is O(V + E), where V is the number of vertices and E is the number of edges in the graph.

## Python Implementation

Here is a Python implementation of Tarjan's Algorithm:

```python
from collections import defaultdict

class TarjanSCC:
    def __init__(self, graph):
        self.graph = graph
        self.V = len(graph)
        self.index = 0
        self.stack = []
        self.in_stack = [False] * self.V
        self.indices = [-1] * self.V
        self.low_links = [-1] * self.V
        self.sccs = []

    def find_sccs(self):
        for v in range(self.V):
            if self.indices[v] == -1:
                self._strong_connect(v)
        return self.sccs

    def _strong_connect(self, v):
        self.indices[v] = self.index
        self.low_links[v] = self.index
        self.index += 1
        self.stack.append(v)
        self.in_stack[v] = True

        for w in self.graph[v]:
            if self.indices[w] == -1:
                self._strong_connect(w)
                self.low_links[v] = min(self.low_links[v], self.low_links[w])
            elif self.in_stack[w]:
                self.low_links[v] = min(self.low_links[v], self.indices[w])

        if self.low_links[v] == self.indices[v]:
            scc = []
            while True:
                w = self.stack.pop()
                self.in_stack[w] = False
                scc.append(w)
                if w == v:
                    break
            self.sccs.append(scc)
```
# Example usage
if __name__ == "__main__":
    # Define the graph as an adjacency list
    graph = defaultdict(list)
    graph[0].extend([1])
    graph[1].extend([2])
    graph[2].extend([0, 3])
    graph[3].extend([4])
    graph[4].extend([5, 7])
    graph[5].extend([6])
    graph[6].extend([4])
    graph[7].extend([8])
    graph[8].extend([7])

    # Find SCCs
    tarjan = TarjanSCC(graph)
    sccs = tarjan.find_sccs()

    # Print the SCCs
    print("Strongly Connected Components:")
    for scc in sccs:
        print(scc)

## Explanation
The TarjanSCC class initializes the graph and necessary variables.
The find_sccs method starts the DFS traversal and returns the list of SCCs.
The _strong_connect method performs the DFS, updates discovery times and low links, and identifies SCCs.
The example usage demonstrates how to define a graph, find SCCs using Tarjan's Algorithm, and print the results

## Conclusion
Tarjan's Algorithm is an efficient and elegant solution for finding all SCCs in a directed graph. Its linear time complexity makes it suitable for large graphs, and it is widely used in applications like compiler optimization, social network analysis, and more.


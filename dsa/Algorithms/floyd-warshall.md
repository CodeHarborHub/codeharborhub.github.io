# Floyd-Warshall Algorithm

The Floyd-Warshall algorithm is an all-pairs shortest path algorithm that finds the shortest paths between all pairs of vertices in a weighted graph. It is particularly useful for dense graphs or when you need to calculate the shortest path between every pair of vertices.

## Algorithm Description

The Floyd-Warshall algorithm works by iteratively improving the shortest path between any two vertices (i, j) by considering an intermediate vertex k. The algorithm updates the shortest path matrix with the shortest distance found so far.

The algorithm uses a matrix `dist` to store the shortest distances between pairs of vertices. The key idea is to update this matrix by checking if a path through an intermediate vertex offers a shorter route than the direct path.

## Steps

1. Initialize the distance matrix `dist` with direct distances between vertices. If there is no direct edge between vertices, initialize it with infinity.
2. Set the distance from a vertex to itself as 0.
3. Iterate over all pairs of vertices (i, j) for each intermediate vertex k.
4. Update the distance matrix `dist[i][j]` if a shorter path is found through vertex k.

## Time Complexity

The time complexity of the Floyd-Warshall algorithm is O(V^3), where V is the number of vertices in the graph.

## Python Implementation

Here is a Python implementation of the Floyd-Warshall algorithm:

```python
def floyd_warshall(graph):
    """
    Floyd-Warshall algorithm to find the shortest paths between all pairs of vertices.

    :param graph: 2D list representing the adjacency matrix of the graph
    :return: 2D list representing the shortest distance matrix
    """
    # Number of vertices in the graph
    V = len(graph)

    # Initialize the distance matrix with the input graph matrix
    dist = [list(row) for row in graph]

    # Iterate over all intermediate vertices
    for k in range(V):
        # Iterate over all pairs of vertices
        for i in range(V):
            for j in range(V):
                # Update the distance matrix if a shorter path is found
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])

    return dist
```
# Example usage
if __name__ == "__main__":
    # Define the adjacency matrix of the graph
    # Infinity represents no direct path between vertices
    INF = float('inf')
    graph = [
        [0, 3, INF, 5],
        [2, 0, INF, 4],
        [INF, 1, 0, INF],
        [INF, INF, 2, 0]
    ]

    # Find the shortest paths between all pairs of vertices
    shortest_paths = floyd_warshall(graph)

    # Print the shortest distance matrix
    for row in shortest_paths:
        print(row)
## Explanation
The floyd_warshall function takes a graph represented as an adjacency matrix and returns the shortest distance matrix.
The outer loop iterates over all possible intermediate vertices k.
The nested loops iterate over all pairs of vertices (i, j) and update the distance dist[i][j] if a shorter path is found through vertex k.
The example usage demonstrates how to use the function and print the shortest distance matrix.

## Conclusion
The Floyd-Warshall algorithm is a powerful and simple algorithm for finding shortest paths in weighted graphs. Its cubic time complexity makes it suitable for smaller graphs, but it can handle dense graphs effectively.

---
id: a-star
title: A* Algorithm 
sidebar_label: A* Algorithm 
tags: [python, c++, programming, algorithms, A*, graph, shortest-path, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about A* Algorithm and its implementation in Python, and C++ with detailed explanations and examples.
---

# A* Algorithm

The A* Algorithm is an informed search algorithm used for finding the shortest path between two nodes in a graph. It is widely used in various applications such as pathfinding for games, AI, and robotics due to its efficiency and accuracy.

## How A* Algorithm Works

The A* Algorithm combines the advantages of Dijkstra's Algorithm and Greedy Best-First Search. It uses a priority queue to explore nodes based on the cost function:

𝑓(𝑛)=𝑔(𝑛)+ℎ(𝑛)

Where:
g(n) is the cost from the start node to the current node.
h(n) is the heuristic function that estimates the cost from the current node n to the goal node.

## Heuristics in A* Algorithm
The choice of the heuristic function h(n) is crucial for the efficiency of the A* Algorithm. Common heuristics include:

1. **Manhattan Distance:** Used for grid-based maps.
2. **Euclidean Distance:** Used for geometric spaces.
3. **Chebyshev Distance:** Used when diagonal movement is allowed.
The heuristic function should be admissible, meaning it never overestimates the actual cost to reach the goal.

## Complexity Analysis
The time complexity of the A* Algorithm is 
𝑂(𝑏𝑑)

WHERE:
b is the branching factor (the average number of successors per state) and 
d is the depth of the goal. The space complexity is also 
𝑂(𝑏𝑑) as it needs to store all generated nodes in the worst case.

## Comparison with Other Algorithms

1. **Dijkstra's Algorithm:** A* is generally faster because it uses heuristics to guide its search, while Dijkstra's explores all possible paths.
2. **Greedy Best-First Search:** A* is more accurate because it takes into account both the actual cost from the start and the estimated cost to the goal, while Greedy Best-First only considers the latter.

## Common Applications

1. **Game Development:** For pathfinding characters in video games.
2. **Robotics:** For navigating robots through environments.
3. **Geographic Information Systems (GIS):** For finding the shortest route in maps.

## Pseudocode
Here is the pseudocode for the A* Algorithm:

    ```pseudo
    function A*(start, goal)
        openSet := {start}
        cameFrom := empty map
        gScore := map with default value of Infinity
        gScore[start] := 0
        fScore := map with default value of Infinity
        fScore[start] := heuristic(start, goal)

        while openSet is not empty
            current := node in openSet with lowest fScore[] value
            if current == goal
                return reconstruct_path(cameFrom, current)

            openSet.Remove(current)
            for each neighbor of current
                tentative_gScore := gScore[current] + d(current, neighbor)
                if tentative_gScore < gScore[neighbor]
                    cameFrom[neighbor] := current
                    gScore[neighbor] := tentative_gScore
                    fScore[neighbor] := gScore[neighbor] + heuristic(neighbor, goal)
                    if neighbor not in openSet
                        openSet.Add(neighbor)

        return failure

    function reconstruct_path(cameFrom, current)
        total_path := {current}
        while current in cameFrom.Keys
            current := cameFrom[current]
            total_path.Prepend(current)
        return total_path
    ````

## Implementation in Python
    ```python
        import heapq

        def heuristic(a, b):
            return abs(a[0] - b[0]) + abs(a[1] - b[1])

        def a_star(graph, start, goal):
            open_set = []
            heapq.heappush(open_set, (0, start))
            came_from = {}
            g_score = {start: 0}
            f_score = {start: heuristic(start, goal)}

            while open_set:
                _, current = heapq.heappop(open_set)

                if current == goal:
                    return reconstruct_path(came_from, current)

                for neighbor in graph[current]:
                    tentative_g_score = g_score[current] + graph[current][neighbor]
                    if tentative_g_score < g_score.get(neighbor, float('inf')):
                        came_from[neighbor] = current
                        g_score[neighbor] = tentative_g_score
                        f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)
                        heapq.heappush(open_set, (f_score[neighbor], neighbor))

            return None

        def reconstruct_path(came_from, current):
            path = [current]
            while current in came_from:
                current = came_from[current]
                path.append(current)
            return path[::-1]


        # Example usage
        graph = {
            (0, 0): {(0, 1): 1, (1, 0): 1},
            (0, 1): {(0, 0): 1, (1, 1): 1, (0, 2): 1},
            (1, 0): {(0, 0): 1, (1, 1): 1, (2, 0): 1},
            (1, 1): {(1, 0): 1, (0, 1): 1, (1, 2): 1, (2, 1): 1},
            (2, 0): {(1, 0): 1, (2, 1): 1},
            (2, 1): {(2, 0): 1, (1, 1): 1, (2, 2): 1},
            (0, 2): {(0, 1): 1, (1, 2): 1},
            (1, 2): {(1, 1): 1, (0, 2): 1, (2, 2): 1},
            (2, 2): {(2, 1): 1, (1, 2): 1},
        }

        start = (0, 0)
        goal = (2, 2)
        print(a_star(graph, start, goal))
    ```


## Implementation in C++
    ```cpp
        #include <iostream>
        #include <vector>
        #include <queue>
        #include <unordered_map>
        #include <cmath>

        using namespace std;

        struct Node {
            int x, y, f, g, h;
            Node* parent;

            Node(int x, int y) : x(x), y(y), f(0), g(0), h(0), parent(nullptr) {}

            bool operator==(const Node& other) const {
                return x == other.x && y == other.y;
            }

            struct HashFunction {
                size_t operator()(const Node& node) const {
                    return hash<int>()(node.x) ^ hash<int>()(node.y);
                }
            };
        };

        int heuristic(Node* a, Node* b) {
            return abs(a->x - b->x) + abs(a->y - b->y);
        }

        vector<Node*> reconstructPath(unordered_map<Node*, Node*, Node::HashFunction>& cameFrom, Node* current) {
            vector<Node*> path;
            while (current != nullptr) {
                path.push_back(current);
                current = cameFrom[current];
            }
            reverse(path.begin(), path.end());
            return path;
        }       

        vector<Node*> aStar(Node* start, Node* goal, unordered_map<Node*, vector<Node*>, Node::HashFunction>& graph) {
            auto cmp = [](Node* left, Node* right) { return left->f > right->f; };
            priority_queue<Node*, vector<Node*>, decltype(cmp)> openSet(cmp);
            unordered_map<Node*, Node*, Node::HashFunction> cameFrom;
            unordered_map<Node*, int, Node::HashFunction> gScore;
            gScore[start] = 0;
            start->f = heuristic(start, goal);
            openSet.push(start);

            while (!openSet.empty()) {
                Node* current = openSet.top();
                openSet.pop();

                if (*current == *goal) {
                    return reconstructPath(cameFrom, current);
                }

                for (Node* neighbor : graph[current]) {
                    int tentativeGScore = gScore[current] + 1;
                    if (tentativeGScore < gScore[neighbor]) {
                        cameFrom[neighbor] = current;
                        gScore[neighbor] = tentativeGScore;
                        neighbor->f = tentativeGScore + heuristic(neighbor, goal);
                        openSet.push(neighbor);
                    }
                }
            }
            return {};
        }   

        int main() {
            Node* start = new Node(0, 0);
            Node* goal = new Node(2, 2);

            unordered_map<Node*, vector<Node*>, Node::HashFunction> graph;
            graph[start] = {new Node(0, 1), new Node(1, 0)};
            graph[new Node(0, 1)] = {start, new Node(1, 1), new Node(0, 2)};
            graph[new Node(1, 0)] = {start, new Node(1, 1), new Node(2, 0)};
            graph[new Node(1, 1)] = {new Node(1, 0), new Node(0, 1), new Node(1, 2), new Node(2, 1)};
            graph[new Node(2, 0)] = {new Node(1, 0), new Node(2, 1)};
            graph[new Node(2, 1)] = {new Node(2, 0), new Node(1, 1), new Node(2, 2)};
            graph[new Node(0, 2)] = {new Node(0, 1), new Node(1, 2)};
            graph[new Node(1, 2)] = {new Node(1, 1), new Node(0, 2), new Node(2, 2)};
            graph[new Node(2, 2)] = {new Node(2, 1), new Node(1, 2)};

            vector<Node*> path = aStar(start, goal, graph);
            for (Node* node : path) {
                cout << "(" << node->x << ", " << node->y << ")" << endl;
            }

            // Clean up dynamically allocated nodes
            for (auto& pair : graph) {
                delete pair.first;
                for (Node* node : pair.second) {
                    delete node;
                }
            }

            return 0;
        }
    ```

## Optimizations and Variations

1. **Bidirectional A*** **:** Runs two simultaneous searches—one forward from the start and one backward from the goal.
2. **Weighted A*** **:** Modifies the heuristic function to allow faster, though potentially suboptimal, solutions.
3. **Iterative Deepening A*** **:** Combines the benefits of depth-first and breadth-first search, useful for memory-constrained environments.

## Visualization Tools

1. **Pathfinding.js:** A library for visualizing pathfinding algorithms in JavaScript.
2. **Graphhopper:** An open-source routing library and server, ideal for map-based applications.
3. **Mazewar:** A web-based tool to visualize and understand different pathfinding algorithms.

## Conclusion
The A* Algorithm is a powerful and efficient pathfinding algorithm that can be implemented in various programming languages. By understanding its principles and applying the appropriate heuristic functions, you can leverage A* for a wide range of applications.

In this tutorial, we have covered the theoretical background, provided pseudocode, and demonstrated implementations in Python, Java, C++, and JavaScript. With this knowledge, you should be well-equipped to utilize the A* Algorithm in your projects.

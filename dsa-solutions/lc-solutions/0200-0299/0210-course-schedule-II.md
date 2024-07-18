---
id: course-schedule-II
title: Course Schedule II
sidebar_label: 0210 Course Schedule II
tags:
- Depth-First Search
- Topological Sort
- Graph
- Breadth-First Search
description: "This document provides a solution to the Course Schedule II problem."
---

## Problem
There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

For example, the pair `[0, 1]`, indicates that to take course 0 you have to first take course `1`.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.


### Example 1:

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
```

### Example 2:

```
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
```

### Example 3:

```
Input: numCourses = 1, prerequisites = []
Output: [0]
```

### Constraints:
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `ai != bi`
- All the pairs `[ai, bi]` are distinct.

## Solution
The code aims to solve the problem of determining whether it is possible to finish all the given courses without any cyclic dependencies. It uses the topological sort algorithm, specifically Kahn's algorithm, to solve this problem.

1. **Initialization**:
   - Create an empty adjacency list to represent the directed graph. Each node in the graph represents a course, and the edges represent the prerequisites.
   - Create an array called `indegree` of size `numCourses` and initialize all its elements to 0. The `indegree` array will keep track of the number of incoming edges to each course.
   - Create an empty vector `ans` to store the topological order of the courses.

2. **Building the Graph**:
   - Iterate over the `prerequisites` array, which contains pairs of courses indicating the prerequisites.
   - For each pair `[a, b]`, add an edge in the adjacency list from `b` to `a`. This indicates that course `b` must be completed before course `a`.
   - Increment the indegree of course `a` by 1, as it has one more prerequisite.

3. **Performing Topological Sort using Kahn's Algorithm**:
   - Create an empty queue `q` to store the nodes to visit.
   - Iterate over all the courses (0 to `numCourses-1`) and enqueue the courses with an indegree of 0 into the queue. These courses have no prerequisites and can be started immediately.
   - While the queue is not empty, do the following:
     - Dequeue the front element from the queue and store it in a variable `t`.
     - Add `t` to the `ans` vector to keep track of the topological order.
     - For each neighbor `x` of `t` in the adjacency list:
       - Decrement the indegree of `x` by 1 since we are removing the prerequisite `t`.
       - If the indegree of `x` becomes 0, enqueue `x` into the queue. This means that all the prerequisites of course `x` have been completed.

4. **Checking the Result**:
   - After the topological sort is complete, check if the size of the `ans` vector is equal to the total number of courses (`numCourses`).
   - If they are equal, it means that all the courses can be finished without any cyclic dependencies. Return `true`.
   - If the sizes are different, it implies that there is a cycle in the graph, and it is not possible to complete all the courses. Return `false`.


## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution
{
public:
	vector<int> findOrder(int V, int m, vector<vector<int>> prerequisites)
	{
		vector<int> adj[V];
		for (auto it : prerequisites) {
			adj[it[1]].push_back(it[0]);
		}



		int indegree[V] = {0};
		for (int i = 0; i < V; i++) {
			for (auto it : adj[i]) {
				indegree[it]++;
			}
		}

		queue<int> q;
		for (int i = 0; i < V; i++) {
			if (indegree[i] == 0) {
				q.push(i);
			}
		}
		vector<int> topo;
		while (!q.empty()) {
			int node = q.front();
			q.pop();
			topo.push_back(node);
			
			for (auto it : adj[node]) {
				indegree[it]--;
				if (indegree[it] == 0) q.push(it);
			}
		}

		if (topo.size() == V) return topo;
		return {};
	}
};
```
</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
    static int[] findOrder(int n, int m, ArrayList<ArrayList<Integer>> prerequisites) {
        // Form a graph
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            adj.get(prerequisites.get(i).get(1)).add(prerequisites.get(i).get(0));
        }



        int indegree[] = new int[n];
        for (int i = 0; i < n; i++) {
            for (int it : adj.get(i)) {
                indegree[it]++;
            }
        }


        Queue<Integer> q = new LinkedList<Integer>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                q.add(i);
            }
        }


        int topo[] = new int[n];
        int ind = 0;
        // o(v + e)
        while (!q.isEmpty()) {
            int node = q.peek();

            q.remove();
            topo[ind++] = node;
            // node is in your topo sort
            // so please remove it from the indegree

            for (int it : adj.get(node)) {
                indegree[it]--;
                if (indegree[it] == 0) q.add(it);
            }
        }


        if (ind == n) return topo;
        int[] arr = {};
        return arr;
    }
}
```

```Python
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adjList = [[] for _ in range(numCourses)]
        visited = [0] * numCourses # 0: unprocessed, 1: processing, 2: processed
        courses = []

        # build adjacency list
        for prereq in prerequisites:
            a, b = prereq[0], prereq[1]
            adjList[b].append(a)
        
        # cycle detection with topological sort
        def dfs(root: int) -> bool:
            if visited[root] == 1:
                return False
            if visited[root] == 2:
                return True

            visited[root] = 1

            for neighbor in adjList[root]:
                if not dfs(neighbor):
                    return False

            visited[root] = 2
            courses.append(root)

            return True
        
        # iterate through every unprocessed course
        for course in range(numCourses):
            if visited[course] == 0 and not dfs(course):
                return []

        # dfs topological sort returns sorting in reversed order
        courses = reversed(courses)
        
        return courses
```

</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(V+E)$

> **Reason**: where V = no. of nodes and E = no. of edges. This is a simple BFS algorithm.

### Space Complexity: $O(N) + O(N) ~ O(2N)$


## References

- **LeetCode Problem**: [Course Schedule ii](https://leetcode.com/problems/course-schedule-ii/description/)

- **Leetcode Solutions:** [Course Schedule ii](https://leetcode.com/problems/course-schedule-ii/solutions/)

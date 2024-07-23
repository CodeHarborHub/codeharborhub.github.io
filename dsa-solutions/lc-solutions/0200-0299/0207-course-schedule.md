---
id: course-schedule
title: Course Schedule
sidebar_label: 0207 Course Schedule
tags:
- Depth-First Search
- Topological Sort
- Graph
- Breadth-First Search
- Recursion
description: "This document provides a solution to the Course Schedule problem."
---

## Problem
You are given a total of numCourses courses labeled from 0 to numCourses - 1. You are also given an array prerequisites where $\text{prerequisites[i]} = [ a^i , b^i ]$ indicates that you must take course $b^i$ first if you want to take course $a^i$ .

For example, the pair [0, 1] indicates that to take course 0 you have to first take course 1.
Return `true` if you can finish all courses. Otherwise, return `false`.

### Example 1:

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
```

### Example 2:

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

### Constraints:
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses `
- All the pairs prerequisites[i] are **unique**.
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
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool canFinish(int n, vector<vector<int>>& prerequisites) {
        vector<int> adj[n];
        vector<int> indegree(n, 0);
        vector<int> ans;

        for(auto x: prerequisites){
            adj[x[0]].push_back(x[1]);
            indegree[x[1]]++;
        }

        queue<int> q;
        for(int i = 0; i < n; i++){
            if(indegree[i] == 0){
                q.push(i);
            }
        }

        while(!q.empty()){
            auto t = q.front();
            ans.push_back(t);
            q.pop();

            for(auto x: adj[t]){
                indegree[x]--;
                if(indegree[x] == 0){
                    q.push(x);
                }
            }
        }
        return ans.size() == n;
    }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean canFinish(int n, int[][] prerequisites) {
        List<Integer>[] adj = new List[n];
        int[] indegree = new int[n];
        List<Integer> ans = new ArrayList<>();

        for (int[] pair : prerequisites) {
            int course = pair[0];
            int prerequisite = pair[1];
            if (adj[prerequisite] == null) {
                adj[prerequisite] = new ArrayList<>();
            }
            adj[prerequisite].add(course);
            indegree[course]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        while (!queue.isEmpty()) {
            int current = queue.poll();
            ans.add(current);

            if (adj[current] != null) {
                for (int next : adj[current]) {
                    indegree[next]--;
                    if (indegree[next] == 0) {
                        queue.offer(next);
                    }
                }
            }
        }

        return ans.size() == n;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution:
    def canFinish(self, n: int, prerequisites: List[List[int]]) -> bool:
        adj = [[] for _ in range(n)]
        indegree = [0] * n
        ans = []

        for pair in prerequisites:
            course = pair[0]
            prerequisite = pair[1]
            adj[prerequisite].append(course)
            indegree[course] += 1

        queue = deque()
        for i in range(n):
            if indegree[i] == 0:
                queue.append(i)

        while queue:
            current = queue.popleft()
            ans.append(current)

            for next_course in adj[current]:
                indegree[next_course] -= 1
                if indegree[next_course] == 0:
                    queue.append(next_course)

        return len(ans) == n
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N + P)$

> **Reason**: Where N is the number of courses and P is the number of prerequisites.

### Space Complexity: $O(N + P)$

:::note
**Reason**: We use an adjacency list to store the graph and an array to store the in-degree of each node.
:::

## References

- **LeetCode Problem**: [Course Schedule](https://leetcode.com/problems/course-schedule/description/)

- **Leetcode Solutions:** [Course Schedule](https://leetcode.com/problems/course-schedule/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>

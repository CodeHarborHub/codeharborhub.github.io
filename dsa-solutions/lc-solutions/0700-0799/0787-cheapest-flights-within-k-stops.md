---
id: cheapest-flights-within-k-stops
title: Cheapest Flights Within K Stops
sidebar_label: 0787 - Cheapest-Flights-Within-K-Stops
tags:
  - Dfs
  - Bfs
  - JavaScript
  - TypeScript
  - c++
description: "This is a solution to the Cheapest Flights Within K Stops problem on LeetCode."
---

In this page, we will solve the Cheapest Flights Within K Stops problem using two different approaches: Breadth First Search and Depth First Search technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

### Examples

**Example 1:**

```plaintext
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
```

**Example 2:**

```plaintext
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
```


### Constraints

- `1 <= n <= 100`
- `0 <= flights.length <= (n * (n - 1) / 2)`
- `flights[i].length == 3`
- `0 <= fromi, toi < n`
- `fromi != toi`
- `1 <= pricei <= 104`
- `0 <= src, dst, k < n`
- `src != dst`
- There will not be any multiple flights between two cities.



---

## Solution for Cheapest Flights Within K Stops Problem

### Intuition and Approach

To solve the problem of finding the minimum cost to reach a destination from a source with a restriction on the number of stops, we can use Dijkstra’s Algorithm with a key modification. Instead of prioritizing minimum distance, we prioritize the minimum number of stops in the priority queue. This ensures that we explore paths with fewer stops, which helps us avoid premature termination of the algorithm due to exceeding the stop limit.

However, since the number of stops increases monotonically (by 1 each iteration), we don't actually need a priority queue. A simple queue is sufficient because we always pop the element with the lesser number of stops first, thus eliminating the extra log(N) complexity associated with insertion and deletion in a priority queue. This change improves the algorithm's efficiency.

<Tabs>
 <tabItem value="Breadth First Search" label="Breadth First Search">
  
### Approach 1: Breadth First Search

To solve the problem, create an adjacency list and initialize a queue to store pairs. Set up a distance array with large values to mark unvisited nodes and set the source node's distance to 0. Push the source node into the queue with distance 0 and 0 stops. Process the queue by popping elements, and for each adjacent node, update the distance and push it back into the queue if the current distance is less and the stop count is below K. Continue until the queue is empty. If the destination is reached within the required stops, return the distance; otherwise, return -1 if no valid path exists.

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    var findCheapestPrice = function(n, flights, src, dst, K) {
        let graph = {} // {from: { to: price }, {to: price}}
        
        for (let [source, destination, price] of flights){
            if (!graph.hasOwnProperty(source)) {
                graph[source] = {}
            }
            graph[source][destination] = price
        }

        let queue = [[0,src,0]]
        
        while (queue.length ) {     
            let [price, city, connections] = queue.shift()
            if (city == dst) return price
            if (connections > K) continue
            
            if (graph[city]) {
                for (let nextStops in graph[city]) {
                    let cost = graph[city][nextStops]
                    queue.push([cost + price, nextStops, connections + 1])
                }
            }
            queue.sort((a,b) => a[0]-b[0])
            
        }
        return -1
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/> 
   ```typescript
    function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
        const adj = new Map();
        const visited = new Array(n).fill(Number.MAX_VALUE);
        visited[src] = 0;
    
        for (const [from, to, price] of flights) {
            if (!adj.has(from)) {
                adj.set(from, []);
            }
            adj.get(from).push([to, price]);
        }
    
        const queue = [[src, 0]];
        k++;

        while (k-- > 0 && queue.length > 0) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [currNode, currPrice] = queue.shift();
                if (adj.has(currNode)) {
                    for (const [nextNode, nextPrice] of adj.get(currNode)) {
                        const newPrice = currPrice + nextPrice;
                        if (newPrice < visited[nextNode]) {
                            visited[nextNode] = newPrice;
                            queue.push([nextNode, newPrice]);
                        }
                    }
                }
            }
        }
    
        return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];
    };
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution:
  def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
    graph = [[] for _ in range(n)]
    minHeap = [(0, src, k + 1)]  # (d, u, stops)
    dist = [[math.inf] * (k + 2) for _ in range(n)]

    for u, v, w in flights:
      graph[u].append((v, w))

    while minHeap:
      d, u, stops = heapq.heappop(minHeap)
      if u == dst:
        return d
      if stops > 0:
        for v, w in graph[u]:
          newDist = d + w
          if newDist < dist[v][stops - 1]:
            dist[v][stops - 1] = newDist
            heapq.heappush(minHeap, (newDist, v, stops - 1))

    return -1

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    class Solution {
        public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
            List<Pair<Integer, Integer>>[] graph = new List[n];
            // (d, u, stops)
            Queue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
            int[][] dist = new int[n][k + 2];
            Arrays.stream(dist).forEach(A -> Arrays.fill(A, Integer.MAX_VALUE));

            for (int i = 0; i < n; ++i)
            graph[i] = new ArrayList<>();

            for (int[] f : flights) {
            final int u = f[0];
            final int v = f[1];
            final int w = f[2];
            graph[u].add(new Pair<>(v, w));
            }

            minHeap.offer(new int[] {0, src, k + 1}); // Start with node src with d == 0
            dist[src][k + 1] = 0;

            while (!minHeap.isEmpty()) {
            final int d = minHeap.peek()[0];
            final int u = minHeap.peek()[1];
            final int stops = minHeap.poll()[2];
            if (u == dst)
                return d;
            if (stops > 0)
                for (Pair<Integer, Integer> pair : graph[u]) {
                final int v = pair.getKey();
                final int w = pair.getValue();
                final int newDist = d + w;
                if (newDist < dist[v][stops - 1]) {
                    dist[v][stops - 1] = newDist;
                    minHeap.offer(new int[] {d + w, v, stops - 1});
                }
                }
            }

            return -1;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
    class Solution {
    public:
        int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
            
            //{to,price}
            vector<pair<int,int>> adj[n];

            for(auto x : flights){
                
                int from = x[0];
                int to = x[1];
                int price = x[2];

                adj[from].push_back({to,price});
            }

            vector<int> dist(n,1e9);
            dist[src] = 0;
            
            // {stops,{node,dist}}
            queue<pair<int,pair<int,int>>> q;
            q.push({0,{src,0}});
            
            while(!q.empty()){

            auto it = q.front();
            q.pop();

            int stops = it.first;
            int node = it.second.first;
            int cost = it.second.second;

            if(stops>k) continue;

            for(auto itr : adj[node]){
                int adjNode = itr.first;
                int edgw = itr.second;

                if(cost+edgw < dist[adjNode] && stops<=k){
                    dist[adjNode] = cost + edgw;
                    q.push({stops+1,{adjNode,cost+edgw}});
                }
            }

            }

            if(dist[dst]==1e9) return -1;
            return dist[dst];
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(N)$$
- Space Complexity: $$O(|E|+|V|)$$
- Where `N` is the Number of flights / Number of edges..
- Where `E` = Number of edges (flights.size()) and `V` = Number of Airports.



</tabItem>
<tabItem value="Depth First Search" label="Depth First Search">

### Approach 2: Depth First Search
 
The cheapest flight price from a source city to a destination city with a maximum number of allowed stops using Depth-First Search (DFS) and memoization. The dfs function recursively explores all possible flight paths, returning 0 when the destination is reached and a large constant inf for invalid paths with negative stops. A memoization table dp stores intermediate results to avoid redundant calculations.

In the findCheapestPrice function, dp is initialized to -1, and the flight data is processed to build an adjacency list adj and a cost matrix cost. The dfs function is then called with k + 1 stops, as the problem allows up to k stops plus the destination. The function returns the minimum cost found or -1 if the destination is unreachable within the allowed stops, ensuring an efficient exploration of all valid routes.



#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    var findCheapestPrice = function (n, flights, src, dst, k) {
        let map = {}

        for (let [x, y, z] of flights) {
            if (!map[y]) map[y] = []
            map[y].push([x, y, z])
        }

        let min = Infinity;

        let iterate = (end, sum, count) => {
            if (count > k || sum > min) return;

            if (end == src) {
                min = Math.min(min, sum)
                return;
            }
            if (!map[end]) return;

            for (let [x, y, z] of map[end]) {
                iterate(x, sum + z, count + 1)
            }
        }
        iterate(dst, 0, -1)
        return min == Infinity ? -1 : min;
    };
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/>
   ```typescript
    class Solution {
    private readonly inf: number = 1e8;
    private dp: number[][];

        constructor() {
            this.dp = Array.from({ length: 101 }, () => Array(101).fill(-1));
        }

        private dfs(node: number, k: number, dest: number, cost: number[][], adj: number[][]): number {
            if (k < 0) {
                return this.inf;
            }

            if (node === dest) {
                return 0;
            }

            if (this.dp[node][k] !== -1) {
                return this.dp[node][k];
            }

            let ans: number = this.inf;
            for (let i of adj[node]) {
                ans = Math.min(ans, cost[node][i] + this.dfs(i, k - 1, dest, cost, adj));
            }

            return this.dp[node][k] = ans;
        }

        public findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
            // Reset dp array
            this.dp = Array.from({ length: 101 }, () => Array(101).fill(-1));

            let cost: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
            let adj: number[][] = Array.from({ length: n }, () => []);

            for (let e of flights) {
                adj[e[0]].push(e[1]);
                cost[e[0]][e[1]] = e[2];
            }

            let ans: number = this.dfs(src, k + 1, dst, cost, adj);
            return ans === this.inf ? -1 : ans;
        }
    }

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int: 
        adjlist = [[] for _ in range(n)]


        for source, dest, weight in flights:
            adjlist[dest].append((source, weight))
        # print(adjlist)
        dptable = [[float("inf")]*(n) for _ in range(k+2)]
        dptable[0][src] = 0

        for row in range(1, k+2):
            for col in range(n):            
                dptable[row][col] = dptable[row-1][col]

                for pred, wt in adjlist[col]:
                    dptable[row][col] = min(dptable[row][col], dptable[row-1][pred]+wt)

                        
        for row in dptable:
            print(row)
        return dptable[k+1][dst] if dptable[k+1][dst] != inf else -1
        
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
   import java.util.Vector;
   class Solution {
        int dp[][] = new int[101][101];
        int solve(int src, int dst, int k, Map<Integer, Vector<Pair<Integer, Integer>>> mp){
            if(src == dst){
                if(k >= 0)
                    return 0;
                
                return (int)1e8;
            }

            if(k <= 0)
                return (int)1e8;

            if(dp[src][k] != -1) return dp[src][k];

            int a = (int)1e8;
                if(mp.containsKey(src)){
                for (Pair<Integer, Integer> x : mp.get(src)) {
                    a = Math.min(a, solve(x.getValue(), dst, k - 1, mp) + x.getKey());
                }
        }
            return dp[src][k] = a;    
        }
        public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
            Map<Integer, Vector<Pair<Integer, Integer>>> mp = new HashMap<>();
            for(int[] x: flights){
                Vector<Pair<Integer, Integer>> vec = new Vector<>();
                if(mp.containsKey(x[0])){
                    vec = mp.get(x[0]);
                    vec.add(new Pair<>(x[2], x[1]));
                    mp.put(x[0], vec);
                }
                else{
                    vec.add(new Pair<>(x[2], x[1]));
                    mp.put(x[0], vec);
                }
            }

            for(int i=0; i<101; i++){
                Arrays.fill(dp[i], -1);
            }

            int ans = solve(src, dst, k+1, mp);
            return  ans >= 1e8 ? -1 : ans;
        }
   }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
    class Solution {
    const int inf = 1e8;
    int dp[101][101];

    public:
        int dfs(int node, int k, int dest, vector<vector<int>> &cost, vector<int> adj[])
        {
            if (k < 0)
                return inf;

            if (node == dest)
                return 0;

            if (dp[node][k] != -1)
                return dp[node][k];

            int ans = inf;
            for (auto i : adj[node])
                ans = min(ans, cost[node][i] + dfs(i, k - 1, dest, cost, adj));

            return dp[node][k] = ans;
        }
        int findCheapestPrice(int n, vector<vector<int>> &flights, int src, int dst, int k)
        {
            memset(dp, -1, sizeof dp);

            vector<vector<int>> cost(n, vector<int>(n));
            vector<int> adj[n];
            for (auto e : flights)
            {
                adj[e[0]].push_back(e[1]);
                cost[e[0]][e[1]] = e[2];
            }

            int ans = dfs(src, k + 1, dst, cost, adj);
            return ans == inf ? -1 : ans;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(|E|+|V|)$$
- Space Complexity: $$O(|E|+|V|)$$
- Where `E` = Number of edges (flights.size()) and `V` = Number of Airports.


</tabItem>
</Tabs>


## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/cheapest-flights-within-k-stops/description/)
- **Solution Link:** [Cheapest Flights Within K Stops Solution on LeetCode](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/115541/java-c-python-priority-queue-solution-tle-now/)

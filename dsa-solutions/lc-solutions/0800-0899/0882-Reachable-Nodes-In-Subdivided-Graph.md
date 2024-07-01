---
id: middle-of-the-linked-list
title: Middle of the Linked List
sidebar_label: 882 - Middle of the Linked List
tags:
  - Leet code
description: "Solution to leetocde 882"
---
    
## Problem Statement
You are given an undirected graph (the "original graph") with n nodes labeled from 0 to n - 1. You decide to subdivide each edge in the graph into a chain of nodes, with the number of new nodes varying between each edge.

The graph is given as a 2D array of edges where edges[i] = [ui, vi, cnti] indicates that there is an edge between nodes ui and vi in the original graph, and cnti is the total number of new nodes that you will subdivide the edge into. Note that cnti == 0 means you will not subdivide the edge.

To subdivide the edge [ui, vi], replace it with (cnti + 1) new edges and cnti new nodes. The new nodes are x1, x2, ..., xcnti, and the new edges are [ui, x1], [x1, x2], [x2, x3], ..., [xcnti-1, xcnti], [xcnti, vi].

In this new graph, you want to know how many nodes are reachable from the node 0, where a node is reachable if the distance is maxMoves or less.

Given the original graph and maxMoves, return the number of nodes that are reachable from node 0 in the new graph.

### Example 1

**Input**: `edges = [[0,1,10],[0,2,1],[1,2,2]], maxMoves = 6, n = 3`

**Output**: `13`

**Explanation**:
The edge subdivisions are shown in the image above.
The nodes that are reachable are highlighted in yellow.

### Example 2

**Input**: `edges = [[0,1,4],[1,2,6],[0,2,8],[1,3,1]], maxMoves = 10, n = 4`

**Output**: `23`


### Constraints
- `0 <= edges.length <= min(n * (n - 1) / 2, 104)`
- `edges[i].length == 3`
- `0 <= ui < vi < n`
- `There are no multiple edges in the graph.`
- `0 <= cnti <= 104`
- `0 <= maxMoves <= 109`
- `1 <= n <= 3000`


### Approach
Go with normal dijkstra algorithm with the above modified graph but with extra condition that we update the distance array if distance of source node to parent node + edge weight <= maxMoves. We also maintain a parent map to store the path of arrival to the nodes.

And at last we iterate through every edge(u,v) with following 3 conditions:

If node u is parent of v or vice versa then we can visit all the subnodes between u and v.
If either of the node(u,v) cannot be visited from the source node (i.e. 0) then no of nodes that can be visited between u and v is maxMoves - distance of the node that can be visited from source node
If both nodes u,v can be visited from the source node(0) then ans is min(maxMoves - dist[i[0]] + maxMoves - dist[i[1]],i[2]);

**Time complexity:** O(ElogV) --> dijkstra

**Space complexity:** 
O(V) --> to store the distance array


### Code implementation

### Python Solution

```python
    def reachableNodes(self, edges, M, N):
        e = collections.defaultdict(dict)
        for i, j, l in edges: e[i][j] = e[j][i] = l
        pq = [(-M, 0)]
        seen = {}
        while pq:
            moves, i = heapq.heappop(pq)
            if i not in seen:
                seen[i] = -moves
                for j in e[i]:
                    moves2 = -moves - e[i][j] - 1
                    if j not in seen and moves2 >= 0:
                        heapq.heappush(pq, (-moves2, j))
        res = len(seen)
        for i, j, k in edges:
            res += min(seen.get(i, 0) + seen.get(j, 0), e[i][j])
        return res
```

### C++ Solution

```cpp
class Solution {
public:
    int reachableNodes(vector<vector<int>>& edges, int maxMoves, int n) {
        vector<vector<pair<int,int>>>adj(n);
        for(auto i:edges)
        {
            adj[i[0]].push_back({i[1],i[2]+1});
            adj[i[1]].push_back({i[0],i[2]+1});
        }
        vector<int>dist(n,1e8);
        dist[0] = 0;
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> q;
        map<int,int>par;
        par[0] = 0;
        q.push({0,0});
        while(!q.empty())
        {
            int node = q.top().second;
            int wt = q.top().first;
            q.pop();
            if(wt > maxMoves) continue;
            for(auto i:adj[node])
            {
                if(wt + i.second <= maxMoves && dist[i.first] > wt + i.second)
                {
                    par[i.first] = node;
                    dist[i.first] = wt + i.second;
                    q.push({dist[i.first],i.first});
                }
            }
        }
        int ans = 0;
        for(auto i:edges)
        {

            if(((par.count(i[0]) && par[i[0]] == i[1]) || (par.count(i[1]) && par[i[1]] == i[0]))) 
                ans += i[2];
            else if(dist[i[0]] == 1e8 && dist[i[1]] != 1e8)
                ans += maxMoves - dist[i[1]];
            else if(dist[i[0]] != 1e8 && dist[i[1]] == 1e8)
                ans += maxMoves - dist[i[0]];  
            else if(dist[i[0]] != 1e8 && dist[i[1]] != 1e8)
                ans += min(2*maxMoves - dist[i[0]] - dist[i[1]],i[2]);
        }
        for(auto i:dist) ans += (i != 1e8);
        return ans;
    }
};
```

### Java Solution

```java
class Solution {
    public static int size(ListNode head){
        int cnt=0;
        while(head!=null){
            head = head.next;
            cnt++;
        }
        return cnt;
    }
    public ListNode middleNode(ListNode head) {

        ListNode temp = head;
    
        int size = size(head);

        for(int i=0; i<size/2; i++){
            temp=temp.next;
        }

        return temp;

        
        
    }
}

```

### JavaScript Solution

```javascript
const initializeGraph = (n) => { let G = []; for (let i = 0; i < n; i++) { G.push([]); } return G; };
const addEdgeWithCostToG = (G, Edges) => { for (const [u, v, cost] of Edges) { G[u].push([v, cost]); G[v].push([u, cost]); } };

const reachableNodes = (edges, maxMoves, n) => {
    let g = initializeGraph(n);
    addEdgeWithCostToG(g, edges);
    return dijkstra(g, n, edges, maxMoves);
};

const MIN = Number.MIN_SAFE_INTEGER;
const dijkstra = (g, n, edges, maxMoves) => {
    let pq = new MaxPriorityQueue({ priority: x => x[0] });
    let blood = Array(n).fill(MIN); // for each node, save maximum moves left to reach each node
    pq.enqueue([maxMoves, 0]);
    let res = 0;
    while (pq.size()) {
        let [hp, cur] = pq.dequeue().element;
        if (blood[cur] != MIN) continue;
        blood[cur] = hp;
        res++;
        for (const [next_node, cost] of g[cur]) {
            let next_hp = hp - cost - 1; // cut the cost for move to adjacent child
            if (next_hp < 0 || blood[next_node] != MIN) continue;
            pq.enqueue([next_hp, next_node]);
        }
    }
    for (const [u, v, cost] of edges) {
        let uv = blood[u] == MIN ? 0 : blood[u];
        let vu = blood[v] == MIN ? 0 : blood[v];
        res += Math.min(cost, uv + vu);
    }
    return res;
};
```
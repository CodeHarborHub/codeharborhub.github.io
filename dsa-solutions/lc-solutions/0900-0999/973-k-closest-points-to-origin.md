---
id: k-closest-points-to-origin
title: 973. K Closest Points to Origin
sidebar_label: 973. K Closest Points to Origin

tags:
- Array
- Math
- Priority Queue


description: "This is a solution to the 973. K Closest Points to Origin
 problem on LeetCode."
---

## Problem Description
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
### Examples
**Example 1:**

```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

```

**Example 2:**
```
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```

### Constraints
- `1 <= k <= points.length <= 10^4`
- `-10^4 <= xi, yi <= 10^4`

## Solution for973. K Closest Points to Origin


<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
    function kClosest(points, k) {
        // Calculate the distance of each point from the origin
        points.sort((a, b) => {
            const distA = a[0] * a[0] + a[1] * a[1];
            const distB = b[0] * b[0] + b[1] * b[1];
            return distA - distB;
        });

        // Return the first k points
        return points.slice(0, k);
    }


      const input = points = [[1,3],[-2,2]], k = 1
      const output = kClosest(input , k)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(nlogn) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function kClosest(points, k) {
    const pq = new MinPriorityQueue({ priority: (point) => point[0] });

    for (let i = 0; i < points.length; i++) {
        const x = points[i][0];
        const y = points[i][1];
        const dist = x * x + y * y;
        pq.enqueue([dist, i]);
    }

    const ans = [];
    for (let i = 0; i < k; i++) {
        const [_, index] = pq.dequeue().element;
        ans.push(points[index]);
    }

    return ans;
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
 class Solution {
    kClosest(points: number[][], k: number): number[][] {
        let pq = new MinPriorityQueue<{ dist: number, index: number }>({
            priority: (point) => point.dist
        });

        for (let i = 0; i < points.length; i++) {
            let x = points[i][0];
            let y = points[i][1];
            let z = x * x + y * y;
            pq.enqueue({ dist: z, index: i });
        }

        let ans: number[][] = [];
        while (k--) {
            let { index } = pq.dequeue().element;
            ans.push(points[index]);
        }
        return ans;
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
  import heapq

class Solution:
    def kClosest(self, points, k):
        pq = []
        for i, (x, y) in enumerate(points):
            dist = x * x + y * y
            heapq.heappush(pq, (dist, i))

        ans = []
        for _ in range(k):
            _, i = heapq.heappop(pq)
            ans.append(points[i])
        return ans

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
 import java.util.PriorityQueue;

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);

        for (int i = 0; i < points.length; i++) {
            int x = points[i][0];
            int y = points[i][1];
            int z = x * x + y * y;
            pq.offer(new int[] { z, i });
        }

        int[][] ans = new int[k][2];
        for (int i = 0; i < k; i++) {
            int index = pq.poll()[1];
            ans[i] = points[index];
        }
        return ans;
    }
}

 ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        vector<vector<int>>ans;
        priority_queue<pair<int,int> , vector<pair<int,int>> , greater<pair<int,int>>>pq;
        for(int i=0;i<points.size();i++)
        {
            int x=points[i][0];
            int y=points[i][1];
            int z = x*x + y*y;
            pq.push({z , i});
        }

        while(k--)
        {
            int i = pq.top().second;
            pq.pop();
            ans.push_back(points[i]);
        }
        return ans;
    }
};
    ```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [2348. Number of Zero-Filled Subarrays](https://leetcode.com/problems/k-closest-points-to-origin/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/k-closest-points-to-origin/description/)


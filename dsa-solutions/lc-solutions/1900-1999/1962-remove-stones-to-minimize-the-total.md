---
id: remove-stones-to-minimize-the-total
title: Remove Stones to Minimize the Total
sidebar_label: 1962. Remove Stones to Minimize the Total
tags:
- Array
- Greedy
- Heap (Priority Queue)

description: "This is a solution to the Remove Stones to Minimize the Total problem on LeetCode."
---

## Problem Description
You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:

Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
Notice that you can apply the operation on the same pile more than once.

Return the minimum possible total number of stones remaining after applying the k operations.

floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).

### Examples

**Example 1:**
```
Input: piles = [5,4,9], k = 2
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12.

```

**Example 2:**
```
Input: piles = [4,3,6,7], k = 3
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [4,3,3,7].
- Apply the operation on pile 3. The resulting piles are [4,3,3,4].
- Apply the operation on pile 0. The resulting piles are [2,3,3,4].
The total number of stones in [2,3,3,4] is 12.
```


### Constraints
- `1 <= piles.length <= 10^5`
- `1 <= piles[i] <= 10^4`
- `1 <= k <= 10^5`

## Solution for Remove Stones to Minimize the Total Problem
### Intuition

The problem requires reducing the total number of stones in a collection of piles through a series of operations. Each operation involves taking the largest pile and removing half (rounded down) of its stones. The goal is to perform this operation `k` times and determine the minimum possible total number of stones remaining.

To efficiently manage the piles and always access the largest pile in constant time, we use a max heap (priority queue). This data structure allows us to repeatedly extract and modify the largest element efficiently.

### Approach

1. **Heap Initialization**:
   - Convert the given `piles` array into a max heap. This involves sorting the array in descending order to simulate the max heap property.

2. **Heap Operations**:
   - Perform the given operation `k` times:
     - Extract the largest pile (root of the heap).
     - Reduce the pile size by half (rounded down).
     - Reinsert the modified pile back into the heap, maintaining the max heap property using the `heapifyDown` function.

3. **Summing Remaining Stones**:
   - After completing the `k` operations, sum up all the remaining stones in the heap to get the final result.

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
      const minStoneSum = ( piles, k ) => {
      let c = Array(10001).fill(0), s = 0
      piles.forEach( i => c[i]++ )
      for ( let i = c.length-1; i > 0; i-- )
          while ( c[i]-- > 0 )
              k-- > 0 ? c[Math.ceil(i/2)]++ : s += i
      return s
}
      const input = [5,4,9], k = 2
     
      const output =minStoneSum(input , k)
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

    - Time Complexity: $ O(nlogn) $ 
    - Space Complexity: $ O(n) $ 

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
    const minStoneSum = ( piles, k ) => {
      let c = Array(10001).fill(0), s = 0
      piles.forEach( i => c[i]++ )
      for ( let i = c.length-1; i > 0; i-- )
          while ( c[i]-- > 0 )
              k-- > 0 ? c[Math.ceil(i/2)]++ : s += i
      return s
}
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    minStoneSum(piles: number[], k: number): number {
        const pq = new MaxPriorityQueue<number>({ priority: (x) => x });
        for (let i of piles) {
            pq.enqueue(i);
        }

        for (let i = 0; i < k; i++) {
            let x = pq.dequeue().element;
            x = x - Math.floor(x / 2);
            pq.enqueue(x);
        }

        let ans = 0;
        while (!pq.isEmpty()) {
            ans += pq.dequeue().element;
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
    def minStoneSum(self, piles, k):
        pq = [-x for x in piles]  # Using negative values for max heap
        heapq.heapify(pq)

        for _ in range(k):
            x = -heapq.heappop(pq)
            x = x - x // 2
            heapq.heappush(pq, -x)

        return -sum(pq)

   ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.PriorityQueue;

class Solution {
    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);
        for (int i : piles) {
            pq.add(i);
        }

        for (int i = 0; i < k; i++) {
            int x = pq.poll();
            x = x - x / 2;
            pq.add(x);
        }

        int ans = 0;
        while (!pq.isEmpty()) {
            ans += pq.poll();
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
    int minStoneSum(vector<int>& piles, int k) {
        priority_queue<int>pq;
        for(auto i :piles)
        {
            pq.push(i);
        }

        for(int i=0;i<k;i++)
        {
            int x= pq.top();
            pq.pop();
            x=x-x/2;
            pq.push(x);
        }

        int ans=0;
         while(!pq.empty()){
            ans+=pq.top();   
            pq.pop();
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

- **LeetCode Problem**: [Remove Stones to Minimize the Total](https://leetcode.com/problems/remove-stones-to-minimize-the-total/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solution)


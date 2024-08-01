---
id: find-k-pairs-with-smallest-sums
title: Find K Pairs with Smallest Sums
sidebar_label: 0373-Find K Pairs with Smallest Sums
tags:
  - priority queue
  - Leet code
description: "Solution to leetocde 373"
---

## Problem Description

You are given two integer arrays `nums1` and `nums2` sorted in non-decreasing order and an integer `k`.

Define a pair `(u, v)` which consists of one element from the first array and one element from the second array.

Return the `k` pairs `(u1, v1)`, `(u2, v2)`, ..., `(uk, vk)` with the smallest sums.

### Examples

### Example 1:

```
 Input: nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3
 Output: [[1, 2], [1, 4], [1, 6]]
 Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

### Example 2:

```
 Input: nums1 = [1, 1, 2], nums2 = [1, 2, 3], k = 2
 Output: [[1, 1], [1, 1]]
 Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```

## Constraints:

- $1 <= nums1.length, nums2.length <= 10^5$
- $-10^9 <= nums1[i], nums2[i] <= 10^9$
- $`nums1` and `nums2` both are sorted in non-decreasing order.$
- $1 <= k <= 10^4$
- $k <= nums1.length * nums2.length$

Certainly! Here is the algorithm for finding the k smallest pairs with the smallest sums:

## Algorithm

1. **Initialize a Max-Heap**:

   - Use a max-heap (priority queue) to keep track of the k smallest pairs by their sums. The max-heap will allow us to efficiently manage the top k smallest pairs.

2. **Iterate Through Pairs**:

   - Use two nested loops to iterate through all possible pairs formed by taking one element from `nums1` and one from `nums2`.
   - For each pair `(nums1[i], nums2[j])`:
     - Calculate the sum of the pair: `sum = nums1[i] + nums2[j]`.

3. **Heap Management**:

   - If the heap has fewer than k elements, push the current pair and its sum into the heap.
   - If the heap already contains k elements:
     - Compare the current pair's sum with the maximum sum in the heap (the top element).
     - If the current pair's sum is smaller, pop the top element from the heap and push the current pair into the heap.
     - If the current pair's sum is greater than or equal to the maximum sum in the heap, break the inner loop to avoid unnecessary comparisons. This optimization works because `nums2` is sorted; once a pair's sum exceeds the largest in the heap, subsequent pairs in the inner loop will only get larger.

4. **Extract Results**:
   - After processing all pairs, extract all pairs from the heap. These pairs will be in descending order of their sums because of the max-heap.
   - Reverse the result list to get the pairs in ascending order of their sums.

## C++ Solution

```cpp
#include <vector>
#include <queue>
#include <utility>

using namespace std;

class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> ans;
        priority_queue<pair<int, pair<int, int>>> pq;

        for (int i = 0; i < nums1.size(); i++) {
            for (int j = 0; j < nums2.size(); j++) {
                int sum = nums1[i] + nums2[j];

                if (pq.size() < k) {
                    pq.push({sum, {nums1[i], nums2[j]}});
                } else if (sum < pq.top().first) {
                    pq.pop();
                    pq.push({sum, {nums1[i], nums2[j]}});
                } else {
                    break;
                }
            }
        }

        while (!pq.empty()) {
            ans.push_back({pq.top().second.first, pq.top().second.second});
            pq.pop();
        }

        reverse(ans.begin(), ans.end());  // Reverse to get the pairs in ascending order.
        return ans;
    }
};
```

## Python Solution

```python
import heapq

class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
        pq = []
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                sum = nums1[i] + nums2[j]
                if len(pq) < k:
                    heapq.heappush(pq, (-sum, nums1[i], nums2[j]))
                else:
                    if sum < -pq[0][0]:
                        heapq.heappop(pq)
                        heapq.heappush(pq, (-sum, nums1[i], nums2[j]))
                    else:
                        break
        ans = []
        while pq:
            sum, num1, num2 = heapq.heappop(pq)
            ans.append([num1, num2])
        ans.reverse()  # Reverse to get the pairs in ascending order
        return ans
```

## Java Solution

```java
import java.util.*;

public class Solution {
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                int sum = nums1[i] + nums2[j];
                if (pq.size() < k) {
                    pq.offer(new int[]{sum, nums1[i], nums2[j]});
                } else if (sum < pq.peek()[0]) {
                    pq.poll();
                    pq.offer(new int[]{sum, nums1[i], nums2[j]});
                } else {
                    break;
                }
            }
        }
        List<List<Integer>> ans = new ArrayList<>();
        while (!pq.isEmpty()) {
            int[] pair = pq.poll();
            ans.add(Arrays.asList(pair[1], pair[2]));
        }
        Collections.reverse(ans);  // Reverse to get the pairs in ascending order
        return ans;
    }
}
```

## JavaScript Solution

```javascript
class Solution {
  kSmallestPairs(nums1, nums2, k) {
    let pq = new MaxPriorityQueue({ priority: (x) => x[0] });
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        let sum = nums1[i] + nums2[j];
        if (pq.size() < k) {
          pq.enqueue([sum, nums1[i], nums2[j]]);
        } else if (sum < pq.front().element[0]) {
          pq.dequeue();
          pq.enqueue([sum, nums1[i], nums2[j]]);
        } else {
          break;
        }
      }
    }
    let ans = [];
    while (!pq.isEmpty()) {
      let [sum, num1, num2] = pq.dequeue().element;
      ans.push([num1, num2]);
    }
    ans.reverse(); // Reverse to get the pairs in ascending order
    return ans;
  }
}
```

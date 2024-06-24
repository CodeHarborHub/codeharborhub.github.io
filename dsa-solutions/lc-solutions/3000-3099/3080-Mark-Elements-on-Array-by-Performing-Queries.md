---
id: mark-elements-on-array-by-performing-queries
title: Mark Elements on Array by Performing Queries (LeetCode)
sidebar_label: 3080-MarkElementsOnArrayByPerformingQueries
tags:
  - Array
  - Queries
  - Sorting
description: Apply queries on an array to mark elements and calculate the sum of unmarked elements.
sidebar_position: 3080
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Mark Elements on Array by Performing Queries](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/) | [Mark Elements on Array by Performing Queries Solution on LeetCode](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a 0-indexed array `nums` of size `n` consisting of positive integers.

You are also given a 2D array `queries` of size `m` where `queries[i] = [indexi, ki]`.

Initially, all elements of the array are unmarked.

You need to apply `m` queries on the array in order, where on the `i-th` query you do the following:

- Mark the element at index `indexi` if it is not already marked.
- Then mark `ki` unmarked elements in the array with the smallest values. If multiple such elements exist, mark the ones with the smallest indices. If less than `ki` unmarked elements exist, then mark all of them.

Return an array `answer` of size `m` where `answer[i]` is the sum of unmarked elements in the array after the `i-th` query.

### Example 1

- **Input:** `nums = [1,2,2,1,2,3,1]`, `queries = [[1,2],[3,3],[4,2]]`
- **Output:** `[8,3,0]`
- **Explanation:**
  - We do the following queries on the array:
    1. Mark the element at index 1, and 2 of the smallest unmarked elements with the smallest indices if they exist, the marked elements now are `nums = [1,2,2,1,2,3,1]`. The sum of unmarked elements is `2 + 2 + 3 + 1 = 8`.
    2. Mark the element at index 3, since it is already marked we skip it. Then we mark 3 of the smallest unmarked elements with the smallest indices, the marked elements now are `nums = [1,2,2,1,2,3,1]`. The sum of unmarked elements is `3`.
    3. Mark the element at index 4, since it is already marked we skip it. Then we mark 2 of the smallest unmarked elements with the smallest indices if they exist, the marked elements now are `nums = [1,2,2,1,2,3,1]`. The sum of unmarked elements is `0`.

### Example 2

- **Input:** `nums = [1,4,2,3]`, `queries = [[0,1]]`
- **Output:** `[7]`
- **Explanation:**
  - We do one query which is mark the element at index 0 and mark the smallest element among unmarked elements. The marked elements will be `nums = [1,4,2,3]`, and the sum of unmarked elements is `4 + 3 = 7`.

### Constraints

- `n == nums.length`
- `m == queries.length`
- `1 <= m <= n <= 10^5`
- `1 <= nums[i] <= 10^5`
- `queries[i].length == 2`
- `0 <= indexi, ki <= n - 1`

## Approach

To solve this problem, we can use the following approach:

1. **Track Marked Elements**:
   - Use a set to track the indices of marked elements.
   - Use a min-heap to efficiently find and mark the smallest unmarked elements.

2. **Process Each Query**:
   - For each query, mark the specified index if not already marked.
   - Extract `ki` smallest elements from the min-heap and mark them.
   - Calculate the sum of unmarked elements after each query.

### Solution Code

#### Python

```python
from heapq import heappush, heappop

class Solution:
    def markElements(self, nums, queries):
        n = len(nums)
        m = len(queries)
        
        # Initializing the result array
        answer = [0] * m
        
        # To keep track of marked elements
        marked = set()
        
        # Min-heap to get the smallest unmarked elements
        min_heap = [(nums[i], i) for i in range(n)]
        min_heap.sort()
        
        total_sum = sum(nums)
        
        for i, (index, k) in enumerate(queries):
            # Mark the element at index indexi if not already marked
            if index not in marked:
                marked.add(index)
                total_sum -= nums[index]
            
            # Mark k smallest unmarked elements
            to_mark = []
            while min_heap and len(to_mark) < k:
                val, idx = heappop(min_heap)
                if idx not in marked:
                    marked.add(idx)
                    total_sum -= val
                    to_mark.append((val, idx))
            
            # Push the elements back that were popped but not marked
            for val, idx in to_mark:
                heappush(min_heap, (val, idx))
            
            # Store the sum of unmarked elements after this query
            answer[i] = total_sum
        
        return answer
```

#### C++
```c++
#include <vector>
#include <queue>
#include <unordered_set>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> markElements(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size();
        int m = queries.size();
        
        vector<int> answer(m);
        
        unordered_set<int> marked;
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minHeap;
        for (int i = 0; i < n; ++i) {
            minHeap.emplace(nums[i], i);
        }
        
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        
        for (int i = 0; i < m; ++i) {
            int index = queries[i][0];
            int k = queries[i][1];
            
            if (marked.find(index) == marked.end()) {
                marked.insert(index);
                totalSum -= nums[index];
            }
            
            vector<pair<int, int>> toMark;
            while (!minHeap.empty() && toMark.size() < k) {
                auto minElem = minHeap.top();
                minHeap.pop();
                int val = minElem.first;
                int idx = minElem.second;
                if (marked.find(idx) == marked.end()) {
                    marked.insert(idx);
                    totalSum -= val;
                    toMark.push_back(minElem);
                }
            }
            
            for (const auto& elem : toMark) {
                minHeap.push(elem);
            }
            
            answer[i] = totalSum;
        }
        
        return answer;
    }
};

```

#### Java
```java
import java.util.*;

class Solution {
    public int[] markElements(int[] nums, int[][] queries) {
        int n = nums.length;
        int m = queries.length;
        
        int[] answer = new int[m];
        
        Set<Integer> marked = new HashSet<>();
        
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        for (int i = 0; i < n; i++) {
            minHeap.offer(new int[]{nums[i], i});
        }
        
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        
        for (int i = 0; i < m; i++) {
            int index = queries[i][0];
            int k = queries[i][1];
            
            if (!marked.contains(index)) {
                marked.add(index);
                totalSum -= nums[index];
            }
            
            List<int[]> toMark = new ArrayList<>();
            while (!minHeap.isEmpty() && toMark.size() < k) {
                int[] minElem = minHeap.poll();
                int val = minElem[0];
                int idx = minElem[1];
                if (!marked.contains(idx)) {
                    marked.add(idx);
                    totalSum -= val;
                    toMark.add(minElem);
                }
            }
            
            for (int[] elem : toMark) {
                minHeap.offer(elem);
            }
            
            answer[i] = totalSum;
        }
        
        return answer;
    }
}

```

### Conclusion
The provided solutions use a set to track marked elements and a min-heap to efficiently mark the 
smallest unmarked elements. This approach ensures that queries are processed in an optimal manner. 
Adjustments for different languages and constraints are handled to ensure robustness across 
different inputs.
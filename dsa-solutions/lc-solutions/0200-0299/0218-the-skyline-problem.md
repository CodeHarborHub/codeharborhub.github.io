---
id: the-skyline-problem
title: The Skyline Problem
difficulty: Hard
sidebar_label: 0218-The-Skyline-Problem
tags:
  - Heap
  - Divide and Conquer
  - LeetCode Hard
---

## Problem Description
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

Each building is represented by a triplet of integers `[left, right, height]`, indicating that the building starts at `left` and ends at `right`, with a height of `height`.

The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form `[[x1,y1],[x2,y2],...]`. Each key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is an endpoint as well. Also, the ground is always at zero height.

### Example
**Example 1:**
```plaintext
Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
```

**Example 2:**
```plaintext
Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
```

### Constraints
- `1 <= buildings.length <= 10^4`
- `0 <= left_i < right_i <= 2^31 - 1`
- `1 <= height_i <= 2^31 - 1`
- Buildings do not overlap horizontally.

## Solution Approach

### Approach Overview
To solve the skyline problem, we use a combination of a priority queue (max-heap) and a sweep line algorithm. The idea is to process the buildings' start and end points, updating the current height and adding key points to the result list when the height changes.

### Detailed Steps

1. **Create Event Points**:
   - For each building, create two events: one for the start and one for the end.
   - Sort the events first by x-coordinate. If two events have the same x-coordinate, the start event should come before the end event.

2. **Use a Max-Heap**:
   - Use a max-heap to keep track of the current heights of the buildings. This helps in efficiently finding the highest building at each x-coordinate.

3. **Process Events**:
   - Iterate through the sorted events.
   - For each start event, add the building's height to the max-heap.
   - For each end event, remove the building's height from the max-heap.
   - After processing each event, check the current maximum height. If it changes, add a new key point to the result list.

## Code Examples

### Python
```python
from heapq import heappush, heappop

class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        events = []
        for left, right, height in buildings:
            events.append((left, -height, right))  # start event
            events.append((right, 0, 0))           # end event
        events.sort()
        
        result = []
        max_heap = [(0, float('inf'))]
        prev_max_height = 0
        
        for x, neg_height, right in events:
            while max_heap[0][1] <= x:
                heappop(max_heap)
            if neg_height:
                heappush(max_heap, (neg_height, right))
            current_max_height = -max_heap[0][0]
            if prev_max_height != current_max_height:
                result.append([x, current_max_height])
                prev_max_height = current_max_height
        
        return result
```

### Java
```java
import java.util.*;

class Solution {
    public List<List<Integer>> getSkyline(int[][] buildings) {
        List<int[]> events = new ArrayList<>();
        for (int[] building : buildings) {
            events.add(new int[] {building[0], -building[2], building[1]}); // start event
            events.add(new int[] {building[1], 0, 0}); // end event
        }
        events.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
        
        List<List<Integer>> result = new ArrayList<>();
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        maxHeap.offer(new int[] {0, Integer.MAX_VALUE});
        int prevMaxHeight = 0;
        
        for (int[] event : events) {
            int x = event[0], negHeight = event[1], right = event[2];
            while (maxHeap.peek()[1] <= x) {
                maxHeap.poll();
            }
            if (negHeight != 0) {
                maxHeap.offer(new int[] {-negHeight, right});
            }
            int currentMaxHeight = maxHeap.peek()[0];
            if (prevMaxHeight != currentMaxHeight) {
                result.add(Arrays.asList(x, currentMaxHeight));
                prevMaxHeight = currentMaxHeight;
            }
        }
        
        return result;
```

### C++
```cpp
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        vector<pair<int, int>> events;
        for (const auto& b : buildings) {
            events.emplace_back(b[0], -b[2]);
            events.emplace_back(b[1], b[2]);
        }
        sort(events.begin(), events.end());
        
        multiset<int> heights = {0};
        vector<vector<int>> result;
        int prevMaxHeight = 0;
        
        for (const auto& event : events) {
            int x = event.first;
            int h = event.second;
            
            if (h < 0) {
                heights.insert(-h);
            } else {
                heights.erase(heights.find(h));
            }
            
            int currentMaxHeight = *heights.rbegin();
            if (currentMaxHeight != prevMaxHeight) {
                result.push_back({x, currentMaxHeight});
                prevMaxHeight = currentMaxHeight;
            }
        }
        
        return result;
    }
};
```

### C
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int x;
    int h;
    int isStart;
} Event;

int cmp(const void *a, const void *b) {
    Event *e1 = (Event *)a;
    Event *e2 = (Event *)b;
    if (e1->x != e2->x) return e1->x - e2->x;
    if (e1->isStart && e2->isStart) return e2->h - e1->h;
    if (!e1->isStart && !e2->isStart) return e1->h - e2->h;
    return e1->isStart ? -1 : 1;
}

int* getSkyline(int** buildings, int buildingsSize, int* buildingsColSize, int* returnSize) {
    Event *events = malloc(buildingsSize * 2 * sizeof(Event));
    for (int i = 0; i < buildingsSize; ++i) {
        events[i * 2] = (Event){buildings[i][0], buildings[i][2], 1};
        events[i * 2 + 1] = (Event){buildings[i][1], buildings[i][2], 0};
    }
    qsort(events, buildingsSize * 2, sizeof(Event), cmp);
    
    int *result = malloc(buildingsSize * 2 * 2 * sizeof(int));
    int resultSize = 0;
    
    int *heights = calloc(buildingsSize * 2, sizeof(int));
    int heightsSize = 0;
    int prevMaxHeight = 0;
    
    for (int i = 0; i < buildingsSize * 2; ++i) {
        if (events[i].isStart) {
            heights[heightsSize++] = events[i].h;
        } else {
            for (int j = 0; j < heightsSize; ++j) {
                if (heights[j] == events[i].h) {
                    heights[j] = heights[--heightsSize];
                    break;
                }
            }
        }
        
        int currentMaxHeight = 0;
        for (int j = 0; j < heightsSize; ++j) {
            if (heights[j] > currentMaxHeight) {
                currentMaxHeight = heights[j];
            }
        }
        
        if (currentMaxHeight != prevMaxHeight) {
            result[resultSize++] = events[i].x;
            result[resultSize++] = currentMaxHeight;
            prevMaxHeight = currentMaxHeight;
        }
    }
    
    free(events);
    free(heights);
    
    *returnSize = resultSize;
    return result;
}
```

## Complexity

- **Time Complexity**: `O(n log n)`, where `n` is the number of events (2
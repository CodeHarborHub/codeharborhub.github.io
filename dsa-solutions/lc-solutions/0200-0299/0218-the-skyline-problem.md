---

id: the-skyline-problem
title: The Skyline Problem
difficulty: Hard
sidebar_label: 0218-The-Skyline-Problem
tags:
  - Divide and Conquer
  - Heap (Priority Queue)
  - Binary Indexed Tree
  - Segment Tree
  - Line Sweep
  - LeetCode Hard
---

## Problem Description
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The buildings are represented by a list of triplets `[left, right, height]`, where:
- `left` is the x coordinate of the left edge of the building.
- `right` is the x coordinate of the right edge of the building.
- `height` is the height of the building.

The output is a list of "key points" (coordinates) that uniquely define a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is not included.

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
- `buildings` is sorted by `left` in non-decreasing order.

## Approach

### Approach Overview
To solve the skyline problem, we can use a combination of a line sweep algorithm and a max-heap to track the current heights of buildings as we move from left to right across the x-axis.

### Detailed Steps

1. **Extract Key Events**:
   - For each building, extract two events: one for the start (`left`) of the building with its height as positive, and one for the end (`right`) of the building with its height as negative.

2. **Sort Events**:
   - Sort the events primarily by the x-coordinate. If two events have the same x-coordinate, process the event with the taller height first.

3. **Process Events Using a Max-Heap**:
   - Use a max-heap to keep track of the current building heights as we process each event.
   - For each event:
     - If it's a start event (height is positive), add the height to the heap.
     - If it's an end event (height is negative), remove the height from the heap.
     - After processing the event, check the current highest height in the heap. If it has changed from the previous highest height, add a new key point to the result.

## Code Examples

### Python
```python
from heapq import heappush, heappop

class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        events = []
        for left, right, height in buildings:
            events.append((left, -height, right))
            events.append((right, 0, 0))
        
        events.sort()
        result, heap = [[0, 0]], [(0, float('inf'))]
        
        for x, negH, R in events:
            while x >= heap[0][1]:
                heappop(heap)
            if negH:
                heappush(heap, (negH, R))
            if result[-1][1] != -heap[0][0]:
                result.append([x, -heap[0][0]])
        
        return result[1:]
```

### C++
```cpp
class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        vector<pair<int, int>> events;
        for (const auto& building : buildings) {
            events.emplace_back(building[0], -building[2]);
            events.emplace_back(building[1], building[2]);
        }
        sort(events.begin(), events.end());
        
        vector<vector<int>> result;
        multiset<int> heights = {0};
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

### Java
```java
class Solution {
    public List<List<Integer>> getSkyline(int[][] buildings) {
        List<int[]> events = new ArrayList<>();
        for (int[] building : buildings) {
            events.add(new int[]{building[0], -building[2]});
            events.add(new int[]{building[1], building[2]});
        }
        Collections.sort(events, (a, b) -> {
            if (a[0] != b[0]) return Integer.compare(a[0], b[0]);
            return Integer.compare(a[1], b[1]);
        });
        
        List<List<Integer>> result = new ArrayList<>();
        PriorityQueue<Integer> heights = new PriorityQueue<>(Collections.reverseOrder());
        heights.add(0);
        int prevMaxHeight = 0;
        
        for (int[] event : events) {
            if (event[1] < 0) {
                heights.add(-event[1]);
            } else {
                heights.remove(event[1]);
            }
            int currentMaxHeight = heights.peek();
            if (currentMaxHeight != prevMaxHeight) {
                result.add(Arrays.asList(event[0], currentMaxHeight));
                prevMaxHeight = currentMaxHeight;
            }
        }
        
        return result;
    }
}
```

### C
```c
#include <stdlib.h>

typedef struct {
    int x, h;
} Event;

int cmp(const void *a, const void *b) {
    Event *ea = (Event *)a;
    Event *eb = (Event *)b;
    if (ea->x != eb->x) return ea->x - eb->x;
    return ea->h - eb->h;
}

int* getSkyline(int** buildings, int buildingsSize, int* buildingsColSize, int* returnSize) {
    int eventCount = 2 * buildingsSize;
    Event *events = (Event *)malloc(eventCount * sizeof(Event));
    int *heights = (int *)malloc(eventCount * sizeof(int));
    int *result = (int *)malloc(eventCount * 2 * sizeof(int));
    int heightsSize = 0, resultSize = 0, maxHeight = 0;

    for (int i = 0; i < buildingsSize; ++i) {
        events[2 * i].x = buildings[i][0];
        events[2 * i].h = -buildings[i][2];
        events[2 * i + 1].x = buildings[i][1];
        events[2 * i + 1].h = buildings[i][2];
    }
    
    qsort(events, eventCount, sizeof(Event), cmp);

    heights[heightsSize++] = 0;
    for (int i = 0; i < eventCount; ++i) {
        Event event = events[i];
        if (event.h < 0) {
            heights[heightsSize++] = -event.h;
        } else {
            for (int j = 0; j < heightsSize; ++j) {
                if (heights[j] == event.h) {
                    for (int k = j; k < heightsSize - 1; ++k) {
                        heights[k] = heights[k + 1];
                    }
                    --heightsSize;
                    break;
                }
            }
        }
        int currentMaxHeight = 0;
        for (int j = 0; j < heightsSize; ++j) {
            if (heights[j] > currentMaxHeight) currentMaxHeight = heights[j];
        }
        if (currentMaxHeight != maxHeight) {
            result[resultSize++] = event.x;
            result[resultSize++] = currentMaxHeight;
            maxHeight = currentMaxHeight;
        }
    }

    *returnSize = resultSize;
    free(events);
    free(heights);
    return result;
}
```

## Complexity

- **Time Complexity**: `O(n log n)`, where `n` is the number of buildings. Sorting the events takes `O(n log n)` time, and processing each event takes `O(log n)` time due to heap operations.
- **Space Complexity**: `O(n)`, due to the storage of events and the heap structure.


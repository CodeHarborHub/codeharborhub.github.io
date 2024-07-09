---
id: detect-squares
title: Detect Squares
sidebar_label: 2013 Detect Squares
tags:
  - Data Structures
  - HashMap
  - LeetCode
description: "This is a solution to the Detect Squares problem on LeetCode."
sidebar_position: 2013
---

## Problem Description

You are given a stream of points on the X-Y plane. Design an algorithm that:
- Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
- Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.

An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.

Implement the `DetectSquares` class:
- `DetectSquares()` Initializes the object with an empty data structure.
- `void add(int[] point)` Adds a new point `point = [x, y]` to the data structure.
- `int count(int[] point)` Counts the number of ways to form axis-aligned squares with `point = [x, y]` as described above.

### Examples

**Example 1:**

```
Input
["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
Output
[null, null, null, null, 1, 0, null, 2]
```


### Constraints

- `point.length == 2`
- `0 <= x, y <= 1000`
- At most `3000` calls in total will be made to `add` and `count`.

## Approach

To solve this problem, we use a hash map to store the count of points at each coordinate. This allows us to efficiently add points and count the number of squares.

1. **Initialize Data Structures**:
   - Use a hash map to count occurrences of points.

2. **Add Points**:
   - For each point, increment its count in the hash map.

3. **Count Squares**:
   - For a given query point, iterate over all points that have the same x or y coordinate.
   - Check if these points can form a square with the query point.
   - Count the number of valid squares and return the result.

#### C++ Solution

```cpp
class DetectSquares {
public:
    DetectSquares() {
    }
    
    void add(vector<int> point) {
        countMap[{point[0], point[1]}]++;
    }
    
    int count(vector<int> point) {
        int x = point[0];
        int y = point[1];
        int result = 0;
        
        for (auto& p : countMap) {
            int px = p.first.first;
            int py = p.first.second;
            
            // Only consider points that form a square with (x, y)
            if (abs(px - x) != abs(py - y) || px == x || py == y) continue;
            
            // Calculate the number of ways to form squares
            result += countMap[{x, py}] * countMap[{px, y}] * countMap[{px, py}];
        }
        
        return result;
    }

private:
    map<pair<int, int>, int> countMap;
};
```
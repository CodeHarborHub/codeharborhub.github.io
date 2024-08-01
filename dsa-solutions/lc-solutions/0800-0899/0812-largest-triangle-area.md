---
id: largest-triangle-area
title: Largest Triangle Area
sidebar_label: 0812- Largest Triangle Area
tags:
  - Leet code
description: "Solution to leetocde 812"
---

## Problem Statement

Given an array of points on the X-Y plane where `points[i] = [xi, yi]`, return the area of the largest triangle that can be formed by any three different points. Answers within `10^-5` of the actual answer will be accepted.

## Examples

### Example 1

**Input:** `points = [[0,0],[0,1],[1,0],[0,2],[2,0]]`  
**Output:** `2.00000`  
**Explanation:** The five points are shown in the above figure. The red triangle is the largest.

### Example 2

**Input:** `points = [[1,0],[0,0],[0,1]]`  
**Output:** `0.50000`

## Constraints

- $3 <= points.length <= 50$
- $-50 <= xi, yi <= 50$
- All the given points are unique.

## Algorithm

1. Initialize a variable to store the maximum area found (`max_area = 0`).
2. Iterate through all combinations of three points from the input array using combinations from itertools.
3. For each combination of three points, calculate the area of the triangle formed by these points using the formula:
   $Area=0.5×∣x1×(y2−y3)+x2×(y3−y1)+x3×(y1−y2)∣$
4. Update `max_area` if the calculated area is larger than the current `max_area`.
5. Return `max_area`.

## C++ Code

```cpp
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

class Solution {
public:
    double largestTriangleArea(vector<vector<int>>& points) {
        double max_area = 0;
        int n = points.size();
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    double area = 0.5 * abs(
                        points[i][0] * (points[j][1] - points[k][1]) +
                        points[j][0] * (points[k][1] - points[i][1]) +
                        points[k][0] * (points[i][1] - points[j][1])
                    );
                    max_area = max(max_area, area);
                }
            }
        }
        return max_area;
    }
};
```

## Python Code

```python
from itertools import combinations

class Solution:
    def largestTriangleArea(self, points: List[List[int]]) -> float:
        return max(
            0.5 * abs(
                x1 * (y2 - y3) +
                x2 * (y3 - y1) +
                x3 * (y1 - y2)
            )
            for (x1, y1), (x2, y2), (x3, y3) in combinations(points, 3)
        )
```

## Java Code

```java
import java.util.List;
import java.util.ArrayList;

class Solution {
    public double largestTriangleArea(int[][] points) {
        double maxArea = 0;
        int n = points.length;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                for (int k = j + 1; k < n; ++k) {
                    double area = 0.5 * Math.abs(
                        points[i][0] * (points[j][1] - points[k][1]) +
                        points[j][0] * (points[k][1] - points[i][1]) +
                        points[k][0] * (points[i][1] - points[j][1])
                    );
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
        return maxArea;
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  let maxArea = 0;
  const n = points.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      for (let k = j + 1; k < n; ++k) {
        let area =
          0.5 *
          Math.abs(
            points[i][0] * (points[j][1] - points[k][1]) +
              points[j][0] * (points[k][1] - points[i][1]) +
              points[k][0] * (points[i][1] - points[j][1])
          );
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return maxArea;
};
```
